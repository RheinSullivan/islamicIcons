<script lang="ts">
	import ResourceLayout from '$lib/components/ResourceLayout.svelte';
	import { translations, type Locale } from '$lib/i18n';
	
	let { data } = $props();
	const locale = $derived(data.locale as Locale);
	const t = $derived(translations[locale]);
</script>

<svelte:head>
	<title>{locale === 'en' ? 'Code of Conduct - Islamic Icons' : 'Kode Etik - Islamic Icons'}</title>
	<meta name="description" content={locale === 'en' ? 'Islamic Icons community code of conduct' : 'Kode etik komunitas Islamic Icons'} />
</svelte:head>

<ResourceLayout 
	title={locale === 'en' ? 'Code of Conduct' : 'Kode Etik'}
	label={locale === 'en' ? 'Community' : 'Komunitas'}
>
	<h2>{locale === 'en' ? 'Our Pledge' : 'Janji Kami'}</h2>
	<p>
		{locale === 'en' 
			? 'We as members, contributors, and maintainers pledge to make participation in our project and our community a harassment-free experience for everyone, regardless of age, body size, visible or invisible disability, ethnicity, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, religion, or sexual identity and orientation.'
			: 'Kami sebagai anggota, kontributor, dan pemelihara berjanji untuk membuat partisipasi dalam proyek dan komunitas kami menjadi pengalaman bebas pelecehan untuk semua orang, terlepas dari usia, ukuran tubuh, disabilitas yang terlihat atau tidak terlihat, etnisitas, identitas dan ekspresi gender, tingkat pengalaman, pendidikan, status sosial-ekonomi, kebangsaan, penampilan pribadi, ras, agama, atau identitas dan orientasi seksual.'}
	</p>

	<h2>{locale === 'en' ? 'Our Standards' : 'Standar Kami'}</h2>
	
	<h3>{locale === 'en' ? 'Positive Behavior' : 'Perilaku Positif'}</h3>
	<ul>
		<li>{locale === 'en' ? 'Using welcoming and inclusive language' : 'Menggunakan bahasa yang ramah dan inklusif'}</li>
		<li>{locale === 'en' ? 'Being respectful of differing viewpoints and experiences' : 'Menghormati sudut pandang dan pengalaman yang berbeda'}</li>
		<li>{locale === 'en' ? 'Gracefully accepting constructive criticism' : 'Menerima kritik konstruktif dengan baik'}</li>
		<li>{locale === 'en' ? 'Focusing on what is best for the community' : 'Fokus pada apa yang terbaik untuk komunitas'}</li>
		<li>{locale === 'en' ? 'Showing empathy towards other community members' : 'Menunjukkan empati kepada anggota komunitas lain'}</li>
	</ul>

	<h3>{locale === 'en' ? 'Unacceptable Behavior' : 'Perilaku Tidak Dapat Diterima'}</h3>
	<ul>
		<li>{locale === 'en' ? 'Harassment, intimidation, or discrimination in any form' : 'Pelecehan, intimidasi, atau diskriminasi dalam bentuk apa pun'}</li>
		<li>{locale === 'en' ? 'Trolling, insulting or derogatory comments, and personal attacks' : 'Trolling, komentar menghina atau merendahkan, dan serangan pribadi'}</li>
		<li>{locale === 'en' ? 'Public or private harassment' : 'Pelecehan publik atau pribadi'}</li>
		<li>{locale === 'en' ? 'Publishing others\' private information without permission' : 'Menerbitkan informasi pribadi orang lain tanpa izin'}</li>
		<li>{locale === 'en' ? 'Other conduct which could reasonably be considered inappropriate' : 'Perilaku lain yang dapat dianggap tidak pantas'}</li>
	</ul>

	<h2>{locale === 'en' ? 'Enforcement' : 'Penegakan'}</h2>
	<p>
		{locale === 'en' 
			? 'Project maintainers are responsible for clarifying the standards of acceptable behavior and are expected to take appropriate and fair corrective action in response to any instances of unacceptable behavior.'
			: 'Pemelihara proyek bertanggung jawab untuk menjelaskan standar perilaku yang dapat diterima dan diharapkan untuk mengambil tindakan korektif yang tepat dan adil sebagai respons terhadap setiap kasus perilaku yang tidak dapat diterima.'}
	</p>

	<h2>{locale === 'en' ? 'Scope' : 'Ruang Lingkup'}</h2>
	<p>
		{locale === 'en' 
			? 'This Code of Conduct applies within all project spaces, and also applies when an individual is representing the project or its community in public spaces.'
			: 'Kode Etik ini berlaku di semua ruang proyek, dan juga berlaku ketika seorang individu mewakili proyek atau komunitasnya di ruang publik.'}
	</p>

	<h2>{locale === 'en' ? 'Attribution' : 'Atribusi'}</h2>
	<p>
		{locale === 'en' 
			? 'This Code of Conduct is adapted from the Contributor Covenant, version 2.0.'
			: 'Kode Etik ini diadaptasi dari Contributor Covenant, versi 2.0.'}
	</p>
</ResourceLayout>
