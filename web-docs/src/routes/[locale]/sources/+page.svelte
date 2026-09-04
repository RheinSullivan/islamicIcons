<script lang="ts">
	import { sources, MAX } from '$lib/site';
	import { translations, type Locale } from '$lib/i18n';
	let { data } = $props();
	const locale = $derived(data.locale as Locale);
	const translation = $derived(translations[locale]);

	const LANES = $derived([
		{
			type: locale === 'en' ? 'COMMUNITY ARTWORK' : 'KARYA KOMUNITAS',
			title: locale === 'en' ? 'Community / Rhein Sullivan' : 'Komunitas / Rhein Sullivan',
			desc: locale === 'en'
				? 'Original artwork created specifically for Atsarul Mujahidin. These assets are first-party and carry their own provenance records.'
				: 'Karya seni asli yang dibuat khusus untuk Atsarul Mujahidin. Aset ini bersifat first-party dan memiliki catatan asal-usulnya sendiri.',
			links: [] as { label: string; url: string }[]
		},
		{
			type: locale === 'en' ? 'EXTERNAL LICENSED CANDIDATES' : 'KANDIDAT BERLISENSI EKSTERNAL',
			title: 'SVG Repo',
			desc: locale === 'en'
				? 'Open-licensed candidates are reviewed individually. Each asset keeps its original source page and license.'
				: 'Kandidat berlisensi terbuka ditinjau secara individual. Setiap aset menyimpan halaman sumber asli dan lisensinya.',
			links: [{ label: locale === 'en' ? 'Browse Islamic vectors ↗' : 'Jelajahi vektor Islam ↗', url: 'https://www.svgrepo.com/vectors/islamic/' }]
		},
		{
			type: locale === 'en' ? 'GOOGLE MATERIAL ICONS' : 'GOOGLE MATERIAL ICONS',
			title: 'Google Material Icons',
			desc: locale === 'en'
				? 'Official Google Material Icons are Apache-2.0. The importer treats Google as a first-party source, while Google Search remains discovery only.'
				: 'Google Material Icons resmi berlisensi Apache-2.0. Importer memperlakukan Google sebagai sumber first-party, sementara Google Search tetap hanya untuk penemuan.',
			links: [
				{ label: locale === 'en' ? 'Official repository ↗' : 'Repository resmi ↗', url: 'https://github.com/google/material-design-icons' },
				{ label: locale === 'en' ? 'Google Fonts ↗' : 'Google Fonts ↗', url: 'https://fonts.google.com/icons' }
			]
		},
		{
			type: locale === 'en' ? 'COMMUNITY UPLOAD' : 'UNGGAHAN KOMUNITAS',
			title: locale === 'en' ? 'Community Upload' : 'Unggahan Komunitas',
			desc: locale === 'en'
				? 'Artwork submitted by community contributors. Each asset is reviewed for licensing and quality before entering the catalog.'
				: 'Karya seni yang dikirimkan oleh kontributor komunitas. Setiap aset ditinjau lisensi dan kualitasnya sebelum masuk ke katalog.',
			links: [] as { label: string; url: string }[]
		},
	]);
</script>

<svelte:head>
	<title>{locale === 'en' ? 'Atsarul Mujahidin - Sources & Attribution' : 'Atsarul Mujahidin - Sumber & Atribusi'}</title>
	<meta name="description" content={translation.sources.pageDesc} />
	<meta property="og:title" content={locale === 'en' ? 'Atsarul Mujahidin - Sources & Attribution' : 'Atsarul Mujahidin - Sumber & Atribusi'} />
	<meta property="og:description" content={translation.sources.pageDesc} />
	<link rel="canonical" href="https://islamic-icons.dev/{locale}/sources" />
</svelte:head>

<div class="{MAX} pt-36pb-14 sm:pt-44 sm:pb-20 lg:pt-32">
	<div class="gsap-container max-w-3xl">
		<span class="text-[10px] font-semibold uppercase tracking-[.18em] text-islamic-green">{translation.sources.label}</span>
		<h1 class="mt-3 font-display text-5xl tracking-[-.06em] sm:text-6xl">{translation.sources.title}</h1>
		<p class="mt-5 text-base leading-8 text-islamic-muted">{translation.sources.desc}</p>
	</div>

	<div class="mt-12 grid gap-3">
		{#each LANES as lane (lane.title)}
			<article class="gsap-on-scroll rounded-2xl border border-islamic-line bg-islamic-panel p-6 sm:p-7">
				<span class="text-[9px] font-semibold uppercase tracking-[.17em] text-islamic-green">{lane.type}</span>
				<h2 class="mt-3 font-display text-xl tracking-[-.03em]">{lane.title}</h2>
				<p class="mt-3 max-w-3xl text-[12px] leading-7 text-islamic-muted">{lane.desc}</p>
				{#if lane.links.length > 0}
					<div class="mt-5 flex flex-wrap gap-2">
						{#each lane.links as link (link.url)}
							<a class="inline-flex cursor-pointer items-center rounded-lg border border-islamic-line px-3 py-2 text-[10px] text-islamic-green transition hover:border-islamic-line-strong" href={link.url} target="_blank" rel="noreferrer">{link.label}</a>
						{/each}
					</div>
				{/if}
			</article>
		{/each}
	</div>

	<!-- External sources from catalog data -->
	{#if sources.length > 0}
		<div class="mt-8">
			<h2 class="mb-4 text-[10px] font-semibold uppercase tracking-[.18em] text-islamic-dim">
				{locale === 'en' ? 'Tracked external sources' : 'Sumber eksternal yang dilacak'}
			</h2>
			<div class="grid gap-2">
				{#each sources.filter(s => s.kind === 'external') as src (src.name)}
					<div class="rounded-xl border border-islamic-line bg-islamic-panel/50 p-4">
						<div class="flex items-start justify-between gap-4">
							<div>
								<b class="text-[12px] text-islamic-text">{src.name}</b>
								{#if src.license}
									<span class="ml-2 rounded-full border border-islamic-line px-2 py-0.5 text-[9px] text-islamic-green">{src.license}</span>
								{/if}
								<p class="mt-1 text-[11px] leading-6 text-islamic-dim">{src.licensePolicy}</p>
							</div>
							{#if src.source}
								<a href={src.source} target="_blank" rel="noreferrer" class="cursor-pointer shrink-0 text-[10px] text-islamic-green hover:underline">
									{locale === 'en' ? 'Visit ↗' : 'Kunjungi ↗'}
								</a>
							{/if}
						</div>
					</div>
				{/each}
			</div>
		</div>
	{/if}
</div>
