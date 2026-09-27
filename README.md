# TrademarkInfringementAttorney.com

A lightweight, US-focused Next.js website for general trademark education and attorney inquiry lead generation. This site is **not a law firm** and does **not** provide legal advice.

## Stack

- Next.js App Router + TypeScript
- Tailwind CSS 4 (with site design tokens and responsive component styles in `src/app/globals.css`)
- Static generation for the content and state examples
- No database, authentication, payments, attorney accounts, or analytics

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

```bash
npm run lint
npm run build
npm start
```

## Inquiry form configuration

The multi-step form validates the issue, location, description, contact details, and an unchecked-by-default consent checkbox. It does not write inquiry data to `localStorage` or analytics.

- **Default behavior:** clicking “Continue by email” opens a `mailto:` draft addressed to `TrademarkInfringementAttorney@gmail.com`. The visitor reviews and chooses whether to send it. No message is automatically transmitted by the site.
- **Optional future endpoint:** set `NEXT_PUBLIC_LEAD_FORM_ENDPOINT` to a public HTTPS endpoint that accepts JSON `POST` requests, then rebuild. This client-side endpoint is public by definition; do not put secrets in `NEXT_PUBLIC_*` variables. Select and review a provider, security, retention, consent, privacy notice, and applicable legal/compliance requirements before collecting real leads. The site does not include that endpoint or a backend now.

No `.env` file or API key is required for the current behavior.

## Routes

- `/` — homepage and inquiry form
- `/trademark-infringement`, `/trademark-lawyer`, `/trademark-litigation`, `/trademark-dispute`
- `/trademark-cease-and-desist`, `/trademark-enforcement`, `/trademark-defense`, `/trademark-dilution`
- `/trademark-opposition`, `/trademark-cancellation`, `/trademark-counterfeiting`, `/online-trademark-infringement`
- `/attorneys`, `/resources`, `/for-attorneys`, `/about`, `/contact`
- `/disclaimer`, `/privacy-policy`, `/terms`
- `/trademark-lawyer/california`, `/trademark-lawyer/new-york`, `/trademark-lawyer/texas`, `/trademark-lawyer/florida`, `/trademark-lawyer/illinois`
- `/robots.txt`, `/sitemap.xml`, `/opengraph-image`

Add state examples in `src/app/trademark-lawyer/[state]/page.tsx`; SEO page content lives in `src/lib/content.ts`.

## SEO and accessibility

Per-page titles and descriptions, canonical URLs, Open Graph and Twitter metadata, Organization JSON-LD, breadcrumb JSON-LD on content/state routes, generated sitemap/robots rules, semantic landmarks, skip navigation, visible focus styles, labelled form controls, and reduced-motion support are included.

## Important launch-stage assumptions

- The domain `https://trademarkinfringementattorney.com` is used as the canonical URL; update it if the live canonical domain differs.
- The business email is public site contact information.
- There are no attorney profiles, testimonials, reviews, case results, rankings, or endorsements.
- All legal topics are general educational content, not individualized legal advice. The disclaimer, privacy notice, and terms should be reviewed by qualified counsel before launch; update the privacy notice before connecting a form service or backend.
- The directory is intentionally empty. Future participating or sponsored attorney relationships must be disclosed clearly.

## Deploy to Vercel later (not done)

1. Import `Nawazaki/TrademarkInfringementAttorney` into Vercel and select the Next.js framework preset.
2. Keep the root directory at the repository root; Vercel will detect `npm install` and `npm run build` automatically.
3. Add `NEXT_PUBLIC_LEAD_FORM_ENDPOINT` only after selecting and configuring a real HTTPS form service. Omit it to retain the email-draft behavior.
4. Set the production domain and verify the canonical URL in `src/app/layout.tsx`, `src/app/[slug]/page.tsx`, `src/app/trademark-lawyer/[state]/page.tsx`, `src/app/sitemap.ts`, and `src/app/robots.ts`.
5. Add the domain's DNS records in Vercel and verify the deployment, form behavior, privacy notice, and legal content before launch.

This repository has not been deployed to Vercel.
