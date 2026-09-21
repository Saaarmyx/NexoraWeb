import { productStatuses } from './statusMeta'
import sectionTypes from './sectionTypes'

const mediaTypes = ['video', 'image', 'art']
const accentPattern = /^color-[\w-]+-accent$/

function fail(slug, message) {
  throw new Error(`[validateProduct] ${slug || '(sin slug)'}: ${message}`)
}

function assertNonEmptyString(slug, field, value) {
  if (typeof value !== 'string' || value.trim() === '') {
    fail(slug, `el campo '${field}' debe ser un texto no vacío`)
  }
}

function validateMedia(slug, context, media) {
  if (!media || typeof media !== 'object') {
    fail(slug, `${context} debe declarar un objeto 'media'`)
  }

  if (!mediaTypes.includes(media.type)) {
    fail(slug, `${context} tiene media.type inválido ('${media.type}')`)
  }

  if (media.type === 'art') {
    assertNonEmptyString(slug, `${context}.media.product`, media.product)
    return
  }

  assertNonEmptyString(slug, `${context}.media.src`, media.src)

  if (typeof media.alt !== 'string' || media.alt.trim() === '') {
    fail(slug, `${context} debe declarar 'alt' no vacío`)
  }
}

function validateSection(slug, section, index) {
  const context = `sections[${index}]`

  if (!section || typeof section !== 'object') {
    fail(slug, `${context} debe ser un objeto`)
  }

  if (!sectionTypes.includes(section.type)) {
    fail(slug, `${context} tiene type desconocido ('${section.type}')`)
  }

  if (section.type === 'custom' && typeof section.loader !== 'function') {
    fail(slug, `${context} de type 'custom' debe declarar 'loader' como función`)
  }

  if (!section.props || typeof section.props !== 'object') {
    fail(slug, `${context} debe declarar un objeto 'props'`)
  }

  if (section.type === 'collage') {
    const images = section.props.images || []

    images.forEach((image, imageIndex) => {
      if (typeof image?.alt !== 'string' || image.alt.trim() === '') {
        fail(slug, `${context}.props.images[${imageIndex}] debe declarar 'alt' no vacío`)
      }
    })
  }

  if (section.type === 'detailCards') {
    const variants = section.props.variants || []

    variants.forEach((variant, variantIndex) => {
      validateMedia(slug, `${context}.props.variants[${variantIndex}]`, variant?.media)

      if (typeof variant?.alt !== 'string' || variant.alt.trim() === '') {
        fail(slug, `${context}.props.variants[${variantIndex}] debe declarar 'alt' no vacío`)
      }
    })
  }
}

function validateProduct(product) {
  const slug = product?.slug

  if (!product || typeof product !== 'object') {
    fail(slug, 'el producto debe ser un objeto')
  }

  assertNonEmptyString(slug, 'slug', product.slug)
  assertNonEmptyString(slug, 'name', product.name)
  assertNonEmptyString(slug, 'tagline', product.tagline)
  assertNonEmptyString(slug, 'description', product.description)

  if (!productStatuses.includes(product.status)) {
    fail(slug, `status inválido ('${product.status}'); usa ${productStatuses.join(' | ')}`)
  }

  if (!['light', 'dark'].includes(product.theme)) {
    fail(slug, `theme inválido ('${product.theme}'); usa 'light' | 'dark'`)
  }

  if (typeof product.accent !== 'string' || !accentPattern.test(product.accent)) {
    fail(slug, `accent inválido ('${product.accent}'); usa 'color-<x>-accent'`)
  }

  if (typeof product.featured !== 'boolean') {
    fail(slug, "el campo 'featured' debe ser booleano")
  }

  if (typeof product.order !== 'number') {
    fail(slug, "el campo 'order' debe ser numérico")
  }

  if (!Array.isArray(product.platforms)) {
    fail(slug, "el campo 'platforms' debe ser un arreglo")
  }

  if (product.version !== null && typeof product.version !== 'string') {
    fail(slug, "el campo 'version' debe ser texto o null")
  }

  if (product.art !== undefined) {
    assertNonEmptyString(slug, 'art.product', product.art?.product)
  }

  if (!Array.isArray(product.downloads)) {
    fail(slug, "el campo 'downloads' debe ser un arreglo")
  }

  product.downloads.forEach((download, index) => {
    assertNonEmptyString(slug, `downloads[${index}].platform`, download?.platform)
    assertNonEmptyString(slug, `downloads[${index}].label`, download?.label)

    if (download?.href !== null && typeof download?.href !== 'string') {
      fail(slug, `downloads[${index}].href debe ser texto o null`)
    }
  })

  if (product.page !== undefined) {
    assertNonEmptyString(slug, 'page.seo.title', product.page?.seo?.title)
    assertNonEmptyString(slug, 'page.seo.description', product.page?.seo?.description)

    if (!Array.isArray(product.page?.sections) || product.page.sections.length === 0) {
      fail(slug, "'page.sections' debe ser un arreglo no vacío")
    }

    product.page.sections.forEach((section, index) => validateSection(slug, section, index))
  }
}

export default validateProduct
