<script lang="ts">
	import { page } from '$app/state';
	import { icons, pretty, pathFor, sourceForItem, chooseVariant, variantName, sourceLabel, camel, MAX } from '$lib/site';
	import { translations, type Locale } from '$lib/i18n';

	let { data } = $props();
	const locale = $derived(data.locale as Locale);
	const t = $derived(translations[locale]);

	const iconName = $derived(page.params.name);
	const item = $derived(icons.find(i => i.name === iconName) ?? null);

	let activeSource = $state<string | null>(null);
	let activeVariant = $state('fill');

	const source = $derived.by(() => {
		if (!item) return null;
		if (activeSource) return item.sources.find(s => s.id === activeSource) ?? item.sources[0];
		return sourceForItem(item);
	});
	const variant = $derived(chooseVariant(source ?? undefined, activeVariant));
	const path = $derived(item ? pathFor(item, variant, source?.id) : '');
	const vars = $derived((source?.variants ?? []).filter(v => ['fill','outline','color','original','alternate'].includes(v)));
	const imp = $derived(item ? `import { ${camel(item.name)} } from "islamic-icons/${item.category}"` : '');

	async function copyText(text: string) {
		try { await navigator.clipboard.writeText(text); } catch { /* silent */ }
	}
</script>

<svelte:head>
	{#if item}
		<title>{item.title} {locale === 'en' ? 'Icon' : 'Ikon'} — Islamic Icons</title>
		<meta name="description" content="{item.title} — {pretty(item.category)} {locale === 'en' ? 'icon available in fill, outline and color styles from Islamic Icons.' : 'ikon tersedia dalam gaya fill, outline, dan color dari Islamic Icons.'}" />
		<meta property="og:title" content="{item.title} Icon — Islamic Icons" />
		<meta property="og:description" content="Modern {item.title} SVG icon from Islamic Icons." />
		<link rel="canonical" href="https://islamic-icons.dev/{locale}/icons/{item.name}" />
	{:else}
		<title>Icon Not Found — Islamic Icons</title>
	{/if}
</svelte:head>

{#if item}
<div class="{MAX} pt-32 pb-16 sm:pt-36 sm:pb-24">
	<!-- Breadcrumb -->
	<nav class="mb-8 text-[10px] text-islamic-dim" aria-label="Breadcrumb">
		<ol class="flex items-center gap-1">
			<li><a href="/{locale}/icons" class="hover:text-islamic-text">{t.nav.icons}</a></li>
			<li aria-hidden="true"><span class="px-1">/</span></li>
			<li aria-current="page" class="text-islamic-text">{item.title}</li>
		</ol>
	</nav>

	<div class="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
		<!-- Preview column -->
		<div>
			<div class="relative grid aspect-square place-items-center overflow-hidden rounded-2xl border border-islamic-line bg-islamic-panel">
				<img class="size-[72%] object-contain" src={path} alt={item.title} />
				<span class="absolute bottom-3 left-3 rounded-full border border-islamic-line bg-islamic-bg px-2 py-1 text-[9px] text-islamic-dim">{sourceLabel(source?.id || '')} · {variantName(variant)}</span>
			</div>
			{#if vars.length > 1}
				<div class="mt-6">
					<span class="mb-3 block text-[9px] uppercase tracking-[.15em] text-islamic-dim">{t.drawer.variant}</span>
					<div class="flex flex-wrap gap-2">
						{#each vars as v (v)}
							<button type="button" onclick={() => activeVariant = v} aria-pressed={v === variant} class="cursor-pointer rounded-xl border px-4 py-2 text-[11px] transition {v === variant ? 'border-islamic-green/30 bg-islamic-green/8 text-islamic-green' : 'border-islamic-line text-islamic-muted hover:text-islamic-text'}">{variantName(v)}</button>
						{/each}
					</div>
				</div>
			{/if}
			{#if item.sources.length > 1}
				<div class="mt-6">
					<span class="mb-3 block text-[9px] uppercase tracking-[.15em] text-islamic-dim">{t.drawer.source}</span>
					<div class="flex flex-wrap gap-2">
						{#each item.sources as s (s.id)}
							<button type="button" onclick={() => activeSource = s.id} aria-pressed={s.id === source?.id} class="cursor-pointer rounded-xl border px-4 py-2 text-[11px] transition {s.id === source?.id ? 'border-islamic-green/30 bg-islamic-green/8 text-islamic-green' : 'border-islamic-line text-islamic-muted hover:text-islamic-text'}">{s.label}</button>
						{/each}
					</div>
				</div>
			{/if}
		</div>

		<!-- Details column -->
		<div>
			<span class="text-[10px] font-semibold uppercase tracking-[.18em] text-islamic-green">{pretty(item.category)}</span>
			<h1 class="mt-3 font-display text-4xl tracking-[-.05em] sm:text-5xl">{item.title}</h1>
			{#if item.aliases?.length}
				<div class="mt-4 flex flex-wrap gap-2">
					{#each item.aliases as alias (alias)}
						<span class="rounded-full border border-islamic-line px-2 py-1 text-[9px] text-islamic-dim">{alias}</span>
					{/each}
				</div>
			{/if}

			<!-- Import -->
			<div class="mt-8">
				<span class="mb-2 block text-[9px] uppercase tracking-[.15em] text-islamic-dim">{t.drawer.import}</span>
				<div class="flex items-center gap-2 overflow-hidden rounded-xl border border-islamic-line bg-black/20 p-2">
					<code class="min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap p-2 text-[11px] text-islamic-muted">{imp}</code>
					<button type="button" onclick={() => copyText(imp)} class="cursor-pointer shrink-0 rounded-lg bg-islamic-green px-3 py-2 text-[10px] font-bold text-islamic-bg">{t.drawer.copy}</button>
				</div>
			</div>

			<!-- Asset path -->
			<div class="mt-4">
				<span class="mb-2 block text-[9px] uppercase tracking-[.15em] text-islamic-dim">{t.drawer.assetPath}</span>
				<div class="flex items-center gap-2 overflow-hidden rounded-xl border border-islamic-line bg-black/20 p-2">
					<code class="min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap p-2 text-[11px] text-islamic-muted">{path}</code>
					<button type="button" onclick={() => copyText(path)} class="cursor-pointer shrink-0 rounded-lg border border-islamic-line px-3 py-2 text-[10px] text-islamic-muted hover:border-islamic-line-strong hover:text-islamic-text">{t.drawer.copy}</button>
				</div>
			</div>

			<div class="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
				<div class="rounded-xl border border-islamic-line p-4">
					<span class="block text-[9px] uppercase tracking-[.15em] text-islamic-dim">{t.drawer.category}</span>
					<b class="mt-2 block text-sm">{pretty(item.category)}</b>
				</div>
				<div class="rounded-xl border border-islamic-line p-4">
					<span class="block text-[9px] uppercase tracking-[.15em] text-islamic-dim">{t.drawer.sources}</span>
					<b class="mt-2 block text-sm">{item.sources.length}</b>
				</div>
				<div class="rounded-xl border border-islamic-line p-4">
					<span class="block text-[9px] uppercase tracking-[.15em] text-islamic-dim">Variants</span>
					<b class="mt-2 block text-sm">{vars.length}</b>
				</div>
			</div>

			<div class="mt-8 rounded-2xl border border-islamic-line bg-islamic-panel p-5">
				<b class="block text-[11px]">Usage</b>
				<pre class="mt-4 overflow-x-auto rounded-xl border border-islamic-line bg-black/20 p-4 text-[10px] leading-6 text-islamic-muted">&lt;img src="{path}" alt="{item.title}" width="24" height="24" /&gt;</pre>
			</div>

			<div class="mt-6 flex flex-wrap gap-4 text-[10px] text-islamic-green">
				<a href="/{locale}/icons">← {t.nav.icons}</a>
				<a href="/{locale}/docs/usage">{t.drawer.usageGuide} →</a>
				<a href="/{locale}/sources">{t.drawer.sourcePolicy} →</a>
			</div>
		</div>
	</div>

	<!-- Related icons -->
	{#each [icons.filter(i => i.category === item.category && i.name !== item.name).slice(0, 8)] as related (0)}
		{#if related.length > 0}
			<section class="mt-16 border-t border-islamic-line pt-12">
				<h2 class="font-display text-2xl tracking-[-.03em]">More in {pretty(item.category)}</h2>
				<div class="mt-8 grid grid-cols-2 gap-x-4 gap-y-9 sm:grid-cols-4 lg:grid-cols-6">
					{#each related as rel (rel.name)}
						<a href="/{locale}/icons/{rel.name}" class="gsap-on-scroll group text-center" aria-label="{rel.title} icon">
							<span class="relative block aspect-square overflow-hidden rounded-2xl border border-islamic-line bg-islamic-panel transition duration-300 group-hover:-translate-y-1 group-hover:border-islamic-line-strong">
								<img class="size-full object-contain p-8 transition duration-500 group-hover:scale-105" src={pathFor(rel, 'fill')} alt={rel.title} loading="lazy" />
							</span>
							<span class="mt-2 block text-[11px] font-medium text-islamic-muted group-hover:text-islamic-text">{rel.title}</span>
						</a>
					{/each}
				</div>
			</section>
		{/if}
	{/each}
</div>
{:else}
<div class="{MAX} pt-36 pb-16 sm:pt-44 sm:pb-24 lg:pt-32">
	<div class="max-w-lg">
		<span class="text-[10px] font-semibold uppercase tracking-[.18em] text-islamic-green">404</span>
		<h1 class="mt-3 font-display text-5xl tracking-[-.06em]">Icon not found</h1>
		<p class="mt-5 text-base leading-8 text-islamic-muted">No icon named <code class="text-islamic-green">{iconName}</code> exists in the catalog.</p>
		<a href="/{locale}/icons" class="mt-8 inline-flex h-11 items-center gap-2 rounded-xl bg-islamic-green px-5 text-[11px] font-bold text-islamic-bg">
			Browse all icons
			<svg viewBox="0 0 24 24" aria-hidden="true" class="size-4 fill-none stroke-current stroke-[1.8]"><path d="M5 12h13M13 6l6 6-6 6"/></svg>
		</a>
	</div>
</div>
{/if}
