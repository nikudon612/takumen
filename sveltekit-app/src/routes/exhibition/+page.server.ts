// src/routes/exhibition/+page.server.ts
import { currentExhibitionQuery } from '$lib/sanity/queries';
import { client } from '$lib/sanity/client';
import type { PageServerLoad } from './$types';

export async function load() {
  const exhibition = await client.fetch(currentExhibitionQuery);
  return { exhibition };
}
