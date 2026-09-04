<script lang="ts">
	import Kaaba from 'atsarul-mujahidin/svelte/fill/Kaaba';
	import KaabaSimple from 'atsarul-mujahidin/svelte/fill/KaabaSimple';
	import PrayerMat from 'atsarul-mujahidin/svelte/fill/PrayerMat';
	import QuranBook from 'atsarul-mujahidin/svelte/fill/QuranBook';
	import DuaHands from 'atsarul-mujahidin/svelte/fill/DuaHands';
	import AllahCaligraphy from 'atsarul-mujahidin/svelte/fill/AllahCaligraphy';
	import CrescentStarFrame from 'atsarul-mujahidin/svelte/fill/CrescentStarFrame';
	import PalestineFlag from 'atsarul-mujahidin/svelte/color/PalestineFlag';
	import Zakat from 'atsarul-mujahidin/svelte/outline/Zakat';
	import MuslimFamily from 'atsarul-mujahidin/svelte/fill/MuslimFamily';
	import Ketupat from 'atsarul-mujahidin/svelte/fill/Ketupat';
	import BismillahCalligraphy from 'atsarul-mujahidin/svelte/fill/BismillahCalligraphy';

	const showcaseIcons = [
		{ name: 'Kaaba', category: 'mosque', component: Kaaba },
		{ name: 'Kaaba Simple', category: 'mosque', component: KaabaSimple },
		{ name: 'Prayer Mat', category: 'prayer', component: PrayerMat },
		{ name: 'Quran Book', category: 'quran', component: QuranBook },
		{ name: 'Dua Hands', category: 'prayer', component: DuaHands },
		{ name: 'Allah Calligraphy', category: 'god', component: AllahCaligraphy },
		{ name: 'Crescent Star', category: 'ornamen', component: CrescentStarFrame },
		{ name: 'Palestine Flag', category: 'flags', component: PalestineFlag },
		{ name: 'Zakat', category: 'charity', component: Zakat },
		{ name: 'Muslim Family', category: 'lifestyle', component: MuslimFamily },
		{ name: 'Ketupat', category: 'food', component: Ketupat },
		{ name: 'Bismillah', category: 'qalligraphy', component: BismillahCalligraphy }
	];
</script>

<div class="icon-showcase">
	<div class="mb-8">
		<h3 class="mb-4 text-xl font-semibold text-gray-800">Featured Icons</h3>
		<p class="mb-6 text-sm text-gray-600">
			Components from <code class="rounded bg-gray-100 px-2 py-1">atsarul-mujahidin</code> package
		</p>
	</div>
	
	<div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
		{#each showcaseIcons as icon}
			<div class="flex flex-col items-center gap-2 rounded-lg border border-gray-200 p-4 transition hover:border-islamic-green hover:shadow-md">
				<div class="flex h-16 w-16 items-center justify-center">
					{#if icon.component}
						{@const Component = icon.component}
						<Component width={64} height={64} />
					{/if}
				</div>
				<span class="text-center text-xs font-medium text-gray-700">{icon.name}</span>
				<span class="text-center text-xs text-gray-500">{icon.category}</span>
			</div>
		{/each}
	</div>
</div>
