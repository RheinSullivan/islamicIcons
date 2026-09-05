<script lang="ts">
	/**
	 * DynamicIcon - Renders icons from atsarul-mujahidin package
	 * Uses static imports with dynamic component selection
	 */
	import type { CatalogItem } from '$lib/types';
	
	// Import all color variant icons
	import AtsarulMujahidinColor from '../../../../library/svelte/color/AtsarulMujahidin.svelte';
	import IslamicPatternColor1 from '../../../../library/svelte/color/IslamicPatternColor1.svelte';
	import IslamicPatternColor2 from '../../../../library/svelte/color/IslamicPatternColor2.svelte';
	import MosqueColor from '../../../../library/svelte/color/MosqueColor.svelte';
	import PalestineBrush from '../../../../library/svelte/color/PalestineBrush.svelte';
	import PalestineFlag from '../../../../library/svelte/color/PalestineFlag.svelte';
	import PalestineRelief from '../../../../library/svelte/color/PalestineRelief.svelte';
	
	// Import all fill variant icons
	import AdhanCall from '../../../../library/svelte/fill/AdhanCall.svelte';
	import AllahCaligraphy from '../../../../library/svelte/fill/AllahCaligraphy.svelte';
	import AllahHand from '../../../../library/svelte/fill/AllahHand.svelte';
	import ArabicCalligraphy1 from '../../../../library/svelte/fill/ArabicCalligraphy1.svelte';
	import ArabicCalligraphy2 from '../../../../library/svelte/fill/ArabicCalligraphy2.svelte';
	import AtsarulMujahidin from '../../../../library/svelte/fill/AtsarulMujahidin.svelte';
	import Basmallah from '../../../../library/svelte/fill/Basmallah.svelte';
	import BismillahCalligraphy from '../../../../library/svelte/fill/BismillahCalligraphy.svelte';
	import Camel from '../../../../library/svelte/fill/Camel.svelte';
	import CamelPeople from '../../../../library/svelte/fill/CamelPeople.svelte';
	import Cow from '../../../../library/svelte/fill/Cow.svelte';
	import CrescentStarFrame from '../../../../library/svelte/fill/CrescentStarFrame.svelte';
	import DuaHands from '../../../../library/svelte/fill/DuaHands.svelte';
	import Fast from '../../../../library/svelte/fill/Fast.svelte';
	import Fasting from '../../../../library/svelte/fill/Fasting.svelte';
	import Goat from '../../../../library/svelte/fill/Goat.svelte';
	import IslamicCrescentWithSmallStarSvgrepoCom from '../../../../library/svelte/fill/IslamicCrescentWithSmallStarSvgrepoCom.svelte';
	import IslamicIconLogo from '../../../../library/svelte/fill/IslamicIconLogo.svelte';
	import IslamicPattern2 from '../../../../library/svelte/fill/IslamicPattern2.svelte';
	import Kaaba from '../../../../library/svelte/fill/Kaaba.svelte';
	import KaabaSimple from '../../../../library/svelte/fill/KaabaSimple.svelte';
	import Ketupat from '../../../../library/svelte/fill/Ketupat.svelte';
	import ManPraying from '../../../../library/svelte/fill/ManPraying.svelte';
	import MoonStart from '../../../../library/svelte/fill/MoonStart.svelte';
	import MosqueDome from '../../../../library/svelte/fill/MosqueDome.svelte';
	import MosqueDomeSimple from '../../../../library/svelte/fill/MosqueDomeSimple.svelte';
	import MosqueMaps from '../../../../library/svelte/fill/MosqueMaps.svelte';
	import MosqueSimple from '../../../../library/svelte/fill/MosqueSimple.svelte';
	import MosqueSvgrepoCom from '../../../../library/svelte/fill/MosqueSvgrepoCom.svelte';
	import MosqueWithMinarets from '../../../../library/svelte/fill/MosqueWithMinarets.svelte';
	import MuhammadCalligraphy from '../../../../library/svelte/fill/MuhammadCalligraphy.svelte';
	import MuslimFamily from '../../../../library/svelte/fill/MuslimFamily.svelte';
	import MuslimFamilyChild from '../../../../library/svelte/fill/MuslimFamilyChild.svelte';
	import MuslimMan from '../../../../library/svelte/fill/MuslimMan.svelte';
	import MuslimPrayerSvgrepoCom from '../../../../library/svelte/fill/MuslimPrayerSvgrepoCom.svelte';
	import MuslimPraying1 from '../../../../library/svelte/fill/MuslimPraying1.svelte';
	import MuslimPraying2 from '../../../../library/svelte/fill/MuslimPraying2.svelte';
	import MuslimWoman from '../../../../library/svelte/fill/MuslimWoman.svelte';
	import PrayerBeadsTasbih from '../../../../library/svelte/fill/PrayerBeadsTasbih.svelte';
	import PrayerMat from '../../../../library/svelte/fill/PrayerMat.svelte';
	import PrayerPosition from '../../../../library/svelte/fill/PrayerPosition.svelte';
	import PrayerRug from '../../../../library/svelte/fill/PrayerRug.svelte';
	import PrayerTime from '../../../../library/svelte/fill/PrayerTime.svelte';
	import QiblaDirection from '../../../../library/svelte/fill/QiblaDirection.svelte';
	import QuranBook from '../../../../library/svelte/fill/QuranBook.svelte';
	import QuranStand from '../../../../library/svelte/fill/QuranStand.svelte';
	import QuranSvgrepoCom from '../../../../library/svelte/fill/QuranSvgrepoCom.svelte';
	import RukuBowing from '../../../../library/svelte/fill/RukuBowing.svelte';
	import SajadahPrayerMat from '../../../../library/svelte/fill/SajadahPrayerMat.svelte';
	import SalahPraying from '../../../../library/svelte/fill/SalahPraying.svelte';
	import ShadaqahHand from '../../../../library/svelte/fill/ShadaqahHand.svelte';
	import SujudProstration from '../../../../library/svelte/fill/SujudProstration.svelte';
	import TakbirHands from '../../../../library/svelte/fill/TakbirHands.svelte';
	import WomanHijab from '../../../../library/svelte/fill/WomanHijab.svelte';
	import WudhuAblution from '../../../../library/svelte/fill/WudhuAblution.svelte';
	
	// Import all outline variant icons
	import AllahHandOutline from '../../../../library/svelte/outline/AllahHandOutline.svelte';
	import CrescentStarFrameOutline from '../../../../library/svelte/outline/CrescentStarFrameOutline.svelte';
	import CrescentStarOutline from '../../../../library/svelte/outline/CrescentStarOutline.svelte';
	import FastOutline from '../../../../library/svelte/outline/FastOutline.svelte';
	import IslamicPattern1 from '../../../../library/svelte/outline/IslamicPattern1.svelte';
	import IslamicPattern3 from '../../../../library/svelte/outline/IslamicPattern3.svelte';
	import IslamicPattern4 from '../../../../library/svelte/outline/IslamicPattern4.svelte';
	import IslamicPattern5 from '../../../../library/svelte/outline/IslamicPattern5.svelte';
	import IslamicPattern6 from '../../../../library/svelte/outline/IslamicPattern6.svelte';
	import IslamicPattern7 from '../../../../library/svelte/outline/IslamicPattern7.svelte';
	import KetupatOutline from '../../../../library/svelte/outline/KetupatOutline.svelte';
	import KetupatSideOutline from '../../../../library/svelte/outline/KetupatSideOutline.svelte';
	import LanternOutline from '../../../../library/svelte/outline/LanternOutline.svelte';
	import MoonStarOutline from '../../../../library/svelte/outline/MoonStarOutline.svelte';
	import PrayerBeadsOutline from '../../../../library/svelte/outline/PrayerBeadsOutline.svelte';
	import QuranHolderOutline from '../../../../library/svelte/outline/QuranHolderOutline.svelte';
	import QuranStandOutline from '../../../../library/svelte/outline/QuranStandOutline.svelte';
	import ShadaqahHandOutline from '../../../../library/svelte/outline/ShadaqahHandOutline.svelte';
	import TasbihBeadsOutline from '../../../../library/svelte/outline/TasbihBeadsOutline.svelte';
	import WomanHijabOutline from '../../../../library/svelte/outline/WomanHijabOutline.svelte';
	import Zakat from '../../../../library/svelte/outline/Zakat.svelte';
	
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
	
	// Name mapping: catalog name → component name
	const nameAliases: Record<string, string> = {
		// Mosque category - map plain "mosque" to MosqueSimple
		'mosque': 'MosqueSimple',
		'mosque-simple': 'MosqueSimple',
		'mosque-color': 'MosqueColor',
		'mosque-dome': 'MosqueDome',
		'mosque-dome-simple': 'MosqueDomeSimple',
		'mosque-maps': 'MosqueMaps',
		'mosque-svgrepo-com': 'MosqueSvgrepoCom',
		'mosque-with-minarets': 'MosqueWithMinarets',
		
		// Specific mappings for icons with unique names
		'kaaba': 'Kaaba',
		'kaaba-simple': 'KaabaSimple',
		'quran-book': 'QuranBook',
		'quran-stand': 'QuranStand',
		'quran-svgrepo-com': 'QuranSvgrepoCom',
		'quran-holder-outline': 'QuranHolderOutline',
		'quran-stand-outline': 'QuranStandOutline',
		
		// Allah/God
		'allah-caligraphy': 'AllahCaligraphy',
		'allah-hand': 'AllahHand',
		'allah-hand-outline': 'AllahHandOutline',
		
		// Prophet
		'muhammad-calligraphy': 'MuhammadCalligraphy',
		
		// Calligraphy
		'arabic-calligraphy-1': 'ArabicCalligraphy1',
		'arabic-calligraphy-2': 'ArabicCalligraphy2',
		'basmallah': 'Basmallah',
		'bismillah-calligraphy': 'BismillahCalligraphy',
		
		// Prayer
		'adhan-call': 'AdhanCall',
		'dua-hands': 'DuaHands',
		'man-praying': 'ManPraying',
		'muslim-prayer-svgrepo-com': 'MuslimPrayerSvgrepoCom',
		'muslim-praying-1': 'MuslimPraying1',
		'muslim-praying-2': 'MuslimPraying2',
		'prayer-beads-outline': 'PrayerBeadsOutline',
		'prayer-beads-tasbih': 'PrayerBeadsTasbih',
		'prayer-mat': 'PrayerMat',
		'prayer-position': 'PrayerPosition',
		'prayer-rug': 'PrayerRug',
		'prayer-time': 'PrayerTime',
		'qibla-direction': 'QiblaDirection',
		'ruku-bowing': 'RukuBowing',
		'sajadah-prayer-mat': 'SajadahPrayerMat',
		'salah-praying': 'SalahPraying',
		'sujud-prostration': 'SujudProstration',
		'takbir-hands': 'TakbirHands',
		'tasbih-beads-outline': 'TasbihBeadsOutline',
		'wudhu-ablution': 'WudhuAblution',
		
		// Food
		'fast': 'Fast',
		'fast-outline': 'FastOutline',
		'fasting': 'Fasting',
		'ketupat': 'Ketupat',
		'ketupat-outline': 'KetupatOutline',
		'ketupat-side-outline': 'KetupatSideOutline',
		
		// Lifestyle
		'muslim-family': 'MuslimFamily',
		'muslim-family-child': 'MuslimFamilyChild',
		'muslim-man': 'MuslimMan',
		'muslim-woman': 'MuslimWoman',
		'woman-hijab': 'WomanHijab',
		'woman-hijab-outline': 'WomanHijabOutline',
		
		// Charity
		'shadaqah-hand': 'ShadaqahHand',
		'shadaqah-hand-outline': 'ShadaqahHandOutline',
		'zakat': 'Zakat',
		
		// Flags
		'palestine-brush': 'PalestineBrush',
		'palestine-flag': 'PalestineFlag',
		'palestine-relief': 'PalestineRelief',
		
		// Animals
		'camel': 'Camel',
		'camel-people': 'CamelPeople',
		'cow': 'Cow',
		'goat': 'Goat',
		
		// Ornaments
		'crescent-star-frame': 'CrescentStarFrame',
		'crescent-star-frame-outline': 'CrescentStarFrameOutline',
		'crescent-star-outline': 'CrescentStarOutline',
		'islamic-crescent-with-small-star-svgrepo-com': 'IslamicCrescentWithSmallStarSvgrepoCom',
		'lantern-outline': 'LanternOutline',
		'moon-star-outline': 'MoonStarOutline',
		'moon-start': 'MoonStart',
		
		// Patterns
		'islamic-pattern-1': 'IslamicPattern1',
		'islamic-pattern-2': 'IslamicPattern2',
		'islamic-pattern-3': 'IslamicPattern3',
		'islamic-pattern-4': 'IslamicPattern4',
		'islamic-pattern-5': 'IslamicPattern5',
		'islamic-pattern-6': 'IslamicPattern6',
		'islamic-pattern-7': 'IslamicPattern7',
		'islamic-pattern-color-1': 'IslamicPatternColor1',
		'islamic-pattern-color-2': 'IslamicPatternColor2',
		
		// Brand
		'atsarul-mujahidin': 'AtsarulMujahidin',
		'islamic-icon-logo': 'IslamicIconLogo'
	};
	
	// Icon registry mapping (all 82 icons)
	const iconRegistry: Record<string, any> = {
		// Color variants
		'AtsarulMujahidinColor': AtsarulMujahidinColor,
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
		'AtsarulMujahidin': AtsarulMujahidin,
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
		'MosqueWithMinarets': MosqueWithMinarets,
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
	const componentName = $derived(() => {
		// First try direct alias mapping
		if (nameAliases[item.name]) {
			return nameAliases[item.name];
		}
		// Fall back to PascalCase conversion
		return toPascalCase(item.name);
	});
	
	const IconComponent = $derived(iconRegistry[componentName()]);
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
