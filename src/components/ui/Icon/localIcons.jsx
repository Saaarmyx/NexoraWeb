/* Iconos locales de Nexora (SVG inline, estilo de línea consistente).
 *
 * Archivo de datos: no es un componente editable con fast-refresh,
 * por eso la regla react/only-export-components no aplica aquí.
 * Aquí viven todos los iconos de productos e ilustraciones de la marca.
 * Los iconos de apps externas (Telegram, Discord, ...) y la UI genérica
 * (menú, cerrar, cuenta) siguen usando Font Awesome en Icon.jsx.
 */

/* oxlint-disable react/only-export-components */

const base = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

function svg(children) {
  return function LocalIcon({ width = 20, height = 20, className = '', style, ...props }) {
    return (
      <svg {...base} width={width} height={height} className={className} style={style} {...props}>
        {children}
      </svg>
    )
  }
}

export const localIcons = {
  /* ── Motivos de producto (cards, home, product art) ─────────── */

  code: svg(
    <>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </>,
  ),

  image: svg(
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="8.5" cy="10" r="1.5" />
      <path d="m3.5 16.5 4.5-4.5 4 3.5 3-3 5.5 5" />
    </>,
  ),

  qr: svg(
    <>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="4.5" y="4.5" width="4" height="4" fill="currentColor" stroke="none" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="15.5" y="4.5" width="4" height="4" fill="currentColor" stroke="none" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="4.5" y="15.5" width="4" height="4" fill="currentColor" stroke="none" />
      <rect x="13" y="13" width="3" height="3" fill="currentColor" stroke="none" />
      <rect x="18" y="13" width="3" height="3" fill="currentColor" stroke="none" />
      <rect x="13" y="18" width="3" height="3" fill="currentColor" stroke="none" />
      <rect x="18" y="18" width="3" height="3" fill="currentColor" stroke="none" />
    </>,
  ),

  cloud: svg(
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />,
  ),

  share: svg(
    <>
      <circle cx="18" cy="5" r="2.2" />
      <circle cx="6" cy="12" r="2.2" />
      <circle cx="18" cy="19" r="2.2" />
      <path d="m8.7 10.7 6.7-3.9" />
      <path d="m8.7 13.3 6.7 3.9" />
    </>,
  ),

  chip: svg(
    <>
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <rect x="10" y="10" width="4" height="4" />
      <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
    </>,
  ),

  file: svg(
    <>
      <path d="M14 3.5H6a1.5 1.5 0 0 0-1.5 1.5v14A1.5 1.5 0 0 0 6 20.5h12a1.5 1.5 0 0 0 1.5-1.5V8.5Z" />
      <path d="M14 3.5V8.5H20" />
    </>,
  ),

  calculator: svg(
    <>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <rect x="7.5" y="5.5" width="9" height="3.5" rx="1" />
      <path d="M8 12.75h.01M12 12.75h.01M16 12.75h.01M8 16.25h.01M12 16.25h.01M16 16.25h.01" />
    </>,
  ),

  record: svg(
    <>
      <rect x="9" y="2.5" width="6" height="11" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0" />
      <path d="M12 18v3.5" />
    </>,
  ),

  lock: svg(
    <>
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </>,
  ),

  /* ── Iconos de features / ilustraciones (featureGrid, links) ── */

  bolt: svg(<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />),

  desktop: svg(
    <>
      <rect x="2" y="4" width="20" height="13" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </>,
  ),

  edit: svg(
    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />,
  ),

  folder: svg(
    <path d="M3.5 7.5A1.5 1.5 0 0 1 5 6h4l2 2.5h8A1.5 1.5 0 0 1 20.5 10v7a1.5 1.5 0 0 1-1.5 1.5h-14A1.5 1.5 0 0 1 3.5 17v-9.5Z" />,
  ),

  hdd: svg(
    <>
      <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11Z" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <line x1="6" y1="16" x2="6.02" y2="16" />
      <line x1="10" y1="16" x2="10.02" y2="16" />
    </>,
  ),

  history: svg(
    <>
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M12 7v5l4 2" />
    </>,
  ),

  key: svg(
    <>
      <path d="m21 2-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.778-7.778Zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3m-3.5 3.5L19 4" />
    </>,
  ),

  shield: svg(
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />,
  ),

  tasks: svg(
    <>
      <rect x="8" y="2" width="8" height="4" rx="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="m9 14 2 2 4-4" />
    </>,
  ),

  wifi: svg(
    <>
      <path d="M12 21h.01" />
      <path d="M6.5 16.5a7.5 7.5 0 0 1 11 0" />
      <path d="M2.8 12.8a13 13 0 0 1 18.4 0" />
      <path d="M5.9 9.9a17 17 0 0 1 12.2 0" />
    </>,
  ),

  'user-shield': svg(
    <>
      <path d="M12 22s7-3.5 7-8.75V6.5L12 3.5 5 6.5v6.75C5 18.5 12 22 12 22Z" />
      <circle cx="12" cy="10" r="2" />
      <path d="M8.5 15.5a3.5 3.5 0 0 1 7 0" />
    </>,
  ),

  'exchange-alt': svg(
    <>
      <path d="M17 3 21 7l-4 4" />
      <path d="M21 7H3" />
      <path d="M7 21 3 17l4-4" />
      <path d="M3 17h18" />
    </>,
  ),

  download: svg(
    <>
      <path d="M21 15v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3" />
      <path d="m7 10 5 5 5-5M12 15V3" />
    </>,
  ),
}

/* Alias: nombres históricos del catálogo de iconos */
localIcons.monitor = localIcons.desktop
localIcons['shield-alt'] = localIcons.shield