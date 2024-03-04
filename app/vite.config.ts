import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 2000,
    open: true,
  },
  build: {
    outDir: 'dist',
    minify: true,
    manifest: false,
  },
});
