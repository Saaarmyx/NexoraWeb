import Button from '../../ui/Button/Button'
import ProductArt from '../../illustrations/ProductArt'
import getProductPath from '../../../utils/productRoutes'
import { getStatusMeta } from '../../../features/products/statusMeta'
import './ProductFeatured.css'

function ProductFeatured({ product }) {
  if (!product) {
    return null
  }

  const statusMeta = getStatusMeta(product.status)

  return (
    <article className="product-featured">
      <div className="product-featured-media">
        {product.art ? (
          <ProductArt product={product.art.product} variant="hero" title={product.name} />
        ) : (
          <img src={product.image} alt={product.name} className="product-featured-image" />
        )}
      </div>

      <div className="product-featured-content">
        <div className="product-featured-info">
          <span className="product-featured-availability">{statusMeta.label}</span>

          <h2 className="product-featured-title">{product.name}</h2>

          <p className="product-featured-description">{product.description}</p>
        </div>

        <div className="product-featured-actions">
          <Button
            to={getProductPath(product)}
            variant="primary"
            disabled={!statusMeta.canDownload}
          >
            Descubrir
          </Button>
        </div>
      </div>
    </article>
  )
}

export default ProductFeatured
