import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'

const root = process.cwd()
const readJson = file => JSON.parse(fs.readFileSync(path.join(root, file), 'utf8'))
const catalog = readJson('Library/assets/catalog.json')
const aliases = readJson('Library/assets/icon-aliases.json')
const userIcons = readJson('Library/assets/user-icons.json')
const docs = fs.readFileSync(path.join(root, 'Web Docs/src/docs.js'), 'utf8')
const index = fs.readFileSync(path.join(root, 'Web Docs/index.html'), 'utf8')
const pkg = readJson('package.json')

const hashTree = dir => {
  const files = []
  const walk = d => {
    for (const name of fs.readdirSync(d)) {
      const full = path.join(d, name)
      const stat = fs.statSync(full)
      if (stat.isDirectory()) walk(full)
      else if (name.endsWith('.svg')) files.push(full)
    }
  }
  walk(dir)
  files.sort()
  return files.map(file => crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex')).join(':')
}

test('catalog contains unique logical icons', () => {
  const keys = catalog.map(i => `${i.category}/${i.name}`)
  assert.equal(new Set(keys).size, keys.length)
  assert.ok(catalog.length >= 50)
})

test('catalog has no duplicate asset trees', () => {
  const seen = new Map()
  for (const item of catalog) {
    const dir = path.join(root, 'Library/assets/icons', item.category, item.name)
    const fingerprint = hashTree(dir)
    assert.ok(!seen.has(fingerprint), `${item.category}/${item.name} duplicates ${seen.get(fingerprint)}`)
    seen.set(fingerprint, `${item.category}/${item.name}`)
  }
})

test('every catalog source variant points to a real SVG', () => {
  for (const item of catalog) {
    for (const source of item.sources) {
      for (const variant of source.variants ?? []) {
        const file = source.id === 'community'
          ? `Library/assets/icons/${item.category}/${item.name}/${variant}.svg`
          : `Library/assets/icons/${item.category}/${item.name}/sources/${source.id}/${variant}.svg`
        assert.ok(fs.existsSync(path.join(root, file)), `${file} is missing`)
      }
    }
  }
})

test('aliases are unique and point at canonical icons', () => {
  const seen = new Set()
  for (const alias of aliases) {
    const key = `${alias.category}/${alias.name}`
    assert.equal(seen.has(key), false, `duplicate alias ${key}`)
    seen.add(key)
    assert.ok(catalog.some(i => i.category === alias.category && i.name === alias.canonical), `missing canonical ${alias.category}/${alias.canonical}`)
    assert.notEqual(alias.name, alias.canonical)
  }
})

test('user icon metadata no longer contains duplicate logical entries', () => {
  const keys = userIcons.map(i => `${i.category}/${i.name}`)
  assert.equal(new Set(keys).size, keys.length)
})

test('Tailwind v4 Play CDN and GSAP are configured', () => {
  assert.match(index, /@tailwindcss\/browser@4/)
  assert.match(index, /gsap@3\.13\.0\/dist\/gsap\.min\.js/)
  assert.match(index, /type="text\/tailwindcss"/)
  assert.doesNotMatch(index, /docs\.css/)
  assert.equal(fs.existsSync(path.join(root, 'Web Docs/src/docs.css')), false)
})

test('requested navigation and responsive behavior are present', () => {
  assert.match(docs, /fixed inset-x-0 top-0/)
  assert.match(docs, /max-w-\[1200px\]/)
  assert.match(docs, /lg:pt-32/)
  assert.match(docs, /CTRL \+ K/)
  assert.match(docs, /Github/)
  assert.match(docs, /border-b-2 border-transparent/)
  assert.match(docs, /border-islamic-green text-islamic-text/)
  assert.match(docs, /navLink\('\/donations','Donations','donations'/)
  assert.match(docs, /data-mobile-toggle/)
  assert.match(docs, /data-mobile-panel/)
  assert.match(docs, /data-cat/)
  assert.match(docs, /data-source-filter/)
  assert.match(docs, /data-var/)
  assert.match(docs, /window\.gsap/)
  assert.doesNotMatch(docs, /⌘ K/)
  assert.doesNotMatch(docs, /Erbasaran glyph entries/)
  assert.doesNotMatch(docs, /API endpoint/)
  assert.match(docs, /border-y border-islamic-line/)
  assert.match(docs, /Framework-agnostic Islamic SVG\/WebP icons, organized for real projects\.<\/p>/)
  assert.doesNotMatch(docs, /mt-3 max-w-xs text-\[11px\] leading-6 text-islamic-dim/)
})



test('generated package entrypoints contain only resolvable local assets', () => {
  for (const file of fs.readdirSync(path.join(root, 'Library/packages/core')).filter(f => f.endsWith('.js'))) {
    const text = fs.readFileSync(path.join(root, 'Library/packages/core', file), 'utf8')
    for (const match of text.matchAll(/new URL\(([^,]+), import.meta.url\)/g)) {
      const asset = JSON.parse(match[1])
      assert.ok(fs.existsSync(path.join(root, 'Library/packages/core', asset.slice(2))), `${file}: missing ${asset}`)
    }
  }
})

test('Google Material import path is explicit and license-aware', () => {
  const google = readJson('Library/assets/external-sources.json').find(s => s.name === 'Google Material Icons')
  assert.ok(google)
  assert.equal(google.license, 'Apache-2.0')
  assert.match(fs.readFileSync(path.join(root, 'Library/scripts/import-google.ts'), 'utf8'), /google\/material-design-icons/)
  assert.equal(pkg.scripts['icons:import:google'], 'bun Library/scripts/import-google.ts')
})

test('package scripts preserve the Bun build pipeline and add TDD checks', () => {
  assert.equal(pkg.scripts.test, 'node --test')
  assert.equal(pkg.scripts['icons:catalog'], 'bun Library/scripts/build-catalog.ts')
  assert.equal(pkg.scripts['icons:package'], 'bun Library/scripts/build-package.ts')
  assert.equal(pkg.scripts['icons:validate'], 'bun Library/scripts/validate-icons.ts')
  assert.match(pkg.scripts.prepublishOnly, /bun run icons:catalog/)
  assert.match(pkg.scripts.prepublishOnly, /bun run icons:package/)
  assert.match(pkg.scripts.prepublishOnly, /bun run icons:validate/)
  assert.match(pkg.scripts.prepublishOnly, /bun run build/)
})


test('search modal regression is centered with 40% opacity and 4px blur', () => {
  assert.match(docs, /grid place-items-center bg-black\/40 px-4 backdrop-blur-\[4px\]/)
  assert.doesNotMatch(docs, /place-items-start bg-black\/70/)
})

test('hero title restores original sizing and copy', () => {
  assert.match(docs, /text-\[clamp\(54px,6\.6vw,96px\)\]/)
  assert.match(docs, /Islamic icons for the modern web\./)
})

test('donation page, README policy, and transparency document exist', () => {
  assert.match(docs, /function donationsPage\(\)/)
  assert.match(docs, /path===['"]\/donations['"]/); assert.match(docs, /['"]\/docs\/donations['"]/)
  assert.match(docs, /buymeacoffee\.com\/rheinsullivan/)
  assert.match(docs, /100% financial transparency/)
  assert.match(docs, /70% minimum to aid/)
  assert.match(docs, /Up to 30%/)
  assert.match(docs, /Low-income families/)
  assert.match(docs, /Orphanage care/)
  assert.match(docs, /Elderly care/)
  assert.match(docs, /Palestine 🇵🇸 relief/)
  assert.match(docs, /Disaster relief/)
  assert.match(docs, /charity-meals\/uploads\/162\/family-food-parcel2\.png/)
  assert.match(docs, /hopeandprosperity\.org\/wp-content\/uploads\/2020\/06\/5J2A7153\.jpg/)
  assert.match(docs, /thefinancialcoconut\.com\/hubfs\/caregivers-png-1\.png/)
  assert.match(docs, /help\.unicef\.org\/mexico\/sites\/mexico\/files\/styles\/facebook_share_image/)
  assert.match(docs, /vcci\.com\.vn\/hm_content\/uploads\/247-news\/FLOODS\.png/)
  assert.match(fs.readFileSync(path.join(root, 'README.md'), 'utf8'), /Donations & humanitarian aid/)
  assert.match(fs.readFileSync(path.join(root, 'README.md'), 'utf8'), /docs\/en\/donations\.md/)
  assert.ok(fs.existsSync(path.join(root, 'docs/en/donations.md')))
})


test('Web Docs and Library are physically separated', () => {
  assert.equal(fs.existsSync(path.join(root, 'index.html')), false)
  assert.ok(fs.existsSync(path.join(root, 'Web Docs/index.html')))
  assert.ok(fs.existsSync(path.join(root, 'Web Docs/src/docs.js')))
  assert.ok(fs.existsSync(path.join(root, 'Library/assets/catalog.json')))
  assert.ok(fs.existsSync(path.join(root, 'Library/packages/core/package.json')))
  assert.ok(fs.existsSync(path.join(root, 'Web Docs/assets/logo-islamic-icons.svg')))
})

test('logo metadata and required usage syntax are present', () => {
  assert.match(fs.readFileSync(path.join(root, 'Web Docs/index.html'), 'utf8'), /og:image/)
  assert.match(fs.readFileSync(path.join(root, 'Web Docs/src/docs.js'), 'utf8'), /logo-islamic-icons\.svg/)
  const docsText = fs.readFileSync(path.join(root, 'Web Docs/src/docs.js'), 'utf8')
  assert.ok(docsText.includes('&lt;Allah className="" size="" style="" /&gt;'))
  assert.ok(docsText.includes('&lt;islamic-icons categories="Allah" class="" size="" style="" /&gt;'))
  assert.ok(fs.existsSync(path.join(root, 'Library/assets/metadata.json')))
})

test('installation docs cover Bun npm pnpm and Yarn', () => {
  const text=fs.readFileSync(path.join(root,'docs/en/installation.md'),'utf8')
  for (const cmd of ['bun add islamic-icons','npm install islamic-icons','pnpm add islamic-icons','yarn add islamic-icons']) assert.match(text,new RegExp(cmd.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')))
})

test('no em dash remains in UI and project documentation', () => {
  for (const file of ['Web Docs/index.html','Web Docs/src/docs.js','README.md','docs/README.md','Library/assets/external-sources.json']) {
    assert.doesNotMatch(fs.readFileSync(path.join(root, file), 'utf8'), /—/)
  }
})


test('uploaded numeric icons are semantically renamed, categorized, and deduplicated', () => {
  const imported = readJson('Library/assets/community-upload.json')
  const numeric = fs.readdirSync(path.join(root, 'Library/assets/icons')).flatMap(cat => fs.readdirSync(path.join(root, 'Library/assets/icons', cat)).map(name => `${cat}/${name}`))
  for (const item of Object.values(imported)) {
    assert.match(item.name, /^[a-z][a-z0-9-]*$/)
    assert.ok(fs.existsSync(path.join(root, 'Library/assets/icons', item.category, item.name, 'sources/community-upload/original.svg')))
  }
  assert.equal(new Set(catalog.map(i => `${i.category}/${i.name}`)).size, catalog.length)
  assert.equal(numeric.some(k => /\/\d+($|\/)/.test(k)), false)
})

test('donation allocation is editorial rather than card-based', () => {
  const section = docs.slice(docs.indexOf('function donationsPage()'), docs.indexOf('function contributingPage()'))
  assert.match(section, /border-y border-islamic-line/)
  assert.doesNotMatch(section, /rounded-3xl border border-islamic-line bg-islamic-panel/)
})
