# Swaraj Kumar Dhal — Portfolio

Personal portfolio site. React + TypeScript + Three.js + GSAP, built with Vite.

Senior Salesforce Developer and Solution Architect. Enterprise implementations across
financial services, automotive, public sector, and B2B commerce.

---

## Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build | Vite 5 |
| 3D / WebGL | Three.js, @react-three/fiber, @react-three/drei |
| Animation | GSAP + ScrollTrigger |
| Smooth scroll | Lenis |
| Routing | React Router 7 |
| Deploy | Vercel |

---

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
npm run preview  # preview the build
```

Node 18+ required.

---

## Editing content

Nearly all content lives in a single file: **`src/config.ts`**.

| Key | Drives |
|---|---|
| `developer` | Name, title, hero description |
| `social` | GitHub handle, email, location |
| `about` | About section copy |
| `experiences[]` | Career timeline entries |
| `projects[]` | Work grid — title, category, tech, image, description, link |
| `contact` | Email and social links in footer |
| `skills` | The two "What I Do" panels |
| `certifications[]` | Certification list |

Edit that file and the site updates. Content that lives outside it:

| File | What's hardcoded |
|---|---|
| `index.html` | Page title, meta description |
| `src/components/Navbar.tsx` | Logo initials (`SKD`) |
| `src/components/Loading.tsx` | Loader wordmark |
| `src/components/Landing.tsx` | The two rotating role lines |
| `src/components/TechStackNew.tsx` | Tech pyramid icons |

---

## Assets to replace

| Path | Status |
|---|---|
| `public/images/project-*.svg` | Custom architecture-diagram illustrations — swap for real screenshots if you're ever able to show them |
| `public/images/profile.png` | Placeholder — transparent-background portrait for mobile hero |
| `public/video/video.webm` | Retained from template, background for tech section |

### 3D hero visual

**Enabled by default** (desktop only; mobile always uses `public/images/profile.png`).
Toggle it via `config.features.character3D` in `src/config.ts`.

The upstream template shipped an AES-encrypted GLB — a Blender-rigged figure of the
original author, seated at a desk. That asset never shipped in this repo: the MIT
licence covers the template's source code, not an asset its author deliberately
encrypted to prevent reuse (and which was very likely his own likeness).

`src/components/Character/Scene.tsx` is a full rewrite: an original, license-free
three.js scene — a small animated node/data-topology (a glowing core connected to
orbiting nodes) that rotates slowly and tilts toward the cursor. No Blender rig, no
GLB, no external asset at all — everything is procedural three.js geometry, so there's
nothing to source or re-encrypt. Swap it for something else entirely by rewriting that
file, or set `character3D: false` to fall back to the typography-only hero.

---

## Optional: AI chat endpoint

`api/chat.js` is a Vercel serverless function proxying to Groq. It needs `GROQ_API_KEY`
set as an environment variable. Delete the file if you don't want the feature.

---

## Deploy

**Vercel** — connect the repo, framework preset auto-detects Vite. `vercel.json` is already
configured for SPA routing.

**Netlify** — build command `npm run build`, publish directory `dist`. Add a
`_redirects` file containing `/* /index.html 200` for client-side routing.

---

## Attribution

Built on the open-source 3D portfolio template by **Redoyanul Haque**
([red1-for-hek/portfolio-website](https://github.com/red1-for-hek/portfolio-website)),
used under the MIT License. The original license is retained in `LICENSE`.

Content, copy, project data, and tech stack customisations are my own.

---

## License

MIT. See [LICENSE](LICENSE).
