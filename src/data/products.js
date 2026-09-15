// Catálogo de productos del ecosistema Nexora.
// Fuente de verdad única: Home (destacados) y Products (catálogo completo)
// leen de aquí para no duplicar información entre páginas.

const products = [
  {
    slug: 'cloud',
    name: 'NEXA CLOUD',
    description:
      'Tu información, tus archivos y tus datos en un solo lugar. Sincroniza todo tu ecosistema Nexora y accede a lo que necesitas desde cualquier dispositivo.',
    availability: 'En desarrollo',
    image: '/images/banner_ncloud.png',
    theme: 'light',
    featured: false,
  },
  {
    slug: 'ncode',
    name: 'NCODE',
    description:
      'Un entorno de desarrollo pensado para crear, probar y administrar tus proyectos desde un solo lugar.',
    availability: 'En beta',
    image: '/images/banner_ncode.png',
    theme: 'dark',
    featured: true,
  },

  {
    slug: 'photos',
    name: 'NPHOTOS',
    description:
      'Tus fotos y videos organizados automáticamente, respaldados en Nexora Cloud y disponibles en todos tus dispositivos.',
    availability: 'Disponible próximamente',
    image: '/images/banner_nphotos.png',
    theme: 'light',
    featured: true,
  },
  {
    slug: 'os',
    name: 'NEXA',
    description:
      'Un sistema operativo diseñado para funcionar en conjunto con todo tu ecosistema. Más simple, más rápido y construido alrededor de ti.',
    availability: 'Disponible próximamente',
    image: '/images/banner_nexa.png',
    theme: 'dark',
    featured: true,
  },
  {
    slug: 'connect',
    name: 'NCONNECT',
    description:
      'Conecta tus dispositivos Nexora de forma instantánea. Comparte archivos, continúa tareas y mantén todos tus dispositivos sincronizados.',
    availability: 'Disponible próximamente',
    image: '/images/banner_nconnect.png',
    theme: 'light',
    featured: true,
  },
]

export default products
