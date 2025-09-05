import { defineConfig } from 'vite'

// Build React without the plugin using esbuild's automatic JSX runtime.
export default defineConfig({
  esbuild: {
    jsx: 'automatic',
    jsxImportSource: 'react',
  },
})
