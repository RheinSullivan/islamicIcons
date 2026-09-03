<script lang="ts">
	import { MAX } from '$lib/site';
	import { translations, type Locale } from '$lib/i18n';

	let { data } = $props();
	const locale = $derived(data.locale as Locale);
	const t = $derived(translations[locale]);

	const donationPhotos = [
		{
			title: 'Low-income families',
			image: 'https://ik.imagekit.io/qkwbj7b7u/charity-meals/uploads/162/family-food-parcel2.png?ik-sdk-version=php-2.0.0',
			source: 'Charity Meals',
			sourceUrl: 'https://charitymeals.org/projects',
			alt: 'Family receiving a food parcel and essential supplies'
		},
		{
			title: 'Orphanage care',
			image: 'https://www.hopeandprosperity.org/wp-content/uploads/2020/06/5J2A7153.jpg',
			source: 'Hope & Prosperity',
			sourceUrl: 'https://www.hopeandprosperity.org/our-orphanage/',
			alt: 'Children sharing a meal at an orphanage'
		},
		{
			title: 'Elderly care',
			image: 'https://www.thefinancialcoconut.com/hubfs/caregivers-png-1.png',
			source: 'The Financial Coconut',
			sourceUrl: 'https://www.thefinancialcoconut.com/blog/the-real-cost-of-caregiving-in-singapore',
			alt: 'Caregivers supporting elderly residents in a care home'
		},
		{
			title: 'Palestine relief',
			image: 'https://help.unicef.org/mexico/sites/mexico/files/styles/facebook_share_image/public/2025-01/UNI495572.jpg?itok=q8E8Yyli',
			source: 'UNICEF',
			sourceUrl: 'https://help.unicef.org/mexico/es/dona-gaza',
			alt: 'Children in Gaza waiting for humanitarian food aid'
		},
		{
			title: 'Disaster relief',
			image: 'https://en.vcci.com.vn/hm_content/uploads/247-news/FLOODS.png',
			source: 'Vietnam Chamber of Commerce and Industry',
			sourceUrl: 'https://en.vcci.com.vn/disaster-relief-when-foreign-friends-show-kind-support-vietnam',
			alt: 'Volunteers delivering food during a flood'
		}
	];

	const humanitarian = [
		'Palestine relief',
		'Orphanages',
		'Low-income families',
		'Elderly care',
		'Disaster relief'
	];
	const ops = ['Server', 'CDN', 'Domain'];

	function imgError(e: Event) {
		(e.target as HTMLImageElement).style.display = 'none';
	}
</script>

<svelte:head>
	<title>Donations | Islamic Icons</title>
	<meta
		name="description"
		content="Support humanitarian aid with 100% financial transparency through Islamic Icons donations."
	/>
</svelte:head>

<main class="{MAX} pt-36 pb-16 sm:pt-44 sm:pb-24 lg:pt-32">
	<section class="gsap-container max-w-4xl">
		<span class="text-[10px] font-semibold uppercase tracking-[.18em] text-islamic-green"
			>Humanitarian giving</span
		>
		<h1 class="mt-3 font-display text-5xl leading-[.98] tracking-[-.06em] sm:text-7xl">
			Support people. Keep every number visible.
		</h1>
		<p class="mt-6 max-w-3xl text-base leading-8 text-islamic-muted">
			Islamic Icons accepts public donations with 100% financial transparency. Minimum 70% of all
			funds are allocated to humanitarian aid, including Palestine relief, orphanages,
			low-income families, elderly care and disaster relief. Up to 30% supports framework
			operations such as server, CDN and domain costs.
		</p>
	</section>

	<section class="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-12">
		{#each donationPhotos as photo, index (photo.title)}
			<figure
				class="gsap-on-scroll group {index === 0
					? 'lg:col-span-7'
					: index === 1
						? 'lg:col-span-5'
						: 'lg:col-span-4'}"
			>
				<div
					class="relative overflow-hidden {index === 0
						? 'aspect-[16/10]'
						: 'aspect-[4/3]'} bg-islamic-panel-2"
				>
					<img
						src={photo.image}
						alt={photo.alt}
						loading="lazy"
						referrerpolicy="no-referrer"
						class="size-full object-cover transition duration-700 group-hover:scale-[1.025]"
						onerror={imgError}
					/>
					<div
						class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent"
					></div>
				</div>
				<figcaption class="pt-4">
					<div class="flex items-baseline justify-between gap-4">
						<h2 class="font-display text-lg tracking-[-.03em]">{photo.title}</h2>
						<span class="text-[9px] uppercase tracking-[.14em] text-islamic-dim"
							>{String(index + 1).padStart(2, '0')}</span
						>
					</div>
					<a
						href={photo.sourceUrl}
						target="_blank"
						rel="noreferrer"
						class="mt-2 inline-flex text-[9px] text-islamic-dim hover:text-islamic-green"
						>Photo: {photo.source}</a
					>
				</figcaption>
			</figure>
		{/each}
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
					Only infrastructure required to keep Islamic Icons available and maintainable belongs
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
					>Public donation</span
				>
				<h2 class="mt-3 font-display text-3xl tracking-[-.04em] sm:text-4xl">Buy Me a Coffee</h2>
				<p class="mt-4 text-[12px] leading-7 text-islamic-muted">
					Every contribution is handled under the allocation policy above. Donation records and
					future transparency statements belong in the public reporting document.
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
