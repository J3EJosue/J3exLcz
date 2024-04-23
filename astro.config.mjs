import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import cloudflare from "@astrojs/cloudflare/pages";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: "dist", // Directorio de salida para Cloudflare Pages
  adapter: cloudflare()
});
