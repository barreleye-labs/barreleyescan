import react from '@vitejs/plugin-react-swc';

import { defineConfig, loadEnv } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default ({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd()));

  return defineConfig({
    plugins: [react(), tsconfigPaths()],
    server: {
      hmr: {
        overlay: false
      },
      proxy: {
        '/api': {
          target: process.env.VITE_API_SERVER_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
          secure: false,
          ws: true
        }
      }
    }
  });
};
