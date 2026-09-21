import { Suspense, lazy, useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'

import useProductTheme from '../../hooks/useProductTheme'
import { Reveal } from '../../components/ui'
import { Hero } from '../../components/sections'
import ProductArt from '../../components/illustrations/ProductArt'
import NotFound from '../../pages/NotFound/NotFound'
import products from './data/products'
import { resolveSectionComponent } from './sectionRegistry'

function useProductSeo(product) {
  useEffect(() => {
    const seo = product?.page?.seo

    document.title = seo?.title || (product ? `${product.name} · Nexora` : 'Nexora')

    let meta = document.querySelector('meta[name="description"]')

    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }

    meta.setAttribute('content', seo?.description || product?.description || '')
  }, [product])
}

const customComponentCache = new WeakMap()

function getCustomComponent(loader) {
  if (!customComponentCache.has(loader)) {
    customComponentCache.set(loader, lazy(loader))
  }

  return customComponentCache.get(loader)
}

function CustomSection({ loader, sectionProps }) {
  const Component = useMemo(() => getCustomComponent(loader), [loader])

  return (
    <Suspense fallback={null}>
      {/* eslint-disable-next-line react/static-components -- Component estable desde caché WeakMap, no se crea en render */}
      <Component {...sectionProps} />
    </Suspense>
  )
}

function ProductSection({ section }) {
  if (section.type === 'custom') {
    const content = <CustomSection loader={section.loader} sectionProps={section.props} />

    if (!section.reveal) {
      return <>{content}</>
    }

    return (
      <Reveal delay={section.revealDelay ?? 0} className={section.revealClassName || ''}>
        {content}
      </Reveal>
    )
  }

  const Component = resolveSectionComponent(section)

  if (!Component) {
    return null
  }

  // eslint-disable-next-line react/static-components -- Component viene del registro (estable), no se crea en render
  const content = <Component {...section.props} />

  if (!section.reveal) {
    return <>{content}</>
  }

  return (
    <Reveal delay={section.revealDelay ?? 0} className={section.revealClassName || ''}>
      {content}
    </Reveal>
  )
}

function SoonTemplate({ product }) {
  return (
    <section className="section">
      <div className="container">
        {product.art && (
          <ProductArt
            product={product.art.product}
            variant={product.art.variant || 'hero'}
            title={product.name}
          />
        )}

        <Hero
          eyebrow={product.name}
          title={product.tagline}
          description={product.description}
          buttonText="Ver descargas"
          buttonTo="/downloads"
        />
      </div>
    </section>
  )
}

function ProductPage() {
  const { slug } = useParams()
  const product = products.find((item) => item.slug === slug)

  useProductTheme(product?.theme, product?.accent)
  useProductSeo(product)

  if (!product) {
    return <NotFound />
  }

  if (!product.page?.sections?.length) {
    return <SoonTemplate product={product} />
  }

  return (
    <section className="section">
      <div className="container">
        {product.page.sections.map((section, index) => (
          <ProductSection key={`${section.type}-${index}`} section={section} />
        ))}
      </div>
    </section>
  )
}

export default ProductPage
