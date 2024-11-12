import { defineConfig } from 'vite';

export default defineConfig({
    base: '/',  // Cambiado de '/all-in-7-days/' a '/'
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        sourcemap: true,
        rollupOptions: {
            output: {
                manualChunks: undefined
            }
        }
    },
    server: {
        port: 3000,
        host: true
    }
});