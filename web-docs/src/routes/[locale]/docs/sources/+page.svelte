<script lang="ts">
	import DocsPage from '$lib/components/DocsPage.svelte';
	import { getDoc } from '$lib/docs-content';
	import { type Locale } from '$lib/i18n';
	let { data } = $props();
	const locale = $derived(data.locale as Locale);
	const entry = $derived(getDoc('/docs/sources', locale));

	const titles: Record<Locale, string> = {
		en: 'Sources & Attribution • 🇵🇸 Atsarul Mujahidin 🇸🇩',
		id: 'Sumber & Atribusi • 🇵🇸 Atsarul Mujahidin 🇸🇩',
		ar: 'المصادر والإسناد • 🇵🇸 آثار المجاهدين 🇸🇩',
		ja: 'ソースと帰属 • 🇵🇸 Atsarul Mujahidin 🇸🇩'
	};
	const prevLabels: Record<Locale, string> = {
		en: 'Frameworks',
		id: 'Framework',
		ar: 'أطر العمل',
		ja: 'フレームワーク'
	};
	const nextLabels: Record<Locale, string> = {
		en: 'Donations',
		id: 'Donasi',
		ar: 'التبرعات',
		ja: '寄付'
	};
</script>
<svelte:head>
	<title>{titles[locale] || titles.en}</title>
	<meta name="description" content={entry.lead} />
	<link rel="canonical" href="https://atsarul-mujahidin.dev/{locale}/docs/sources" />
</svelte:head>
<DocsPage {locale} path="/docs/sources" {entry}
	prevHref="/{locale}/docs/frameworks" prevLabel={prevLabels[locale] || prevLabels.en}
	nextHref="/{locale}/docs/donations" nextLabel={nextLabels[locale] || nextLabels.en} />
