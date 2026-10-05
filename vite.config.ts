import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { imagetools } from 'vite-imagetools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // `import photo from './x.jpg?photo'` turns a photo into WebP files in
    // four widths and gives back { src, srcset, w, h } for <img>.
    imagetools({
      defaultDirectives: (url) =>
        url.searchParams.has('photo')
          ? new URLSearchParams({ w: '480;800;1200;1600', format: 'webp', quality: '70', as: 'img' })
          : new URLSearchParams(),
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
})
