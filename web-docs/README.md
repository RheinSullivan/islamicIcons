# Atsarul Mujahidin - Documentation Web Application

![Atsarul Mujahidin - Framework-agnostic Islamic SVG/WebP icons, organized for real projects](static/atsarulmujahidin_benner.png)

<p align="center">
  <a href="https://github.com/RheinSullivan/islamic-icons/blob/main/LICENSE">[![license](https://img.shields.io/badge/license-MIT-green)](https://github.com/RheinSullivan/islamic-icons/blob/main/LICENSE)</a>
  <a href="https://www.npmjs.com/package/atsarul-mujahidin">[![npm version](https://img.shields.io/npm/v/atsarul-mujahidin)](https://www.npmjs.com/package/atsarul-mujahidin)</a>
  <a href="https://www.npmjs.com/package/atsarul-mujahidin">[![npm downloads](https://img.shields.io/npm/dm/atsarul-mujahidin)](https://www.npmjs.com/package/atsarul-mujahidin)</a>
  <a href="https://github.com/RheinSullivan/islamic-icons/actions">[![build status](https://img.shields.io/github/actions/workflow/status/RheinSullivan/islamic-icons/ci.yml)](https://github.com/RheinSullivan/islamic-icons/actions)</a>
</p>

<p align="center">
  <a href="https://atsarulmujahidin.rheinsullivan.web.id/en/icons">Icons</a>
  ·
  <a href="https://atsarulmujahidin.rheinsullivan.web.id/en/docs">Guide</a>
  ·
  <a href="https://atsarulmujahidin.rheinsullivan.web.id/en/docs/frameworks">Frameworks</a>
  ·
  <a href="https://atsarulmujahidin.rheinsullivan.web.id/en/packages">Packages</a>
  ·
  <a href="https://atsarulmujahidin.rheinsullivan.web.id/en/license">License</a>
  ·
  <a href="https://atsarulmujahidin.rheinsullivan.web.id/en/showcase">Showcase</a>
</p>

---

This is the official documentation website and interactive catalog for **Atsarul Mujahidin** (`atsarul-mujahidin`), built with **SvelteKit 2**, **Svelte 5 Runes**, and **Tailwind CSS v4**.

Deployed publicly at: **[https://atsarulmujahidin.rheinsullivan.web.id](https://atsarulmujahidin.rheinsullivan.web.id)**

## Features

- **Interactive Icon Browser**: Dense responsive grid, live search with instant filtering across 81+ icons, and 14 semantic categories.
- **Lucide-Inspired Maximize / Detail View**: Real-time color picker (`currentColor`), stroke width slider (0.5px–3px), size slider (16px–256px), and one-click SVG/JSX copying.
- **Framework Integration Code Tabs**: Copy-pasteable snippets for React, Vue, Svelte, Angular, Astro, and Vanilla HTML Web Components.
- **Bilingual Internationalization (i18n)**: Native English (`/en`) and Bahasa Indonesia (`/id`) routing.
- **Authentic Calligraphy & Sacred Document Flow**: In-flow Basmallah (`بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ`) and Hamdallah (`الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ`) across all documentation articles.
- **Zero Runtime Errors**: 100% type-safe Svelte 5 runes architecture with 0 TypeScript and accessibility warnings.

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) (v1.1+ recommended) or Node.js (v18+)

### Development Server

```bash
# Install dependencies
bun install

# Start local development server
bun run dev
```

The application will be running locally at `http://localhost:5173`.

### Production Build & Validation

```bash
# Run Svelte & TypeScript diagnostics
bun run check

# Run comprehensive test matrix (TDD Vitest suite)
bun run test:run

# Build optimized production bundle
bun run build

# Preview production build locally
bun run preview
```

## Project Structure

```text
web-docs/
├── src/
│   ├── lib/
│   │   ├── components/
│   │   │   ├── DynamicIcon.svelte    # Variant-aware Svelte 5 component loader
│   │   │   ├── DocsPage.svelte       # Standardized documentation page layout
│   │   │   ├── ResourceLayout.svelte # Standardized legal/sources page layout
│   │   │   └── ...
│   │   ├── catalog.generated.ts      # Statically compiled catalog dataset
│   │   ├── i18n.ts                   # English and Indonesian translations
│   │   ├── site.ts                   # Site constants, navigation, and utilities
│   │   └── types.ts                  # Type definitions
│   ├── routes/
│   │   ├── [locale]/
│   │   │   ├── docs/
│   │   │   │   ├── frameworks/       # Multi-framework integration guides
│   │   │   │   ├── installation/     # Package manager setup guide
│   │   │   │   ├── usage/            # General usage reference
│   │   │   │   └── variants/         # Fill, outline, color styling guide
│   │   │   ├── icons/
│   │   │   │   ├── [name]/           # Full Lucide-style Icon Detail page
│   │   │   │   └── +page.svelte      # Icon browser with drawer & filters
│   │   │   ├── categories/           # Category index
│   │   │   ├── sources/              # Creator attribution and provenance
│   │   │   ├── donations/            # Solidarity for Palestine & Sudan
│   │   │   └── license/              # Open-source licensing
│   └── tests/                        # Vitest test suites
└── static/                           # Static assets, logos, and banners
```

## Contributing & License

Contributions are welcome! Please see the root repository [Contributing Guidelines](https://github.com/RheinSullivan/islamic-icons/blob/main/CONTRIBUTING.md).

Licensed under the **MIT License**.
