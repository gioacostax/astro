/**
 * This file can be used to define Robots.txt configuration,
 * more info in https://developers.google.com/search/docs/crawling-indexing/robots/intro
 */

import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) =>
  new Response(
    `User-agent: *
Allow: ${import.meta.env.BASE_URL}

Sitemap: ${new URL(`${import.meta.env.BASE_URL}/sitemap-index.xml`, site)}
`,
  );
