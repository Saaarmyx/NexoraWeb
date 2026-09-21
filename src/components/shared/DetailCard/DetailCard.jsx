import { useState } from 'react'

import Card from '../../atoms/Card/Card'
import ProductArt from '../../illustrations/ProductArt'

import './DetailCard.css'

function DetailCard({ title, description, variants = [] }) {
  const [activeVariant, setActiveVariant] = useState(0)

  const currentVariant = variants[activeVariant]

  return (
    <Card variant="surface" radius="2xl" className="detail-card">
      <div className="detail-card-header">
        <h2 className="detail-card-title">{title}</h2>

        {description && <p className="detail-card-description">{description}</p>}
      </div>

      {currentVariant && (
        <div className="detail-card-preview">
          {currentVariant.art ? (
            <ProductArt
              product={currentVariant.art.product}
              variant={currentVariant.art.variant || 'spot'}
              tone={currentVariant.art.tone || 'brand'}
              title={currentVariant.alt}
              className="detail-card-art"
            />
          ) : (
            <img
              src={currentVariant.image}
              alt={currentVariant.alt || ''}
              className="detail-card-image"
            />
          )}
        </div>
      )}

      {variants.length > 0 && (
        <div className="detail-card-controls">
          {variants.map((variant, index) => (
            <button
              key={variant.name || index}
              type="button"
              className={`detail-card-variant ${activeVariant === index ? 'is-active' : ''}`}
              onClick={() => setActiveVariant(index)}
              aria-label={`Cambiar a ${variant.name}`}
              title={variant.name}
            >
              <span
                className="detail-card-variant-color"
                style={
                  variant.token
                    ? {
                        backgroundColor: `var(--${variant.token})`,
                      }
                    : {
                        backgroundColor: variant.color,
                      }
                }
              />
            </button>
          ))}
        </div>
      )}
    </Card>
  )
}

export default DetailCard
