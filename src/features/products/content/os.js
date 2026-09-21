const os = {
  slug: 'os',
  name: 'Nexa',
  tagline: 'Construido alrededor de ti.',
  description:
    'Un sistema operativo diseñado para funcionar en conjunto con todo tu ecosistema. Más simple, más rápido y construido alrededor de ti.',
  status: 'soon',
  platforms: [],
  version: null,
  theme: 'dark',
  accent: 'color-os-accent',
  featured: false,
  order: 50,
  art: { product: 'os' },
  image: '/images/products/banner_nexa.png',
  downloads: [],
  page: {
    seo: {
      title: 'Nexa · Nexora',
      description:
        'Un sistema operativo diseñado para funcionar en conjunto con todo tu ecosistema. Más simple, más rápido y construido alrededor de ti.',
      ogImage: '/images/products/banner_nexa.png',
    },
    sections: [
      {
        type: 'hero',
        props: {
          video: '/videos/nexa/nexa-hero.mp4',
          title: 'NEXA',
          description: 'Construido alrededor de ti.',
        },
      },
      {
        type: 'featureGrid',
        props: {
          items: [
            {
              icon: 'desktop',
              title: 'DISEÑADO PARA ECOSISTEMA',
              description:
                'Nexa nace para que tus dispositivos, apps y servicios funcionen como uno solo.',
            },
            {
              icon: 'bolt',
              title: 'RÁPIDO Y LIGERO',
              description:
                'Arranque en segundos, consumo mínimo de recursos. Rendimiento real, no benchmarks.',
            },
            {
              icon: 'user-shield',
              title: 'TÚ TIENES EL CONTROL',
              description:
                'Sin telemetría oculta, sin cuentas forzadas. Tu hardware, tus reglas.',
            },
          ],
        },
      },
      {
        type: 'cta',
        props: {
          title: 'NEXA LLEGARÁ PRÓXIMAMENTE',
          description:
            'Únete a la comunidad para ser de los primeros en probarlo.',
          buttonText: 'Unirse a la comunidad',
          buttonTo: 'https://discord.gg/XnMBBBa26k',
        },
      },
    ],
  },
}

export default os