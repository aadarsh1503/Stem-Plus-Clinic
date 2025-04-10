import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // 👈 change output directory from dist to build
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
