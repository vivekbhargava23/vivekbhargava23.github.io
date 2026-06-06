# Vivek Bhargava — personal homepage

A static, multi-page site (Home · Expertise · Projects · About · Contact) with a light/dark
toggle. No build step, no dependencies — just HTML/CSS/JS. Ready for GitHub Pages.

## Before you publish — add 3 images

LinkedIn is already wired in (`vivek-bhargava-431b4561`). You just need to drop three files
into `assets/`:

1. **`photo.jpg`** — your headshot (the professional grey-blazer one). Powers the home hero.
   - Recommended: portrait orientation, roughly 600×730 px or larger.
   - If missing, the hero gracefully shows a "VB" monogram — nothing breaks.

2. **`caricature.png`** — the "Let's just cluster this first…" cartoon. Used in the About
   page "Off duty" section and on the custom 404 page.

3. **`CV_Vivek_Bhargava.pdf`** — your résumé (the "Download CV" buttons point here). Use the
   one from your Drive `Job 2026/02_CV/Current/` folder.

> Optional: in `projects.html` there are commented-out "View repository" slots on the
> dashboard project — uncomment and set `REPLACE-REPO-URL` if/when a repo goes public.

## Deploy to GitHub Pages

1. Create a repo. For a personal site at `https://<username>.github.io`, name the repo
   `<username>.github.io`. (Any repo name works too — the site will live at
   `https://<username>.github.io/<repo>/`.)
2. Put the **contents of this folder** at the repository root (so `index.html` is at the top).
3. Push, then in the repo: **Settings → Pages → Build and deployment → Source: Deploy from a
   branch**, branch `main`, folder `/ (root)`. Save.
4. Wait ~1 minute; your site is live at the URL shown on that page.

### Custom domain (optional)
Add a file named `CNAME` at the root containing just your domain (e.g. `vivekbhargava.com`),
then point a DNS CNAME/ALIAS record at GitHub Pages per their docs.

## Files
```
index.html        Home / hero
expertise.html    Technical depth — the academic + from-scratch foundation
projects.html     Builder/AI track + Fraunhofer production track
about.html        Bio, education, experience, research output, leadership
contact.html      Contact details + CV
assets/style.css  All styling (light + dark)
assets/main.js    Theme toggle, mobile menu, scroll reveal
assets/photo.jpg  ← you add this
assets/CV_Vivek_Bhargava.pdf  ← you add this
```

## Editing tips
- Colours live at the top of `assets/style.css` (`--accent`, `--accent-2`, and the
  `:root[data-theme="light"]` block). Change in one place, everywhere updates.
- The nav is repeated in each HTML file; if you rename a page, update all five.
