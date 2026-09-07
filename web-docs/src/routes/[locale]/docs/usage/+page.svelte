<script lang="ts">
	import DocsPage from '$lib/components/DocsPage.svelte';
	import { getDoc } from '$lib/docs-content';
	import { type Locale } from '$lib/i18n';
	let { data } = $props();
	const locale = $derived(data.locale as Locale);
	const entry = $derived(getDoc('/docs/usage', locale));

	const titles: Record<Locale, string> = {
		en: 'Usage • 🇵🇸 Atsarul Mujahidin 🇸🇩',
		id: 'Penggunaan • 🇵🇸 Atsarul Mujahidin 🇸🇩',
		ar: 'الاستخدام • 🇵🇸 آثار المجاهدين 🇸🇩',
		ja: '使い方 • 🇵🇸 Atsarul Mujahidin 🇸🇩'
	};
	const prevLabels: Record<Locale, string> = {
		en: 'Installation',
		id: 'Instalasi',
		ar: 'التثبيت',
		ja: 'インストール'
	};
	const nextLabels: Record<Locale, string> = {
		en: 'Variants',
		id: 'Varian',
		ar: 'الأنماط',
		ja: 'バリアント'
	};
</script>
<svelte:head>
	<title>{titles[locale] || titles.en}</title>
	<meta name="description" content={entry.lead} />
	<link rel="canonical" href="https://atsarul-mujahidin.dev/{locale}/docs/usage" />
</svelte:head>
<DocsPage {locale} path="/docs/usage" {entry} prevHref="/{locale}/docs/installation" prevLabel={prevLabels[locale] || prevLabels.en} nextHref="/{locale}/docs/variants" nextLabel={nextLabels[locale] || nextLabels.en} />
