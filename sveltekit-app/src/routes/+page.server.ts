import { homeQuery, type Home } from '$lib/sanity/queries';
import { client } from '$lib/sanity/client';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const home = await client.fetch<Home>(homeQuery);
	return { home };
};
