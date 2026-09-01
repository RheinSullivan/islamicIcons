<script lang="ts">
	import { categories, icons, pretty, categoryDescription, MAX } from '$lib/site';
	import { translations, type Locale } from '$lib/i18n';
	import { goto } from '$app/navigation';

	let { data } = $props();
	const locale = $derived(data.locale as Locale);
	const t = $derived(translations[locale]);
</script>

<svelte:head>
	<title>{locale === 'en' ? 'Islamic Icons — Icon Categories' : 'Islamic Icons — Kategori Ikon'}</title>
	<meta name="description" content={t.categories.pageDesc} />
	<meta property="og:title" content={locale === 'en' ? 'Islamic Icons — Icon Categories' : 'Islamic Icons — Kategori Ikon'} />
	<meta property="og:description" content={t.categories.pageDesc} />
	<link rel="canonical" href="https://islamic-icons.dev/{locale}/categories" />
</svelte:head>

<div class="{MAX} pt-36 pb-16 sm:pt-44 sm:pb-24 lg:pt-32">
	<div class="gsap-container max-w-3xl">
		<span class="text-[10px] font-semibold uppercase tracking-[.18em] text-islamic-green">{t.categories.label}</span>
		<h1 class="mt-3 font-display text-5xl tracking-[-.06em] sm:text-6xl">{t.categories.title}</h1>
		<p class="mt-5 text-base leading-8 text-islamic-muted">{t.categories.desc}</p>
	</div>
	<div class="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
		{#each categories as category (category)}
			<a
				href="/{locale}/icons"
				onclick={(e) => { e.preventDefault(); goto(`/${locale}/icons`); }}
				class="gsap-on-scroll group rounded-2xl border border-islamic-line bg-islamic-panel p-5 transition hover:-translate-y-1 hover:border-islamic-line-strong"
				aria-label="{pretty(category)} — {icons.filter(icon => icon.category === category).length} icons"
			>
				<div class="flex items-start justify-between">
					<span class="font-display text-2xl text-islamic-green">{String(icons.filter(icon => icon.category === category).length).padStart(2, '0')}</span>
					<span class="text-islamic-dim transition group-hover:translate-x-1 group-hover:text-islamic-green" aria-hidden="true">
						<svg viewBox="0 0 24 24" class="size-4 fill-none stroke-current stroke-[1.8]"><path d="M5 12h13M13 6l6 6-6 6"/></svg>
					</span>
				</div>
				<h2 class="mt-10 text-sm font-semibold">{pretty(category)}</h2>
				<p class="mt-2 text-[11px] leading-6 text-islamic-dim">{categoryDescription(category)}</p>
			</a>
		{/each}
	</div>
</div>
