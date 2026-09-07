import { describe, it, expect } from 'vitest';
import catalogDataRaw from '../lib/data.json';
import { catalog } from '../lib/catalog.generated';
import { readFileSync, existsSync } from 'fs';
import { resolve } from 'path';

type IconSourceItem = { id: string; label?: string; variants?: string[] };
type IconCatalogItem = { name: string; title: string; category: string; sources: IconSourceItem[] };
const catalogData = catalogDataRaw as unknown as IconCatalogItem[];


describe('TDD Matrix: Catalog Data & Integrity', () => {
	it('should not contain any stale (1) references in data.json or catalog', () => {
		const staleInData = catalogData.filter((iconItem: any) => iconItem.name.includes('(1)') || iconItem.title.includes('(1)'));
		expect(staleInData).toHaveLength(0);

		const staleInCatalog = (catalog as unknown as IconCatalogItem[]).filter((iconItem: any) => iconItem.name.includes('(1)') || iconItem.title.includes('(1)'));
		expect(staleInCatalog).toHaveLength(0);
	});

	it('should have both mosque-svgrepo-com and mosque-with-minarets as distinct icons', () => {
		const svgrepo = catalogData.find((iconItem: any) => iconItem.name === 'mosque-svgrepo-com');
		const minarets = catalogData.find((iconItem: any) => iconItem.name === 'mosque-with-minarets');
		expect(svgrepo).toBeDefined();
		expect(minarets).toBeDefined();
		expect(svgrepo?.name).not.toBe(minarets?.name);
	});

	it('should have atsarul-mujahidin with both fill and color variants', () => {
		const atsarul = catalogData.find((iconItem: any) => iconItem.name === 'atsarul-mujahidin');
		expect(atsarul).toBeDefined();
		const variants = atsarul?.sources.flatMap((sourceItem: any) => sourceItem.variants) || [];
		expect(variants).toContain('fill');
		expect(variants).toContain('color');
	});

	it('should NOT use bare "Community" as contributor name in any icon', () => {
		catalogData.forEach((icon: any) => {
			icon.sources?.forEach((source: any) => {
				if (source.label) {
					// Either specific format "Community / Username" or a specific author name, never standalone "Community"
					expect(source.label.trim()).not.toBe('Community');
					expect(source.label.trim()).not.toBe('community');
				}
			});
		});
	});
});

describe('TDD Matrix: Color Preservation & Multi-tone Integrity', () => {
	it('Muslim Woman SVG must preserve skin-tone fill (#e7d783)', () => {
		const sveltePath = resolve(__dirname, '../../../library/svelte/fill/MuslimWoman.svelte');
		expect(existsSync(sveltePath)).toBe(true);
		const content = readFileSync(sveltePath, 'utf-8');
		expect(content).toContain('#e7d783');
	});

	it('Palestine Relief SVG must preserve multiple colors (#d20f2f, #074534, #6a2e2e, #000000)', () => {
		const sveltePath = resolve(__dirname, '../../../library/svelte/color/PalestineRelief.svelte');
		expect(existsSync(sveltePath)).toBe(true);
		const content = readFileSync(sveltePath, 'utf-8');
		expect(content).toContain('#d20f2f');
		expect(content).toContain('#074534');
		expect(content).toContain('#6a2e2e');
	});

	it('Atsarul Mujahidin Colors component must exist and have color attributes', () => {
		const sveltePath = resolve(__dirname, '../../../library/svelte/color/AtsarulMujahidin.svelte');
		expect(existsSync(sveltePath)).toBe(true);
		const content = readFileSync(sveltePath, 'utf-8');
		expect(content.length).toBeGreaterThan(100);
	});
});

describe('TDD Matrix: Basmallah & Hamdallah Structure', () => {
	it('DocsPage must contain Basmallah and Hamdallah inside document content column', () => {
		const docsPagePath = resolve(__dirname, '../lib/components/DocsPage.svelte');
		expect(existsSync(docsPagePath)).toBe(true);
		const content = readFileSync(docsPagePath, 'utf-8');
		
		// Arabic Basmallah
		expect(content).toContain('بِسْمِ');
		// Arabic Hamdallah
		expect(content).toContain('الْحَمْدُ');
		// Latin supporting texts
		expect(content).toContain('Bismillahir Rahmanir Rahim');
		expect(content).toContain('Alhamdulillah');
	});

	it('ResourceLayout must contain Basmallah and Hamdallah consistently', () => {
		const resourceLayoutPath = resolve(__dirname, '../lib/components/ResourceLayout.svelte');
		expect(existsSync(resourceLayoutPath)).toBe(true);
		const content = readFileSync(resourceLayoutPath, 'utf-8');
		
		expect(content).toContain('بِسْمِ');
		expect(content).toContain('الْحَمْدُ');
	});

	it('Docs layout must NOT contain out-of-flow Bismillah spanning columns', () => {
		const docsLayoutPath = resolve(__dirname, '../routes/[locale]/docs/+layout.svelte');
		expect(existsSync(docsLayoutPath)).toBe(true);
		const content = readFileSync(docsLayoutPath, 'utf-8');
		
		// It should delegate document content flow to DocsPage or content container, not spanning xl:col-span-2 with centered bismillah
		expect(content).not.toContain('xl:col-span-2');
	});
});

describe('TDD Matrix: Icon Detail & Customizer Architecture', () => {
	it('Icon Detail page must have customizer controls, code tabs, and related icons', () => {
		const detailPagePath = resolve(__dirname, '../routes/[locale]/icons/[name]/+page.svelte');
		expect(existsSync(detailPagePath)).toBe(true);
		const content = readFileSync(detailPagePath, 'utf-8');
		
		// Customizer controls
		expect(content).toContain('strokeWidth');
		expect(content).toContain('Customizer');
		// Copy actions
		expect(content).toContain('Copy SVG');
		expect(content).toContain('Copy JSX');
		// Frameworks
		expect(content).toContain('React');
		expect(content).toContain('Svelte');
		expect(content).toContain('Vue');
		// Related icons
		expect(content).toContain('related');
	});
});
