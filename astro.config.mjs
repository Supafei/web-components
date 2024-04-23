import { defineConfig } from 'astro/config';
import alpine from '@astrojs/alpinejs';
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  integrations: [alpine(),tailwind()],
});

