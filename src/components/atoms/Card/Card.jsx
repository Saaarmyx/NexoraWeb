import './Card.css'

function Card({
  children,
  variant = 'surface', // 'surface' | 'outline' | 'flat'
  radius = 'xl', // 'md' | 'lg' | 'xl' | '2xl'
  isInteractive = false,
  className = '',
  onClick,
  ...props
}) {
  return (
    <div
      className={`card-base variant-${variant} radius-${radius} ${
        isInteractive ? 'is-interactive' : ''
      } ${className}`}
      onClick={isInteractive ? onClick : undefined}
      role={isInteractive ? 'button' : undefined}
      tabIndex={isInteractive ? 0 : undefined}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card
