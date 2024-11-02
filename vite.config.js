import { defineConfig } from 'vite';
import purgeCSSPlugin from 'vite-plugin-purgecss';

export default defineConfig({
    plugins: [
        purgeCSSPlugin({
            content: ['./index.html', './src/**/*.js', './src/**/*.vue'],
        })
    ]
});