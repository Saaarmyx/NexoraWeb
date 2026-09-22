import Button from '../../ui/Button/Button'

import './Hero.css'

function Hero({ eyebrow = '', title = '', description = '', buttonText = '', buttonTo = '' }) {
  return (
    <section className="hero">
      <div className="hero-content">
        {eyebrow && <span className="hero-eyebrow">{eyebrow}</span>}

        <h1 className="hero-title">{title}</h1>

        <p className="hero-description">{description}</p>

        {buttonText && buttonTo && (
          <Button to={buttonTo} className="hero-button">
            {buttonText}
          </Button>
        )}
      </div>
    </section>
  )
}

export default Hero
