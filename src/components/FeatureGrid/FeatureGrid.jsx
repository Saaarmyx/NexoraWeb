import Card from '../atoms/Card/Card'

import './FeatureGrid.css'

function FeatureGrid({ items }) {
  return (
    <div className="feature-grid">
      {items.map(({ icon: Icon, title, description }) => (
        <Card key={title} variant="flat" radius="xl" className="feature-grid-item">
          {Icon && <Icon className="feature-grid-icon" />}

          <h3 className="feature-grid-title">{title}</h3>

          <p className="feature-grid-description">{description}</p>
        </Card>
      ))}
    </div>
  )
}

export default FeatureGrid
