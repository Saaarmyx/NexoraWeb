import Card from '../atoms/Card/Card'
import Badge from '../atoms/Badge/Badge'

import './ProductHero.css'

function ProductHero({
  theme = 'light',
  layout = 'media', // 'media' | 'background'
  title,
  description,
  availability,
  image,
  imageAlt,
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
        </div>

        {!isBackground && (
          <div className="product-hero-media">
            <img src={image} alt={imageAlt || title} className="product-hero-image" />
          </div>
        )}
      </Card>
    </section>
  )
}

export default ProductHero
