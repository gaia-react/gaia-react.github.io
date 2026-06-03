import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';
import path from 'node:path';

export default defineConfig({
  base: '/',
  build: {
    rollupOptions: {
      input: {
        about: path.resolve(import.meta.dirname, 'about/index.html'),
        changelog: path.resolve(import.meta.dirname, 'changelog/index.html'),
        consulting: path.resolve(import.meta.dirname, 'consulting/index.html'),
        features: path.resolve(import.meta.dirname, 'features/index.html'),
        getStarted: path.resolve(import.meta.dirname, 'get-started/index.html'),
        main: path.resolve(import.meta.dirname, 'index.html'),
        mentorship: path.resolve(import.meta.dirname, 'mentorship/index.html'),
        sponsors: path.resolve(import.meta.dirname, 'sponsors/index.html'),
        why: path.resolve(import.meta.dirname, 'why/index.html'),
      },
    },
  },
  plugins: [react(), tailwindcss()],
  preview: {port: 6415},
  resolve: {alias: {'@': '/src'}},
  server: {port: 6414},
});
