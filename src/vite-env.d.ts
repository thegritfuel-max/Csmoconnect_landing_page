/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APK_LINK: string;
  readonly VITE_COURSE_LINK: string;
  readonly GEMINI_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
