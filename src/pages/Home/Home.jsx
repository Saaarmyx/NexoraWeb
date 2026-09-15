import Hero from '../../components/shared/Hero/Hero'
import LaunchHero from '../../components/shared/LaunchHero/LaunchHero'
import ProductHero from '../../components/product/ProductHero/ProductHero'
import FeatureGrid from '../../components/shared/FeatureGrid/FeatureGrid'

import products from '../../data/products'
import pillars from '../../data/pillars'

function Home() {
  const featuredProducts = products.filter((product) => product.featured)

  return (
    <>
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
        video="/videos/hero_lanzamientos.mp4"
        // image="/images/launch_hero__f65y4ofawsii_large_2x.jpg"
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
    </>
  )
}

export default Home
