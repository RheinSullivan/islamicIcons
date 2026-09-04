<script lang="ts">
	import ResourceLayout from '$lib/components/ResourceLayout.svelte';
	import { translations, type Locale } from '$lib/i18n';
	
	let { data } = $props();
	const locale = $derived(data.locale as Locale);
	const translation = $derived(translations[locale]);
</script>

<svelte:head>
	<title>{locale === 'en' ? 'Brand Logos - Atsarul Mujahidin' : 'Logo Brand - Atsarul Mujahidin'}</title>
	<meta name="description" content={locale === 'en' ? 'Feature your brand logo in Atsarul Mujahidin by supporting humanitarian causes' : 'Tampilkan logo brand Anda di Atsarul Mujahidin dengan mendukung tujuan kemanusiaan'} />
</svelte:head>

<ResourceLayout 
	title={locale === 'en' ? 'Brand Logos Program' : 'Program Logo Brand'}
	label={locale === 'en' ? 'Partnership' : 'Kemitraan'}
>
	<section id="overview" class="mb-16">
		<h2 class="mb-4 text-2xl font-semibold">{locale === 'en' ? 'Feature Your Brand' : 'Tampilkan Brand Anda'}</h2>
		<p class="mb-6 text-base leading-7 text-islamic-muted">
			{locale === 'en' 
				? 'Islamic Icons offers a unique opportunity for brands to showcase their commitment to humanitarian causes. By participating in our Brand Logo Program, your company demonstrates solidarity with communities in need while gaining visibility among our global user base.'
				: 'Islamic Icons menawarkan kesempatan unik bagi brand untuk menunjukkan komitmen mereka terhadap tujuan kemanusiaan. Dengan berpartisipasi dalam Program Logo Brand kami, perusahaan Anda menunjukkan solidaritas dengan komunitas yang membutuhkan sambil mendapatkan visibilitas di antara basis pengguna global kami.'}
		</p>
	</section>

	<section id="requirements" class="mb-16">
		<h2 class="mb-4 text-2xl font-semibold">{locale === 'en' ? 'Requirements' : 'Persyaratan'}</h2>
		<p class="mb-6 text-base leading-7 text-islamic-muted">
			{locale === 'en' 
				? 'To have your brand logo featured in Islamic Icons, you must meet the following mandatory requirements:'
				: 'Untuk menampilkan logo brand Anda di Islamic Icons, Anda harus memenuhi persyaratan wajib berikut:'}
		</p>
		
		<div class="space-y-4">
			<div class="rounded-xl border border-islamic-green/30 bg-islamic-green/5 p-6">
				<div class="flex items-start gap-4">
					<span class="flex size-8 shrink-0 items-center justify-center rounded-lg bg-islamic-green text-islamic-bg font-bold">1</span>
					<div>
						<h3 class="mb-2 text-base font-semibold">{locale === 'en' ? 'Direct Donation Required' : 'Donasi Langsung Wajib'}</h3>
						<p class="text-[13px] leading-6 text-islamic-muted">
							{locale === 'en' 
								? 'Your brand must make a direct donation to verified humanitarian organizations supporting Palestine and/or Sudan. Donations must be sent directly to the relief agencies, not through Islamic Icons.'
								: 'Brand Anda harus melakukan donasi langsung ke organisasi kemanusiaan terverifikasi yang mendukung Palestina dan/atau Sudan. Donasi harus dikirim langsung ke lembaga bantuan, bukan melalui Islamic Icons.'}
						</p>
					</div>
				</div>
			</div>

			<div class="rounded-xl border border-islamic-green/30 bg-islamic-green/5 p-6">
				<div class="flex items-start gap-4">
					<span class="flex size-8 shrink-0 items-center justify-center rounded-lg bg-islamic-green text-islamic-bg font-bold">2</span>
					<div>
						<h3 class="mb-2 text-base font-semibold">{locale === 'en' ? 'Proof of Donation' : 'Bukti Donasi'}</h3>
						<p class="text-[13px] leading-6 text-islamic-muted">
							{locale === 'en' 
								? 'You MUST provide official proof of donation. This includes transaction receipts, confirmation emails, or official acknowledgment letters from the receiving organization. Without valid proof, your logo will not be featured.'
								: 'Anda HARUS memberikan bukti donasi resmi. Ini termasuk tanda terima transaksi, email konfirmasi, atau surat pengakuan resmi dari organisasi penerima. Tanpa bukti yang valid, logo Anda tidak akan ditampilkan.'}
						</p>
					</div>
				</div>
			</div>

			<div class="rounded-xl border border-islamic-green/30 bg-islamic-green/5 p-6">
				<div class="flex items-start gap-4">
					<span class="flex size-8 shrink-0 items-center justify-center rounded-lg bg-islamic-green text-islamic-bg font-bold">3</span>
					<div>
						<h3 class="mb-2 text-base font-semibold">{locale === 'en' ? 'Verified Organizations Only' : 'Hanya Organisasi Terverifikasi'}</h3>
						<p class="mb-3 text-[13px] leading-6 text-islamic-muted">
							{locale === 'en' 
								? 'Donations must be made to verified humanitarian organizations. We maintain a list of approved agencies:'
								: 'Donasi harus dilakukan ke organisasi kemanusiaan terverifikasi. Kami memelihara daftar lembaga yang disetujui:'}
						</p>
						<ul class="ml-4 space-y-2 text-[13px] leading-6 text-islamic-muted">
							<li>→ UNRWA (United Nations Relief and Works Agency)</li>
							<li>→ Islamic Relief Worldwide</li>
							<li>→ Human Appeal International</li>
							<li>→ Medical Aid for Palestinians (MAP)</li>
							<li>→ Palestine Children's Relief Fund (PCRF)</li>
							<li>→ Sudan Red Crescent Society</li>
							<li>→ Doctors Without Borders (MSF) - Sudan operations</li>
							<li>→ {locale === 'en' ? 'Other pre-approved organizations' : 'Organisasi lain yang telah disetujui'}</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="rounded-xl border border-islamic-green/30 bg-islamic-green/5 p-6">
				<div class="flex items-start gap-4">
					<span class="flex size-8 shrink-0 items-center justify-center rounded-lg bg-islamic-green text-islamic-bg font-bold">4</span>
					<div>
						<h3 class="mb-2 text-base font-semibold">{locale === 'en' ? 'Logo Specifications' : 'Spesifikasi Logo'}</h3>
						<p class="text-[13px] leading-6 text-islamic-muted">
							{locale === 'en' 
								? 'Submit your logo in SVG format, with transparent background, optimized for web display. Maximum dimensions: 200x80px.'
								: 'Kirim logo Anda dalam format SVG, dengan latar belakang transparan, dioptimalkan untuk tampilan web. Dimensi maksimum: 200x80px.'}
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section id="how-to-apply" class="mb-16">
		<h2 class="mb-4 text-2xl font-semibold">{locale === 'en' ? 'How to Apply' : 'Cara Mendaftar'}</h2>
		<div class="space-y-4">
			<div class="flex gap-4 rounded-xl border border-islamic-line bg-islamic-panel p-5">
				<span class="text-lg font-semibold text-islamic-green">1</span>
				<div>
					<h3 class="mb-1 text-sm font-semibold">{locale === 'en' ? 'Make Your Donation' : 'Lakukan Donasi Anda'}</h3>
					<p class="text-[13px] leading-6 text-islamic-muted">
						{locale === 'en' 
							? 'Donate directly to one of the verified humanitarian organizations listed above.'
							: 'Donasi langsung ke salah satu organisasi kemanusiaan terverifikasi yang tercantum di atas.'}
					</p>
				</div>
			</div>
			<div class="flex gap-4 rounded-xl border border-islamic-line bg-islamic-panel p-5">
				<span class="text-lg font-semibold text-islamic-green">2</span>
				<div>
					<h3 class="mb-1 text-sm font-semibold">{locale === 'en' ? 'Gather Documentation' : 'Kumpulkan Dokumentasi'}</h3>
					<p class="text-[13px] leading-6 text-islamic-muted">
						{locale === 'en' 
							? 'Collect official proof of donation (receipt, confirmation email, acknowledgment letter).'
							: 'Kumpulkan bukti donasi resmi (tanda terima, email konfirmasi, surat pengakuan).'}
					</p>
				</div>
			</div>
			<div class="flex gap-4 rounded-xl border border-islamic-line bg-islamic-panel p-5">
				<span class="text-lg font-semibold text-islamic-green">3</span>
				<div>
					<h3 class="mb-1 text-sm font-semibold">{locale === 'en' ? 'Submit Application' : 'Kirim Aplikasi'}</h3>
					<p class="text-[13px] leading-6 text-islamic-muted">
						{locale === 'en' 
							? 'Open a GitHub issue with your logo, donation proof, and organization details. We will review and verify your submission.'
							: 'Buka issue GitHub dengan logo Anda, bukti donasi, dan detail organisasi. Kami akan meninjau dan memverifikasi kiriman Anda.'}
					</p>
				</div>
			</div>
			<div class="flex gap-4 rounded-xl border border-islamic-line bg-islamic-panel p-5">
				<span class="text-lg font-semibold text-islamic-green">4</span>
				<div>
					<h3 class="mb-1 text-sm font-semibold">{locale === 'en' ? 'Logo Feature' : 'Tampilkan Logo'}</h3>
					<p class="text-[13px] leading-6 text-islamic-muted">
						{locale === 'en' 
							? 'Once verified, your logo will be featured on our website and documentation, acknowledging your humanitarian contribution.'
							: 'Setelah diverifikasi, logo Anda akan ditampilkan di website dan dokumentasi kami, mengakui kontribusi kemanusiaan Anda.'}
					</p>
				</div>
			</div>
		</div>
	</section>

	<section id="important-notes" class="mb-16">
		<div class="rounded-2xl border border-red-500/30 bg-red-500/5 p-8">
			<h2 class="mb-4 text-xl font-semibold text-red-400">{locale === 'en' ? '⚠️ Important Notes' : '⚠️ Catatan Penting'}</h2>
			<ul class="space-y-3 text-[13px] leading-6 text-islamic-muted">
				<li>→ {locale === 'en' ? 'Islamic Icons does NOT handle any donation funds. All donations must go directly to humanitarian organizations.' : 'Islamic Icons TIDAK menangani dana donasi apapun. Semua donasi harus langsung ke organisasi kemanusiaan.'}</li>
				<li>→ {locale === 'en' ? 'We reserve the right to reject any application without explanation.' : 'Kami berhak menolak aplikasi apapun tanpa penjelasan.'}</li>
				<li>→ {locale === 'en' ? 'Fake or fraudulent donation proofs will result in permanent blacklist.' : 'Bukti donasi palsu atau penipuan akan mengakibatkan daftar hitam permanen.'}</li>
				<li>→ {locale === 'en' ? 'Logo placement does not constitute endorsement of products or services.' : 'Penempatan logo tidak merupakan dukungan produk atau layanan.'}</li>
				<li>→ {locale === 'en' ? 'We may remove logos at any time if brand activities conflict with our values.' : 'Kami dapat menghapus logo kapan saja jika aktivitas brand bertentangan dengan nilai-nilai kami.'}</li>
			</ul>
		</div>
	</section>

	<section id="current-partners" class="mb-16">
		<h2 class="mb-4 text-2xl font-semibold">{locale === 'en' ? 'Current Partners' : 'Mitra Saat Ini'}</h2>
		<p class="mb-6 text-base leading-7 text-islamic-muted">
			{locale === 'en' 
				? 'These brands have demonstrated their commitment to humanitarian causes:'
				: 'Brand-brand ini telah menunjukkan komitmen mereka terhadap tujuan kemanusiaan:'}
		</p>
		<div class="rounded-2xl border border-islamic-line bg-islamic-panel p-12 text-center">
			<p class="text-sm text-islamic-dim">
				{locale === 'en' ? 'No partners yet. Be the first to support this initiative!' : 'Belum ada mitra. Jadilah yang pertama mendukung inisiatif ini!'}
			</p>
		</div>
	</section>

	<div class="mt-10 flex flex-wrap gap-6 text-sm">
		<a href="/{locale}/donations" class="font-medium text-islamic-green hover:underline">
			{locale === 'en' ? 'Donation Program' : 'Program Donasi'} →
		</a>
		<a href="/{locale}/community" class="font-medium text-islamic-green hover:underline">
			{locale === 'en' ? 'Join Community' : 'Gabung Komunitas'} →
		</a>
		<a href="https://github.com/RheinSullivan/islamic-icons/issues/new?template=brand-logo.md" target="_blank" rel="noreferrer" class="font-medium text-islamic-green hover:underline">
			{locale === 'en' ? 'Submit Application' : 'Kirim Aplikasi'} →
		</a>
	</div>
</ResourceLayout>
