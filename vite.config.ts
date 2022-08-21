import tsconfigPaths from 'vite-tsconfig-paths'
import reactPlugin from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [tsconfigPaths(), reactPlugin()],
  define: {
    APP_NAME: JSON.stringify(process.env.npm_package_name),
    APP_VERSION: JSON.stringify(process.env.npm_package_version)
  },
  server: {
    port: 4444
  }
})
