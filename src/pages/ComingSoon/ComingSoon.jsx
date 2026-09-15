import ComingSoonHero from '../../components/ComingSoonHero/ComingSoonHero'

function ComingSoon() {
  return (
    <ComingSoonHero
      video="/videos/coming-soon.mp4"
      title="Estamos trabajando en esto."
      description="Esta parte de Nexora llegará pronto."
      buttonText="Volver al inicio"
      buttonTo="/"
    />
  )
}

export default ComingSoon
