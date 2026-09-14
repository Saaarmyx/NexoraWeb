import Hero from '../../components/Hero/Hero'
import LaunchHero from '../../components/LaunchHero/LaunchHero'
import ProductHero from '../../components/ProductHero/ProductHero'
import FeatureGrid from '../../components/FeatureGrid/FeatureGrid'
import CtaSection from '../../components/CtaSection/CtaSection'

import products from '../../data/products'
import pillars from '../../data/pillars'

function Home() {
  const featuredProducts = products.filter((product) => product.featured)

  return (
    <>
      {/* <Hero
        eyebrow="Nexora Labs"
        title="Un ecosistema, no una lista de apps."
        description="Nexora conecta tus dispositivos, archivos y servicios en una sola experiencia, diseñada para ser simple desde el primer momento."
        buttonText="Conocer el ecosistema"
        buttonTo="/ecosystem"
      /> */}

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
        />
      ))}

      {/* <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">ECOSISTEMA</span>
            <h2>Diseñado para funcionar en conjunto.</h2>
          </div>

          <FeatureGrid items={pillars} />
        </div>
      </section> */}

      {/* <CtaSection
        title="Explora todos los productos Nexora."
        description="Un catálogo pensado para crecer contigo, producto por producto."
        buttonText="Ver productos"
        buttonTo="/products"
      /> */}
    </>
  )
}

export default Home
