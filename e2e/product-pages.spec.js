import { test, expect } from '@playwright/test'

const slugs = ['ncode', 'nphotos', 'nqr']
const viewports = [
  { width: 390, height: 844 },
  { width: 820, height: 1180 },
  { width: 1440, height: 900 },
]

async function settlePage(page) {
  await page.waitForLoadState('networkidle')

  await page.evaluate(() => {
    document.querySelectorAll('video').forEach((video) => {
      video.pause()
      video.removeAttribute('autoplay')

      try {
        video.currentTime = 0
      } catch {
        /* medio aún no disponible */
      }
    })

    window.scrollTo(0, document.body.scrollHeight)
  })
  await page.waitForTimeout(600)
  await page.evaluate(() => {
    window.scrollTo(0, 0)
  })
  await page.waitForTimeout(600)
}

for (const slug of slugs) {
  for (const viewport of viewports) {
    test(`${slug} @ ${viewport.width}px`, async ({ page }) => {
      await page.setViewportSize(viewport)
      await page.goto(`/products/${slug}`)
      await settlePage(page)
      await expect(page).toHaveScreenshot(`${slug}-${viewport.width}.png`, {
        fullPage: true,
      })
    })
  }
}
