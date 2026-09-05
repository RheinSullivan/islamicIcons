import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

describe('Page Title Metadata', () => {
	const expectedPattern = /• 🇵🇸 Atsarul Mujahidin 🇸🇩/;

	function readPageTitle(filePath: string): string {
		try {
			const content = readFileSync(filePath, 'utf-8');
			const titleMatch = content.match(/<title[^>]*>([^<]+)<\/title>/);
			return titleMatch ? titleMatch[1] : '';
		} catch (e) {
			return '';
		}
	}

	it('homepage should have correct title pattern', () => {
		const title = readPageTitle(resolve(__dirname, '../routes/[locale]/+page.svelte'));
		expect(title).toContain('🇵🇸');
		expect(title).toContain('Atsarul Mujahidin');
		expect(title).toContain('🇸🇩');
	});

	it('docs page should have "Documentation • 🇵🇸 Atsarul Mujahidin 🇸🇩"', () => {
		const title = readPageTitle(resolve(__dirname, '../routes/[locale]/docs/+page.svelte'));
		expect(title).toMatch(/Documentation.*🇵🇸.*Atsarul Mujahidin.*🇸🇩/);
	});

	it('icons page should have "List Icons • 🇵🇸 Atsarul Mujahidin 🇸🇩"', () => {
		const title = readPageTitle(resolve(__dirname, '../routes/[locale]/icons/+page.svelte'));
		expect(title).toMatch(/List Icons.*🇵🇸.*Atsarul Mujahidin.*🇸🇩/);
	});

	it('license page should have "License • 🇵🇸 Atsarul Mujahidin 🇸🇩"', () => {
		const title = readPageTitle(resolve(__dirname, '../routes/[locale]/license/+page.svelte'));
		expect(title).toMatch(/License.*🇵🇸.*Atsarul Mujahidin.*🇸🇩/);
	});

	it('packages page should have "Packages • 🇵🇸 Atsarul Mujahidin 🇸🇩"', () => {
		const title = readPageTitle(resolve(__dirname, '../routes/[locale]/packages/+page.svelte'));
		expect(title).toMatch(/Packages.*🇵🇸.*Atsarul Mujahidin.*🇸🇩/);
	});
});
