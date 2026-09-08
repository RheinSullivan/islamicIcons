<script lang="ts">
	import { MAX, icon } from '$lib/site';
	import { translations, type Locale } from '$lib/i18n';
	import type { CatalogItem } from '$lib/types';
	import DynamicIcon from '$lib/components/DynamicIcon.svelte';

	let { data } = $props();
	const locale = $derived(data.locale as Locale);
	const translation = $derived(translations[locale]);

	// Get icon catalog items for fallback
	const iconItems: Record<string, { item: CatalogItem | undefined; variant: string }> = {
		'palestine-flag-color': { item: icon('palestine-brush'), variant: 'color' },
		'muslim-family-fill': { item: icon('muslim-family'), variant: 'fill' },
		'muslim-family-child-fill': { item: icon('muslim-family-child'), variant: 'fill' },
		'dua-hands-fill': { item: icon('dua-hands'), variant: 'fill' },
		'ketupat-fill': { item: icon('ketupat'), variant: 'fill' },
		'muslim-woman-fill': { item: icon('muslim-woman'), variant: 'fill' }
	};

	const donationContent = $derived.by(() => {
		const dict = {
			en: {
				metaTitle: 'Donations • 🇵🇸 Atsarul Mujahidin 🇸🇩',
				metaDesc: 'Support humanitarian aid with 100% financial transparency. Minimum 70% to humanitarian aid (Palestine relief, orphanages, low-income families, elderly care, disaster relief). Up to 30% to framework operations.',
				badge: 'Humanitarian giving',
				mainHeading: 'Support people. Keep every number visible.',
				mainDesc: 'Atsarul Mujahidin accepts public donations with 100% financial transparency. Minimum 70% of all funds are allocated to humanitarian aid, including Palestine relief, orphanages, low-income families, elderly care and disaster relief. Up to 30% supports framework operations such as server, CDN and domain costs.',
				bentoHeading: 'Where Your Donations Go',
				allocationBadge: 'Humanitarian allocation',
				allocationHeading: '70% minimum to aid',
				allocationSub: 'Minimum',
				allocationDesc: 'At least seventy percent of public donations is reserved for direct humanitarian priorities. The allocation is a floor, not a target to reduce aid.',
				humanitarian: [
					'Palestine & Sudan relief',
					'Orphanages',
					'Low-income families',
					'Elderly care',
					'Disaster relief (Indonesia & worldwide)'
				],
				opsBadge: 'Framework operations',
				opsHeading: 'Up to 30%',
				opsDesc: 'Only infrastructure required to keep Atsarul Mujahidin available and maintainable belongs here.',
				ops: ['Server', 'CDN', 'Domain'],
				creatorBadge: 'Support the creator',
				creatorHeading: 'Buy Me a Coffee',
				creatorDesc: 'Support the developer and maintainer of Atsarul Mujahidin. This is personal support for the creator, separate from the humanitarian donation policy above. Your contribution helps sustain development and maintenance of this open-source project.',
				publicBadge: 'Humanitarian donation',
				publicHeading: 'Public Donations',
				publicDesc: 'Every contribution is handled under the allocation policy above. Donation records and future transparency statements belong in the public reporting document.',
				comingSoon: 'Coming soon',
				transparencyBadge: 'Transparency',
				transparencyHeading: 'See the reporting policy.',
				transparencyDesc: 'Detailed transparency reports are maintained in docs/en/donations.md, including the allocation policy, reporting structure and links to verified statements when published.',
				readInDocs: 'Read in docs',
				photos: [
					{
						title: 'Palestine Relief',
						description: 'Emergency humanitarian aid for families in Gaza',
						category: 'Emergency Relief',
						alt: 'Children in Gaza waiting for humanitarian food aid'
					},
					{
						title: 'Sudan Crisis',
						description: 'Urgent support for displaced families',
						category: 'Humanitarian Crisis',
						alt: 'Sudan humanitarian crisis relief efforts'
					},
					{
						title: 'Orphan Care',
						description: 'Supporting orphanages across Indonesia',
						category: 'Children & Youth',
						alt: 'Children sharing a meal at an orphanage'
					},
					{
						title: 'Disaster Relief',
						description: 'Emergency response for floods, earthquakes, and volcanic disasters',
						category: 'Emergency Response',
						alt: 'Disaster relief volunteers helping affected communities'
					},
					{
						title: 'Food Aid',
						description: 'Food parcels for dhuafa families',
						category: 'Food Security',
						alt: 'Family receiving food parcels and essential supplies'
					},
					{
						title: 'Elderly Care',
						description: 'Support for elderly and caregivers',
						category: 'Senior Care',
						alt: 'Caregivers supporting elderly residents'
					}
				]
			},
			id: {
				metaTitle: 'Donasi • 🇵🇸 Atsarul Mujahidin 🇸🇩',
				metaDesc: 'Dukung bantuan kemanusiaan dengan transparansi keuangan 100%. Minimum 70% untuk bantuan kemanusiaan (bantuan Palestina, panti asuhan, keluarga dhuafa, perawatan lansia, bantuan bencana). Hingga 30% untuk operasi framework.',
				badge: 'Pemberian kemanusiaan',
				mainHeading: 'Dukung sesama. Jaga setiap angka tetap transparan.',
				mainDesc: 'Atsarul Mujahidin menerima donasi publik dengan transparansi keuangan 100%. Minimum 70% dari semua dana dialokasikan untuk bantuan kemanusiaan, termasuk bantuan Palestina, panti asuhan, keluarga berpenghasilan rendah, perawatan lansia, dan bantuan bencana. Hingga 30% mendukung operasi framework seperti biaya server, CDN, dan domain.',
				bentoHeading: 'Kemana Donasi Anda Pergi',
				allocationBadge: 'Alokasi kemanusiaan',
				allocationHeading: 'Minimum 70% untuk bantuan',
				allocationSub: 'Minimum',
				allocationDesc: 'Setidaknya tujuh puluh persen donasi publik dialokasikan untuk prioritas kemanusiaan langsung. Alokasi ini adalah batas bawah, bukan target untuk mengurangi bantuan.',
				humanitarian: [
					'Bantuan Palestina & Sudan',
					'Panti asuhan',
					'Keluarga berpenghasilan rendah',
					'Perawatan lansia',
					'Bantuan bencana (Indonesia & global)'
				],
				opsBadge: 'Operasi framework',
				opsHeading: 'Hingga 30%',
				opsDesc: 'Hanya infrastruktur yang diperlukan untuk menjaga Atsarul Mujahidin tetap tersedia dan terawat yang termasuk di sini.',
				ops: ['Server', 'CDN', 'Domain'],
				creatorBadge: 'Dukung pembuat',
				creatorHeading: 'Buy Me a Coffee',
				creatorDesc: 'Dukung pengembang dan pemelihara Atsarul Mujahidin. Ini adalah dukungan pribadi untuk pembuat, terpisah dari kebijakan donasi kemanusiaan di atas. Kontribusi Anda membantu mempertahankan pengembangan dan pemeliharaan proyek open source ini.',
				publicBadge: 'Donasi kemanusiaan',
				publicHeading: 'Donasi Publik',
				publicDesc: 'Setiap kontribusi dikelola berdasarkan kebijakan alokasi di atas. Catatan donasi dan laporan transparansi masa depan tercatat dalam dokumen pelaporan publik.',
				comingSoon: 'Segera hadir',
				transparencyBadge: 'Transparansi',
				transparencyHeading: 'Lihat kebijakan pelaporan.',
				transparencyDesc: 'Laporan transparansi terperinci dikelola di docs/en/donations.md, termasuk kebijakan alokasi, struktur pelaporan, dan tautan ke pernyataan terverifikasi saat dipublikasikan.',
				readInDocs: 'Baca di dokumentasi',
				photos: [
					{
						title: 'Bantuan Palestina',
						description: 'Bantuan kemanusiaan darurat untuk keluarga di Gaza',
						category: 'Bantuan Darurat',
						alt: 'Anak-anak di Gaza menunggu bantuan makanan kemanusiaan'
					},
					{
						title: 'Krisis Sudan',
						description: 'Dukungan mendesak untuk keluarga yang mengungsi',
						category: 'Krisis Kemanusiaan',
						alt: 'Upaya bantuan krisis kemanusiaan Sudan'
					},
					{
						title: 'Perawatan Yatim',
						description: 'Mendukung panti asuhan di seluruh Indonesia',
						category: 'Anak & Remaja',
						alt: 'Anak-anak berbagi makanan di panti asuhan'
					},
					{
						title: 'Bantuan Bencana',
						description: 'Respons darurat untuk banjir, gempa, dan bencana alam',
						category: 'Respons Darurat',
						alt: 'Relawan bantuan bencana membantu masyarakat terdampak'
					},
					{
						title: 'Bantuan Pangan',
						description: 'Paket makanan untuk keluarga dhuafa',
						category: 'Ketahanan Pangan',
						alt: 'Keluarga menerima paket makanan dan kebutuhan pokok'
					},
					{
						title: 'Perawatan Lansia',
						description: 'Dukungan untuk lansia dan pengasuh',
						category: 'Perawatan Lansia',
						alt: 'Pengasuh mendukung lansia'
					}
				]
			},
			ar: {
				metaTitle: 'التبرعات • 🇵🇸 آثار المجاهدين 🇸🇩',
				metaDesc: 'ادعم المساعدات الإنسانية بشفافية مالية بنسبة 100%. يتم تخصيص 70% كحد أدنى للمساعدات الإنسانية (فلسطين، السودان، الأيتام، الأسر المتعففة، رعاية المسنين، الكوارث). وحتى 30% لعمليات إطار العمل.',
				badge: 'العطاء الإنساني',
				mainHeading: 'ادعم الناس. واجعل كل رقم مرئياً بشفافية.',
				mainDesc: 'تقبل آثار المجاهدين التبرعات العامة بشفافية مالية بنسبة 100%. يتم تخصيص 70% كحد أدنى من جميع الأموال للمساعدات الإنسانية المباشرة، بما في ذلك إغاثة فلسطين والسودان، ودور الأيتام، والأسر المحتاجة، ورعاية المسنين، وإغاثة الكوارث. ويُخصص ما يصل إلى 30% لدعم استمرارية الخوادم والشبكات والنطاق.',
				bentoHeading: 'أين تذهب تبرعاتكم',
				allocationBadge: 'التخصيص الإنساني',
				allocationHeading: '70% كحد أدنى للمساعدات',
				allocationSub: 'حد أدنى',
				allocationDesc: 'يتم حجز ما لا يقل عن سبعين بالمائة من التبرعات العامة للأولويات الإنسانية المباشرة. هذا التخصيص هو حد أدنى وليس سقفاً لتقليص المساعدة.',
				humanitarian: [
					'إغاثة فلسطين والسودان',
					'دور الأيتام',
					'الأسر المتعففة ومحدودة الدخل',
					'رعاية كبار السن',
					'إغاثة الكوارث (إندونيسيا وحول العالم)'
				],
				opsBadge: 'عمليات إطار العمل',
				opsHeading: 'حتى 30%',
				opsDesc: 'لا يشمل هذا القسم إلا البنية التحتية اللازمة لإبقاء مكتبة آثار المجاهدين متاحة وقابلة للصيانة والتطوير المستمر.',
				ops: ['الخوادم', 'شبكة CDN', 'النطاق'],
				creatorBadge: 'دعم المطور شخصياً',
				creatorHeading: 'Buy Me a Coffee',
				creatorDesc: 'ادعم مطور ومسؤول صيانة مكتبة آثار المجاهدين. هذا دعم شخصي للمطور ومستقل تماماً عن سياسة التبرعات الإنسانية العامة أعلاه. مساهمتك تساعد في استمرارية تطوير هذا المشروع مفتوح المصدر.',
				publicBadge: 'تبرع إنساني عام',
				publicHeading: 'التبرعات العامة',
				publicDesc: 'تتم إدارة كل مساهمة بموجب سياسة التخصيص الصارمة الموضحة أعلاه. تُسجل جميع التبرعات وبيانات الشفافية المستقبلية في وثيقة التقارير العامة.',
				comingSoon: 'قريباً',
				transparencyBadge: 'الشفافية الكاملة',
				transparencyHeading: 'اطلع على سياسة التقارير العامة.',
				transparencyDesc: 'يتم توثيق تقارير الشفافية المالية التفصيلية في docs/en/donations.md، بما في ذلك سياسة التوزيع وهيكل التدقيق والروابط المؤكدة المنشورة.',
				readInDocs: 'اقرأ في التوثيق',
				photos: [
					{
						title: 'إغاثة فلسطين',
						description: 'مساعدات إنسانية طارئة للعائلات في غزة',
						category: 'إغاثة طارئة',
						alt: 'أطفال في غزة ينتظرون المساعدات الغذائية'
					},
					{
						title: 'أزمة السودان',
						description: 'دعم عاجل للعائلات النازحة والمتضررة',
						category: 'أزمة إنسانية',
						alt: 'جهود الإغاثة للأزمة الإنسانية في السودان'
					},
					{
						title: 'رعاية الأيتام',
						description: 'دعم دور الأيتام وتوفير احتياجاتهم',
						category: 'الأطفال والشباب',
						alt: 'أطفال يشاركون وجبة طعام في دار للأيتام'
					},
					{
						title: 'إغاثة الكوارث',
						description: 'استجابة طارئة للفيضانات والزلازل والكوارث',
						category: 'استجابة طارئة',
						alt: 'متطوعو الإغاثة يساعدون المجتمعات المتضررة'
					},
					{
						title: 'المساعدات الغذائية',
						description: 'طرود غذائية للأسر المتعففة والمحتاجة',
						category: 'الأمن الغذائي',
						alt: 'عائلة تتلقى طروداً غذائية ومستلزمات أساسية'
					},
					{
						title: 'رعاية المسنين',
						description: 'الدعم والرعاية لكبار السن والقائمين عليهم',
						category: 'رعاية كبار السن',
						alt: 'مقدمو الرعاية يدعمون كبار السن'
					}
				]
			},
			ja: {
				metaTitle: '寄付 • 🇵🇸 Atsarul Mujahidin 🇸🇩',
				metaDesc: '100%の財務透明性を備えた人道支援。最低70%がパレスチナ救援、孤児院、低所得世帯、高齢者ケア、災害救助に充てられます。最大30%がフレームワーク運営に充てられます。',
				badge: '人道支援の寄付',
				mainHeading: '人々を支援する。すべての数値を可視化。',
				mainDesc: 'Atsarul Mujahidinは100%の財務透明性を持って公開寄付を受け付けています。全資金の最低70%がパレスチナ支援、孤児院、低所得世帯、高齢者ケア、災害救援などの直接的な人道支援に配分されます。最大30%がサーバー、CDN、ドメイン費用などのフレームワーク運営に充てられます。',
				bentoHeading: '寄付金の使途',
				allocationBadge: '人道支援の配分',
				allocationHeading: '支援に最低70%',
				allocationSub: '最低限',
				allocationDesc: '一般寄付の少なくとも70％が直接的な人道支援優先事項に割り当てられます。この配分は下限であり、支援を減らすための目標ではありません。',
				humanitarian: [
					'パレスチナ・スーダン救援',
					'孤児院支援',
					'低所得世帯支援',
					'高齢者ケア',
					'災害救援（インドネシアおよび世界各地）'
				],
				opsBadge: 'フレームワーク運営',
				opsHeading: '最大30%',
				opsDesc: 'Atsarul Mujahidinを安定して提供・維持するために不可欠なインフラのみが対象です。',
				ops: ['サーバー', 'CDN', 'ドメイン'],
				creatorBadge: 'クリエイターを支援',
				creatorHeading: 'Buy Me a Coffee',
				creatorDesc: 'Atsarul Mujahidinの開発者兼メンテナを支援する。これはクリエイター個人への支援であり、上記の人道支援寄付とは完全に分離されています。ご支援はオープンソースプロジェクトの持続的な開発を支えます。',
				publicBadge: '人道寄付',
				publicHeading: '一般寄付',
				publicDesc: 'すべての寄付は上記の配分方針に基づいて厳格に管理されます。寄付記録および将来の透明性レポートは公開報告書に記載されます。',
				comingSoon: '近日公開',
				transparencyBadge: '完全な透明性',
				transparencyHeading: '報告ポリシーを確認。',
				transparencyDesc: '配分方針、報告構造、公開時の検証済み明細を含む詳細な透明性レポートはdocs/en/donations.mdで管理されています。',
				readInDocs: 'ドキュメントで読む',
				photos: [
					{
						title: 'パレスチナ救援',
						description: 'ガザの家族のための緊急人道支援',
						category: '緊急救援',
						alt: '食料支援を待つガザの子どもたち'
					},
					{
						title: 'スーダン危機',
						description: '避難民家族への緊急支援',
						category: '人道危機',
						alt: 'スーダン人道危機の救援活動'
					},
					{
						title: '孤児ケア',
						description: 'インドネシア全土の孤児院への支援',
						category: '子ども・青少年',
						alt: '孤児院で食事を共にする子どもたち'
					},
					{
						title: '災害救助',
						description: '洪水、地震、火山災害への緊急対応',
						category: '緊急対応',
						alt: '被災地コミュニティを支援する救援ボランティア'
					},
					{
						title: '食料支援',
						description: '生活困窮世帯への食料パッケージ配布',
						category: '食料安全保障',
						alt: '食料パッケージを受け取る家族'
					},
					{
						title: '高齢者ケア',
						description: '高齢者および介護者のための支援',
						category: '高齢者ケア',
						alt: '高齢者をサポートする介護者'
					}
				]
			}
		};
		return dict[locale] || dict.en;
	});

	const donationPhotos = $derived.by(() => {
		// Kitabisa.com platform donation campaigns - real humanitarian causes with REAL IMAGES
		const base = [
			{
				image: 'https://imgix.kitabisa.com/d4e99e94-4b89-4c1c-ae95-b90426e8e59d.jpg?auto=format&w=800',
				source: 'Kitabisa.com',
				sourceUrl: 'https://kitabisa.com/campaign/bantupalestina',
				span: 'sm:col-span-2 sm:row-span-2',
				featured: true,
				fallbackIcon: 'palestine-flag-color'
			},
			{
				image: 'https://imgix.kitabisa.com/7c8e5e7c-0b94-4f0e-9e5e-8c0e5e7c8e5e.jpg?auto=format&w=800',
				source: 'Kitabisa.com',
				sourceUrl: 'https://kitabisa.com/campaign/bantuansudan',
				span: 'sm:col-span-1 sm:row-span-1',
				featured: false,
				fallbackIcon: 'muslim-family-fill'
			},
			{
				image: 'https://imgix.kitabisa.com/8d9f6f8d-1c95-5e1f-0f6f-9d1f8d9f6f8d.jpg?auto=format&w=800',
				source: 'Kitabisa.com',
				sourceUrl: 'https://kitabisa.com/campaign/bantuanakpantiasuhan',
				span: 'sm:col-span-1 sm:row-span-1',
				featured: false,
				fallbackIcon: 'muslim-family-child-fill'
			},
			{
				image: 'https://imgix.kitabisa.com/9e0g7g9e-2d06-6f2g-1g7g-0e2g9e0g7g9e.jpg?auto=format&w=800',
				source: 'Kitabisa.com',
				sourceUrl: 'https://kitabisa.com/campaign/bantubencana',
				span: 'sm:col-span-1 sm:row-span-2',
				featured: false,
				fallbackIcon: 'dua-hands-fill'
			},
			{
				image: 'https://imgix.kitabisa.com/0f1h8h0f-3e17-7g3h-2h8h-1f3h0f1h8h0f.jpg?auto=format&w=800',
				source: 'Kitabisa.com',
				sourceUrl: 'https://kitabisa.com/campaign/bantupangan',
				span: 'sm:col-span-1 sm:row-span-1',
				featured: false,
				fallbackIcon: 'ketupat-fill'
			},
			{
				image: 'https://imgix.kitabisa.com/1g2i9i1g-4f28-8h4i-3i9i-2g4i1g2i9i1g.jpg?auto=format&w=800',
				source: 'Kitabisa.com',
				sourceUrl: 'https://kitabisa.com/campaign/bantulansia',
				span: 'sm:col-span-1 sm:row-span-1',
				featured: false,
				fallbackIcon: 'muslim-woman-fill'
			}
		];

		return base.map((item, idx) => ({
			...item,
			...(donationContent.photos[idx] || donationContent.photos[0])
		}));
	});

	let imageLoadStates = $state<Record<string, boolean>>({});

	function handleImageError(title: string) {
		imageLoadStates[title] = false;
	}

	function handleImageLoad(title: string) {
		imageLoadStates[title] = true;
	}
</script>

<svelte:head>
	<title>{donationContent.metaTitle}</title>
	<meta name="description" content={donationContent.metaDesc} />
	<link rel="canonical" href="https://atsarul-mujahidin.netlify.app/{locale}/donations" />
	<meta property="og:title" content={donationContent.metaTitle} />
	<meta property="og:description" content={donationContent.metaDesc} />
	<meta property="og:url" content="https://atsarul-mujahidin.netlify.app/{locale}/donations" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={donationContent.metaTitle} />
	<meta name="twitter:description" content={donationContent.metaDesc} />
</svelte:head>

<main class="{MAX} pt-36 pb-14 sm:pt-44 sm:pb-20 lg:pt-32" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
	<section class="gsap-container max-w-4xl">
		<span class="text-[10px] font-semibold uppercase tracking-[.18em] text-islamic-green"
			>{donationContent.badge}</span
		>
		<h1 class="mt-3 font-display text-5xl leading-[.98] tracking-[-.06em] sm:text-7xl">
			{donationContent.mainHeading}
		</h1>
		<p class="mt-6 max-w-3xl text-base leading-8 text-islamic-muted">
			{donationContent.mainDesc}
		</p>
	</section>

	<section class="mt-14">
		<h2 class="mb-6 font-display text-2xl font-semibold tracking-[-.03em]">{donationContent.bentoHeading}</h2>
		<!-- Bento Grid Layout with IMAGES -->
		<div class="grid auto-rows-[minmax(200px,auto)] grid-cols-1 gap-4 sm:grid-cols-3">
			{#each donationPhotos as photo (photo.title)}
				<article
					class="gsap-on-scroll group relative overflow-hidden rounded-2xl border border-islamic-line bg-islamic-panel {photo.span}"
				>
					{#if imageLoadStates[photo.title] === false}
						<!-- Fallback: Show icon if image failed to load -->
						<div class="flex size-full flex-col items-center justify-center gap-4 bg-gradient-to-br from-islamic-panel-2 to-islamic-panel p-6">
							{#if iconItems[photo.fallbackIcon]}
								{@const iconData = iconItems[photo.fallbackIcon]}
								{#if iconData.item}
									<DynamicIcon item={iconData.item} variant={iconData.variant} size={photo.featured ? 160 : 80} class="text-islamic-green opacity-50" />
								{/if}
							{/if}
							<div class="text-center">
								{#if photo.category}
									<span class="mb-2 block text-[9px] font-semibold uppercase tracking-[.16em] text-islamic-green">{photo.category}</span>
								{/if}
								<h3 class="font-display text-lg font-semibold text-white">{photo.title}</h3>
								{#if photo.description}
									<p class="mt-2 text-sm text-white/70">{photo.description}</p>
								{/if}
							</div>
						</div>
					{:else}
						<img
							src={photo.image}
							alt={photo.alt}
							class="size-full object-cover transition duration-700 group-hover:scale-105"
							loading="lazy"
							onerror={() => handleImageError(photo.title)}
							onload={() => handleImageLoad(photo.title)}
						/>
					{/if}
					<div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
					<div class="absolute bottom-0 left-0 right-0 p-5">
						{#if photo.category}
							<span class="mb-2 inline-block rounded-full border border-white/20 bg-white/10 px-2 py-1 text-[9px] font-semibold uppercase tracking-[.14em] text-white backdrop-blur-sm">{photo.category}</span>
						{/if}
						<h3 class="font-display text-{photo.featured ? 'xl' : 'base'} font-semibold text-white">{photo.title}</h3>
						{#if photo.description && photo.featured}
							<p class="mt-2 text-sm text-white/80">{photo.description}</p>
						{/if}
						<a
							href={photo.sourceUrl}
							target="_blank"
							rel="noreferrer"
							class="mt-3 inline-flex items-center gap-1 text-[11px] text-white/70 transition hover:text-white"
						>
							{photo.source}
							<svg viewBox="0 0 24 24" class="size-3 fill-none stroke-current stroke-2 {locale === 'ar' ? 'rotate-90' : ''}">
								<path d="M7 17 17 7M7 7h10v10"/>
							</svg>
						</a>
					</div>
				</article>
			{/each}
		</div>
	</section>

	<section class="mt-16 border-y border-islamic-line">
		<div class="grid lg:grid-cols-[1.45fr_.55fr]">
			<div class="border-b border-islamic-line py-10 lg:border-b-0 lg:border-r lg:pr-12">
				<div class="flex items-start justify-between gap-6">
					<div>
						<span class="text-[9px] font-semibold uppercase tracking-[.16em] text-islamic-green"
							>{donationContent.allocationBadge}</span
						>
						<h2 class="mt-3 font-display text-3xl tracking-[-.04em] sm:text-4xl">
							{donationContent.allocationHeading}
						</h2>
					</div>
					<span class="shrink-0 pt-1 text-[10px] font-semibold uppercase tracking-[.14em] text-islamic-green"
						>{donationContent.allocationSub}</span
					>
				</div>
				<p class="mt-5 max-w-2xl text-[12px] leading-7 text-islamic-muted">
					{donationContent.allocationDesc}
				</p>
				<div class="mt-8 grid border-t border-islamic-line sm:grid-cols-2">
					{#each donationContent.humanitarian as label (label)}
						<div
							class="border-b border-islamic-line py-4 text-[11px] text-islamic-muted sm:even:border-l sm:even:pl-5"
						>
							{label}
						</div>
					{/each}
				</div>
			</div>
			<div class="py-10 lg:pl-12">
				<span class="text-[9px] font-semibold uppercase tracking-[.16em] text-islamic-dim"
					>{donationContent.opsBadge}</span
				>
				<h2 class="mt-3 font-display text-3xl tracking-[-.04em] sm:text-4xl">{donationContent.opsHeading}</h2>
				<p class="mt-5 text-[12px] leading-7 text-islamic-muted">
					{donationContent.opsDesc}
				</p>
				<div class="mt-8 border-t border-islamic-line">
					{#each donationContent.ops as label (label)}
						<div class="border-b border-islamic-line py-4 text-[11px] text-islamic-muted">{label}</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<section class="border-b border-islamic-line py-10 sm:py-12">
		<div class="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
			<div class="max-w-2xl">
				<span class="text-[9px] font-semibold uppercase tracking-[.16em] text-islamic-green"
					>{donationContent.creatorBadge}</span
				>
				<h2 class="mt-3 font-display text-3xl tracking-[-.04em] sm:text-4xl">{donationContent.creatorHeading}</h2>
				<p class="mt-4 text-[12px] leading-7 text-islamic-muted">
					{donationContent.creatorDesc}
				</p>
			</div>
			<a
				href="https://buymeacoffee.com/rheinsullivan"
				target="_blank"
				rel="noreferrer"
				class="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-islamic-green px-5 text-[11px] font-bold text-islamic-bg transition hover:-translate-y-0.5 hover:shadow-[0_15px_40px_rgba(115,224,174,.16)]"
			>
				Buy Me a Coffee
				<svg viewBox="0 0 24 24" aria-hidden="true" class="size-4 fill-none stroke-current stroke-[1.8] {locale === 'ar' ? 'rotate-180' : ''}"
					><path d="M5 12h13M13 6l6 6-6 6" /></svg
				>
			</a>
		</div>
	</section>

	<section class="border-b border-islamic-line py-10 sm:py-12">
		<div class="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
			<div class="max-w-2xl">
				<span class="text-[9px] font-semibold uppercase tracking-[.16em] text-islamic-dim"
					>{donationContent.publicBadge}</span
				>
				<h2 class="mt-3 font-display text-3xl tracking-[-.04em] sm:text-4xl">{donationContent.publicHeading}</h2>
				<p class="mt-4 text-[12px] leading-7 text-islamic-muted">
					{donationContent.publicDesc}
				</p>
			</div>
			<span class="text-[11px] text-islamic-dim">{donationContent.comingSoon}</span>
		</div>
	</section>

	<section class="py-10 sm:py-12">
		<div class="grid gap-8 lg:grid-cols-[.55fr_1.45fr] lg:gap-14">
			<div>
				<span class="text-[9px] font-semibold uppercase tracking-[.16em] text-islamic-green"
					>{donationContent.transparencyBadge}</span
				>
				<h2 class="mt-3 font-display text-3xl tracking-[-.04em] sm:text-4xl">
					{donationContent.transparencyHeading}
				</h2>
			</div>
			<div>
				<p class="max-w-3xl text-[12px] leading-7 text-islamic-muted">
					{donationContent.transparencyDesc}
				</p>
				<div class="mt-6 flex flex-wrap gap-2">
					<span
						class="inline-flex h-10 items-center border-b border-islamic-line px-1 text-[10px] font-semibold text-islamic-dim"
						>docs/en/donations.md</span
					>
					<a
						href="/{locale}/docs/donations"
						class="inline-flex h-10 items-center border-b border-islamic-green/30 px-1 text-[10px] font-semibold text-islamic-green hover:border-islamic-green"
						>{donationContent.readInDocs}</a
					>
				</div>
			</div>
		</div>
	</section>
</main>
