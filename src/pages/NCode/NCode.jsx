import Button from '../../components/atoms/Button/Button'

import './NCode.css'

function NCode() {
  return (
    <section className="section ncode-page">
      <div className="container">
        <section className="ncode-hero">
          <div className="ncode-hero-content">
            <span className="ncode-hero-label">NEXORA</span>

            <h1 className="ncode-hero-title">NCode</h1>

            <p className="ncode-hero-description">
              Un espacio para crear, desarrollar y llevar tus ideas del código a la realidad.
            </p>

            <div className="ncode-hero-actions">
              <Button href="#" variant="primary">
                Comenzar
              </Button>
            </div>
          </div>

          <div className="ncode-hero-visual">
            <div className="ncode-editor">
              <div className="ncode-editor-header">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="ncode-editor-body">
                <div className="ncode-editor-sidebar"></div>

                <div className="ncode-editor-code">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ncode-intro">
          <div className="ncode-intro-content">
            <span className="ncode-section-label">NCode</span>

            <h2 className="ncode-section-title">Crear debería sentirse simple.</h2>

            <p className="ncode-section-description">
              NCode está diseñado para reducir la distancia entre una idea y aquello que quieres
              construir.
            </p>
          </div>
        </section>

        <section className="ncode-feature">
          <div className="ncode-feature-visual">
            <div className="ncode-terminal">
              <div className="ncode-terminal-header">
                <span>Terminal</span>
              </div>

              <div className="ncode-terminal-body">
                <span>$ ncode start</span>
                <span>Starting project...</span>
                <span>Ready.</span>
              </div>
            </div>
          </div>

          <div className="ncode-feature-content">
            <span className="ncode-section-label">FLUJO</span>

            <h2 className="ncode-section-title">Todo lo que necesitas para construir.</h2>

            <p className="ncode-section-description">
              Un entorno pensado para que puedas concentrarte en tu proyecto y no en la herramienta.
            </p>
          </div>
        </section>

        <section className="ncode-feature ncode-feature--reverse">
          <div className="ncode-feature-visual">
            <div className="ncode-project">
              <div className="ncode-project-sidebar">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="ncode-project-content">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>

          <div className="ncode-feature-content">
            <span className="ncode-section-label">PROYECTOS</span>

            <h2 className="ncode-section-title">Tu trabajo, en un solo lugar.</h2>

            <p className="ncode-section-description">
              Organiza tus proyectos y mantén todo aquello que necesitas para crear siempre cerca.
            </p>
          </div>
        </section>

        <section className="ncode-closing">
          <div className="ncode-closing-content">
            <span className="ncode-section-label">NCODE</span>

            <h2 className="ncode-closing-title">Construye lo que imaginas.</h2>

            <p className="ncode-closing-description">
              NCode es el comienzo de una nueva forma de crear dentro de Nexora.
            </p>

            <Button href="#" variant="primary">
              Abrir NCode
            </Button>
          </div>
        </section>
      </div>
    </section>
  )
}

export default NCode
