# Fluttera Website Redesign — Plan

## Overview

Rebuild fluttera.de: bilingual (DE default, `/en/`) award-quality Astro one-pager per Figma reference; GitHub Pages deploy; Calendly-first conversion; SEO/AEO layer.

**Spec**: `ai_specs/fluttera-website-redesign-spec.md` (read for full requirements)

## Context

- **Structure**: greenfield Astro at repo root; replaces static Bootstrap `index.html` + `css/` + `js/`
- **State management**: n/a — static site. NOT Flutter → verify via `npm run build` + Playwright + Lighthouse, not `flutter analyze/test` (justified deviation)
- **Reference implementations**: `index.html` (content to port), `impressum.html`/`datenschutz.html` (migrate verbatim), `Screenshot 2026-07-11 at 18.*.png` ×8 (design source of truth → move to `ai_docs/design-reference/`)
- **Assets to reuse**: `assets/img/portrait_black.png`, `main_picture_alexander_michels.webp`, `easy_app.mp4`, `demo-screen.mp4`, `favicon.ico`, `assets/Alex_Michels_Resume.pdf`
- **Deploy**: remote `AlexMichels/fluttera`; branch `development`; `gh` CLI absent → Pages source switch to "GitHub Actions" + custom domain fluttera.de = manual repo-settings step (user)
- **Assumptions**: legal pages DE-only; Berlin only in JSON-LD (never visible copy); GA gtag `G-CEV6Q1NVH8` kept

## Plan

### Phase 1: Scaffold + deploy slice

- **Goal**: thin vertical slice live — Astro builds minimal DE page + legal URLs, deploys to Pages with domain intact
- [ ] `package.json`, `astro.config.mjs` — Astro init; `site: 'https://fluttera.de'`, i18n `de` default (no prefix) + `en`, `build.format: 'file'` (preserves `/impressum.html` URLs), `@astrojs/sitemap`
- [ ] `.gitignore` — add `node_modules/`, `dist/`, `.astro/`
- [ ] `src/layouts/BaseLayout.astro` — html lang, head skeleton, skip-link, slot
- [ ] `src/pages/index.astro`, `src/pages/en/index.astro` — placeholder hero (h1 + eyebrow), real copy later
- [ ] `src/pages/impressum.astro`, `src/pages/datenschutz.astro` — legal content migrated verbatim from old files
- [ ] `public/CNAME` (`fluttera.de`), `public/favicon.ico`
- [ ] `.github/workflows/deploy.yml` — `withastro/action`, push to `development` → Pages
- [ ] Move screenshots → `ai_docs/design-reference/`; delete old `index.html`, `css/`, `js/` after content ported (Phase 3 latest)
- [ ] Manual (user): repo Settings → Pages → source "GitHub Actions", custom domain fluttera.de + HTTPS
- [ ] Verify: `npm run build`; dist has `index.html`, `en/index.html`, `impressum.html`, `datenschutz.html`, `CNAME`; push → Actions green → fluttera.de serves slice

### Phase 2: Design system + i18n foundation

- **Goal**: tokens, fonts, dictionaries, shared chrome — every later section drops in
- [ ] `src/styles/tokens.css` — palette (near-black, off-white, royal-blue ~#2743CD), spacing/radius/shadow scale
- [ ] `src/styles/global.css` — reset, base type, `scroll-margin-top` for anchors, focus states, container widths
- [ ] Self-hosted fonts (`@fontsource` or `public/fonts` WOFF2, latin+latin-ext): display grotesk (headlines), body face, monospace (eyebrows); preload + `font-display: swap` + system fallbacks
- [ ] `src/i18n/de.ts`, `src/i18n/en.ts` — typed dictionaries: ALL copy incl. meta + FAQ entries (single source for FAQ UI + JSON-LD); native-quality DE (Sie-Form), no literal translation
- [ ] `src/i18n/index.ts` — locale helper, `useTranslations`, alternate-URL helper for toggle/hreflang
- [ ] TDD: parity check first — script/test asserts de/en key sets identical → `scripts/check-i18n.mjs`, wire into `npm run build` or CI step
- [ ] `src/components/Nav.astro` — logo, anchor links, language toggle, CTA button; fixed, bg/shadow on scroll, hamburger <992px, keyboard operable; `data-testid` on nav/toggle/CTA
- [ ] `src/components/Footer.astro` — wordmark, one-liner, Impressum/Datenschutz links, © 2026
- [ ] `src/components/CalendlyCta.astro` — plain `<a href="https://calendly.com/fluttera/30min" target="_blank" rel="noopener">`, progressive popup enhancement; Calendly script loaded once in layout
- [ ] `<html>` gets `js` class via first inline script (no-JS never hides content)
- [ ] Verify: `npm run build` + parity script green; toggle `/` ↔ `/en/` works; CTA href correct without JS

### Phase 3: Sections + content (both locales)

- **Goal**: all ten sections final — copy, imagery, layout matching Figma reference
- [ ] `src/components/Hero.astro` + `DeviceMockup.astro` — eyebrow, giant "Fluttera" wordmark, "Flutter apps people actually ship." / DE equivalent, subline, dual CTA; browser-frame dashboard + floating phone + "one codebase, every screen" badge as layered HTML/CSS/SVG (no raster)
- [ ] `src/components/StatsBand.astro` — blue band: 100s IoT devices / DiGA MedTech / 1 codebase
- [ ] `src/components/WhatIBuild.astro` — dark section: 2 large cards (cross-platform native feel; MedTech & regulated) + 3 small (MVPs; native→Flutter migration; hardware & Linux) + AI-workflow/fractional-CTO banner
- [ ] `src/components/SelectedWork.astro` — 4 anonymized case cards (smart-home IoT; DiGA rehab; HR time & attendance; founder MVPs); cohesive premium imagery treatment
- [ ] `src/components/Process.astro` — 4 steps: Discovery, Architecture, Build, Launch & iterate
- [ ] `src/components/About.astro` — portrait (existing asset, re-treated), "One senior engineer, fully invested in your product.", 4 bullets incl. fractional CTO
- [ ] `src/components/Faq.astro` — 8 Q&A from dictionary (~4 educational + ~4 commercial: engagement/pricing, fractional CTO scope, responsible AI tooling, maintenance/handover)
- [ ] `src/components/Contact.astro` — "Let's build something" / "Lass uns etwas bauen", Calendly booking card (primary), contact card: tel +49 5242 412 9026, alex@fluttera.de, hours
- [ ] Assemble `index.astro` + `en/index.astro`; section `id`s + `data-testid`s; inline SVG icons (Lucide-copied, consistent stroke)
- [ ] Media: images via `astro:assets` (WebP/AVIF), videos → `public/` with `poster muted playsinline loop` + lazy; PDF kept; delete old `index.html`, `css/`, `js/`, root `assets/` after port
- [ ] Verify: `npm run build` + parity; visual pass vs each of 8 reference screenshots; one `<h1>`/page, alt text everywhere

### Phase 4: Motion + responsive polish

- **Goal**: award-level feel; flawless 360px→1920px+; reduced-motion safe
- [ ] `src/scripts/reveal.ts` — IntersectionObserver entrance reveals (single easing family, 200–600ms), stats count-up; gated on `.js` class + `prefers-reduced-motion`
- [ ] Hover microinteractions (cards, buttons), smooth anchor scroll, nav scroll behavior
- [ ] Responsive pass: hero mockup reflow on mobile, no horizontal overflow at any width, DE compound words at 360px (buttons/cards)
- [ ] A11y pass: contrast ≥ AA (blue band, dark section), visible focus, hamburger + FAQ keyboard operable
- [ ] Client JS budget ≤ ~30KB (excl. Calendly/gtag)
- [ ] Verify: `npm run build`; manual: reduced-motion emulation (content instant/visible), no-JS render complete, 360/768/1024/1440/1920 checks

### Phase 5: SEO/AEO + QA + launch

- **Goal**: crawlable by Google AND AI assistants; all gates green; production live
- [ ] Per-locale meta in `BaseLayout`: title ≤60, description ≤155, canonical, hreflang (`de`/`en`/`x-default`→de), OG/Twitter + designed 1200×630 OG image
- [ ] JSON-LD: `ProfessionalService`/`Person` (areaServed Germany/DACH, serviceArea incl. Berlin — structured data only), services list, `FAQPage` from same dictionary as FAQ UI, `WebSite`
- [ ] `public/robots.txt` — allow Googlebot/Bingbot/GPTBot/ClaudeBot/PerplexityBot/CCBot + sitemap ref; `public/llms.txt` — who/services/experience/engagement models/Germany/contact+booking links
- [ ] GA gtag `G-CEV6Q1NVH8` async in both locales
- [ ] TDD: Playwright smoke suite (behaviors first): DE home renders h1 + 10 section anchors; nav anchor scrolls; toggle swaps locale + `<html lang>`; Calendly CTA correct href (no popup test); mobile hamburger open/close/navigate; legal URLs 200 — stable `data-testid` selectors (journey coverage stands in for Flutter robot tests)
- [ ] CI: build + parity + `html-validate` + link check (lychee) + Playwright on push
- [ ] Lighthouse mobile+desktop, both locales: Perf/A11y/BP ≥95, SEO =100 (fix regressions)
- [ ] Rich Results / schema validator: FAQPage + ProfessionalService zero errors
- [ ] Post-deploy: fluttera.de HTTPS live, old URLs 200, robots/llms/sitemap reachable
- [ ] Verify: full CI green; Lighthouse thresholds met; production checklist above passes

## Risks / Out of scope

- **Risks**: (1) Pages source misconfig / CNAME loss → domain drop; mitigated by Phase-1 slice + manual settings step. (2) Design bar "not AI-generated" is subjective → validate against screenshots each phase, iterate. (3) DE copy quality — needs owner review before launch.
- **Out of scope**: blog, separate "Flutter-Entwickler" SEO page, contact-form backend, EN legal pages, CMS.
