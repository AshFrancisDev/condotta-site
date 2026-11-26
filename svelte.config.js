import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
export default {
	preprocess: vitePreprocess(),
	kit: {
		// adapter-static turns every page into plain .html files at build time,
		// so you can host the result anywhere (Netlify, GitHub Pages, any web server).
		adapter: adapter({ fallback: '404.html' }),
		// The site is served from the root of condotta.app, so no path prefix is needed.
		// (If you ever serve it from a subpath like user.github.io/repo/, set base to '/repo'.)
		paths: {
			base: ''
		}
	}
};
