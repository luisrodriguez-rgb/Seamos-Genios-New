import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://seamosgenios.org',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
