<script lang="ts">
	/**
	 * DynamicIcon - Lightweight inline-SVG icon component for Atsarul Mujahidin.
	 *
	 * Instead of statically importing all icon Svelte components (which caused a
	 * 10 MB bundle), this component fetches the raw SVG file from /assets/ at
	 * runtime and renders it inline with {@html}. This keeps the bundle small
	 * while still rendering true inline SVG (not an <img> or <object> tag).
	 *
	 * SVG files must be present in web-docs/static/assets/ - they are copied
	 * from library/icons/ by running: node scripts/copy-icons.mjs
	 */

	import { onMount } from 'svelte';
	import { pathFor, chooseVariant, sourceForItem } from '$lib/site';
	import type { CatalogItem } from '$lib/types';

	interface DynamicIconProps {
		item: CatalogItem;
		variant?: string;
		size?: number | string;
		class?: string;
		colors?: string;
		strokeWidth?: number;
		[key: string]: unknown;
	}

	let {
		item,
		variant = 'fill',
		size = 48,
		class: className = '',
		colors,
		strokeWidth,
		...restProps
	}: DynamicIconProps = $props();

	/** In-memory cache for fetched raw SVG strings across all icons in session */
	const rawSvgCache: Map<string, string> = new Map();

	let rawSvg = $state('');
	let isLoading = $state(true);
	let resolvedPath = $derived(pathFor(item, variant));
	const sizeValue = $derived(typeof size === 'number' ? `${size}px` : size);

	let svgMarkup = $derived(
		rawSvg ? injectSvgAttributes(rawSvg, sizeValue, className, colors, variant) : ''
	);

	async function loadSvg(path: string): Promise<void> {
		if (!path) {
			rawSvg = '';
			isLoading = false;
			return;
		}

		const cached = rawSvgCache.get(path);
		if (cached !== undefined) {
			rawSvg = cached;
			isLoading = false;
			return;
		}

		isLoading = true;
		try {
			const response = await fetch(path);
			if (!response.ok) {
				rawSvg = '';
				isLoading = false;
				return;
			}
			const text = await response.text();
			rawSvgCache.set(path, text);
			rawSvg = text;
		} catch {
			rawSvg = '';
		} finally {
			isLoading = false;
		}
	}

	function isDarkColorHex(hex: string): boolean {
		let clean = hex;
		if (clean.length === 3) {
			clean = clean
				.split('')
				.map((c) => c + c)
				.join('');
		}
		if (clean.length === 6) {
			const r = parseInt(clean.substring(0, 2), 16);
			const g = parseInt(clean.substring(2, 4), 16);
			const b = parseInt(clean.substring(4, 6), 16);
			return r < 80 && g < 80 && b < 80;
		}
		return false;
	}

	function injectSvgAttributes(
		rawSvgText: string,
		sizeString: string,
		classString: string,
		colorsProp?: string,
		variantType: string = 'fill'
	): string {
		let processed = rawSvgText.replace(/<\?xml[^?]*\?>\s*/gi, '');

		// In non-color variants, ensure hardcoded black/dark fills/strokes become currentColor
		if (variantType !== 'color') {
			processed = processed
				.replace(/fill="black"/gi, 'fill="currentColor"')
				.replace(/stroke="black"/gi, 'stroke="currentColor"')
				.replace(/style="[^"]*fill:\s*#[0-9a-fA-F]{3,6};?[^"]*"/gi, 'fill="currentColor"')
				.replace(/style="[^"]*fill:\s*black;?[^"]*"/gi, 'fill="currentColor"')
				.replace(/fill="#([0-9a-fA-F]{3,6})"/gi, (match, hex) => {
					if (isDarkColorHex(hex)) return 'fill="currentColor"';
					return match;
				})
				.replace(/stroke="#([0-9a-fA-F]{3,6})"/gi, (match, hex) => {
					if (isDarkColorHex(hex)) return 'stroke="currentColor"';
					return match;
				})
				.replace(/<path(?![^>]*\b(fill|stroke)\b)([^>]*)>/gi, '<path fill="currentColor"$2>');
		}

		return processed.replace(
			/<svg([^>]*)>/i,
			(_fullMatch, existingAttributes) => {
				let cleaned = existingAttributes
					.replace(/\s+width\s*=\s*["'][^"']*["']/gi, '')
					.replace(/\s+height\s*=\s*["'][^"']*["']/gi, '')
					.replace(/\s+class\s*=\s*["'][^"']*["']/gi, '');

				// If colors prop was passed, override style="color: ..."
				if (colorsProp) {
					cleaned = cleaned.replace(/\s+style\s*=\s*["'][^"']*["']/gi, '');
				}

				const classAttr = classString ? ` class="${classString}"` : '';
				const colorStyle = colorsProp ? ` style="color: ${colorsProp};"` : '';

				return `<svg${cleaned} width="${sizeString}" height="${sizeString}"${classAttr}${colorStyle}>`;
			}
		);
	}

	$effect(() => {
		const currentPath = resolvedPath;
		loadSvg(currentPath);
	});

	onMount(() => {
		loadSvg(resolvedPath);
	});
</script>

{#if isLoading}
	<!--
		SSR / loading placeholder - a simple square that matches the icon size.
		Avoids layout shift once the SVG loads.
	-->
	<svg
		width={sizeValue}
		height={sizeValue}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		class={className}
		aria-hidden="true"
	>
		<rect width="24" height="24" rx="4" fill="currentColor" fill-opacity="0.06" />
	</svg>
{:else if svgMarkup}
	<!-- Inline SVG rendered directly - no <img>, no <object> -->
	<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
	{@html svgMarkup}
{:else}
	<!-- Fallback when the SVG file could not be loaded -->
	<svg
		width={sizeValue}
		height={sizeValue}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		class={className}
		role="img"
		aria-label={item.title ?? item.name}
	>
		<rect width="24" height="24" rx="4" fill="currentColor" fill-opacity="0.08" />
		<path
			d="M12 8v4m0 4h.01"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
{/if}
