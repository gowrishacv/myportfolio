/// <reference types="vite/client" />

// Some environments (or editor language servers) may fail to resolve Vite's
// client types; declare the bits we rely on so `import.meta.env.BASE_URL`
// stays type-safe.
interface ImportMetaEnv {
  readonly BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
