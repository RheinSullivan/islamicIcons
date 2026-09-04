<script lang="ts">
	import { MAX } from '$lib/site';

	const cards = [
		{
			type: 'EXTERNAL LICENSED CANDIDATES',
			title: 'SVG Repo',
			desc: 'Open-licensed candidates are reviewed individually. Each asset keeps its original source page and license.',
			links: [['Browse Islamic vectors ↗', 'https://www.svgrepo.com/vectors/islamic/']]
		},
		{
			type: 'GOOGLE MATERIAL ICONS',
			title: 'Google Material Icons',
			desc: 'Official Google Material Icons are Apache-2.0. The importer treats Google as a first-party source, while Google Search remains discovery only.',
			links: [
				['Official repository ↗', 'https://github.com/google/material-design-icons'],
				['Google Fonts ↗', 'https://fonts.google.com/icons']
			]
		}
	];
</script>

<svelte:head>
	<title>Sources | Islamic Icons</title>
	<meta
		name="description"
		content="Review source provenance and usage notes for the Islamic Icons library."
	/>
</svelte:head>

<main class="{MAX} pt-36pb-14 sm:pt-44 sm:pb-20 lg:pt-32">
	<div class="gsap-container max-w-3xl">
		<span class="text-[10px] font-semibold uppercase tracking-[.18em] text-islamic-green"
			>Provenance</span
		>
		<h1 class="mt-3 font-display text-5xl tracking-[-.06em] sm:text-6xl">
			Sources, not mystery meat.
		</h1>
		<p class="mt-5 text-base leading-8 text-islamic-muted">
			Every source lane is explicit. The library can combine upstream packages, contributor artwork
			and externally licensed vectors without pretending they all have the same ownership.
		</p>
	</div>
	<div class="mt-12 grid gap-3">
		{#each cards as card (card.title)}
			<article
				class="gsap-on-scroll rounded-2xl border border-islamic-line bg-islamic-panel p-6 sm:p-7"
			>
				<span class="text-[9px] font-semibold uppercase tracking-[.17em] text-islamic-green"
					>{card.type}</span
				>
				<h2 class="mt-3 font-display text-xl tracking-[-.03em]">{card.title}</h2>
				<p class="mt-3 max-w-3xl text-[12px] leading-7 text-islamic-muted">{card.desc}</p>
				<div class="mt-5 flex flex-wrap gap-2">
					{#each card.links as [label, url] (url)}
						<a
							class="inline-flex items-center rounded-lg border border-islamic-line px-3 py-2 text-[10px] text-islamic-green hover:border-islamic-line-strong"
							href={url}
							target="_blank"
							rel="noreferrer">{label}</a
						>
					{/each}
				</div>
			</article>
		{/each}
	</div>
</main>