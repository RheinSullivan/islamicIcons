import { describe, it, expect } from 'vitest';
import catalogData from '../../../library/assets/catalog.json';

describe('Variant Filter Logic', () => {
	// Simulate the filter logic from icons/+page.svelte
	function filterIconsByVariant(variant: 'fill' | 'outline' | 'color') {
		return catalogData.filter((icon: any) => {
			const itemSource = icon.sources?.[0];
			const availableVariants = itemSource?.variants || [];
			return availableVariants.includes(variant);
		});
	}

	it('should filter to show only fill icons when Fill is selected', () => {
		const fillIcons = filterIconsByVariant('fill');
		
		expect(fillIcons.length).toBeGreaterThan(0);
		
		// Verify all returned icons actually have 'fill' variant
		fillIcons.forEach((icon: any) => {
			const variants = icon.sources[0]?.variants || [];
			expect(variants).toContain('fill');
		});
	});

	it('should filter to show only outline icons when Outline is selected', () => {
		const outlineIcons = filterIconsByVariant('outline');
		
		expect(outlineIcons.length).toBeGreaterThan(0);
		
		// Verify all returned icons actually have 'outline' variant
		outlineIcons.forEach((icon: any) => {
			const variants = icon.sources[0]?.variants || [];
			expect(variants).toContain('outline');
		});
	});

	it('should filter to show only color icons when Colors is selected', () => {
		const colorIcons = filterIconsByVariant('color');
		
		expect(colorIcons.length).toBeGreaterThan(0);
		
		// Verify all returned icons actually have 'color' variant
		colorIcons.forEach((icon: any) => {
			const variants = icon.sources[0]?.variants || [];
			expect(variants).toContain('color');
		});
	});

	it('should not show color icons when Fill filter is active', () => {
		const fillIcons = filterIconsByVariant('fill');
		
		// Find icons that ONLY have color (not fill)
		const colorOnlyIcons = catalogData.filter((icon: any) => {
			const variants = icon.sources[0]?.variants || [];
			return variants.includes('color') && !variants.includes('fill');
		});
		
		// These color-only icons should NOT appear in fill results
		colorOnlyIcons.forEach((colorIcon: any) => {
			const isInFillResults = fillIcons.some((icon: any) => icon.name === colorIcon.name);
			expect(isInFillResults).toBe(false);
		});
	});

	it('should include atsarul-mujahidin in both Fill and Colors filters', () => {
		const fillIcons = filterIconsByVariant('fill');
		const colorIcons = filterIconsByVariant('color');
		
		const inFill = fillIcons.some((icon: any) => icon.name === 'atsarul-mujahidin');
		const inColor = colorIcons.some((icon: any) => icon.name === 'atsarul-mujahidin');
		
		expect(inFill).toBe(true);
		expect(inColor).toBe(true);
	});

	it('should include palestine-relief in Colors filter but not Fill', () => {
		const fillIcons = filterIconsByVariant('fill');
		const colorIcons = filterIconsByVariant('color');
		
		const inFill = fillIcons.some((icon: any) => icon.name === 'palestine-relief');
		const inColor = colorIcons.some((icon: any) => icon.name === 'palestine-relief');
		
		expect(inFill).toBe(false);
		expect(inColor).toBe(true);
	});
});
