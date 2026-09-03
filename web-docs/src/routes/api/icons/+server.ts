import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { icons, categories } from '$lib/site';

/**
 * Islamic Icons REST API
 * 
 * GET /api/icons - Get all icons
 * GET /api/icons?category=mosque - Filter by category
 * GET /api/icons?search=kaaba - Search icons
 * GET /api/icons?variant=fill - Filter by variant
 */

export const GET: RequestHandler = async ({ url }) => {
	const searchParams = url.searchParams;
	let filteredIcons = [...icons];

	// Filter by category
	const category = searchParams.get('category');
	if (category && category !== 'all') {
		filteredIcons = filteredIcons.filter(icon => icon.category === category);
	}

	// Filter by source
	const source = searchParams.get('source');
	if (source && source !== 'all') {
		filteredIcons = filteredIcons.filter(icon =>
			icon.sources.some(s => s.id === source)
		);
	}

	// Search by name/title/aliases
	const search = searchParams.get('search');
	if (search) {
		const searchLower = search.toLowerCase();
		filteredIcons = filteredIcons.filter(icon => {
			const text = `${icon.name} ${icon.title} ${icon.category} ${(icon.aliases || []).join(' ')}`;
			return text.toLowerCase().includes(searchLower);
		});
	}

	// Filter by variant availability
	const variant = searchParams.get('variant');
	if (variant) {
		filteredIcons = filteredIcons.filter(icon =>
			icon.sources.some(source =>
				source.variants && source.variants.includes(variant)
			)
		);
	}

	// Pagination
	const page = parseInt(searchParams.get('page') || '1');
	const limit = parseInt(searchParams.get('limit') || '50');
	const startIndex = (page - 1) * limit;
	const endIndex = startIndex + limit;
	const paginatedIcons = filteredIcons.slice(startIndex, endIndex);

	// Transform to API-friendly format
	const apiIcons = paginatedIcons.map(icon => ({
		name: icon.name,
		title: icon.title,
		category: icon.category,
		aliases: icon.aliases || [],
		sources: icon.sources.map(s => ({
			id: s.id,
			label: s.label,
			variants: s.variants || [],
			license: s.license,
			author: s.author,
			url: s.url
		}))
	}));

	return json({
		success: true,
		data: apiIcons,
		pagination: {
			page,
			limit,
			total: filteredIcons.length,
			totalPages: Math.ceil(filteredIcons.length / limit),
			hasNext: endIndex < filteredIcons.length,
			hasPrev: page > 1
		},
		meta: {
			timestamp: new Date().toISOString(),
			version: '0.1.0'
		}
	});
};
