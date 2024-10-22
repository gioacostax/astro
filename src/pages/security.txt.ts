/**
 * This file can be used to define Robots.txt configuration,
 * more info in https://developers.google.com/search/docs/crawling-indexing/robots/intro
 */

import type { APIRoute } from 'astro';

import env from '@/env';

export const GET: APIRoute = ({ site }) =>
  new Response(
    `Contact: mailto:${env.APP_CONTACT_EMAIL}
Expires: ${new Date(new Date().getTime() + 365 * 24 * 60 * 60 * 1000).toISOString()}
Preferred-Languages: es
Canonical: ${new URL(`${env.APP_BASE_PATH}/security.txt`, site)}
`,
  );
