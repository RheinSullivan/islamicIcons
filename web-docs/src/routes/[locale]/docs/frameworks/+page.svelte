<script lang="ts">
	import DocsPage from '$lib/components/DocsPage.svelte';
	import { getDoc } from '$lib/docs-content';
	import { type Locale } from '$lib/i18n';
	let { data } = $props();
	const locale = $derived(data.locale as Locale);
	const entry = $derived(getDoc('/docs/frameworks', locale));
</script>
<svelte:head>
	<title>{locale === 'en' ? 'Frameworks — Islamic Icons' : 'Framework — Islamic Icons'}</title>
	<meta name="description" content={entry.lead} />
	<link rel="canonical" href="https://islamic-icons.dev/{locale}/docs/frameworks" />
</svelte:head>
<DocsPage {locale} path="/docs/frameworks" {entry}
	prevHref="/{locale}/docs/variants" prevLabel={locale === 'en' ? 'Variants' : 'Varian'}
	nextHref="/{locale}/docs/sources" nextLabel={locale === 'en' ? 'Sources & attribution' : 'Sumber & atribusi'} />
