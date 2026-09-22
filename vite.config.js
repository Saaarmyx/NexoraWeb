import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

const fontSet = process.env.VITE_FONT_SET || 'pro'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const activeFontSet = env.VITE_FONT_SET || 'pro'

  return {
    plugins: [react()],
    define: {
      'import.meta.env.VITE_FONT_SET': JSON.stringify(activeFontSet),
    },
    build: {
      manifest: true,
    },
    configureServer: {
      port: 5199,
    },
  }
})
