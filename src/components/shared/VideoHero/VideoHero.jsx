import './VideoHero.css'

function VideoHero({ video, title, description }) {
  return (
    <section className="video-hero">
      <video
        className="video-hero-video"
        src={video}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
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
