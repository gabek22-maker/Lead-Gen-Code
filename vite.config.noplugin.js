import { defineConfig } from 'vite'

// Build React without @vitejs/plugin-react using esbuild's automatic JSX runtime.
export default defineConfig({
  esbuild: {
    jsx: 'automatic',
    jsxImportSource: 'react',
  },
})
