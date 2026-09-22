import { Link } from 'react-router-dom'
import Card from '../../components/ui/Card/Card'

import './LegalPage.css'

const legalContent = {
  privacy: {
    title: 'PRIVACIDAD',
    layout: 'long',
    updatedAt: '22 de septiembre de 2026',
    intro:
      'Tu información te pertenece. Esta política explica qué datos recopilamos, cómo los usamos y qué opciones tienes sobre ellos cuando usas el ecosistema Nexora.',
    sections: [
      {
        title: 'INTRODUCCIÓN',
        paragraphs: [
          'En Nexora Labs construimos productos pensados para darte claridad y control sobre tus datos. Esta política se aplica a los sitios web, aplicaciones y servicios de Nexora (en conjunto, "los servicios").',
          'Al usar los servicios aceptas las prácticas descritas en esta política. Si no estás de acuerdo con alguna de ellas, puedes optar por no usar los servicios.',
        ],
      },
      {
        title: 'INFORMACIÓN QUE RECOPILAMOS',
        paragraphs: [
          'Recopilamos únicamente la información necesaria para ofrecer, mantener y mejorar nuestros productos. La clasificamos en tres categorías:',
        ],
        items: [
          'Datos de cuenta: nombre, correo electrónico y preferencias que nos proporcionas al crear o gestionar tu cuenta.',
          'Información de uso: cómo interactúas con los servicios, incluyendo páginas visitadas, funciones usadas y datos técnicos de conexión.',
          'Contenido: archivos, documentos y otro material que decides almacenar o sincronizar dentro del ecosistema.',
        ],
      },
      {
        title: 'CÓMO USAMOS TU INFORMACIÓN',
        paragraphs: ['Usamos tus datos para operar el ecosistema y mejorar tu experiencia:',],
        items: [
          'Proveer, mantener y proteger los servicios que usas.',
          'Sincronizar tu contenido entre tus dispositivos cuando lo actives.',
          'Responder a tus solicitudes y ofrecer soporte.',
          'Mejorar nuestros productos con información agregada y anónima.',
        ],
        finalParagraph:
          'No vendemos tu información personal. Tampoco la usamos para publicidad comportamental basada en tus datos.',
      },
      {
        title: 'CUÁNDO COMPARTIMOS INFORMACIÓN',
        paragraphs: [
          'Solo compartimos tu información en situaciones limitadas y siempre con un propósito claro: cuando nos lo pides, cuando es necesario para operar los servicios (por ejemplo, con proveedores de infraestructura que actúan bajo nuestras instrucciones), o cuando la ley lo exige.',
          'Cuando trabajamos con terceros, exigimos que protejan tus datos con estándares equivalentes a los nuestros.',
        ],
      },
      {
        title: 'SEGURIDAD Y RETENCIÓN',
        paragraphs: [
          'Aplicamos medidas técnicas y organizativas para proteger tus datos: cifrado en tránsito, controles de acceso y prácticas de seguridad por diseño. Conoce más en nuestra página de seguridad.',
        ],
        links: [{ label: 'Conoce nuestra política de seguridad', to: '/security' }],
        items: [
          'Conservamos tus datos solo mientras sean necesarios para los fines descritos en esta política.',
          'Puedes eliminar tu cuenta y tu contenido en cualquier momento desde los ajustes de Nexora.',
        ],
      },
      {
        title: 'TUS DERECHOS',
        paragraphs: [
          'Tienes control sobre tu información. Puedes ejercer tus derechos cuando lo necesites:',
        ],
        items: [
          'Acceso: conocer qué datos tenemos sobre ti.',
          'Corrección: actualizar información inexacta o incompleta.',
          'Eliminación: solicitar que borremos tus datos.',
          'Oposición: pedir que dejemos de usar tu información en ciertos contextos.',
        ],
      },
      {
        title: 'COOKIES Y TECNOLOGÍAS SIMILARES',
        paragraphs: [
          'Usamos cookies y tecnologías similares únicamente con fines esenciales, como recordar tus preferencias y mantener la seguridad de tu sesión.',
          'No utilizamos cookies de terceros para rastrearte fuera de los servicios de Nexora.',
        ],
      },
      {
        title: 'CAMBIOS A ESTA POLÍTICA',
        paragraphs: [
          'Podemos actualizar esta política cuando nuestros productos evolucionen. Te avisaremos de los cambios importantes a través de los servicios o los canales de la comunidad.',
          'Cuando actualicemos la política, revisaremos la fecha de última actualización al inicio de esta página.',
        ],
      },
      {
        title: 'CONTACTO',
        paragraphs: [
          'Si tienes preguntas sobre esta política o sobre tus datos, puedes contactarnos por los siguientes canales:',
        ],
        links: [
          { label: 'Página de soporte', to: '/support' },
          { label: 'Comunidad en Discord', href: 'https://discord.gg/XnMBBBa26k' },
          { label: 'Canal de Telegram', href: 'https://t.me/+UvoqqOtxA-03YzE5' },
        ],
      },
    ],
  },
  accessibility: {
    title: 'ACCESIBILIDAD',
    layout: 'long',
    updatedAt: '22 de septiembre de 2026',
    intro:
      'Queremos que cada persona pueda explorar y usar Nexora con independencia, comodidad y confianza. Esta página explica cómo trabajamos para lograrlo y cómo puedes reportar una barrera.',
    sections: [
      {
        title: 'NUESTRO COMPROMISO',
        paragraphs: [
          'En Nexora Labs la accesibilidad no es un complemento: es parte de cómo diseñamos. Buscamos que nuestros productos puedan ser usados por la mayor cantidad de personas posible, incluyendo quienes dependen de tecnologías de asistencia.',
          'Este compromiso se revisa de forma continua conforme los productos del ecosistema evolucionan.',
        ],
      },
      {
        title: 'ESTÁNDARES QUE SEGUIMOS',
        paragraphs: ['Orientamos nuestro trabajo según las Pautas de Accesibilidad para el Contenido Web (WCAG), con el objetivo de alcanzar el nivel AA en nuestros servicios principales. Esto incluye:'],
        items: [
          'Alternativas textuales para imágenes y contenido no textual.',
          'Navegación clara, predecible y operable desde el teclado.',
          'Información y estado visible en distintos modos de presentación.',
          'Contraste suficiente y jerarquía visual consistente.',
        ],
      },
      {
        title: 'EXPERIENCIAS PERCEPTIBLES',
        paragraphs: [
          'Cuidamos que la información importante no dependa de un solo sentido. Combinamos color, forma, texto y estructura para que cada elemento comunique su significado incluso si un canal no está disponible.',
          'También respetamos las preferencias del sistema, como la reducción de movimiento, para adaptar las animaciones y transiciones.',
        ],
      },
      {
        title: 'COMPATIBILIDAD CON TECNOLOGÍAS DE ASISTENCIA',
        paragraphs: [
          'Trabajamos para que nuestros productos sean compatibles con lectores de pantalla, magnificadores, software de reconocimiento de voz y otros dispositivos de entrada alternativos.',
          'Si una tecnología específica no funciona como esperas, tu reporte es la mejor señal para corregirla.',
        ],
      },
      {
        title: 'REPORTA UNA BARRERA',
        paragraphs: [
          'Si encuentras una barrera de accesibilidad en Nexora, cuéntanos qué ocurrió, qué sección o función viste afectada y qué dispositivo, navegador o tecnología de asistencia utilizabas. Puedes reportarla por cualquiera de estos canales:',
        ],
        links: [
          { label: 'Página de soporte', to: '/support' },
          { label: 'Comunidad en Discord', href: 'https://discord.gg/XnMBBBa26k' },
          { label: 'Canal de Telegram', href: 'https://t.me/+UvoqqOtxA-03YzE5' },
        ],
      },
      {
        title: 'MEJORA CONTINUA',
        paragraphs: [
          'La accesibilidad es un proceso, no un estado final. Revisamos periódicamente nuestros componentes, patrones de diseño y páginas para detectar y reducir barreras antes de que lleguen a las personas.',
          'Cada reporte que recibimos se incorpora a esta revisión y nos ayuda a construir una experiencia mejor para todas las personas.',
        ],
      },
    ],
  },
  security: {
    title: 'SEGURIDAD',
    layout: 'long',
    updatedAt: '22 de septiembre de 2026',
    intro:
      'La seguridad está presente en cada capa del ecosistema Nexora, desde el diseño hasta la forma en que protegemos tus datos. Esta página describe nuestras prácticas y cómo reportar una vulnerabilidad.',
    sections: [
      {
        title: 'PROTECCIÓN POR DISEÑO',
        paragraphs: [
          'Integramos la seguridad desde las primeras decisiones del producto, no como una capa añadida al final. Esto reduce riesgos y protege tus cuentas, dispositivos y contenidos en todo el ciclo de vida.',
          'Aplicamos el principio de privilegio mínimo: cada componente accede solo a los datos que necesita para funcionar.',
        ],
      },
      {
        title: 'CIFRADO Y PROTECCIÓN DE DATOS',
        paragraphs: ['Protegemos la información en cada punto del recorrido:'],
        items: [
          'Cifrado en tránsito: las conexiones entre tus dispositivos y nuestros servicios viajan cifradas.',
          'Cifrado en reposo: los datos almacenados están protegidos con controles de cifrado y acceso.',
          'Controles de acceso: solo sistemas autorizados pueden leer o modificar información sensible.',
        ],
      },
      {
        title: 'AUTENTICACIÓN Y ACCESO',
        paragraphs: [
          'Cuidamos la forma en que accedes a tu cuenta y a tu contenido. Fomentamos contraseñas seguras, ofrecemos mecanismos de verificación y te damos señales claras sobre la actividad de tu cuenta.',
          'También usamos autenticación multifactor en los sistemas administrativos internos de Nexora.',
        ],
      },
      {
        title: 'CONTROL Y TRANSPARENCIA',
        paragraphs: [
          'Te damos herramientas para entender la actividad de tu cuenta y tomar decisiones informadas:',
        ],
        items: [
          'Revisión de dispositivos conectados y sesiones activas.',
          'Notificaciones ante actividad relevante en tu cuenta.',
          'Opciones claras para gestionar tus datos y conexiones.',
        ],
      },
      {
        title: 'REPORTA UNA VULNERABILIDAD',
        paragraphs: [
          'Si detectas un comportamiento inusual o una posible vulnerabilidad, te pedimos que lo reportes de forma responsable y no lo compartas públicamente antes de que podamos responder. Puedes contactarnos por estos canales:',
        ],
        links: [
          { label: 'Página de soporte', to: '/support' },
          { label: 'Comunidad en Discord', href: 'https://discord.gg/XnMBBBa26k' },
          { label: 'Canal de Telegram', href: 'https://t.me/+UvoqqOtxA-03YzE5' },
        ],
      },
      {
        title: 'NUESTRO PROCESO DE RESPUESTA',
        paragraphs: [
          'Cuando recibimos un reporte, lo revisamos, lo reproducimos y trabajamos en una corrección antes de divulgar el detalle. Agradecemos a quienes colaboran con la comunidad reportando hallazgos de buena fe.',
        ],
      },
    ],
  },
}

function renderSectionContent(section, index) {
  const paragraphs = section.paragraphs
    ? section.paragraphs.map((paragraph, paragraphIndex) => (
        <p key={paragraphIndex}>{paragraph}</p>
      ))
    : section.text
      ? <p>{section.text}</p>
      : null

  const items = section.items ? (
    <ul className="legal-page-list">
      {section.items.map((item, itemIndex) => (
        <li key={itemIndex}>{item}</li>
      ))}
    </ul>
  ) : null

  const links = section.links ? (
    <ul className="legal-page-links">
      {section.links.map((link, linkIndex) =>
        link.to ? (
          <li key={linkIndex}>
            <Link className="legal-page-link" to={link.to}>
              {link.label}
            </Link>
          </li>
        ) : (
          <li key={linkIndex}>
            <a
              className="legal-page-link"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          </li>
        ),
      )}
    </ul>
  ) : null

  const finalParagraph = section.finalParagraph ? <p>{section.finalParagraph}</p> : null

  return (
    <section className="legal-page-section" key={index}>
      <h2>{section.title}</h2>
      {paragraphs}
      {items}
      {finalParagraph}
      {links}
    </section>
  )
}

function LegalPage({ type }) {
  const content = legalContent[type]

  if (!content) {
    return null
  }

  const isLongLayout = content.layout === 'long'

  return (
    <section className="section legal-page">
      <div className="container">
        <Card variant="surface" radius="2xl" className="legal-page-card">
          <header className="legal-page-header">
            <h1>{content.title}</h1>
            <p>{content.intro}</p>
            {content.updatedAt ? (
              <p className="legal-page-updated">Última actualización: {content.updatedAt}</p>
            ) : null}
          </header>

          <div className={`legal-page-sections ${isLongLayout ? 'is-long' : ''}`}>
            {content.sections.map(renderSectionContent)}
          </div>
        </Card>
      </div>
    </section>
  )
}

export default LegalPage