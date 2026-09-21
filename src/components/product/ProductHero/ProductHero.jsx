import Card from '../../atoms/Card/Card'
import Badge from '../../atoms/Badge/Badge'
import Button from '../../atoms/Button/Button'
import ProductArt from '../../illustrations/ProductArt'
import isProductAvailable from '../../../utils/productAvailability'

import './ProductHero.css'

function ProductHero({
  theme = 'light',
  layout = 'media', // 'media' | 'background'
  title,
  description,
  availability,
  image,
  imageAlt,
  art,
  buttonText = 'Descubrir',
  buttonTo,
}) {
  const isBackground = layout === 'background'

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

          {availability && <Badge className="product-hero-availability">{availability}</Badge>}

          {buttonTo && (
            <Button
              to={buttonTo}
              variant="secondary"
              className="product-hero-button"
              disabled={!isProductAvailable(availability)}
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
