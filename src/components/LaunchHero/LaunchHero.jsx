import Card from '../atoms/Card/Card'
import Button from '../atoms/Button/Button'

import './LaunchHero.css'

function LaunchHero({ description, buttonText, buttonTo = '/products', image }) {
  return (
    <Card
      className="launch-hero-card"
      style={image ? { '--launch-hero-image': `url('${image}')` } : undefined}
    >
      <div className="launch-hero-content">
        <p className="launch-hero-description">{description}</p>

        <Button to={buttonTo} variant="secondary" className="launch-hero-button">
          {buttonText}
        </Button>
      </div>
    </Card>
  )
}

export default LaunchHero
