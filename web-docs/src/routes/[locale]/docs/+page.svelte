<script lang="ts">
	import DocsPage from '$lib/components/DocsPage.svelte';
	import { getDoc } from '$lib/docs-content';
	import { type Locale } from '$lib/i18n';
	let { data } = $props();
	const locale = $derived(data.locale as Locale);
	const entry = $derived(getDoc('/docs', locale));

	const titles: Record<Locale, string> = {
		en: 'Documentation • 🇵🇸 Atsarul Mujahidin 🇸🇩',
		id: 'Dokumentasi • 🇵🇸 Atsarul Mujahidin 🇸🇩',
		ar: 'التوثيق • 🇵🇸 آثار المجاهدين 🇸🇩',
		ja: 'ドキュメント • 🇵🇸 Atsarul Mujahidin 🇸🇩'
	};
	const nextLabels: Record<Locale, string> = {
		en: 'Installation',
		id: 'Instalasi',
		ar: 'التثبيت',
		ja: 'インストール'
	};
</script>
<svelte:head>
	<title>{titles[locale] || titles.en}</title>
	<meta name="description" content={entry.lead} />
	<link rel="canonical" href="https://atsarul-mujahidin.dev/{locale}/docs" />
</svelte:head>
<DocsPage {locale} path="/docs" {entry} nextHref="/{locale}/docs/installation" nextLabel={nextLabels[locale] || nextLabels.en} />
