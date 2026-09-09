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
| `public/images/project-*.webp` | Placeholder — swap for real screenshots (1200x750) |
| `public/images/profile.png` | Placeholder — transparent-background portrait for mobile hero |
| `public/models/character.glb` | **Missing** — see below |
| `public/video/video.webm` | Retained from template, background for tech section |

### 3D character model

**Disabled by default.** Set `config.features.character3D` to `true` in `src/config.ts`
to re-enable, but you must supply your own model first.

The upstream template shipped an AES-encrypted GLB (`character.enc`) — a Blender-rigged
figure seated at a desk with bespoke animation clips. That asset has been removed from
this repo: the MIT licence covers the template's source code, and deliberately encrypting
an asset signals it was not intended for redistribution.

Supplying a replacement is non-trivial. `src/components/Character/utils/` expects:

| Requirement | Detail |
|---|---|
| Rig | Blender Rigify naming (`spine.006`, `f_index.03.L`, `footL`, `footR`) |
| Animation clips | `introAnimation`, `typing`, `Blink`, `browup`, `key1`–`key6` |
| Format | GLB, Draco-compressed, AES-CBC encrypted via `public/models/encrypt.cjs` |
| Bone hooks | `footL`/`footR` repositioned on load; head bone driven by cursor |

A stock Mixamo or Ready Player Me export will not drop in — the bone naming and clip
names differ, and `character.ts` will throw on the missing `footR` node.

Realistic paths:

1. **Leave it off.** The layout works without it; the hero renders type-only on desktop
   and uses `public/images/profile.png` on mobile.
2. **Author your own in Blender**, matching the rig and clip names above.
3. **Replace the 3D layer** with something simpler and more on-message — an abstract
   scene, an animated architecture diagram — by rewriting `src/components/Character/Scene.tsx`.

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
