import ProductMedia from '../ProductMedia/ProductMedia'

import './VideoHero.css'

function VideoHero({ video, poster, title, description }) {
  return (
    <section className="video-hero">
      <ProductMedia
        media={{ type: 'video', src: video, poster }}
        decorative
        loading="eager"
        className="video-hero-video"
      />

      <div className="video-hero-overlay">
        <div className="video-hero-content">
          <h1 className="video-hero-title">{title}</h1>

          {description && <p className="video-hero-description">{description}</p>}
        </div>
      </div>
    </section>
  )
}

export default VideoHero
