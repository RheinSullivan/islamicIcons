<script lang="ts">
	import { MAX } from '$lib/site';
	import { translations, type Locale } from '$lib/i18n';
	let { data } = $props();
	const locale = $derived(data.locale as Locale);
	const t = $derived(translations[locale]);

	const STEPS = $derived(locale === 'en' ? [
		{ n: '01', title: 'Drop the asset', desc: 'Use SVG whenever possible. WebP is acceptable for artwork that should remain raster. Keep the original untouched in the source directory.' },
		{ n: '02', title: 'Describe it', desc: 'Give it a semantic name, category, creator, source URL, license and provenance. If it came from Google, record the original page - not Google.' },
		{ n: '03', title: 'Generate variants', desc: 'Only generate fill, outline or color when the transformation preserves the artwork. Otherwise keep the original variant only.' },
		{ n: '04', title: 'Validate with Bun', desc: 'Run the catalog, package and validation scripts before opening a pull request.' },
	] : [
		{ n: '01', title: 'Tambahkan aset', desc: 'Gunakan SVG bila memungkinkan. WebP dapat diterima untuk karya seni yang harus tetap raster. Simpan aslinya tanpa diubah di direktori sumber.' },
		{ n: '02', title: 'Deskripsikan', desc: 'Berikan nama semantik, kategori, pembuat, URL sumber, lisensi, dan asal-usul. Jika berasal dari Google, catat halaman aslinya - bukan Google.' },
		{ n: '03', title: 'Buat varian', desc: 'Hanya buat fill, outline, atau color ketika transformasi mempertahankan karya seni. Jika tidak, pertahankan varian original saja.' },
		{ n: '04', title: 'Validasi dengan Bun', desc: 'Jalankan skrip katalog, paket, dan validasi sebelum membuka pull request.' },
	]);
</script>

<svelte:head>
	<title>{locale === 'en' ? 'Contributing — Islamic Icons' : 'Kontribusi — Islamic Icons'}</title>
	<meta name="description" content={t.contributing.pageDesc} />
	<meta property="og:title" content={locale === 'en' ? 'Contributing — Islamic Icons' : 'Kontribusi — Islamic Icons'} />
	<meta property="og:description" content={t.contributing.pageDesc} />
	<link rel="canonical" href="https://islamic-icons.dev/{locale}/contributing" />
</svelte:head>

<div class="{MAX} pt-36 pb-16 sm:pt-44 sm:pb-24 lg:pt-32">
	<div class="gsap-container max-w-4xl">
		<span class="text-[10px] font-semibold uppercase tracking-[.18em] text-islamic-green">
			{locale === 'en' ? 'Open contribution model' : 'Model kontribusi terbuka'}
		</span>
		<h1 class="mt-3 font-display text-5xl tracking-[-.06em] sm:text-7xl">
			{locale === 'en'
				? 'Add an icon without breaking the catalog.'
				: 'Tambahkan ikon tanpa merusak katalog.'}
		</h1>
		<p class="mt-5 max-w-3xl text-base leading-8 text-islamic-muted">
			{locale === 'en'
				? 'There is deliberately no fixed target such as 78 or 100 icons. The collection should grow when useful, licensed artwork is available and shrink when an asset should no longer be redistributed.'
				: 'Tidak ada target tetap seperti 78 atau 100 ikon. Koleksi harus berkembang ketika karya seni berlisensi yang berguna tersedia dan menyusut ketika aset tidak boleh lagi didistribusikan ulang.'}
		</p>
	</div>

	<div class="mt-12 grid gap-3 sm:grid-cols-2">
		{#each STEPS as step (step.n)}
			<article class="gsap-on-scroll rounded-2xl border border-islamic-line bg-islamic-panel p-6">
				<span class="text-[10px] text-islamic-green">{step.n}</span>
				<h2 class="mt-12 font-display text-xl tracking-[-.03em]">{step.title}</h2>
				<p class="mt-3 text-[12px] leading-7 text-islamic-muted">{step.desc}</p>
			</article>
		{/each}
	</div>

	<pre class="mt-3 overflow-x-auto rounded-2xl border border-islamic-line bg-black/20 p-5 text-[11px] leading-7 text-islamic-muted">bun run icons:catalog
bun run icons:package
bun run icons:validate</pre>

	<div class="mt-3 rounded-2xl border border-islamic-green/15 bg-islamic-green/5 p-5 text-[12px] leading-7 text-islamic-muted">
		<b class="text-islamic-text">{locale === 'en' ? 'Source integrity' : 'Integritas sumber'}</b>
		<span class="mt-2 block">
			{locale === 'en'
				? "Do not replace a creator's artwork with a generic AI recreation just because it is easier to normalize. Preserve the source asset and its visual identity."
				: 'Jangan ganti karya seni pembuat dengan kreasi AI generik hanya karena lebih mudah dinormalisasi. Pertahankan aset sumber dan identitas visualnya.'}
		</span>
	</div>
</div>
