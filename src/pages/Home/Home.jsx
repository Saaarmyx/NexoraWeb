import { LaunchHero } from '../../components/sections'
import { ProductHero, products } from '../../features/products'

function Home() {
  const featuredProducts = products.filter((product) => product.featured)

  return (
    <section className="section">
      <div className="container">
        <LaunchHero
          description={
            <>
              Descubre una nueva generación de tecnología
              <br className="launch-hero-desktop-break" />
              diseñada para funcionar en conjunto.
            </>
          }
          buttonText="Explorar Nexora"
          buttonTo="/products"
          video="/videos/landing/hero_lanzamientos.mp4"
          // image="/images/hero/launch_hero__f65y4ofawsii_large_2x.jpg"
        />
        {featuredProducts.map((product) => (
          <ProductHero
            key={product.slug}
            theme={product.theme}
            title={product.name}
            description={product.description}
            availability={product.availability}
            image={product.image}
            imageAlt={product.name}
            buttonText="Descubrir"
            buttonTo={`/products/${product.slug}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Home
