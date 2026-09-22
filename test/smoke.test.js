import { describe, it, expect } from 'vitest'
import { getProductsSync } from '../src/features/products/data/products'
import { getStatusMeta, productStatuses } from '../src/features/products/statusMeta'
import sectionTypes from '../src/features/products/sectionTypes'

describe('Smoke test - estructura del producto', () => {
  it('carga al menos 10 productos', () => {
    const products = getProductsSync()
    expect(products.length).toBeGreaterThanOrEqual(10)
  })

  it('todos los productos tienen slug, name, tagline y description', () => {
    const products = getProductsSync()
    products.forEach((product) => {
      expect(product.slug).toBeDefined()
      expect(product.name).toBeDefined()
      expect(product.tagline).toBeDefined()
      expect(product.description).toBeDefined()
    })
  })

  it('todos los productos tienen un status válido', () => {
    const products = getProductsSync()
    products.forEach((product) => {
      expect(productStatuses).toContain(product.status)
    })
  })

  it('todos los productos tienen un theme válido', () => {
    const products = getProductsSync()
    products.forEach((product) => {
      expect(['light', 'dark']).toContain(product.theme)
    })
  })

  it('todos los productos tienen un accent válido', () => {
    const products = getProductsSync()
    const accentPattern = /^color-[\w-]+-accent$/
    products.forEach((product) => {
      expect(accentPattern.test(product.accent)).toBe(true)
    })
  })

  it('todos los productos tienen un order numérico', () => {
    const products = getProductsSync()
    products.forEach((product) => {
      expect(typeof product.order).toBe('number')
    })
  })

  it('los productos están ordenados por order', () => {
    const products = getProductsSync()
    for (let i = 1; i < products.length; i++) {
      expect(products[i].order >= products[i - 1].order).toBe(true)
    }
  })

  it('getStatusMeta devuelve objeto para cada status', () => {
    productStatuses.forEach((status) => {
      const meta = getStatusMeta(status)
      expect(meta).toHaveProperty('label')
      expect(meta).toHaveProperty('badgeTone')
      expect(meta).toHaveProperty('canDownload')
    })
  })

  it('sectionTypes incluye todos los tipos esperados', () => {
    const expected = ['hero', 'featureGrid', 'textImage', 'detailCards', 'collage', 'links', 'cta', 'custom']
    expected.forEach((type) => {
      expect(sectionTypes).toContain(type)
    })
  })

  it('getStatusMeta("soon") devuelve isLaunchActive false', () => {
    expect(getStatusMeta('soon').isLaunchActive).toBe(false)
  })
})
