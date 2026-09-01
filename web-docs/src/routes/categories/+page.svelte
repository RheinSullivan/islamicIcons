<script lang="ts">
	import { categories, icons, pretty, categoryDescription, MAX } from '$lib/site';
	import { localeStore } from '$lib/locale.svelte';
	import { goto } from '$app/navigation';

	const t = $derived(localeStore.t);

	function onCategoryClick(e: MouseEvent, c: string) {
		const target = e.target as HTMLElement;
		const link = target.closest('[data-category-link]') as HTMLElement | null;
		if (link) {
			e.preventDefault();
			if (typeof window !== 'undefined') {
				window.dispatchEvent(new CustomEvent('category-selected', { detail: c }));
			}
			goto('/icons');
		}
	}
</script>

<svelte:head>
	<title>{t.categories.pageTitle}</title>
	<meta name="description" content={t.categories.pageDesc} />
</svelte:head>

<main class="{MAX} pt-36 pb-16 sm:pt-44 sm:pb-24 lg:pt-32">
	<div class="gsap-container max-w-3xl">
		<span class="text-[10px] font-semibold uppercase tracking-[.18em] text-islamic-green"
			>{t.categories.label}</span
		>
		<h1 class="mt-3 font-display text-5xl tracking-[-.06em] sm:text-6xl">{t.categories.title}</h1>
		<p class="mt-5 text-base leading-8 text-islamic-muted">
			{t.categories.desc}
		</p>
	</div>
	<div class="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
		{#each categories as c (c)}
			<a
				href="/icons"
				data-category-link={c}
				onclick={(e) => onCategoryClick(e, c)}
				class="gsap-on-scroll group rounded-2xl border border-islamic-line bg-islamic-panel p-5 transition hover:-translate-y-1 hover:border-islamic-line-strong"
				aria-label="{pretty(c)} - {icons.filter((i) => i.category === c).length} icons"
			>
				<div class="flex items-start justify-between">
					<span class="font-display text-2xl text-islamic-green"
						>{String(icons.filter((i) => i.category === c).length).padStart(2, '0')}</span
					>
					<span
						class="text-islamic-dim transition group-hover:translate-x-1 group-hover:text-islamic-green"
						aria-hidden="true"
					>
						<svg viewBox="0 0 24 24" class="size-4 fill-none stroke-current stroke-[1.8]"
							><path d="M5 12h13M13 6l6 6-6 6" /></svg
						>
					</span>
				</div>
				<h2 class="mt-10 text-sm font-semibold">{pretty(c)}</h2>
				<p class="mt-2 text-[11px] leading-6 text-islamic-dim">{categoryDescription(c)}</p>
			</a>
		{/each}
	</div>
</main>
