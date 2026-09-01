import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	compilerOptions: {
		// Force runes mode for the project. Can be removed in svelte 6.
		runes: true
	},

	kit: {
		adapter: adapter(),
		alias: {
			$lib: './src/lib'
		}
	}
};

export default config;
