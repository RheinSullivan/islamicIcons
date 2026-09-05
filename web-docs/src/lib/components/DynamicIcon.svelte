<script lang="ts">
	/**
	 * DynamicIcon - Renders icons from atsarul-mujahidin package
	 * Uses static imports with dynamic component selection
	 */
	import type { CatalogItem } from '$lib/types';
	
	// Import all color variant icons
	import IslamicPatternColor1 from 'atsarul-mujahidin/svelte/color/IslamicPatternColor1';
	import IslamicPatternColor2 from 'atsarul-mujahidin/svelte/color/IslamicPatternColor2';
	import MosqueColor from 'atsarul-mujahidin/svelte/color/MosqueColor';
	import PalestineBrush from 'atsarul-mujahidin/svelte/color/PalestineBrush';
	import PalestineFlag from 'atsarul-mujahidin/svelte/color/PalestineFlag';
	import PalestineRelief from 'atsarul-mujahidin/svelte/color/PalestineRelief';
	
	// Import all fill variant icons
	import AdhanCall from 'atsarul-mujahidin/svelte/fill/AdhanCall';
	import AllahCaligraphy from 'atsarul-mujahidin/svelte/fill/AllahCaligraphy';
	import AllahHand from 'atsarul-mujahidin/svelte/fill/AllahHand';
	import ArabicCalligraphy1 from 'atsarul-mujahidin/svelte/fill/ArabicCalligraphy1';
	import ArabicCalligraphy2 from 'atsarul-mujahidin/svelte/fill/ArabicCalligraphy2';
	import Basmallah from 'atsarul-mujahidin/svelte/fill/Basmallah';
	import BismillahCalligraphy from 'atsarul-mujahidin/svelte/fill/BismillahCalligraphy';
	import Camel from 'atsarul-mujahidin/svelte/fill/Camel';
	import CamelPeople from 'atsarul-mujahidin/svelte/fill/CamelPeople';
	import Cow from 'atsarul-mujahidin/svelte/fill/Cow';
	import CrescentStarFrame from 'atsarul-mujahidin/svelte/fill/CrescentStarFrame';
	import DuaHands from 'atsarul-mujahidin/svelte/fill/DuaHands';
	import Fast from 'atsarul-mujahidin/svelte/fill/Fast';
	import Fasting from 'atsarul-mujahidin/svelte/fill/Fasting';
	import Goat from 'atsarul-mujahidin/svelte/fill/Goat';
	import IslamicCrescentWithSmallStarSvgrepoCom from 'atsarul-mujahidin/svelte/fill/IslamicCrescentWithSmallStarSvgrepoCom';
	import IslamicIconLogo from 'atsarul-mujahidin/svelte/fill/IslamicIconLogo';
	import IslamicPattern2 from 'atsarul-mujahidin/svelte/fill/IslamicPattern2';
	import Kaaba from 'atsarul-mujahidin/svelte/fill/Kaaba';
	import KaabaSimple from 'atsarul-mujahidin/svelte/fill/KaabaSimple';
	import Ketupat from 'atsarul-mujahidin/svelte/fill/Ketupat';
	import ManPraying from 'atsarul-mujahidin/svelte/fill/ManPraying';
	import MoonStart from 'atsarul-mujahidin/svelte/fill/MoonStart';
	import MosqueDome from 'atsarul-mujahidin/svelte/fill/MosqueDome';
	import MosqueDomeSimple from 'atsarul-mujahidin/svelte/fill/MosqueDomeSimple';
	import MosqueMaps from 'atsarul-mujahidin/svelte/fill/MosqueMaps';
	import MosqueSimple from 'atsarul-mujahidin/svelte/fill/MosqueSimple';
	import MosqueSvgrepoCom from 'atsarul-mujahidin/svelte/fill/MosqueSvgrepoCom';
	import MosqueSvgrepoCom1 from 'atsarul-mujahidin/svelte/fill/MosqueSvgrepoCom(1)';
	import MuhammadCalligraphy from 'atsarul-mujahidin/svelte/fill/MuhammadCalligraphy';
	import MuslimFamily from 'atsarul-mujahidin/svelte/fill/MuslimFamily';
	import MuslimFamilyChild from 'atsarul-mujahidin/svelte/fill/MuslimFamilyChild';
	import MuslimMan from 'atsarul-mujahidin/svelte/fill/MuslimMan';
	import MuslimPrayerSvgrepoCom from 'atsarul-mujahidin/svelte/fill/MuslimPrayerSvgrepoCom';
	import MuslimPraying1 from 'atsarul-mujahidin/svelte/fill/MuslimPraying1';
	import MuslimPraying2 from 'atsarul-mujahidin/svelte/fill/MuslimPraying2';
	import MuslimWoman from 'atsarul-mujahidin/svelte/fill/MuslimWoman';
	import PrayerBeadsTasbih from 'atsarul-mujahidin/svelte/fill/PrayerBeadsTasbih';
	import PrayerMat from 'atsarul-mujahidin/svelte/fill/PrayerMat';
	import PrayerPosition from 'atsarul-mujahidin/svelte/fill/PrayerPosition';
	import PrayerRug from 'atsarul-mujahidin/svelte/fill/PrayerRug';
	import PrayerTime from 'atsarul-mujahidin/svelte/fill/PrayerTime';
	import QiblaDirection from 'atsarul-mujahidin/svelte/fill/QiblaDirection';
	import QuranBook from 'atsarul-mujahidin/svelte/fill/QuranBook';
	import QuranStand from 'atsarul-mujahidin/svelte/fill/QuranStand';
	import QuranSvgrepoCom from 'atsarul-mujahidin/svelte/fill/QuranSvgrepoCom';
	import RukuBowing from 'atsarul-mujahidin/svelte/fill/RukuBowing';
	import SajadahPrayerMat from 'atsarul-mujahidin/svelte/fill/SajadahPrayerMat';
	import SalahPraying from 'atsarul-mujahidin/svelte/fill/SalahPraying';
	import ShadaqahHand from 'atsarul-mujahidin/svelte/fill/ShadaqahHand';
	import SujudProstration from 'atsarul-mujahidin/svelte/fill/SujudProstration';
	import TakbirHands from 'atsarul-mujahidin/svelte/fill/TakbirHands';
	import WomanHijab from 'atsarul-mujahidin/svelte/fill/WomanHijab';
	import WudhuAblution from 'atsarul-mujahidin/svelte/fill/WudhuAblution';
	
	// Import all outline variant icons
	import AllahHandOutline from 'atsarul-mujahidin/svelte/outline/AllahHandOutline';
	import CrescentStarFrameOutline from 'atsarul-mujahidin/svelte/outline/CrescentStarFrameOutline';
	import CrescentStarOutline from 'atsarul-mujahidin/svelte/outline/CrescentStarOutline';
	import FastOutline from 'atsarul-mujahidin/svelte/outline/FastOutline';
	import IslamicPattern1 from 'atsarul-mujahidin/svelte/outline/IslamicPattern1';
	import IslamicPattern3 from 'atsarul-mujahidin/svelte/outline/IslamicPattern3';
	import IslamicPattern4 from 'atsarul-mujahidin/svelte/outline/IslamicPattern4';
	import IslamicPattern5 from 'atsarul-mujahidin/svelte/outline/IslamicPattern5';
	import IslamicPattern6 from 'atsarul-mujahidin/svelte/outline/IslamicPattern6';
	import IslamicPattern7 from 'atsarul-mujahidin/svelte/outline/IslamicPattern7';
	import KetupatOutline from 'atsarul-mujahidin/svelte/outline/KetupatOutline';
	import KetupatSideOutline from 'atsarul-mujahidin/svelte/outline/KetupatSideOutline';
	import LanternOutline from 'atsarul-mujahidin/svelte/outline/LanternOutline';
	import MoonStarOutline from 'atsarul-mujahidin/svelte/outline/MoonStarOutline';
	import PrayerBeadsOutline from 'atsarul-mujahidin/svelte/outline/PrayerBeadsOutline';
	import QuranHolderOutline from 'atsarul-mujahidin/svelte/outline/QuranHolderOutline';
	import QuranStandOutline from 'atsarul-mujahidin/svelte/outline/QuranStandOutline';
	import ShadaqahHandOutline from 'atsarul-mujahidin/svelte/outline/ShadaqahHandOutline';
	import TasbihBeadsOutline from 'atsarul-mujahidin/svelte/outline/TasbihBeadsOutline';
	import WomanHijabOutline from 'atsarul-mujahidin/svelte/outline/WomanHijabOutline';
	import Zakat from 'atsarul-mujahidin/svelte/outline/Zakat';
	
	interface Props {
		item: CatalogItem;
		variant?: string;
		size?: number | string;
		colors?: string;
		class?: string;
		strokeWidth?: number | string;
	}
	
	let {
		item,
		variant = 'fill',
		size = 24,
		colors = 'currentColor',
		class: className = '',
		strokeWidth = 1.5
	}: Props = $props();
	
	// Convert kebab-case to PascalCase
	function toPascalCase(name: string): string {
		return name
			.split('-')
			.map(word => word.charAt(0).toUpperCase() + word.slice(1))
			.join('');
	}
	
	// Icon registry mapping (all 81 icons)
	const iconRegistry: Record<string, any> = {
		// Color variants
		'IslamicPatternColor1': IslamicPatternColor1,
		'IslamicPatternColor2': IslamicPatternColor2,
		'MosqueColor': MosqueColor,
		'PalestineBrush': PalestineBrush,
		'PalestineFlag': PalestineFlag,
		'PalestineRelief': PalestineRelief,
		
		// Fill variants
		'AdhanCall': AdhanCall,
		'AllahCaligraphy': AllahCaligraphy,
		'AllahHand': AllahHand,
		'ArabicCalligraphy1': ArabicCalligraphy1,
		'ArabicCalligraphy2': ArabicCalligraphy2,
		'Basmallah': Basmallah,
		'BismillahCalligraphy': BismillahCalligraphy,
		'Camel': Camel,
		'CamelPeople': CamelPeople,
		'Cow': Cow,
		'CrescentStarFrame': CrescentStarFrame,
		'DuaHands': DuaHands,
		'Fast': Fast,
		'Fasting': Fasting,
		'Goat': Goat,
		'IslamicCrescentWithSmallStarSvgrepoCom': IslamicCrescentWithSmallStarSvgrepoCom,
		'IslamicIconLogo': IslamicIconLogo,
		'IslamicPattern2': IslamicPattern2,
		'Kaaba': Kaaba,
		'KaabaSimple': KaabaSimple,
		'Ketupat': Ketupat,
		'ManPraying': ManPraying,
		'MoonStart': MoonStart,
		'MosqueDome': MosqueDome,
		'MosqueDomeSimple': MosqueDomeSimple,
		'MosqueMaps': MosqueMaps,
		'MosqueSimple': MosqueSimple,
		'MosqueSvgrepoCom': MosqueSvgrepoCom,
		'MosqueSvgrepoCom(1)': MosqueSvgrepoCom1,
		'MuhammadCalligraphy': MuhammadCalligraphy,
		'MuslimFamily': MuslimFamily,
		'MuslimFamilyChild': MuslimFamilyChild,
		'MuslimMan': MuslimMan,
		'MuslimPrayerSvgrepoCom': MuslimPrayerSvgrepoCom,
		'MuslimPraying1': MuslimPraying1,
		'MuslimPraying2': MuslimPraying2,
		'MuslimWoman': MuslimWoman,
		'PrayerBeadsTasbih': PrayerBeadsTasbih,
		'PrayerMat': PrayerMat,
		'PrayerPosition': PrayerPosition,
		'PrayerRug': PrayerRug,
		'PrayerTime': PrayerTime,
		'QiblaDirection': QiblaDirection,
		'QuranBook': QuranBook,
		'QuranStand': QuranStand,
		'QuranSvgrepoCom': QuranSvgrepoCom,
		'RukuBowing': RukuBowing,
		'SajadahPrayerMat': SajadahPrayerMat,
		'SalahPraying': SalahPraying,
		'ShadaqahHand': ShadaqahHand,
		'SujudProstration': SujudProstration,
		'TakbirHands': TakbirHands,
		'WomanHijab': WomanHijab,
		'WudhuAblution': WudhuAblution,
		
		// Outline variants
		'AllahHandOutline': AllahHandOutline,
		'CrescentStarFrameOutline': CrescentStarFrameOutline,
		'CrescentStarOutline': CrescentStarOutline,
		'FastOutline': FastOutline,
		'IslamicPattern1': IslamicPattern1,
		'IslamicPattern3': IslamicPattern3,
		'IslamicPattern4': IslamicPattern4,
		'IslamicPattern5': IslamicPattern5,
		'IslamicPattern6': IslamicPattern6,
		'IslamicPattern7': IslamicPattern7,
		'KetupatOutline': KetupatOutline,
		'KetupatSideOutline': KetupatSideOutline,
		'LanternOutline': LanternOutline,
		'MoonStarOutline': MoonStarOutline,
		'PrayerBeadsOutline': PrayerBeadsOutline,
		'QuranHolderOutline': QuranHolderOutline,
		'QuranStandOutline': QuranStandOutline,
		'ShadaqahHandOutline': ShadaqahHandOutline,
		'TasbihBeadsOutline': TasbihBeadsOutline,
		'WomanHijabOutline': WomanHijabOutline,
		'Zakat': Zakat
	};
	
	// Use $derived to ensure reactivity in runes mode
	const componentName = $derived(toPascalCase(item.name));
	const IconComponent = $derived(iconRegistry[componentName]);
</script>

{#if IconComponent}
	<IconComponent {size} {colors} {strokeWidth} class={className} />
{:else}
	<div class="grid place-items-center {className}" style="width: {typeof size === 'number' ? size + 'px' : size}; height: {typeof size === 'number' ? size + 'px' : size};">
		<svg viewBox="0 0 24 24" class="size-4 fill-none stroke-current stroke-2 text-islamic-dim/50">
			<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
			<line x1="12" y1="9" x2="12" y2="13"/>
			<line x1="12" y1="17" x2="12.01" y2="17"/>
		</svg>
	</div>
{/if}
