import { menuQuery, type Menu } from '$lib/sanity/queries';
import { client } from '$lib/sanity/client';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    const menu = await client.fetch<Menu>(menuQuery);
    return { menu };
};
