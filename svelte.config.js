// svelte.config.js
import adapter from '@sveltejs/adapter-static';
import path from 'path';

export default {
  kit: {
    // other configurations...
    adapter: adapter(),
  },
  vite: {
    resolve: {
      alias: {
        $routes: path.resolve('src/routes'),
      },
    },
  },
};
