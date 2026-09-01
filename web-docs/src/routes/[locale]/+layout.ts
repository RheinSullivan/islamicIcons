import { error } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = ({ params }) => {
	const { locale } = params;
	if (locale !== 'en' && locale !== 'id') {
		error(404, 'Locale not found');
	}
	return { locale: locale as 'en' | 'id' };
};
