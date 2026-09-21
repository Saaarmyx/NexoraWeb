import Card from '../../atoms/Card/Card'
import Button from '../../atoms/Button/Button'
import ProductMedia from '../ProductMedia/ProductMedia'

import './LaunchHero.css'

function LaunchHero({ description, buttonText, buttonTo = '/launches', image, video, poster }) {
  return (
    <Card className="launch-hero-card">
      {video && (
        <ProductMedia
          media={{ type: 'video', src: video, poster }}
          decorative
          loading="eager"
          className="launch-hero-video"
        />
      )}

      {!video && image && (
        <div
          className="launch-hero-image"
          style={{
            backgroundImage: `url('${image}')`,
          }}
        />
      )}

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
