import type { LayoutLoad } from './$types';

export const load: LayoutLoad = ({ parent }) => {
	return parent();
};
