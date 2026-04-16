# Therapist Practice Site

Static site for a private therapy practice. Built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com), deployed to [Cloudflare Pages](https://pages.cloudflare.com).

## Stack

- **Framework:** Astro 5 (zero-JS by default, content collections for techniques)
- **Styling:** Tailwind CSS with a calming sage/warm palette
- **Hosting:** Cloudflare Pages (free tier)
- **Forms:** Formspree (free tier — 50 submissions/mo) — swap for a Cloudflare Pages Function later if needed
- **Domain:** Cloudflare Registrar recommended (~$10/yr, automatic DNS)

## Local development

```bash
npm install
npm run dev
```

Site runs at `http://localhost:4321`.

## Project structure

```
src/
├── components/         Reusable UI bits (SectionHeading, etc.)
├── content/
│   ├── config.ts       Content collection schema
│   └── techniques/     Markdown files — one per modality. Add/edit freely.
├── layouts/
│   └── BaseLayout.astro    Header, footer, fonts, meta tags
├── pages/
│   ├── index.astro     Home (hero + techniques preview)
│   ├── about.astro     Bio + credentials
│   ├── approach.astro  Renders all techniques from content collection
│   └── contact.astro   Contact form + privacy disclaimer
└── styles/
```

## Customization checklist

Before going live, search-and-replace these placeholders:

- [ ] `Dr. Jane Doe, LMHC` → her actual name & credentials (BaseLayout, all pages)
- [ ] `(239) 555-1234` → her phone (contact.astro)
- [ ] `hello@example.com` → her email (contact.astro)
- [ ] `https://yourdomain.com` → her domain (astro.config.mjs)
- [ ] `YOUR_FORM_ID` → her Formspree form ID (contact.astro)
- [ ] License # and credentials (about.astro)
- [ ] Bio copy (about.astro)
- [ ] Techniques — add/remove markdown files in `src/content/techniques/`

## Deploying to Cloudflare Pages

1. Push the repo to GitHub (private repo is fine on Cloudflare's free tier).
2. In Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**.
3. Select the repo. Cloudflare auto-detects Astro:
   - Build command: `npm run build`
   - Build output: `dist`
4. Deploy. You'll get a `*.pages.dev` URL immediately.
5. Add custom domain under **Custom domains**.

## Form handling

Currently uses Formspree (set the endpoint in `contact.astro`). The form includes a privacy disclaimer asking users not to share PHI — this is the simplest legally-defensible setup for a non-HIPAA form.

**If she wants a HIPAA-compliant intake form later:**
- Hushmail Forms (~$10/mo)
- Jotform HIPAA tier (~$39/mo)
- Or: build a Cloudflare Pages Function that forwards to her HIPAA-compliant email (e.g., Paubox, Hushmail)

## Future additions

- **Scheduling:** Drop in a SimplePractice / Jane App / IvyPay booking link as a button on the contact page.
- **Blog/articles:** Add a new content collection (`src/content/articles/`) with the same pattern as techniques.
- **Photo gallery:** Use Cloudflare Images or R2 rather than committing originals to the repo.
- **Analytics:** Cloudflare Web Analytics — free, no cookies, no consent banner needed.
