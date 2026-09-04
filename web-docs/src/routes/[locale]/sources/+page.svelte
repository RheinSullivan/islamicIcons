<script lang="ts">
	import ResourceLayout from '$lib/components/ResourceLayout.svelte';
	import { sources } from '$lib/site';
	import { translations, type Locale } from '$lib/i18n';
	
	let { data } = $props();
	const locale = $derived(data.locale as Locale);
	const translation = $derived(translations[locale]);

	const LANES = $derived([
		{
			type: locale === 'en' ? 'COMMUNITY ARTWORK' : 'KARYA KOMUNITAS',
			title: locale === 'en' ? 'Rhein Sullivan' : 'Rhein Sullivan',
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
		}
	]);
</script>

<svelte:head>
	<title>{translation.sources.pageTitle}</title>
	<meta name="description" content={translation.sources.pageDesc} />
	<meta property="og:title" content={translation.sources.pageTitle} />
	<meta property="og:description" content={translation.sources.pageDesc} />
	<link rel="canonical" href="https://atsarul-mujahidin.dev/{locale}/sources" />
</svelte:head>

<ResourceLayout 
	title={translation.sources.title}
	label={translation.sources.label}
>
	<section id="overview" class="mb-10">
		<p class="text-base leading-7">{translation.sources.desc}</p>
	</section>

	<section id="community-artwork" class="mb-10">
		<h2>Community Artwork</h2>
		<div class="resource-card">
			<span class="block text-[9px] font-semibold uppercase tracking-[.17em] text-islamic-green">{LANES[0].type}</span>
			<h3 class="mt-3 font-display text-lg tracking-[-.02em]">{LANES[0].title}</h3>
			<p class="mt-3 text-sm leading-7">{LANES[0].desc}</p>
		</div>
	</section>

	<section id="external-sources" class="mb-10">
		<h2>External Sources</h2>
		<div class="resource-grid">
			{#each LANES.slice(1) as lane (lane.title)}
				<div class="resource-box">
					<span class="block text-[9px] font-semibold uppercase tracking-[.17em] text-islamic-green">{lane.type}</span>
					<h3 class="mt-2 font-display text-base tracking-[-.02em] text-islamic-text">{lane.title}</h3>
					<p class="mt-2 text-xs leading-6 text-islamic-dim">{lane.desc}</p>
					{#if lane.links.length > 0}
						<div class="mt-4 flex flex-wrap gap-2">
							{#each lane.links as link (link.url)}
								<a class="inline-flex cursor-pointer items-center text-[10px] text-islamic-green transition hover:underline" href={link.url} target="_blank" rel="noreferrer">{link.label}</a>
							{/each}
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</section>

	{#if sources.length > 0}
		<section id="tracked-sources" class="mb-10">
			<h2>Tracked Sources</h2>
			<div class="grid gap-3">
				{#each sources.filter(s => s.kind === 'external') as src (src.name)}
					<div class="resource-box">
						<div class="flex items-start justify-between gap-4">
							<div>
								<b class="text-sm text-islamic-text">{src.name}</b>
								{#if src.license}
									<span class="ml-2 rounded-full border border-islamic-line px-2 py-0.5 text-[9px] text-islamic-green">{src.license}</span>
								{/if}
								<p class="mt-2 text-xs leading-6">{src.licensePolicy}</p>
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
		</section>
	{/if}

	<section id="attribution" class="mb-10">
		<h2>Attribution</h2>
		<p class="text-base leading-7">
			{locale === 'en'
				? 'When using icons from external sources, proper attribution must be maintained according to each source\'s license terms. The icon metadata includes source information, license details, and attribution requirements.'
				: 'Saat menggunakan ikon dari sumber eksternal, atribusi yang tepat harus dipelihara sesuai dengan ketentuan lisensi setiap sumber. Metadata ikon mencakup informasi sumber, detail lisensi, dan persyaratan atribusi.'}
		</p>
	</section>

	<section id="disclaimer">
		<h2>Disclaimer</h2>
		<p class="text-base leading-7">
			{locale === 'en'
				? 'Google Search is a discovery tool only and does not grant redistribution permission. An icon enters the distributable library only after its original source and redistribution terms are verified and recorded in the asset metadata.'
				: 'Google Search hanya merupakan alat penemuan dan tidak memberikan izin redistribusi. Sebuah ikon masuk ke library yang dapat didistribusikan hanya setelah sumber asli dan ketentuan redistribusinya diverifikasi dan dicatat dalam metadata aset.'}
		</p>
	</section>
</ResourceLayout>
