import { defineConfig } from 'vite';

export default defineConfig({
    base: '/all-in-7-days/', // Nombre de tu repositorio
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        sourcemap: true
    }
});