<script lang="ts">
	import ResourceLayout from '$lib/components/ResourceLayout.svelte';
	import { translations, type Locale } from '$lib/i18n';
	
	let { data } = $props();
	const locale = $derived(data.locale as Locale);
	const t = $derived(translations[locale]);
	
	const REPO_URL = 'https://github.com/RheinSullivan/islamic-icons';
</script>

<svelte:head>
	<title>{locale === 'en' ? 'Community - Islamic Icons' : 'Komunitas - Islamic Icons'}</title>
	<meta name="description" content={locale === 'en' ? 'Join the Islamic Icons community' : 'Bergabung dengan komunitas Islamic Icons'} />
</svelte:head>

<ResourceLayout 
	title={locale === 'en' ? 'Community' : 'Komunitas'}
	label={locale === 'en' ? 'Connect' : 'Terhubung'}
>
	<div class="resource-card">
		<h2>GitHub</h2>
		<p>
			{locale === 'en' 
				? 'Report bugs, request features, and contribute to the codebase on GitHub. Join the discussion and help shape the future of Islamic Icons.'
				: 'Laporkan bug, minta fitur, dan kontribusi ke codebase di GitHub. Bergabunglah dalam diskusi dan bantu membentuk masa depan Islamic Icons.'}
		</p>
		<a 
			href={REPO_URL}
			target="_blank"
			rel="noreferrer"
			class="mt-6 inline-flex items-center gap-2 rounded-lg bg-islamic-green px-5 py-2.5 text-sm font-medium text-islamic-bg no-underline transition hover:bg-islamic-green/90"
		>
			{locale === 'en' ? 'Visit Repository' : 'Kunjungi Repository'} →
		</a>
	</div>

	<h2>{locale === 'en' ? 'Contributing' : 'Berkontribusi'}</h2>
	<p>
		{locale === 'en' 
			? 'We welcome contributions from everyone. Whether you\'re fixing bugs, adding new icons, improving documentation, or suggesting features, your help is appreciated.'
			: 'Kami menerima kontribusi dari siapa saja. Baik Anda memperbaiki bug, menambahkan ikon baru, meningkatkan dokumentasi, atau menyarankan fitur, bantuan Anda dihargai.'}
	</p>
	
	<ul>
		<li>{locale === 'en' ? 'Submit new icons or variants from Islamic sources' : 'Kirim ikon baru atau varian dari sumber Islam'}</li>
		<li>{locale === 'en' ? 'Improve documentation and examples' : 'Tingkatkan dokumentasi dan contoh'}</li>
		<li>{locale === 'en' ? 'Report bugs and suggest features' : 'Laporkan bug dan sarankan fitur'}</li>
		<li>{locale === 'en' ? 'Help with translations' : 'Bantu dengan terjemahan'}</li>
	</ul>

	<h2>{locale === 'en' ? 'Code of Conduct' : 'Kode Etik'}</h2>
	<p>
		{locale === 'en' 
			? 'We are committed to providing a welcoming and inclusive environment for all contributors. Please read our code of conduct before participating.'
			: 'Kami berkomitmen untuk menyediakan lingkungan yang ramah dan inklusif untuk semua kontributor. Silakan baca kode etik kami sebelum berpartisipasi.'}
	</p>

	<div class="resource-card">
		<h3>{locale === 'en' ? 'Support Palestine' : 'Dukung Palestina'}</h3>
		<p class="mb-0">
			{locale === 'en' 
				? 'This project stands with Palestine. We believe in human rights, justice, and dignity for all people.'
				: 'Proyek ini mendukung Palestina. Kami percaya pada hak asasi manusia, keadilan, dan martabat untuk semua orang.'}
		</p>
	</div>

	<div class="mt-10 flex gap-6">
		<a href="/{locale}/contributing" class="text-islamic-green">
			{locale === 'en' ? 'Contributing Guide' : 'Panduan Kontribusi'} →
		</a>
		<a href="/{locale}/code-of-conduct" class="text-islamic-green">
			{locale === 'en' ? 'Code of Conduct' : 'Kode Etik'} →
		</a>
	</div>
</ResourceLayout>
