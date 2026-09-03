<script lang="ts">
	import { icons, categories, featured, pretty, pathFor, icon, MAX, sourceForItem, chooseVariant } from '$lib/site';
	import { translations, type Locale } from '$lib/i18n';

	let { data } = $props();
	const locale = $derived(data.locale as Locale);
	const translation = $derived(translations[locale]);

	const featuredIcons = $derived(featured);
	const mosque = icon('mosque');
	const lantern = icon('lantern');
</script>

<svelte:head>
	<title>Athar (أثر) | Islamic Icons - Free Palestine and Sudan</title>
	<meta name="description" content={locale === 'en' ? 'Athar (أثر) - Create something that leaves a lasting impact. A source-aware Islamic icon library for the modern web.' : 'Athar (أثر) - Ciptakan sesuatu yang meninggalkan jejak abadi. Perpustakaan ikon Islam untuk web modern.'} />
	<meta property="og:title" content="Athar (أثر) | Islamic Icons - Free Palestine and Sudan" />
	<meta property="og:description" content={locale === 'en' ? 'Athar (أثر) - Create something that leaves a lasting impact. Islamic icon library.' : 'Athar (أثر) - Ciptakan sesuatu yang meninggalkan jejak abadi.'} />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="/logo-athar.svg" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Athar (أثر) | Islamic Icons" />
	<link rel="canonical" href="https://athar.vyagra.dev/{locale}" />
</svelte:head>

<!-- HERO - exact from native -->
<section class="{MAX} pt-36 pb-16 sm:pt-44 sm:pb-24 lg:pt-32">
	<div class="grid items-center gap-14 lg:grid-cols-[1.06fr_.94fr] lg:gap-20">
		<div class="gsap-container">
			<div class="mb-7 inline-flex items-center gap-2 rounded-full border border-islamic-green/20 bg-islamic-green/6 px-3 py-2 text-[9px] font-semibold uppercase tracking-[.18em] text-islamic-green">
				<span class="size-1.5 rounded-full bg-islamic-green shadow-[0_0_14px_rgba(115,224,174,.9)]"></span>
				{translation.home.badge}
			</div>
			<h1
				class="hero-title max-w-3xl font-display text-[clamp(54px,6.6vw,96px)] font-medium leading-[.9] tracking-[-.065em]"
				aria-label="Islamic icons for the modern web."
			>
				{#each translation.home.heroWords as word, i (i)}
					<span class="hero-word inline-block {i === translation.home.heroWords.length - 1 ? 'text-islamic-green' : ''}">{word}{#if i < translation.home.heroWords.length - 1}&nbsp;{/if}</span>
				{/each}
			</h1>
			<p class="mt-8 max-w-2xl text-[15px] leading-8 text-islamic-muted sm:text-base">{translation.home.heroDesc}</p>
			<div class="mt-9 flex flex-col gap-3 sm:flex-row">
				<a href="/{locale}/icons" class="inline-flex h-12 items-center justify-center gap-3 rounded-xl bg-islamic-green px-5 text-[12px] font-bold text-islamic-bg transition hover:-translate-y-0.5 hover:shadow-[0_15px_40px_rgba(115,224,174,.16)]">
					{translation.home.exploreBtn.replace('{count}', String(icons.length))}
					<svg viewBox="0 0 24 24" aria-hidden="true" class="size-4 fill-none stroke-current stroke-[1.8]"><path d="M5 12h13M13 6l6 6-6 6"/></svg>
				</a>
				<a href="/{locale}/docs" class="inline-flex h-12 items-center justify-center rounded-xl border border-islamic-line px-5 text-[12px] font-medium text-islamic-muted transition hover:border-islamic-line-strong hover:bg-white/4 hover:text-islamic-text">
					{translation.home.docsBtn}
				</a>
			</div>
			<div class="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[10px] text-islamic-dim">
				<span>Fill, outline and color</span>
				<span>Source attribution</span>
				<span>Contributor friendly</span>
			</div>
		</div>
		<!-- Hero art panels - exact from native -->
		<div class="relative mx-auto h-[430px] w-full max-w-[510px] gsap-container sm:h-[500px]">
			<div class="absolute inset-10 rounded-full bg-islamic-green/8 blur-3xl"></div>
			<div class="absolute right-0 top-8 h-[78%] w-[72%] rotate-[6deg] rounded-[2rem] border border-islamic-line bg-islamic-panel/70 p-5 shadow-2xl">
				<div class="flex items-center justify-between text-[8px] uppercase tracking-[.16em] text-islamic-dim">
					<span>Ramadan</span><span>02 / 03</span>
				</div>
				{#if lantern}
					<img class="mt-10 size-[75%] w-full object-contain opacity-80" src={pathFor(lantern, 'color')} alt="Ramadan lantern" />
				{/if}
			</div>
			<div class="hero-art-front absolute bottom-4 left-0 h-[78%] w-[78%] -rotate-[5deg] rounded-[2rem] border border-islamic-line-strong bg-[#0a1a13] p-5 shadow-[0_40px_100px_rgba(0,0,0,.45)] sm:bottom-8">
				<div class="flex items-center justify-between text-[8px] uppercase tracking-[.16em] text-islamic-dim">
					<span>Athar أثر</span><span>01 / 03</span>
				</div>
				{#if mosque}
					<img class="mt-8 size-[65%] w-full object-contain [filter:brightness(0)_invert(1)]" src={pathFor(mosque, 'original')} alt="Mosque icon" />
				{/if}
				<div class="absolute inset-x-5 bottom-5 border-t border-islamic-line pt-4">
					<b class="block text-[11px]">{translation.home.builtFrom}</b>
					<small class="mt-1 block text-[9px] text-islamic-dim">{translation.home.builtFromSub}</small>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Stats strip - exact from native -->
<section class="{MAX} pb-16">
	<div class="grid grid-cols-2 divide-x divide-y divide-islamic-line border-y border-islamic-line md:grid-cols-3 md:divide-y-0">
		<div class="py-7 pr-5 md:py-8">
			<strong class="block font-display text-3xl tracking-tight sm:text-4xl">{icons.length}</strong>
			<span class="mt-2 block text-[10px] uppercase tracking-[.12em] text-islamic-dim">{translation.home.statIcons}</span>
		</div>
		<div class="px-5 py-7 md:py-8">
			<strong class="block font-display text-3xl tracking-tight sm:text-4xl">{categories.length}</strong>
			<span class="mt-2 block text-[10px] uppercase tracking-[.12em] text-islamic-dim">{translation.home.statCategories}</span>
		</div>
		<div class="px-5 py-7 md:py-8">
			<strong class="block font-display text-3xl tracking-tight sm:text-4xl">3</strong>
			<span class="mt-2 block text-[10px] uppercase tracking-[.12em] text-islamic-dim">{translation.home.statVariants}</span>
		</div>
	</div>
</section>

<!-- Featured icons - exact from native -->
<section class="{MAX} py-16 sm:py-24">
	<div class="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
		<div>
			<span class="text-[10px] font-semibold uppercase tracking-[.18em] text-islamic-green">{translation.home.featuredLabel}</span>
			<h2 class="mt-3 font-display text-3xl tracking-[-.04em] sm:text-4xl">{translation.home.featuredTitle}</h2>
			<p class="mt-3 max-w-xl text-sm leading-7 text-islamic-muted">{translation.home.featuredDesc}</p>
		</div>
		<a href="/{locale}/icons" class="inline-flex items-center gap-2 text-[11px] font-semibold text-islamic-green">
			{translation.home.viewCollection}
			<svg viewBox="0 0 24 24" aria-hidden="true" class="size-4 fill-none stroke-current stroke-[1.8]"><path d="M5 12h13M13 6l6 6-6 6"/></svg>
		</a>
	</div>
	<div class="grid grid-cols-2 gap-x-4 gap-y-9 sm:grid-cols-3 lg:grid-cols-4">
		{#each featuredIcons as item (item.name)}
			{@const source = sourceForItem(item)}
			{@const variant = chooseVariant(source, 'fill')}
			{@const iconPath = pathFor(item, variant)}
			<button type="button" data-open={item.name} class="gsap-on-scroll group w-full cursor-pointer text-left">
				<span class="relative block aspect-square overflow-hidden rounded-2xl border border-islamic-line bg-islamic-panel transition duration-300 group-hover:-translate-y-1 group-hover:border-islamic-line-strong group-hover:bg-islamic-panel-2 group-hover:shadow-[0_22px_55px_rgba(0,0,0,.22)]">
					<span class="absolute left-3 top-3 z-10 rounded-full border border-islamic-line bg-islamic-bg/80 px-2 py-1 text-[8px] uppercase tracking-[.12em] text-islamic-dim backdrop-blur">Community</span>
					<img class="size-full object-contain p-10 transition duration-500 group-hover:scale-105 [filter:brightness(0)_invert(1)]" src={iconPath} alt={item.title} loading="lazy" />
				</span>
				<span class="mt-3 block">
					<strong class="block text-[13px] font-semibold text-islamic-text">{item.title}</strong>
					<small class="mt-1 block text-[10px] text-islamic-dim">{pretty(item.category)} · Fill</small>
				</span>
			</button>
		{/each}
	</div>
</section>

<!-- Why section - exact from native -->
<section class="{MAX} py-16 sm:py-24">
	<div class="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
		<div>
			<span class="text-[10px] font-semibold uppercase tracking-[.18em] text-islamic-green">{translation.home.whyLabel}</span>
			<h2 class="mt-3 max-w-md font-display text-3xl tracking-[-.04em] sm:text-4xl">{translation.home.whyTitle}</h2>
		</div>
		<div class="grid gap-3 sm:grid-cols-3">
			<article class="gsap-on-scroll rounded-2xl border border-islamic-line bg-islamic-panel p-5">
				<span class="text-[10px] text-islamic-green">01</span>
				<h3 class="mt-14 text-sm font-semibold">{translation.home.card1Title}</h3>
				<p class="mt-2 text-[11px] leading-6 text-islamic-dim">{translation.home.card1Desc}</p>
			</article>
			<article class="gsap-on-scroll rounded-2xl border border-islamic-line bg-islamic-panel p-5">
				<span class="text-[10px] text-islamic-green">02</span>
				<h3 class="mt-14 text-sm font-semibold">{translation.home.card2Title}</h3>
				<p class="mt-2 text-[11px] leading-6 text-islamic-dim">{translation.home.card2Desc}</p>
			</article>
			<article class="gsap-on-scroll rounded-2xl border border-islamic-line bg-islamic-panel p-5">
				<span class="text-[10px] text-islamic-green">03</span>
				<h3 class="mt-14 text-sm font-semibold">{translation.home.card3Title}</h3>
				<p class="mt-2 text-[11px] leading-6 text-islamic-dim">{translation.home.card3Desc}</p>
			</article>
		</div>
	</div>
</section>

<!-- CTA - exact from native -->
<section class="{MAX} pb-10">
	<div class="overflow-hidden rounded-3xl border border-islamic-line bg-islamic-panel p-7 sm:p-10">
		<div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
			<div>
				<span class="text-[10px] font-semibold uppercase tracking-[.18em] text-islamic-green">{translation.home.ctaLabel}</span>
				<h2 class="mt-3 font-display text-2xl tracking-[-.035em] sm:text-3xl">{translation.home.ctaTitle}</h2>
				<p class="mt-3 max-w-xl text-sm leading-7 text-islamic-muted">{translation.home.ctaDesc}</p>
			</div>
			<a href="/{locale}/docs/installation" class="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-islamic-green px-5 text-[11px] font-bold text-islamic-bg">
				{translation.home.ctaBtn}
				<svg viewBox="0 0 24 24" aria-hidden="true" class="size-4 fill-none stroke-current stroke-[1.8]"><path d="M5 12h13M13 6l6 6-6 6"/></svg>
			</a>
		</div>
	</div>
</section>
