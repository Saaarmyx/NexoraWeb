import { useEffect } from 'react'

import Card from '../../components/atoms/Card/Card'
import products from '../../data/products'

import './NCode.css'

function NCode() {
  const product = products.find((item) => item.slug === 'ncode')

  useEffect(() => {
    const theme = product?.theme || 'light'

    document.body.dataset.theme = theme

    return () => {
      document.body.dataset.theme = 'light'
    }
  }, [product?.theme])

  return (
    <section className="section ncode-page">
      <div className="container">
        <section className="ncode-hero">
          <video
            className="ncode-hero-video"
            src="/videos/ncode.mp4"
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          />

          <div className="ncode-hero-overlay">
            <div className="ncode-hero-content">
              <span className="ncode-hero-label">NEXORA</span>

              <h1 className="ncode-hero-title">NCODE</h1>

              <p className="ncode-hero-description">Programar nunca fue tan fácil.</p>
            </div>
          </div>
        </section>

        <section className="ncode-section">
          <Card variant="surface" radius="2xl" className="ncode-featured-card">
            <div className="ncode-card-header">
              <span className="ncode-section-label">LO DESTACADO</span>

              <h2 className="ncode-section-title">Todo lo que necesitas para crear.</h2>
            </div>

            <div className="ncode-slider">
              <div className="ncode-slider-track">
                <div className="ncode-slide">
                  <img src="/images/airpods_5__egy9fho2f48y_xlarge_2x.jpg" alt="NCode" />
                </div>

                <div className="ncode-slide">
                  <img src="/images/airpods_5__egy9fho2f48y_xlarge_2x.jpg" alt="NCode" />
                </div>

                <div className="ncode-slide">
                  <img src="/images/airpods_5__egy9fho2f48y_xlarge_2x.jpg.jpg" alt="NCode" />
                </div>
              </div>
            </div>
          </Card>
        </section>

        <section className="ncode-section">
          <Card variant="surface" radius="2xl" className="ncode-text-card">
            <span className="ncode-section-label">CREA</span>

            <h2 className="ncode-section-title">Convierte tus ideas en código.</h2>

            <p className="ncode-section-description">
              Escribe, estructura y acelera el desarrollo de tu aplicación dentro de un entorno
              unificado. Aprovecha el autocompletado inteligente, la navegación rápida por archivos
              y la organización modular para transformar conceptos complejos en módulos limpios sin
              desviarte de tu flujo de trabajo.
            </p>
          </Card>
        </section>

        <section className="ncode-section">
          <Card variant="surface" radius="2xl" className="ncode-text-card">
            <span className="ncode-section-label">SIMULA</span>

            <h2 className="ncode-section-title">Mira cómo funciona antes de terminar.</h2>

            <p className="ncode-section-description">
              Visualiza cambios en la interfaz y el comportamiento de la lógica en tiempo real con
              simulación interactiva. Renderiza componentes al instante, prueba distintos estados de
              ejecución y valida la respuesta del sistema en múltiples entornos sin necesidad de
              compilar todo el proyecto en cada iteración.
            </p>
          </Card>
        </section>

        <section className="ncode-section">
          <Card variant="surface" radius="2xl" className="ncode-text-card">
            <span className="ncode-section-label">DEPURA</span>

            <h2 className="ncode-section-title">Encuentra el problema. Resuélvelo.</h2>

            <p className="ncode-section-description">
              Aísla errores rápidamente con un depurador integrado de alta precisión. Inspecciona la
              pila de llamadas, rastrea fugas de memoria y monitorea variables en puntos de
              interrupción estratégicos para comprender el origen de cualquier fallo y mantener la
              estabilidad de la aplicación.
            </p>
          </Card>
        </section>

        <section className="ncode-section">
          <Card variant="surface" radius="2xl" className="ncode-text-card">
            <span className="ncode-section-label">OPTIMIZA</span>

            <h2 className="ncode-section-title">Mejora tu proyecto mientras crece.</h2>

            <p className="ncode-section-description">
              Analiza métricas de rendimiento en vivo para identificar cuellos de botella antes de
              que afecten a tus usuarios. Supervisa el consumo de recursos, refactoriza módulos
              críticos con sugerencias automáticas y asegura que la arquitectura permanezca ágil y
              escalable con el paso del tiempo.
            </p>
          </Card>
        </section>
      </div>
    </section>
  )
}

export default NCode
