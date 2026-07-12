// All site interactions. Progressive enhancement only — the page is fully
// usable without any of this (content visible, anchors work, Calendly CTAs
// are plain links that open in a new tab).

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

/* ————— Scroll reveals + count-ups + rule draws ————— */
function setupReveals() {
  const targets = document.querySelectorAll('.reveal, .rule-draw')
  if (!('IntersectionObserver' in window) || reducedMotion.matches) {
    targets.forEach((el) => el.classList.add('revealed'))
    return
  }
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        entry.target.classList.add('revealed')
        io.unobserve(entry.target)
      }
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
  )
  targets.forEach((el) => io.observe(el))
}

/* ————— Nav: scrolled state, dark-section inversion, mobile menu ————— */
function setupNav() {
  const nav = document.querySelector('[data-nav]')
  if (!nav) return

  // Scrolled state + dark inversion while a midnight section passes under the bar.
  const darkSections = [...document.querySelectorAll('[data-theme="dark"]')]
  const navH = nav.offsetHeight
  const onScroll = () => {
    nav.classList.toggle('nav--scrolled', window.scrollY > 8)
    const overDark = darkSections.some((s) => {
      const r = s.getBoundingClientRect()
      return r.top < navH && r.bottom > 0
    })
    nav.classList.toggle('nav--dark', overDark)
  }
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })

  const toggle = nav.querySelector('[data-menu-toggle]')
  const menu = nav.querySelector('[data-menu]')
  if (!toggle || !menu) return

  const setOpen = (open) => {
    nav.classList.toggle('nav--open', open)
    toggle.setAttribute('aria-expanded', String(open))
    toggle.setAttribute('aria-label', open ? toggle.dataset.labelClose : toggle.dataset.labelOpen)
    document.documentElement.classList.toggle('menu-open', open)
  }
  toggle.addEventListener('click', () => setOpen(!nav.classList.contains('nav--open')))
  menu.addEventListener('click', (e) => {
    if (e.target.closest('a')) setOpen(false)
  })
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('nav--open')) {
      setOpen(false)
      toggle.focus()
    }
  })
}

/* ————— Calendly: plain links enhanced into a popup once the widget loads ————— */
function setupCalendly() {
  const links = document.querySelectorAll('[data-calendly]')
  if (links.length === 0) return
  let loading = false

  const load = () => {
    if (loading) return
    loading = true
    const css = document.createElement('link')
    css.rel = 'stylesheet'
    css.href = 'https://assets.calendly.com/assets/external/widget.css'
    document.head.appendChild(css)
    const js = document.createElement('script')
    js.src = 'https://assets.calendly.com/assets/external/widget.js'
    js.async = true
    document.head.appendChild(js)
  }

  // Warm up the widget when a CTA is approached; fall back to idle load.
  links.forEach((a) => {
    a.addEventListener('pointerenter', load, { once: true })
    a.addEventListener('focus', load, { once: true })
    a.addEventListener('click', (e) => {
      if (window.Calendly) {
        e.preventDefault()
        window.Calendly.initPopupWidget({ url: a.href })
      }
      // else: default behavior — the plain link opens Calendly in a new tab.
    })
  })
  if ('requestIdleCallback' in window) {
    requestIdleCallback(load, { timeout: 4000 })
  } else {
    setTimeout(load, 4000)
  }
}

/* ————— Language toggle: preserve the current section anchor ————— */
function setupLangToggle() {
  document.querySelectorAll('[data-lang-switch]').forEach((a) => {
    a.addEventListener('click', () => {
      if (location.hash) a.href = a.getAttribute('href').split('#')[0] + location.hash
    })
  })
}

init()

function init() {
  setupReveals()
  setupNav()
  setupCalendly()
  setupLangToggle()
}
