import { createHash } from 'node:crypto'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { readdir, writeFile } from 'node:fs/promises'

const root = fileURLToPath(new URL('..', import.meta.url))
const iconRoot = join(root, 'assets', 'icons')
const aliases = JSON.parse(await Bun.file(join(root, 'assets', 'icon-aliases.json')).text()) as Array<{ name: string; category: string; canonical: string }>
const external = JSON.parse(await Bun.file(join(root, 'assets', 'external-sources.json')).text())

const title = (name: string) => name.replace(/[-_]/g, ' ').replace(/([a-z])([A-Z])/g, '$1 $2').replace(/\b\w/g, c => c.toUpperCase())
const sourceLabels: Record<string, string> = {
  community: 'Community / Rhein Sullivan',
  'svg-repo': 'SVG Repo',
  'mary-akveo': 'Mary Akveo',
  'google-material': 'Google Material Icons',
  'community-upload': 'Community Upload',
}
const hash = async (path: string) => createHash('sha256').update(new Uint8Array(await Bun.file(path).arrayBuffer())).digest('hex')
const variants = ['fill', 'outline', 'color', 'original', 'alternate'] as const

const catalog: any[] = []
const fingerprints = new Map<string, string>()

for (const cat of await readdir(iconRoot, { withFileTypes: true })) {
  if (!cat.isDirectory()) continue
  const catDir = join(iconRoot, cat.name)
  for (const item of await readdir(catDir, { withFileTypes: true })) {
    if (!item.isDirectory()) continue
    const name = item.name
    const dir = join(catDir, name)
    const entry: any = { name, category: cat.name, title: title(name), sources: [] }

    const communityVariants: string[] = []
    for (const v of variants) if (await Bun.file(join(dir, `${v}.svg`)).exists()) communityVariants.push(v)
    if (communityVariants.length) entry.sources.push({ id: 'community', label: sourceLabels.community, variants: communityVariants })

    const sourceRoot = join(dir, 'sources')
    try {
      for (const sourceDir of await readdir(sourceRoot, { withFileTypes: true })) {
        if (!sourceDir.isDirectory()) continue
        const sourceDirPath = join(sourceRoot, sourceDir.name)
        const sourceVariants: string[] = []
        for (const v of variants) if (await Bun.file(join(sourceDirPath, `${v}.svg`)).exists()) sourceVariants.push(v)
        if (sourceVariants.length) entry.sources.push({ id: sourceDir.name, label: sourceLabels[sourceDir.name] || title(sourceDir.name), variants: sourceVariants })
      }
    } catch (error: any) {
      if (error?.code !== 'ENOENT') throw error
    }

    if (!entry.sources.length) continue
    const itemAliases = aliases.filter(a => a.category === cat.name && a.canonical === name).map(a => a.name)
    if (itemAliases.length) entry.aliases = itemAliases.sort()

    const files: string[] = []
    const walk = async (d: string) => {
      for (const e of await readdir(d, { withFileTypes: true })) {
        const p = join(d, e.name)
        if (e.isDirectory()) await walk(p)
        else if (e.name.endsWith('.svg')) files.push(p)
      }
    }
    await walk(dir)
    files.sort()
    const fingerprint = (await Promise.all(files.map(hash))).join(':')
    if (fingerprints.has(fingerprint)) throw new Error(`Duplicate logical icon detected: ${cat.name}/${name} duplicates ${fingerprints.get(fingerprint)}`)
    fingerprints.set(fingerprint, `${cat.name}/${name}`)
    catalog.push(entry)
  }
}

catalog.sort((a, b) => a.category.localeCompare(b.category) || a.title.localeCompare(b.title))
await writeFile(join(root, 'assets', 'catalog.json'), JSON.stringify(catalog, null, 2) + '\n')
await writeFile(join(root, '..', 'web-docs', 'src', 'docs-data.js'), `window.ISLAMIC_ICONS_DATA = ${JSON.stringify(catalog)};\nwindow.ISLAMIC_ICONS_SOURCES = ${JSON.stringify(external)};\n`)
console.log(`Cataloged ${catalog.length} logical icons with source-aware variants and duplicate protection.`)
