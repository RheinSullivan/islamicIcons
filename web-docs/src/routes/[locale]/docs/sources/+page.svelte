<script lang="ts">
	import DocsPage from '$lib/components/DocsPage.svelte';
	import { getDoc } from '$lib/docs-content';
	import { type Locale } from '$lib/i18n';
	let { data } = $props();
	const locale = $derived(data.locale as Locale);
	const entry = $derived(getDoc('/docs/sources', locale));
</script>
<svelte:head>
	<title>{locale === 'en' ? 'Sources & Attribution - Atsarul Mujahidin' : 'Sumber & Atribusi - Atsarul Mujahidin'}</title>
	<meta name="description" content={entry.lead} />
	<link rel="canonical" href="https://atsarul-mujahidin.dev/{locale}/docs/sources" />
</svelte:head>
<DocsPage {locale} path="/docs/sources" {entry}
	prevHref="/{locale}/docs/frameworks" prevLabel={locale === 'en' ? 'Frameworks' : 'Framework'}
	nextHref="/{locale}/docs/donations" nextLabel={locale === 'en' ? 'Donations' : 'Donasi'} />
