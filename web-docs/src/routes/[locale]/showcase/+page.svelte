<script lang="ts">
	import { MAX } from '$lib/site';
	import { translations, type Locale } from '$lib/i18n';
	let { data } = $props();
	const locale = $derived(data.locale as Locale);
	const translation = $derived(translations[locale]);

	const SHOWCASES = $derived([
		{
			title: 'Islamic Prayer Times App',
			description: locale === 'en' ? 'A modern prayer times application using Islamic Icons for all UI elements' : 'Aplikasi waktu sholat modern menggunakan Islamic Icons untuk semua elemen UI',
			image: 'https://via.placeholder.com/400x300/0a1711/73e0ae?text=Prayer+Times+App',
			url: '#',
			tags: ['React', 'Next.js', 'Tailwind CSS']
		},
		{
			title: 'Quran Reader',
			description: locale === 'en' ? 'Beautiful Quran reader with Islamic Icons integration' : 'Pembaca Quran yang indah dengan integrasi Islamic Icons',
			image: 'https://via.placeholder.com/400x300/0a1711/73e0ae?text=Quran+Reader',
			url: '#',
			tags: ['Vue', 'Nuxt', 'TypeScript']
		},
		{
			title: 'Zakat Calculator',
			description: locale === 'en' ? 'Calculate your zakat with a user-friendly interface powered by Islamic Icons' : 'Hitung zakat Anda dengan antarmuka ramah pengguna yang didukung Islamic Icons',
			image: 'https://via.placeholder.com/400x300/0a1711/73e0ae?text=Zakat+Calculator',
			url: '#',
			tags: ['Svelte', 'SvelteKit']
		},
		{
			title: 'Islamic E-Commerce',
			description: locale === 'en' ? 'Online marketplace for Islamic products with icon integration' : 'Pasar online untuk produk Islam dengan integrasi ikon',
			image: 'https://via.placeholder.com/400x300/0a1711/73e0ae?text=E-Commerce',
			url: '#',
			tags: ['React', 'Astro', 'Tailwind CSS']
		},
		{
			title: 'Mosque Finder',
			description: locale === 'en' ? 'Find nearby mosques with an intuitive map interface' : 'Temukan masjid terdekat dengan antarmuka peta yang intuitif',
			image: 'https://via.placeholder.com/400x300/0a1711/73e0ae?text=Mosque+Finder',
			url: '#',
			tags: ['Angular', 'Mapbox']
		},
		{
			title: 'Ramadan Tracker',
			description: locale === 'en' ? 'Track your Ramadan activities and ibadah with beautiful icons' : 'Lacak aktivitas Ramadan dan ibadah Anda dengan ikon yang indah',
			image: 'https://via.placeholder.com/400x300/0a1711/73e0ae?text=Ramadan+Tracker',
			url: '#',
			tags: ['Vue', 'Pinia', 'Vite']
		}
	]);
</script>

<svelte:head>
	<title>{locale === 'en' ? 'Showcase - Atsarul Mujahidin' : 'Showcase - Atsarul Mujahidin'}</title>
	<meta name="description" content={locale === 'en' ? 'Projects and applications built with Atsarul Mujahidin' : 'Proyek dan aplikasi yang dibangun dengan Atsarul Mujahidin'} />
	<link rel="canonical" href="https://islamic-icons.dev/{locale}/showcase" />
</svelte:head>

<div class="{MAX} pt-36 pb-16 sm:pt-44 sm:pb-24 lg:pt-32">
	<div class="gsap-container max-w-4xl">
		<span class="text-[10px] font-semibold uppercase tracking-[.18em] text-islamic-green">
			{locale === 'en' ? 'Community projects' : 'Proyek komunitas'}
		</span>
		<h1 class="mt-3 font-display text-5xl tracking-[-.06em] sm:text-6xl">
			{locale === 'en' ? 'Showcase' : 'Showcase'}
		</h1>
		<p class="mt-5 text-base leading-8 text-islamic-muted">
			{locale === 'en'
				? 'Discover applications and websites built by our community using Islamic Icons. Want to add your project? Submit a pull request!'
				: 'Temukan aplikasi dan website yang dibangun oleh komunitas kami menggunakan Islamic Icons. Ingin menambahkan proyek Anda? Kirim pull request!'}
		</p>
	</div>

	<div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each SHOWCASES as project (project.title)}
			<article class="gsap-on-scroll group overflow-hidden rounded-2xl border border-islamic-line bg-islamic-panel transition hover:-translate-y-1 hover:border-islamic-line-strong hover:shadow-[0_12px_40px_rgba(0,0,0,.15)]">
				<div class="aspect-[4/3] overflow-hidden bg-islamic-panel-2">
					<img src={project.image} alt={project.title} class="size-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
				</div>
				<div class="p-5">
					<h2 class="font-display text-lg tracking-[-.02em]">{project.title}</h2>
					<p class="mt-2 text-[12px] leading-6 text-islamic-dim">{project.description}</p>
					<div class="mt-4 flex flex-wrap gap-2">
						{#each project.tags as tag (tag)}
							<span class="rounded-full border border-islamic-line px-2 py-1 text-[9px] text-islamic-muted">{tag}</span>
						{/each}
					</div>
					<a href={project.url} class="mt-4 inline-flex cursor-pointer items-center gap-2 text-[11px] font-medium text-islamic-green">
						{locale === 'en' ? 'View project' : 'Lihat proyek'}
						<svg viewBox="0 0 24 24" aria-hidden="true" class="size-3 fill-none stroke-current stroke-[2]"><path d="M5 12h13M13 6l6 6-6 6"/></svg>
					</a>
				</div>
			</article>
		{/each}
	</div>

	<div class="mt-16 rounded-2xl border border-islamic-line bg-islamic-panel p-8 text-center">
		<h2 class="font-display text-2xl tracking-[-.03em]">{locale === 'en' ? 'Add Your Project' : 'Tambahkan Proyek Anda'}</h2>
		<p class="mt-3 text-sm text-islamic-muted">
			{locale === 'en'
				? 'Built something awesome with Islamic Icons? Share it with the community!'
				: 'Membangun sesuatu yang mengagumkan dengan Islamic Icons? Bagikan dengan komunitas!'}
		</p>
		<a href="/{locale}/contributing" class="mt-6 inline-flex h-11 cursor-pointer items-center gap-2 rounded-xl bg-islamic-green px-5 text-[12px] font-bold text-islamic-bg transition hover:-translate-y-0.5">
			{locale === 'en' ? 'Submit Your Project' : 'Kirim Proyek Anda'}
			<svg viewBox="0 0 24 24" aria-hidden="true" class="size-4 fill-none stroke-current stroke-[1.8]"><path d="M5 12h13M13 6l6 6-6 6"/></svg>
		</a>
	</div>
</div>
