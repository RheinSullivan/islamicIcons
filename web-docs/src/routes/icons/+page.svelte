<script lang="ts">
	import {
		icons,
		categories,
		pretty,
		pathFor,
		sourceForItem,
		chooseVariant,
		sourceLabel,
		variantName,
		MAX
	} from '$lib/site';
	import { localeStore } from '$lib/locale.svelte';

	const t = $derived(localeStore.t);

	let q = $state('');
	let category = $state('all');
	let variant = $state<'fill' | 'outline' | 'color'>('fill');
	let source = $state('all');

	const filtered = $derived.by(() => {
		return icons.filter((i) => {
			if (category !== 'all' && i.category !== category) return false;
			if (source !== 'all' && !i.sources.some((s) => s.id === source)) return false;
			if (q) {
				const ql = q.toLowerCase();
				const searchText = `${i.name} ${i.title} ${i.category} ${(i.aliases || []).join(' ')}`;
				if (!searchText.toLowerCase().includes(ql)) return false;
			}
			return true;
		});
	});

	function setCategory(cat: string) {
		category = cat;
		source = 'all';
		q = '';
	}
	function setSource(src: string) {
		source = src;
		category = 'all';
	}
	function setVariant(v: 'fill' | 'outline' | 'color') {
		variant = v;
	}
	function openSearch() {
		if (typeof window !== 'undefined') {
			window.dispatchEvent(new CustomEvent('open-search'));
		}
	}
</script>

<svelte:head>
	<title>{t.icons.pageTitle}</title>
	<meta name="description" content={t.icons.pageDesc} />
</svelte:head>

<main class="{MAX} pt-32 pb-16 sm:pt-36 sm:pb-24">
	<div class="grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)]">
		<aside class="lg:sticky lg:top-28 lg:h-fit">
			<div class="mb-3 text-[10px] font-semibold uppercase tracking-[.18em] text-islamic-dim">
				{t.icons.collection}
			</div>
			<div class="flex gap-1 overflow-x-auto pb-2 lg:grid lg:overflow-visible">
				<button
					type="button"
					data-cat="all"
					onclick={() => setCategory('all')}
					class="flex shrink-0 items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-left text-[12px] transition {category ===
					'all' && source === 'all'
						? 'bg-islamic-green/9 text-islamic-green'
						: 'text-islamic-muted hover:bg-white/4 hover:text-islamic-text'}"
				>
					<span>{t.icons.allIcons}</span><span class="text-[10px] text-islamic-dim">{icons.length}</span>
				</button>
				{#each categories as cat (cat)}
					<button
						type="button"
						data-cat={cat}
						onclick={() => setCategory(cat)}
						class="flex shrink-0 items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-left text-[12px] transition {category ===
						cat && source === 'all'
							? 'bg-islamic-green/9 text-islamic-green'
							: 'text-islamic-muted hover:bg-white/4 hover:text-islamic-text'}"
					>
						<span>{pretty(cat)}</span>
						<span class="text-[10px] text-islamic-dim"
							>{icons.filter((i) => i.category === cat).length}</span
						>
					</button>
				{/each}
			</div>
			<div class="my-5 h-px bg-islamic-line"></div>
			<div class="mb-3 text-[10px] font-semibold uppercase tracking-[.18em] text-islamic-dim">
				{t.icons.sources}
			</div>
			<div class="grid gap-1">
				<button
					type="button"
					data-source-filter="community"
					onclick={() => setSource('community')}
					class="flex items-center justify-between rounded-lg px-3 py-2.5 text-left text-[12px] transition {source ===
					'community'
						? 'bg-islamic-green/9 text-islamic-green'
						: 'text-islamic-muted hover:bg-white/4 hover:text-islamic-text'}"
				>
					{t.icons.community}
					<span class="text-[10px] text-islamic-dim"
						>{icons.filter((i) => i.sources.some((s) => s.id === 'community')).length}</span
					>
				</button>
				<button
					type="button"
					data-source-filter="svg-repo"
					onclick={() => setSource('svg-repo')}
					class="flex items-center justify-between rounded-lg px-3 py-2.5 text-left text-[12px] transition {source ===
					'svg-repo'
						? 'bg-islamic-green/9 text-islamic-green'
						: 'text-islamic-muted hover:bg-white/4 hover:text-islamic-text'}"
				>
					{t.icons.externalSvgRepo}
					<span class="text-[10px] text-islamic-dim"
						>{icons.filter((i) => i.sources.some((s) => s.id === 'svg-repo')).length}</span
					>
				</button>
			</div>
		</aside>

		<section class="min-w-0">
			<div class="gsap-container">
				<span class="text-[10px] font-semibold uppercase tracking-[.18em] text-islamic-green"
					>{t.icons.label}</span
				>
				<div class="mt-3 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
					<div>
						<h1 class="font-display text-4xl tracking-[-.05em] sm:text-5xl">{t.icons.title}</h1>
						<p class="mt-3 max-w-xl text-sm leading-7 text-islamic-muted">
							{t.icons.desc.replace('{count}', String(filtered.length))}
						</p>
					</div>
					<button
						type="button"
						onclick={openSearch}
						aria-label="Open search"
						class="inline-flex h-10 shrink-0 items-center gap-2 rounded-xl border border-islamic-line px-3 text-[10px] text-islamic-muted hover:border-islamic-line-strong hover:text-islamic-text"
					>
						<svg viewBox="0 0 24 24" aria-hidden="true" class="size-4 fill-none stroke-current stroke-[1.7]"
							><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4.5 4.5" /></svg
						>
						CTRL + K
					</button>
				</div>
			</div>
			<div class="mt-8 flex flex-col gap-3 sm:flex-row">
				<label
					class="flex h-12 min-w-0 flex-1 items-center gap-3 rounded-xl border border-islamic-line bg-islamic-panel px-4 focus-within:border-islamic-green/35"
				>
					<span class="text-islamic-dim" aria-hidden="true">
						<svg viewBox="0 0 24 24" class="size-4 fill-none stroke-current stroke-[1.7]"
							><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4.5 4.5" /></svg
						>
					</span>
					<input
						id="q"
						bind:value={q}
						placeholder={t.icons.searchPlaceholder}
						autocomplete="off"
						aria-label={t.icons.searchPlaceholder}
						class="min-w-0 flex-1 bg-transparent text-sm text-islamic-text outline-none placeholder:text-islamic-dim"
					/>
					<kbd class="hidden rounded-md border border-islamic-line px-1.5 py-1 text-[9px] text-islamic-dim sm:block"
						>CTRL + K</kbd
					>
				</label>
				<div
					class="grid grid-cols-3 rounded-xl border border-islamic-line bg-islamic-panel p-1 sm:w-[270px]"
					role="group"
					aria-label="Select variant"
				>
					{#each ['fill', 'outline', 'color'] as v (v)}
						<button
							type="button"
							data-var={v}
							onclick={() => setVariant(v as 'fill' | 'outline' | 'color')}
							aria-pressed={variant === v}
							class="rounded-lg px-3 py-2.5 text-[10px] transition {variant === v
								? 'bg-islamic-green/10 text-islamic-green'
								: 'text-islamic-muted hover:text-islamic-text'}">{variantName(v)}</button
						>
					{/each}
				</div>
			</div>
			<div class="mt-4 flex items-center justify-between text-[10px] text-islamic-dim">
				<span>{t.icons.results.replace('{count}', String(filtered.length))}</span>
				<span>{t.icons.hint}</span>
			</div>
			<div class="mt-7 grid grid-cols-2 gap-x-4 gap-y-9 sm:grid-cols-3 lg:grid-cols-4">
				{#if filtered.length === 0}
					<div
						class="col-span-full rounded-2xl border border-dashed border-islamic-line-strong p-12 text-center"
					>
						<b class="text-sm">{t.icons.noResults}</b>
						<p class="mt-2 text-xs text-islamic-dim">
							{t.icons.noResultsHint}
						</p>
					</div>
				{:else}
					{#each filtered as item (item.name)}
						{@const itemSource = sourceForItem(item, source)}
						{@const selectedVariant = chooseVariant(itemSource, variant)}
						{@const iconPath = pathFor(item, selectedVariant, itemSource?.id)}
						<button
							type="button"
							data-open={item.name}
							aria-label="View {item.title} details"
							class="gsap-on-scroll group w-full text-left"
						>
							<span
								class="relative block aspect-square overflow-hidden rounded-2xl border border-islamic-line bg-islamic-panel transition duration-300 group-hover:-translate-y-1 group-hover:border-islamic-line-strong group-hover:bg-islamic-panel-2 group-hover:shadow-[0_22px_55px_rgba(0,0,0,.22)]"
							>
								<span
									class="absolute left-3 top-3 z-10 rounded-full border border-islamic-line bg-islamic-bg/80 px-2 py-1 text-[8px] uppercase tracking-[.12em] text-islamic-dim backdrop-blur"
									aria-hidden="true">{sourceLabel(itemSource?.id || '')}</span
								>
								<img
									class="size-full object-contain p-10 transition duration-500 group-hover:scale-105"
									src={iconPath}
									alt={item.title}
									loading="lazy"
								/>
							</span>
							<span class="mt-3 block">
								<strong class="block text-[13px] font-semibold text-islamic-text"
									>{item.title}</strong
								>
								<small class="mt-1 block text-[10px] text-islamic-dim"
									>{pretty(item.category)} · {variantName(selectedVariant)}</small
								>
							</span>
						</button>
					{/each}
				{/if}
			</div>
		</section>
	</div>
</main>
