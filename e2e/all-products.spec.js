import { test, expect } from '@playwright/test'

const slugs = [
  'ncode',
  'nphotos',
  'nqr',
  'ncloud',
  'os',
  'nconnect',
  'nfiles',
  'ncalculator',
  'nrecorder',
  'npasswords',
]

for (const slug of slugs) {
  test(`${slug} renderiza sin errores`, async ({ page }) => {
    const errors = []
    page.on('pageerror', (e) => errors.push(String(e)))
    await page.goto(`/products/${slug}`)
    await page.waitForTimeout(800)
    expect(errors).toHaveLength(0)
    await expect(page.locator('main')).not.toContainText('PÁGINA NO ENCONTRADA')
  })
}