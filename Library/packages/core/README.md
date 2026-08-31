# Islamic Icons

**Islamic Icons** is a source-aware, framework-agnostic Islamic icon library built from local SVG/WebP assets.

> **Maintainers:** Islamic Icons Community | Vyagra Nexus™  
> **Build runtime:** Bun  
> **CSS:** Tailwind CSS v4  
> **Asset model:** SVG-first, WebP when the original artwork is raster

## Why it exists

Islamic icon libraries often make the same mistakes: a fixed icon count becomes the product, visual variants are presented as unrelated duplicates, and external artwork loses its creator or license information. Islamic Icons takes the opposite approach.

The catalog is **logical-icon first**. Fill, outline and color are variants of one icon. A contributor can add or remove icons without changing the framework API. Every external asset should keep its creator, original source, license and provenance.

The library is intentionally usable from React, Vue, Nuxt, Svelte, SvelteKit, Angular, Astro and plain HTML.

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
<Allah size={24} />
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

## Contribution

1. Add the original SVG/WebP asset.
2. Keep the source artwork intact.
3. Record creator, license and original URL.
4. Assign a semantic category and stable name.
5. Generate Fill/Outline/Color only when the transformation is visually safe.
6. Run the Bun catalog, package and validation pipeline.
7. Open a pull request with attribution information.

There is intentionally **no fixed target of 78 icons**. The library can contain more or fewer icons as useful, properly licensed contributions arrive or existing assets are removed.

## License

MIT
