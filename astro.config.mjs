import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://yourdomain.com', // update when domain is set
  integrations: [tailwind()],
});
