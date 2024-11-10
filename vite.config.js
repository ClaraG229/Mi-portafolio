import { defineConfig } from 'vite';
import purgecss from 'vite-plugin-purgecss';

export default defineConfig({
    plugins: [
        purgecss({
            content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
        }),
    ],
});
