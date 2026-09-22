const nstore = {
  slug: 'nstore',
  name: 'NSTORE',
  tagline: 'Descubre y descarga tu ecosistema.',
  description:
    'La tienda oficial de Nexora: descubre, descarga y actualiza todas las apps y extensiones del ecosistema.',
  status: 'soon',
  platforms: [],
  version: null,
  theme: 'dark',
  accent: 'color-store-accent',
  featured: true,
  order: 19,
  art: { product: 'nstore' },
  image: '/images/products/icons/icon-nstore.svg',
  downloads: [],
  page: {
    seo: {
      title: 'NSTORE · Nexora',
      description:
        'La tienda oficial de Nexora: descubre, descarga y actualiza todas las apps y extensiones del ecosistema.',
      ogImage: '/images/products/icons/icon-nstore.svg',
    },
    sections: [
      {
        type: 'hero',
        props: {
          video: '/videos/nstore/nstore-hero.mp4',
          title: 'NSTORE',
          description: 'Descubre y descarga tu ecosistema.',
        },
      },
      {
        type: 'featureGrid',
        props: {
          items: [
            {
              icon: 'download',
              title: 'DESCARGAS SIMPLES',
              description: 'Descarga e instala apps del ecosistema en un clic.',
            },
            {
              icon: 'hdd',
              title: 'ACTUALIZACIONES',
              description: 'Mantente al día con actualizaciones automáticas y seguras.',
            },
            {
              icon: 'share',
              title: 'EXTENSIONES',
              description: 'Amplía tus apps con herramientas de la comunidad Nexora.',
            },
          ],
        },
      },
      {
        type: 'cta',
        props: {
          title: 'NSTORE LLEGARÁ PRÓXIMAMENTE',
          description: 'Únete a la comunidad para ser de los primeros en probarlo.',
          buttonText: 'Unirse a la comunidad',
          buttonTo: 'https://discord.gg/XnMBBBa26k',
        },
      },
    ],
  },
}

export default nstore