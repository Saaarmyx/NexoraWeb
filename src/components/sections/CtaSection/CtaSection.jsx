import Card from '../../ui/Card/Card'
import Button from '../../ui/Button/Button'

import './CtaSection.css'

function CtaSection({ title, description, buttonText, buttonTo }) {
  return (
    <section className="cta-section">
      <Card radius="2xl" className="cta-section-card">
        <h2 className="cta-section-title">{title}</h2>

        {description && <p className="cta-section-description">{description}</p>}

        {buttonText && buttonTo && (
          <Button to={buttonTo} className="cta-section-button">
            {buttonText}
          </Button>
        )}
      </Card>
    </section>
  )
}

export default CtaSection
