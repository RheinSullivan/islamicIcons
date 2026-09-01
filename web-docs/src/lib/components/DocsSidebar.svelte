<script lang="ts">
	import { page } from '$app/state';
	import { sideLinks } from '$lib/site';

	const currentPath = $derived(page.url.pathname.replace(/\/$/, '') || '/');
</script>

<aside class="hidden lg:block lg:sticky lg:top-28 lg:h-fit">
	<div class="mb-5 text-[10px] font-semibold uppercase tracking-[.18em] text-islamic-dim">Documentation</div>
	<div class="grid gap-1">
		{#each sideLinks as [label, href]}
			<a
				href={href}
				class="rounded-lg px-3 py-2.5 text-[12px] transition {currentPath === href ? 'bg-islamic-green/8 text-islamic-green' : 'text-islamic-muted hover:bg-white/4 hover:text-islamic-text'}"
			>
				{label}
			</a>
		{/each}
	</div>
	<div class="mt-8 rounded-2xl border border-islamic-line bg-islamic-panel p-4">
		<span class="mb-3 grid size-8 place-items-center rounded-lg bg-islamic-green/10 text-islamic-green">✦</span>
		<b class="text-[12px]">Contribute an icon</b>
		<p class="mt-2 text-[11px] leading-6 text-islamic-dim">Drop in SVG/WebP metadata, then validate with Bun.</p>
		<a href="/contributing" class="mt-3 inline-flex text-[11px] font-medium text-islamic-green">Contribution guide →</a>
	</div>
</aside>