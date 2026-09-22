import Card from '../../ui/Card/Card'
import Icon from '../../ui/Icon/Icon'

import './FeatureGrid.css'

function FeatureGrid({ items }) {
  return (
    <div className="feature-grid">
      {items.map(({ icon, title, description }) => (
        <Card key={title} variant="flat" radius="xl" className="feature-grid-item">
          {icon && (
            <Icon
              name={typeof icon === 'string' ? icon : undefined}
              className="feature-grid-icon"
              aria-hidden="true"
            />
          )}

          <h3 className="feature-grid-title">{title}</h3>

          <p className="feature-grid-description">{description}</p>
        </Card>
      ))}
    </div>
  )
}

export default FeatureGrid
