import { FeatureGrid } from '../../components/sections'

import pillars from '../../data/pillars'

function Ecosystem() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">ECOSISTEMA</span>

            <h1>Todos tus dispositivos. Un solo ecosistema.</h1>

            <p>
              Nexora conecta tus dispositivos, servicios y productos para crear una experiencia
              coherente.
            </p>
          </div>

          <FeatureGrid items={pillars} />
        </div>
      </section>
    </>
  )
}

export default Ecosystem
