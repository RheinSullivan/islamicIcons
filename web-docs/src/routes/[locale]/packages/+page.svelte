<script lang="ts">
	import { MAX } from '$lib/site';
	import { translations, type Locale } from '$lib/i18n';
	let { data } = $props();
	const locale = $derived(data.locale as Locale);
	const translation = $derived(translations[locale]);

	const PACKAGES = $derived([
		{
			name: 'Vanilla JS / TypeScript',
			description: locale === 'en' ? 'Pure JavaScript/TypeScript package for any web project.' : 'Paket JavaScript/TypeScript murni untuk proyek web apapun.',
			package: 'atsarul-mujahidin',
			logo: '/framework-logos/js.svg',
			docs: `/${locale}/docs/usage`,
			install: 'bun add atsarul-mujahidin'
		},
		{
			name: 'React.js',
			description: locale === 'en' ? 'React components for Atsarul Mujahidin icons.' : 'Komponen React untuk ikon Atsarul Mujahidin.',
			package: 'atsarul-mujahidin/react',
			logo: '/framework-logos/react.svg',
			docs: `/${locale}/docs/frameworks#react`,
			install: 'bun add atsarul-mujahidin'
		},
		{
			name: 'Next.js',
			description: locale === 'en' ? 'Next.js compatible React components.' : 'Komponen React kompatibel dengan Next.js.',
			package: 'atsarul-mujahidin/react',
			logo: '/framework-logos/nextjs.svg',
			docs: `/${locale}/docs/frameworks#nextjs`,
			install: 'bun add atsarul-mujahidin'
		},
		{
			name: 'Vue.js',
			description: locale === 'en' ? 'Vue 3 components for Atsarul Mujahidin icons.' : 'Komponen Vue 3 untuk ikon Atsarul Mujahidin.',
			package: 'atsarul-mujahidin/vue',
			logo: '/framework-logos/vue.svg',
			docs: `/${locale}/docs/frameworks#vue`,
			install: 'bun add atsarul-mujahidin'
		},
		{
			name: 'Nuxt.js',
			description: locale === 'en' ? 'Nuxt 3 compatible Vue components.' : 'Komponen Vue kompatibel dengan Nuxt 3.',
			package: 'atsarul-mujahidin/vue',
			logo: '/framework-logos/nuxt.svg',
			docs: `/${locale}/docs/frameworks#nuxt`,
			install: 'bun add atsarul-mujahidin'
		},
		{
			name: 'Svelte / SvelteKit',
			description: locale === 'en' ? 'Svelte components for Atsarul Mujahidin icons.' : 'Komponen Svelte untuk ikon Atsarul Mujahidin.',
			package: 'atsarul-mujahidin/svelte',
			logo: '/framework-logos/svelte.svg',
			docs: `/${locale}/docs/frameworks#svelte`,
			install: 'bun add atsarul-mujahidin'
		},
		{
			name: 'Rakta.js',
			description: locale === 'en' ? 'Rakta.js framework components (by Rhein Sullivan).' : 'Komponen framework Rakta.js (oleh Rhein Sullivan).',
			package: 'atsarul-mujahidin',
			logo: '/framework-logos/rakta.svg',
			docs: 'https://github.com/RheinSullivan/raktajs',
			install: 'bun add atsarul-mujahidin'
		},
		{
			name: 'Solid.js',
			description: locale === 'en' ? 'Solid.js compatible JSX components.' : 'Komponen JSX kompatibel dengan Solid.js.',
			package: 'atsarul-mujahidin',
			logo: '/framework-logos/solid.svg',
			docs: `/${locale}/docs/frameworks#solid`,
			install: 'bun add atsarul-mujahidin'
		},
		{
			name: 'Angular',
			description: locale === 'en' ? 'Angular components for Atsarul Mujahidin icons.' : 'Komponen Angular untuk ikon Atsarul Mujahidin.',
			package: 'atsarul-mujahidin',
			logo: '/framework-logos/angular.svg',
			docs: `/${locale}/docs/frameworks#angular`,
			install: 'bun add atsarul-mujahidin'
		},
		{
			name: 'Preact',
			description: locale === 'en' ? 'Preact-compatible lightweight components.' : 'Komponen ringan kompatibel dengan Preact.',
			package: 'atsarul-mujahidin/react',
			logo: '/framework-logos/preact.svg',
			docs: `/${locale}/docs/frameworks#preact`,
			install: 'bun add atsarul-mujahidin'
		},
		{
			name: 'React Native',
			description: locale === 'en' ? 'React Native mobile app components.' : 'Komponen aplikasi mobile React Native.',
			package: 'atsarul-mujahidin',
			logo: '/framework-logos/react.svg',
			docs: `/${locale}/docs/frameworks#react-native`,
			install: 'bun add atsarul-mujahidin'
		},
		{
			name: 'Astro',
			description: locale === 'en' ? 'Astro-compatible island components.' : 'Komponen island kompatibel dengan Astro.',
			package: 'atsarul-mujahidin',
			logo: '/framework-logos/astro.svg',
			docs: `/${locale}/docs/frameworks#astro`,
			install: 'bun add atsarul-mujahidin'
		},
		{
			name: 'Static HTML',
			description: locale === 'en' ? 'Pure HTML with SVG icon assets.' : 'HTML murni dengan aset ikon SVG.',
			package: 'atsarul-mujahidin/icons',
			logo: '/framework-logos/html.svg',
			docs: `/${locale}/docs/usage#html`,
			install: 'bun add atsarul-mujahidin'
		}
	]);
</script>

<svelte:head>
	<title>{locale === 'en' ? 'Packages • 🇵🇸 Atsarul Mujahidin 🇸🇩' : 'Paket • 🇵🇸 Atsarul Mujahidin 🇸🇩'}</title>
	<meta name="description" content={locale === 'en' ? 'Framework packages for Atsarul Mujahidin. Install with npm, use with React, Vue, Svelte, Angular, Astro, or vanilla JavaScript. Component-first icon library with TypeScript support.' : 'Paket framework untuk Atsarul Mujahidin. Install dengan npm, gunakan dengan React, Vue, Svelte, Angular, Astro, atau vanilla JavaScript. Library ikon berbasis komponen dengan dukungan TypeScript.'} />
	<link rel="canonical" href="https://atsarul-mujahidin.netlify.app/{locale}/packages" />
	<meta property="og:title" content={locale === 'en' ? 'Framework Packages - Atsarul Mujahidin' : 'Paket Framework - Atsarul Mujahidin'} />
	<meta property="og:description" content={locale === 'en' ? 'React, Vue, Svelte, Angular, Astro packages for Islamic icons.' : 'Paket React, Vue, Svelte, Angular, Astro untuk ikon Islam.'} />
	<meta property="og:url" content="https://atsarul-mujahidin.netlify.app/{locale}/packages" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={locale === 'en' ? 'Framework Packages - Atsarul Mujahidin' : 'Paket Framework - Atsarul Mujahidin'} />
	<meta name="twitter:description" content={locale === 'en' ? 'React, Vue, Svelte, Angular, Astro packages for Islamic icons.' : 'Paket React, Vue, Svelte, Angular, Astro untuk ikon Islam.'} />
</svelte:head>

<div class="{MAX} pt-36 pb-14 sm:pt-44 sm:pb-20 lg:pt-32">
	<div class="gsap-container mb-16 max-w-2xl">
		<h1 class="font-display text-5xl font-medium tracking-[-.055em] sm:text-6xl">
			{locale === 'en' ? 'Packages' : 'Paket'}
		</h1>
		<p class="mt-5 text-base leading-8 text-islamic-muted">
			{locale === 'en'
				? 'Framework-specific packages for Atsarul Mujahidin Islamic icons. Choose your framework and start building with 81+ Islamic icons including mosque, prayer, Quran, Palestine flag, and more.'
				: 'Paket khusus framework untuk ikon Islam Atsarul Mujahidin. Pilih framework Anda dan mulai membangun dengan 81+ ikon Islam termasuk masjid, sholat, Quran, bendera Palestina, dan lainnya.'}
		</p>
	</div>

	<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
		{#each PACKAGES as pkg (pkg.package)}
			<article class="gsap-on-scroll group relative overflow-hidden rounded-2xl border border-islamic-line bg-islamic-panel transition-all duration-300 hover:border-islamic-line-strong">
				<div class="p-6">
					<div class="mb-4 flex size-12 items-center justify-center rounded-xl bg-islamic-bg">
						<img src={pkg.logo} alt="{pkg.name} logo" class="size-7 object-contain" />
					</div>
					
					<h2 class="mb-2 font-display text-xl font-semibold tracking-[-.02em]">{pkg.name}</h2>
					<p class="text-[13px] leading-7 text-islamic-dim">{pkg.description}</p>
				</div>
			</article>
		{/each}
	</div>
</div>
