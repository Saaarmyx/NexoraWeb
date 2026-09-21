import { Hero } from '../../components/sections'

function NotFound() {
  return (
    <Hero
      eyebrow="Error 404"
      title="PÁGINA NO ENCONTRADA"
      description="La ruta que buscas no existe o fue movida a otro lugar del ecosistema."
      buttonText="Volver al inicio"
      buttonTo="/"
    />
  )
}

export default NotFound
