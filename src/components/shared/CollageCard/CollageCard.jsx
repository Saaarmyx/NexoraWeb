import Card from '../../atoms/Card/Card'

import './CollageCard.css'

function CollageCard({ title, description, images = [] }) {
  return (
    <Card variant="surface" radius="2xl" className="collage-card">
      <div className="collage-card-header">
        <h2 className="collage-card-title">{title}</h2>

        {description && <p className="collage-card-description">{description}</p>}
      </div>

      <div className="collage-card-grid">
        {images.map((image, index) => (
          <div
            key={`${image.src}-${index}`}
            className={`collage-card-item collage-card-item--${index + 1}`}
          >
            <img src={image.src} alt={image.alt || ''} />

            <div className="collage-card-item-overlay">
              <div className="collage-card-item-content">
                <h3 className="collage-card-item-title">{image.title}</h3>

                {image.description && (
                  <p className="collage-card-item-description">{image.description}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}

export default CollageCard
