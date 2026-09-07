import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	// Extract locale from URL path: /en/... or /id/...
	const locale = event.url.pathname.startsWith('/id') ? 'id' : 'en';

	const response = await resolve(event, {
		transformPageChunk: ({ html }) =>
			html.replace('<html lang="en">', `<html lang="${locale}">`)
	});

	return response;
};
