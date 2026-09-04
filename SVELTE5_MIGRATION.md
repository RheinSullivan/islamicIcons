# Svelte 5 Migration Guide - Atsarul Mujahidin

## Overview
Version 0.1.1 introduces full Svelte 5 compatibility using runes mode. This is a **BREAKING CHANGE** that requires updating import paths.

## What Changed?

### Component Implementation
All Svelte components now use **Svelte 5 runes mode**:

**Before (v0.1.0):**
```svelte
<script>
	export let colors = 'currentColor';
	export let size = 24;
	export let strokeWidth = 1.5;
	let className = '';
	export { className as class };
</script>

<svg {...$$restProps}>
  <!-- SVG content -->
</svg>
```

**After (v0.1.1):**
```svelte
<script>
	let {
		colors = 'currentColor',
		size = 24,
		strokeWidth = 1.5,
		class: className = '',
		...restProps
	} = $props();
</script>

<svg {...restProps}>
  <!-- SVG content -->
</svg>
```

### Import Paths
Import paths have been restructured for better organization:

**Before (v0.1.0):**
```javascript
import Kaaba from 'atsarul-mujahidin/svelte/kaaba-fill';
import PalestineFlag from 'atsarul-mujahidin/svelte/palestine-flag-color';
import Zakat from 'atsarul-mujahidin/svelte/zakat-outline';
```

**After (v0.1.1):**
```javascript
import Kaaba from 'atsarul-mujahidin/svelte/fill/Kaaba';
import PalestineFlag from 'atsarul-mujahidin/svelte/color/PalestineFlag';
import Zakat from 'atsarul-mujahidin/svelte/outline/Zakat';
```

## Migration Steps

### 1. Update Package Version
```bash
npm install atsarul-mujahidin@latest
# or
yarn add atsarul-mujahidin@latest
# or
pnpm add atsarul-mujahidin@latest
# or
bun add atsarul-mujahidin@latest
```

### 2. Update Svelte Version
Ensure you're using Svelte 5:
```bash
npm install svelte@^5.0.0
```

### 3. Update Import Paths
Use find-and-replace to update all imports:

**Pattern to find:**
```regex
atsarul-mujahidin/svelte/(\w+)-(\w+)-(\w+)
```

**Replace with:**
```
atsarul-mujahidin/svelte/$3/$1-$2
```

Or manually:
- `kaaba-fill` → `fill/Kaaba`
- `prayer-mat-fill` → `fill/PrayerMat`
- `palestine-flag-color` → `color/PalestineFlag`
- `zakat-outline` → `outline/Zakat`

### 4. Component Name Conversion
Component names now use PascalCase:

| Old Path | New Path |
|----------|----------|
| `kaaba-fill` | `fill/Kaaba` |
| `kaaba-simple-fill` | `fill/KaabaSimple` |
| `prayer-mat-fill` | `fill/PrayerMat` |
| `quran-book-fill` | `fill/QuranBook` |
| `dua-hands-fill` | `fill/DuaHands` |
| `allah-caligraphy-fill` | `fill/AllahCaligraphy` |
| `crescent-star-frame-fill` | `fill/CrescentStarFrame` |
| `palestine-flag-color` | `color/PalestineFlag` |
| `zakat-outline` | `outline/Zakat` |
| `muslim-family-fill` | `fill/MuslimFamily` |

## Import Path Structure

The new structure follows this pattern:
```
atsarul-mujahidin/svelte/{variant}/{ComponentName}
```

Where:
- `{variant}` = `fill`, `outline`, or `color`
- `{ComponentName}` = PascalCase component name

## Benefits of This Change

1. **Better Svelte 5 Compatibility**: Uses modern Svelte 5 runes mode
2. **Cleaner Imports**: More intuitive directory-based imports
3. **Better IDE Support**: Easier autocomplete and IntelliSense
4. **Future-Proof**: Aligned with Svelte 5 best practices

## Breaking Changes Summary

✅ **What stays the same:**
- Component props API (colors, size, strokeWidth, class)
- All 81 icons remain available
- React, Vue, and vanilla JS components unchanged

⚠️ **What changed:**
- Import paths for Svelte components
- Internal implementation uses `$props()` instead of `export let`
- Props spreading uses `{...restProps}` instead of `{...$$restProps}`

## Need Help?

If you encounter issues during migration:
1. Check the [CHANGELOG.md](./library/CHANGELOG.md) for detailed changes
2. Review examples in the [web-docs](./web-docs) folder
3. Open an issue on [GitHub](https://github.com/RheinSullivan/islamic-icons/issues)

## Example Migration

Here's a complete before/after example:

**Before (v0.1.0):**
```svelte
<script>
	import Kaaba from 'atsarul-mujahidin/svelte/kaaba-fill';
	import Mosque from 'atsarul-mujahidin/svelte/mosque-simple-fill';
	import PalestineFlag from 'atsarul-mujahidin/svelte/palestine-flag-color';
</script>

<div>
	<Kaaba size={64} colors="#00796B" class="my-icon" />
	<Mosque size={48} />
	<PalestineFlag size={32} />
</div>
```

**After (v0.1.1):**
```svelte
<script>
	import Kaaba from 'atsarul-mujahidin/svelte/fill/Kaaba';
	import Mosque from 'atsarul-mujahidin/svelte/fill/MosqueSimple';
	import PalestineFlag from 'atsarul-mujahidin/svelte/color/PalestineFlag';
</script>

<div>
	<Kaaba size={64} colors="#00796B" class="my-icon" />
	<Mosque size={48} />
	<PalestineFlag size={32} />
</div>
```

---

**Last Updated:** September 5, 2026  
**Version:** 0.1.1  
**Author:** Rhein Sullivan & Vyagra Nexus™
