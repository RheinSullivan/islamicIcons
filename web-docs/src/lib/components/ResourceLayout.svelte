<script lang="ts">
	import { MAX } from '$lib/site';
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	
	interface Props {
		title: string;
		label: string;
		lead?: string;
		prevHref?: string | null;
		prevLabel?: string | null;
		nextHref?: string | null;
		nextLabel?: string | null;
		children: any;
	}
	
	let {
		title,
		label,
		lead,
		prevHref = null,
		prevLabel = null,
		nextHref = null,
		nextLabel = null,
		children
	}: Props = $props();
	
	import type { Locale } from '$lib/i18n';
	
	const pathname = $derived(page.url.pathname.replace(/\/$/, ''));
	const currentLocale = $derived((['id', 'ar', 'ja'].includes(page.url.pathname.split('/')[1]) ? page.url.pathname.split('/')[1] : 'en') as Locale);
	
	const navLabels: Record<Locale, {
		documentation: string;
		overview: string;
		installation: string;
		usage: string;
		variants: string;
		frameworks: string;
		sources: string;
		donations: string;
		frameworkIntegrations: string;
		aboutCommunity: string;
		license: string;
		community: string;
		codeOfConduct: string;
		brandLogos: string;
		contributing: string;
		navigation: string;
		onThisPage: string;
		previous: string;
		next: string;
	}> = {
		en: {
			documentation: 'Documentation',
			overview: 'Overview',
			installation: 'Installation',
			usage: 'Usage',
			variants: 'Variants',
			frameworks: 'Frameworks',
			sources: 'Sources & Attribution',
			donations: 'Donations',
			frameworkIntegrations: 'Framework Integrations',
			aboutCommunity: 'About & Community',
			license: 'License',
			community: 'Community',
			codeOfConduct: 'Code of Conduct',
			brandLogos: 'Brand Logos',
			contributing: 'Contributing',
			navigation: 'Navigation',
			onThisPage: 'On this page',
			previous: 'Previous',
			next: 'Next'
		},
		id: {
			documentation: 'Dokumentasi',
			overview: 'Ikhtisar',
			installation: 'Instalasi',
			usage: 'Penggunaan',
			variants: 'Varian',
			frameworks: 'Framework',
			sources: 'Sumber & Atribusi',
			donations: 'Donasi',
			frameworkIntegrations: 'Integrasi Framework',
			aboutCommunity: 'Tentang & Komunitas',
			license: 'Lisensi',
			community: 'Komunitas',
			codeOfConduct: 'Kode Etik',
			brandLogos: 'Logo Brand',
			contributing: 'Kontribusi',
			navigation: 'Navigasi',
			onThisPage: 'Pada halaman ini',
			previous: 'Sebelumnya',
			next: 'Selanjutnya'
		},
		ar: {
			documentation: 'التوثيق',
			overview: 'نظرة عامة',
			installation: 'التثبيت',
			usage: 'الاستخدام',
			variants: 'الأنماط',
			frameworks: 'أطر العمل',
			sources: 'المصادر والإسناد',
			donations: 'التبرعات',
			frameworkIntegrations: 'تكاملات أطر العمل',
			aboutCommunity: 'عن المشروع والمجتمع',
			license: 'الترخيص',
			community: 'المجتمع',
			codeOfConduct: 'مدونة السلوك',
			brandLogos: 'شعارات العلامات',
			contributing: 'المساهمة',
			navigation: 'التنقل',
			onThisPage: 'في هذه الصفحة',
			previous: 'السابق',
			next: 'التالي'
		},
		ja: {
			documentation: 'ドキュメント',
			overview: '概要',
			installation: 'インストール',
			usage: '使い方',
			variants: 'バリアント',
			frameworks: 'フレームワーク',
			sources: 'ソースと帰属',
			donations: '寄付',
			frameworkIntegrations: 'フレームワーク統合',
			aboutCommunity: 'プロジェクトとコミュニティ',
			license: 'ライセンス',
			community: 'コミュニティ',
			codeOfConduct: '行動規範',
			brandLogos: 'ブランドロゴ',
			contributing: '貢献ガイド',
			navigation: 'ナビゲーション',
			onThisPage: 'このページの内容',
			previous: '前へ',
			next: '次へ'
		}
	};

	const t = $derived(navLabels[currentLocale] || navLabels.en);

	// Extract headings for TOC
	let headings = $state<{id: string; text: string}[]>([]);
	let activeHeading = $state('');
	
	// Real and working navigation items (no 404s, authentic developer framework links)
	const resourceNav = $derived([
		{
			label: t.documentation,
			items: [
				{ label: t.overview, href: `/${currentLocale}/docs` },
				{ label: t.installation, href: `/${currentLocale}/docs/installation` },
				{ label: t.usage, href: `/${currentLocale}/docs/usage` },
				{ label: t.variants, href: `/${currentLocale}/docs/variants` },
				{ label: t.frameworks, href: `/${currentLocale}/docs/frameworks` },
				{ label: t.sources, href: `/${currentLocale}/docs/sources` },
				{ label: t.donations, href: `/${currentLocale}/docs/donations` }
			]
		},
		{
			label: t.frameworkIntegrations,
			items: [
				{ label: 'Svelte 5 (Runes)', href: `/${currentLocale}/docs/frameworks#svelte-5` },
				{ label: 'React 18 & 19', href: `/${currentLocale}/docs/frameworks#react` },
				{ label: 'Vue 3', href: `/${currentLocale}/docs/frameworks#vue-3` },
				{ label: 'Vanilla JS / Web Component', href: `/${currentLocale}/docs/frameworks#vanilla-javascript-web-component` },
				{ label: 'REST API & CDN', href: `/${currentLocale}/docs/frameworks#rest-api-and-cdn` }
			]
		},
		{
			label: t.aboutCommunity,
			items: [
				{ label: t.license, href: `/${currentLocale}/license` },
				{ label: t.community, href: `/${currentLocale}/community` },
				{ label: t.codeOfConduct, href: `/${currentLocale}/code-of-conduct` },
				{ label: t.brandLogos, href: `/${currentLocale}/brand-logos` },
				{ label: t.contributing, href: `/${currentLocale}/contributing` }
			]
		}
	]);
	
	onMount(() => {
		const container = document.querySelector('.resource-content');
		if (container) {
			const h2s = container.querySelectorAll('h2');
			const allHeadings: {id: string; text: string}[] = [];
			
			h2s.forEach((headingElement) => {
				const id = headingElement.id || headingElement.textContent?.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') || '';
				headingElement.id = id;
				allHeadings.push({ id, text: headingElement.textContent || '' });
			});
			
			headings = allHeadings;
			
			const observer = new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						activeHeading = entry.target.id;
					}
				});
			}, { rootMargin: '-100px 0px -66% 0px' });
			
			h2s.forEach((headingElement) => observer.observe(headingElement));
			
			return () => observer.disconnect();
		}
	});
</script>

<div class="{MAX} pt-36 pb-14 sm:pt-44 sm:pb-20 lg:pt-32">
	<div class="grid gap-10 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-14 xl:grid-cols-[200px_minmax(0,1fr)_200px]">
		<!-- Left sidebar - Resource navigation -->
		<aside class="hidden lg:block lg:sticky lg:top-28 lg:h-fit">
			{#each resourceNav as section (section.label)}
				<div class="mb-6">
					<div class="mb-2 text-[9px] font-semibold uppercase tracking-[.15em] text-islamic-dim">{section.label}</div>
					<div class="grid gap-1">
						{#each section.items as item (item.href)}
							{@const isMatch = pathname === item.href || (item.href.includes('#') && pathname === item.href.split('#')[0] && page.url.hash === '#' + item.href.split('#')[1])}
							<a
								href={item.href}
								aria-current={isMatch ? 'page' : undefined}
								class="cursor-pointer rounded-lg px-3 py-2 text-[11px] transition {isMatch ? 'bg-islamic-green/8 text-islamic-green font-medium' : 'text-islamic-muted hover:bg-white/4 hover:text-islamic-text'}"
							>{item.label}</a>
						{/each}
					</div>
				</div>
			{/each}
		</aside>

		<!-- Main content -->
		<div class="min-w-0">
			<!-- Mobile navigation bar -->
			<div class="mb-8 lg:hidden">
				<div class="mb-2 text-[9px] font-semibold uppercase tracking-[.15em] text-islamic-dim">
					{t.navigation}
				</div>
				<div class="flex flex-wrap gap-1.5">
					{#each resourceNav.flatMap(s => s.items) as item (item.href)}
						{@const isMatch = pathname === item.href}
						<a
							href={item.href}
							class="cursor-pointer rounded-lg px-2.5 py-1 text-[11px] transition {isMatch ? 'bg-islamic-green/10 text-islamic-green border border-islamic-green/25 font-medium' : 'border border-islamic-line text-islamic-muted hover:text-islamic-text'}"
						>{item.label}</a>
					{/each}
				</div>
			</div>

			<div class="resource-content" dir={currentLocale === 'ar' ? 'rtl' : 'ltr'}>
				<div class="gsap-container mb-8">
					<span class="text-[9px] font-semibold uppercase tracking-[.2em] text-islamic-green">{label}</span>
					<h1 class="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
				</div>

				<!-- Bismillah at the beginning of document content -->
				<div class="mb-8 text-center">
					<p class="font-display text-2xl tracking-tight text-islamic-green">بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</p>
					<p class="mt-2 text-xs text-islamic-muted">Bismillahir Rahmanir Rahim</p>
				</div>

				{#if lead}
					<p class="mb-8 max-w-2xl text-base leading-8 text-islamic-muted">{lead}</p>
				{/if}
			
				{@render children()}

				<!-- Alhamdulillah at the end of document content -->
				<div class="mt-12 text-center">
					<p class="font-display text-2xl tracking-tight text-islamic-green">الْحَمْدُ لِلَّٰهِ</p>
					<p class="mt-2 text-xs text-islamic-muted">Alhamdulillah - All praise is due to Allah</p>
				</div>

				<!-- Prev / Next pagination links -->
				{#if prevHref || nextHref}
					<div class="mt-14 flex flex-col justify-between gap-3 border-t border-islamic-line pt-5 text-[11px] text-islamic-dim sm:flex-row">
						{#if prevHref}
							<a href={prevHref} class="cursor-pointer font-medium text-islamic-muted hover:text-islamic-green">← {prevLabel || t.previous}</a>
						{:else}
							<span></span>
						{/if}
						{#if nextHref}
							<a href={nextHref} class="cursor-pointer font-medium text-islamic-muted hover:text-islamic-green">{nextLabel || t.next} →</a>
						{/if}
					</div>
				{/if}
			</div>
			
		</div>

		<!-- Right sidebar - On this page TOC -->
		{#if headings.length > 0}
			<aside class="hidden xl:block xl:sticky xl:top-28 xl:h-fit" dir={currentLocale === 'ar' ? 'rtl' : 'ltr'}>
				<div class="mb-3 text-[9px] font-semibold uppercase tracking-[.18em] text-islamic-dim">{t.onThisPage}</div>
				<div class="space-y-1">
					{#each headings as heading (heading.id)}
						<a
							href="#{heading.id}"
							class="block cursor-pointer border-l-2 py-1.5 pl-3 text-[11px] transition {activeHeading === heading.id ? 'border-islamic-green text-islamic-green' : 'border-transparent text-islamic-dim hover:text-islamic-text'}"
						>
							{heading.text}
						</a>
					{/each}
				</div>
			</aside>
		{/if}
	</div>
</div>
