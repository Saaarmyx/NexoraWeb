const products = [
  {
    slug: 'ncloud',
    name: 'NEXA CLOUD',
    description:
      'Tu información, tus archivos y tus datos en un solo lugar. Sincroniza todo tu ecosistema Nexora y accede a lo que necesitas desde cualquier dispositivo.',
    availability: 'En desarrollo',
    image: '/images/products/banner_ncloud.png',
    theme: 'light',
    accent: 'color-cloud-accent',
    featured: false,
  },
  {
    slug: 'ncode',
    name: 'NCode',
    description:
      'Un entorno de desarrollo pensado para crear, probar y administrar tus proyectos desde un solo lugar.',
    availability: 'En beta',
    image: '/images/ncode/banner_ncode.png',
    theme: 'dark',
    accent: 'color-code-accent',
    featured: true,
  },
  {
    slug: 'nphotos',
    name: 'Photos',
    description:
      'Tus fotos y videos organizados automáticamente, respaldados en Nexora Cloud y disponibles en todos tus dispositivos.',
    availability: 'Disponible próximamente',
    image: '/images/nphotos/banner_nphotos.png',
    theme: 'light',
    accent: 'color-photos-accent',
    featured: true,
  },
  {
    slug: 'nqr',
    name: 'NQR',
    description:
      'Genera códigos QR al instante: enlaces, textos, redes Wi-Fi y más, listos para compartir desde cualquier dispositivo.',
    availability: 'En beta',
    image: '/images/nqr/banner_nqr.png',
    theme: 'light',
    accent: 'color-qr-accent',
    art: { product: 'nqr', variant: 'hero' },
    featured: true,
  },
  {
    slug: 'os',
    name: 'Nexa',
    description:
      'Un sistema operativo diseñado para funcionar en conjunto con todo tu ecosistema. Más simple, más rápido y construido alrededor de ti.',
    availability: 'Disponible próximamente',
    image: '/images/products/banner_nexa.png',
    theme: 'dark',
    accent: 'color-os-accent',
    featured: false,
  },
  {
    slug: 'nconnect',
    name: 'Connect',
    description:
      'Conecta tus dispositivos Nexora de forma instantánea. Comparte archivos, continúa tareas y mantén todos tus dispositivos sincronizados.',
    availability: 'Disponible próximamente',
    image: '/images/products/banner_nconnect.png',
    theme: 'light',
    accent: 'color-share-accent',
    featured: false,
  },
]

export default products
