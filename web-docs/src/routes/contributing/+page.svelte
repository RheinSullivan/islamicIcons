<script lang="ts">
	import { MAX } from '$lib/site';

	const steps = [
		['01', 'Drop the asset', 'Use SVG whenever possible. WebP is acceptable for artwork that should remain raster. Keep the original untouched in the source directory.'],
		['02', 'Describe it', 'Give it a semantic name, category, creator, source URL, license and provenance. If it came from Google, record the original page - not Google.'],
		['03', 'Generate variants', 'Only generate fill, outline or color when the transformation preserves the artwork. Otherwise keep the original variant only.'],
		['04', 'Validate with Bun', 'Run the catalog, package and validation scripts before opening a pull request.']
	];
</script>

<svelte:head>
	<title>Contributing | Atsarul Mujahidin</title>
	<meta
		name="description"
		content="Add an icon to Atsarul Mujahidin without breaking the catalog."
	/>
</svelte:head>

<main class="{MAX} pt-36pb-14 sm:pt-44 sm:pb-20 lg:pt-32">
	<div class="gsap-container max-w-4xl">
		<span class="text-[10px] font-semibold uppercase tracking-[.18em] text-islamic-green"
			>Open contribution model</span
		>
		<h1 class="mt-3 font-display text-5xl tracking-[-.06em] sm:text-7xl">
			Add an icon without breaking the catalog.
		</h1>
		<p class="mt-5 max-w-3xl text-base leading-8 text-islamic-muted">
			There is deliberately no fixed target such as 78 or 100 icons. The collection should grow
			when useful, licensed artwork is available and shrink when an asset should no longer be
			redistributed.
		</p>
	</div>
	<div class="mt-12 grid gap-3 sm:grid-cols-2">
		{#each steps as [n, t, p] (n)}
			<article class="gsap-on-scroll rounded-2xl border border-islamic-line bg-islamic-panel p-6">
				<span class="text-[10px] text-islamic-green">{n}</span>
				<h2 class="mt-12 font-display text-xl tracking-[-.03em]">{t}</h2>
				<p class="mt-3 text-[12px] leading-7 text-islamic-muted">{p}</p>
			</article>
		{/each}
	</div>
	<pre
		class="mt-3 overflow-x-auto rounded-2xl border border-islamic-line bg-black/20 p-5 text-[11px] leading-7 text-islamic-muted">bun run icons:catalog
bun run icons:package
bun run icons:validate</pre>
	<div
		class="mt-3 rounded-2xl border border-islamic-green/15 bg-islamic-green/5 p-5 text-[12px] leading-7 text-islamic-muted"
	>
		<b class="text-islamic-text">Source integrity</b>
		<span class="mt-2 block"
			>Do not replace a creator's artwork with a generic AI recreation just because it is easier
			to normalize. Preserve the source asset and its visual identity.</span
		>
	</div>
</main>