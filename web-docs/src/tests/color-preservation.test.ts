import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

describe('Color Preservation in SVG Components', () => {
	it('palestine-relief color variant should preserve red/white/black/green colors', () => {
		// Read the generated color variant component
		const componentPath = resolve(__dirname, '../../../library/svelte/color/PalestineRelief.svelte');
		
		try {
			const content = readFileSync(componentPath, 'utf-8');
			
			// Palestine flag has specific colors:
			// Red: #d20f2f or similar
			// White: #ffffff or #fff
			// Black: #000000 or #000
			// Green: green color
			
			// Should NOT have all colors replaced with currentColor
			const hasRedColor = content.includes('#d20f2f') || content.includes('rgb(210, 15, 47)');
			const hasWhiteColor = content.includes('#ffffff') || content.includes('#fff') || content.includes('white');
			const hasBlackColor = content.includes('#000000') || content.includes('#000') || content.includes('black');
			
			// At least some original colors should be preserved
			const preservesColors = hasRedColor || (hasWhiteColor && hasBlackColor);
			expect(preservesColors).toBe(true);
			
			// Should NOT have ALL fills replaced with currentColor (that would break multicolor)
			const allCurrentColor = !content.includes('#') && content.split('currentColor').length > 5;
			expect(allCurrentColor).toBe(false);
		} catch (e) {
			// If file doesn't exist, that's also a problem
			expect(e).toBeUndefined();
		}
	});

	it('muslim-woman fill variant should not force all colors to white', () => {
		const componentPath = resolve(__dirname, '../../../library/svelte/fill/MuslimWoman.svelte');
		
		try {
			const content = readFileSync(componentPath, 'utf-8');
			
			// Should not have explicit fill="white" or fill="#fff" on all elements
			// This is a fill icon, so it should use currentColor, but not hardcoded white
			const hasHardcodedWhite = content.includes('fill="white"') || content.includes('fill="#fff"');
			
			// It's OK to have white in some places, but not if it's forcing skin tone to white
			// Check that it's not ALL white
			if (hasHardcodedWhite) {
				const whiteCount = (content.match(/fill="white"/g) || []).length + 
				                  (content.match(/fill="#fff"/g) || []).length;
				const totalFills = (content.match(/fill=/g) || []).length;
				
				// If more than 80% of fills are hardcoded white, that's suspicious
				expect(whiteCount / totalFills).toBeLessThan(0.8);
			}
		} catch (e) {
			expect(e).toBeUndefined();
		}
	});

	it('atsarul-mujahidin color variant component should exist', () => {
		const componentPath = resolve(__dirname, '../../../library/svelte/color/AtsarulMujahidin.svelte');
		
		try {
			const content = readFileSync(componentPath, 'utf-8');
			expect(content).toBeDefined();
			expect(content.length).toBeGreaterThan(0);
			
			// Should preserve original colors (not all currentColor)
			const hasColors = content.includes('#') || content.includes('rgb');
			expect(hasColors).toBe(true);
		} catch (e) {
			// Component should exist
			throw new Error(`Atsarul Mujahidin color component not found: ${e}`);
		}
	});
});
