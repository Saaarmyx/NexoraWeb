import ProductArt from '../../illustrations/ProductArt'

import './ProductMedia.css'

const MOBILE_BREAKPOINT = '(max-width: 767px)'
const REDUCED_MOTION = '(prefers-reduced-motion: reduce)'

function shouldPlayVideo(hasPoster) {
  if (typeof window === 'undefined') {
    return true
  }

  if (window.matchMedia(REDUCED_MOTION).matches) {
    return false
  }

  if (navigator.connection?.saveData) {
    return false
  }

  if (hasPoster && window.matchMedia(MOBILE_BREAKPOINT).matches) {
    return false
  }

  return true
}

function ProductMedia({ media, decorative = false, loading = 'lazy', className = '' }) {
  if (!media) {
    return null
  }

  const playVideo = media.type === 'video' ? shouldPlayVideo(Boolean(media.poster)) : true

  if (media.type === 'art') {
    return (
      <ProductArt
        product={media.product}
        variant={media.variant || 'spot'}
        tone={media.tone || 'brand'}
        title={media.alt}
        className={className}
      />
    )
  }

  if (media.type === 'video' && playVideo) {
    return (
      <video
        className={`${'product-media-video'} ${className}`.trim()}
        src={media.src}
        poster={media.poster}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        {...(decorative ? { 'aria-hidden': 'true' } : { 'aria-label': media.alt || '' })}
      />
    )
  }

  if (media.type === 'video' && media.poster) {
    return (
      <img
        className={`${'product-media-poster'} ${className}`.trim()}
        src={media.poster}
        alt={media.alt || ''}
        loading={loading}
        decoding="async"
      />
    )
  }

  if (media.type === 'video') {
    return null
  }

  return (
    <img
      className={className || undefined}
      src={media.src}
      alt={media.alt || ''}
      loading={loading}
      decoding="async"
    />
  )
}

export default ProductMedia
