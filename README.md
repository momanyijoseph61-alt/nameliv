# Namelivo

A modern domain registrar and digital-services platform. Phase 1 is a fully functional UI preview — domain search, pricing, cart, checkout, dashboard, and account management all work with demo data. No real payments are processed and no real domains are registered.

## Tech Stack

- **Vite + React 18 + TypeScript** — frontend
- **Tailwind CSS** — styling
- **React Router v7** — client-side routing (SPA)
- **Supabase** — provisioned for future auth and database (not yet connected in Phase 1)
- **Netlify** — deployment target

## Prerequisites

- Node.js 20+
- npm 10+

## 1. Install

```bash
npm install
```

## 2. Run locally

```bash
npm run dev
```

The app starts on `http://localhost:5173`. The dev server reloads on file changes.

To create a local `.env` from the template:

```bash
cp .env.example .env
```

In Phase 1, no environment variables are required — the app uses demo data. Supabase variables are pre-provisioned and already in `.env` for future use.

## 3. Build

```bash
npm run build
```

Output is written to `dist/`. Preview the production build locally:

```bash
npm run preview
```

Type-check (no build output):

```bash
npm run typecheck
```

Lint:

```bash
npm run lint
```

## 4. Deploy to Netlify

### Option A — Git-connected (recommended)

1. Push this repository to GitHub or GitLab.
2. In Netlify, go to **Add new site → Import an existing project**.
3. Select the repository. The build settings are auto-detected from `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Click **Deploy**. Netlify builds and publishes the site.
5. Set environment variables in **Site settings → Environment variables** (see below).

### Option B — Manual deploy

```bash
npm run build
# Install Netlify CLI if needed: npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

### SPA routing

The app uses client-side routing. Two mechanisms ensure direct URLs work on Netlify:

- `public/_redirects` — Netlify's native redirect file (catch-all to `/index.html` with `200`).
- `netlify.toml` — contains the same redirect rule plus security headers.

Both are included for redundancy. You only need one; having both is harmless.

### Netlify Functions (future)

The project is structured to support Netlify Functions for server-side APIs. When a real registrar and payment processor are connected, create functions in a `netlify/functions/` directory. Server-side API keys (registrar, Stripe secret) will live in Netlify environment variables and never reach the browser.

## 5. Environment variables

### Currently used (Phase 1)

| Variable | Where | Purpose |
|---|---|---|
| `VITE_SUPABASE_URL` | browser | Supabase project URL (provisioned, future auth) |
| `VITE_SUPABASE_ANON_KEY` | browser | Supabase anon public key (provisioned, future auth) |

These are already set in `.env` and on Netlify. They are safe to expose — the anon key is designed for browser use and is protected by Row Level Security.

### Needed for registrar integration (Phase 2)

| Variable | Where | Purpose |
|---|---|---|
| `REGISTRAR_API_KEY` | server only (Netlify Functions / Supabase Edge Function) | Registrar API authentication |
| `REGISTRAR_API_URL` | server only | Registrar API base URL |

These must **never** be prefixed with `VITE_` — they are server-side secrets that the browser must not see.

### Needed for payment integration (Phase 3)

| Variable | Where | Purpose |
|---|---|---|
| `VITE_STRIPE_PUBLISHABLE_KEY` | browser | Stripe.js initialization (safe to expose) |
| `STRIPE_SECRET_KEY` | server only | Stripe API authentication |
| `STRIPE_WEBHOOK_SECRET` | server only | Stripe webhook signature verification |

## Project structure

```
src/
  components/     Reusable UI components (Navbar, Footer, cards, forms)
  context/        React context providers (CartContext)
  hooks/          Custom hooks (useSeo)
  pages/          Route-level page components
    dashboard/    Dashboard sub-pages
  services/       Service abstractions (domainService, paymentAuthService)
    demoData.ts   Phase 1 demo data — replaced by real APIs in Phase 2
  types/          TypeScript type definitions
  App.tsx         Router + route definitions
  main.tsx        App entry point
  index.css       Global styles + Tailwind layers
public/
  _redirects      Netlify SPA redirect
  favicon.svg
netlify.toml      Build config, redirects, security headers
```

## Phase 1 scope

**Works (demo):**
- Domain search across 10 extensions
- Domain availability results (deterministic demo)
- Add to cart, remove, adjust years
- Cart totals (subtotal, placeholder tax)
- Checkout flow (demo — no payment processed)
- Login / signup (demo session in sessionStorage)
- Dashboard: overview, domains, orders, billing, profile, security
- Domain detail: overview, DNS editor, nameservers, contact, renewal, security
- Pricing, deals, services, about, contact, FAQ, legal pages

**Not yet connected (future phases):**
- Real domain availability and registration (registrar API)
- Real payments (Stripe)
- Real DNS management (registrar API)
- Real auth (Supabase Auth)
- Hosting, email, SSL, AI website builder
