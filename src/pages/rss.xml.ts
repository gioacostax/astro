import type { APIRoute } from 'astro';

import rss from '@astrojs/rss';

import { DESCRIPTION, TITLE } from '@/config';

export const GET: APIRoute = async (context) => {
  return rss({
    customData: `<language>es-CO</language>`,
    description: DESCRIPTION,
    items: [],
    site: context.site!,
    title: TITLE,
  });
};
