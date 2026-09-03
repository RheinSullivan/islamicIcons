import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { icons, categories } from '$lib/site';

/**
 * GET /api/categories - Get all categories with icon counts
 */

export const GET: RequestHandler = async () => {
	const categoriesWithCounts = categories.map(cat => ({
		id: cat,
		name: cat.charAt(0).toUpperCase() + cat.slice(1),
		count: icons.filter(icon => icon.category === cat).length
	}));

	return json({
		success: true,
		data: categoriesWithCounts,
		total: categoriesWithCounts.length,
		meta: {
			timestamp: new Date().toISOString(),
			version: '0.1.0'
		}
	});
};
