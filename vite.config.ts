import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { checker } from 'vite-plugin-checker';

// https://vitejs.dev/config/
// noinspection JSUnusedGlobalSymbols
export default defineConfig({
  server: {
    open: true,
  },
  plugins: [
    react(),
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
      },
    }),
  ],
  resolve: {
    alias: {
      '~/': `${__dirname}/src/`, // path.join(__dirname, "src/") でも可
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
});
