# Araksha-Website

Public customer website for **Araksha by Samson Insurance Brokers (Pvt) Ltd** — marketing pages, insurance education, get-a-quote flow and customer login.

Built with Next.js (App Router), Tailwind CSS and Firebase (Auth + Firestore) — it connects to the **same** Firebase project as the Araksha staff app.

## Setup

1. `npm install`
2. Copy `.env.example` to `.env.local` and fill in the Firebase and EmailJS values
   (same Firebase project as the staff frontend — see `SETUP.md` in the parent workspace).
3. `npm run dev` — runs on <http://localhost:3000>

## Build

```
npm run build
```

See `DEPLOY.md` for the full deployment guide (Vercel + custom domain).

## Notes

- `.env.local` is git-ignored — never commit real Firebase/EmailJS keys.
- The About page team/group sections and the company address are placeholders marked `TODO(Araksha)` — replace with real content before launch.
