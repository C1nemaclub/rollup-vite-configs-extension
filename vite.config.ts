import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import webExtension from 'vite-plugin-web-extension';

export default defineConfig({
  plugins: [
    react(),
    webExtension({
      manifest: 'src/manifest.json',
      disableAutoLaunch: true,
    }),
  ],
  base: './',
  esbuild: {
    jsxInject: `if (import.meta.hot) {
                import.meta.hot.invalidate();
              }
                `,
  },
});
