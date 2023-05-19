/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly BASE_API: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
