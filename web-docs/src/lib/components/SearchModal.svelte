<script lang="ts">
	import { icons, pathFor, pretty, categories } from '$lib/site';
	import { docs, docsId, type DocEntry } from '$lib/docs-content';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';

	let { onclose, onopenIcon }: { onclose: () => void; onopenIcon: (name: string) => void } = $props();

	let query = $state('');

	// Get current locale
	const currentLocale = $derived(
		(page.url?.pathname?.split('/')[1] as 'en' | 'id') || 'en'
	);

	// Prepare searchable pages
	const pages = $derived.by(() => [
		{ title: 'Home', path: `/${currentLocale}`, type: 'page', keywords: 'islamic icons library atsarul mujahidin' },
		{ title: 'Icons Gallery', path: `/${currentLocale}/icons`, type: 'page', keywords: 'browse explore gallery' },
		{ title: 'Showcase', path: `/${currentLocale}/showcase`, type: 'page', keywords: 'projects examples community' },
		{ title: 'Donations', path: `/${currentLocale}/donations`, type: 'page', keywords: 'donate humanitarian palestine support' },
		{ title: 'Packages', path: `/${currentLocale}/packages`, type: 'page', keywords: 'npm install framework react vue svelte' },
		{ title: 'Sources', path: `/${currentLocale}/sources`, type: 'page', keywords: 'attribution license creative commons' },
		{ title: 'Contributing', path: `/${currentLocale}/contributing`, type: 'page', keywords: 'contribute github pull request' },
		{ title: 'Code of Conduct', path: `/${currentLocale}/code-of-conduct`, type: 'page', keywords: 'community rules guidelines' },
		{ title: 'License', path: `/${currentLocale}/license`, type: 'page', keywords: 'mit open source' },
		{ title: 'Brand Logos', path: `/${currentLocale}/brand-logos`, type: 'page', keywords: 'logo branding corporate' },
	]);

	// Prepare searchable docs
	const docsEntries = $derived.by(() => {
		const docsMap = currentLocale === 'id' ? docsId : docs;
		return Object.entries(docsMap).map(([path, entry]) => ({
			title: entry.title,
			path: `/${currentLocale}${path}`,
			type: 'doc',
			keywords: entry.lead + ' ' + entry.body.replace(/<[^>]*>/g, '').toLowerCase()
		}));
	});

	// Prepare searchable categories
	const categoryItems = $derived.by(() => 
		categories.map(cat => ({
			title: pretty(cat),
			path: `/${currentLocale}/categories/${cat}`,
			type: 'category',
			keywords: cat
		}))
	);

	// Combined search results
	const results = $derived.by(() => {
		const queryLower = query.trim().toLowerCase();
		if (!queryLower) return [];

		const results: Array<{
			type: 'icon' | 'doc' | 'page' | 'category';
			title: string;
			subtitle?: string;
			path?: string;
			iconName?: string;
			iconPath?: string;
		}> = [];

		// Search icons
		const iconResults = icons
			.filter((icon) => 
				`${icon.title} ${icon.name} ${icon.category} ${(icon.aliases || []).join(' ')}`.toLowerCase().includes(queryLower)
			)
			.slice(0, 5)
			.map(icon => ({
				type: 'icon' as const,
				title: icon.title,
				subtitle: pretty(icon.category),
				iconName: icon.name,
				iconPath: pathFor(icon, 'fill')
			}));

		// Search docs
		const docResults = docsEntries
			.filter(doc => 
				`${doc.title} ${doc.keywords}`.toLowerCase().includes(queryLower)
			)
			.slice(0, 3)
			.map(doc => ({
				type: 'doc' as const,
				title: doc.title,
				subtitle: 'Documentation',
				path: doc.path
			}));

		// Search pages
		const pageResults = pages
			.filter(p => 
				`${p.title} ${p.keywords}`.toLowerCase().includes(queryLower)
			)
			.slice(0, 3)
			.map(p => ({
				type: 'page' as const,
				title: p.title,
				subtitle: 'Page',
				path: p.path
			}));

		// Search categories
		const catResults = categoryItems
			.filter(cat => 
				cat.title.toLowerCase().includes(queryLower) || cat.keywords.includes(queryLower)
			)
			.slice(0, 2)
			.map(cat => ({
				type: 'category' as const,
				title: cat.title,
				subtitle: 'Category',
				path: cat.path
			}));

		// Prioritize: icons first, then docs, then pages, then categories
		return [...iconResults, ...docResults, ...pageResults, ...catResults].slice(0, 10);
	});

	function handleBackdropKeydown(e: KeyboardEvent) {
		if (e.key === 'Enter' || e.key === ' ') onclose();
	}

	function handleResultClick(result: typeof results[0]) {
		if (result.type === 'icon' && 'iconName' in result) {
			onopenIcon(result.iconName);
		} else if ('path' in result) {
			goto(result.path);
		}
		onclose();
	}

	function getResultIcon(type: string) {
		switch (type) {
			case 'icon': return '<circle cx="11" cy="11" r="6.5" /><path d="m16 16 4.5 4.5" />';
			case 'doc': return '<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/>';
			case 'page': return '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/>';
			case 'category': return '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>';
			default: return '<circle cx="11" cy="11" r="6.5" /><path d="m16 16 4.5 4.5" />';
		}
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
				placeholder={currentLocale === 'id' ? 'Cari ikon, dokumentasi, halaman...' : 'Search icons, docs, pages...'}
				aria-label={currentLocale === 'id' ? 'Cari' : 'Search'}
			/>
			<kbd class="rounded-md border border-islamic-line px-1.5 py-1 text-[9px] text-islamic-dim">ESC</kbd>
		</div>
		<div class="max-h-[55vh] overflow-y-auto p-2" role="listbox" aria-label={currentLocale === 'id' ? 'Hasil pencarian' : 'Search results'}>
			{#if results.length === 0}
				<p class="p-6 text-center text-xs text-islamic-dim">
					{currentLocale === 'id' ? 'Tidak ada hasil.' : 'No results found.'}
				</p>
			{:else}
				{#each results as result (result.type + ('iconName' in result ? result.iconName : 'path' in result ? result.path : ''))}
					<button
						type="button"
						role="option"
						aria-selected="false"
						onclick={() => handleResultClick(result)}
						class="flex w-full items-center gap-3 rounded-xl p-2 text-left transition hover:bg-white/5"
					>
						{#if result.type === 'icon' && 'iconPath' in result}
							<span
								class="grid size-10 shrink-0 place-items-center rounded-lg border border-islamic-line bg-islamic-panel"
							>
								<img class="size-7 object-contain" src={result.iconPath} alt="" />
							</span>
						{:else}
							<span
								class="grid size-10 shrink-0 place-items-center rounded-lg border border-islamic-line bg-islamic-panel"
							>
								<svg viewBox="0 0 24 24" class="size-5 fill-none stroke-current stroke-[1.5]" aria-hidden="true">
									{@html getResultIcon(result.type)}
								</svg>
							</span>
						{/if}
						<span class="min-w-0 flex-1">
							<b class="block text-xs">{result.title}</b>
							<small class="mt-1 block text-[9px] text-islamic-dim">{result.subtitle}</small>
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
