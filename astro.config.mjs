import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://adhd.pet',
  compressHTML: true,
  vite: {
    build: {
      minify: 'esbuild',
      cssMinify: 'esbuild',
    },
  },
});
