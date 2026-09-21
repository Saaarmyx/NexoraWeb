import Icon from '../atoms/Icon/Icon'
import products from '../../features/products/data/products'

import './ProductArt.css'

const motifIcons = {
  ncode: 'code',
  nphotos: 'image',
  nqr: 'qr',
  ncloud: 'cloud',
  nconnect: 'share',
  os: 'chip',
}

const toneColors = {
  brand: null,
  ink: 'var(--color-text-heading)',
  paper: 'var(--color-white)',
  midnight: 'var(--color-text-muted)',
}

function ProductArt({
  product = 'nqr',
  variant = 'spot',
  tone = 'brand',
  title,
  className = '',
}) {
  const iconName = motifIcons[product] || motifIcons.nqr
  const productEntry = products.find((item) => item.slug === product)
  const accentToken = productEntry?.accent || 'color-theme-accent'
  const color = toneColors[tone] || `var(--${accentToken})`

  return (
    <div
      role="img"
      aria-label={title || `Ilustración de ${product}`}
      style={{ color }}
      className={
        `product-art product-art--${variant} product-art--tone-${tone} ${className}`.trim()
      }
    >
      <span className="product-art-motif">
        <Icon name={iconName} size="1em" />
      </span>

      {product === 'nqr' && <span className="product-art-scan" aria-hidden="true" />}
    </div>
  )
}

export default ProductArt
