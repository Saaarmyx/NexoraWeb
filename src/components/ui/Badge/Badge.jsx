import './Badge.css'

function Badge({ children, variant = 'neutral', className = '' }) {
  return <span className={`badge badge--${variant} ${className}`.trim()}>{children}</span>
}

export default Badge
