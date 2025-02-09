import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'robots.txt',
          dest: ''
        }
      ]
    })
  ],
  server: {
    host: '0.0.0.0',
    port: 5174,
    strictPort: true
  },
  preview: {
    host: '0.0.0.0',
    port: 5174,
    strictPort: true,
    allowedHosts: ['crossfitobernai.com', 'www.crossfitobernai.com']
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
});