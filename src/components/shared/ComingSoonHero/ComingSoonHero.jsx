import Button from '../../atoms/Button/Button'
import ProductMedia from '../ProductMedia/ProductMedia'

import './ComingSoonHero.css'

function ComingSoonHero({
  video,
  poster,
  title = 'ESTAMOS TRABAJANDO EN ESTO',
  description = 'Esta parte de Nexora llegará pronto.',
  buttonText = 'Volver al inicio',
  buttonTo = '/',
}) {
  return (
    <section className="coming-soon-hero">
      <div className="coming-soon-hero-media">
        <ProductMedia
          media={{ type: 'video', src: video, poster }}
          decorative
          loading="eager"
        />

        <div className="coming-soon-hero-overlay">
          <div className="coming-soon-hero-content">
            <div className="coming-soon-hero-text">
              <h1>{title}</h1>

              <p>{description}</p>
            </div>

            <Button to={buttonTo} variant="primary" className="coming-soon-hero-button">
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ComingSoonHero
