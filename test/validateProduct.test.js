import { describe, it, expect } from 'vitest'
import validateProduct from '../src/features/products/validateProduct'

const baseProduct = {
  slug: 'ncode',
  name: 'NCode',
  tagline: 'Crear código',
  description: 'Un entorno de desarrollo.',
  status: 'soon',
  platforms: [],
  version: null,
  theme: 'light',
  accent: 'color-code-accent',
  featured: true,
  order: 1,
  downloads: [],
  page: {
    seo: { title: 'NCode', description: 'Un entorno de desarrollo.' },
    sections: [{ type: 'hero', props: { video: '/videos/ncode/hero.mp4', title: 'NCode' } }],
  },
}

describe('validateProduct', () => {
  it('no lanza error con producto válido', () => {
    expect(() => validateProduct(baseProduct)).not.toThrow()
  })

  it('rechaza producto no objeto', () => {
    expect(() => validateProduct(null)).toThrow(
      '[validateProduct] (sin slug): el producto debe ser un objeto',
    )
  })

  it('rechaza slug vacío', () => {
    const p = { ...baseProduct, slug: '' }
    expect(() => validateProduct(p)).toThrow("el campo 'slug' debe ser un texto no vacío")
  })

  it('rechaza name vacío', () => {
    const p = { ...baseProduct, name: '' }
    expect(() => validateProduct(p)).toThrow("el campo 'name' debe ser un texto no vacío")
  })

  it('rechaza tagline vacío', () => {
    const p = { ...baseProduct, tagline: '' }
    expect(() => validateProduct(p)).toThrow("el campo 'tagline' debe ser un texto no vacío")
  })

  it('rechaza description vacío', () => {
    const p = { ...baseProduct, description: '' }
    expect(() => validateProduct(p)).toThrow("el campo 'description' debe ser un texto no vacío")
  })

  it('rechaza status inválido', () => {
    const p = { ...baseProduct, status: 'unknown' }
    expect(() => validateProduct(p)).toThrow("status inválido ('unknown')")
  })

  it('rechaza theme inválido', () => {
    const p = { ...baseProduct, theme: 'purple' }
    expect(() => validateProduct(p)).toThrow("theme inválido ('purple')")
  })

  it('rechaza accent inválido', () => {
    const p = { ...baseProduct, accent: 'invalid' }
    expect(() => validateProduct(p)).toThrow("accent inválido ('invalid')")
  })

  it('rechaza featured no booleano', () => {
    const p = { ...baseProduct, featured: 'yes' }
    expect(() => validateProduct(p)).toThrow("el campo 'featured' debe ser booleano")
  })

  it('rechaza order no numérico', () => {
    const p = { ...baseProduct, order: '1' }
    expect(() => validateProduct(p)).toThrow("el campo 'order' debe ser numérico")
  })

  it('rechaza platforms no arreglo', () => {
    const p = { ...baseProduct, platforms: 'web' }
    expect(() => validateProduct(p)).toThrow("el campo 'platforms' debe ser un arreglo")
  })

  it('rechaza version no string ni null', () => {
    const p = { ...baseProduct, version: 1 }
    expect(() => validateProduct(p)).toThrow("el campo 'version' debe ser texto o null")
  })

  it('acepta version null', () => {
    const p = { ...baseProduct, version: null }
    expect(() => validateProduct(p)).not.toThrow()
  })

  it('acepta version string', () => {
    const p = { ...baseProduct, version: '1.0.0' }
    expect(() => validateProduct(p)).not.toThrow()
  })

  it('rechaza downloads no arreglo', () => {
    const p = { ...baseProduct, downloads: 'github' }
    expect(() => validateProduct(p)).toThrow("el campo 'downloads' debe ser un arreglo")
  })

  it('rechaza download sin platform', () => {
    const p = { ...baseProduct, downloads: [{ label: 'Descargar' }] }
    expect(() => validateProduct(p)).toThrow("downloads[0].platform' debe ser un texto no vacío")
  })

  it('rechaza download sin label', () => {
    const p = { ...baseProduct, downloads: [{ platform: 'github' }] }
    expect(() => validateProduct(p)).toThrow("downloads[0].label' debe ser un texto no vacío")
  })

  it('rechaza download href no string ni null', () => {
    const p = { ...baseProduct, downloads: [{ platform: 'github', label: 'Descargar', href: 123 }] }
    expect(() => validateProduct(p)).toThrow('downloads[0].href debe ser texto o null')
  })

  it('acepta download href null', () => {
    const p = {
      ...baseProduct,
      downloads: [{ platform: 'github', label: 'Descargar', href: null }],
    }
    expect(() => validateProduct(p)).not.toThrow()
  })

  it('rechaza art.product vacío', () => {
    const p = { ...baseProduct, art: { product: '' } }
    expect(() => validateProduct(p)).toThrow("el campo 'art.product' debe ser un texto no vacío")
  })

  it('acepta art sin definir', () => {
    const p = { ...baseProduct }
    delete p.art
    expect(() => validateProduct(p)).not.toThrow()
  })

  it('rechaza page.sections vacío', () => {
    const p = { ...baseProduct, page: { seo: { title: 'NCode', description: 'x' }, sections: [] } }
    expect(() => validateProduct(p)).toThrow("'page.sections' debe ser un arreglo no vacío")
  })

  it('rechaza section con type desconocido', () => {
    const p = {
      ...baseProduct,
      page: {
        seo: { title: 'NCode', description: 'x' },
        sections: [{ type: 'unknown', props: {} }],
      },
    }
    expect(() => validateProduct(p)).toThrow('sections[0] tiene type desconocido')
  })

  it('rechaza section custom sin loader', () => {
    const p = {
      ...baseProduct,
      page: {
        seo: { title: 'NCode', description: 'x' },
        sections: [{ type: 'custom', props: {} }],
      },
    }
    expect(() => validateProduct(p)).toThrow("de type 'custom' debe declarar 'loader' como función")
  })

  it('rechaza collage sin alt en images', () => {
    const p = {
      ...baseProduct,
      page: {
        seo: { title: 'NCode', description: 'Un entorno de desarrollo.' },
        sections: [{ type: 'collage', props: { title: 'C', images: [{ src: 'x' }] } }],
      },
    }
    expect(() => validateProduct(p)).toThrow('images[0] debe declarar')
  })

  it('acepta collage con alt en images', () => {
    const p = {
      ...baseProduct,
      page: {
        seo: { title: 'NCode', description: 'Un entorno de desarrollo.' },
        sections: [{ type: 'collage', props: { title: 'C', images: [{ src: 'x', alt: 'img' }] } }],
      },
    }
    expect(() => validateProduct(p)).not.toThrow()
  })

  it('rechaza hero sin video', () => {
    const p = {
      ...baseProduct,
      page: {
        seo: { title: 'NCode', description: 'x' },
        sections: [{ type: 'hero', props: { title: 'NCode' } }],
      },
    }
    expect(() => validateProduct(p)).toThrow(
      "la sección 'hero' del producto 'ncode' no tiene 'video'",
    )
  })

  it('rechaza collage sin images', () => {
    const p = {
      ...baseProduct,
      page: {
        seo: { title: 'NCode', description: 'x' },
        sections: [{ type: 'collage', props: { title: 'C' } }],
      },
    }
    expect(() => validateProduct(p)).toThrow(
      "la sección 'collage' del producto 'ncode' no tiene 'images'",
    )
  })

  it('rechaza detailCards sin variants', () => {
    const p = {
      ...baseProduct,
      page: {
        seo: { title: 'NCode', description: 'x' },
        sections: [{ type: 'detailCards', props: { title: 'D' } }],
      },
    }
    expect(() => validateProduct(p)).toThrow(
      "la sección 'detailCards' del producto 'ncode' no tiene 'variants'",
    )
  })

  it('rechaza textImage sin titulo (title)', () => {
    const p = {
      ...baseProduct,
      page: {
        seo: { title: 'NCode', description: 'x' },
        sections: [{ type: 'textImage', props: { video: '/videos/t.mp4' } }],
      },
    }
    expect(() => validateProduct(p)).toThrow(
      "la sección 'textImage' del producto 'ncode' no tiene 'title'",
    )
  })

  it('rechaza links sin links', () => {
    const p = {
      ...baseProduct,
      page: {
        seo: { title: 'NCode', description: 'x' },
        sections: [{ type: 'links', props: { title: 'L' } }],
      },
    }
    expect(() => validateProduct(p)).toThrow(
      "la sección 'links' del producto 'ncode' no tiene 'links'",
    )
  })

  it('rechaza cta sin buttonText', () => {
    const p = {
      ...baseProduct,
      page: {
        seo: { title: 'NCode', description: 'x' },
        sections: [{ type: 'cta', props: { title: 'C', buttonTo: 'https://x.dev' } }],
      },
    }
    expect(() => validateProduct(p)).toThrow(
      "la sección 'cta' del producto 'ncode' no tiene 'buttonText'",
    )
  })

  it('acepta page sin definir', () => {
    const p = { ...baseProduct }
    expect(() => validateProduct(p)).not.toThrow()
  })
})
