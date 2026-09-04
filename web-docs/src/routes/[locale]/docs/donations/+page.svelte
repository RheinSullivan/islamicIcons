<script lang="ts">
	import DocsPage from '$lib/components/DocsPage.svelte';
	import { getDoc } from '$lib/docs-content';
	import { type Locale } from '$lib/i18n';
	let { data } = $props();
	const locale = $derived(data.locale as Locale);
	const entry = $derived(getDoc('/docs/donations', locale));
</script>
<svelte:head>
	<title>{locale === 'en' ? 'Donations - Atsarul Mujahidin' : 'Donasi - Atsarul Mujahidin'}</title>
	<meta name="description" content={entry.lead} />
	<link rel="canonical" href="https://islamic-icons.dev/{locale}/docs/donations" />
</svelte:head>
<DocsPage {locale} path="/docs/donations" {entry}
	prevHref="/{locale}/docs/sources" prevLabel={locale === 'en' ? 'Sources & attribution' : 'Sumber & atribusi'}
	nextHref="/{locale}/contributing" nextLabel={locale === 'en' ? 'Contributing' : 'Kontribusi'} />
