/**
 * copy-icons.mjs
 *
 * Copies icon SVG content from the generated Svelte components
 * (library/svelte/{variant}/{ComponentName}.svelte) into
 * web-docs/static/assets/{category}/{icon-name}/{variant}.svg.
 *
 * Why Svelte components, not raw library/icons/ SVG files?
 * The build pipeline (build-components.ts) converts all hardcoded fill
 * colors (e.g. fill="#000000") to fill="currentColor" so icons adapt to
 * whatever CSS color is applied. The raw source SVGs have fixed black fills
 * which are invisible on the dark page background.
 *
 * On Vercel / CI where library/ is not available, this script exits cleanly
 * so the SVG files already committed to static/assets/ are used as-is.
 */

import { readdirSync, statSync, mkdirSync, copyFileSync, existsSync, readFileSync, writeFileSync } from 'fs';
import { join, relative, basename, extname } from 'path';
import { fileURLToPath } from 'url';

const scriptDir = fileURLToPath(new URL('.', import.meta.url));
const projectRoot = join(scriptDir, '..');
const libraryRoot = join(projectRoot, '..', 'library');
const libraryIconsRoot = join(libraryRoot, 'icons');
const librarySvelteRoot = join(libraryRoot, 'svelte');
const staticAssetsRoot = join(projectRoot, 'static', 'assets');

// On Vercel and other CI environments, the library folder is not present.
// The SVGs already committed to static/assets/ are used as-is.
if (!existsSync(libraryIconsRoot)) {
	console.log('Library not found at', libraryIconsRoot, '- skipping icon copy (using committed SVGs).');
	process.exit(0);
}

let copiedFromComponentCount = 0;
let copiedFromRawCount = 0;
let skippedCount = 0;

/**
 * Convert a kebab-case icon name to PascalCase.
 * Example: "mosque-simple" → "MosqueSimple"
 */
function kebabToPascalCase(name) {
	return name
		.split('-')
		.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
		.join('');
}

/**
 * Extract pure SVG markup from a generated Svelte component file.
 *
 * The Svelte component has three sections:
 *   <script> ... </script>
 *   <svg ...> ... </svg>
 *   <style> ... </style>
 *
 * We extract the SVG section and replace Svelte template expressions
 * with static equivalents so the file is a valid standalone SVG.
 */
function extractSvgFromSvelteComponent(svelteFilePath) {
	const rawContent = readFileSync(svelteFilePath, 'utf8');

	// Find the boundaries of the SVG block
	const scriptCloseIndex = rawContent.lastIndexOf('</script>');
	const styleOpenIndex = rawContent.lastIndexOf('<style>');

	let svgBlock;
	if (scriptCloseIndex !== -1 && styleOpenIndex !== -1) {
		svgBlock = rawContent.slice(scriptCloseIndex + '</script>'.length, styleOpenIndex).trim();
	} else if (scriptCloseIndex !== -1) {
		svgBlock = rawContent.slice(scriptCloseIndex + '</script>'.length).trim();
	} else {
		svgBlock = rawContent.trim();
	}

	// Replace Svelte reactive/template expressions with static SVG values
	svgBlock = svgBlock
		// width={size} → width="100%" so DynamicIcon's injectSvgAttributes can resize
		.replace(/width=\{size\}/g, 'width="100%"')
		.replace(/height=\{size\}/g, 'height="100%"')
		// style="color: {colors}" → style="color: currentColor"
		.replace(/style="color: \{colors\}"/g, 'style="color: currentColor"')
		// Remove the class and rest-props bindings
		.replace(/\s*class=\{className\}/g, '')
		.replace(/\s*\{\.\.\.restProperties\}/g, '');

	return svgBlock;
}

/**
 * Recursively yield the full path of every file under a directory.
 */
function* walkFiles(directoryPath) {
	for (const entry of readdirSync(directoryPath)) {
		const fullPath = join(directoryPath, entry);
		const stat = statSync(fullPath);
		if (stat.isDirectory()) {
			yield* walkFiles(fullPath);
		} else {
			yield fullPath;
		}
	}
}

// Ensure the target root exists
if (!existsSync(staticAssetsRoot)) {
	mkdirSync(staticAssetsRoot, { recursive: true });
}

// Walk all SVG files under library/icons and produce a processed copy in static/assets
for (const sourceFilePath of walkFiles(libraryIconsRoot)) {
	if (extname(sourceFilePath) !== '.svg') {
		skippedCount++;
		continue;
	}

	// Determine the relative path from library/icons (e.g. "mosque/mosque-simple/fill.svg")
	const relativeFilePath = relative(libraryIconsRoot, sourceFilePath);

	// Derive icon name and variant from the path structure:
	//   {category}/{icon-name}/{variant}.svg
	const pathParts = relativeFilePath.replace(/\\/g, '/').split('/');
	const iconName = pathParts[pathParts.length - 2];                     // e.g. "mosque-simple"
	const variantName = basename(sourceFilePath, '.svg');                  // e.g. "fill"
	const componentName = kebabToPascalCase(iconName);                    // e.g. "MosqueSimple"
	const svelteComponentPath = join(librarySvelteRoot, variantName, `${componentName}.svelte`);

	// Build the destination path inside static/assets
	const destinationFilePath = join(staticAssetsRoot, relativeFilePath);
	const destinationDir = join(destinationFilePath, '..');
	if (!existsSync(destinationDir)) {
		mkdirSync(destinationDir, { recursive: true });
	}

	if (existsSync(svelteComponentPath)) {
		// Extract the processed SVG from the Svelte component.
		// These have fill="currentColor" on paths which works on any background.
		const svgContent = extractSvgFromSvelteComponent(svelteComponentPath);
		writeFileSync(destinationFilePath, svgContent, 'utf8');
		copiedFromComponentCount++;
		console.log(`  ✓ (svelte)  ${relativeFilePath.replace(/\\/g, '/')}`);
	} else {
		// No matching Svelte component found - fall back to the raw SVG file.
		copyFileSync(sourceFilePath, destinationFilePath);
		copiedFromRawCount++;
		console.log(`  ✓ (raw svg) ${relativeFilePath.replace(/\\/g, '/')}`);
	}
}

console.log(
	`\nDone. ${copiedFromComponentCount} icons extracted from Svelte components,` +
	` ${copiedFromRawCount} copied from raw SVGs,` +
	` ${skippedCount} non-SVG files skipped.`
);
