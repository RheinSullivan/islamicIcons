<script lang="ts">
	import DocsPage from '$lib/components/DocsPage.svelte';
	import { getDoc } from '$lib/docs-content';
	import { type Locale } from '$lib/i18n';
	let { data } = $props();
	const locale = $derived(data.locale as Locale);
	const entry = $derived(getDoc('/docs/usage', locale));
</script>
<svelte:head>
	<title>{locale === 'en' ? 'Usage - Atsarul Mujahidin' : 'Penggunaan - Atsarul Mujahidin'}</title>
	<meta name="description" content={entry.lead} />
	<link rel="canonical" href="https://islamic-icons.dev/{locale}/docs/usage" />
</svelte:head>
<DocsPage {locale} path="/docs/usage" {entry} prevHref="/{locale}/docs/installation" prevLabel={locale === 'en' ? 'Installation' : 'Instalasi'} nextHref="/{locale}/docs/variants" nextLabel={locale === 'en' ? 'Variants' : 'Varian'} />
