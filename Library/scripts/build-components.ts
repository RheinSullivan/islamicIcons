import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { writeFile, cp, mkdir, rm, readdir } from 'node:fs/promises'

const root = fileURLToPath(new URL('..', import.meta.url))
const coreRoot = join(root, 'packages', 'core')

const catalog = JSON.parse(await Bun.file(join(root, 'assets', 'catalog.json')).text())
const aliases = JSON.parse(await Bun.file(join(root, 'assets', 'icon-aliases.json')).text())

const pascalCase = (s: string) => s.replace(/(^|[-_])(\w)/g, (_, __, c) => c.toUpperCase()).replace(/[^A-Za-z0-9]/g, '')
const titleCase = (s: string) => s.replace(/[-_]/g, ' ').replace(/([a-z])([A-Z])/g, '$1 $2').replace(/\b\w/g, c => c.toUpperCase())

const sourcePath = (item: any, variant: string) => {
  for (const source of item.sources) {
    if (source.variants?.includes(variant)) {
      if (source.id === 'community') return `./icons/${item.category}/${item.name}/${variant}.svg`
      return `./icons/${item.category}/${item.name}/sources/${source.id}/${variant}.svg`
    }
  }
  return null
}

const categories: string[] = ([...new Set(catalog.map((i: any) => i.category))] as string[]).sort()

const cleanDirs = ['react', 'vue', 'svelte', 'astro', 'angular', 'solid', 'preact', 'react-native', 'static']
for (const dir of cleanDirs) {
  await rm(join(coreRoot, dir), { recursive: true, force: true })
  await mkdir(join(coreRoot, dir), { recursive: true })
}

const reactLines: string[] = ['import React from "react"', '']
const vueLines: string[] = ['import { defineComponent, h } from "vue"', '']
const svelteImports: string[] = []
const astroImports: string[] = []
const angularLines: string[] = ['import { Component, Input } from "@angular/core"', '']
const solidLines: string[] = ['import { mergeProps } from "solid-js"', '']
const preactLines: string[] = ['import { h } from "preact"', '']
const reactNativeLines: string[] = ['import React from "react"', 'import { Image } from "react-native"', '']
const staticLines: string[] = ['export * from "../charity.js"', 'export * from "../flags.js"', 'export * from "../food.js"', 'export * from "../god.js"', 'export * from "../lifestyle.js"', 'export * from "../mosque.js"', 'export * from "../patterns.js"', 'export * from "../people.js"', 'export * from "../prayer.js"', 'export * from "../prophet.js"', 'export * from "../quran.js"', 'export * from "../ramadan.js"', '']

const angularComponents: string[] = []

async function ensureSvelte(dir: string) {
  try { await mkdir(dir, { recursive: true }) } catch {}
}
async function ensureAstro(dir: string) {
  try { await mkdir(dir, { recursive: true }) } catch {}
}

for (const category of categories) {
  const items = catalog.filter((i: any) => i.category === category)
  const catAliases = aliases.filter((a: any) => a.category === category)
  
  await ensureSvelte(join(coreRoot, 'svelte', category))
  await ensureAstro(join(coreRoot, 'astro', category))
  
  for (const item of items) {
    const base = pascalCase(item.name)
    const title = titleCase(item.name)
    const fillPath = sourcePath(item, 'fill')
    const outlinePath = sourcePath(item, 'outline')
    const colorPath = sourcePath(item, 'color')
    const originalPath = sourcePath(item, 'original')
    const alternatePath = sourcePath(item, 'alternate')
    
    const variants = [
      { name: '', path: fillPath, label: title },
      { name: 'Outline', path: outlinePath, label: `${title} Outline` },
      { name: 'Color', path: colorPath, label: `${title} Color` },
      { name: 'Original', path: originalPath, label: `${title} Original` },
      { name: 'Alternate', path: alternatePath, label: `${title} Alternate` },
    ]
    
    for (const variant of variants) {
      if (!variant.path) continue
      const suffix = variant.name
      const componentName = base + suffix
      const fileName = suffix === '' ? item.name : `${item.name}-${suffix.toLowerCase()}`
      const pascalName = base + suffix
      
      // React
      reactLines.push(`export const ${pascalName} = ({ size = 24, className, alt = "${variant.label}", ...props }) => React.createElement("img", { src: "../${variant.path.replace(/^\.\//, '')}", alt, width: size, height: size, className, ...props })`)
      
      // Vue
      vueLines.push(`export const ${pascalName} = defineComponent({ name: "${pascalName}Icon", props: { size: { type: Number, default: 24 }, alt: { type: String, default: "${variant.label}" }, class: { type: String, default: "" } }, setup(props) { return () => h("img", { src: "../${variant.path.replace(/^\.\//, '')}", alt: props.alt, width: props.size, height: props.size, class: props.class }) } })`)
      
      // Svelte
      const svelteFile = join(coreRoot, 'svelte', category, `${fileName}.svelte`)
      await writeFile(svelteFile, `<script>\n  export let size = 24\n  export let alt = "${variant.label}"\n  export let className = ""\n  export let src = "../../${variant.path.replace(/^\.\//, '')}"\n</script>\n\n<img {src} {alt} width={size} height={size} class={className} />\n`)
      svelteImports.push(`export { default as ${pascalName} } from "./svelte/${category}/${fileName}.svelte"`)
      
      // Astro
      const astroFile = join(coreRoot, 'astro', category, `${fileName}.astro`)
      await writeFile(astroFile, `---\ninterface Props {\n  size?: number\n  alt?: string\n  class?: string\n}\nconst { size = 24, alt = "${variant.label}", class: className = "" }: Props = Astro.props\n---\n\n<img src="../../${variant.path.replace(/^\.\//, '')}" {alt} width={size} height={size} class={className} />\n`)
      astroImports.push(`export { default as ${pascalName} } from "./astro/${category}/${fileName}.astro"`)
      
      // Angular
      const angularComponent = `@Component({ selector: "islamic-icons-${item.name.replace(/[-_]/g, "-")}${suffix.toLowerCase()}", standalone: true, template: "<img [src]=\\"src\\" [alt]=\\"alt\\" [width]=\\"size\\" [height]=\\"size\\" [class]=\\"className\\" />" })\nexport class ${pascalName}Component {\n  @Input() src = "../${variant.path.replace(/^\.\//, '')}"\n  @Input() size = 24\n  @Input() alt = "${variant.label}"\n  @Input() className = ""\n}`
      angularComponents.push(angularComponent)
      
      // Solid
      solidLines.push(`export const ${pascalName} = (props) => mergeProps({ src: "../${variant.path.replace(/^\.\//, '')}", alt: "${variant.label}", size: 24, className: "" }, props)`)
      
      // Preact
      preactLines.push(`export const ${pascalName} = ({ size = 24, className, alt = "${variant.label}", ...props }) => h("img", { src: "../${variant.path.replace(/^\.\//, '')}", alt, width: size, height: size, className, ...props })`)
      
      // React Native
      reactNativeLines.push(`export const ${pascalName} = ({ size = 24, style, ...props }) => React.createElement(Image, { source: { uri: "../${variant.path.replace(/^\.\//, '')}" }, style: [{ width: size, height: size }, style], ...props })`)
    }
    
    for (const alias of catAliases.filter((a: any) => a.canonical === item.name)) {
      const aliasBase = pascalCase(alias.name)
      reactLines.push(`export const ${aliasBase} = ${base}`)
      reactLines.push(`export const ${aliasBase}Outline = ${base}Outline`)
      reactLines.push(`export const ${aliasBase}Color = ${base}Color`)
      if (originalPath) reactLines.push(`export const ${aliasBase}Original = ${base}Original`)
      if (alternatePath) reactLines.push(`export const ${aliasBase}Alternate = ${base}Alternate`)
      
      vueLines.push(`export const ${aliasBase} = ${base}`)
      vueLines.push(`export const ${aliasBase}Outline = ${base}Outline`)
      vueLines.push(`export const ${aliasBase}Color = ${base}Color`)
      if (originalPath) vueLines.push(`export const ${aliasBase}Original = ${base}Original`)
      if (alternatePath) vueLines.push(`export const ${aliasBase}Alternate = ${base}Alternate`)
      
      svelteImports.push(`export { ${base} as ${aliasBase} } from "./svelte/${category}/${item.name}.svelte"`)
      svelteImports.push(`export { ${base}Outline as ${aliasBase}Outline } from "./svelte/${category}/${item.name}-outline.svelte"`)
      svelteImports.push(`export { ${base}Color as ${aliasBase}Color } from "./svelte/${category}/${item.name}-color.svelte"`)
      
      astroImports.push(`export { ${base} as ${aliasBase} } from "./astro/${category}/${item.name}.astro"`)
      astroImports.push(`export { ${base}Outline as ${aliasBase}Outline } from "./astro/${category}/${item.name}-outline.astro"`)
      astroImports.push(`export { ${base}Color as ${aliasBase}Color } from "./astro/${category}/${item.name}-color.astro"`)
      
      const aliasAngular = `export class ${pascalCase(alias.name)}Component extends ${base}Component {}`
      angularComponents.push(aliasAngular)
      
      solidLines.push(`export const ${aliasBase} = ${base}`)
      solidLines.push(`export const ${aliasBase}Outline = ${base}Outline`)
      solidLines.push(`export const ${aliasBase}Color = ${base}Color`)
      if (originalPath) solidLines.push(`export const ${aliasBase}Original = ${base}Original`)
      if (alternatePath) solidLines.push(`export const ${aliasBase}Alternate = ${base}Alternate`)
      
      preactLines.push(`export const ${aliasBase} = ${base}`)
      preactLines.push(`export const ${aliasBase}Outline = ${base}Outline`)
      preactLines.push(`export const ${aliasBase}Color = ${base}Color`)
      if (originalPath) preactLines.push(`export const ${aliasBase}Original = ${base}Original`)
      if (alternatePath) preactLines.push(`export const ${aliasBase}Alternate = ${base}Alternate`)
      
      reactNativeLines.push(`export const ${aliasBase} = ${base}`)
      reactNativeLines.push(`export const ${aliasBase}Outline = ${base}Outline`)
      reactNativeLines.push(`export const ${aliasBase}Color = ${base}Color`)
      if (originalPath) reactNativeLines.push(`export const ${aliasBase}Original = ${base}Original`)
      if (alternatePath) reactNativeLines.push(`export const ${aliasBase}Alternate = ${base}Alternate`)
    }
  }
}

// Write React
await writeFile(join(coreRoot, 'react', 'index.js'), reactLines.join('\n') + '\n')

// Write Vue
await writeFile(join(coreRoot, 'vue', 'index.js'), vueLines.join('\n') + '\n')

// Write Svelte
await writeFile(join(coreRoot, 'svelte', 'index.js'), [...svelteImports].sort().join('\n') + '\n')

// Write Astro
await writeFile(join(coreRoot, 'astro', 'index.js'), [...astroImports].sort().join('\n') + '\n')

// Write Solid
await writeFile(join(coreRoot, 'solid', 'index.jsx'), solidLines.join('\n') + '\n')

// Write Preact
await writeFile(join(coreRoot, 'preact', 'index.js'), preactLines.join('\n') + '\n')

// Write React Native
await writeFile(join(coreRoot, 'react-native', 'index.js'), reactNativeLines.join('\n') + '\n')

// Write Static
await writeFile(join(coreRoot, 'static', 'index.js'), staticLines.join('\n') + '\n')
await cp(join(coreRoot, 'icons'), join(coreRoot, 'static', 'icons'), { recursive: true })

// Write Angular
const angularComponentNames = angularComponents.map(c => c.match(/class (\w+)/)?.[1] || '').filter(Boolean)
const angularModule = `import { Component, Input, NgModule } from "@angular/core"\n${angularComponents.join('\n')}\n@NgModule({\n  imports: [${angularComponentNames.join(', ')}],\n  exports: [${angularComponentNames.join(', ')}]\n})\nexport class IslamicIconsModule {}\n`
await writeFile(join(coreRoot, 'angular', 'index.js'), angularModule)
await writeFile(join(coreRoot, 'angular', 'index.ts'), angularModule)

console.log('Framework components generated successfully.')
