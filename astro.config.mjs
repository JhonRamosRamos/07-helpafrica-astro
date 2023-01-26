import { defineConfig } from 'astro/config';

// astro integrations imports
import image from "@astrojs/image";
import mdx from '@astrojs/mdx';
import react from "@astrojs/react";
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';



export default defineConfig({
  site: 'https://helpafrica.netlify.app',
  integrations: [
    mdx(),
    sitemap(),
    tailwind({
    config: {
      applyBaseStyles: true,
      path: './tailwind.config.cjs'
    }
    }),
    react(),
    image( {
      logLevel: 'info',

    } ),
  ],

});