import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { mkdir } from 'node:fs/promises'

const root = fileURLToPath(new URL('..', import.meta.url))
const candidates = [
  {
    name: 'mosque',
    category: 'mosque',
    url: 'https://raw.githubusercontent.com/google/material-design-icons/master/src/maps/mosque/materialicons/24px.svg',
  },
]

for (const item of candidates) {
  const response = await fetch(item.url, { headers: { 'User-Agent': 'islamic-icons-build' } })
  if (!response.ok) throw new Error(`Google Material Icons download failed for ${item.name}: ${response.status}`)
  const dir = join(root, 'assets', 'icons', item.category, `${item.name}-google`, 'sources', 'google-material')
  await mkdir(dir, { recursive: true })
  const svg = await response.text()
  if (!svg.trim().startsWith('<svg') || !svg.includes('</svg>')) throw new Error(`Invalid Google SVG received for ${item.name}`)
  await Bun.write(join(dir, 'original.svg'), svg)
  console.log(`[google] imported ${item.name} from ${item.url}`)
}
