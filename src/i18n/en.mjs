// English dictionary. Structure must stay in parity with de.mjs
// (enforced by scripts/check-i18n-parity.mjs at build time).
// *text* inside strings renders as an emphasized (italic serif) segment.

export default {
  locale: 'en',
  htmlLang: 'en',
  meta: {
    title: 'Fluttera — Senior Flutter Freelancer & Fractional CTO',
    description:
      'Senior freelance Flutter development from Germany: iOS, Android, web & desktop apps from one codebase — from smart home to regulated MedTech. Book a call.',
    ogLocale: 'en_US',
  },
  skipLink: 'Skip to content',
  nav: {
    menuLabel: 'Menu',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    links: [
      { href: '#services', label: 'Services' },
      { href: '#work', label: 'Work' },
      { href: '#process', label: 'Process' },
      { href: '#about', label: 'About' },
      { href: '#faq', label: 'FAQ' },
      { href: '#contact', label: 'Contact' },
    ],
    cta: 'Book a call',
    langSwitch: { label: 'Deutsch', short: 'DE', href: '/', ariaLabel: 'Zur deutschen Version wechseln' },
  },
  hero: {
    eyebrow: 'Senior Freelance Flutter Developer · Germany',
    headline: 'Flutter apps that *actually ship*.',
    sub: 'One senior engineer. iOS, Android, web and desktop from a single codebase — proven on Europe’s largest smart-home app and prescription-grade digital health.',
    ctaPrimary: 'Start a project',
    ctaSecondary: 'See selected work',
    availability: 'Available for new projects',
    badge: 'One codebase — every screen',
    badgePlatforms: 'iOS · Android · Web · Desktop',
    phoneCaption: 'Smart home — 100+ device types, from one codebase',
    scrollHint: 'Scroll',
    phoneUi: {
      header: 'Home',
      scenes: ['Morning', 'Evening', 'Movie'],
      tempRoom: 'Living room',
      tempValue: '21.5',
      tempUnit: '°C',
      tempState: 'Heating to comfort level',
      devices: [
        { n: 'Ceiling light', s: 'On · 80 %', on: true },
        { n: 'Thermostat', s: '21.5 °C', on: true },
        { n: 'Blinds', s: 'Open', on: false },
        { n: 'Plug', s: 'Off', on: false },
      ],
    },
  },
  stats: {
    ariaLabel: 'Proof at a glance',
    items: [
      {
        value: '100',
        suffix: '+',
        label: 'IoT device types',
        detail: 'controlled from one smart-home app used across Europe',
      },
      {
        value: 'DiGA',
        suffix: '',
        label: 'prescription-grade MedTech',
        detail: 'taken from early stage to a live, regulated product',
      },
      {
        value: '1',
        suffix: '',
        label: 'codebase, four platforms',
        detail: 'iOS, Android, web and desktop from the same source',
      },
    ],
    ndaNote: 'All projects under NDA — references available in a personal conversation.',
  },
  services: {
    id: 'services',
    eyebrow: 'Services',
    heading: 'What I *build*',
    intro: 'Not a bench of juniors behind an account manager. One senior engineer who has shipped in regulated, high-scale and startup environments.',
    cards: [
      {
        size: 'large',
        title: 'Cross-platform apps that feel native',
        body: 'Architecture done right from day one: Riverpod, feature-first structure, Firebase or your backend, pixel-accurate UI on every screen size. Apps your users can’t tell from native — because in performance and feel, they aren’t.',
        tags: ['Riverpod', 'Feature-first', 'Firebase', 'CI/CD'],
      },
      {
        size: 'large',
        title: 'MedTech & regulated apps',
        body: 'From DiGA experience I know what regulated software demands: audit-ready data handling, privacy by design, documented quality. I build apps that pass scrutiny — from concept to certification support.',
        tags: ['DiGA', 'GDPR', 'Audit-ready', 'Quality docs'],
      },
      {
        size: 'small',
        title: 'Startup MVPs',
        body: 'From idea to testable product in weeks, not quarters — with an architecture that survives the pivot.',
        tags: [],
      },
      {
        size: 'small',
        title: 'App rescue & migration',
        body: 'Getting stuck apps moving again — or merging two aging native codebases into one modern one, without big-bang risk.',
        tags: [],
      },
      {
        size: 'small',
        title: 'Hardware, Linux & embedded',
        body: 'Flutter beyond the phone: custom devices, kiosk systems and Linux targets, close to the metal.',
        tags: [],
      },
    ],
    banner: {
      eyebrow: 'AI-native workflow',
      title: 'Senior judgment, multiplied by modern tooling.',
      body: 'I work with Claude Code, Codex and a hardened AI toolchain — reviewed line by line, tested, shipped through CI. You get senior quality at a pace a traditional team can’t match. Also open to founder partnerships and fractional-CTO engagements.',
    },
  },
  work: {
    id: 'work',
    eyebrow: 'Selected work',
    heading: 'Work that carries weight',
    intro: 'A selection of engagements. Clients stay anonymous — the results don’t.',
    cards: [
      {
        category: 'Smart Home · IoT',
        title: 'Europe’s largest smart-home app',
        body: 'Feature development in the core team of a flagship smart-home platform: hundreds of device types, from lighting to heating, controlled reliably from one Flutter app.',
        facts: [
          { k: 'Role', v: 'Feature development, core team' },
          { k: 'Scale', v: '100+ device types, millions of installs' },
          { k: 'Stack', v: 'Flutter, IoT integration' },
        ],
      },
      {
        category: 'MedTech · DiGA',
        title: 'A rehab app doctors can prescribe',
        body: 'From early stage to a live regulated product: a digital health application (DiGA) built to medical-grade quality standards — data protection, auditability and clinical seriousness included.',
        facts: [
          { k: 'Role', v: 'Flutter development, early stage → market' },
          { k: 'Context', v: 'Regulated, prescription-grade (DiGA)' },
          { k: 'Focus', v: 'Data protection, audit-ready quality' },
        ],
      },
      {
        category: 'HR · Operations',
        title: 'Time & attendance for daily operations',
        body: 'A workforce time-tracking platform teams actually use every day: fast capture, clean approvals, reliable exports — boring in the best possible way.',
        facts: [
          { k: 'Role', v: 'App development, end-to-end' },
          { k: 'Usage', v: 'Daily-use B2B tooling' },
          { k: 'Platforms', v: 'Mobile + web' },
        ],
      },
      {
        category: 'Startups · MVPs',
        title: 'MVPs that survive first contact',
        body: 'Founder MVPs taken from a pitch deck to the app stores: scoped hard, built lean, architected so version 2 doesn’t mean starting over.',
        facts: [
          { k: 'Role', v: 'Concept, architecture, development' },
          { k: 'Pace', v: 'Weeks to the stores' },
          { k: 'Result', v: 'Pivot-proof architecture' },
        ],
      },
    ],
  },
  process: {
    id: 'process',
    eyebrow: 'Process',
    heading: 'From first call to app store',
    intro: 'A clear, four-step engagement. You always know where your product stands.',
    steps: [
      {
        title: 'Discovery',
        body: 'A free 30-minute call, then a focused deep-dive: goals, users, constraints, existing systems. You get an honest assessment — including whether Flutter is the right tool for you.',
      },
      {
        title: 'Architecture',
        body: 'Technical foundation before the first feature: platform strategy, data model, API design, CI/CD pipeline. A written plan with milestones and a realistic estimate.',
      },
      {
        title: 'Build',
        body: 'Weekly shippable increments, demo builds on your device from week one. Tested, reviewed code — you see progress, not promises.',
      },
      {
        title: 'Launch & iterate',
        body: 'Store submission, monitoring, crash reporting — then data-driven iteration. On request: maintenance, further development or a documented handover to your team.',
      },
    ],
  },
  about: {
    id: 'about',
    eyebrow: 'About',
    heading: 'One senior engineer, *fully invested* in your product',
    paragraphs: [
      'I’m Alexander Michels — Flutter developer since the framework’s early days, with years of industry experience across smart home, digital health, HR software and startups.',
      'When you work with Fluttera, you work with me. No hand-offs to a junior team, no account-manager telephone game: the person you talk to in the first call is the person who writes your code.',
    ],
    bullets: [
      'End-to-end: architecture, UI, backend integration, store release',
      'Regulated-industry experience: MedTech (DiGA), audit-ready quality',
      'AI-native toolchain for senior quality at startup pace',
      'Available as fractional CTO or long-term founder partner',
    ],
    portraitAlt: 'Portrait of Alexander Michels, senior Flutter developer',
  },
  faq: {
    id: 'faq',
    eyebrow: 'FAQ',
    heading: 'Questions buyers actually ask',
    escape: {
      title: 'Your question isn’t here?',
      body: 'Write to me directly — you’ll get an honest answer, not a sales email.',
      cta: 'alex@fluttera.de',
    },
    items: [
      {
        q: 'What is Flutter — and why is it a smart choice?',
        a: 'Flutter is Google’s open-source UI toolkit for building natively compiled apps for iOS, Android, web and desktop from a single codebase. For you that means one engineer, one codebase and consistent quality on every platform — typically at significantly lower cost and time than building each platform separately. Companies like BMW, Toyota and Google itself ship production apps with Flutter.',
      },
      {
        q: 'Is Flutter the right choice for my project?',
        a: 'For most business apps, yes: anything that should run on several platforms, needs a custom polished UI, or has to iterate quickly. It is less suited to heavily platform-specific products like high-end 3D games. In our first call I’ll tell you honestly whether Flutter fits — and if it doesn’t, what does.',
      },
      {
        q: 'How long does an app project take?',
        a: 'A focused MVP typically takes six to twelve weeks; a full product three to six months. The biggest factors are scope, backend complexity and review cycles. After the discovery phase you get a written plan with milestones and a realistic timeline — not an optimistic guess.',
      },
      {
        q: 'Does Flutter really work for web and desktop too?',
        a: 'Yes. One codebase covers iOS, Android, web, Windows, macOS and Linux — including embedded and custom hardware. I have shipped Flutter on all of these targets, from consumer smartphone apps to Linux-based devices.',
      },
      {
        q: 'How do we work together — and what does it cost?',
        a: 'Two models: project-based with a fixed scope and milestone payments, or ongoing collaboration at a day rate. Both start with a free 30-minute call and a written proposal with a clear estimate. Remote-first across Germany and Europe, on-site by arrangement — and no agency overhead on the invoice.',
      },
      {
        q: 'What does a fractional CTO actually do?',
        a: 'Senior technical leadership at a fraction of a full-time hire: a few days per month for architecture decisions, technology strategy, hiring and reviewing developers, and keeping vendors honest. Ideal for startups and mid-sized companies that need experienced judgment before they need a full-time CTO.',
      },
      {
        q: 'You work with AI tools — what does that mean for quality and IP?',
        a: 'I use tools like Claude Code and Codex to move faster — never to skip judgment. Every line is senior-reviewed, covered by tests and shipped through CI. Your code and data are handled under NDA with privacy-conscious tool configuration; the IP is fully yours.',
      },
      {
        q: 'What happens after launch?',
        a: 'Your choice: ongoing maintenance and further development, or a clean handover. Either way you get documented, tested code with CI/CD in place — so any competent team can take over at any time. No lock-in by obscurity.',
      },
    ],
  },
  contact: {
    id: 'contact',
    eyebrow: 'Contact',
    heading: 'Let’s build *something that ships*.',
    sub: 'A 30-minute intro call — free, direct, no sales choreography. We talk about your product; you get an honest technical assessment.',
    personal: 'You talk to me — not to a sales team.',
    booking: {
      title: 'Book a 30-minute call',
      body: 'Pick a slot that suits you. We’ll discuss your project, timeline and whether we’re a fit.',
      cta: 'Book an appointment',
      note: 'Free · No obligation · English or German',
    },
    microRow: 'Reply < 24 h · Remote or on-site (DACH) · EN + DE',
    direct: {
      title: 'Prefer it direct?',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      responseNote: 'Replies within 24 hours on business days.',
    },
  },
  footer: {
    tagline: 'Freelance Flutter development — Germany',
    legal: [
      { href: '/impressum.html', label: 'Impressum' },
      { href: '/datenschutz.html', label: 'Privacy policy' },
    ],
    copyright: '© 2026 Fluttera · Alexander Michels',
    colophon: 'Statically built, hand-set in Fraunces, Switzer & IBM Plex Mono.',
    backToTop: 'Back to top',
  },
  legalPage: {
    backHome: 'Back to home',
  },
}
