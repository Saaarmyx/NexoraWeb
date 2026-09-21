import Icon from '../atoms/Icon/Icon'
import { productMotifIcons } from './productMotifs'
import products from '../../features/products/data/products'

import './ProductArt.css'

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
  const iconName = productMotifIcons[product] || productMotifIcons.nqr
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
