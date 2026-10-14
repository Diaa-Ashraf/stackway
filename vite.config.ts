import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

const rootDir = import.meta.dirname || path.resolve('.');

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(rootDir, './src'),
      'next/link': path.resolve(rootDir, './src/compat/link.tsx'),
      'next/image': path.resolve(rootDir, './src/compat/image.tsx'),
      'next/navigation': path.resolve(rootDir, './src/compat/navigation.ts'),
    },
  },
  server: {
    port: 3000,
    open: false,
  },
  build: {
    chunkSizeWarningLimit: 1000,
  },
});
