# Islamic Icons

**Islamic Icons** is a source-aware, framework-agnostic Islamic icon library built from local SVG/WebP assets.

> **Maintainers:** Islamic Icons Community | Vyagra Nexus™  
> **Build runtime:** Bun  
> **CSS:** Tailwind CSS v4  
> **Asset model:** SVG-first, WebP when the original artwork is raster

## Why it exists

Islamic icon libraries often make the same mistakes: a fixed icon count becomes the product, visual variants are presented as unrelated duplicates, and external artwork loses its creator or license information. Islamic Icons takes the opposite approach.

The catalog is **logical-icon first**. Fill, outline and color are variants of one icon. A contributor can add or remove icons without changing the framework API. Every external asset should keep its creator, original source, license and provenance.

The library is intentionally usable from React, Vue, Svelte, Solid, Angular, Preact, React Native, Astro and plain HTML.

## Install

```bash
bun install islamic-icons
npm install islamic-icons
pnpm add islamic-icons
yarn add islamic-icons
```

## Usage

### Core (Static / Vanilla JS)

```js
import { allahCalligraphy, allahCalligraphyOutline } from "islamic-icons/god"
```

### React

```bash
bun install islamic-icons react
```

```jsx
import { Allah } from "islamic-icons/react"
<Allah size={24} />
```

### Vue / Nuxt

```bash
bun install islamic-icons vue
```

```vue
<script setup>
import { Allah } from "islamic-icons/vue"
</script>
```

### Svelte / SvelteKit

```bash
bun install islamic-icons svelte
```

```svelte
<script>
  import { Allah } from "islamic-icons/svelte"
</script>
```

### Astro

```bash
bun install islamic-icons astro
```

```astro
---
import { Allah } from "islamic-icons/astro"
---
```

### Angular

```bash
bun install islamic-icons @angular/core
```

```ts
import { IslamicIconsModule } from "islamic-icons/angular"
@NgModule({ imports: [IslamicIconsModule] })
export class AppModule {}
```

```html
<islamic-icons-allah [size]="24"></islamic-icons-allah>
```

### Solid

```bash
bun install islamic-icons solid-js
```

```jsx
import { Allah } from "islamic-icons/solid"
```

### Preact

```bash
bun install islamic-icons preact
```

```jsx
import { Allah } from "islamic-icons/preact"
```

### React Native

```bash
bun install islamic-icons react-native
```

```jsx
import { Allah } from "islamic-icons/react-native"
```

## Sources

The project includes community-supplied assets and external licensed vectors.

## Build and validate

```bash
bun install
bun run icons:catalog
bun run icons:package
bun run icons:validate
bun run icons:components
bun run build
```

## Project structure

```text
Library/
├── packages/
│   ├── core/           # islamic-icons package (published to npm)
│   ├── react/          # @islamic-icons/react
│   ├── vue/            # @islamic-icons/vue
│   ├── svelte/         # @islamic-icons/svelte
│   ├── astro/          # @islamic-icons/astro
│   ├── angular/        # @islamic-icons/angular
│   ├── solid/          # @islamic-icons/solid
│   ├── preact/         # @islamic-icons/preact
│   ├── react-native/   # @islamic-icons/react-native
│   └── static/         # @islamic-icons/static
├── assets/             # Source SVG/WebP assets
├── scripts/            # Build, catalog, import and validation scripts
└── package.json        # Monorepo workspace root
```
