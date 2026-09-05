<script lang="ts">
	import DocsPage from '$lib/components/DocsPage.svelte';
	import { getDoc } from '$lib/docs-content';
	import { type Locale } from '$lib/i18n';
	let { data } = $props();
	const locale = $derived(data.locale as Locale);
	const entry = $derived(getDoc('/docs/frameworks', locale));
</script>

<svelte:head>
	<title>{locale === 'en' ? 'Frameworks • 🇵🇸 Atsarul Mujahidin 🇸🇩' : 'Framework • 🇵🇸 Atsarul Mujahidin 🇸🇩'}</title>
	<meta name="description" content={entry.lead} />
	<link rel="canonical" href="https://atsarul-mujahidin.netlify.app/{locale}/docs/frameworks" />
	<meta property="og:title" content={locale === 'en' ? 'Frameworks - Atsarul Mujahidin' : 'Framework - Atsarul Mujahidin'} />
	<meta property="og:description" content={entry.lead} />
	<meta property="og:url" content="https://atsarul-mujahidin.netlify.app/{locale}/docs/frameworks" />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={locale === 'en' ? 'Frameworks - Atsarul Mujahidin' : 'Framework - Atsarul Mujahidin'} />
	<meta name="twitter:description" content={entry.lead} />
</svelte:head>

<DocsPage
	{locale}
	path="/docs/frameworks"
	{entry}
	prevHref="/{locale}/docs/variants"
	prevLabel={locale === 'en' ? 'Variants' : 'Varian'}
	nextHref="/{locale}/docs/sources"
	nextLabel={locale === 'en' ? 'Sources' : 'Sumber'}
/>
