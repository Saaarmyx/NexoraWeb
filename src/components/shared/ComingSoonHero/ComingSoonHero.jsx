import Button from '../../atoms/Button/Button'

import './ComingSoonHero.css'

function ComingSoonHero({
  video,
  title = 'Estamos trabajando en esto.',
  description = 'Esta parte de Nexora llegará pronto.',
  buttonText = 'Volver al inicio',
  buttonTo = '/',
}) {
  return (
    <section className="coming-soon-hero">
      <div className="coming-soon-hero-media">
        <video src={video} autoPlay muted loop playsInline aria-hidden="true" />

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
