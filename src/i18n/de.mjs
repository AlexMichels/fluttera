// Deutsches Wörterbuch. Struktur muss mit en.mjs übereinstimmen
// (wird von scripts/check-i18n-parity.mjs beim Build geprüft).
// *text* innerhalb von Strings wird als hervorgehobenes (kursives Serif-)Segment gerendert.

export default {
  locale: 'de',
  htmlLang: 'de',
  meta: {
    title: 'Fluttera — Senior Flutter Freelancer & Fractional CTO',
    description:
      'Senior-Flutter-Entwicklung aus Deutschland: Apps für iOS, Android, Web & Desktop aus einer Codebasis — von Smart Home bis MedTech (DiGA). Jetzt Termin buchen.',
    ogLocale: 'de_DE',
  },
  skipLink: 'Zum Inhalt springen',
  nav: {
    menuLabel: 'Menü',
    openMenu: 'Menü öffnen',
    closeMenu: 'Menü schließen',
    links: [
      { href: '#services', label: 'Leistungen' },
      { href: '#work', label: 'Referenzen' },
      { href: '#process', label: 'Prozess' },
      { href: '#about', label: 'Über mich' },
      { href: '#faq', label: 'FAQ' },
      { href: '#contact', label: 'Kontakt' },
    ],
    cta: 'Termin buchen',
    langSwitch: { label: 'English', short: 'EN', href: '/en/', ariaLabel: 'Switch to the English version' },
  },
  hero: {
    eyebrow: 'Senior Freelance Flutter-Entwickler · Deutschland',
    headline: 'Flutter-Apps, die *wirklich* live gehen.',
    sub: 'Ein Senior-Entwickler. iOS, Android, Web und Desktop aus einer Codebasis — erprobt an Europas größter Smart-Home-App und verschreibungsfähiger digitaler Medizin.',
    ctaPrimary: 'Projekt besprechen',
    ctaSecondary: 'Referenzen ansehen',
    availability: 'Verfügbar für neue Projekte',
    badge: 'Eine Codebasis — jeder Bildschirm',
    badgePlatforms: 'iOS · Android · Web · Desktop',
    phoneCaption: 'Smart Home — 100+ Gerätetypen, aus einer Codebasis',
    scrollHint: 'Scrollen',
    phoneUi: {
      header: 'Zuhause',
      scenes: ['Morgen', 'Abend', 'Film'],
      tempRoom: 'Wohnzimmer',
      tempValue: '21,5',
      tempUnit: '°C',
      tempState: 'Heizt auf Wohlfühltemperatur',
      devices: [
        { n: 'Deckenlicht', s: 'An · 80 %', on: true },
        { n: 'Thermostat', s: '21,5 °C', on: true },
        { n: 'Rollladen', s: 'Offen', on: false },
        { n: 'Steckdose', s: 'Aus', on: false },
      ],
    },
  },
  stats: {
    ariaLabel: 'Erfahrung auf einen Blick',
    items: [
      {
        value: '100',
        suffix: '+',
        label: 'IoT-Gerätetypen',
        detail: 'gesteuert aus einer europaweit genutzten Smart-Home-App',
      },
      {
        value: 'DiGA',
        suffix: '',
        label: 'verschreibungsfähige MedTech',
        detail: 'von der frühen Phase bis zum regulierten Live-Produkt',
      },
      {
        value: '1',
        suffix: '',
        label: 'Codebasis, vier Plattformen',
        detail: 'iOS, Android, Web und Desktop aus derselben Quelle',
      },
    ],
    ndaNote: 'Alle Projekte unter NDA — Referenzen im persönlichen Gespräch.',
  },
  services: {
    id: 'services',
    eyebrow: 'Leistungen',
    heading: 'Was ich *baue*',
    intro: 'Keine Junior-Bank hinter einem Account-Manager. Ein Senior-Entwickler, der in regulierten Branchen, im Großmaßstab und in Startups ausgeliefert hat.',
    cards: [
      {
        size: 'large',
        title: 'Cross-Platform-Apps, die sich nativ anfühlen',
        body: 'Architektur von Tag eins richtig: Riverpod, Feature-first-Struktur, Firebase oder Ihr Backend, pixelgenaue UI auf jeder Bildschirmgröße. Apps, die Ihre Nutzer nicht von nativ unterscheiden können — weil sie es in Performance und Gefühl auch nicht sind.',
        tags: ['Riverpod', 'Feature-first', 'Firebase', 'CI/CD'],
      },
      {
        size: 'large',
        title: 'MedTech & regulierte Apps',
        body: 'Aus DiGA-Erfahrung weiß ich, was regulierte Software verlangt: prüfsichere Datenverarbeitung, Privacy by Design, dokumentierte Qualität. Ich baue Apps, die jeder Prüfung standhalten — vom Konzept bis zur Zertifizierungsbegleitung.',
        tags: ['DiGA', 'DSGVO', 'Prüfsicher', 'Qualitätsdoku'],
      },
      {
        size: 'small',
        title: 'Startup-MVPs',
        body: 'Von der Idee zum testbaren Produkt in Wochen statt Quartalen — mit einer Architektur, die den Pivot überlebt.',
        tags: [],
      },
      {
        size: 'small',
        title: 'App-Rettung & Migration',
        body: 'Festgefahrene Apps wieder flott machen — oder zwei alternde native Codebasen schrittweise in eine moderne überführen, ohne Big-Bang-Risiko.',
        tags: [],
      },
      {
        size: 'small',
        title: 'Hardware, Linux & Embedded',
        body: 'Flutter jenseits des Smartphones: eigene Geräte, Kiosk-Systeme und Linux-Targets, nah an der Hardware.',
        tags: [],
      },
    ],
    banner: {
      eyebrow: 'AI-natives Arbeiten',
      title: 'Senior-Urteilsvermögen, multipliziert mit modernem Werkzeug.',
      body: 'Ich arbeite mit Claude Code, Codex und einer gehärteten AI-Toolchain — Zeile für Zeile reviewt, getestet, über CI ausgeliefert. Sie bekommen Senior-Qualität in einem Tempo, das ein klassisches Team nicht halten kann. Offen auch für Founder-Partnerschaften und Fractional-CTO-Mandate.',
    },
  },
  work: {
    id: 'work',
    eyebrow: 'Referenzen',
    heading: 'Arbeit, die Gewicht hat',
    intro: 'Eine Auswahl an Projekten. Die Kunden bleiben anonym — die Ergebnisse nicht.',
    cards: [
      {
        category: 'Smart Home · IoT',
        title: 'Europas größte Smart-Home-App',
        body: 'Feature-Entwicklung im Kernteam einer führenden Smart-Home-Plattform: Hunderte Gerätetypen, von Licht bis Heizung, zuverlässig gesteuert aus einer Flutter-App.',
        facts: [
          { k: 'Rolle', v: 'Feature-Entwicklung, Kernteam' },
          { k: 'Umfang', v: '100+ Gerätetypen, Millionen Installationen' },
          { k: 'Stack', v: 'Flutter, IoT-Anbindung' },
        ],
      },
      {
        category: 'MedTech · DiGA',
        title: 'Eine Reha-App, die Ärzte verschreiben',
        body: 'Von der frühen Phase zum regulierten Live-Produkt: eine digitale Gesundheitsanwendung (DiGA) nach medizinischen Qualitätsstandards — Datenschutz, Prüfbarkeit und klinische Ernsthaftigkeit inklusive.',
        facts: [
          { k: 'Rolle', v: 'Flutter-Entwicklung, Frühphase → Markt' },
          { k: 'Rahmen', v: 'Reguliert, verschreibungsfähig (DiGA)' },
          { k: 'Fokus', v: 'Datenschutz, prüfsichere Qualität' },
        ],
      },
      {
        category: 'HR · Operations',
        title: 'Zeiterfassung für den täglichen Betrieb',
        body: 'Eine Plattform für Arbeitszeiterfassung, die Teams wirklich jeden Tag nutzen: schnelle Erfassung, saubere Freigaben, verlässliche Exporte — langweilig im besten Sinne.',
        facts: [
          { k: 'Rolle', v: 'App-Entwicklung, End-to-End' },
          { k: 'Einsatz', v: 'Täglich genutztes B2B-Werkzeug' },
          { k: 'Plattformen', v: 'Mobile + Web' },
        ],
      },
      {
        category: 'Startups · MVPs',
        title: 'MVPs, die den ersten Kontakt überleben',
        body: 'Founder-MVPs vom Pitch-Deck in die App-Stores: hart priorisiert, schlank gebaut, so architektiert, dass Version 2 kein Neuanfang ist.',
        facts: [
          { k: 'Rolle', v: 'Konzept, Architektur, Entwicklung' },
          { k: 'Tempo', v: 'In Wochen im Store' },
          { k: 'Ergebnis', v: 'Pivot-feste Architektur' },
        ],
      },
    ],
  },
  process: {
    id: 'process',
    eyebrow: 'Prozess',
    heading: 'Vom ersten Gespräch bis in den App Store',
    intro: 'Ein klarer Ablauf in vier Schritten. Sie wissen jederzeit, wo Ihr Produkt steht.',
    steps: [
      {
        title: 'Discovery',
        body: 'Ein kostenloses 30-Minuten-Gespräch, dann ein fokussierter Deep-Dive: Ziele, Nutzer, Rahmenbedingungen, Bestandssysteme. Sie bekommen eine ehrliche Einschätzung — auch dazu, ob Flutter für Sie das richtige Werkzeug ist.',
      },
      {
        title: 'Architektur',
        body: 'Technisches Fundament vor dem ersten Feature: Plattformstrategie, Datenmodell, API-Design, CI/CD-Pipeline. Ein schriftlicher Plan mit Meilensteinen und einer realistischen Schätzung.',
      },
      {
        title: 'Build',
        body: 'Wöchentlich auslieferbare Inkremente, Demo-Builds auf Ihrem Gerät ab Woche eins. Getesteter, reviewter Code — Sie sehen Fortschritt, keine Versprechen.',
      },
      {
        title: 'Launch & Iteration',
        body: 'Store-Einreichung, Monitoring, Crash-Reporting — danach datenbasierte Weiterentwicklung. Auf Wunsch: Wartung, Ausbau oder eine dokumentierte Übergabe an Ihr Team.',
      },
    ],
  },
  about: {
    id: 'about',
    eyebrow: 'Über mich',
    heading: 'Ein Senior-Entwickler, der Ihr Produkt *zu seinem macht*',
    paragraphs: [
      'Ich bin Alexander Michels — Flutter-Entwickler seit den frühen Tagen des Frameworks, mit langjähriger Industrieerfahrung in Smart Home, digitaler Gesundheit, HR-Software und Startups.',
      'Wer mit Fluttera arbeitet, arbeitet mit mir. Keine Übergabe an ein Junior-Team, keine Stille Post über Account-Manager: Die Person aus dem ersten Gespräch ist die Person, die Ihren Code schreibt.',
    ],
    bullets: [
      'End-to-End: Architektur, UI, Backend-Anbindung, Store-Release',
      'Erfahrung in regulierten Branchen: MedTech (DiGA), prüfsichere Qualität',
      'AI-native Toolchain für Senior-Qualität im Startup-Tempo',
      'Verfügbar als Fractional CTO oder langfristiger Founder-Partner',
    ],
    portraitAlt: 'Porträt von Alexander Michels, Senior Flutter-Entwickler',
  },
  faq: {
    id: 'faq',
    eyebrow: 'FAQ',
    heading: 'Fragen, die Entscheider wirklich stellen',
    escape: {
      title: 'Ihre Frage ist nicht dabei?',
      body: 'Schreiben Sie mir direkt — Sie bekommen eine ehrliche Antwort, keine Verkaufsmail.',
      cta: 'alex@fluttera.de',
    },
    items: [
      {
        q: 'Was ist Flutter — und warum ist es eine kluge Wahl?',
        a: 'Flutter ist Googles Open-Source-UI-Toolkit für nativ kompilierte Apps auf iOS, Android, Web und Desktop aus einer einzigen Codebasis. Für Sie heißt das: ein Entwickler, eine Codebasis und konsistente Qualität auf jeder Plattform — typischerweise deutlich günstiger und schneller, als jede Plattform einzeln zu entwickeln. Unternehmen wie BMW, Toyota und Google selbst setzen Flutter produktiv ein.',
      },
      {
        q: 'Ist Flutter die richtige Wahl für mein Projekt?',
        a: 'Für die meisten Business-Apps: ja. Alles, was auf mehreren Plattformen laufen soll, eine individuelle, hochwertige UI braucht oder schnell iterieren muss, ist bei Flutter richtig. Weniger geeignet ist es für stark plattformspezifische Produkte wie aufwendige 3D-Spiele. Im ersten Gespräch sage ich Ihnen ehrlich, ob Flutter passt — und falls nicht, was stattdessen.',
      },
      {
        q: 'Wie lange dauert ein App-Projekt?',
        a: 'Ein fokussiertes MVP dauert typischerweise sechs bis zwölf Wochen, ein vollständiges Produkt drei bis sechs Monate. Die größten Faktoren sind Umfang, Backend-Komplexität und Abstimmungszyklen. Nach der Discovery-Phase erhalten Sie einen schriftlichen Plan mit Meilensteinen und einem realistischen Zeitrahmen — keine optimistische Schätzung ins Blaue.',
      },
      {
        q: 'Funktioniert Flutter wirklich auch für Web und Desktop?',
        a: 'Ja. Eine Codebasis deckt iOS, Android, Web, Windows, macOS und Linux ab — inklusive Embedded und eigener Hardware. Ich habe Flutter auf all diesen Zielplattformen ausgeliefert, von Consumer-Apps bis zu Linux-basierten Geräten.',
      },
      {
        q: 'Wie arbeiten wir zusammen — und was kostet das?',
        a: 'Zwei Modelle: projektbasiert mit festem Umfang und Meilenstein-Zahlungen oder laufende Zusammenarbeit zum Tagessatz. Beides beginnt mit einem kostenlosen 30-Minuten-Gespräch und einem schriftlichen Angebot mit klarer Schätzung. Remote-first in Deutschland und Europa, vor Ort nach Absprache — und ohne Agentur-Overhead auf der Rechnung.',
      },
      {
        q: 'Was macht ein Fractional CTO eigentlich?',
        a: 'Technische Führung auf Senior-Niveau zum Bruchteil einer Vollzeitstelle: einige Tage pro Monat für Architekturentscheidungen, Technologiestrategie, Einstellung und Review von Entwicklern sowie ehrliche Kontrolle von Dienstleistern. Ideal für Startups und Mittelständler, die erfahrenes Urteilsvermögen brauchen, bevor sie einen Vollzeit-CTO brauchen.',
      },
      {
        q: 'Sie arbeiten mit AI-Tools — was bedeutet das für Qualität und IP?',
        a: 'Ich nutze Werkzeuge wie Claude Code und Codex, um schneller zu liefern — nie, um Urteilsvermögen zu ersetzen. Jede Zeile wird auf Senior-Niveau reviewt, ist durch Tests abgedeckt und läuft über CI. Ihr Code und Ihre Daten werden unter NDA und mit datenschutzbewusster Tool-Konfiguration behandelt; die IP gehört vollständig Ihnen.',
      },
      {
        q: 'Was passiert nach dem Launch?',
        a: 'Sie entscheiden: laufende Wartung und Weiterentwicklung oder eine saubere Übergabe. In beiden Fällen erhalten Sie dokumentierten, getesteten Code mit fertiger CI/CD — sodass jedes kompetente Team jederzeit übernehmen kann. Kein Lock-in durch Intransparenz.',
      },
    ],
  },
  contact: {
    id: 'contact',
    eyebrow: 'Kontakt',
    heading: 'Bauen wir etwas, *das live geht*.',
    sub: 'Ein 30-Minuten-Gespräch — kostenlos, direkt, ohne Vertriebstheater. Wir sprechen über Ihr Produkt; Sie bekommen eine ehrliche technische Einschätzung.',
    personal: 'Sie sprechen mit mir — nicht mit einem Vertrieb.',
    booking: {
      title: '30-Minuten-Gespräch buchen',
      body: 'Wählen Sie einen Termin, der Ihnen passt. Wir sprechen über Ihr Projekt, den Zeitrahmen und ob es passt.',
      cta: 'Termin vereinbaren',
      note: 'Kostenlos · Unverbindlich · Deutsch oder Englisch',
    },
    microRow: 'Antwort < 24 h · Remote oder vor Ort (DACH) · DE + EN',
    direct: {
      title: 'Lieber direkt?',
      emailLabel: 'E-Mail',
      phoneLabel: 'Telefon',
      responseNote: 'Antwort innerhalb von 24 Stunden an Werktagen.',
    },
  },
  footer: {
    tagline: 'Freelance-Flutter-Entwicklung — Deutschland',
    legal: [
      { href: '/impressum.html', label: 'Impressum' },
      { href: '/datenschutz.html', label: 'Datenschutz' },
    ],
    copyright: '© 2026 Fluttera · Alexander Michels',
    colophon: 'Statisch gebaut, von Hand gesetzt in Fraunces, Switzer & IBM Plex Mono.',
    backToTop: 'Nach oben',
  },
  legalPage: {
    backHome: 'Zurück zur Startseite',
  },
}
