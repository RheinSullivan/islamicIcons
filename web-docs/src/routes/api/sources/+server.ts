import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { icons } from '$lib/site';

/**
 * GET /api/sources - Get all icon sources with counts
 */

export const GET: RequestHandler = async () => {
	// Count icons per source
	const sourceCounts: Record<string, { label: string; count: number }> = {};

	icons.forEach(icon => {
		icon.sources.forEach(source => {
			if (!sourceCounts[source.id]) {
				sourceCounts[source.id] = {
					label: source.label,
					count: 0
				};
			}
			sourceCounts[source.id].count++;
		});
	});

	const sourcesData = Object.entries(sourceCounts).map(([id, data]) => ({
		id,
		label: data.label,
		count: data.count
	}));

	return json({
		success: true,
		data: sourcesData,
		total: sourcesData.length,
		meta: {
			timestamp: new Date().toISOString(),
			version: '0.1.0'
		}
	});
};
