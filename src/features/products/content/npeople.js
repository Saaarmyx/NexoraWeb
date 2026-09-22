const npeople = {
  slug: 'npeople',
  name: 'NPEOPLE',
  tagline: 'Contactos unificados y siempre al día.',
  description:
    'Un gestor de contactos que centraliza tu agenda en un solo lugar, sincronizada y disponible en todo tu ecosistema.',
  status: 'soon',
  platforms: [],
  version: null,
  theme: 'light',
  accent: 'color-people-accent',
  featured: true,
  order: 9,
  art: { product: 'npeople' },
  image: '/images/products/icons/icon-npeople.svg',
  downloads: [],
  page: {
    seo: {
      title: 'NPEOPLE · Nexora',
      description:
        'Contactos unificados, sincronizados y disponibles en todo tu ecosistema. Tu agenda siempre al día.',
      ogImage: '/images/products/icons/icon-npeople.svg',
    },
    sections: [
      {
        type: 'hero',
        props: {
          video: '/videos/npeople/npeople-hero.mp4',
          title: 'NPEOPLE',
          description: 'Contactos unificados y siempre al día.',
        },
      },
      {
        type: 'featureGrid',
        props: {
          items: [
            {
              icon: 'user-shield',
              title: 'AGENDA CENTRAL',
              description:
                'Todos tus contactos en un solo lugar, sin duplicados y siempre sincronizados.',
            },
            {
              icon: 'share',
              title: 'ECOSISTEMA CONECTADO',
              description: 'Comparte y recibe contactos entre tus apps Nexora sin fricción.',
            },
            {
              icon: 'wifi',
              title: 'SINCRONIZACIÓN CONTÍNUA',
              description: 'Cambios reflejados al instante en todos tus dispositivos.',
            },
          ],
        },
      },
      {
        type: 'cta',
        props: {
          title: 'NPEOPLE LLEGARÁ PRÓXIMAMENTE',
          description: 'Únete a la comunidad para ser de los primeros en probarlo.',
          buttonText: 'Unirse a la comunidad',
          buttonTo: 'https://discord.gg/XnMBBBa26k',
        },
      },
    ],
  },
}

export default npeople