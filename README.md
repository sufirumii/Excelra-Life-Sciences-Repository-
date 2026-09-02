# Excelra — Life Sciences Learning Repository

A self-paced learning app covering seven life-sciences functions (Drug Discovery → Data Integrity), with a learner mode, an admin batch-progress dashboard, and per-theme induction briefings.

Built with **Next.js 16 + TypeScript + Tailwind CSS 4**. No database required — all content ships with the app.

---

## What's inside (file map)

```
├── package.json              # dependencies & scripts
├── bun.lock                  # pinned dependency versions
├── render.yaml               # Render.com one-click blueprint
├── next.config.ts            # Next.js config
├── tsconfig.json             # TypeScript config
├── postcss.config.mjs        # Tailwind v4 pipeline
├── public/                   # logos, backgrounds, theme photos
└── src/
    ├── app/                  # layout, page, global styles
    ├── components/excelra/   # all screens (login, home, courses, deep-dives, admin…)
    ├── components/ui/        # sonner toaster
    └── lib/                  # content (data.ts, theme-deepdives.ts), session, utils
```

## Run locally

```bash
bun install        # or: npm install
bun run dev        # or: npm run dev  → http://localhost:3000
```

**Logins**

| Role   | Credentials                                      |
|--------|--------------------------------------------------|
| Learner| just enter any name                              |
| Admin  | `shiv.subramanian@excelra.com` / `123456`        |

## Production build

```bash
bun run build
bun run start      # serves on $PORT (default 3000)
```

## Deploy on Render

1. Push this folder to a Git repository (GitHub / GitLab / Bitbucket).
2. On render.com → **New → Blueprint**, point it at the repo — `render.yaml` configures everything:
   - Build: `bun install && bun run build`
   - Start: `bun run start`
   - Health check: `/`
3. Done. No environment variables needed.

(Prefer another host? Any Node 20+ host that runs `next build` + `next start` works — Vercel, Railway, Fly.io, your own server.)

---

© Excelra — internal training use · confidential
