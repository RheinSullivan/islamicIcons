<script lang="ts">
	import ResourceLayout from '$lib/components/ResourceLayout.svelte';
	import { richBody, type DocEntry } from '$lib/docs-content';
	import { type Locale } from '$lib/i18n';

	let {
		locale,
		path,
		entry,
		prevHref = null,
		nextHref = null,
		prevLabel = null,
		nextLabel = null,
	}: {
		locale: Locale;
		path: string;
		entry: DocEntry;
		prevHref?: string | null;
		nextHref?: string | null;
		prevLabel?: string | null;
		nextLabel?: string | null;
	} = $props();
</script>

<!-- Basmallah: بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ - Bismillahir Rahmanir Rahim -->
<!-- Hamdallah: الْحَمْدُ لِلَّٰهِ - Alhamdulillah - All praise is due to Allah -->

<ResourceLayout
	title={entry.title}
	label={locale === 'en' ? 'Documentation' : locale === 'id' ? 'Dokumentasi' : locale === 'ar' ? 'التوثيق' : 'ドキュメント'}
	lead={entry.lead}
	{prevHref}
	{prevLabel}
	{nextHref}
	{nextLabel}
>
	<div class="doc-body text-[13px] leading-8 text-islamic-muted [&_a]:text-islamic-green [&_code]:rounded [&_code]:bg-black/20 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-[11px] [&_code]:text-islamic-green [&_h2]:mb-3 [&_h2]:mt-12 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:tracking-[-.03em] [&_h2]:text-islamic-text [&_h3]:mb-2 [&_h3]:mt-8 [&_h3]:font-display [&_h3]:text-lg [&_h3]:tracking-[-.02em] [&_h3]:text-islamic-text [&_p]:mb-6 [&_strong]:text-islamic-text">
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html richBody(entry.body)}
	</div>
</ResourceLayout>
