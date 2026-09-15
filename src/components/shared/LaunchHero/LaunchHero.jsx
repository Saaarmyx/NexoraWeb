import Card from '../../atoms/Card/Card'
import Button from '../../atoms/Button/Button'

import './LaunchHero.css'

function LaunchHero({ description, buttonText, buttonTo = '/launches', image, video }) {
  return (
    <Card className="launch-hero-card">
      {video && <video className="launch-hero-video" src={video} autoPlay muted playsInline />}

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
