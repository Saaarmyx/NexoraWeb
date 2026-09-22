import { getProductsSync } from '../../features/products'

import './ProductArt.css'

function getBannerSrc(product) {
  const products = getProductsSync()
  const entry = products.find((item) => item.slug === product)
  return entry?.image || `/images/products/banners/banner-${product}.svg`
}

function ProductArt({ product = 'nqr', variant = 'spot', title, className = '' }) {
  const src = getBannerSrc(product)

  return (
    <img
      className={`product-art product-art--${variant} ${className}`.trim()}
      src={src}
      alt={title || `Ilustración de ${product}`}
      loading="lazy"
      decoding="async"
    />
  )
}

export default ProductArt