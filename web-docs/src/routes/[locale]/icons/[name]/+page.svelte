<script lang="ts">
	import { page } from '$app/state';
	import {
		icons,
		pretty,
		sourceForItem,
		chooseVariant,
		variantName,
		sourceLabel,
		camel,
		MAX
	} from '$lib/site';
	import { translations, type Locale } from '$lib/i18n';
	import DynamicIcon from '$lib/components/DynamicIcon.svelte';

	let { data } = $props();
	const locale = $derived(data.locale as Locale);
	const translation = $derived(translations[locale]);

	const iconName = $derived(page.params.name);
	const item = $derived(icons.find((iconItem) => iconItem.name === iconName) ?? null);

	// Customizer state (mirroring Lucide Customizer)
	let activeVariant = $state('fill');
	let customColor = $state('#e8f0ed');
	let customStrokeWidth = $state(1.5);
	let customSize = $state(180);
	let absoluteStrokeWidth = $state(false);
	let showGrid = $state(true);
	let activeTab = $state<'vanilla' | 'react' | 'vue' | 'svelte' | 'angular' | 'astro'>('react');
	let toastMsg = $state<string | null>(null);
	let toastTimer: ReturnType<typeof setTimeout> | null = null;

	const source = $derived.by(() => {
		if (!item) return null;
		return sourceForItem(item);
	});

	const variant = $derived(chooseVariant(source ?? undefined, activeVariant));
	const availableVariantsList = $derived(
		(source?.variants ?? []).filter((variantOption) =>
			['fill', 'outline', 'color', 'original', 'alternate'].includes(variantOption)
		)
	);

	// Contributor username (clean without "Community")
	const contributor = $derived.by(() => {
		if (!source?.label) return 'RheinSullivan';
		const clean = source.label.replace(/^Community\s*\/\s*/i, '').trim();
		return clean || 'RheinSullivan';
	});

	const pascalName = $derived.by(() => {
		if (!item) return '';
		return item.name
			.split('-')
			.map((nameSegment) => nameSegment.charAt(0).toUpperCase() + nameSegment.slice(1))
			.join('');
	});

	const frameworkSnippets = $derived.by(() => {
		if (!item) return { vanilla: '', react: '', vue: '', svelte: '', angular: '', astro: '' };
		const pascalComponentName = pascalName;
		const iconKebabName = item.name;
		const currentVariant = variant;

		return {
			vanilla: `<!-- Install: bun add atsarul-mujahidin -->
<script type="module" src="https://cdn.jsdelivr.net/npm/atsarul-mujahidin@0.1.1/vanilla/atsarul-mujahidin.js"><\/script>

<atsarul-mujahidin-icon name="${iconKebabName}" variant="${currentVariant}" size="${customSize}"></atsarul-mujahidin-icon>`,

			react: `// Install: bun add atsarul-mujahidin
import { ${pascalComponentName} } from 'atsarul-mujahidin/react/${iconKebabName}-${currentVariant}';

export default function App() {
  return (
    <${pascalComponentName} 
      size={${customSize}} 
      color="${customColor}" 
      strokeWidth={${customStrokeWidth}} 
    />
  );
}`,

			vue: `<script setup>
// Install: bun add atsarul-mujahidin
import { ${pascalComponentName} } from 'atsarul-mujahidin/vue/${iconKebabName}-${currentVariant}';
<\/script>

<template>
  <${pascalComponentName} 
    :size="${customSize}" 
    color="${customColor}" 
    :stroke-width="${customStrokeWidth}" 
  />
<\/template>`,

			svelte: `<script>
  // Install: bun add atsarul-mujahidin
  import ${pascalComponentName} from 'atsarul-mujahidin/svelte/${currentVariant}/${pascalComponentName}.svelte';
<\/script>

<${pascalComponentName} 
  size={${customSize}} 
  colors="${customColor}" 
  strokeWidth={${customStrokeWidth}} 
/>`,

			angular: `import { Component } from '@angular/core';

@Component({
  selector: 'app-icon-preview',
  template: \`<atsarul-mujahidin-icon name="${iconKebabName}" variant="${currentVariant}" size="${customSize}"></atsarul-mujahidin-icon>\`
})
export class IconPreviewComponent {}`,

			astro: `---
// Install: bun add atsarul-mujahidin
import { ${pascalComponentName} } from 'atsarul-mujahidin/react/${iconKebabName}-${currentVariant}';
---

<${pascalComponentName} size={${customSize}} color="${customColor}" client:load />`
		};
	});

	function resetCustomizer() {
		activeVariant = availableVariantsList.includes('fill') ? 'fill' : availableVariantsList[0] || 'fill';
		customColor = '#e8f0ed';
		customStrokeWidth = 1.5;
		customSize = 180;
		absoluteStrokeWidth = false;
		showGrid = true;
		showToast(locale === 'id' ? 'Kustomisasi direset' : 'Customizer reset');
	}

	function showToast(msg: string) {
		toastMsg = msg;
		if (toastTimer) clearTimeout(toastTimer);
		toastTimer = setTimeout(() => {
			toastMsg = null;
		}, 1800);
	}

	async function copyText(text: string, label: string = 'Copied') {
		try {
			await navigator.clipboard.writeText(text);
			showToast(`${label} ${locale === 'id' ? 'disalin ke clipboard!' : 'copied to clipboard!'}`);
		} catch {
			showToast(locale === 'id' ? 'Gagal menyalin' : 'Copy failed');
		}
	}

	function copySvgString() {
		const svgEl = document.querySelector('.main-preview-svg svg');
		if (svgEl) {
			copyText(svgEl.outerHTML, 'SVG');
		} else {
			showToast('SVG copied');
		}
	}

	function copyJsxSnippet() {
		if (item) {
			const snippet = `<${pascalName} size={${customSize}} color="${customColor}" />`;
			copyText(snippet, 'JSX');
		}
	}

	function downloadSvg() {
		const svgElement = document.querySelector('.main-preview-svg svg');
		if (!svgElement || !item) return;
		const blob = new Blob([svgElement.outerHTML], { type: 'image/svg+xml' });
		const downloadObjectUrl = URL.createObjectURL(blob);
		const downloadAnchorElement = document.createElement('a');
		downloadAnchorElement.href = downloadObjectUrl;
		downloadAnchorElement.download = `${item.name}-${variant}.svg`;
		document.body.appendChild(downloadAnchorElement);
		downloadAnchorElement.click();
		document.body.removeChild(downloadAnchorElement);
		URL.revokeObjectURL(downloadObjectUrl);
		showToast(locale === 'id' ? 'SVG berhasil diunduh' : 'SVG downloaded');
	}

	const relatedIcons = $derived(
		item ? icons.filter((iconCandidate) => iconCandidate.category === item.category && iconCandidate.name !== item.name).slice(0, 8) : []
	);
</script>

<svelte:head>
	{#if item}
		<title>{item.title} • 🇵🇸 Atsarul Mujahidin 🇸🇩</title>
		<meta
			name="description"
			content="{item.title} icon details – {pretty(item.category)} Islamic icon available in {availableVariantsList.join(', ')} variants from Atsarul Mujahidin."
		/>
		<meta property="og:title" content="{item.title} Icon • Atsarul Mujahidin" />
		<meta
			property="og:description"
			content="Details, customizer, metadata and code examples for {item.title} Islamic SVG icon."
		/>
		<link rel="canonical" href="https://atsarulmujahidin.rheinsullivan.web.id/{locale}/icons/{item.name}" />
	{:else}
		<title>{locale === 'en' ? 'Icon Not Found • 🇵🇸 Atsarul Mujahidin 🇸🇩' : 'Ikon Tidak Ditemukan • 🇵🇸 Atsarul Mujahidin 🇸🇩'}</title>
	{/if}
</svelte:head>

{#if item}
	<div class="{MAX} pt-32 pb-16 sm:pt-36 sm:pb-24">
		<!-- Breadcrumb -->
		<nav class="mb-8 text-[11px] text-islamic-dim" aria-label="Breadcrumb">
			<ol class="flex items-center gap-1.5 flex-wrap">
				<li>
					<a href="/{locale}/icons" class="transition hover:text-islamic-text">
						{translation.nav.icons}
					</a>
				</li>
				<li aria-hidden="true"><span class="text-islamic-dim/60">/</span></li>
				<li>
					<a
						href="/{locale}/icons?category={item.category}"
						class="transition hover:text-islamic-text"
					>
						{pretty(item.category)}
					</a>
				</li>
				<li aria-hidden="true"><span class="text-islamic-dim/60">/</span></li>
				<li aria-current="page" class="font-medium text-islamic-green">{item.title}</li>
			</ol>
		</nav>

		<!-- Main 2-Column Grid: Customizer Sidebar + Main Preview & Info Content -->
		<div class="grid gap-10 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-12 xl:grid-cols-[320px_minmax(0,1fr)]">
			<!-- LEFT COLUMN: Customizer Panel (Lucide Customizer) -->
			<aside class="space-y-6 lg:sticky lg:top-28 lg:h-fit">
				<div class="rounded-2xl border border-islamic-line bg-islamic-panel p-5 shadow-lg">
					<div class="flex items-center justify-between border-b border-islamic-line pb-4">
						<div class="flex items-center gap-2">
							<span class="size-2 rounded-full bg-islamic-green shadow-[0_0_8px_rgba(115,224,174,.8)]"></span>
							<h2 class="font-display text-sm font-semibold tracking-wide uppercase text-islamic-text">
								Customizer
							</h2>
						</div>
						<button
							type="button"
							onclick={resetCustomizer}
							title="Reset customizer"
							aria-label="Reset customizer"
							class="flex size-7 cursor-pointer items-center justify-center rounded-lg border border-islamic-line text-islamic-dim transition hover:border-islamic-line-strong hover:bg-white/5 hover:text-islamic-text"
						>
							<svg viewBox="0 0 24 24" class="size-3.5 fill-none stroke-current stroke-2">
								<path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
								<path d="M21 3v5h-5" />
							</svg>
						</button>
					</div>

					<div class="mt-5 space-y-5 text-[12px]">
						<!-- Variant Selection -->
						<div>
							<div class="mb-2 flex items-center justify-between">
								<label for="variant-select" class="font-medium text-islamic-dim uppercase text-[10px] tracking-wider">
									Variant
								</label>
								<span class="text-[10px] text-islamic-green font-mono">{variantName(variant)}</span>
							</div>
							<div id="variant-select" class="grid grid-cols-3 gap-1 rounded-xl border border-islamic-line bg-black/30 p-1">
								{#each ['fill', 'outline', 'color'] as variantOptionKey (variantOptionKey)}
									{@const available = availableVariantsList.includes(variantOptionKey)}
									<button
										type="button"
										disabled={!available}
										onclick={() => (activeVariant = variantOptionKey)}
										class="rounded-lg py-1.5 text-[11px] font-medium transition {variant === variantOptionKey
											? 'bg-islamic-green/15 text-islamic-green shadow-sm'
											: available
												? 'text-islamic-muted hover:text-islamic-text cursor-pointer'
												: 'opacity-30 cursor-not-allowed text-islamic-dim'}"
									>
										{variantName(variantOptionKey)}
									</button>
								{/each}
							</div>
						</div>

						<!-- Color Control -->
						<div>
							<div class="mb-2 flex items-center justify-between">
								<label for="icon-color-picker" class="font-medium text-islamic-dim uppercase text-[10px] tracking-wider">
									Color
								</label>
								<span class="font-mono text-[11px] text-islamic-text">{customColor}</span>
							</div>
							<div class="flex items-center gap-2">
								<div class="relative size-8 shrink-0 overflow-hidden rounded-lg border border-islamic-line">
									<input
										type="color"
										id="icon-color-picker"
										bind:value={customColor}
										class="absolute -inset-2 size-12 cursor-pointer border-0 p-0"
									/>
								</div>
								<input
									type="text"
									id="icon-color-text"
									bind:value={customColor}
									maxlength="9"
									class="min-w-0 flex-1 rounded-lg border border-islamic-line bg-black/20 px-3 py-1.5 font-mono text-[11px] text-islamic-text outline-none focus:border-islamic-green/50"
									placeholder="#e8f0ed"
								/>
							</div>
							<!-- Quick Swatches -->
							<div class="mt-2.5 flex items-center gap-1.5">
								{#each ['#e8f0ed', '#73e0ae', '#d7b66b', '#38bdf8', '#ef4444'] as colorSwatch (colorSwatch)}
									<button
										type="button"
										onclick={() => (customColor = colorSwatch)}
										style="background-color: {colorSwatch};"
										class="size-4.5 rounded-full border border-black/30 transition hover:scale-110 cursor-pointer"
										title="Set color to {colorSwatch}"
										aria-label="Set color to {colorSwatch}"
									></button>
								{/each}
							</div>
						</div>

						<!-- Stroke Width Slider (Outline) -->
						{#if variant === 'outline'}
							<div>
								<div class="mb-2 flex items-center justify-between">
									<label for="stroke-width-slider" class="font-medium text-islamic-dim uppercase text-[10px] tracking-wider">
										Stroke width
									</label>
									<span class="font-mono text-[11px] text-islamic-green">{customStrokeWidth}px</span>
								</div>
								<input
									type="range"
									id="stroke-width-slider"
									min="0.5"
									max="3"
									step="0.25"
									bind:value={customStrokeWidth}
									class="w-full accent-islamic-green cursor-pointer"
								/>
							</div>
						{/if}

						<!-- Size Slider -->
						<div>
							<div class="mb-2 flex items-center justify-between">
								<label for="size-slider" class="font-medium text-islamic-dim uppercase text-[10px] tracking-wider">
									Size
								</label>
								<span class="font-mono text-[11px] text-islamic-green">{customSize}px</span>
							</div>
							<input
								type="range"
								id="size-slider"
								min="16"
								max="256"
								step="4"
								bind:value={customSize}
								class="w-full accent-islamic-green cursor-pointer"
							/>
						</div>

						<!-- Grid View Toggle -->
						<div class="flex items-center justify-between pt-2 border-t border-islamic-line/60">
							<span class="text-[11px] text-islamic-muted">Show Grid</span>
							<button
								type="button"
								onclick={() => (showGrid = !showGrid)}
								class="relative h-5 w-9 cursor-pointer rounded-full transition {showGrid
									? 'bg-islamic-green'
									: 'bg-white/10'}"
								role="switch"
								aria-checked={showGrid}
								aria-label="Toggle preview grid"
							>
								<span
									class="absolute top-0.5 left-0.5 size-4 rounded-full bg-islamic-bg transition {showGrid
										? 'translate-x-4'
										: 'translate-x-0'}"
								></span>
							</button>
						</div>
					</div>

					<!-- Quick Actions -->
					<div class="mt-6 space-y-2 border-t border-islamic-line pt-4">
						<button
							type="button"
							onclick={copySvgString}
							class="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-islamic-green py-2.5 text-[11px] font-bold text-islamic-bg transition hover:opacity-95 shadow-[0_8px_20px_rgba(115,224,174,.15)]"
						>
							<svg viewBox="0 0 24 24" class="size-3.5 fill-none stroke-current stroke-2">
								<rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
								<path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
							</svg>
							Copy SVG
						</button>
						<div class="grid grid-cols-2 gap-2">
							<button
								type="button"
								onclick={copyJsxSnippet}
								class="flex cursor-pointer items-center justify-center gap-1.5 rounded-xl border border-islamic-line bg-black/20 py-2 text-[10px] font-semibold text-islamic-text transition hover:border-islamic-line-strong hover:bg-white/5"
							>
								Copy JSX
							</button>
							<button
								type="button"
								onclick={downloadSvg}
								class="flex cursor-pointer items-center justify-center gap-1.5 rounded-xl border border-islamic-line bg-black/20 py-2 text-[10px] font-semibold text-islamic-text transition hover:border-islamic-line-strong hover:bg-white/5"
							>
								Download
							</button>
						</div>
					</div>
				</div>

				<!-- Navigation Back to Categories -->
				<div class="rounded-2xl border border-islamic-line bg-islamic-panel/60 p-4 text-[11px]">
					<a
						href="/{locale}/icons"
						class="flex items-center justify-between text-islamic-muted transition hover:text-islamic-text"
					>
						<span>← Back to all icons</span>
						<span class="text-[10px] text-islamic-dim">{icons.length} icons</span>
					</a>
				</div>
			</aside>

			<!-- RIGHT COLUMN: Large Icon Preview, Metadata, Code & Related Icons -->
			<main class="min-w-0 space-y-12">
				<!-- 1. ICON PREVIEW SECTION (~50% visual area, flexible, responsive) -->
				<div class="relative overflow-hidden rounded-3xl border border-islamic-line bg-islamic-panel/90 shadow-2xl">
					<!-- Preview Canvas -->
					<div
						class="relative flex min-h-[380px] w-full items-center justify-center p-8 sm:min-h-[460px] sm:p-12 md:min-h-[500px]"
					>
						<!-- Optional 24x24 Lucide-style Grid Background -->
						{#if showGrid}
							<div
								class="pointer-events-none absolute inset-0 opacity-15"
								style="background-size: 24px 24px; background-image: linear-gradient(to right, rgba(115,224,174,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(115,224,174,0.2) 1px, transparent 1px);"
							></div>
						{/if}

						<!-- Focal Icon Area: Approx 70% of container height, perfectly centered -->
						<div
							class="main-preview-svg relative z-10 flex max-h-[75%] max-w-[70%] items-center justify-center transition-all duration-300"
							style="color: {customColor};"
						>
							<DynamicIcon
								{item}
								{variant}
								size={customSize}
								colors={customColor}
								strokeWidth={customStrokeWidth}
								class="size-full object-contain"
							/>
						</div>

						<!-- Small preview size comparison (48px, 32px, 24px) -->
						<div
							class="absolute right-4 bottom-4 flex items-center gap-3 rounded-xl border border-islamic-line bg-islamic-bg/90 px-3 py-2 backdrop-blur"
						>
							<div class="flex items-center gap-2 text-islamic-dim" title="Preview at 48px">
								<div class="size-6 flex items-center justify-center" style="color: {customColor};">
									<DynamicIcon {item} {variant} size={24} colors={customColor} strokeWidth={customStrokeWidth} />
								</div>
								<span class="text-[9px] font-mono">24px</span>
							</div>
							<div class="h-3 w-px bg-islamic-line"></div>
							<div class="flex items-center gap-2 text-islamic-dim" title="Preview at 32px">
								<div class="size-8 flex items-center justify-center" style="color: {customColor};">
									<DynamicIcon {item} {variant} size={32} colors={customColor} strokeWidth={customStrokeWidth} />
								</div>
								<span class="text-[9px] font-mono">32px</span>
							</div>
						</div>
					</div>
				</div>

				<!-- 2. ICON INFORMATION & METADATA SECTION -->
				<section class="rounded-2xl border border-islamic-line bg-islamic-panel p-6 sm:p-8">
					<div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
						<div>
							<div class="flex items-center gap-3 flex-wrap">
								<a
									href="/{locale}/icons?category={item.category}"
									class="rounded-full border border-islamic-green/30 bg-islamic-green/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-islamic-green transition hover:bg-islamic-green/20"
								>
									{pretty(item.category)}
								</a>
								<span class="rounded-full border border-islamic-line bg-black/30 px-2.5 py-1 text-[10px] text-islamic-dim font-mono">
									{variantName(variant)}
								</span>
							</div>
							<h1 class="mt-3 font-display text-3xl font-bold tracking-tight text-islamic-text sm:text-4xl">
								{item.title}
							</h1>
						</div>

						<div class="flex items-center gap-2">
							<button
								type="button"
								onclick={() => copyText(item.name, 'Icon name')}
								class="inline-flex cursor-pointer items-center gap-1.5 rounded-xl border border-islamic-line bg-black/20 px-3 py-2 text-[11px] font-mono text-islamic-muted transition hover:border-islamic-line-strong hover:text-islamic-text"
							>
								<code>{item.name}</code>
								<svg viewBox="0 0 24 24" class="size-3.5 fill-none stroke-current stroke-2">
									<rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
									<path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
								</svg>
							</button>
						</div>
					</div>

					<!-- Tags / Aliases -->
					{#if item.aliases?.length}
						<div class="mt-4 flex flex-wrap items-center gap-1.5">
							<span class="text-[10px] uppercase tracking-wider text-islamic-dim mr-1">Tags:</span>
							{#each item.aliases as alias (alias)}
								<span class="rounded-md border border-islamic-line bg-black/20 px-2 py-0.5 font-mono text-[10px] text-islamic-muted">
									{alias}
								</span>
							{/each}
						</div>
					{/if}

					<!-- Metadata Grid -->
					<div class="mt-8 grid grid-cols-2 gap-4 border-t border-islamic-line pt-6 sm:grid-cols-4">
						<div>
							<span class="block text-[9px] uppercase tracking-wider text-islamic-dim">Contributor</span>
							<span class="mt-1 block text-[12px] font-medium text-islamic-text">{contributor}</span>
						</div>
						<div>
							<span class="block text-[9px] uppercase tracking-wider text-islamic-dim">Category</span>
							<span class="mt-1 block text-[12px] font-medium text-islamic-text">{pretty(item.category)}</span>
						</div>
						<div>
							<span class="block text-[9px] uppercase tracking-wider text-islamic-dim">Available Variants</span>
							<span class="mt-1 block text-[12px] font-medium text-islamic-text">
								{availableVariantsList.map((variantOption) => variantName(variantOption)).join(', ')}
							</span>
						</div>
						<div>
							<span class="block text-[9px] uppercase tracking-wider text-islamic-dim">Package</span>
							<span class="mt-1 block font-mono text-[11px] text-islamic-green">atsarul-mujahidin</span>
						</div>
					</div>
				</section>

				<!-- 3. FRAMEWORK IMPLEMENTATION CODE TABS -->
				<section class="rounded-2xl border border-islamic-line bg-islamic-panel p-6 sm:p-8">
					<div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-islamic-line pb-4">
						<h2 class="font-display text-lg font-semibold text-islamic-text">
							Framework Implementations
						</h2>
						<!-- Framework Selector Tabs -->
						<div class="flex flex-wrap gap-1 rounded-xl border border-islamic-line bg-black/30 p-1">
							{#each [
								{ id: 'react', label: 'React' },
								{ id: 'svelte', label: 'Svelte' },
								{ id: 'vue', label: 'Vue' },
								{ id: 'vanilla', label: 'Vanilla' },
								{ id: 'angular', label: 'Angular' },
								{ id: 'astro', label: 'Astro' }
							] as tab (tab.id)}
								<button
									type="button"
									onclick={() => (activeTab = tab.id as any)}
									class="rounded-lg px-3 py-1.5 text-[11px] font-medium transition cursor-pointer {activeTab ===
									tab.id
										? 'bg-islamic-green/15 text-islamic-green shadow-sm'
										: 'text-islamic-muted hover:text-islamic-text'}"
								>
									{tab.label}
								</button>
							{/each}
						</div>
					</div>

					<!-- Active Framework Code Example -->
					<div class="mt-4 relative">
						<button
							type="button"
							onclick={() => copyText(frameworkSnippets[activeTab], `${activeTab.toUpperCase()} Code`)}
							class="absolute right-3 top-3 cursor-pointer rounded-lg border border-islamic-line bg-black/40 px-2.5 py-1.5 text-[10px] font-semibold text-islamic-muted transition hover:border-islamic-line-strong hover:text-islamic-text"
						>
							Copy Code
						</button>
						<pre class="overflow-x-auto rounded-xl border border-islamic-line bg-black/40 p-5 font-mono text-[11px] leading-relaxed text-islamic-muted"><code>{frameworkSnippets[activeTab]}</code></pre>
					</div>
				</section>

				<!-- 4. RELATED ICONS SECTION -->
				{#if relatedIcons.length > 0}
					<section class="border-t border-islamic-line pt-10">
						<div class="flex items-center justify-between">
							<div>
								<span class="text-[10px] font-semibold uppercase tracking-wider text-islamic-green">
									Collection
								</span>
								<h2 class="mt-1 font-display text-2xl font-bold tracking-tight text-islamic-text">
									More in {pretty(item.category)}
								</h2>
							</div>
							<a
								href="/{locale}/icons?category={item.category}"
								class="text-[11px] font-medium text-islamic-green transition hover:underline"
							>
								View category →
							</a>
						</div>

						<div class="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
							{#each relatedIcons as rel (rel.name)}
								<a
									href="/{locale}/icons/{rel.name}"
									class="group relative flex flex-col items-center rounded-2xl border border-islamic-line bg-islamic-panel p-5 transition duration-300 hover:-translate-y-1 hover:border-islamic-line-strong hover:bg-islamic-panel-2 hover:shadow-xl"
								>
									<div class="size-16 flex items-center justify-center text-islamic-text transition duration-300 group-hover:scale-110">
										<DynamicIcon item={rel} variant="fill" size={40} />
									</div>
									<span class="mt-3 block text-center text-[12px] font-medium text-islamic-muted group-hover:text-islamic-text">
										{rel.title}
									</span>
									<span class="mt-0.5 text-[9px] text-islamic-dim uppercase tracking-wider">
										{pretty(rel.category)}
									</span>
								</a>
							{/each}
						</div>
					</section>
				{/if}
			</main>
		</div>
	</div>
{:else}
	<div class="{MAX} pt-36 pb-20 sm:pt-44 sm:pb-28">
		<div class="max-w-lg">
			<span class="text-[10px] font-semibold uppercase tracking-wider text-islamic-green">404</span>
			<h1 class="mt-3 font-display text-5xl font-bold tracking-tight">Icon not found</h1>
			<p class="mt-5 text-base leading-8 text-islamic-muted">
				No icon named <code class="text-islamic-green font-mono">{iconName}</code> exists in the catalog.
			</p>
			<a
				href="/{locale}/icons"
				class="mt-8 inline-flex h-11 items-center gap-2 rounded-xl bg-islamic-green px-5 text-[11px] font-bold text-islamic-bg shadow-lg transition hover:opacity-95"
			>
				Browse all icons →
			</a>
		</div>
	</div>
{/if}

<!-- Toast Notification -->
{#if toastMsg}
	<div
		class="pointer-events-none fixed bottom-6 left-1/2 z-[120] -translate-x-1/2 rounded-xl bg-islamic-green px-4 py-2.5 text-[11px] font-bold text-islamic-bg shadow-2xl"
		role="status"
		aria-live="polite"
	>
		{toastMsg}
	</div>
{/if}
