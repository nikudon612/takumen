import type { LayoutServerLoad } from './$types';
import { client } from '$lib/sanity/client';
import { navigationQuery, footerQuery } from '$lib/sanity/queries';

export const load: LayoutServerLoad = async (event) => {
	const { preview } = event.locals;

	const [navigation, footer] = await Promise.all([
		client.fetch(navigationQuery),
		client.fetch(footerQuery)
	]);

	return {
		preview,
		navigation,
		footer
	};
};
