import adapter from '@sveltejs/adapter-static';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({ fallback: 'index.html', strict: false }),
		paths: {
			base: dev ? '' : '/ActividadGithub_CICD'
		},
		prerender: {
			entries: []
		}
	}
};

export default config;
