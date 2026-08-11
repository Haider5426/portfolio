# Haider Khan — Portfolio

Single-file static site: `index.html` (HTML + CSS + JS, no build step). Open it directly in a browser, or deploy as-is to any static host (Vercel, Netlify, GitHub Pages).

## Design system (for future edits)
- **Fonts:** IBM Plex Mono (headings/data labels), IBM Plex Sans (body) — loaded from Google Fonts.
- **Colors:** paper `#F7F7F2`, ink `#1B1F23`, grid `#DADFE3`, signal blue `#2A6F97`, amber `#C98A2C`, good/green `#3B7A57`.
- **Signature element:** the "pipeline" strip (RAW → CLEAN → MODEL → SHIP) in the hero — reuse this metaphor if you add new sections.
- **Content source:** copy is drawn directly from the two tailored resumes (Data Analyst / Software Engineer versions).

## Quick deploy (no Claude Code needed)
1. Push this folder to a new GitHub repo.
2. Go to vercel.com → New Project → import the repo → deploy. Done, you get a live URL in ~1 minute.

## Handing this to Claude Code
Open this folder in Claude Code and try prompts like:

- "Convert this single-file site into a Next.js app with the same design system, one page per section as needed."
- "Add a case-study page for the Automated Inspection ETL project with a before/after diagram."
- "Add a working contact form that emails me using [Resend/Formspree]."
- "Connect this to my GitHub so my pinned repos show up automatically as project cards."
- "Set up a `/blog` route with MDX so I can write posts about data projects."
- "Deploy this to Vercel and set up a custom domain."

Claude Code can run the dev server, install packages, and push to GitHub directly — this file is a clean starting point for any of that.

## To personalize further
- Swap in real screenshots/GIFs of the Tamimi dashboard, IDS dashboard, etc. into the project cards.
- Add a resume download button linking to the two docx/PDF versions.
- If you get client testimonials from Fiverr, add a short quotes strip above the footer.
