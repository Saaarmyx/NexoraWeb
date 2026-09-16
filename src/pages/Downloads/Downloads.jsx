import { ProductLinksCard } from '../../components/sections'

const downloadLinks = [
  {
    label: 'Descargar NCode',
    href: 'https://github.com/Saaarmyx/NexoraCode/releases',
    icon: 'download',
  },
  {
    label: 'Comunidad en Discord',
    href: 'https://discord.gg/XnMBBBa26k',
    icon: 'discord',
  },
  {
    label: 'Canal de Telegram',
    href: 'https://t.me/+UvoqqOtxA-03YzE5',
    icon: 'telegram',
  },
]

function Downloads() {
  return (
    <section className="section downloads-page">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">NEXORA</span>

          <h1>Descarga lo que necesitas para empezar.</h1>

          <p>
            Encuentra las versiones disponibles de Nexora y únete a los espacios donde construimos
            el ecosistema juntos.
          </p>
        </div>

        <ProductLinksCard
          title="EMPIEZA CON NEXORA"
          description="Descarga NCode, consulta sus versiones y conecta con la comunidad."
          links={downloadLinks}
        />
      </div>
    </section>
  )
}

export default Downloads
