<script lang="ts">
	import { MAX } from '$lib/site';
	import { translations, type Locale } from '$lib/i18n';
	let { data } = $props();
	const locale = $derived(data.locale as Locale);
	const t = $derived(translations[locale]);

	const PHOTOS = [
		{
			title: locale === 'en' ? 'Low-income families' : 'Keluarga berpenghasilan rendah',
			num: '01',
			image: 'https://ik.imagekit.io/qkwbj7b7u/charity-meals/uploads/162/family-food-parcel2.png?ik-sdk-version=php-2.0.0',
			source: 'Charity Meals', sourceUrl: 'https://charitymeals.org/projects',
			alt: locale === 'en' ? 'Family receiving a food parcel and essential supplies' : 'Keluarga menerima paket makanan dan kebutuhan pokok',
			span: 'lg:col-span-7', aspect: 'aspect-[16/10]'
		},
		{
			title: locale === 'en' ? 'Orphanage care' : 'Perawatan panti asuhan',
			num: '02',
			image: 'https://www.hopeandprosperity.org/wp-content/uploads/2020/06/5J2A7153.jpg',
			source: 'Hope & Prosperity', sourceUrl: 'https://www.hopeandprosperity.org/our-orphanage/',
			alt: locale === 'en' ? 'Children sharing a meal at an orphanage' : 'Anak-anak berbagi makanan di panti asuhan',
			span: 'lg:col-span-5', aspect: 'aspect-[4/3]'
		},
		{
			title: locale === 'en' ? 'Elderly care' : 'Perawatan lansia',
			num: '03',
			image: 'https://www.thefinancialcoconut.com/hubfs/caregivers-png-1.png',
			source: 'The Financial Coconut', sourceUrl: 'https://www.thefinancialcoconut.com/',
			alt: locale === 'en' ? 'Caregivers supporting elderly residents' : 'Perawat mendukung lansia',
			span: 'lg:col-span-4', aspect: 'aspect-[4/3]'
		},
		{
			title: 'Palestine 🇵🇸 ' + (locale === 'en' ? 'relief' : 'bantuan'),
			num: '04',
			image: 'https://help.unicef.org/mexico/sites/mexico/files/styles/facebook_share_image/public/2025-01/UNI495572.jpg?itok=q8E8Yyli',
			source: 'UNICEF', sourceUrl: 'https://help.unicef.org/mexico/es/dona-gaza',
			alt: locale === 'en' ? 'Children in Gaza waiting for humanitarian food aid' : 'Anak-anak di Gaza menunggu bantuan pangan kemanusiaan',
			span: 'lg:col-span-4', aspect: 'aspect-[4/3]'
		},
		{
			title: locale === 'en' ? 'Disaster relief' : 'Bantuan bencana',
			num: '05',
			image: 'https://en.vcci.com.vn/hm_content/uploads/247-news/FLOODS.png',
			source: 'VCCI', sourceUrl: 'https://en.vcci.com.vn/',
			alt: locale === 'en' ? 'Volunteers delivering food during a flood' : 'Relawan mengantar makanan saat banjir',
			span: 'lg:col-span-4', aspect: 'aspect-[4/3]'
		},
	];

	const AID_ITEMS = locale === 'en'
		? ['Palestine 🇵🇸 relief','Orphanages','Low-income families','Elderly care','Disaster relief']
		: ['Bantuan Palestina 🇵🇸','Panti asuhan','Keluarga berpenghasilan rendah','Perawatan lansia','Bantuan bencana'];

	const OPS_ITEMS = ['Server','CDN','Domain'];
</script>

<svelte:head>
	<title>{locale === 'en' ? 'Donations — Islamic Icons' : 'Donasi — Islamic Icons'}</title>
	<meta name="description" content={t.donations.pageDesc} />
	<meta property="og:title" content={locale === 'en' ? 'Donations — Islamic Icons' : 'Donasi — Islamic Icons'} />
	<meta property="og:description" content={t.donations.pageDesc} />
	<link rel="canonical" href="https://islamic-icons.dev/{locale}/donations" />
</svelte:head>

<div class="{MAX} pt-36 pb-16 sm:pt-44 sm:pb-24 lg:pt-32">

	<!-- Hero text -->
	<section class="gsap-container max-w-4xl">
		<span class="text-[10px] font-semibold uppercase tracking-[.18em] text-islamic-green">
			{locale === 'en' ? 'Humanitarian giving' : 'Pemberian kemanusiaan'}
		</span>
		<h1 class="mt-3 font-display text-5xl leading-[.98] tracking-[-.06em] sm:text-7xl">
			{locale === 'en'
				? 'Support people. Keep every number visible.'
				: 'Dukung sesama. Buat setiap angka terlihat.'}
		</h1>
		<p class="mt-6 max-w-3xl text-base leading-8 text-islamic-muted">
			{locale === 'en'
				? 'Islamic Icons accepts public donations with 100% financial transparency. Minimum 70% of all funds are allocated to humanitarian aid, including Palestine 🇵🇸 relief, orphanages, low-income families, elderly care and disaster relief. Up to 30% supports framework operations such as server, CDN and domain costs.'
				: 'Islamic Icons menerima donasi publik dengan transparansi keuangan 100%. Minimum 70% dari semua dana dialokasikan untuk bantuan kemanusiaan, termasuk bantuan Palestina 🇵🇸, panti asuhan, keluarga berpenghasilan rendah, perawatan lansia, dan bantuan bencana. Hingga 30% mendukung operasi framework.'}
		</p>
	</section>

	<!-- Photo grid — exact from native donationsPage() -->
	<section class="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-12">
		{#each PHOTOS as photo (photo.num)}
			<figure class="gsap-on-scroll group {photo.span}">
				<div class="relative overflow-hidden {photo.aspect} bg-islamic-panel-2">
					<img
						src={photo.image}
						alt={photo.alt}
						loading="lazy"
						referrerpolicy="no-referrer"
						class="size-full object-cover transition duration-700 group-hover:scale-[1.025]"
						onerror={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
					/>
					<div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent"></div>
				</div>
				<figcaption class="pt-4">
					<div class="flex items-baseline justify-between gap-4">
						<h2 class="font-display text-lg tracking-[-.03em]">{photo.title}</h2>
						<span class="text-[9px] uppercase tracking-[.14em] text-islamic-dim">{photo.num}</span>
					</div>
					<a href={photo.sourceUrl} target="_blank" rel="noreferrer" class="mt-2 inline-flex cursor-pointer text-[9px] text-islamic-dim hover:text-islamic-green">
						{locale === 'en' ? 'Photo:' : 'Foto:'} {photo.source} ↗
					</a>
				</figcaption>
			</figure>
		{/each}
	</section>

	<!-- Allocation section — exact from native -->
	<section class="mt-16 border-y border-islamic-line">
		<div class="grid lg:grid-cols-[1.45fr_.55fr]">
			<!-- 70% humanitarian -->
			<div class="border-b border-islamic-line py-10 lg:border-b-0 lg:border-r lg:pr-12">
				<div class="flex items-start justify-between gap-6">
					<div>
						<span class="text-[9px] font-semibold uppercase tracking-[.16em] text-islamic-green">
							{locale === 'en' ? 'Humanitarian allocation' : 'Alokasi kemanusiaan'}
						</span>
						<h2 class="mt-3 font-display text-3xl tracking-[-.04em] sm:text-4xl">
							{locale === 'en' ? '70% minimum to aid' : '70% minimum untuk bantuan'}
						</h2>
					</div>
					<span class="shrink-0 pt-1 text-[10px] font-semibold uppercase tracking-[.14em] text-islamic-green">
						{locale === 'en' ? 'Minimum' : 'Minimum'}
					</span>
				</div>
				<p class="mt-5 max-w-2xl text-[12px] leading-7 text-islamic-muted">
					{locale === 'en'
						? 'At least seventy percent of public donations is reserved for direct humanitarian priorities. The allocation is a floor, not a target to reduce aid.'
						: 'Setidaknya tujuh puluh persen donasi publik dicadangkan untuk prioritas kemanusiaan langsung. Alokasi ini adalah batas minimum, bukan target untuk mengurangi bantuan.'}
				</p>
				<div class="mt-8 grid border-t border-islamic-line sm:grid-cols-2">
					{#each AID_ITEMS as item (item)}
						<div class="border-b border-islamic-line py-4 text-[11px] text-islamic-muted sm:even:border-l sm:even:pl-5">{item}</div>
					{/each}
				</div>
			</div>
			<!-- Up to 30% ops -->
			<div class="py-10 lg:pl-12">
				<span class="text-[9px] font-semibold uppercase tracking-[.16em] text-islamic-dim">
					{locale === 'en' ? 'Framework operations' : 'Operasi framework'}
				</span>
				<h2 class="mt-3 font-display text-3xl tracking-[-.04em] sm:text-4xl">
					{locale === 'en' ? 'Up to 30%' : 'Hingga 30%'}
				</h2>
				<p class="mt-5 text-[12px] leading-7 text-islamic-muted">
					{locale === 'en'
						? 'Only infrastructure required to keep Islamic Icons available and maintainable belongs here.'
						: 'Hanya infrastruktur yang diperlukan untuk menjaga Islamic Icons tetap tersedia dan dapat dipelihara.'}
				</p>
				<div class="mt-8 border-t border-islamic-line">
					{#each OPS_ITEMS as item (item)}
						<div class="border-b border-islamic-line py-4 text-[11px] text-islamic-muted">{item}</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<!-- CTA: Buy Me a Coffee -->
	<section class="border-b border-islamic-line py-10 sm:py-12">
		<div class="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
			<div class="max-w-2xl">
				<span class="text-[9px] font-semibold uppercase tracking-[.16em] text-islamic-green">
					{locale === 'en' ? 'Public donation' : 'Donasi publik'}
				</span>
				<h2 class="mt-3 font-display text-3xl tracking-[-.04em] sm:text-4xl">Buy Me a Coffee</h2>
				<p class="mt-4 text-[12px] leading-7 text-islamic-muted">
					{locale === 'en'
						? 'Every contribution is handled under the allocation policy above. Donation records and future transparency statements belong in the public reporting document.'
						: 'Setiap kontribusi ditangani berdasarkan kebijakan alokasi di atas. Catatan donasi dan pernyataan transparansi mendatang ada di dokumen pelaporan publik.'}
				</p>
			</div>
			<a
				href="https://buymeacoffee.com/rheinsullivan"
				target="_blank"
				rel="noreferrer"
				class="inline-flex h-12 shrink-0 cursor-pointer items-center justify-center rounded-xl bg-islamic-green px-5 text-[11px] font-bold text-islamic-bg transition hover:-translate-y-0.5 hover:shadow-[0_15px_40px_rgba(115,224,174,.16)]"
			>
				Buy Me a Coffee
				<svg viewBox="0 0 24 24" aria-hidden="true" class="ml-2 size-4 fill-none stroke-current stroke-[1.8]"><path d="M5 12h13M13 6l6 6-6 6"/></svg>
			</a>
		</div>
	</section>

	<!-- Transparency policy section -->
	<section class="border-b border-islamic-line py-10 sm:py-12">
		<div class="grid gap-8 lg:grid-cols-[.55fr_1.45fr] lg:gap-14">
			<div>
				<span class="text-[9px] font-semibold uppercase tracking-[.16em] text-islamic-green">
					{locale === 'en' ? 'Transparency' : 'Transparansi'}
				</span>
				<h2 class="mt-3 font-display text-3xl tracking-[-.04em] sm:text-4xl">
					{locale === 'en' ? 'See the reporting policy.' : 'Lihat kebijakan pelaporan.'}
				</h2>
			</div>
			<div>
				<p class="max-w-3xl text-[12px] leading-7 text-islamic-muted">
					{locale === 'en'
						? 'Detailed transparency reports are maintained in '
						: 'Laporan transparansi terperinci dikelola di '}
					<code class="text-islamic-green">docs/en/donations.md</code>
					{locale === 'en'
						? ', including the allocation policy, reporting structure and links to verified statements when published.'
						: ', termasuk kebijakan alokasi, struktur pelaporan, dan tautan ke pernyataan terverifikasi.'}
				</p>
				<div class="mt-6 flex flex-wrap gap-2">
					<span class="inline-flex h-10 items-center border-b border-islamic-line px-1 text-[10px] font-semibold text-islamic-dim">docs/en/donations.md</span>
					<a href="/{locale}/docs/donations" class="inline-flex h-10 cursor-pointer items-center border-b border-islamic-green/30 px-1 text-[10px] font-semibold text-islamic-green hover:border-islamic-green">
						{locale === 'en' ? 'Read in docs' : 'Baca di dokumentasi'}
					</a>
				</div>
			</div>
		</div>
	</section>
</div>
