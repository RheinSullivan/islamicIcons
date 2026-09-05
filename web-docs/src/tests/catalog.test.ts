import { describe, it, expect } from 'vitest';
import catalogData from '../../../library/assets/catalog.json';

describe('Catalog Data', () => {
	it('should have atsarul-mujahidin icon with both fill and color variants', () => {
		const atsarulIcon = catalogData.find((icon: any) => icon.name === 'atsarul-mujahidin');
		expect(atsarulIcon).toBeDefined();
		expect(atsarulIcon?.sources).toBeDefined();
		
		const variants = atsarulIcon?.sources[0]?.variants || [];
		expect(variants).toContain('fill');
		expect(variants).toContain('color');
	});

	it('should have palestine-relief icon with color variant', () => {
		const palestineIcon = catalogData.find((icon: any) => icon.name === 'palestine-relief');
		expect(palestineIcon).toBeDefined();
		
		const variants = palestineIcon?.sources[0]?.variants || [];
		expect(variants).toContain('color');
	});

	it('should have muslim-woman icon', () => {
		const muslimWomanIcon = catalogData.find((icon: any) => icon.name === 'muslim-woman');
		expect(muslimWomanIcon).toBeDefined();
	});

	it('should have mosque-with-minarets icon', () => {
		const mosqueIcon = catalogData.find((icon: any) => icon.name === 'mosque-with-minarets');
		expect(mosqueIcon).toBeDefined();
	});

	it('should not have stale MosqueSvgrepoCom(1) references', () => {
		const staleIcon = catalogData.find((icon: any) => icon.name.includes('(1)'));
		expect(staleIcon).toBeUndefined();
	});

	it('should have contributor labels showing GitHub username only (after split)', () => {
		// Check that contributor labels have format "Community / Username"
		const iconWithContributor = catalogData.find((icon: any) => 
			icon.sources?.some((s: any) => s.label?.includes('Community /'))
		);
		
		if (iconWithContributor) {
			const label = iconWithContributor.sources[0].label;
			expect(label).toContain('Community /');
			
			// Verify that splitting by ' / ' and taking .pop() gives username
			const username = label.split(' / ').pop();
			expect(username).not.toBe('Community');
			expect(username).not.toBe('');
		}
	});

	it('should not have duplicate identical mosque icons', () => {
		const mosqueIcons = catalogData.filter((icon: any) => 
			icon.name.toLowerCase().includes('mosque')
		);
		
		// This test checks that there are no duplicate names with (1)
		const duplicateNames = mosqueIcons.filter((icon: any) => icon.name.includes('(1)'));
		expect(duplicateNames.length).toBe(0);
	});
});
