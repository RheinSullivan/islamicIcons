<script lang="ts">
	import DocsPage from '$lib/components/DocsPage.svelte';
	import { getDoc } from '$lib/docs-content';
	import { type Locale } from '$lib/i18n';
	let { data } = $props();
	const locale = $derived(data.locale as Locale);
	const entry = $derived(getDoc('/docs/installation', locale));

	const titles: Record<Locale, string> = {
		en: 'Installation • 🇵🇸 Atsarul Mujahidin 🇸🇩',
		id: 'Instalasi • 🇵🇸 Atsarul Mujahidin 🇸🇩',
		ar: 'التثبيت • 🇵🇸 آثار المجاهدين 🇸🇩',
		ja: 'インストール • 🇵🇸 Atsarul Mujahidin 🇸🇩'
	};
	const prevLabels: Record<Locale, string> = {
		en: 'Overview',
		id: 'Ikhtisar',
		ar: 'نظرة عامة',
		ja: '概要'
	};
	const nextLabels: Record<Locale, string> = {
		en: 'Usage',
		id: 'Penggunaan',
		ar: 'الاستخدام',
		ja: '使い方'
	};
</script>
<svelte:head>
	<title>{titles[locale] || titles.en}</title>
	<meta name="description" content={entry.lead} />
	<link rel="canonical" href="https://atsarul-mujahidin.dev/{locale}/docs/installation" />
</svelte:head>
<DocsPage {locale} path="/docs/installation" {entry} prevHref="/{locale}/docs" prevLabel={prevLabels[locale] || prevLabels.en} nextHref="/{locale}/docs/usage" nextLabel={nextLabels[locale] || nextLabels.en} />
