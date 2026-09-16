import { CollageCard, VideoHero } from '../../components/sections'

import './Ecosystem.css'

const ecosystemCollage = {
  title: 'TODO TRABAJA EN CONJUNTO',
  description:
    'Cada producto de Nexora resuelve una parte distinta de tu día sin perder de vista la experiencia completa.',
  images: [
    {
      src: '/images/products/banner_nconnect.png',
      alt: 'NConnect conectado con el ecosistema Nexora',
      title: 'CONECTA',
      description: 'Tus dispositivos se reconocen y trabajan juntos.',
    },
    {
      src: '/images/products/banner_ncloud.png',
      alt: 'Nexora Cloud',
      title: 'SINCRONIZA',
      description: 'Tu información te acompaña donde la necesitas.',
    },
    {
      src: '/images/products/banner_nphotos.png',
      alt: 'NPhotos',
      title: 'CONTINÚA',
      description: 'Empieza en un dispositivo y sigue en otro.',
    },
  ],
}

function Ecosystem() {
  return (
    <section className="section ecosystem-page">
      <div className="container">
        <VideoHero
          video="/videos/landing/hero_lanzamientos.mp4"
          title="TODO CONECTADO"
          description="Un ecosistema que entiende cómo te mueves y hace que cada producto funcione mejor junto a los demás."
        />

        <CollageCard {...ecosystemCollage} />

        <section className="ecosystem-story">
          <div className="ecosystem-story-content">
            <h2>LA TECNOLOGÍA SE ADAPTA A TI</h2>

            <p>
              Nexora conecta tus dispositivos, servicios y datos para que todo se sienta parte de un
              mismo espacio. Tus archivos están disponibles, tus tareas continúan y cada producto
              aprende a trabajar con los demás.
            </p>

            <p>
              Sin configuraciones interminables ni pasos innecesarios. Solo una experiencia fluida
              que empieza con un producto y crece contigo.
            </p>
          </div>

          <div className="ecosystem-story-gallery">
            <figure className="ecosystem-story-image ecosystem-story-image--large">
              <img src="/images/products/banner_nexa.png" alt="Nexora OS" />

              <figcaption className="ecosystem-story-image-caption">
                <h3>NEXA OS</h3>
                <p>EL CENTRO DE UNA EXPERIENCIA QUE CRECE CONTIGO.</p>
              </figcaption>
            </figure>

            <figure className="ecosystem-story-image ecosystem-story-image--small">
              <img src="/images/ncode/banner_ncode.png" alt="NCode" />

              <figcaption className="ecosystem-story-image-caption">
                <h3>NCODE</h3>
                <p>CREA, PRUEBA Y CONTINÚA DESDE CUALQUIER LUGAR.</p>
              </figcaption>
            </figure>

            <figure className="ecosystem-story-image ecosystem-story-image--small">
              <img src="/images/nphotos/banner_nphotos.png" alt="NPhotos" />

              <figcaption className="ecosystem-story-image-caption">
                <h3>NPHOTOS</h3>
                <p>TUS MOMENTOS ORGANIZADOS Y DISPONIBLES SIEMPRE.</p>
              </figcaption>
            </figure>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Ecosystem
