// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build:{
    outDir: 'react-dist',
  },
  server: {
    port: 3000,
  },
});