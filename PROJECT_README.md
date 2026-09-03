# Athar (أثر)

[![NPM Version](https://img.shields.io/npm/v/athar)](https://www.npmjs.com/package/athar)
[![License](https://img.shields.io/npm/l/athar)](LICENSE)
[![Downloads](https://img.shields.io/npm/dm/athar)](https://www.npmjs.com/package/athar)

> **أثر** means *trace, impact, legacy* — something you leave behind.  
> Create something that leaves a lasting impact.

A framework-agnostic Islamic icon library for developers who want to build meaningful, lasting experiences on the modern web.

## 🕌 Features

- **81 Islamic Icons** across 14 semantic categories
- **Multiple Variants**: Fill, Outline, and Color styles
- **Framework Agnostic**: Works with React, Vue, Svelte, Angular, and plain HTML
- **Source Attribution**: Every icon has traceable source and license
- **Lightweight**: Local assets, no runtime fetch required
- **TypeScript Support**: Full type definitions included

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

### HTML

```html
<img 
  src="node_modules/athar/icons/mosque/kaaba/fill.svg" 
  alt="Kaaba"
  width="24"
  height="24"
/>
```

### JavaScript/TypeScript

```javascript
// Import SVG as asset
import kaabaIcon from 'athar/icons/mosque/kaaba/fill.svg';

// Use in your HTML
<img src={kaabaIcon} alt="Kaaba" width="24" height="24" />
```

### React Example

```jsx
import kaabaIcon from 'athar/icons/mosque/kaaba/fill.svg';

function App() {
  return (
    <div>
      <img src={kaabaIcon} alt="Kaaba" width={32} height={32} />
    </div>
  );
}
```

## 📚 Icon Categories

Icons are organized into semantic categories:

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
| **muslim-brand** | Islamic Icons logo | 1 |

**Total: 81 icons**

## 🎨 Icon Variants

Each icon may have up to 3 variants:
- **fill** - Solid silhouette style
- **outline** - Line-based style  
- **color** - Multi-color artwork

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
bun run icons:catalog
bun run icons:package
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
2. Run `bun run icons:catalog` to update catalog
3. Run `bun run icons:package` to rebuild package
4. Submit a pull request

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
