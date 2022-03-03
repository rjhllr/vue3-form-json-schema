import {defineConfig} from 'vite';
import * as path from 'path';
import visualizer from 'rollup-plugin-visualizer';

export default defineConfig({
  server: {
    fs: {
      strict: true,
    }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'vue3-form-json-schema',
      // formats: ['es'],  /* default es+umd -> UMD has no code-splitting ! */
      fileName: (format) => `vue3-form-json-schema.${format}.js`
    },
    rollupOptions: {
      external: ['vue', 'lodash-es', 'ajv'],
      output: {
        globals: {
          vue: 'Vue',
          'lodash-es': 'LodashEs',
          ajv: 'Ajv'
        },
        exports: 'named'
      },
      plugins: [
        visualizer({
          filename: path.resolve(__dirname, 'dist/stats.html'),
          template: 'treemap' // sunburst|treemap|network
        })
      ]
    }
  },
  esbuild: {
    minify: true
  }
})
