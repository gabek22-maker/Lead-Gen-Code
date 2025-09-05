# South Surrey Buyer Access • Macdonald Realty Ltd. (No-plugin build)

This variant removes `@vitejs/plugin-react` to avoid missing-dependency build errors.
React compiles via Vite's esbuild automatic JSX runtime—no plugin required.

## Quick start

```bash
npm install
npm run dev
```

## Build & deploy

```bash
npm run build
```
Output is in `dist/` for Netlify/Vercel.

## Environment variable (optional)

Set `VITE_FORM_ENDPOINT` on your host to control the POST URL. Otherwise the demo endpoint in `src/App.jsx` is used.
