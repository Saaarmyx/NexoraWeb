import ProductFeatured from '../../components/ProductFeatured/ProductFeatured'
import ProductCard from '../../components/ProductCard/ProductCard'

import products from '../../data/products'

import './Products.css'

function Products() {
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
