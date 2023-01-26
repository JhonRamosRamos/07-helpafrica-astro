import { defineConfig } from 'astro/config';

// astro integrations imports
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import compress from "astro-compress";


export default defineConfig({
	// site: 'https://helpafrica.netlify.app',
	integrations: [
		mdx(),
		sitemap(),
		tailwind( {
			config: {
				applyBaseStyles: true,
				path: './tailwind.config.cjs'
			}
		} ),
		compress( {
			css: true,
			html: true,
			js: true,
			svg: true,
			img: true,
			pipeline: {
				fulfilled: true,
				accomplished: true,
			}
		})
	],
	outDir: 'dist/',
	output: 'server',
	server: {
		port: 4200,
	}
});
