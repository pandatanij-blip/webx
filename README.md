# WebX landing page
One-page Next.js (App Router) + TypeScript site for WebX.

## Requirements
Node.js 20+ and npm. Confirm the current Next.js Active LTS and adjust `next` and `eslint-config-next` in package.json if needed.

## Installation and development
    npm install
    npm run dev        # http://localhost:3000

## Checks and production
    npm run lint
    npm run typecheck
    npm run build
    npm start

## Editing content
Business info and placeholders live in `data/` (`site.ts`, `services.ts`, `faq.ts`). Anything marked `[PLACEHOLDER ...]` must be replaced before launch.

## Environment variables
Copy `.env.example` to `.env.local`.
- `NEXT_PUBLIC_SITE_URL`: canonical URL for metadata and sitemap.
- `NEXT_PUBLIC_FORM_ENDPOINT`: receives the contact form JSON. Empty means demo mode.

## Deployment
Vercel or any Node host: import the repo, set the env vars, build with `npm run build`.

## Git workflow
    git init && git add . && git commit -m "Initial commit"
Use feature branches and pull requests into `main`. Never commit `.env*` files.


### UI refinement
- Restored Next/font display/body font variables so headings use the intended Bricolage Grotesque / DM Sans fonts.
- Increased main display heading scale.
- Hidden browser scrollbars while preserving horizontal/vertical scrolling.
