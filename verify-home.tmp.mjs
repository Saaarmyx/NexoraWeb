import { chromium } from '@playwright/test'
const base = process.env.BASE_URL || 'http://localhost:5205'
const browser = await chromium.launch()
const page = await browser.newPage()
await page.goto(`${base}/`, { waitUntil: 'domcontentloaded' })
await page.waitForTimeout(2500)

// Cards product-hero
const cards = await page.locator('.product-hero-card').count()
console.log('product-hero-card count:', cards)

// All SVGs: class + parent chain hint + nearest card
const svgs = await page.evaluate(() => {
  const out = []
  document.querySelectorAll('svg').forEach((svg) => {
    const cls = svg.getAttribute('class') || ''
    const dataPrefix = svg.getAttribute('data-prefix') || ''
    const icon = svg.getAttribute('data-icon') || ''
    const parent = svg.parentElement
    const parentCls = parent ? parent.getAttribute('class') : ''
    const grandparent = parent ? parent.parentElement : null
    const gpCls = grandparent ? grandparent.getAttribute('class') : ''
    // ¿Está dentro de una card product-hero?
    const inCard = !!svg.closest('.product-hero-card')
    out.push({ cls: cls.slice(0, 60), dataPrefix, dataIcon: icon, parentCls: (parentCls || '').slice(0, 50), gpCls: (gpCls || '').slice(0, 50), inCard })
  })
  return out
})
const byType = {}
for (const s of svgs) {
  const k = `${s.dataPrefix}/${s.dataIcon || (s.cls.match(/fa-solid|fa-brands/) || [''])[0]}`
  byType[k] = byType[k] || 0
  byType[k]++
}
console.log('\nSVGs por icono FontAwesome:')
for (const [k, v] of Object.entries(byType)) console.log(' ', k, '×', v)
console.log('\nPrimeros 8 svg (detalle):')
console.log(JSON.stringify(svgs.slice(0, 8), null, 1))
// ¿SVGs fuera de las product-hero-card? (los "abajo de las card")
const outside = svgs.filter((s) => !s.inCard)
console.log('\nSVGs FUERA de .product-hero-card:', outside.length)
await browser.close()