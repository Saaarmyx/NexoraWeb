import Card from '../../ui/Card/Card'
import Badge from '../../ui/Badge/Badge'
import Button from '../../ui/Button/Button'
import ProductArt from '../../illustrations/ProductArt'
import { getStatusMeta } from '../../../features/products/statusMeta'

import './ProductHero.css'

function ProductHero({
  theme = 'light',
  layout = 'media', // 'media' | 'background'
  title,
  description,
  status,
  image,
  imageAlt,
  art,
  buttonText = 'Descubrir',
  buttonTo,
}) {
  const isBackground = layout === 'background'
  const statusMeta = getStatusMeta(status)

  return (
    <section className="product-hero">
      <Card
        radius="2xl"
        className={`product-hero-card product-hero-card--${theme} product-hero-card--${layout}`}
        style={isBackground ? { '--product-hero-image': `url('${image}')` } : undefined}
      >
        <div className="product-hero-header">
          <h2 className="product-hero-title">{title}</h2>

          <p className="product-hero-description">{description}</p>

          {status && (
            <Badge variant={statusMeta.badgeTone} className="product-hero-availability">
              {statusMeta.label}
            </Badge>
          )}

          {buttonTo && (
            <Button
              to={buttonTo}
              variant="secondary"
              className="product-hero-button"
              disabled={!statusMeta.canDownload}
            >
              {buttonText}
            </Button>
          )}
        </div>

        {!isBackground && (
          <div className="product-hero-media">
            {art ? (
              <ProductArt product={art.product} variant="hero" title={imageAlt || title} />
            ) : (
              <img src={image} alt={imageAlt || title} className="product-hero-image" />
            )}
          </div>
        )}
      </Card>
    </section>
  )
}

export default ProductHero
