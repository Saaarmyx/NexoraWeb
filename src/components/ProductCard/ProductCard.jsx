import Card from '../atoms/Card/Card'
import Button from '../atoms/Button/Button'
import Badge from '../atoms/Badge/Badge'

import './ProductCard.css'

function ProductCard({ product }) {
  return (
    <Card variant="surface" radius="xl" className="product-card">
      <div className="product-card-media">
        <img src={product.image} alt={product.name} className="product-card-image" />
      </div>

      <div className="product-card-content">
        <div className="product-card-info">
          <Badge className="product-card-availability">{product.availability}</Badge>

          <h3 className="product-card-title">{product.name}</h3>

          <p className="product-card-description">{product.description}</p>
        </div>

        <Button
          to={`/products/${product.slug}`}
          variant="secondary"
          className="product-card-button"
        >
          Descubrir
        </Button>
      </div>
    </Card>
  )
}

export default ProductCard
