import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: 'https://yourdomain.com',
  integrations: [tailwind({ applyBaseStyles: false })],
  vite: {
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@layouts':    path.resolve(__dirname, 'src/layouts'),
        '@styles':     path.resolve(__dirname, 'src/styles'),
      },
    },
  },
});
