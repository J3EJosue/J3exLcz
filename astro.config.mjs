import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";
import cloudflare from "@astrojs/cloudflare/pages";

const platform = process.env.DEPLOY_PLATFORM || 'vercel';

export default defineConfig({
  integrations: [tailwind(), react()],
  output: "dist", // Directorio de salida para Cloudflare Pages
  adapter: platform === 'vercel' ? vercel() : cloudflare()
});
