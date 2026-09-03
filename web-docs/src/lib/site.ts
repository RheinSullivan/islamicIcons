import { catalog, sources, metadata } from './catalog.generated';
import type { CatalogItem, SourceItem, LibraryMetadata } from './types';

export type { CatalogItem, SourceItem, LibraryMetadata };

export const icons: CatalogItem[] = catalog;
export { sources };
export { metadata };

export const categories = [...new Set(icons.map((i) => i.category))].sort();

export const repoUrl = metadata.repository || 'https://github.com/RheinSullivan/islamicIcons';
export const version = metadata.version;

export const navItems = [
	{ href: '/', label: 'Home', key: 'home' },
	{ href: '/icons', label: 'Icons', key: 'icons' },
	{ href: '/categories', label: 'Categories', key: 'categories' },
	{ href: '/docs', label: 'Docs', key: 'docs' },
	{ href: '/sources', label: 'Sources', key: 'sources' },
	{ href: '/donations', label: 'Donations', key: 'donations' }
];

export const sideLinks: Array<[string, string]> = [
	['Overview', '/docs'],
	['Installation', '/docs/installation'],
	['Usage', '/docs/usage'],
	['Variants', '/docs/variants'],
	['Frameworks', '/docs/frameworks'],
	['Sources & attribution', '/docs/sources'],
	['Donations', '/docs/donations'],
	['Contributing', '/contributing']
];

export const featuredNames = [
	'allah-calligraphy',
	'muhammad-calligraphy',
	'mosque',
	'quran-rehal',
	'wudhu',
	'lantern',
	'qibla-compass',
	'kaaba'
];

export const featured = featuredNames
	.map((name) => icons.find((item) => item.name === name))
	.filter((item): item is CatalogItem => Boolean(item));

export const MAX = 'mx-auto w-full max-w-[1200px] px-5 sm:px-7 lg:px-8';
export const ASSET_ROOT = '/assets';

export function pretty(value: string): string {
	return String(value ?? '')
		.replace(/[-_]/g, ' ')
		.replace(/([a-z])([A-Z])/g, '$1 $2')
		.replace(/\b\w/g, (c) => c.toUpperCase());
}

export function esc(value: string): string {
	return String(value ?? '').replace(/[&<>"']/g, (c) => ({
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;',
		'"': '&quot;',
		"'": '&#39;'
	}[c] || c));
}

export function camel(value: string): string {
	return String(value).replace(/[-_]([a-z])/g, (_, c) => c.toUpperCase());
}

export function icon(name: string) {
	return icons.find((i) => i.name === name);
}

export function variantName(variant: string): string {
	return variant === 'color' ? 'Colors' : pretty(variant);
}

export function sourceLabel(id: string): string {
	return (
		{
			community: 'Community',
			'svg-repo': 'SVG Repo',
			'mary-akveo': 'Mary Akveo',
			'google-material': 'Google Material Icons',
			'community-upload': 'Community Upload'
		}[id] || pretty(id)
	);
}

export function sourceForItem(item: CatalogItem, sourceId: string = 'all') {
	if (sourceId !== 'all') return item.sources.find((s) => s.id === sourceId) || item.sources[0];
	return (
		item.sources.find((s) => s.id === 'community') ||
		item.sources.find((s) => s.id === 'community-upload') ||
		item.sources[0]
	);
}

export function variantsFor(source: { variants?: string[] } | undefined): string[] {
	return source?.variants || [];
}

export function chooseVariant(
	source: { variants?: string[] } | undefined,
	requested: string = 'fill'
): string {
	const vars = variantsFor(source);
	if (vars.includes(requested)) return requested;
	if (vars.includes('fill')) return 'fill';
	if (vars.includes('original')) return 'original';
	return vars[0] || 'original';
}

export function pathFor(item: CatalogItem, variant: string = 'fill', sourceId: string = 'auto'): string {
	const source =
		sourceId === 'auto'
			? sourceForItem(item)
			: item.sources.find((source) => source.id === sourceId) || sourceForItem(item);
	if (!source) return '';
	const selectedVariant = chooseVariant(source, variant);
	if (source.id === 'community' || source.id === 'community-upload') {
		return `${ASSET_ROOT}/${item.category}/${item.name}/${selectedVariant}.svg`;
	}
	return `${ASSET_ROOT}/${item.category}/${item.name}/sources/${source.id}/${selectedVariant}.svg`;
}

export function iconPath(item: CatalogItem, variant: string = 'fill'): string {
	const source = sourceForItem(item);
	if (!source) return '';
	const selectedVariant = chooseVariant(source, variant);
	const base = `${ASSET_ROOT}/${item.category}/${item.name}`;
	if (source.id === 'community' || source.id === 'community-upload') return `${base}/${selectedVariant}.svg`;
	return `${base}/sources/${source.id}/${selectedVariant}.svg`;
}

export function categoryDescription(category: string): string {
	const descriptions: Record<string, string> = {
		charity: 'Zakat, sadaqah and giving.',
		flags: 'National and cause-related imagery.',
		food: 'Halal food, animals and dietary symbols.',
		god: 'Allah, tawhid and Arabic religious marks.',
		lifestyle: 'Hajj, travel and everyday Islamic life.',
		mosque: 'Mosques, minarets and sacred locations.',
		patterns: 'Geometric and ornamental Islamic motifs.',
		people: 'Muslim, family and community figures.',
		prayer: 'Salah, dua, wudhu, qibla and tasbih.',
		prophet: 'Prophetic names and calligraphy.',
		quran: 'Quran, Kaaba and sacred reading symbols.',
		ramadan: 'Ramadan, crescent, lantern, iftar and Eid-adjacent imagery.'
	};
	return descriptions[category] || 'Islamic visual symbols and community contributions.';
}

export const categoryMeta: Record<string, string> = {
	charity: 'Zakat, sadaqah and giving.',
	flags: 'National and cause-related imagery.',
	food: 'Halal food, animals and dietary symbols.',
	god: 'Allah, tawhid and Arabic religious marks.',
	lifestyle: 'Hajj, travel and everyday Islamic life.',
	mosque: 'Mosques, minarets and sacred locations.',
	patterns: 'Geometric and ornamental Islamic motifs.',
	people: 'Muslim, family and community figures.',
	prayer: 'Salah, dua, wudhu, qibla and tasbih.',
	prophet: 'Prophetic names and calligraphy.',
	quran: 'Quran, Kaaba and sacred reading symbols.',
	ramadan: 'Ramadan, crescent, lantern, iftar and Eid-adjacent imagery.'
};
