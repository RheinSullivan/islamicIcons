<script lang="ts">
	// Icon showcase component - displaying icons from atsarul-mujahidin
	import { onMount } from 'svelte';
	
	// Import sample icons from the published package
	// Note: These are raw SVG strings, we'll need to display them properly
	let showcaseIcons = [
		{ name: 'Mosque', category: 'mosque', path: 'mosque/kaaba/fill.svg' },
		{ name: 'Kaaba Simple', category: 'mosque', path: 'mosque/kaaba-simple/fill.svg' },
		{ name: 'Prayer Mat', category: 'prayer', path: 'prayer/prayer-mat/fill.svg' },
		{ name: 'Quran', category: 'quran', path: 'quran/quran-book/fill.svg' },
		{ name: 'Dua Hands', category: 'prayer', path: 'prayer/dua-hands/fill.svg' },
		{ name: 'Allah Calligraphy', category: 'god', path: 'god/allah-caligraphy/fill.svg' },
		{ name: 'Crescent Star', category: 'ornamen', path: 'ornamen/crescent-star-frame/fill.svg' },
		{ name: 'Palestine Flag', category: 'flags', path: 'flags/palestine-flag/color.svg' },
		{ name: 'Zakat', category: 'charity', path: 'charity/zakat/outline.svg' },
		{ name: 'Muslim Family', category: 'lifestyle', path: 'lifestyle/muslim-family/fill.svg' },
		{ name: 'Ketupat', category: 'food', path: 'food/ketupat/fill.svg' },
		{ name: 'Bismillah', category: 'qalligraphy', path: 'qalligraphy/bismillah-calligraphy/fill.svg' }
	];
	
	let loading = false;
</script>

<div class="icon-showcase">
	{#if loading}
		<p class="text-gray-500">Loading icons...</p>
	{:else}
		<div class="mb-8">
			<h3 class="mb-4 text-xl font-semibold text-gray-800">Featured Atsarul Mujahidin</h3>
			<p class="mb-6 text-sm text-gray-600">
				Icons from <code class="rounded bg-gray-100 px-2 py-1">atsarul-mujahidin</code> package
			</p>
		</div>
		
		<div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
			{#each showcaseIcons as icon}
				<div class="flex flex-col items-center gap-2 rounded-lg border border-gray-200 p-4 transition hover:border-islamic-green hover:shadow-md">
					<div class="flex h-16 w-16 items-center justify-center">
						<img 
							src="/assets/{icon.path}" 
							alt={icon.name}
							class="h-full w-full object-contain"
							loading="lazy"
						/>
					</div>
					<span class="text-center text-xs font-medium text-gray-700">{icon.name}</span>
					<span class="text-center text-xs text-gray-500">{icon.category}</span>
				</div>
			{/each}
		</div>
		
		<div class="mt-8 rounded-lg border border-islamic-green/20 bg-islamic-green/5 p-6">
			<h3 class="mb-2 text-lg font-semibold text-islamic-green">Installation</h3>
			<p class="mb-4 text-sm text-gray-600">
				Install the package in your project:
			</p>
			<pre class="mb-4 overflow-x-auto rounded bg-gray-900 p-4 text-sm text-green-400">npm install atsarul-mujahidin
# or
bun add atsarul-mujahidin</pre>
			
			<h3 class="mb-2 mt-6 text-lg font-semibold text-islamic-green">Usage Example</h3>
			<p class="mb-4 text-sm text-gray-600">
				Import and use icons in your HTML:
			</p>
			<pre class="overflow-x-auto rounded bg-gray-900 p-4 text-sm text-green-400">&lt;img 
  src="node_modules/atsarul-mujahidin/icons/mosque/kaaba/fill.svg" 
  alt="Kaaba"
  width="24"
  height="24"
/&gt;</pre>
		</div>
	{/if}
</div>

<style>
	.icon-showcase {
		padding: 2rem 0;
	}
	
	code {
		font-family: 'Courier New', monospace;
		font-size: 0.875rem;
	}
	
	pre {
		font-family: 'Courier New', monospace;
		font-size: 0.875rem;
		line-height: 1.5;
	}
</style>
