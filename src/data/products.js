// Catálogo de productos del ecosistema Nexora.
// Fuente de verdad única: Home (destacados) y Products (catálogo completo)
// leen de aquí para no duplicar información entre páginas.

const products = [
  {
    slug: 'os',
    name: 'NEXA',
    description:
      'Un sistema operativo diseñado para funcionar en conjunto con todo tu ecosistema. Más simple, más rápido y construido alrededor de ti.',
    availability: 'En desarrollo',
    image: '/images/iphone_18_pro__gez8o055n1ui_large_2x.jpg',
    theme: 'dark',
    featured: false,
  },
  {
    slug: 'code',
    name: 'NCODE',
    description:
      'Un entorno de desarrollo pensado para crear, probar y administrar tus proyectos desde un solo lugar.',
    availability: 'Primera Beta Disponible',
    image: '/images/iphone_18_pro__gez8o055n1ui_large_2x.jpg',
    theme: 'dark',
    featured: true,
  },
  {
    slug: 'photos',
    name: 'NPHOTOS',
    description:
      'Tus fotos y videos organizados automáticamente, respaldados en Nexora Cloud y disponibles en todos tus dispositivos.',
    availability: 'En desarrollo',
    image: '/images/iphone_duo__f65y4ofawsii_large_2x.jpg',
    theme: 'light',
    featured: true,
  },
  {
    slug: 'cloud',
    name: 'NEXA CLOUD',
    description:
      'Tu información, tus archivos y tus datos en un solo lugar. Sincroniza todo tu ecosistema Nexora y accede a lo que necesitas desde cualquier dispositivo.',
    availability: 'Disponible próximamente',
    image: '/images/iphone_duo__f65y4ofawsii_large_2x.jpg',
    theme: 'light',
    featured: false,
  },
  {
    slug: 'connect',
    name: 'NCONNECT',
    description:
      'Conecta tus dispositivos Nexora de forma instantánea. Comparte archivos, continúa tareas y mantén todos tus dispositivos sincronizados.',
    availability: 'Disponible próximamente',
    image: '/images/iphone_duo__f65y4ofawsii_large_2x.jpg',
    theme: 'light',
    featured: false,
  },
]

export default products
