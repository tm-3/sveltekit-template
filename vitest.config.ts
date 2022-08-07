import { configDefaults, defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
	plugins: [svelte({ hot: !process.env.VITEST })],
	test: {
		globals: true,
		environment: 'jsdom',
		exclude: [...configDefaults.exclude, '/tests'],
		coverage: {
			reporter: ['text', 'json', 'html'],
			reportsDirectory: './.coverage'
		}
	}
});
