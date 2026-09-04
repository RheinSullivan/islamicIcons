<script lang="ts">
	import DocsPage from '$lib/components/DocsPage.svelte';
	import { getDoc } from '$lib/docs-content';
	import { type Locale } from '$lib/i18n';
	let { data } = $props();
	const locale = $derived(data.locale as Locale);
	const entry = $derived(getDoc('/docs/installation', locale));
</script>
<svelte:head>
	<title>{locale === 'en' ? 'Installation - Atsarul Mujahidin' : 'Instalasi - Atsarul Mujahidin'}</title>
	<meta name="description" content={entry.lead} />
	<link rel="canonical" href="https://atsarul-mujahidin.dev/{locale}/docs/installation" />
</svelte:head>
<DocsPage {locale} path="/docs/installation" {entry} prevHref="/{locale}/docs" prevLabel={locale === 'en' ? 'Overview' : 'Ikhtisar'} nextHref="/{locale}/docs/usage" nextLabel={locale === 'en' ? 'Usage' : 'Penggunaan'} />
