<goal>
Rebuild fluttera.de — the one-page marketing site of a solo Flutter freelance agency — into an award-quality website that converts mid-sized companies, large companies, and startups into booked Calendly appointments for Flutter freelance development and fractional-CTO engagements.

Who benefits: Alexander Michels (owner, alex@fluttera.de) gets a site that signals the same care and craft he applies to client apps ("the website is the portfolio piece"). Prospective clients get a clear, credible picture of what he builds, proof of shipped work, and a low-friction path to book a call.

The current site is a generic German Start-Bootstrap template. The target is the design direction shown in the eight Figma ideation screenshots in the repo root (`Screenshot 2026-07-11 at 18.*.png`): bold editorial typography, monospace eyebrow labels, a light hero with a giant "Fluttera" wordmark, a blue stats band, a dark "What I build" section, selected-work cards, a 4-step process, an about section, an FAQ grid, and a contact/CTA section. It must NOT look AI-generated or template-based — it should read like a 100.000 € agency site.
</goal>

<background>
Tech stack decisions (already made with the owner):
- **Astro** static build (owner's choice), deployed to **GitHub Pages** via GitHub Actions. Hosting must remain free; output is fully static.
- **Bilingual DE/EN** with a language toggle in the nav. German is the default locale at `/`; English lives at `/en/`. The Figma mockups show the English copy; German copy must be written to match (marketing-grade German, not literal translation).
- **Strict one-pager**: anchor navigation to sections, plus the two existing legal pages (Impressum, Datenschutz). No blog, no separate subpages. The "Blog" and "Flutter-Entwickler" items visible in the mockup nav are dropped; nav links become section anchors.
- **Conversion path: Calendly + email/phone links.** Primary CTA opens the Calendly popup (`https://calendly.com/fluttera/30min`). Secondary: `mailto:alex@fluttera.de` and `tel:+4952424129026`. There is NO contact form (no form backend needed). The contact section from the mockup is adapted: booking CTA card replaces the form.
- **SEO + AI-search (AEO) optimization is a first-class requirement.** Prospective clients may ask Google OR an AI assistant for Flutter freelancer recommendations in Germany; the site must be maximally legible to both.
- Location signalling: visible copy says **"Germany"** (as in the mockup eyebrow "Senior Freelance Flutter Developer · Germany"). Structured data may additionally list Berlin as a service location / area served. Do NOT put a specific small-town address prominently in the page copy (the Impressum legally carries the full address already).

Existing repo state (branch `development`, which is also the PR target):
- `index.html` — current German Bootstrap one-pager with Calendly popup, Google Analytics (gtag `G-CEV6Q1NVH8`), Google Fonts (Newsreader/Mulish/Kanit).
- `impressum.html`, `datenschutz.html` — legal pages that MUST survive the rebuild with working URLs.
- `assets/img/` — reusable assets: `portrait_black.png` / `main_picture_alexander_michels.webp` (portrait photos), `easy_app.mp4`, `demo-screen.mp4` (app demo videos), `favicon.ico`, store badges. `assets/Alex_Michels_Resume.pdf` also exists.
- `css/styles.css`, `js/scripts.js` — Bootstrap theme, to be deleted after migration.
- Root screenshots `Screenshot 2026-07-11 at 18.*.png` — design reference only; move them to `ai_docs/design-reference/` and exclude from the built site.
- Git history shows a "Delete CNAME" commit — verify custom-domain configuration and re-establish `public/CNAME` containing `fluttera.de` so deploys don't drop the domain.

Files to examine during implementation: @index.html (content to port), @impressum.html, @datenschutz.html (migrate verbatim), the eight root screenshots (design source of truth).
</background>

<user_flows>
Primary flow (German corporate buyer / startup founder):
1. Lands on `/` (German) from Google, an AI-assistant citation, or a referral.
2. Hero communicates within 3 seconds: senior freelance Flutter developer in Germany, apps that actually ship.
3. Scrolls: stats band (proof at a glance) → "What I build" (matches their need: cross-platform app, MedTech/regulated, MVP, migration, embedded) → selected work (credibility) → process (how an engagement runs) → about (the person) → FAQ (objections answered).
4. Clicks any "Termin vereinbaren" / "Start a project" CTA (nav button, hero, contact section).
5. Calendly popup opens; visitor books a 30-minute call. Success state: booking confirmed inside the Calendly widget.

Alternative flows:
- **English-speaking visitor**: clicks the language toggle in the nav → lands on the equivalent `/en/` page at the top; all content, meta tags, and structured data are English. Toggle on `/en/` returns to `/`.
- **Mobile visitor (≤ 768px)**: hamburger menu opens an overlay/drawer with the same anchors + language toggle + CTA; menu closes on anchor click and scrolls smoothly to the section.
- **Direct-contact visitor**: skips Calendly, uses the email or phone link in the contact section or footer. `mailto:` and `tel:` links must be real anchors, not JS handlers.
- **AI assistant / crawler**: fetches fully rendered static HTML (no client-side content rendering), `llms.txt`, sitemap, and JSON-LD; can answer "who is a good Flutter freelancer in Germany?" with name, services, experience, and URL.
- **Legal-page visitor**: clicks Impressum / Datenschutz in the footer → dedicated pages render with the existing legal content and a link back to the home page.

Error flows:
- **Calendly script blocked or fails to load** (ad-blocker, network): CTA buttons are real `<a href="https://calendly.com/fluttera/30min" target="_blank" rel="noopener">` links; the popup behavior is progressive enhancement via JS. Clicking always works — worst case it opens Calendly in a new tab.
- **JavaScript disabled**: all content visible and readable (entrance animations must not hide content permanently without JS), nav anchors work, CTAs open Calendly in a new tab.
- **Video cannot autoplay** (iOS Low Power Mode, data-saver): `<video>` elements have `poster` images and the layout does not depend on playback.
- **Old URLs**: `/index.html`, `/impressum.html`, `/datenschutz.html` keep working (use Astro `build.format: 'file'` or redirects) so existing backlinks and the Datenschutz references don't 404.
</user_flows>

<requirements>
**Functional — structure & content:**
1. Astro project scaffolded at the repo root (`src/`, `public/`, `astro.config.mjs`, `package.json`), Node LTS, TypeScript optional but consistent. Old Bootstrap files (`css/`, `js/`, root `index.html`) removed after migration.
2. One-pager with these sections in order, each an `id`-anchored semantic `<section>` matching the Figma reference: (a) sticky nav, (b) hero, (c) blue stats band, (d) dark "What I build", (e) selected work, (f) process "How we work", (g) about, (h) FAQ, (i) contact/CTA, (j) footer.
3. Nav: "Fluttera" logo mark, anchor links (DE: Leistungen, Referenzen, Prozess, Über mich, FAQ, Kontakt / EN equivalents), language toggle, primary CTA button. Nav is fixed, gains background/shadow on scroll, collapses to hamburger under ~992px.
4. Hero: monospace eyebrow ("SENIOR FREELANCE FLUTTER-ENTWICKLER · DEUTSCHLAND" / "SENIOR FREELANCE FLUTTER DEVELOPER · GERMANY"), oversized "Fluttera" display wordmark, headline (EN: "Flutter apps people actually ship." — DE equivalent of equal punch, e.g. "Flutter-Apps, die wirklich live gehen."), subline (single senior engineer, iOS/Android/Web/Desktop from one codebase, modern AI tooling), dual CTA (primary Calendly, secondary anchor to selected work), and the browser-framed dashboard mockup with floating phone and "One codebase, every screen — iOS / Android / Web / Desktop" badge card. Build the mockup as layered HTML/CSS/SVG (crisp at any DPI), not a flat raster screenshot.
5. Stats band (blue, full-width): "100s of IoT devices — controlled in one smart-home app", "DiGA — prescribable MedTech app taken from early stage to market", "1 codebase — for iOS, Android, Web & Desktop". Numbers get a count-up/reveal animation on scroll-into-view.
6. "What I build" (dark section): two large cards (Cross-platform apps that feel native — Riverpod feature-first, Firebase, pixel-accurate UI; MedTech & regulated apps — DiGA, medical-grade quality, audit-ready data handling) + three small cards (Startup MVPs; Native → Flutter migration; Custom hardware & Linux targets) + full-width banner: AI-native workflow (Claude, Codex) and openness to founder / fractional-CTO partnerships.
7. Selected work: four case cards as in the mockup (Smart Home · IoT — "Europe's largest smart-home app"; MedTech · DiGA — prescribable rehab app; HR · Operations — time & attendance platform; Startups · MVPs — founder MVPs). Anonymized (no client names). Each card: imagery, category eyebrow, title, 2–3 line description. Imagery must look premium and cohesive (duotone/consistent treatment) — no obviously mismatched stock photos.
8. Process: four numbered steps — Discovery, Architecture, Build, Launch & iterate — with the mockup descriptions.
9. About: portrait photo (reuse existing portrait asset, re-cropped/treated to match the design), "One senior engineer, fully invested in your product." headline, intro paragraphs, four checkmark bullets including fractional-CTO / founder-partnership availability.
10. FAQ: eight Q&A cards. Rework the mockup's generic Flutter questions toward buyer-relevant ones (keep ~4 educational: what is Flutter, advantages, timelines, web/desktop; add ~4 commercial: how engagements/pricing work, fractional CTO scope, how AI tooling is used responsibly, maintenance & handover). FAQ content must exactly mirror the FAQPage JSON-LD (requirement 20).
11. Contact/CTA section: "Let's build something" / "Lass uns etwas bauen" heading, prominent Calendly booking card (primary CTA), and a contact card with phone (+49 5242 412 9026), email (alex@fluttera.de), and availability hours — replacing the mockup's form.
12. Footer: Fluttera wordmark + one-liner ("Freelance Flutter development — Germany"), links to Impressum / Datenschutz, copyright "© 2026 Fluttera · Alexander Michels".
13. Legal pages migrated to Astro with content unchanged (`impressum`, `datenschutz`), styled to match the new design, reachable at their old `.html` URLs.

**Functional — i18n:**
14. Astro i18n routing: `de` default locale without path prefix, `en` under `/en/`. Every UI string lives in per-locale content/dictionary files — zero hardcoded visible strings in components. Language toggle links to the equivalent page of the other locale.
15. Both locales have fully localized: page `<title>`, meta description, OG/Twitter tags, JSON-LD, and `html lang`. `hreflang` alternates (`de`, `en`, `x-default` → de) on every page.

**Functional — design system & motion:**
16. Custom design system, no CSS framework: design tokens (CSS custom properties) for the palette (near-black, off-white/light-gray surfaces, royal-blue primary ~#2743CD-range as in mockups), spacing scale, radius, shadows. Typography: a characterful display grotesk for headlines (self-hosted; e.g. Inter Display/General Sans-class — pick one that matches the mockups' heavy, tight headlines), a highly readable body face, and a monospace face for eyebrow labels. All fonts self-hosted with `font-display: swap` and preloaded; no Google Fonts CDN.
17. Motion: scroll-triggered entrance reveals (IntersectionObserver + CSS transitions), stats count-up, subtle hover microinteractions on cards/buttons, smooth anchor scrolling. Restrained and consistent (one easing family, 200–600ms range). Full `prefers-reduced-motion: reduce` support: all non-essential motion disabled, content immediately visible. No heavyweight animation libraries unless a specific effect demands it.

**Functional — SEO & AI-search (AEO):**
18. Semantic HTML: exactly one `<h1>` per page, logical heading hierarchy, `<main>/<nav>/<section>/<footer>` landmarks, descriptive alt text on all images.
19. Per-locale meta: title ≤ 60 chars, description ≤ 155 chars, canonical URLs, OG + Twitter cards with a designed 1200×630 OG image (not the old portrait photo).
20. JSON-LD structured data: `ProfessionalService` (or `Person` + `Service`) with name Fluttera / Alexander Michels, `areaServed`: Germany (DACH), `serviceArea`/location including Berlin, offered services (Flutter development, cross-platform apps, MedTech/DiGA, MVP development, fractional CTO), `sameAs` links if available; plus `FAQPage` mirroring the FAQ section; plus `WebSite`. Berlin/Germany appear in structured data — the visible copy only says "Germany".
21. `sitemap.xml` (both locales) and `robots.txt` that explicitly allows major search and AI crawlers (Googlebot, Bingbot, GPTBot, ClaudeBot/Claude-Web, PerplexityBot, CCBot) and references the sitemap.
22. `llms.txt` at the site root: concise machine-readable summary — who Alexander Michels/Fluttera is, services, experience highlights (smart-home scale, DiGA MedTech, HR platforms, MVPs), engagement models (freelance, fractional CTO), location (Germany), contact and booking links.
23. All content present in the initial static HTML (no client-side content injection) so crawlers and AI assistants see the full page without executing JS.
24. Keep Google Analytics gtag `G-CEV6Q1NVH8` (loaded in both locales, `async`); Datenschutz already discloses analytics usage.

**Functional — build & deploy:**
25. GitHub Actions workflow (`.github/workflows/deploy.yml`) using `withastro/action`: build on push to `development` (or the branch GitHub Pages is configured for — verify repo settings) and deploy to GitHub Pages. `public/CNAME` contains `fluttera.de`. Site config `site: 'https://fluttera.de'` so canonical/sitemap URLs are absolute and correct.

**Error Handling:**
26. Calendly CTAs are plain anchors to the booking URL, progressively enhanced to a popup when the Calendly script loads. If the script never loads, clicks open the booking page in a new tab.
27. With JS disabled, no content is hidden: entrance animations are applied via a JS-added class (`.js` on `<html>`), so the no-JS default is fully visible content.
28. Videos have `poster` frames, `muted playsinline loop` attributes, and lazy loading; failure to autoplay leaves a meaningful still image.

**Edge Cases:**
29. Responsive from 360px to ≥1920px with no horizontal overflow at any width; the hero mockup composition reflows gracefully (stacks/scales on mobile).
30. Fixed nav accounts for anchor offsets (`scroll-margin-top`) so sections aren't hidden under the header when navigated to; deep links like `/#faq` and `/en/#faq` land correctly.
31. Long German compound words (e.g. "Flutter-Entwicklung", "Terminvereinbarung") must not overflow buttons/cards — test the DE locale at narrow widths specifically.
32. Keyboard navigation: skip-to-content link, visible focus states, hamburger menu and FAQ interactions operable via keyboard; color contrast ≥ WCAG AA on all text including on the blue band and dark section.

**Validation (input/feedback):**
33. Language toggle preserves context: from any section on `/`, toggling lands on `/en/` top (acceptable) or same anchor (preferred if simple); never a 404.
</requirements>

<boundaries>
Edge cases:
- Visitor with ad-blocker: Calendly widget and GA blocked → booking still reachable via plain link (req 26); no console-error cascade or layout shift.
- iOS Safari Low Power Mode: videos show posters; page remains visually complete.
- Very large screens (≥ 2560px): content constrained by a max-width container; hero composition doesn't stretch absurdly.
- `prefers-reduced-motion`: no reveals, no count-ups, no smooth-scroll; instant, complete rendering.
- Print / reader mode: semantic HTML should degrade acceptably (no requirement beyond not being broken).

Error scenarios:
- Calendly outage: CTA opens calendly.com link (their error page) — acceptable; email/phone remain as fallback conversion paths in the contact section.
- Font files fail to load: system font stack fallback defined in tokens keeps layout stable (`font-display: swap`, metric-compatible fallbacks where possible).
- GitHub Pages deploy failure: workflow fails loudly in Actions; previous deploy stays live (Pages default behavior).

Limits:
- Total JS shipped to the client (excluding Calendly's own script and gtag) ≤ ~30KB; the site is content, not an app.
- Images served as optimized WebP/AVIF via `astro:assets`; hero/above-fold images preloaded, everything else lazy.
- No external CDNs except Calendly and Google Analytics (fonts self-hosted, no Bootstrap/jQuery/icon CDNs — inline SVG icons instead).
</boundaries>

<implementation>
Files to create (indicative structure):
- `astro.config.mjs` — `site: 'https://fluttera.de'`, i18n (`defaultLocale: 'de'`, `locales: ['de','en']`, `prefixDefaultLocale: false`), `build.format: 'file'` (keeps `impressum.html`-style URLs), sitemap integration.
- `src/layouts/BaseLayout.astro` — head (meta, hreflang, OG, JSON-LD slot, fonts preload, GA), skip-link, nav, footer.
- `src/components/` — `Nav.astro`, `Hero.astro`, `StatsBand.astro`, `WhatIBuild.astro`, `SelectedWork.astro`, `Process.astro`, `About.astro`, `Faq.astro`, `Contact.astro`, `Footer.astro`, `CalendlyCta.astro` (anchor + progressive popup), `DeviceMockup.astro` (hero browser+phone composition).
- `src/i18n/de.ts`, `src/i18n/en.ts` (or JSON) — all copy, including meta and FAQ entries consumed by both the FAQ component and FAQPage JSON-LD from the same source (single source of truth, req 10/20).
- `src/pages/index.astro`, `src/pages/en/index.astro`, `src/pages/impressum.astro`, `src/pages/datenschutz.astro` (legal pages may remain DE-only; EN pages link to them too).
- `src/styles/tokens.css`, `src/styles/global.css` — design tokens + base styles.
- `public/CNAME`, `public/robots.txt`, `public/llms.txt`, `public/favicon.ico` (+ modern favicon set), OG image asset.
- `.github/workflows/deploy.yml`.
- Move root screenshots → `ai_docs/design-reference/`; move reusable images/videos → `src/assets/` (processed) or `public/` (videos, PDF).

Patterns and constraints:
- Use Astro's built-in i18n + `@astrojs/sitemap`; avoid heavy i18n frameworks — a typed dictionary module is enough for a one-pager.
- Icons as inline SVG (hand-picked, consistent stroke weight — e.g. Lucide copied into a local component), replacing Bootstrap Icons CDN.
- Fonts via `@fontsource` packages or self-hosted WOFF2 in `public/fonts` with explicit `@font-face`; subset to latin + latin-ext (German umlauts!).
- Animations: a single small `src/scripts/reveal.ts` using IntersectionObserver, imported with `<script>` in the layout; add `js` class to `<html>` as the first inline script so no-JS never hides content.
- Avoid: Bootstrap or any CSS framework (design must be bespoke); client-side rendering of content (breaks AEO, req 23); Google Fonts CDN (GDPR + performance); lorem-ipsum or placeholder copy anywhere in the final build.
- German copy: write native-quality marketing German (Sie-Form, consistent with Impressum/Datenschutz tone); do not machine-translate the English mockup copy literally.
- Reason for `build.format: 'file'`: preserves the exact legacy URLs (`/impressum.html` links exist in the wild and inside datenschutz.html).
</implementation>

<stages>
Phase 1 — Scaffold & pipeline: Astro project, tokens/fonts, BaseLayout, GitHub Actions deploy to Pages with CNAME, legal pages migrated. Verify: workflow deploys a stub page to fluttera.de (or Pages preview), `/impressum.html` and `/datenschutz.html` reachable.
Phase 2 — Sections & copy (DE + EN dictionaries): build all ten sections per Figma reference with final bilingual copy and imagery. Verify: visual side-by-side against each reference screenshot at desktop width; DE/EN parity check.
Phase 3 — Motion & polish: reveals, count-ups, hover states, nav scroll behavior, reduced-motion path, responsive pass 360→1920px. Verify: manual interaction pass + reduced-motion emulation.
Phase 4 — SEO/AEO & QA: meta/hreflang/JSON-LD/sitemap/robots/llms.txt/OG image, Lighthouse runs, link check, rich-results validation. Verify: validation criteria below all pass.
</stages>

<validation>
Automated checks (this is a static Astro site, not a Flutter app — the Flutter TDD and robot-testing disciplines don't apply; the justified equivalent is build-time and E2E verification):
1. `npm run build` succeeds with zero errors/warnings that matter; CI runs it on every push.
2. Link integrity: crawl the built `dist/` (e.g. `linkinspector`/`lychee` or a small script) — no broken internal links or anchors in either locale.
3. HTML validity: built pages pass `html-validate` (or W3C validator) with no errors.
4. i18n parity: a small script/test asserts `de` and `en` dictionaries have identical key sets (no missing translations).
5. Playwright smoke tests (chromium, run in CI) covering the critical journeys:
   - Home (DE) renders: h1 visible, all ten section anchors exist.
   - Nav anchor click scrolls to section (URL hash updates, section in viewport).
   - Language toggle: `/` → `/en/` and back; `<html lang>` and h1 language change.
   - Calendly CTA is an `<a>` with the correct href (fallback guarantee) — do not test the actual popup/booking (external service).
   - Mobile viewport: hamburger opens, anchor click closes it and navigates.
   - Legal links resolve to 200 for `/impressum.html` and `/datenschutz.html`.
   Use stable `data-testid` selectors on nav, toggle, CTAs, and sections so tests don't couple to copy or styling.
6. Lighthouse (mobile + desktop, both locales): Performance ≥ 95, Accessibility ≥ 95, Best Practices ≥ 95, SEO = 100. Run via `lighthouse-ci` locally or in CI.
7. Structured data: FAQPage + ProfessionalService validate in Google's Rich Results Test / schema.org validator with zero errors.

Manual checks:
8. Visual comparison against each of the eight reference screenshots — the build should feel like the mockups' finished sibling, not an approximation.
9. German locale narrow-width pass (360px) for compound-word overflow.
10. Reduced-motion emulation: content instantly visible, no animation.
11. Post-deploy: fluttera.de serves the new site over HTTPS, old URLs work, `robots.txt`/`llms.txt`/`sitemap.xml` reachable in production.
</validation>

<done_when>
- fluttera.de serves the new Astro-built site from GitHub Pages with the custom domain intact.
- All ten sections exist in both locales with final (non-placeholder) copy and imagery, matching the Figma direction.
- Every CTA opens Calendly (popup with JS, new tab without); email and phone links work.
- `/impressum.html` and `/datenschutz.html` reachable with unchanged legal content.
- All automated checks in <validation> pass: build, links, HTML validity, i18n parity, Playwright smoke suite, Lighthouse thresholds (Perf/A11y/BP ≥ 95, SEO = 100), structured-data validation.
- `robots.txt` (AI crawlers allowed), `llms.txt`, `sitemap.xml`, hreflang, and JSON-LD (with Germany/Berlin service area) are live in production.
- No Bootstrap, no Google Fonts CDN, no placeholder text anywhere in the shipped site.
</done_when>
