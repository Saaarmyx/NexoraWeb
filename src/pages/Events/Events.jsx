import { Link } from 'react-router-dom'

import { products } from '../../features/products'
import Badge from '../../components/atoms/Badge/Badge'
import Button from '../../components/atoms/Button/Button'
import Card from '../../components/atoms/Card/Card'

import './Events.css'

const launchProducts = products.filter((product) => product.featured)

function Events() {
  return (
    <section className="section events-page">
      <div className="container">
        <section className="events-hero">
          <img
            className="events-hero-image"
            src="/images/hero/hero_lanzamientos.png"
            alt="Nexora presenta sus próximos lanzamientos"
          />

          <div className="events-hero-overlay">
            <div className="events-hero-content">
              <h1>NEXORA PRESENTA</h1>

              <p>
                Nuevas ideas, productos y experiencias diseñadas para ampliar la forma en la que
                vives tu tecnología.
              </p>
            </div>
          </div>
        </section>

        <Card variant="surface" radius="2xl" className="events-launches-shell">
          <section className="events-launches" id="launches">
            <div className="events-section-heading">
              <h2>ESTAS SON NUESTRAS ÚLTIMAS NOVEDADES.</h2>
              <p>Conoce los productos que están tomando forma dentro de Nexora.</p>
            </div>

            <div className="events-launch-grid">
              {launchProducts.map((product) => {
                const productPath =
                  product.slug === 'ncode' ? `/products/${product.slug}` : '/products'

                return (
                  <article className="events-launch-card" key={product.slug}>
                    <Link to={productPath} className="events-launch-media">
                      <img src={product.image} alt={product.name} />
                    </Link>

                    <div className="events-launch-content">
                      <div className="events-launch-info">
                        <Badge>{product.availability}</Badge>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                      </div>

                      <Button to={productPath} variant="secondary">
                        Más información
                      </Button>
                    </div>
                  </article>
                )
              })}
            </div>
          </section>
        </Card>
      </div>
    </section>
  )
}

export default Events
