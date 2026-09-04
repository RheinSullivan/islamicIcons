<script lang="ts">
	import ResourceLayout from '$lib/components/ResourceLayout.svelte';
	import { translations, type Locale } from '$lib/i18n';
	
	let { data } = $props();
	const locale = $derived(data.locale as Locale);
	const translation = $derived(translations[locale]);
	
	const REPO_URL = 'https://github.com/RheinSullivan/islamic-icons'; // Keep GitHub URL unchanged
</script>

<svelte:head>
	<title>{locale === 'en' ? 'Contributing - Atsarul Mujahidin' : 'Kontribusi - Atsarul Mujahidin'}</title>
	<meta name="description" content={locale === 'en' ? 'How to contribute to Atsarul Mujahidin' : 'Cara berkontribusi ke Atsarul Mujahidin'} />
</svelte:head>

<ResourceLayout 
	title={locale === 'en' ? 'Contributing' : 'Kontribusi'}
	label={locale === 'en' ? 'Get Involved' : 'Ikut Terlibat'}
>
	<p>
		{locale === 'en' 
			? 'Thank you for your interest in contributing to Atsarul Mujahidin! We welcome contributions from everyone.'
			: 'Terima kasih atas ketertarikan Anda untuk berkontribusi ke Atsarul Mujahidin! Kami menerima kontribusi dari siapa saja.'}
	</p>

	<h2>{locale === 'en' ? 'Ways to Contribute' : 'Cara Berkontribusi'}</h2>
	
	<div class="resource-grid">
		<div class="resource-box">
			<h3>{locale === 'en' ? 'Submit New Icons' : 'Kirim Ikon Baru'}</h3>
			<p class="mb-0">
				{locale === 'en' 
					? 'Add new icons or variants from reputable sources with proper attribution.'
					: 'Tambahkan ikon atau varian baru dari sumber terpercaya dengan atribusi yang tepat.'}
			</p>
		</div>
		
		<div class="resource-box">
			<h3>{locale === 'en' ? 'Report Issues' : 'Laporkan Masalah'}</h3>
			<p class="mb-0">
				{locale === 'en' 
					? 'Found a bug or have a feature request? Open an issue on GitHub.'
					: 'Menemukan bug atau ada permintaan fitur? Buka issue di GitHub.'}
			</p>
		</div>
		
		<div class="resource-box">
			<h3>{locale === 'en' ? 'Improve Documentation' : 'Tingkatkan Dokumentasi'}</h3>
			<p class="mb-0">
				{locale === 'en' 
					? 'Help make our documentation clearer. Fix typos, add examples, or write tutorials.'
					: 'Bantu membuat dokumentasi kami lebih jelas. Perbaiki typo, tambahkan contoh, atau tulis tutorial.'}
			</p>
		</div>
		
		<div class="resource-box">
			<h3>{locale === 'en' ? 'Code Contributions' : 'Kontribusi Kode'}</h3>
			<p class="mb-0">
				{locale === 'en' 
					? 'Improve the website, build tools, or add new framework packages.'
					: 'Tingkatkan website, alat build, atau tambahkan paket framework baru.'}
			</p>
		</div>
	</div>

	<h2>{locale === 'en' ? 'Getting Started' : 'Memulai'}</h2>
	<ol>
		<li>{locale === 'en' ? 'Fork the repository on GitHub' : 'Fork repository di GitHub'}</li>
		<li>{locale === 'en' ? 'Clone your fork locally' : 'Clone fork Anda secara lokal'}: <code>git clone https://github.com/YOUR_USERNAME/atsarul-mujahidin.git</code></li>
		<li>{locale === 'en' ? 'Create a new branch' : 'Buat branch baru'}: <code>git checkout -b feature/your-feature-name</code></li>
		<li>{locale === 'en' ? 'Make your changes and commit them with clear messages' : 'Buat perubahan dan commit dengan pesan yang jelas'}</li>
		<li>{locale === 'en' ? 'Push to your fork' : 'Push ke fork Anda'}: <code>git push origin feature/your-feature-name</code></li>
		<li>{locale === 'en' ? 'Open a Pull Request on GitHub' : 'Buka Pull Request di GitHub'}</li>
	</ol>

	<h2>{locale === 'en' ? 'Guidelines' : 'Pedoman'}</h2>
	<ul>
		<li>{locale === 'en' ? 'Follow the existing code style and conventions' : 'Ikuti gaya kode dan konvensi yang ada'}</li>
		<li>{locale === 'en' ? 'Write clear, descriptive commit messages' : 'Tulis pesan commit yang jelas dan deskriptif'}</li>
		<li>{locale === 'en' ? 'Include proper attribution for all icon sources' : 'Sertakan atribusi yang tepat untuk semua sumber ikon'}</li>
		<li>{locale === 'en' ? 'Test your changes before submitting' : 'Uji perubahan Anda sebelum mengirim'}</li>
		<li>{locale === 'en' ? 'Be respectful and follow our Code of Conduct' : 'Bersikap hormat dan ikuti Kode Etik kami'}</li>
	</ul>

	<div class="mt-10 flex gap-6">
		<a href={REPO_URL} target="_blank" rel="noreferrer" class="text-islamic-green">
			{locale === 'en' ? 'Visit GitHub' : 'Kunjungi GitHub'} →
		</a>
		<a href="/{locale}/code-of-conduct" class="text-islamic-green">
			{locale === 'en' ? 'Code of Conduct' : 'Kode Etik'} →
		</a>
	</div>
</ResourceLayout>
