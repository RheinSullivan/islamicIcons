import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { icon } from '$lib/site';

/**
 * GET /api/icons/:name - Get specific icon details
 */

export const GET: RequestHandler = async ({ params }) => {
	const iconData = icon(params.name);

	if (!iconData) {
		return json(
			{
				success: false,
				error: 'Icon not found',
				message: `No icon found with name: ${params.name}`
			},
			{ status: 404 }
		);
	}

	// Transform to API-friendly format
	const apiIcon = {
		name: iconData.name,
		title: iconData.title,
		category: iconData.category,
		aliases: iconData.aliases || [],
		sources: iconData.sources.map(s => ({
			id: s.id,
			label: s.label,
			variants: s.variants || [],
			license: s.license,
			author: s.author,
			url: s.url,
			paths: Object.fromEntries(
				(s.variants || []).map(v => [
					v,
					`/assets/icons/${iconData.category}/${iconData.name}/${v}.${s.paths?.[v]?.endsWith('.webp') ? 'webp' : 'svg'}`
				])
			)
		}))
	};

	return json({
		success: true,
		data: apiIcon,
		meta: {
			timestamp: new Date().toISOString(),
			version: '0.1.0'
		}
	});
};
