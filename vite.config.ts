import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.mp4'],
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
        svgoConfig: {
          floatPrecision: 2,
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: {
                  removeViewBox: false,
                },
              },
            },
          ],
        },
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      '@/components': `${path.resolve(__dirname, './src/components/')}`,
      data: `${path.resolve(__dirname, './src/shared/data/')}`,
      video: `${path.resolve(__dirname, './src/shared/assets/video/')}`,
      svg: `${path.resolve(__dirname, './src/shared/assets/svg/')}`,
      images: `${path.resolve(__dirname, './src/shared/assets/images/')}`,
    },
  },
});
