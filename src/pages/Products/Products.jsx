import Card from '../../components/atoms/Card/Card'
import Badge from '../../components/atoms/Badge/Badge'

import products from '../../data/products'

import './Products.css'

function Products() {
  const featuredProducts = products.filter((product) => product.featured)
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <h1>PRODUCTOS</h1>

          <p>Descubre los productos que forman parte del ecosistema Nexora.</p>
        </div>

        <div className="products-grid">
          {featuredProducts.map((product) => (
            <Card key={product.slug} variant="surface" radius="xl" className="products-grid-item">
              <div className="products-grid-media">
                <img src={product.image} alt={product.name} className="products-grid-image" />
              </div>

              <div className="products-grid-body">
                <h2 className="products-grid-title">{product.name}</h2>

                <p className="products-grid-description">{product.description}</p>

                <Badge className="products-grid-availability">{product.availability}</Badge>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
