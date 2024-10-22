/* eslint-disable @typescript-eslint/triple-slash-reference */
/**
 * This file can be used to define Global Typescript types
 */

/// <reference types="astro/client" />
/// <reference types="vitest/globals" />
/// <reference path="shared/config/global" />
/// <reference path=".astro/types.d.ts" />

interface ImportMetaEnv {
  readonly GITHUB_WORKFLOW_SHA: string;
  readonly PUBLIC_APP_CONTACT_EMAIL: string;
  readonly PUBLIC_APP_NAME: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
