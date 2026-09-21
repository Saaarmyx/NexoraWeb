import { VideoHero } from '../../components/sections'
import { products } from '../../features/products'
import Card from '../../components/atoms/Card/Card'
import ProductArt from '../../components/illustrations/ProductArt'

import './Ecosystem.css'

const ecosystemProducts = products.filter((product) => product.featured)

function Ecosystem() {
  return (
    <section className="section ecosystem-page">
      <div className="container">
        <VideoHero
          video="/videos/ecosystem/ecosystem-hero.mp4"
          title="TODO CONECTADO"
          description="Un ecosistema que entiende cómo te mueves y hace que cada producto funcione mejor junto a los demás."
        />

        <Card variant="surface" radius="2xl" className="ecosystem-products-card">
          <section className="ecosystem-products">
            <div className="ecosystem-products-heading">
              <h2>CADA PRODUCTO TIENE SU PAPEL</h2>
            </div>

            <div className="ecosystem-product-list">
              {ecosystemProducts.map((product, index) => (
                <article
                  className={`ecosystem-product-row ${index % 2 === 1 ? 'is-reversed' : ''}`}
                  key={product.slug}
                >
                  <div className="ecosystem-product-image-wrap">
                    {product.art ? (
                      <ProductArt
                        product={product.art.product}
                        variant="hero"
                        title={product.name}
                      />
                    ) : (
                      <img src={product.image} alt={product.name} />
                    )}
                  </div>

                  <div className="ecosystem-product-copy">
                    <span>0{index + 1}</span>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </Card>
      </div>
    </section>
  )
}

export default Ecosystem
