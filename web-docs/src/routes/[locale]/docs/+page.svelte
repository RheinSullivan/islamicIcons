<script lang="ts">
	import DocsPage from '$lib/components/DocsPage.svelte';
	import { getDoc } from '$lib/docs-content';
	import { type Locale } from '$lib/i18n';
	let { data } = $props();
	const locale = $derived(data.locale as Locale);
	const entry = $derived(getDoc('/docs', locale));
</script>
<svelte:head>
	<title>{locale === 'en' ? 'Islamic Icons - Documentation' : 'Islamic Icons - Dokumentasi'}</title>
	<meta name="description" content={entry.lead} />
	<link rel="canonical" href="https://islamic-icons.dev/{locale}/docs" />
</svelte:head>
<DocsPage {locale} path="/docs" {entry} nextHref="/{locale}/docs/installation" nextLabel={locale === 'en' ? 'Installation' : 'Instalasi'} />
