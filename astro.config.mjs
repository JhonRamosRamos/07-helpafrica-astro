import { defineConfig } from 'astro/config';

// astro integrations imports
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import compress from "astro-compress";
import react from "@astrojs/react";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: 'https://helpafrica.netlify.app',
  integrations: [mdx(), sitemap(), tailwind({
    config: {
      applyBaseStyles: true,
      path: './tailwind.config.cjs'
    }
  }), compress({
    css: true,
    html: true,
    js: true,
    svg: true,
    img: true,
    pipeline: {
      fulfilled: true,
      accomplished: true
    }
  }), react(), image()],
  outDir: 'dist/',
  output: 'server',
  adapter: node()
});