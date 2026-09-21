import Button from '../../atoms/Button/Button'
import ProductArt from '../../illustrations/ProductArt'
import getProductPath from '../../../utils/productRoutes'
import isProductAvailable from '../../../utils/productAvailability'
import './ProductFeatured.css'

function ProductFeatured({ product }) {
  if (!product) {
    return null
  }

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
          <span className="product-featured-availability">{product.availability}</span>

          <h2 className="product-featured-title">{product.name}</h2>

          <p className="product-featured-description">{product.description}</p>
        </div>

        <div className="product-featured-actions">
          <Button
            to={getProductPath(product)}
            variant="primary"
            disabled={!isProductAvailable(product.availability)}
          >
            Descubrir
          </Button>
        </div>
      </div>
    </article>
  )
}

export default ProductFeatured
