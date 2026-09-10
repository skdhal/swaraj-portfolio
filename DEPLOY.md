# Deploying this site

## 0. Prerequisites

- Node 18 or newer (`node -v` to check)
- A GitHub account
- Git installed

---

## 1. Run it locally first

```bash
npm install
npm run dev
```

Open http://localhost:5173. Confirm your name, projects, and contact details
look right before you put it on the internet.

---

## 2. Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/portfolio.git
git push -u origin main
```

Create the empty repo on GitHub first (no README, no .gitignore — this repo has both).

---

## 3. Pick a host

All three are free and all three give you HTTPS and a subdomain automatically.

| Host | Free tier | Commercial use | Best for |
|---|---|---|---|
| **Cloudflare Pages** | Unlimited static requests, 500 builds/month | Allowed | Recommended |
| **Netlify** | Credit-based monthly allowance | Allowed | Simple drag-and-drop option |
| **Vercel** | 100 GB transfer, 1M edge requests/month | **Not allowed** | Personal projects only |

### Why not Vercel by default

Vercel's Hobby plan is generous, but its terms restrict it to personal, non-commercial
projects. A portfolio you use to attract consulting work sits in a grey area. Cloudflare
Pages has no such clause and unmetered static bandwidth, so it is the safer default for
a professional site. Vercel remains fine if the site is purely a personal showcase.

---

## 4a. Deploy to Cloudflare Pages (recommended)

1. Go to dash.cloudflare.com and sign up
2. **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
3. Authorise GitHub, select your repo
4. Build settings:

   | Field | Value |
   |---|---|
   | Framework preset | Vite |
   | Build command | `npm run build` |
   | Build output directory | `dist` |
   | Node version | Add env var `NODE_VERSION` = `20` |

5. **Save and Deploy**

You get `your-project.pages.dev`. Every push to `main` redeploys automatically.

**SPA routing:** this repo has a `/myworks` route. Create `public/_redirects` containing:

```
/*    /index.html   200
```

Without it, refreshing on `/myworks` returns a 404.

---

## 4b. Deploy to Netlify

1. netlify.com → **Add new site** → **Import an existing project**
2. Connect GitHub, pick the repo
3. Build command `npm run build`, publish directory `dist`
4. Deploy

Same `public/_redirects` file as above is required.

---

## 4c. Deploy to Vercel

1. vercel.com/new → import the repo
2. Framework preset auto-detects Vite; leave defaults
3. Deploy

`vercel.json` in this repo already handles SPA routing.

---

## 5. Custom domain (optional)

A domain costs roughly 800–1200 INR/year (.com) from Namecheap, Cloudflare
Registrar, or BigRock. Cloudflare Registrar sells at cost with no markup.

Once you own it:
- **Cloudflare Pages** → project → **Custom domains** → add it. DNS is automatic if
  the domain is on Cloudflare.
- **Netlify / Vercel** → add the domain in project settings, then point your registrar's
  nameservers or add the CNAME they give you.

HTTPS is provisioned automatically on all three.

---

## 6. Optional: the AI chat endpoint

`api/chat.js` is a serverless function that proxies to Groq. It only works on Vercel
without modification.

- **Keeping it:** set `GROQ_API_KEY` in your host's environment variables. Groq has a
  free tier.
- **On Cloudflare Pages:** it needs porting to a Pages Function (`functions/api/chat.js`)
  with a slightly different signature.
- **Not using it:** delete `api/` and drop the `.env.example` file.

---

## 7. After it's live

- Test on a real phone, not just a narrow browser window
- Run Lighthouse (Chrome DevTools → Lighthouse) — the Three.js bundle is 580 KB and
  loads on desktop for the 3D hero visual; set `character3D: false` in `src/config.ts`
  if you'd rather trade that for a lighter typography-only hero
- Add the URL to your LinkedIn profile and CV
- Vercel Analytics and Speed Insights are already wired in via `App.tsx`; they only
  report on Vercel. Harmless elsewhere, or remove the two imports.
