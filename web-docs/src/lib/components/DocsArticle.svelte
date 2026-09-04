<script lang="ts">
	import { page } from '$app/state';
	import { sideLinks } from '$lib/site';
	import { docs, richBody, type DocEntry } from '$lib/docs-content';
	import { MAX } from '$lib/site';

	let { path = '/docs' }: { path?: string } = $props();

	const entry: DocEntry = $derived(docs[path] ?? docs['/docs']);
	const currentPath = $derived(page.url.pathname.replace(/\/$/, '') || '/');
</script>

<svelte:head>
	<title>{entry.title} | Islamic Icons</title>
	<meta name="description" content={entry.lead} />
</svelte:head>

<main class="{MAX} pt-32 pb-14 sm:pt-36 sm:pb-20">
	<div class="grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-14">
		<aside class="hidden lg:block lg:sticky lg:top-28 lg:h-fit">
			<div class="mb-5 text-[10px] font-semibold uppercase tracking-[.18em] text-islamic-dim">
				Documentation
			</div>
			<div class="grid gap-1">
				{#each sideLinks as [label, href] (href)}
					<a
						href={href}
						class="rounded-lg px-3 py-2.5 text-[12px] transition {currentPath === href
							? 'bg-islamic-green/8 text-islamic-green'
							: 'text-islamic-muted hover:bg-white/4 hover:text-islamic-text'}"
					>
						{label}
					</a>
				{/each}
			</div>
			<div class="mt-8 rounded-2xl border border-islamic-line bg-islamic-panel p-4">
				<span class="mb-3 grid size-8 place-items-center rounded-lg bg-islamic-green/10 text-islamic-green"
					>✦</span
				>
				<b class="text-[12px]">Contribute an icon</b>
				<p class="mt-2 text-[11px] leading-6 text-islamic-dim">
					Drop in SVG/WebP metadata, then validate with Bun.
				</p>
				<a href="/contributing" class="mt-3 inline-flex text-[11px] font-medium text-islamic-green"
					>Contribution guide →</a
				>
			</div>
		</aside>
		<article class="gsap-container min-w-0">
			<div class="text-[10px] text-islamic-dim">Docs <span class="px-1">/</span> {entry.title}</div>
			<h1 class="mt-4 font-display text-4xl tracking-[-.055em] sm:text-6xl">{entry.title}</h1>
			<p class="mt-5 max-w-2xl text-base leading-8 text-islamic-muted">{entry.lead}</p>
			<div
				class="doc-body mt-12 text-[13px] leading-8 text-islamic-muted [&_a]:text-islamic-green [&_h2]:mt-12 [&_h2]:mb-3 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:tracking-[-.03em] [&_p]:mb-6 [&_strong]:text-islamic-text"
			>
				{@html richBody(entry.body)}
			</div>
			<div
				class="mt-14 flex flex-col justify-between gap-3 border-t border-islamic-line pt-5 text-[10px] text-islamic-dim sm:flex-row"
			>
				<a href="/docs">← Documentation home</a>
				<a href="/icons" class="text-islamic-green">Browse icons →</a>
			</div>
		</article>
	</div>
</main>