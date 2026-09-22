import Card from '../../ui/Card/Card'
import Icon from '../../ui/Icon/Icon'

import './ProductLinksCard.css'

function ProductLinksCard({
  title = 'NEXORA',
  description = 'Encuentra más información, únete a la comunidad o descarga el producto.',
  links = [],
}) {
  return (
    <Card variant="surface" radius="2xl" className="product-links-card">
      <div className="product-links-card-header">
        <h2 className="product-links-card-title">{title}</h2>

        {description && <p className="product-links-card-description">{description}</p>}
      </div>

      <div className="product-links-card-links">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="product-links-card-link"
          >
            <span className="product-links-card-link-icon-wrap">
              <Icon name={link.icon} className="product-links-card-link-icon" />
            </span>

            <span className="product-links-card-link-label">{link.label}</span>
          </a>
        ))}
      </div>
    </Card>
  )
}

export default ProductLinksCard
