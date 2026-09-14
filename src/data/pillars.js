import { FiRefreshCw, FiLink, FiShield, FiZap } from 'react-icons/fi'

// Pilares que definen cómo funciona el ecosistema Nexora.
// Usados en Home (resumen) y en la página Ecosistema (versión completa).

const pillars = [
  {
    icon: FiRefreshCw,
    title: 'Sincronización',
    description:
      'Tus archivos y datos se mantienen actualizados en todos tus dispositivos, sin pasos manuales.',
  },
  {
    icon: FiLink,
    title: 'Conectividad',
    description:
      'Tus dispositivos Nexora se reconocen entre sí y comparten información de forma instantánea.',
  },
  {
    icon: FiShield,
    title: 'Seguridad',
    description: 'Tu información está protegida en cada capa del ecosistema, desde el origen.',
  },
  {
    icon: FiZap,
    title: 'Simplicidad',
    description: 'Menos configuración, menos fricción. Todo funciona como se espera, desde el inicio.',
  },
]

export default pillars
