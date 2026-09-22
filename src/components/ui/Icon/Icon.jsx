import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faXmark,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faTelegramPlane } from '@fortawesome/free-brands-svg-icons'
import { localIcons } from './localIcons'

import './Icon.css'

const glyphs = {
  menu: faBars,
  close: faXmark,
  user: faUser,
  discord: faDiscord,
  telegram: faTelegramPlane,
}

function Icon({ name, size = 20, className = '', style, ...props }) {
  const LocalIcon = localIcons[name]

  if (LocalIcon) {
    return (
      <LocalIcon
        width={size}
        height={size}
        className={`icon ${className}`.trim()}
        style={style}
        aria-hidden="true"
        {...props}
      />
    )
  }

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
