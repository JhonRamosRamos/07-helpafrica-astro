import { defineConfig } from 'astro/config';

// astro integrations imports
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';


export default defineConfig({
	site: 'https://helpafrica.netlify.app',
	integrations: [
		mdx( {
			shikiConfig: {
				theme: 'dracula',
				wrap: true,
			}
		} ),
		sitemap()],
	outDir: 'dist/',
	output: 'server',
	server: {
		port: 4200,
	}
});
