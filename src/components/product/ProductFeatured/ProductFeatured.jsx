import Button from '../../atoms/Button/Button'
import './ProductFeatured.css'

function ProductFeatured({ product }) {
  if (!product) {
    return null
  }

  return (
    <article className="product-featured">
      <div className="product-featured-media">
        <img src={product.image} alt={product.name} className="product-featured-image" />
      </div>

      <div className="product-featured-content">
        <div className="product-featured-info">
          <span className="product-featured-availability">{product.availability}</span>

          <h2 className="product-featured-title">{product.name}</h2>

          <p className="product-featured-description">{product.description}</p>
        </div>

        <div className="product-featured-actions">
          <Button to={`/products/${product.slug}`} variant="primary">
            Descubrir
          </Button>
        </div>
      </div>
    </article>
  )
}

export default ProductFeatured
