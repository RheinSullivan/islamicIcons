# Atsarul Mujahidin

A framework-agnostic Islamic SVG and WebP icon library for the modern web.

The collection is organized around semantic categories and ships with three style variants (fill, outline, color) per logical icon when the source artwork permits. Every icon is a local asset; no runtime fetch is required to render.

## Installation

```bash
bun add atsarul-mujahidin
npm install atsarul-mujahidin
pnpm add atsarul-mujahidin
yarn add atsarul-mujahidin
```

For Deno, use the npm compatibility specifier:

```bash
deno add npm:atsarul-mujahidin
```

## Usage

### Native HTML

```html
<img src="/assets/icons/mosque/mosque/fill.svg" alt="Mosque" width="24" height="24" />
```

### JavaScript / TypeScript

```ts
import { categories, catalog, metadata } from 'atsarul-mujahidin';
import { mosque, mosqueOutline, mosqueColor } from 'atsarul-mujahidin/icons/mosque.js';

console.log(categories);
console.log(mosque);     // URL string to fill variant
console.log(mosqueOutline);
console.log(mosqueColor);
```

### Svelte / SvelteKit

**Using icon URLs (framework-agnostic):**
```svelte
<script lang="ts">
	import { mosque } from 'atsarul-mujahidin/icons/mosque.js';
</script>

<img src={mosque} alt="Mosque" width="24" height="24" />
```

**Using Svelte 5 components (recommended):**
```svelte
<script lang="ts">
	import Mosque from 'atsarul-mujahidin/svelte/fill/MosqueSimple';
	import Kaaba from 'atsarul-mujahidin/svelte/fill/Kaaba';
	import PalestineFlag from 'atsarul-mujahidin/svelte/color/PalestineFlag';
</script>

<Mosque size={24} colors="currentColor" />
<Kaaba size={32} colors="#10b981" class="my-icon" />
<PalestineFlag width={48} height={48} />
```

Component props:
- `size` - Width and height (default: 24)
- `colors` - Icon color (default: "currentColor")
- `strokeWidth` - Stroke width for outline icons (default: 1.5)
- `class` - CSS class name
- All other props are passed through to the `<svg>` element

### React / Next.js

**Using icon URLs:**
```jsx
import { mosque } from 'atsarul-mujahidin/icons/mosque.js';

export function MosqueIcon() {
	return <img src={mosque} alt="Mosque" width={24} height={24} />;
}
```

**Using React components:**
```jsx
import { Kaaba } from 'atsarul-mujahidin/react/fill/Kaaba.jsx';
import { PalestineFlag } from 'atsarul-mujahidin/react/color/PalestineFlag.jsx';

export function Icons() {
	return (
		<>
			<Kaaba size={24} colors="currentColor" />
			<PalestineFlag size={32} colors="#10b981" className="my-icon" />
		</>
	);
}
```

### Vue / Nuxt

**Using icon URLs:**
```vue
<script setup lang="ts">
import { mosque } from 'atsarul-mujahidin/icons/mosque.js';
</script>

<template>
	<img :src="mosque" alt="Mosque" width="24" height="24" />
</template>
```

**Using Vue components:**
```vue
<script setup lang="ts">
import Kaaba from 'atsarul-mujahidin/vue/fill/Kaaba.vue';
import PalestineFlag from 'atsarul-mujahidin/vue/color/PalestineFlag.vue';
</script>

<template>
	<Kaaba :size="24" colors="currentColor" />
	<PalestineFlag :size="32" colors="#10b981" />
</template>
```

### Astro

```astro
---
import { mosque } from 'atsarul-mujahidin/icons/mosque.js';
---
<img src={mosque} alt="Mosque" width="24" height="24" />
```

### Aliases

Several canonical icons have aliases for convenience:

```ts
import { allah, quran, tasbih, qibla, muslim } from 'atsarul-mujahidin/icons/god.js';
// or any of the relevant category files
```

## Exports

| Path | Description |
| --- | --- |
| `atsarul-mujahidin` | `catalog`, `sources`, `metadata`, `categories`, `library` |
| `atsarul-mujahidin/metadata` | `metadata` (name, version, icon count, etc.) |
| `atsarul-mujahidin/categories` | `categories` array with id, name, count |
| `atsarul-mujahidin/icons/<category>` | Per-icon URL exports for `<category>` |
| `atsarul-mujahidin/icons/<category>.js` | Same as above (CJS-friendly) |
| `atsarul-mujahidin/sources/<slug>.json` | License & attribution metadata per external source |
| `atsarul-mujahidin/svelte/fill/*` | Svelte 5 components (fill variant) |
| `atsarul-mujahidin/svelte/outline/*` | Svelte 5 components (outline variant) |
| `atsarul-mujahidin/svelte/color/*` | Svelte 5 components (color variant) |
| `atsarul-mujahidin/react/fill/*` | React components (fill variant) |
| `atsarul-mujahidin/react/outline/*` | React components (outline variant) |
| `atsarul-mujahidin/react/color/*` | React components (color variant) |
| `atsarul-mujahidin/vue/fill/*` | Vue 3 components (fill variant) |
| `atsarul-mujahidin/vue/outline/*` | Vue 3 components (outline variant) |
| `atsarul-mujahidin/vue/color/*` | Vue 3 components (color variant) |

## Component Naming

Framework components use PascalCase naming:
- `prayer-time` → `PrayerTime`
- `quran-book` → `QuranBook`
- `muslim-family` → `MuslimFamily`
- `kaaba-simple` → `KaabaSimple`

Import pattern:
- **Svelte**: `atsarul-mujahidin/svelte/{variant}/{ComponentName}`
- **React**: `atsarul-mujahidin/react/{variant}/{ComponentName}.jsx`
- **Vue**: `atsarul-mujahidin/vue/{variant}/{ComponentName}.vue`

Where `{variant}` is one of: `fill`, `outline`, `color`

## License

MIT © Atsarul Mujahidin Community
