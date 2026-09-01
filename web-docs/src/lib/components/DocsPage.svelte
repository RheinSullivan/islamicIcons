<script lang="ts">
	import { richBody, type DocEntry } from '$lib/docs-content';
	import { translations, type Locale } from '$lib/i18n';

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

	const t = $derived(translations[locale]);
</script>

<article class="gsap-container min-w-0">
	<div class="text-[10px] text-islamic-dim">
		{t.docs.breadcrumb} <span class="px-1">/</span> {entry.title}
	</div>
	<h1 class="mt-4 font-display text-4xl tracking-[-.055em] sm:text-6xl">{entry.title}</h1>
	<p class="mt-5 max-w-2xl text-base leading-8 text-islamic-muted">{entry.lead}</p>
	<!-- Doc body — richBody applies native Tailwind classes to HTML strings, exact from native -->
	<div
		class="doc-body mt-12 text-[13px] leading-8 text-islamic-muted [&_a]:text-islamic-green [&_code]:rounded [&_code]:bg-black/20 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-[11px] [&_code]:text-islamic-green [&_h2]:mb-3 [&_h2]:mt-12 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:tracking-[-.03em] [&_h2]:text-islamic-text [&_p]:mb-6 [&_strong]:text-islamic-text"
	>
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html richBody(entry.body)}
	</div>
	<!-- Prev / Next navigation -->
	<div class="mt-14 flex flex-col justify-between gap-3 border-t border-islamic-line pt-5 text-[10px] text-islamic-dim sm:flex-row">
		{#if prevHref}
			<a href={prevHref} class="cursor-pointer hover:text-islamic-text">← {prevLabel || t.docs.prevLink}</a>
		{:else}
			<span></span>
		{/if}
		{#if nextHref}
			<a href={nextHref} class="cursor-pointer text-islamic-green">{nextLabel || t.docs.nextLink} →</a>
		{:else}
			<span></span>
		{/if}
	</div>
</article>
