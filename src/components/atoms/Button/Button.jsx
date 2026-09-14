import { Link } from 'react-router-dom'
import './Button.css'

function Button({
  children,
  to,
  href,
  variant = 'primary',
  icon: IconComponent,
  className = '',
  type = 'button',
  disabled = false,
  ...props
}) {
  const classes =
    `button button--${variant} ${disabled ? 'button--disabled' : ''} ${className}`.trim()

  const content = (
    <>
      {IconComponent && <IconComponent className="button__icon" />}
      {children && <span>{children}</span>}
    </>
  )

  if (to && !disabled) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    )
  }

  if (href && !disabled) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    )
  }

  return (
    <button type={type} className={classes} disabled={disabled} {...props}>
      {content}
    </button>
  )
}

export default Button
