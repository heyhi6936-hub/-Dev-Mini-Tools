import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  
  return {
    plugins: [react()],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
        'react-router-dom': path.resolve(__dirname, 'node_modules/react-router-dom/dist/index.mjs')
      }
    },
    build: {
      outDir: 'dist',
      emptyOutDir: true,
    },
    ssr: {
      noExternal: ['react-helmet-async', 'react-router-dom', 'react-router'],
      resolve: {
        conditions: ['import', 'module', 'node', 'default'],
        externalConditions: ['import', 'module', 'node', 'default']
      }
    }
  };
});
