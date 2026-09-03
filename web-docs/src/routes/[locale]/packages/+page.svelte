<script lang="ts">
	import { MAX } from '$lib/site';
	import { translations, type Locale } from '$lib/i18n';
	let { data } = $props();
	const locale = $derived(data.locale as Locale);
	const translation = $derived(translations[locale]);

	const PACKAGES = $derived([
		{
			name: 'React / Remix',
			description: locale === 'en' ? 'A Islamic Icons package for React applications.' : 'Paket Islamic Icons untuk aplikasi React.',
			package: 'islamic-icons/react',
			logo: '/framework-logos/react.svg',
			docs: `/${locale}/docs/frameworks#react`,
			install: 'bun add @rhein.sullivan/islamic-icons'
		},
		{
			name: 'Vue / Nuxt',
			description: locale === 'en' ? 'A Islamic Icons package for Vue applications.' : 'Paket Islamic Icons untuk aplikasi Vue.',
			package: 'islamic-icons/vue',
			logo: '/framework-logos/vue.svg',
			docs: `/${locale}/docs/frameworks#vue`,
			install: 'bun add @rhein.sullivan/islamic-icons'
		},
		{
			name: 'Svelte / SvelteKit',
			description: locale === 'en' ? 'A Islamic Icons package for Svelte applications.' : 'Paket Islamic Icons untuk aplikasi Svelte.',
			package: 'islamic-icons/svelte',
			logo: '/framework-logos/svelte.svg',
			docs: `/${locale}/docs/frameworks#svelte`,
			install: 'bun add @rhein.sullivan/islamic-icons'
		},
		{
			name: 'Angular',
			description: locale === 'en' ? 'A Islamic Icons package for Angular applications.' : 'Paket Islamic Icons untuk aplikasi Angular.',
			package: 'islamic-icons/angular',
			logo: '/framework-logos/angular.svg',
			docs: `/${locale}/docs/frameworks#angular`,
			install: 'bun add @rhein.sullivan/islamic-icons'
		},
		{
			name: 'Astro',
			description: locale === 'en' ? 'A Islamic Icons package for Astro projects.' : 'Paket Islamic Icons untuk proyek Astro.',
			package: 'islamic-icons/astro',
			logo: '/framework-logos/astro.svg',
			docs: `/${locale}/docs/frameworks#astro`,
			install: 'bun add @rhein.sullivan/islamic-icons'
		},
		{
			name: 'Plain HTML',
			description: locale === 'en' ? 'A Islamic Icons package for static projects.' : 'Paket Islamic Icons untuk proyek statis.',
			package: 'assets/icons/**',
			logo: '/framework-logos/html.svg',
			docs: `/${locale}/docs/usage#html`,
			install: 'bun add @rhein.sullivan/islamic-icons'
		}
	]);
</script>

<svelte:head>
	<title>{locale === 'en' ? 'Packages - Islamic Icons' : 'Paket - Islamic Icons'}</title>
	<meta name="description" content={locale === 'en' ? 'Framework packages for Islamic Icons - React, Vue, Svelte, Angular, Astro, and plain HTML' : 'Paket framework untuk Islamic Icons - React, Vue, Svelte, Angular, Astro, dan HTML biasa'} />
	<link rel="canonical" href="https://islamic-icons.dev/{locale}/packages" />
</svelte:head>

<div class="{MAX} pt-32 pb-16 sm:pt-36 sm:pb-24">
	<div class="gsap-container mb-16 max-w-2xl">
		<h1 class="font-display text-5xl font-medium tracking-[-.055em] sm:text-6xl">
			{locale === 'en' ? 'Packages' : 'Paket'}
		</h1>
		<p class="mt-5 text-base leading-8 text-islamic-muted">
			{locale === 'en'
				? 'A Lucide icon library package for web and javascript applications.'
				: 'Paket pustaka ikon Lucide untuk aplikasi web dan javascript.'}
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
