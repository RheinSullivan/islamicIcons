<script lang="ts">
	import { icons, pathFor, pretty } from '$lib/site';

	let { onclose, onopenIcon }: { onclose: () => void; onopenIcon: (name: string) => void } = $props();

	let query = $state('');

	const results = $derived.by(() => {
		const queryLower = query.trim().toLowerCase();
		if (!queryLower) return [];
		return icons
			.filter((icon) => `${icon.title} ${icon.name} ${icon.category} ${(icon.aliases || []).join(' ')}`.toLowerCase().includes(queryLower))
			.slice(0, 10);
	});

	function handleBackdropKeydown(e: KeyboardEvent) {
		if (e.key === 'Enter' || e.key === ' ') onclose();
	}
</script>

<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<div
	role="dialog"
	aria-modal="true"
	aria-label="Search icons"
	tabindex="-1"
	class="fixed inset-0 z-[110] grid place-items-center bg-black/40 px-4 backdrop-blur-[4px]"
>
	<button
		type="button"
		data-search-close
		aria-label="Close search"
		onclick={onclose}
		class="absolute inset-0 h-full w-full cursor-default border-0 bg-transparent"
	></button>
	<div class="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-islamic-line-strong bg-[#09150f] shadow-[0_30px_100px_rgba(0,0,0,.55)]">
		<div class="flex h-14 items-center gap-3 border-b border-islamic-line px-4">
			<svg viewBox="0 0 24 24" aria-hidden="true" class="size-4 fill-none stroke-current stroke-[1.7]"
				><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4.5 4.5" /></svg
			>
			<!-- svelte-ignore a11y_autofocus -->
			<input
				autofocus
				bind:value={query}
				class="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-islamic-dim"
				placeholder="Search icons, categories, docs..."
				aria-label="Search icons"
			/>
			<kbd class="rounded-md border border-islamic-line px-1.5 py-1 text-[9px] text-islamic-dim">ESC</kbd>
		</div>
		<div class="max-h-[55vh] overflow-y-auto p-2" role="listbox" aria-label="Search results">
			{#if results.length === 0}
				<p class="p-6 text-center text-xs text-islamic-dim">No matching icons.</p>
			{:else}
				{#each results as item (item.name)}
					<button
						type="button"
						role="option"
						aria-selected="false"
						data-result={item.name}
						onclick={() => { onopenIcon(item.name); onclose(); }}
						class="flex w-full items-center gap-3 rounded-xl p-2 text-left transition hover:bg-white/5"
					>
						<span
							class="grid size-10 shrink-0 place-items-center rounded-lg border border-islamic-line bg-islamic-panel"
						>
							<img class="size-7 object-contain" src={pathFor(item, 'fill')} alt="" />
						</span>
						<span class="min-w-0 flex-1">
							<b class="block text-xs">{item.title}</b>
							<small class="mt-1 block text-[9px] text-islamic-dim">{pretty(item.category)}</small>
						</span>
						<span class="text-islamic-dim" aria-hidden="true">
							<svg viewBox="0 0 24 24" class="size-4 fill-none stroke-current stroke-[1.8]"
								><path d="M5 12h13M13 6l6 6-6 6" /></svg
							>
						</span>
					</button>
				{/each}
			{/if}
		</div>
	</div>
</div>
