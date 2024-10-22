/**
 * This file can be used to define Astro configuration,
 * more info in https://astro.build/config
 */

import icon from 'astro-icon';
import { defineConfig } from 'astro/config';

import sharedConfig from './shared/config/astro/astro.config.js';
import sharedPreactConfig from './shared/config/astro/preact.astro.config.js';
import httpsViteConfig from './shared/config/vite/https.vite.config.js';

/**
 * Astro config dependencies
 * - astro
 */
export default defineConfig({
  ...sharedConfig,
  ...sharedPreactConfig,
  integrations: [
    ...sharedConfig.integrations,
    ...sharedPreactConfig.integrations,
    icon({
      iconDir: 'node_modules/remixicon/icons',
    }),
  ],
  site: 'http://localhost:4321',
  vite: {
    ...sharedConfig.vite,
    ...sharedPreactConfig.vite,
    plugins: [...sharedConfig.vite.plugins, ...sharedPreactConfig.vite.plugins],
    server: {
      ...sharedConfig.server,
      ...sharedPreactConfig.server,
      ...httpsViteConfig('local.host'),
    },
  },
});
