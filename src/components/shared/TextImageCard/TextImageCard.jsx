import Card from '../../atoms/Card/Card'

import './TextImageCard.css'

function TextImageCard({
  title,
  description,
  subtitle,
  secondaryDescription,
  video,
  videoAlt = '',
  videoPosition = 'right',
}) {
  return (
    <Card
      variant="surface"
      radius="2xl"
      className={`text-image-card text-image-card--${videoPosition}`}
    >
      <div className="text-image-card-content">
        <h2 className="text-image-card-title">{title}</h2>

        {description && <p className="text-image-card-description">{description}</p>}

        {subtitle && <h3 className="text-image-card-subtitle">{subtitle}</h3>}

        {secondaryDescription && (
          <p className="text-image-card-secondary-description">{secondaryDescription}</p>
        )}
      </div>

      <div className="text-image-card-media">
        <video
          src={video}
          className="text-image-card-video"
          autoPlay
          muted
          playsInline
          aria-label={videoAlt}
        />
      </div>
    </Card>
  )
}

export default TextImageCard
