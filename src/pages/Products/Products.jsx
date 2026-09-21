import { ProductCard, ProductFeatured, getProductsSync } from '../../features/products'

import './Products.css'

function Products() {
  const products = getProductsSync()
  const featuredProduct = products.find((product) => product.featured)

  const catalogProducts = products.filter(
    (product) => product.featured && product.slug !== featuredProduct?.slug,
  )

  return (
    <section className="section products-page">
      <div className="container">
        {featuredProduct && (
          <section className="products-section">
            <ProductFeatured product={featuredProduct} />
          </section>
        )}

        <section className="products-section">
          <div className="products-grid">
            {catalogProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </section>
      </div>
    </section>
  )
}

export default Products
