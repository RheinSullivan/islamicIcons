# Athar (أثر)

> **أثر** means *trace, impact, legacy* — something you leave behind.  
> Create something that leaves a lasting impact.

A component-first Islamic icon library with framework-specific implementations for React, Vue, Svelte, and Vanilla JS.

## Installation

```bash
bun add athar
npm install athar
pnpm add athar
yarn add athar
```

## Usage

### Vanilla JS (Web Component)

```html
<script type="module">
  import 'athar/vanilla';
</script>

<athar-icon variant="mosque" colors="#10b981" size="32">Masjid</athar-icon>
```

### React

```jsx
import { Mosque } from 'athar/react/fill';
import { Mosque as MosqueOutline } from 'athar/react/outline';
import { Mosque as MosqueColor } from 'athar/react/color';

export function App() {
  return (
    <div>
      <Mosque colors="#10b981" size={32} className="icon" />
      <MosqueOutline colors="#3b82f6" size={32} />
      <MosqueColor size={48} />
    </div>
  );
}
```

### Vue 3

```vue
<script setup>
import { Mosque } from 'athar/vue/fill';
import { Mosque as MosqueOutline } from 'athar/vue/outline';
</script>

<template>
  <div>
    <Mosque colors="#10b981" :size="32" class="icon" />
    <MosqueOutline colors="#3b82f6" :size="32" />
  </div>
</template>
```

### Svelte / SvelteKit

```svelte
<script>
  import { Mosque } from 'athar/svelte/fill';
  import { Mosque as MosqueOutline } from 'athar/svelte/outline';
</script>

<Mosque colors="#10b981" size={32} class="icon" />
<MosqueOutline colors="#3b82f6" size={32} />
```

### Import by Variant

You can also import SVG content directly:

```js
import { mosque } from 'athar/fill/mosque';
import { mosque as mosqueOutline } from 'athar/outline/mosque';
import { mosque as mosqueColor } from 'athar/color/mosque';

// mosque is an SVG string that you can use however you want
console.log(mosque); // "<svg>...</svg>"
```

## Component Props

All framework components support these props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `colors` | string | `"currentColor"` | Fill/stroke color |
| `size` | number \| string | `24` | Width and height in pixels |
| `strokeWidth` | number \| string | `1.5` | Stroke width for outline variants |
| `class` / `className` | string | `""` | CSS classes (Vue/Svelte use `class`, React uses `className`) |

### Web Component (`<athar-icon>`)

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `variant` | string | required | Icon name (e.g., "mosque", "quran") |
| `colors` | string | `"currentColor"` | Fill/stroke color |
| `size` | number | `24` | Width and height |
| `stroke-width` | number | `1.5` | Stroke width |
| Content | string | - | Accessible label text |

## Icon Variants

Each icon is available in up to 3 variants:

- **fill** - Solid silhouette style
- **outline** - Line-based style  
- **color** - Multi-color artwork

## Available Icons

81 icons across 14 categories:

- **mosque** (8) - Mosques, Kaaba, Islamic architecture
- **prayer** (21) - Prayer positions, mat, wudhu, qibla
- **quran** (3) - Quran book, Quran stand
- **god** (3) - Allah calligraphy
- **prophet** (1) - Muhammad calligraphy
- **qalligraphy** (5) - Arabic calligraphy, Bismillah
- **ornamen** (8) - Crescent star, moon, patterns
- **patterns** (9) - Islamic geometric patterns
- **food** (6) - Ramadan food, ketupat, fasting
- **lifestyle** (7) - Muslim family, hijab
- **charity** (3) - Zakat, sadaqah
- **flags** (3) - Palestine flag and relief
- **animal** (4) - Halal animals (camel, goat, cow)
- **muslim-brand** (1) - Athar logo

## Philosophy

**أثر (Athar)** means *trace, impact, legacy* — something meaningful you leave behind.

When you build with Athar, you're not just using icons. You're creating experiences that leave a lasting impression, tools that benefit the Ummah, and projects that become part of your legacy.

*Create something that leaves a good أثر.*

## License

MIT © Athar (أثر) Community | Vyagra Nexus™

---

**Made with ❤️ for the Muslim Ummah**

🕌 **Free Palestine** | ☪️ **Support Sudan** | 🤲 **Sadaqah Jariyah**

*أثر* — Leave a lasting impact
