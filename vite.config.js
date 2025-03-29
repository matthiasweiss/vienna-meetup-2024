import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';
import { watch } from 'vite-plugin-watch';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            ssr: 'resources/js/ssr.jsx',
            refresh: true,
        }),
        react(),
        tailwindcss(),
        watch({
            pattern: 'app/{Data,Enums}/**/*.php',
            command: 'composer run transform-types',
        }),
    ],
    esbuild: {
        jsx: 'automatic',
    },
});
