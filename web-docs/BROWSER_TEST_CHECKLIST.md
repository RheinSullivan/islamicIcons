# Browser Testing Checklist

**Dev Server**: http://localhost:5174/

## Task #28: Critical Routes Smoke Test

### ✅ Route: /en (Homepage)
- [ ] Page loads without errors
- [ ] Hero section displays
- [ ] Featured icons section shows icons
- [ ] Contributor badges show only username (e.g., "Rhein Sullivan" not "Community")
- [ ] Navigation works

### ✅ Route: /en/docs (Documentation Overview)
- [ ] Page loads without errors
- [ ] **Bismillah** appears at the top of content
- [ ] **Alhamdulillah** appears at the bottom of content
- [ ] Sidebar navigation displays
- [ ] Page title: "Documentation • 🇵🇸 Atsarul Mujahidin 🇸🇩"

### ✅ Route: /en/docs/installation
- [ ] Page loads without errors
- [ ] **Bismillah** appears at the top (from docs layout)
- [ ] **Alhamdulillah** appears at the bottom (from docs layout)
- [ ] Installation instructions display
- [ ] Code blocks render correctly

### ✅ Route: /en/docs/usage
- [ ] Page loads without errors
- [ ] **Bismillah** at top
- [ ] **Alhamdulillah** at bottom
- [ ] Usage examples display

### ✅ Route: /en/docs/variants
- [ ] Page loads without errors
- [ ] **Bismillah** at top
- [ ] **Alhamdulillah** at bottom
- [ ] Variant explanations display

### ✅ Route: /en/docs/frameworks
- [ ] Page loads without errors
- [ ] **Bismillah** at top
- [ ] **Alhamdulillah** at bottom
- [ ] Framework examples display

### ✅ Route: /en/icons (Icons Grid)
- [ ] Page loads without errors
- [ ] Icon grid displays (should show 82 icons)
- [ ] Fill/Outline/Colors filter buttons visible
- [ ] Source filter sidebar (Community/SVG Repo/Material) visible
- [ ] Contributor badges show only username
- [ ] Page title: "List Icons • 🇵🇸 Atsarul Mujahidin 🇸🇩"

### ✅ Route: /en/icons/palestine-relief
- [ ] Page loads without errors
- [ ] Icon detail displays
- [ ] Icon preserves **RED/WHITE/BLACK/GREEN colors** (not forced to white/currentColor)
- [ ] Variant selector shows if multiple variants available
- [ ] Framework code examples display

### ✅ Route: /en/icons/atsarul-mujahidin
- [ ] Page loads without errors
- [ ] Icon detail displays
- [ ] Should show **BOTH fill AND color variants**
- [ ] Can switch between variants
- [ ] Color variant preserves original colors

### ✅ Route: /en/icons/mosque-with-minarets
- [ ] Page loads without errors
- [ ] Icon displays correctly
- [ ] Is NOT a duplicate of mosque-svgrepo-com

### ✅ Route: /en/icons/muslim-woman
- [ ] Page loads without errors
- [ ] Icon displays correctly
- [ ] Skin tone is NOT forced to white

### ✅ Route: /en/license (Resource Page)
- [ ] Page loads without errors
- [ ] **Bismillah** appears at top (from ResourceLayout)
- [ ] **Alhamdulillah** appears at bottom (from ResourceLayout)
- [ ] License content displays
- [ ] Page title: "License • 🇵🇸 Atsarul Mujahidin 🇸🇩"

### ✅ Route: /en/packages
- [ ] Page loads without errors
- [ ] Package information displays
- [ ] Page title: "Packages • 🇵🇸 Atsarul Mujahidin 🇸🇩"

## Task #29: Maximize Modal Structure Test

### From /en/icons page:
1. [ ] Click any icon card
2. [ ] Drawer opens from right side
3. [ ] **Header Section** visible:
   - [ ] Category label (small uppercase text)
   - [ ] Icon title
   - [ ] Maximize button
   - [ ] Close button
4. [ ] **Preview Section** displays:
   - [ ] Icon is centered
   - [ ] Icon size is approximately **50% of preview area**
   - [ ] Icon is not stretched or cut off
   - [ ] Background has subtle radial gradient
5. [ ] **Variant Selector** (if icon has multiple variants):
   - [ ] Buttons for each variant (Fill/Outline/Color)
   - [ ] Active variant is highlighted
   - [ ] Clicking changes the displayed icon
6. [ ] **Source/Metadata Section**:
   - [ ] "Source" label
   - [ ] Shows contributor name (e.g., "Rhein Sullivan" NOT "Community")
7. [ ] **Framework Implementation Section**:
   - [ ] React / Next.js code example
   - [ ] Vue / Nuxt code example
   - [ ] Svelte / SvelteKit code example
   - [ ] Vanilla JS / HTML code example
   - [ ] Each has a "Copy" button
8. [ ] **Additional Links**:
   - [ ] Links to usage guide
   - [ ] Links to source policy
9. [ ] **Footer Section**:
   - [ ] Icon name
   - [ ] Category
   - [ ] Variant
   - [ ] Source
   - [ ] Available variants list
   - [ ] Tags/aliases (if available)

### Click Maximize Button:
10. [ ] Drawer expands to fullscreen
11. [ ] Header remains visible at top
12. [ ] Preview area expands (min-h-[65vh])
13. [ ] Icon sizing remains approximately 50%
14. [ ] Icon is **NOT using aspect-ratio CSS** (inspect with DevTools)
15. [ ] Content becomes centered with max-w-4xl
16. [ ] Footer remains visible at bottom
17. [ ] Footer shows **horizontal 3-column layout** with detailed metadata
18. [ ] Scroll works if content is longer than viewport

### Click Minimize Button:
19. [ ] Returns to side drawer (max-w-xl)
20. [ ] All sections still visible

### Click Close:
21. [ ] Drawer closes smoothly
22. [ ] Returns to icons grid

## Task #30: Variant Filter Functionality Test

### On /en/icons page:

### Initial State:
- [ ] Note the total number of icons displayed (should be 82)

### Click "Fill" Filter:
1. [ ] Grid updates immediately
2. [ ] Only icons with **fill variant** are shown
3. [ ] palestine-relief should **NOT** appear (it only has color variant)
4. [ ] atsarul-mujahidin **SHOULD** appear (it has fill variant)
5. [ ] Icon count updates in results text

### Click "Outline" Filter:
6. [ ] Grid updates immediately
7. [ ] Only icons with **outline variant** are shown
8. [ ] palestine-relief should **NOT** appear
9. [ ] atsarul-mujahidin should **NOT** appear (unless it also has outline)
10. [ ] Icon count updates

### Click "Colors" Filter:
11. [ ] Grid updates immediately
12. [ ] Only icons with **color variant** are shown
13. [ ] palestine-relief **SHOULD** appear (it has color variant)
14. [ ] atsarul-mujahidin **SHOULD** appear (it has color variant)
15. [ ] Icons display in their original multicolors (not all white/black)
16. [ ] Icon count updates

### Click "All Icons":
17. [ ] Grid shows all 82 icons again
18. [ ] Filter resets

### Test Source Filters (Community/SVG Repo/Material):
19. [ ] Click "Community" source filter
20. [ ] Grid updates to show only community-contributed icons
21. [ ] Click "SVG Repo" source filter
22. [ ] Grid updates accordingly
23. [ ] Click "All Icons" to reset

## Console Errors Check

### Open Browser DevTools (F12):
- [ ] **No console errors** on any page
- [ ] **No 500 errors** in Network tab
- [ ] **No failed asset loads**
- [ ] **No React/Vue/Svelte warnings**

## Bismillah/Alhamdulillah Consistency Check

Compare positioning across all docs pages:
- [ ] /en/docs
- [ ] /en/docs/installation
- [ ] /en/docs/usage
- [ ] /en/docs/variants
- [ ] /en/docs/frameworks
- [ ] /en/docs/sources
- [ ] /en/docs/donations

**Verify**:
- [ ] Bismillah appears in **same position** on all pages
- [ ] Bismillah uses **same styling** on all pages
- [ ] Alhamdulillah appears in **same position** on all pages
- [ ] Bismillah is **NOT** a huge hero banner
- [ ] Bismillah is **within content flow** (not floating/absolute positioned)
- [ ] Responsive behavior is consistent (test mobile viewport)

## Expected Results Summary

### ✅ All tests should PASS with:
- **0 SSR errors**
- **0 console errors**
- **0 broken icons**
- **0 broken imports**
- **Palestine Relief shows colors** (red/white/black/green)
- **Muslim Woman shows correct colors** (not all white)
- **Atsarul Mujahidin has fill AND color variants**
- **Mosque With Minarets exists and is not duplicate**
- **Variant filters actually filter the dataset**
- **Contributor shows GitHub username only**
- **Maximize modal has proper structure** (header → preview → metadata → code → footer)
- **Icon sizing approximately 50%** in maximize
- **No aspect-ratio on icon container**
- **Bismillah/Alhamdulillah consistent across all docs pages**
- **Page titles follow pattern**: `[Page] • 🇵🇸 Atsarul Mujahidin 🇸🇩`

---

## How to Test

1. Start dev server (already running at http://localhost:5174/)
2. Open browser
3. Go through each section systematically
4. Check off items as you verify them
5. Report any failures immediately

**Important**: Don't just check that pages load. Actually verify the BEHAVIOR described in each checklist item.
