# South Surrey Buyer Access • Macdonald Realty Ltd.

A ready-to-deploy React + Vite + Tailwind landing page for South Surrey buyer lead generation.

## Quick start

```bash
npm install
npm run dev
```

## Build & deploy

```bash
npm run build
```
This creates a `dist/` folder suitable for Netlify/Vercel static hosting.

- **Vercel:** New Project → Import → set Framework to `Vite` → deploy.
- **Netlify:** Drag the `dist/` folder or connect repo. Build command: `npm run build`, Publish directory: `dist`.

## Form endpoint

The form currently POSTs to `https://httpbin.org/post` for demo.
Replace the URL in `src/App.jsx` with your webhook/CRM endpoint (e.g., Zapier, Make, Follow Up Boss, HubSpot, Mailchimp).
