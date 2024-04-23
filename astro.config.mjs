import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  integrations: [tailwind(), react()],
  output: "dist", // Directorio de salida para Vercel
  adapter: vercel()
});
