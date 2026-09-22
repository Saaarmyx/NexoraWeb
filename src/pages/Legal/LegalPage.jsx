import Card from '../../components/ui/Card/Card'

import './LegalPage.css'

const legalContent = {
  privacy: {
    title: 'PRIVACIDAD',
    intro:
      'Tu información te pertenece. Nexora diseña sus productos para darte claridad y control sobre los datos que compartes.',
    sections: [
      {
        title: 'QUÉ INFORMACIÓN RECOPILAMOS',
        text: 'Recopilamos únicamente la información necesaria para ofrecer, mantener y mejorar nuestros productos. Esto puede incluir datos de cuenta, información técnica y preferencias de uso.',
      },
      {
        title: 'CÓMO USAMOS TUS DATOS',
        text: 'Usamos tus datos para operar el ecosistema, proteger tus servicios, responder a tus solicitudes y crear experiencias más útiles. No vendemos tu información personal.',
      },
      {
        title: 'TUS OPCIONES',
        text: 'Puedes solicitar acceso, corrección o eliminación de tu información. También puedes controlar las comunicaciones que recibes de Nexora.',
      },
    ],
  },
  accessibility: {
    title: 'ACCESIBILIDAD',
    intro:
      'Queremos que cada persona pueda explorar y usar Nexora con independencia, comodidad y confianza.',
    sections: [
      {
        title: 'DISEÑO PARA TODAS LAS PERSONAS',
        text: 'Trabajamos para que nuestras interfaces sean claras, navegables y compatibles con distintas formas de interacción, tamaños de pantalla y tecnologías de asistencia.',
      },
      {
        title: 'EXPERIENCIAS PERCEPTIBLES',
        text: 'Cuidamos el contraste, la jerarquía visual, los estados de foco y las alternativas textuales para que la información importante no dependa de un solo sentido.',
      },
      {
        title: 'AYÚDANOS A MEJORAR',
        text: 'Si encuentras una barrera de accesibilidad en Nexora, cuéntanos qué ocurrió y qué dispositivo o tecnología utilizaste. Tu reporte nos ayuda a construir una experiencia mejor.',
      },
    ],
  },
  security: {
    title: 'SEGURIDAD',
    intro:
      'La seguridad está presente en cada capa del ecosistema Nexora, desde el diseño hasta la forma en que protegemos tus datos.',
    sections: [
      {
        title: 'PROTECCIÓN POR DISEÑO',
        text: 'Integramos prácticas de seguridad desde las primeras decisiones del producto para reducir riesgos y proteger tus cuentas, dispositivos y contenidos.',
      },
      {
        title: 'CONTROL Y TRANSPARENCIA',
        text: 'Te damos herramientas y señales claras para entender la actividad de tu cuenta y tomar decisiones informadas sobre tus datos y conexiones.',
      },
      {
        title: 'REPORTA UN PROBLEMA',
        text: 'Si detectas un comportamiento inusual o una posible vulnerabilidad, ponte en contacto con el equipo de Nexora para que podamos investigarlo y responder.',
      },
    ],
  },
}

function LegalPage({ type }) {
  const content = legalContent[type]

  if (!content) {
    return null
  }

  return (
    <section className="section legal-page">
      <div className="container">
        <Card variant="surface" radius="2xl" className="legal-page-card">
          <header className="legal-page-header">
            <h1>{content.title}</h1>
            <p>{content.intro}</p>
          </header>

          <div className="legal-page-sections">
            {content.sections.map((section) => (
              <section className="legal-page-section" key={section.title}>
                <h2>{section.title}</h2>
                <p>{section.text}</p>
              </section>
            ))}
          </div>
        </Card>
      </div>
    </section>
  )
}

export default LegalPage
