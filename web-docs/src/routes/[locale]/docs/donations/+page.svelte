<script lang="ts">
	import DocsPage from '$lib/components/DocsPage.svelte';
	import { getDoc } from '$lib/docs-content';
	import { type Locale } from '$lib/i18n';
	let { data } = $props();
	const locale = $derived(data.locale as Locale);
	const entry = $derived(getDoc('/docs/donations', locale));

	const titles: Record<Locale, string> = {
		en: 'Donations • 🇵🇸 Atsarul Mujahidin 🇸🇩',
		id: 'Donasi • 🇵🇸 Atsarul Mujahidin 🇸🇩',
		ar: 'التبرعات والمساعدات • 🇵🇸 آثار المجاهدين 🇸🇩',
		ja: '寄付と人道支援 • 🇵🇸 Atsarul Mujahidin 🇸🇩'
	};
	const prevLabels: Record<Locale, string> = {
		en: 'Sources & Attribution',
		id: 'Sumber & Atribusi',
		ar: 'المصادر والإسناد',
		ja: 'ソースと帰属'
	};
	const nextLabels: Record<Locale, string> = {
		en: 'Contributing',
		id: 'Kontribusi',
		ar: 'المساهمة',
		ja: '貢献ガイド'
	};
</script>
<svelte:head>
	<title>{titles[locale] || titles.en}</title>
	<meta name="description" content={entry.lead} />
	<link rel="canonical" href="https://atsarul-mujahidin.dev/{locale}/docs/donations" />
</svelte:head>
<DocsPage {locale} path="/docs/donations" {entry}
	prevHref="/{locale}/docs/sources" prevLabel={prevLabels[locale] || prevLabels.en}
	nextHref="/{locale}/contributing" nextLabel={nextLabels[locale] || nextLabels.en} />
