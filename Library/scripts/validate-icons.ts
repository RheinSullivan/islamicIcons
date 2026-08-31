import { createHash } from 'node:crypto'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { readdir } from 'node:fs/promises'

const root = fileURLToPath(new URL('..', import.meta.url))
const iconRoot = join(root, 'assets', 'icons')
const catalog = JSON.parse(await Bun.file(join(root, 'assets', 'catalog.json')).text()) as any[]
const aliases = JSON.parse(await Bun.file(join(root, 'assets', 'icon-aliases.json')).text()) as any[]
let files = 0
let invalid = 0
const fingerprints = new Map<string, string>()

for (const cat of await readdir(iconRoot, { withFileTypes: true })) {
  if (!cat.isDirectory()) continue
  for (const icon of await readdir(join(iconRoot, cat.name), { withFileTypes: true })) {
    if (!icon.isDirectory()) continue
    const dir = join(iconRoot, cat.name, icon.name)
    const fileList: string[] = []
    const walk = async (d: string) => {
      for (const e of await readdir(d, { withFileTypes: true })) {
        const p = join(d, e.name)
        if (e.isDirectory()) await walk(p)
        else if (e.name.endsWith('.svg')) {
          files++
          fileList.push(p)
          const text = await Bun.file(p).text()
          if (!text.trim().startsWith('<svg') || !text.includes('</svg>')) { invalid++; console.error(`Invalid SVG: ${p}`) }
        }
      }
    }
    await walk(dir)
    fileList.sort()
    const digest = createHash('sha256')
    for (const p of fileList) digest.update(new Uint8Array(await Bun.file(p).arrayBuffer()))
    const fingerprint = digest.digest('hex')
    const key = `${cat.name}/${icon.name}`
    if (fingerprints.has(fingerprint)) throw new Error(`Duplicate logical icon asset tree: ${key} duplicates ${fingerprints.get(fingerprint)}`)
    fingerprints.set(fingerprint, key)
  }
}

if (invalid) throw new Error(`${invalid} invalid SVG files`)
const catalogKeys = new Set(catalog.map(i => `${i.category}/${i.name}`))
for (const alias of aliases) {
  if (!catalogKeys.has(`${alias.category}/${alias.canonical}`)) throw new Error(`Alias points to missing canonical icon: ${alias.category}/${alias.name} -> ${alias.canonical}`)
}
if (new Set(catalog.map(i => `${i.category}/${i.name}`)).size !== catalog.length) throw new Error('Catalog contains duplicate logical keys')
console.log(`Validated ${files} SVG files and ${catalog.length} logical icons without duplicate trees.`)
