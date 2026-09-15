import { FeatureGrid } from '../../components/sections'

import values from '../../data/values'

function About() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">NEXORA LABS</span>

            <h1>Construimos tecnología que simplemente funciona.</h1>

            <p>
              Nexora Labs desarrolla productos y experiencias diseñadas para hacer que la tecnología
              sea más simple, intuitiva y conectada.
            </p>
          </div>

          <FeatureGrid items={values} />
        </div>
      </section>
    </>
  )
}

export default About
