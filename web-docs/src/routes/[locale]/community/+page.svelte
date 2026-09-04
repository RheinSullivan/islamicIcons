<script lang="ts">
	import ResourceLayout from '$lib/components/ResourceLayout.svelte';
	import { translations, type Locale } from '$lib/i18n';
	
	let { data } = $props();
	const locale = $derived(data.locale as Locale);
	const translation = $derived(translations[locale]);
	
	const REPO_URL = 'https://github.com/RheinSullivan/islamic-icons';
</script>

<svelte:head>
	<title>{locale === 'en' ? 'Community - Atsarul Mujahidin' : 'Komunitas - Atsarul Mujahidin'}</title>
	<meta name="description" content={locale === 'en' ? 'Join the Atsarul Mujahidin community and contribute to the project' : 'Bergabung dengan komunitas Atsarul Mujahidin dan berkontribusi pada proyek'} />
</svelte:head>

<ResourceLayout 
	title={locale === 'en' ? 'Community' : 'Komunitas'}
	label={locale === 'en' ? 'Connect' : 'Terhubung'}
>
	<section id="join-community" class="mb-16">
		<h2 class="mb-4 text-2xl font-semibold">{locale === 'en' ? 'Join the Community' : 'Bergabung dengan Komunitas'}</h2>
		<p class="mb-6 text-base leading-7 text-islamic-muted">
			{locale === 'en' 
				? 'Islamic Icons is built by a global community of developers, designers, and contributors who share a common goal: making high-quality Islamic iconography accessible to everyone.'
				: 'Islamic Icons dibangun oleh komunitas global pengembang, desainer, dan kontributor yang berbagi tujuan bersama: membuat ikonografi Islam berkualitas tinggi dapat diakses oleh semua orang.'}
		</p>
	</section>

	<section id="how-to-help" class="mb-16">
		<h2 class="mb-4 text-2xl font-semibold">{locale === 'en' ? 'How You Can Help' : 'Cara Anda Bisa Membantu'}</h2>
		<p class="mb-6 text-base leading-7 text-islamic-muted">
			{locale === 'en' 
				? 'There are many ways to contribute to Islamic Icons. Choose what works best for you:'
				: 'Ada banyak cara untuk berkontribusi ke Islamic Icons. Pilih yang paling cocok untuk Anda:'}
		</p>
		<div class="grid gap-4 sm:grid-cols-2">
			<a href="/{locale}/contributing" class="group block rounded-2xl border border-islamic-line bg-islamic-panel p-6 transition hover:-translate-y-1 hover:border-islamic-line-strong hover:shadow-xl">
				<div class="mb-4 text-3xl">🎨</div>
				<h3 class="mb-2 text-lg font-semibold">{locale === 'en' ? 'Contribute Icons' : 'Kontribusi Ikon'}</h3>
				<p class="mb-4 text-[13px] leading-6 text-islamic-muted">
					{locale === 'en' 
						? 'Submit new icons or improve existing ones through pull requests.'
						: 'Kirim ikon baru atau tingkatkan yang ada melalui pull request.'}
				</p>
				<span class="inline-flex items-center gap-2 rounded-xl bg-islamic-green px-4 py-2.5 text-sm font-semibold text-islamic-bg transition group-hover:shadow-lg">
					{locale === 'en' ? 'Start Contributing' : 'Mulai Berkontribusi'}
					<svg viewBox="0 0 24 24" class="size-4 fill-none stroke-current stroke-2 transition group-hover:translate-x-1"><path d="M5 12h13M13 6l6 6-6 6"/></svg>
				</span>
			</a>
			<a href="/{locale}/docs" class="group block rounded-2xl border border-islamic-line bg-islamic-panel p-6 transition hover:-translate-y-1 hover:border-islamic-line-strong hover:shadow-xl">
				<div class="mb-4 text-3xl">📖</div>
				<h3 class="mb-2 text-lg font-semibold">{locale === 'en' ? 'Documentation' : 'Dokumentasi'}</h3>
				<p class="mb-4 text-[13px] leading-6 text-islamic-muted">
					{locale === 'en' 
						? 'Help improve documentation, examples, and guides.'
						: 'Bantu tingkatkan dokumentasi, contoh, dan panduan.'}
				</p>
				<span class="inline-flex items-center gap-2 rounded-xl bg-islamic-green px-4 py-2.5 text-sm font-semibold text-islamic-bg transition group-hover:shadow-lg">
					{locale === 'en' ? 'View Documentation' : 'Lihat Dokumentasi'}
					<svg viewBox="0 0 24 24" class="size-4 fill-none stroke-current stroke-2 transition group-hover:translate-x-1"><path d="M5 12h13M13 6l6 6-6 6"/></svg>
				</span>
			</a>
		</div>
	</section>

	<section id="github" class="mb-16">
		<h2 class="mb-4 text-2xl font-semibold">GitHub</h2>
		<p class="mb-6 text-base leading-7 text-islamic-muted">
			{locale === 'en' 
				? 'Our GitHub repository is the central hub for development. Here you can report bugs, request features, contribute code, and engage with the community through discussions and issues.'
				: 'Repository GitHub kami adalah pusat pengembangan. Di sini Anda dapat melaporkan bug, meminta fitur, berkontribusi kode, dan terlibat dengan komunitas melalui diskusi dan issues.'}
		</p>
		<div class="grid gap-4 sm:grid-cols-2">
			<div class="rounded-xl border border-islamic-line bg-islamic-panel p-5">
				<h3 class="mb-2 text-sm font-semibold">{locale === 'en' ? '🐛 Report Issues' : '🐛 Laporkan Masalah'}</h3>
				<p class="text-[13px] leading-6 text-islamic-muted">
					{locale === 'en' ? 'Found a bug or have a feature request? Open an issue on GitHub.' : 'Menemukan bug atau punya permintaan fitur? Buka issue di GitHub.'}
				</p>
			</div>
			<div class="rounded-xl border border-islamic-line bg-islamic-panel p-5">
				<h3 class="mb-2 text-sm font-semibold">{locale === 'en' ? '💡 Discussions' : '💡 Diskusi'}</h3>
				<p class="text-[13px] leading-6 text-islamic-muted">
					{locale === 'en' ? 'Join conversations about new features, design decisions, and ideas.' : 'Bergabung dalam percakapan tentang fitur baru, keputusan desain, dan ide.'}
				</p>
			</div>
			<div class="rounded-xl border border-islamic-line bg-islamic-panel p-5">
				<h3 class="mb-2 text-sm font-semibold">{locale === 'en' ? '🎨 Contribute Icons' : '🎨 Kontribusi Ikon'}</h3>
				<p class="text-[13px] leading-6 text-islamic-muted">
					{locale === 'en' ? 'Submit new icons or improve existing ones through pull requests.' : 'Kirim ikon baru atau tingkatkan yang ada melalui pull request.'}
				</p>
			</div>
			<div class="rounded-xl border border-islamic-line bg-islamic-panel p-5">
				<h3 class="mb-2 text-sm font-semibold">{locale === 'en' ? '📖 Documentation' : '📖 Dokumentasi'}</h3>
				<p class="text-[13px] leading-6 text-islamic-muted">
					{locale === 'en' ? 'Help improve documentation, examples, and guides.' : 'Bantu tingkatkan dokumentasi, contoh, dan panduan.'}
				</p>
			</div>
		</div>
		<a 
			href={REPO_URL}
			target="_blank"
			rel="noreferrer"
			class="mt-6 inline-flex items-center gap-2 rounded-xl bg-islamic-green px-5 py-3 text-sm font-semibold text-islamic-bg no-underline transition hover:-translate-y-0.5 hover:shadow-lg"
		>
			{locale === 'en' ? 'Visit GitHub Repository' : 'Kunjungi Repository GitHub'}
			<svg viewBox="0 0 24 24" class="size-4 fill-none stroke-current stroke-2"><path d="M7 17 17 7M7 7h10v10"/></svg>
		</a>
	</section>

	<section id="contributing" class="mb-16">
		<h2 class="mb-4 text-2xl font-semibold">{locale === 'en' ? 'How to Contribute' : 'Cara Berkontribusi'}</h2>
		<p class="mb-6 text-base leading-7 text-islamic-muted">
			{locale === 'en' 
				? 'We welcome contributions from everyone, regardless of experience level. Here are some ways you can help:'
				: 'Kami menerima kontribusi dari siapa saja, terlepas dari tingkat pengalaman. Berikut beberapa cara Anda dapat membantu:'}
		</p>
		<div class="space-y-4">
			<div class="flex gap-4 rounded-xl border border-islamic-line bg-islamic-panel p-5">
				<span class="text-lg">→</span>
				<div>
					<h3 class="mb-1 text-sm font-semibold">{locale === 'en' ? 'Design & Submit Icons' : 'Desain & Kirim Ikon'}</h3>
					<p class="text-[13px] leading-6 text-islamic-muted">
						{locale === 'en' 
							? 'Create new Islamic icons following our design guidelines. Submit SVG files in fill, outline, and color variants.' 
							: 'Buat ikon Islam baru mengikuti panduan desain kami. Kirim file SVG dalam varian fill, outline, dan color.'}
					</p>
				</div>
			</div>
			<div class="flex gap-4 rounded-xl border border-islamic-line bg-islamic-panel p-5">
				<span class="text-lg">→</span>
				<div>
					<h3 class="mb-1 text-sm font-semibold">{locale === 'en' ? 'Code Contributions' : 'Kontribusi Kode'}</h3>
					<p class="text-[13px] leading-6 text-islamic-muted">
						{locale === 'en' 
							? 'Improve the library code, build tools, or documentation site. Fix bugs and add new features.'
							: 'Tingkatkan kode library, alat build, atau situs dokumentasi. Perbaiki bug dan tambahkan fitur baru.'}
					</p>
				</div>
			</div>
			<div class="flex gap-4 rounded-xl border border-islamic-line bg-islamic-panel p-5">
				<span class="text-lg">→</span>
				<div>
					<h3 class="mb-1 text-sm font-semibold">{locale === 'en' ? 'Translations' : 'Terjemahan'}</h3>
					<p class="text-[13px] leading-6 text-islamic-muted">
						{locale === 'en' 
							? 'Help translate the documentation and website into more languages to reach a wider audience.'
							: 'Bantu menerjemahkan dokumentasi dan website ke lebih banyak bahasa untuk menjangkau audiens yang lebih luas.'}
					</p>
				</div>
			</div>
			<div class="flex gap-4 rounded-xl border border-islamic-line bg-islamic-panel p-5">
				<span class="text-lg">→</span>
				<div>
					<h3 class="mb-1 text-sm font-semibold">{locale === 'en' ? 'Spread the Word' : 'Sebarkan Kabar'}</h3>
					<p class="text-[13px] leading-6 text-islamic-muted">
						{locale === 'en' 
							? 'Share Islamic Icons with your network, write blog posts, or create tutorials.'
							: 'Bagikan Islamic Icons dengan jaringan Anda, tulis blog post, atau buat tutorial.'}
					</p>
				</div>
			</div>
		</div>
	</section>

	<section id="support-palestine" class="mb-16">
		<div class="rounded-2xl border border-islamic-green/20 bg-islamic-green/5 p-8">
			<h2 class="mb-4 text-2xl font-semibold text-islamic-green">{locale === 'en' ? '🇵🇸 🇸🇩 Support Palestine & Sudan' : '🇵🇸 🇸🇩 Dukung Palestina & Sudan'}</h2>
			<p class="text-base leading-7 text-islamic-muted">
				{locale === 'en' 
					? 'This project stands in solidarity with Palestine and Sudan. We believe in human rights, justice, and dignity for all people. A portion of donations is directed to humanitarian aid organizations supporting Palestinian and Sudanese communities affected by conflict and humanitarian crises.'
					: 'Proyek ini berdiri solidaritas dengan Palestina dan Sudan. Kami percaya pada hak asasi manusia, keadilan, dan martabat untuk semua orang. Sebagian donasi diarahkan ke organisasi bantuan kemanusiaan yang mendukung komunitas Palestina dan Sudan yang terkena dampak konflik dan krisis kemanusiaan.'}
			</p>
			<a href="/{locale}/donations" class="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-islamic-green">
				{locale === 'en' ? 'Learn about our donation program' : 'Pelajari tentang program donasi kami'} →
			</a>
		</div>
	</section>

	<div class="mt-10 flex flex-wrap gap-6 text-sm">
		<a href="/{locale}/contributing" class="font-medium text-islamic-green hover:underline">
			{locale === 'en' ? 'Contributing Guidelines' : 'Panduan Kontribusi'} →
		</a>
		<a href="/{locale}/code-of-conduct" class="font-medium text-islamic-green hover:underline">
			{locale === 'en' ? 'Code of Conduct' : 'Kode Etik'} →
		</a>
		<a href={REPO_URL} target="_blank" rel="noreferrer" class="font-medium text-islamic-green hover:underline">
			GitHub Repository →
		</a>
	</div>
</ResourceLayout>
