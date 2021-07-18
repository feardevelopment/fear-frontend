import staticAdapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// options passed to svelte.compile (https://svelte.dev/docs#svelte_compile)
	compilerOptions: null,

	// an array of file extensions that should be treated as Svelte components
	extensions: ['.svelte'],

	kit: {
		adapter: staticAdapter(),
		amp: false,
		appDir: '_app',
		files: {
			assets: 'static',
			hooks: 'src/hooks',
			lib: 'src/lib',
			routes: 'src/routes',
			serviceWorker: 'src/service-worker',
			template: 'src/app.html'
		},
		floc: false,
		hydrate: true,
		package: {
			dir: 'package',
			emitTypes: true,
			exports: {
				include: ['**'],
				exclude: ['_*', '**/_*']
			},
			files: {
				include: ['**'],
				exclude: []
			}
		},
		paths: {
			assets: '',
			base: ''
		},
		prerender: {
			crawl: true,
			enabled: true,
			force: false,
			pages: ['*']
		},
		router: true,
		serviceWorker: {
			exclude: []
		},
		ssr: true,
		trailingSlash: 'never',
		vite: () => ({})
	},

	// options passed to svelte.preprocess (https://svelte.dev/docs#svelte_preprocess)
	preprocess: sveltePreprocess()
};

export default config;