<script lang="ts">
	import ResourceLayout from '$lib/components/ResourceLayout.svelte';
	import { translations, type Locale } from '$lib/i18n';
	
	let { data } = $props();
	const locale = $derived(data.locale as Locale);
	const translation = $derived(translations[locale]);
</script>

<svelte:head>
	<title>{locale === 'en' ? 'Code of Conduct - Islamic Icons' : 'Kode Etik - Islamic Icons'}</title>
	<meta name="description" content={locale === 'en' ? 'Community guidelines and code of conduct for Islamic Icons contributors' : 'Panduan komunitas dan kode etik untuk kontributor Islamic Icons'} />
</svelte:head>

<ResourceLayout 
	title={locale === 'en' ? 'Code of Conduct' : 'Kode Etik'}
	label={locale === 'en' ? 'Community' : 'Komunitas'}
>
	<section id="our-pledge" class="mb-16">
		<h2 class="mb-4 text-2xl font-semibold">{locale === 'en' ? 'Our Pledge' : 'Janji Kami'}</h2>
		<p class="text-base leading-7 text-islamic-muted">
			{locale === 'en' 
				? 'We as members, contributors, and maintainers pledge to make participation in our project and community a harassment-free experience for everyone, regardless of age, body size, visible or invisible disability, ethnicity, sex characteristics, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, caste, color, religion, or sexual identity and orientation.'
				: 'Kami sebagai anggota, kontributor, dan pemelihara berjanji untuk membuat partisipasi dalam proyek dan komunitas kami menjadi pengalaman bebas pelecehan untuk semua orang, terlepas dari usia, ukuran tubuh, disabilitas yang terlihat atau tidak terlihat, etnisitas, karakteristik seks, identitas dan ekspresi gender, tingkat pengalaman, pendidikan, status sosial-ekonomi, kebangsaan, penampilan pribadi, ras, kasta, warna kulit, agama, atau identitas dan orientasi seksual.'}
		</p>
		<p class="mt-4 text-base leading-7 text-islamic-muted">
			{locale === 'en'
				? 'We pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and healthy community.'
				: 'Kami berjanji untuk bertindak dan berinteraksi dengan cara yang berkontribusi pada komunitas yang terbuka, ramah, beragam, inklusif, dan sehat.'}
		</p>
	</section>

	<section id="our-standards" class="mb-16">
		<h2 class="mb-4 text-2xl font-semibold">{locale === 'en' ? 'Our Standards' : 'Standar Kami'}</h2>
		
		<h3 class="mb-3 text-lg font-semibold">{locale === 'en' ? 'Examples of Positive Behavior' : 'Contoh Perilaku Positif'}</h3>
		<div class="mb-8 space-y-3">
			<div class="flex gap-3 rounded-xl border border-islamic-line bg-islamic-panel p-4">
				<span class="text-islamic-green">✓</span>
				<p class="text-[13px] leading-6 text-islamic-muted">
					{locale === 'en' ? 'Demonstrating empathy and kindness toward other people' : 'Menunjukkan empati dan kebaikan kepada orang lain'}
				</p>
			</div>
			<div class="flex gap-3 rounded-xl border border-islamic-line bg-islamic-panel p-4">
				<span class="text-islamic-green">✓</span>
				<p class="text-[13px] leading-6 text-islamic-muted">
					{locale === 'en' ? 'Being respectful of differing opinions, viewpoints, and experiences' : 'Menghormati pendapat, sudut pandang, dan pengalaman yang berbeda'}
				</p>
			</div>
			<div class="flex gap-3 rounded-xl border border-islamic-line bg-islamic-panel p-4">
				<span class="text-islamic-green">✓</span>
				<p class="text-[13px] leading-6 text-islamic-muted">
					{locale === 'en' ? 'Giving and gracefully accepting constructive feedback' : 'Memberikan dan menerima umpan balik konstruktif dengan baik'}
				</p>
			</div>
			<div class="flex gap-3 rounded-xl border border-islamic-line bg-islamic-panel p-4">
				<span class="text-islamic-green">✓</span>
				<p class="text-[13px] leading-6 text-islamic-muted">
					{locale === 'en' ? 'Accepting responsibility and apologizing to those affected by our mistakes' : 'Menerima tanggung jawab dan meminta maaf kepada yang terkena dampak kesalahan kita'}
				</p>
			</div>
			<div class="flex gap-3 rounded-xl border border-islamic-line bg-islamic-panel p-4">
				<span class="text-islamic-green">✓</span>
				<p class="text-[13px] leading-6 text-islamic-muted">
					{locale === 'en' ? 'Focusing on what is best not just for us as individuals, but for the overall community' : 'Fokus pada apa yang terbaik bukan hanya untuk kita sebagai individu, tetapi untuk komunitas secara keseluruhan'}
				</p>
			</div>
		</div>

		<h3 class="mb-3 text-lg font-semibold">{locale === 'en' ? 'Examples of Unacceptable Behavior' : 'Contoh Perilaku Tidak Dapat Diterima'}</h3>
		<div class="space-y-3">
			<div class="flex gap-3 rounded-xl border border-red-500/20 bg-red-500/5 p-4">
				<span class="text-red-400">✗</span>
				<p class="text-[13px] leading-6 text-islamic-muted">
					{locale === 'en' ? 'The use of sexualized language or imagery, and sexual attention or advances of any kind' : 'Penggunaan bahasa atau gambar yang bersifat seksual, dan perhatian atau rayuan seksual dalam bentuk apa pun'}
				</p>
			</div>
			<div class="flex gap-3 rounded-xl border border-red-500/20 bg-red-500/5 p-4">
				<span class="text-red-400">✗</span>
				<p class="text-[13px] leading-6 text-islamic-muted">
					{locale === 'en' ? 'Trolling, insulting or derogatory comments, and personal or political attacks' : 'Trolling, komentar menghina atau merendahkan, dan serangan pribadi atau politik'}
				</p>
			</div>
			<div class="flex gap-3 rounded-xl border border-red-500/20 bg-red-500/5 p-4">
				<span class="text-red-400">✗</span>
				<p class="text-[13px] leading-6 text-islamic-muted">
					{locale === 'en' ? 'Public or private harassment' : 'Pelecehan publik atau pribadi'}
				</p>
			</div>
			<div class="flex gap-3 rounded-xl border border-red-500/20 bg-red-500/5 p-4">
				<span class="text-red-400">✗</span>
				<p class="text-[13px] leading-6 text-islamic-muted">
					{locale === 'en' ? 'Publishing others\' private information without explicit permission' : 'Menerbitkan informasi pribadi orang lain tanpa izin eksplisit'}
				</p>
			</div>
			<div class="flex gap-3 rounded-xl border border-red-500/20 bg-red-500/5 p-4">
				<span class="text-red-400">✗</span>
				<p class="text-[13px] leading-6 text-islamic-muted">
					{locale === 'en' ? 'Other conduct which could reasonably be considered inappropriate in a professional setting' : 'Perilaku lain yang secara wajar dapat dianggap tidak pantas dalam lingkungan profesional'}
				</p>
			</div>
		</div>
	</section>

	<section id="enforcement" class="mb-16">
		<h2 class="mb-4 text-2xl font-semibold">{locale === 'en' ? 'Enforcement Responsibilities' : 'Tanggung Jawab Penegakan'}</h2>
		<p class="mb-4 text-base leading-7 text-islamic-muted">
			{locale === 'en' 
				? 'Community leaders are responsible for clarifying and enforcing our standards of acceptable behavior and will take appropriate and fair corrective action in response to any behavior that they deem inappropriate, threatening, offensive, or harmful.'
				: 'Pemimpin komunitas bertanggung jawab untuk menjelaskan dan menegakkan standar perilaku yang dapat diterima dan akan mengambil tindakan korektif yang tepat dan adil sebagai respons terhadap perilaku yang dianggap tidak pantas, mengancam, ofensif, atau berbahaya.'}
		</p>
		<p class="text-base leading-7 text-islamic-muted">
			{locale === 'en'
				? 'Community leaders have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned with this Code of Conduct, and will communicate reasons for moderation decisions when appropriate.'
				: 'Pemimpin komunitas memiliki hak dan tanggung jawab untuk menghapus, mengedit, atau menolak komentar, commit, kode, edit wiki, issue, dan kontribusi lain yang tidak sejalan dengan Kode Etik ini, dan akan mengkomunikasikan alasan keputusan moderasi bila diperlukan.'}
		</p>
	</section>

	<section id="scope" class="mb-16">
		<h2 class="mb-4 text-2xl font-semibold">{locale === 'en' ? 'Scope' : 'Ruang Lingkup'}</h2>
		<p class="text-base leading-7 text-islamic-muted">
			{locale === 'en' 
				? 'This Code of Conduct applies within all community spaces, and also applies when an individual is officially representing the community in public spaces. Examples of representing our community include using an official email address, posting via an official social media account, or acting as an appointed representative at an online or offline event.'
				: 'Kode Etik ini berlaku di semua ruang komunitas, dan juga berlaku ketika seorang individu secara resmi mewakili komunitas di ruang publik. Contoh mewakili komunitas kami termasuk menggunakan alamat email resmi, posting melalui akun media sosial resmi, atau bertindak sebagai perwakilan yang ditunjuk di acara online atau offline.'}
		</p>
	</section>

	<section id="attribution" class="mb-16">
		<h2 class="mb-4 text-2xl font-semibold">{locale === 'en' ? 'Attribution' : 'Atribusi'}</h2>
		<p class="text-base leading-7 text-islamic-muted">
			{locale === 'en' 
				? 'This Code of Conduct is adapted from the Contributor Covenant, version 2.1, available at'
				: 'Kode Etik ini diadaptasi dari Contributor Covenant, versi 2.1, tersedia di'}
			<a href="https://www.contributor-covenant.org/version/2/1/code_of_conduct.html" target="_blank" rel="noreferrer" class="text-islamic-green hover:underline">
				https://www.contributor-covenant.org/version/2/1/code_of_conduct.html
			</a>
		</p>
	</section>

	<div class="mt-10 flex flex-wrap gap-6 text-sm">
		<a href="/{locale}/community" class="font-medium text-islamic-green hover:underline">
			{locale === 'en' ? 'Join Community' : 'Gabung Komunitas'} →
		</a>
		<a href="/{locale}/contributing" class="font-medium text-islamic-green hover:underline">
			{locale === 'en' ? 'Contributing Guidelines' : 'Panduan Kontribusi'} →
		</a>
	</div>
</ResourceLayout>
