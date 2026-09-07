<script lang="ts">
	import DocsPage from '$lib/components/DocsPage.svelte';
	import { getDoc } from '$lib/docs-content';
	import { type Locale } from '$lib/i18n';
	let { data } = $props();
	const locale = $derived(data.locale as Locale);
	const entry = $derived(getDoc('/docs/frameworks', locale));

	const titles: Record<Locale, string> = {
		en: 'Frameworks • 🇵🇸 Atsarul Mujahidin 🇸🇩',
		id: 'Framework • 🇵🇸 Atsarul Mujahidin 🇸🇩',
		ar: 'أطر العمل • 🇵🇸 آثار المجاهدين 🇸🇩',
		ja: 'フレームワーク • 🇵🇸 Atsarul Mujahidin 🇸🇩'
	};
	const prevLabels: Record<Locale, string> = {
		en: 'Variants',
		id: 'Varian',
		ar: 'الأنماط',
		ja: 'バリアント'
	};
	const nextLabels: Record<Locale, string> = {
		en: 'Sources',
		id: 'Sumber',
		ar: 'المصادر',
		ja: 'ソース'
	};
</script>

<svelte:head>
	<title>{titles[locale] || titles.en}</title>
	<meta name="description" content={entry.lead} />
	<link rel="canonical" href="https://atsarulmujahidin.rheinsullivan.web.id/{locale}/docs/frameworks" />
	<meta property="og:title" content={titles[locale] || titles.en} />
	<meta property="og:description" content={entry.lead} />
	<meta property="og:url" content="https://atsarulmujahidin.rheinsullivan.web.id/{locale}/docs/frameworks" />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={titles[locale] || titles.en} />
	<meta name="twitter:description" content={entry.lead} />
</svelte:head>

<DocsPage
	{locale}
	path="/docs/frameworks"
	{entry}
	prevHref="/{locale}/docs/variants"
	prevLabel={prevLabels[locale] || prevLabels.en}
	nextHref="/{locale}/docs/sources"
	nextLabel={nextLabels[locale] || nextLabels.en}
/>
