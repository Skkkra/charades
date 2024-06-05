/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_LOCAL: string;
  readonly VITE_WEBSOCKET_LOCAL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
