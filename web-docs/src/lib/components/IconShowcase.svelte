<script lang="ts">
	// Icon showcase component - will be populated after NPM publish
	// For now, displays placeholder for icons from @rhein.sullivan/islamic-icons
	
	import { onMount } from 'svelte';
	
	let icons: Array<{ name: string; category: string; svg: string }> = [];
	let loading = true;
	
	onMount(() => {
		// TODO: Import icons from @rhein.sullivan/islamic-icons after publish
		// Example:
		// import { Mosque, Kaaba, Quran } from '@rhein.sullivan/islamic-icons';
		
		loading = false;
	});
</script>

<div class="icon-showcase">
	{#if loading}
		<p class="text-gray-500">Loading icons...</p>
	{:else}
		<div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
			<!-- Icons will be displayed here after import -->
			<div class="flex flex-col items-center gap-2 rounded-lg border p-4">
				<div class="h-12 w-12 rounded bg-gray-200"></div>
				<span class="text-xs text-gray-600">Install package first</span>
			</div>
		</div>
		
		<div class="mt-8 rounded-lg border border-islamic-green/20 bg-islamic-green/5 p-6">
			<h3 class="mb-2 text-lg font-semibold text-islamic-green">Installation Required</h3>
			<p class="mb-4 text-sm text-gray-600">
				To see icons, install the package:
			</p>
			<pre class="rounded bg-gray-100 p-4 text-sm">bun add @rhein.sullivan/islamic-icons</pre>
			
			<p class="mt-4 text-sm text-gray-600">
				Then import icons in your components:
			</p>
			<pre class="rounded bg-gray-100 p-4 text-sm">import {'{ Mosque, Kaaba, Quran }'} from '@rhein.sullivan/islamic-icons';</pre>
		</div>
	{/if}
</div>

<style>
	.icon-showcase {
		padding: 2rem 0;
	}
</style>
