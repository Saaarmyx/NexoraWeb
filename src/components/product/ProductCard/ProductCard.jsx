import Card from '../../atoms/Card/Card'
import Button from '../../atoms/Button/Button'
import Badge from '../../atoms/Badge/Badge'
import ProductArt from '../../illustrations/ProductArt'
import getProductPath from '../../../utils/productRoutes'
import isProductAvailable from '../../../utils/productAvailability'

import './ProductCard.css'

function ProductCard({ product }) {
  const productPath = getProductPath(product)

  return (
    <Card variant="surface" radius="xl" className="product-card">
      <div className="product-card-media">
        {product.art ? (
          <ProductArt product={product.art.product} variant="spot" title={product.name} />
        ) : (
          <img src={product.image} alt={product.name} className="product-card-image" />
        )}
      </div>

      <div className="product-card-content">
        <div className="product-card-info">
          <Badge className="product-card-availability">{product.availability}</Badge>

          <h3 className="product-card-title">{product.name}</h3>

          <p className="product-card-description">{product.description}</p>
        </div>

        <Button
          to={productPath}
          variant="secondary"
          className="product-card-button"
          disabled={!isProductAvailable(product.availability)}
        >
          Descubrir
        </Button>
      </div>
    </Card>
  )
}

export default ProductCard
