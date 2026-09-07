import { error, redirect } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';
import type { Locale } from '$lib/i18n';
import { locales } from '$lib/i18n';

export const load: LayoutLoad = ({ params, url }) => {
	const { locale } = params;
	if (locale === 'ab') {
		const targetUrl = url.pathname.replace('/ab', '/ar');
		redirect(307, targetUrl);
	}
	if (!locales.includes(locale as Locale)) {
		error(404, 'Locale not found');
	}
	return { locale: locale as Locale };
};

