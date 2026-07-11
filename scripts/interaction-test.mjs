// Interaction smoke test: nav states, mobile menu, FAQ, language toggle,
// Calendly fallback hrefs, no-JS rendering, console errors.
// Usage: node scripts/interaction-test.mjs <outDir> [baseUrl]
import puppeteer from 'puppeteer-core'

const outDir = process.argv[2] ?? 'shots'
const base = process.argv[3] ?? 'http://localhost:4321'
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'

const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new' })
const results = []
const ok = (name, cond, extra = '') => results.push(`${cond ? 'PASS' : 'FAIL'} ${name}${extra ? ' — ' + extra : ''}`)

// —— Desktop checks ——
{
  const page = await browser.newPage()
  const errors = []
  page.on('pageerror', (e) => errors.push(String(e)))
  page.on('console', (m) => m.type() === 'error' && errors.push(m.text()))
  await page.setViewport({ width: 1440, height: 900 })
  await page.goto(`${base}/`, { waitUntil: 'networkidle0' })

  // Calendly CTAs are real links
  const hrefs = await page.$$eval('[data-calendly]', (as) => as.map((a) => a.href))
  ok('calendly hrefs', hrefs.length >= 3 && hrefs.every((h) => h.startsWith('https://calendly.com/fluttera/30min')), `${hrefs.length} CTAs`)

  // Language toggle preserves hash
  await page.evaluate(() => (location.hash = '#faq'))
  const enHref = await page.$eval('[data-lang-switch]', (a) => {
    a.addEventListener('click', (e) => e.preventDefault(), { once: true })
    a.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }))
    return a.href
  })
  ok('lang toggle hash', enHref.endsWith('/en/#faq'), enHref)

  // Nav dark inversion over contact (scroll past the anchor offset so the
  // dark section actually sits underneath the nav bar)
  await page.evaluate(() => {
    const top = document.querySelector('#contact').getBoundingClientRect().top + window.scrollY
    window.scrollTo({ top: top + 200, behavior: 'instant' })
  })
  await new Promise((r) => setTimeout(r, 700))
  const navDark = await page.$eval('[data-nav]', (n) => n.classList.contains('nav--dark'))
  ok('nav dark inversion', navDark)
  await page.screenshot({ path: `${outDir}/it-nav-dark.png` })

  // Nav back to light over process
  await page.evaluate(() => {
    const top = document.querySelector('#process').getBoundingClientRect().top + window.scrollY
    window.scrollTo({ top: top + 100, behavior: 'instant' })
  })
  await new Promise((r) => setTimeout(r, 700))
  const navLight = await page.$eval('[data-nav]', (n) => !n.classList.contains('nav--dark') && n.classList.contains('nav--scrolled'))
  ok('nav light + scrolled', navLight)

  // FAQ opens
  await page.evaluate(() => document.querySelector('#faq').scrollIntoView())
  await page.click('.faq-item__q')
  await new Promise((r) => setTimeout(r, 500))
  const faqOpen = await page.$eval('.faq-item', (d) => d.open)
  ok('faq opens', faqOpen)
  await page.screenshot({ path: `${outDir}/it-faq-open.png` })

  ok('no console errors (desktop)', errors.length === 0, errors.slice(0, 3).join(' | '))
  await page.close()
}

// —— Mobile menu ——
{
  const page = await browser.newPage()
  await page.setViewport({ width: 390, height: 844 })
  await page.goto(`${base}/`, { waitUntil: 'networkidle0' })
  await page.click('[data-menu-toggle]')
  await new Promise((r) => setTimeout(r, 500))
  const open = await page.$eval('[data-nav]', (n) => n.classList.contains('nav--open'))
  const expanded = await page.$eval('[data-menu-toggle]', (b) => b.getAttribute('aria-expanded'))
  ok('mobile menu opens', open && expanded === 'true')
  await page.screenshot({ path: `${outDir}/it-mobile-menu.png` })
  await page.click('.nav__link')
  await new Promise((r) => setTimeout(r, 700))
  const closed = await page.$eval('[data-nav]', (n) => !n.classList.contains('nav--open'))
  const scrolled = await page.evaluate(() => window.scrollY > 100)
  ok('menu closes + navigates on link', closed && scrolled, `scrollY>100: ${scrolled}`)
  await page.close()
}

// —— No-JS rendering ——
{
  const page = await browser.newPage()
  await page.setJavaScriptEnabled(false)
  await page.setViewport({ width: 1440, height: 900 })
  await page.goto(`${base}/`, { waitUntil: 'networkidle0' })
  const visible = await page.evaluate(() => {
    const h1 = document.querySelector('h1')
    const s = getComputedStyle(h1)
    return s.opacity === '1' && document.documentElement.className.indexOf('js') === -1
  })
  ok('no-JS content visible', visible)
  const anchors = await page.$$eval('main [id]', (els) => els.map((e) => e.id))
  ok('section anchors present', ['services', 'work', 'process', 'about', 'faq', 'contact'].every((id) => anchors.includes(id)), anchors.join(','))
  await page.close()
}

// —— Reduced motion ——
{
  const page = await browser.newPage()
  await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }])
  await page.setViewport({ width: 1440, height: 900 })
  await page.goto(`${base}/`, { waitUntil: 'networkidle0' })
  await new Promise((r) => setTimeout(r, 300))
  const statsVisible = await page.evaluate(() => {
    const el = document.querySelector('.stats__item')
    return getComputedStyle(el).opacity === '1'
  })
  const countSet = await page.$eval('[data-count]', (el) => el.textContent)
  ok('reduced motion: content visible, count set', statsVisible && countSet === '100', `count=${countSet}`)
  await page.close()
}

// —— Horizontal overflow at narrow width ——
for (const width of [360, 390, 768, 1024]) {
  const page = await browser.newPage()
  await page.setViewport({ width, height: 900 })
  await page.goto(`${base}/`, { waitUntil: 'networkidle0' })
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)
  ok(`no horizontal overflow @${width}px`, overflow <= 0, `overflow=${overflow}px`)
  await page.close()
}

await browser.close()
console.log(results.join('\n'))
process.exit(results.some((r) => r.startsWith('FAIL')) ? 1 : 0)
