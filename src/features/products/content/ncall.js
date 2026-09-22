const ncall = {
  slug: 'ncall',
  name: 'NCALL',
  tagline: 'Llamadas claras, donde estés.',
  description:
    'Llamadas de voz y videollamadas con calidad nítida, pensadas para funcionar bien entre tus dispositivos Nexora.',
  status: 'soon',
  platforms: [],
  version: null,
  theme: 'dark',
  accent: 'color-call-accent',
  featured: true,
  order: 17,
  art: { product: 'ncall' },
  image: '/images/products/icons/icon-ncall.svg',
  downloads: [],
  page: {
    seo: {
      title: 'NCALL · Nexora',
      description:
        'Llamadas de voz y videollamadas con audio nítido, integradas con NChat y todo tu ecosistema.',
      ogImage: '/images/products/icons/icon-ncall.svg',
    },
    sections: [
      {
        type: 'hero',
        props: {
          video: '/videos/ncall/ncall-hero.mp4',
          title: 'NCALL',
          description: 'Llamadas claras, donde estés.',
        },
      },
      {
        type: 'featureGrid',
        props: {
          items: [
            {
              icon: 'record',
              title: 'AUDIO NÍTIDO',
              description: 'Cancelación de ruido y calidad de voz optimizada.',
            },
            {
              icon: 'user-shield',
              title: 'VIDEOLLAMADA',
              description: 'Videollamadas simples con un toque, desde NChat o NMeet.',
            },
            {
              icon: 'wifi',
              title: 'SIEMPRE CONECTADO',
              description: 'Cambia entre dispositivos sin interrumpir tu llamada.',
            },
          ],
        },
      },
      {
        type: 'cta',
        props: {
          title: 'NCALL LLEGARÁ PRÓXIMAMENTE',
          description: 'Únete a la comunidad para ser de los primeros en probarlo.',
          buttonText: 'Unirse a la comunidad',
          buttonTo: 'https://discord.gg/XnMBBBa26k',
        },
      },
    ],
  },
}

export default ncall