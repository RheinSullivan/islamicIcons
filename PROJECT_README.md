# Athar (أثر)

[![NPM Version](https://img.shields.io/npm/v/athar)](https://www.npmjs.com/package/athar)
[![License](https://img.shields.io/npm/l/athar)](LICENSE)
[![Downloads](https://img.shields.io/npm/dm/athar)](https://www.npmjs.com/package/athar)

> **أثر** means *trace, impact, legacy* — something you leave behind.  
> Create something that leaves a lasting impact.

A component-first Islamic icon library for developers who want to build meaningful, lasting experiences on the modern web.

## 🕌 Features

- **81 Islamic Icons** across 14 semantic categories
- **Component-Based** - React, Vue, Svelte, Vanilla JS Web Components
- **Multiple Variants**: Fill, Outline, and Color styles
- **Customizable** - Colors, size, stroke-width props
- **TypeScript Support** - Full type definitions included
- **Lightweight** - Tree-shakeable, only import what you use
- **Accessible** - ARIA labels, semantic HTML

## 📦 Installation

```bash
npm install athar
# or
bun add athar
# or
yarn add athar
# or
pnpm add athar
```

## 🚀 Quick Start

### React

```jsx
import { Mosque, Quran, Kaaba } from 'athar/react/fill';

function App() {
  return (
    <div>
      <Mosque colors="#10b981" size={32} className="icon" />
      <Quran colors="#3b82f6" size={32} />
      <Kaaba size={48} />
    </div>
  );
}
```

### Vue 3

```vue
<script setup>
import { Mosque, Quran } from 'athar/vue/fill';
</script>

<template>
  <Mosque colors="#10b981" :size="32" class="icon" />
  <Quran colors="#3b82f6" :size="32" />
</template>
```

### Svelte

```svelte
<script>
import { Mosque, Quran } from 'athar/svelte/fill';
</script>

<Mosque colors="#10b981" size={32} class="icon" />
<Quran colors="#3b82f6" size={32} />
```

### Vanilla JS (Web Component)

```html
<script type="module">
  import 'athar/vanilla';
</script>

<athar-icon variant="mosque" colors="#10b981" size="32">Masjid</athar-icon>
<athar-icon variant="quran" colors="#3b82f6" size="32">Al-Quran</athar-icon>
```

## 📚 Icon Categories

| Category | Description | Icon Count |
|----------|-------------|------------|
| **mosque** | Mosques, Kaaba, Islamic architecture | 8 |
| **prayer** | Prayer positions, mat, wudhu, qibla | 21 |
| **quran** | Quran book, Quran stand | 3 |
| **god** | Allah calligraphy | 3 |
| **prophet** | Muhammad calligraphy | 1 |
| **qalligraphy** | Arabic calligraphy, Bismillah | 5 |
| **ornamen** | Crescent star, moon, patterns | 8 |
| **patterns** | Islamic geometric patterns | 9 |
| **food** | Ramadan food, ketupat, fasting | 6 |
| **lifestyle** | Muslim family, hijab | 7 |
| **charity** | Zakat, sadaqah | 3 |
| **flags** | Palestine flag and relief | 3 |
| **animal** | Halal animals (camel, goat, cow) | 4 |
| **muslim-brand** | Athar logo | 1 |

**Total: 81 icons**

## 🎨 Icon Variants

Each icon may have up to 3 variants:
- **fill** - Solid silhouette style
- **outline** - Line-based style  
- **color** - Multi-color artwork

Import the variant you need:

```js
import { Mosque } from 'athar/react/fill';
import { Mosque as MosqueOutline } from 'athar/react/outline';
import { Mosque as MosqueColor } from 'athar/react/color';
```

## ⚙️ Component Props

### React / Vue / Svelte Components

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `colors` | string | `"currentColor"` | Fill/stroke color (any CSS color) |
| `size` | number \| string | `24` | Width and height in pixels |
| `strokeWidth` | number \| string | `1.5` | Stroke width for outline variants |
| `className` (React) / `class` (Vue/Svelte) | string | `""` | CSS classes |

### Web Component (`<athar-icon>`)

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `variant` | string | required | Icon name (e.g., "mosque", "quran") |
| `colors` | string | `"currentColor"` | Fill/stroke color |
| `size` | number | `24` | Width and height |
| `stroke-width` | number | `1.5` | Stroke width |
| **Content** | text | - | Accessible label for screen readers |

## 📖 Documentation

Visit our documentation site: **[athar.vyagra.dev](https://athar.vyagra.dev)**

- [Installation Guide](https://athar.vyagra.dev/en/docs/installation)
- [Usage Examples](https://athar.vyagra.dev/en/docs/usage)
- [Framework Integration](https://athar.vyagra.dev/en/docs/frameworks)
- [Icon Gallery](https://athar.vyagra.dev/en/icons)
- [Browse All Icons](https://athar.vyagra.dev/en/icons)

## 🛠️ Development

### Setup

```bash
# Clone repository
git clone https://github.com/RheinSullivan/athar.git
cd athar

# Install dependencies
bun install

# Build library
cd library
bun run build
```

### Run Web Docs Locally

```bash
cd web-docs
bun install
bun run dev
```

Visit http://localhost:5173

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](library/CONTRIBUTING.md) for guidelines.

### Adding New Icons

1. Place SVG in `library/assets/icons/[category]/[icon-name]/[variant].svg`
2. Run `bun run build` to regenerate catalog and components
3. Submit a pull request

## 🇵🇸 Support Palestine & Sudan

This project stands in solidarity with Palestine and Sudan. Consider supporting humanitarian efforts:
- [Palestine Relief](https://athar.vyagra.dev/en/donations)
- [Sudan Relief](https://athar.vyagra.dev/en/donations)

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

## 🙏 Attribution

All icons include source attribution. See [ATTRIBUTION.md](library/ATTRIBUTION.md) for full credits.

## 🔗 Links

- **NPM Package**: [athar](https://www.npmjs.com/package/athar)
- **Documentation**: [athar.vyagra.dev](https://athar.vyagra.dev)
- **GitHub**: [RheinSullivan/athar](https://github.com/RheinSullivan/athar)
- **Report Issues**: [GitHub Issues](https://github.com/RheinSullivan/athar/issues)

---

**Made with ❤️ for the Muslim Ummah**

🕌 **Free Palestine** | ☪️ **Support Sudan** | 🤲 **Sadaqah Jariyah**

*Create something that leaves a lasting أثر*  
*Bismillah ar-Rahman ar-Rahim*
