import { useId } from 'react'

import './ProductArt.css'

const QR_ORIGIN = 56
const QR_CELL = 32
const QR_FINDER_CELLS = [
  [0, 0],
  [6, 0],
  [0, 6],
]
const QR_DATA_CELLS = [
  [3, 0],
  [5, 0],
  [4, 1],
  [7, 1],
  [3, 2],
  [5, 2],
  [8, 2],
  [4, 3],
  [6, 3],
  [7, 4],
  [3, 4],
  [4, 5],
  [8, 5],
  [5, 6],
  [3, 6],
  [7, 7],
  [4, 7],
  [5, 8],
  [8, 8],
]

function QrMotif() {
  return (
    <g>
      {QR_FINDER_CELLS.map(([gx, gy]) => (
        <g key={`${gx}-${gy}`}>
          <rect
            x={QR_ORIGIN + gx * QR_CELL}
            y={QR_ORIGIN + gy * QR_CELL}
            width={QR_CELL * 3}
            height={QR_CELL * 3}
            rx={10}
            fill="none"
            stroke="var(--pa-accent)"
            strokeWidth={12}
          />
          <rect
            x={QR_ORIGIN + (gx + 1) * QR_CELL}
            y={QR_ORIGIN + (gy + 1) * QR_CELL}
            width={QR_CELL}
            height={QR_CELL}
            rx={6}
            fill="var(--pa-accent)"
          />
        </g>
      ))}

      {QR_DATA_CELLS.map(([gx, gy], index) => (
        <rect
          key={`${gx}-${gy}`}
          x={QR_ORIGIN + gx * QR_CELL + 3}
          y={QR_ORIGIN + gy * QR_CELL + 3}
          width={QR_CELL - 6}
          height={QR_CELL - 6}
          rx={6}
          fill="var(--pa-accent)"
          fillOpacity={index % 4 === 0 ? 0.95 : 0.5}
        />
      ))}

      <rect
        className="product-art-scan"
        x={QR_ORIGIN}
        y={QR_ORIGIN}
        width={QR_CELL * 9}
        height={10}
        rx={5}
        fill="var(--pa-accent)"
      />
    </g>
  )
}

function CodeMotif() {
  return (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <polyline
        points="152,148 100,200 152,252"
        stroke="var(--pa-accent)"
        strokeWidth={26}
      />
      <polyline
        points="248,148 300,200 248,252"
        stroke="var(--pa-accent)"
        strokeWidth={26}
      />
      <line
        x1={222}
        y1={136}
        x2={178}
        y2={264}
        stroke="var(--color-text-muted)"
        strokeWidth={18}
      />
      <circle cx={152} cy={312} r={10} fill="var(--pa-accent)" stroke="none" />
      <circle
        cx={200}
        cy={312}
        r={10}
        fill="var(--pa-accent)"
        fillOpacity={0.55}
        stroke="none"
      />
      <circle
        cx={248}
        cy={312}
        r={10}
        fill="var(--pa-accent)"
        fillOpacity={0.3}
        stroke="none"
      />
    </g>
  )
}

function PhotosMotif() {
  return (
    <g>
      <rect
        x={64}
        y={92}
        width={272}
        height={236}
        rx={28}
        fill="none"
        stroke="var(--pa-accent)"
        strokeOpacity={0.35}
        strokeWidth={10}
      />
      <circle cx={200} cy={156} r={52} fill="var(--pa-accent)" fillOpacity={0.9} />
      <path
        d="M64 304 L162 194 L232 272 L278 226 L336 304 Z"
        fill="var(--color-text-muted)"
        fillOpacity={0.55}
      />
    </g>
  )
}

const motifs = {
  ncode: <CodeMotif />,
  nphotos: <PhotosMotif />,
  nqr: <QrMotif />,
}

function ProductArt({
  product = 'nqr',
  variant = 'spot',
  tone = 'brand',
  title,
  className = '',
}) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, '')
  const dotsId = `pa-dots-${uid}`
  const glowId = `pa-glow-${uid}`

  return (
    <svg
      viewBox="0 0 400 400"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={title || `Ilustración de ${product}`}
      className={
        `product-art product-art--${variant} product-art--tone-${tone} ${className}`.trim()
      }
    >
      <defs>
        <pattern
          id={dotsId}
          width="26"
          height="26"
          patternUnits="userSpaceOnUse"
        >
          <circle
            cx="2"
            cy="2"
            r="2"
            fill="var(--color-text-muted)"
            fillOpacity="0.35"
          />
        </pattern>
        <radialGradient id={glowId} cx="50%" cy="42%" r="55%">
          <stop
            offset="0%"
            stopColor="var(--color-theme-accent)"
            stopOpacity="0.28"
          />
          <stop
            offset="100%"
            stopColor="var(--color-theme-accent)"
            stopOpacity="0"
          />
        </radialGradient>
      </defs>

      <rect width="400" height="400" fill="var(--color-bg-app)" />
      <rect width="400" height="400" fill={`url(#${dotsId})`} />
      <rect width="400" height="400" fill={`url(#${glowId})`} />

      {motifs[product] || motifs.nqr}
    </svg>
  )
}

export default ProductArt
