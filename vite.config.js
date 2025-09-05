import { defineConfig } from 'vite'

// Try to load the React plugin if it’s installed.
// This keeps builds from failing if the dependency wasn’t fetched yet.
let react = null
try {
  // top-level await is supported in Node 18+ (Vercel uses this)
  const mod = await import('@vitejs/plugin-react')
  react = mod.default()
} catch (e) {
  // falls back to no plugin (still builds basic React)
  console.warn('[@vitejs/plugin-react] not found – continuing without it.')
}

export default defineConfig({
  plugins: react ? [react] : [],
})
