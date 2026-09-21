import {
  FiCloud,
  FiCode,
  FiDownload,
  FiGrid,
  FiImage,
  FiMenu,
  FiMonitor,
  FiShare2,
  FiUser,
  FiX,
} from 'react-icons/fi'
import { FaDiscord, FaTelegramPlane } from 'react-icons/fa'

import './Icon.css'

const glyphs = {
  menu: FiMenu,
  close: FiX,
  user: FiUser,
  code: FiCode,
  cloud: FiCloud,
  image: FiImage,
  monitor: FiMonitor,
  share: FiShare2,
  grid: FiGrid,
  download: FiDownload,
  discord: FaDiscord,
  telegram: FaTelegramPlane,
}

function Icon({ name, size = 20, className = '', ...props }) {
  const Glyph = glyphs[name]

  if (!Glyph) {
    return null
  }

  return <Glyph size={size} className={`icon ${className}`.trim()} aria-hidden="true" {...props} />
}

export default Icon
