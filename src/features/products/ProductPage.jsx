import { Suspense, lazy, useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

import useProductTheme from '../../hooks/useProductTheme'
import { Reveal } from '../../components/ui'
import { Hero } from '../../components/sections'
import ProductArt from '../../components/illustrations/ProductArt'
import NotFound from '../../pages/NotFound/NotFound'
import ErrorBoundary from '../../components/sections/ErrorBoundary/ErrorBoundary'
import { getProductsSync } from './data/products'
import { resolveSectionComponent } from './sectionRegistry'

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
  const [Component, setComponent] = useState(null)

  useEffect(() => {
    if (!section || !section.type) return
    resolveSectionComponent(section)
      .then((comp) => {
        setComponent(comp)
      })
      .catch((err) => {
        console.error('Error loading section component:', section?.type, err)
      })
  }, [section])

  // Guard: section must exist and have a type
  if (!section || !section.type) {
    return <div className="section-error">Invalid section data</div>
  }

  // Guard: component not loaded yet
  if (!Component) {
    return <div className="section-error">Loading section: {section.type}</div>
  }

  if (section.type === 'custom') {
    const content = <CustomSection loader={section.loader} sectionProps={section.props} />
    if (!section.reveal) return <>{content}</>
    return (
      <Reveal delay={section.revealDelay ?? 0} className={section.revealClassName || ''}>
        {content}
      </Reveal>
    )
  }

  let content
  try {
    // Ensure props is an object, never null
    const props = section.props && typeof section.props === 'object' ? section.props : {}
    content = <Component {...props} />
  } catch (err) {
    console.error('Error rendering section:', section?.type, err)
    content = <div className="section-error">Error rendering section: {section?.type}</div>
  }

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
  const products = getProductsSync()
  console.log('ProductPage: slug=', slug, 'products=', products.length, 'found=', products.find((item) => item.slug === slug)?.name)
  const product = products.find((item) => item.slug === slug)

  useProductTheme(product?.theme, product?.accent)

  const seo = product?.page?.seo
  const title = seo?.title || (product ? `${product.name} · Nexora` : 'Nexora')
  const description = seo?.description || product?.description || ''
  const ogImage = seo?.ogImage || product?.image || '/icons/brand/icon.png'
  const canonical = product ? `/products/${product.slug}` : ''

  if (!product) {
    return <NotFound />
  }

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
      </Helmet>
      {product.page?.sections?.length ? (
        <section className="section">
          <div className="container">
            {product.page.sections.map((section, index) => (
              <ErrorBoundary key={`${section.type}-${index}`}>
                <ProductSection section={section} />
              </ErrorBoundary>
            ))}
          </div>
        </section>
      ) : (
        <SoonTemplate product={product} />
      )}
    </>
  )
}

export default ProductPage
