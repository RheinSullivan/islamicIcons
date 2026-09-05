<script lang="ts">
	import { MAX } from '$lib/site';
	import { translations, type Locale } from '$lib/i18n';

	import PalestineFlag from 'atsarul-mujahidin/svelte/color/PalestineFlag';
	import MuslimFamily from 'atsarul-mujahidin/svelte/fill/MuslimFamily';
	import MuslimFamilyChild from 'atsarul-mujahidin/svelte/fill/MuslimFamilyChild';
	import DuaHands from 'atsarul-mujahidin/svelte/fill/DuaHands';
	import Ketupat from 'atsarul-mujahidin/svelte/fill/Ketupat';
	import MuslimWoman from 'atsarul-mujahidin/svelte/fill/MuslimWoman';

	let { data } = $props();
	const locale = $derived(data.locale as Locale);
	const translation = $derived(translations[locale]);

	const iconComponents: Record<string, any> = {
		'palestine-flag-color': PalestineFlag,
		'muslim-family-fill': MuslimFamily,
		'muslim-family-child-fill': MuslimFamilyChild,
		'dua-hands-fill': DuaHands,
		'ketupat-fill': Ketupat,
		'muslim-woman-fill': MuslimWoman
	};

	const donationPhotos = $derived([
		{
			title: locale === 'en' ? 'Palestine Relief' : 'Bantuan Palestina',
			description: locale === 'en' ? 'Emergency humanitarian aid for families in Gaza' : 'Bantuan kemanusiaan darurat untuk keluarga di Gaza',
			category: locale === 'en' ? 'Emergency Relief' : 'Bantuan Darurat',
			image: 'https://help.unicef.org/mexico/sites/mexico/files/styles/facebook_share_image/public/2025-01/UNI495572.jpg?itok=q8E8Yyli',
			source: 'UNICEF',
			sourceUrl: 'https://www.unicef.org/appeals/state-of-palestine',
			alt: locale === 'en' ? 'Children in Gaza waiting for humanitarian food aid' : 'Anak-anak di Gaza menunggu bantuan makanan kemanusiaan',
			span: 'sm:col-span-2 sm:row-span-2',
			featured: true,
			fallbackIcon: 'palestine-flag-color'
		},
		{
			title: locale === 'en' ? 'Sudan Crisis' : 'Krisis Sudan',
			description: locale === 'en' ? 'Urgent support for displaced families' : 'Dukungan mendesak untuk keluarga yang mengungsi',
			category: locale === 'en' ? 'Humanitarian Crisis' : 'Krisis Kemanusiaan',
			image: 'https://www.unicef.org/sites/default/files/styles/hero_desktop/public/UN0784820.jpg.webp?itok=vOakVvzz',
			source: 'UNICEF Sudan',
			sourceUrl: 'https://www.unicef.org/sudan',
			alt: locale === 'en' ? 'Sudan humanitarian crisis relief efforts' : 'Upaya bantuan krisis kemanusiaan Sudan',
			span: 'sm:col-span-1 sm:row-span-1',
			fallbackIcon: 'muslim-family-fill'
		},
		{
			title: locale === 'en' ? 'Orphan Care' : 'Perawatan Yatim',
			description: locale === 'en' ? 'Supporting orphanages across Indonesia' : 'Mendukung panti asuhan di seluruh Indonesia',
			category: locale === 'en' ? 'Children & Youth' : 'Anak & Remaja',
			image: 'https://www.hopeandprosperity.org/wp-content/uploads/2020/06/5J2A7153.jpg',
			source: 'Hope & Prosperity',
			sourceUrl: 'https://www.hopeandprosperity.org/our-orphanage/',
			alt: locale === 'en' ? 'Children sharing a meal at an orphanage' : 'Anak-anak berbagi makanan di panti asuhan',
			span: 'sm:col-span-1 sm:row-span-1',
			fallbackIcon: 'muslim-family-child-fill'
		},
		{
			title: locale === 'en' ? 'Disaster Relief' : 'Bantuan Bencana',
			description: locale === 'en' ? 'Emergency response for floods, earthquakes, and volcanic disasters in Indonesia' : 'Respons darurat untuk banjir, gempa, dan bencana vulkanik di Indonesia',
			category: locale === 'en' ? 'Emergency Response' : 'Respons Darurat',
			image: 'https://en.vcci.com.vn/hm_content/uploads/247-news/FLOODS.png',
			source: 'VCCI',
			sourceUrl: 'https://en.vcci.com.vn/disaster-relief-when-foreign-friends-show-kind-support-vietnam',
			alt: locale === 'en' ? 'Flood disaster relief volunteers helping affected communities' : 'Relawan bantuan bencana banjir membantu masyarakat terdampak',
			span: 'sm:col-span-1 sm:row-span-2',
			fallbackIcon: 'dua-hands-fill'
		},
		{
			title: locale === 'en' ? 'Food Aid' : 'Bantuan Pangan',
			description: locale === 'en' ? 'Food parcels for dhuafa families' : 'Paket makanan untuk keluarga dhuafa',
			category: locale === 'en' ? 'Food Security' : 'Ketahanan Pangan',
			image: 'https://ik.imagekit.io/qkwbj7b7u/charity-meals/uploads/162/family-food-parcel2.png',
			source: 'Charity Meals',
			sourceUrl: 'https://charitymeals.org/projects',
			alt: locale === 'en' ? 'Family receiving food parcels and essential supplies' : 'Keluarga menerima paket makanan dan kebutuhan pokok',
			span: 'sm:col-span-1 sm:row-span-1',
			fallbackIcon: 'ketupat-fill'
		},
		{
			title: locale === 'en' ? 'Elderly Care' : 'Perawatan Lansia',
			description: locale === 'en' ? 'Support for elderly and caregivers' : 'Dukungan untuk lansia dan pengasuh',
			category: locale === 'en' ? 'Senior Care' : 'Perawatan Lansia',
			image: 'https://www.thefinancialcoconut.com/hubfs/caregivers-png-1.png',
			source: 'The Financial Coconut',
			sourceUrl: 'https://www.thefinancialcoconut.com/blog/the-real-cost-of-caregiving-in-singapore',
			alt: locale === 'en' ? 'Caregivers supporting elderly residents' : 'Pengasuh mendukung lansia',
			span: 'sm:col-span-1 sm:row-span-1',
			fallbackIcon: 'muslim-woman-fill'
		}
	]);

	let imageLoadStates = $state<Record<string, boolean>>({});

	function handleImageError(title: string) {
		imageLoadStates[title] = false;
	}

	function handleImageLoad(title: string) {
		imageLoadStates[title] = true;
	}

	const humanitarian = [
		'Palestine & Sudan relief',
		'Orphanages',
		'Low-income families',
		'Elderly care',
		'Disaster relief (Indonesia & worldwide)'
	];
	const ops = ['Server', 'CDN', 'Domain'];
</script>

<svelte:head>
	<title>Donations | Atsarul Mujahidin</title>
	<meta
		name="description"
		content="Support humanitarian aid with 100% financial transparency through Atsarul Mujahidin donations."
	/>
</svelte:head>

<main class="{MAX} pt-36pb-14 sm:pt-44 sm:pb-20 lg:pt-32">
	<section class="gsap-container max-w-4xl">
		<span class="text-[10px] font-semibold uppercase tracking-[.18em] text-islamic-green"
			>Humanitarian giving</span
		>
		<h1 class="mt-3 font-display text-5xl leading-[.98] tracking-[-.06em] sm:text-7xl">
			Support people. Keep every number visible.
		</h1>
		<p class="mt-6 max-w-3xl text-base leading-8 text-islamic-muted">
			Atsarul Mujahidin accepts public donations with 100% financial transparency. Minimum 70% of all
			funds are allocated to humanitarian aid, including Palestine relief, orphanages,
			low-income families, elderly care and disaster relief. Up to 30% supports framework
			operations such as server, CDN and domain costs.
		</p>
	</section>

	<section class="mt-14">
		<h2 class="mb-6 font-display text-2xl font-semibold tracking-[-.03em]">{locale === 'en' ? 'Where Your Donations Go' : 'Kemana Donasi Anda Pergi'}</h2>
		<!-- Bento Grid Layout -->
		<div class="grid auto-rows-[minmax(200px,auto)] grid-cols-1 gap-4 sm:grid-cols-3">
			{#each donationPhotos as photo (photo.title)}
				<article
					class="gsap-on-scroll group relative overflow-hidden rounded-2xl border border-islamic-line bg-islamic-panel {photo.span}"
				>
					{#if imageLoadStates[photo.title] === false}
						<!-- Fallback: Show icon if image failed to load -->
						<div class="flex size-full flex-col items-center justify-center gap-4 bg-gradient-to-br from-islamic-panel-2 to-islamic-panel p-6">
							{#if iconComponents[photo.fallbackIcon]}
								{@const IconComponent = iconComponents[photo.fallbackIcon]}
								<IconComponent size={photo.featured ? 160 : 80} class="text-islamic-green opacity-50" />
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
							<svg viewBox="0 0 24 24" class="size-3 fill-none stroke-current stroke-2">
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
							>Humanitarian allocation</span
						>
						<h2 class="mt-3 font-display text-3xl tracking-[-.04em] sm:text-4xl">
							70% minimum to aid
						</h2>
					</div>
					<span class="shrink-0 pt-1 text-[10px] font-semibold uppercase tracking-[.14em] text-islamic-green"
						>Minimum</span
					>
				</div>
				<p class="mt-5 max-w-2xl text-[12px] leading-7 text-islamic-muted">
					At least seventy percent of public donations is reserved for direct humanitarian
					priorities. The allocation is a floor, not a target to reduce aid.
				</p>
				<div class="mt-8 grid border-t border-islamic-line sm:grid-cols-2">
					{#each humanitarian as label (label)}
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
					>Framework operations</span
				>
				<h2 class="mt-3 font-display text-3xl tracking-[-.04em] sm:text-4xl">Up to 30%</h2>
				<p class="mt-5 text-[12px] leading-7 text-islamic-muted">
					Only infrastructure required to keep Atsarul Mujahidin available and maintainable belongs
					here.
				</p>
				<div class="mt-8 border-t border-islamic-line">
					{#each ops as label (label)}
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
					>Support the creator</span
				>
				<h2 class="mt-3 font-display text-3xl tracking-[-.04em] sm:text-4xl">Buy Me a Coffee</h2>
				<p class="mt-4 text-[12px] leading-7 text-islamic-muted">
					Support the developer and maintainer of Atsarul Mujahidin. This is personal support for the creator, separate from the humanitarian donation policy above. Your contribution helps sustain development and maintenance of this open-source project.
				</p>
			</div>
			<a
				href="https://buymeacoffee.com/rheinsullivan"
				target="_blank"
				rel="noreferrer"
				class="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-islamic-green px-5 text-[11px] font-bold text-islamic-bg transition hover:-translate-y-0.5 hover:shadow-[0_15px_40px_rgba(115,224,174,.16)]"
			>
				Buy Me a Coffee
				<svg viewBox="0 0 24 24" aria-hidden="true" class="size-4 fill-none stroke-current stroke-[1.8]"
					><path d="M5 12h13M13 6l6 6-6 6" /></svg
				>
			</a>
		</div>
	</section>

	<section class="border-b border-islamic-line py-10 sm:py-12">
		<div class="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
			<div class="max-w-2xl">
				<span class="text-[9px] font-semibold uppercase tracking-[.16em] text-islamic-dim"
					>Humanitarian donation</span
				>
				<h2 class="mt-3 font-display text-3xl tracking-[-.04em] sm:text-4xl">Public Donations</h2>
				<p class="mt-4 text-[12px] leading-7 text-islamic-muted">
					Every contribution is handled under the allocation policy above. Donation records and
					future transparency statements belong in the public reporting document.
				</p>
			</div>
			<span class="text-[11px] text-islamic-dim">Coming soon</span>
		</div>
	</section>

	<section class="border-b border-islamic-line py-10 sm:py-12">
		<div class="grid gap-8 lg:grid-cols-[.55fr_1.45fr] lg:gap-14">
			<div>
				<span class="text-[9px] font-semibold uppercase tracking-[.16em] text-islamic-green"
					>Transparency</span
				>
				<h2 class="mt-3 font-display text-3xl tracking-[-.04em] sm:text-4xl">
					See the reporting policy.
				</h2>
			</div>
			<div>
				<p class="max-w-3xl text-[12px] leading-7 text-islamic-muted">
					Detailed transparency reports are maintained in
					<code class="text-islamic-green">docs/en/donations.md</code>, including the allocation
					policy, reporting structure and links to verified statements when published.
				</p>
				<div class="mt-6 flex flex-wrap gap-2">
					<span
						class="inline-flex h-10 items-center border-b border-islamic-line px-1 text-[10px] font-semibold text-islamic-dim"
						>docs/en/donations.md</span
					>
					<a
						href="/{locale}/docs/donations"
						class="inline-flex h-10 items-center border-b border-islamic-green/30 px-1 text-[10px] font-semibold text-islamic-green hover:border-islamic-green"
						>Read in docs</a
					>
				</div>
			</div>
		</div>
	</section>
</main>
