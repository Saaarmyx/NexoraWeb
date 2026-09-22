import Card from '../../ui/Card/Card'
import Button from '../../ui/Button/Button'
import Badge from '../../ui/Badge/Badge'
import ProductArt from '../../illustrations/ProductArt'
import getProductPath from '../../../utils/productRoutes'
import { getStatusMeta } from '../../../features/products/statusMeta'

import './ProductCard.css'

function ProductCard({ product }) {
  const productPath = getProductPath(product)
  const statusMeta = getStatusMeta(product.status)

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
          <Badge variant={statusMeta.badgeTone} className="product-card-availability">
            {statusMeta.label}
          </Badge>

          <h3 className="product-card-title">{product.name}</h3>

          <p className="product-card-description">{product.description}</p>
        </div>

        <Button
          to={productPath}
          variant="secondary"
          className="product-card-button"
          disabled={!statusMeta.canDownload}
        >
          Descubrir
        </Button>
      </div>
    </Card>
  )
}

export default ProductCard
