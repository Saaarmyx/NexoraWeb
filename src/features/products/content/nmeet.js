const nmeet = {
  slug: 'nmeet',
  name: 'NMEET',
  tagline: 'Reuniones en línea, sin fricción.',
  description:
    'Videollamadas y reuniones con enlace simple, pantalla compartida y todo lo necesario para colaborar en línea.',
  status: 'soon',
  platforms: [],
  version: null,
  theme: 'dark',
  accent: 'color-meet-accent',
  featured: true,
  order: 20,
  art: { product: 'nmeet' },
  image: '/images/products/icons/icon-nmeet.svg',
  downloads: [],
  page: {
    seo: {
      title: 'NMEET · Nexora',
      description:
        'Videollamadas y reuniones con enlace simple, pantalla compartida y colaboración en tiempo real.',
      ogImage: '/images/products/icons/icon-nmeet.svg',
    },
    sections: [
      {
        type: 'hero',
        props: {
          video: '/videos/nmeet/nmeet-hero.mp4',
          title: 'NMEET',
          description: 'Reuniones en línea, sin fricción.',
        },
      },
      {
        type: 'featureGrid',
        props: {
          items: [
            {
              icon: 'desktop',
              title: 'VIDEO Y PANTALLA',
              description: 'Comparte tu pantalla o presenta con audio nítido.',
            },
            {
              icon: 'user-shield',
              title: 'ENLACE SIMPLE',
              description: 'Crea una reunión con un enlace y únete sin instalaciones.',
            },
            {
              icon: 'wifi',
              title: 'COLABORACIÓN',
              description: 'Chat, reacciones y herramientas integradas con tu ecosistema.',
            },
          ],
        },
      },
      {
        type: 'cta',
        props: {
          title: 'NMEET LLEGARÁ PRÓXIMAMENTE',
          description: 'Únete a la comunidad para ser de los primeros en probarlo.',
          buttonText: 'Unirse a la comunidad',
          buttonTo: 'https://discord.gg/XnMBBBa26k',
        },
      },
    ],
  },
}

export default nmeet