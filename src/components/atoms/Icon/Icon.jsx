import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faXmark,
  faUser,
  faCode,
  faCloud,
  faImage,
  faDesktop,
  faShareNodes,
  faQrcode,
  faMicrochip,
  faDownload,
} from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faTelegramPlane } from '@fortawesome/free-brands-svg-icons'

import './Icon.css'

const glyphs = {
  menu: faBars,
  close: faXmark,
  user: faUser,
  code: faCode,
  cloud: faCloud,
  image: faImage,
  monitor: faDesktop,
  share: faShareNodes,
  qr: faQrcode,
  chip: faMicrochip,
  download: faDownload,
  discord: faDiscord,
  telegram: faTelegramPlane,
}

function Icon({ name, size = 20, className = '', style, ...props }) {
  const glyph = glyphs[name]

  if (!glyph) {
    return null
  }

  return (
    <FontAwesomeIcon
      icon={glyph}
      className={`icon ${className}`.trim()}
      style={{ fontSize: size, ...style }}
      aria-hidden="true"
      {...props}
    />
  )
}

export default Icon
