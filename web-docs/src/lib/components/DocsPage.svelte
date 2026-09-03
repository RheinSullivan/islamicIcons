<script lang="ts">
	import { richBody, type DocEntry } from '$lib/docs-content';
	import { translations, type Locale } from '$lib/i18n';
	import { onMount } from 'svelte';

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
	
	// Extract headings from body for subchapter navigation
	let headings = $state<{id: string; text: string; level: number}[]>([]);
	let activeHeading = $state('');

	onMount(() => {
		// Extract h2 and h3 from rendered content
		const container = document.querySelector('.doc-body');
		if (container) {
			const h2s = container.querySelectorAll('h2');
			const h3s = container.querySelectorAll('h3');
			const allHeadings: {id: string; text: string; level: number}[] = [];
			
			h2s.forEach((h) => {
				const id = h.textContent?.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') || '';
				h.id = id;
				allHeadings.push({ id, text: h.textContent || '', level: 2 });
			});
			
			h3s.forEach((h) => {
				const id = h.textContent?.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') || '';
				h.id = id;
				allHeadings.push({ id, text: h.textContent || '', level: 3 });
			});
			
			headings = allHeadings;
			
			// Intersection observer for active heading
			const observer = new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						activeHeading = entry.target.id;
					}
				});
			}, { rootMargin: '-100px 0px -66% 0px' });
			
			h2s.forEach((h) => observer.observe(h));
			h3s.forEach((h) => observer.observe(h));
			
			return () => observer.disconnect();
		}
	});
</script>

<div class="grid gap-10 lg:grid-cols-[minmax(0,1fr)_200px] lg:gap-14">
	<!-- Main content -->
	<article class="gsap-container min-w-0">
		<div class="text-[10px] text-islamic-dim">
			{t.docs.breadcrumb} <span class="px-1">/</span> {entry.title}
		</div>
		<h1 class="mt-4 font-display text-4xl tracking-[-.055em] sm:text-6xl">{entry.title}</h1>
		<p class="mt-5 max-w-2xl text-base leading-8 text-islamic-muted">{entry.lead}</p>
		<!-- Doc body - richBody applies native Tailwind classes to HTML strings, exact from native -->
		<div
			class="doc-body mt-12 text-[13px] leading-8 text-islamic-muted [&_a]:text-islamic-green [&_code]:rounded [&_code]:bg-black/20 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-[11px] [&_code]:text-islamic-green [&_h2]:mb-3 [&_h2]:mt-12 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:tracking-[-.03em] [&_h2]:text-islamic-text [&_h3]:mb-2 [&_h3]:mt-8 [&_h3]:font-display [&_h3]:text-lg [&_h3]:tracking-[-.02em] [&_h3]:text-islamic-text [&_p]:mb-6 [&_strong]:text-islamic-text"
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

	<!-- On this page navigation (right sidebar) -->
	{#if headings.length > 0}
		<aside class="hidden lg:block lg:sticky lg:top-28 lg:h-fit">
			<div class="mb-3 text-[9px] font-semibold uppercase tracking-[.18em] text-islamic-dim">
				{locale === 'en' ? 'On this page' : 'Di halaman ini'}
			</div>
			<div class="space-y-1">
				{#each headings as heading (heading.id)}
					<a
						href="#{heading.id}"
						class="relative block cursor-pointer border-l-2 py-1.5 text-[11px] transition {activeHeading === heading.id ? 'border-islamic-green text-islamic-green' : 'border-transparent text-islamic-dim hover:text-islamic-text'} {heading.level === 3 ? 'pl-4' : 'pl-2'}"
					>
						{heading.text}
					</a>
				{/each}
			</div>
		</aside>
	{/if}
</div>
