import type { PageServerLoad } from './$types';
import { client } from '$lib/sanity/client';
import { takuParlorQuery, type TakuParlor } from '$lib/sanity/queries';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
  try {
    const takuParlor = await client.fetch<TakuParlor>(takuParlorQuery);

    // Optional: guard if nothing is published yet
    if (!takuParlor) {
      return { takuParlor: null };
    }

    return { takuParlor };
  } catch (e) {
    console.error('Failed to fetch Taku Parlor page:', e);
    throw error(500, 'Failed to load content');
  }
};
