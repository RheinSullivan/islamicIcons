<script lang="ts">
	import DocsPage from '$lib/components/DocsPage.svelte';
	import { getDoc } from '$lib/docs-content';
	import { type Locale } from '$lib/i18n';
	let { data } = $props();
	const locale = $derived(data.locale as Locale);
	const entry = $derived(getDoc('/docs/variants', locale));
</script>
<svelte:head>
	<title>{locale === 'en' ? 'Variants - Atsarul Mujahidin' : 'Varian - Atsarul Mujahidin'}</title>
	<meta name="description" content={entry.lead} />
	<link rel="canonical" href="https://islamic-icons.dev/{locale}/docs/variants" />
</svelte:head>
<DocsPage {locale} path="/docs/variants" {entry}
	prevHref="/{locale}/docs/usage" prevLabel={locale === 'en' ? 'Usage' : 'Penggunaan'}
	nextHref="/{locale}/docs/frameworks" nextLabel={locale === 'en' ? 'Frameworks' : 'Framework'} />
