<script lang="ts">
	import DocsPage from '$lib/components/DocsPage.svelte';
	import { getDoc } from '$lib/docs-content';
	import { type Locale } from '$lib/i18n';
	let { data } = $props();
	const locale = $derived(data.locale as Locale);
	const entry = $derived(getDoc('/docs/variants', locale));

	const titles: Record<Locale, string> = {
		en: 'Variants • 🇵🇸 Atsarul Mujahidin 🇸🇩',
		id: 'Varian • 🇵🇸 Atsarul Mujahidin 🇸🇩',
		ar: 'الأنماط • 🇵🇸 آثار المجاهدين 🇸🇩',
		ja: 'バリアント • 🇵🇸 Atsarul Mujahidin 🇸🇩'
	};
	const prevLabels: Record<Locale, string> = {
		en: 'Usage',
		id: 'Penggunaan',
		ar: 'الاستخدام',
		ja: '使い方'
	};
	const nextLabels: Record<Locale, string> = {
		en: 'Frameworks',
		id: 'Framework',
		ar: 'أطر العمل',
		ja: 'フレームワーク'
	};
</script>
<svelte:head>
	<title>{titles[locale] || titles.en}</title>
	<meta name="description" content={entry.lead} />
	<link rel="canonical" href="https://atsarul-mujahidin.dev/{locale}/docs/variants" />
</svelte:head>
<DocsPage {locale} path="/docs/variants" {entry} prevHref="/{locale}/docs/usage" prevLabel={prevLabels[locale] || prevLabels.en} nextHref="/{locale}/docs/frameworks" nextLabel={nextLabels[locale] || nextLabels.en} />
