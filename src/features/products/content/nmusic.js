const nmusic = {
  slug: 'nmusic',
  name: 'NMUSIC',
  tagline: 'Tu música, portable y sin fricción.',
  description:
    'Un reproductor de música ligero que organiza tu biblioteca local y la mantiene disponible en todo tu ecosistema.',
  status: 'soon',
  platforms: [],
  version: null,
  theme: 'dark',
  accent: 'color-music-accent',
  featured: true,
  order: 11,
  art: { product: 'nmusic' },
  image: '/images/products/icons/icon-nmusic.svg',
  downloads: [],
  page: {
    seo: {
      title: 'NMUSIC · Nexora',
      description:
        'Reproductor de música ligero con tu biblioteca local organizada y disponible en todo tu ecosistema.',
      ogImage: '/images/products/icons/icon-nmusic.svg',
    },
    sections: [
      {
        type: 'hero',
        props: {
          video: '/videos/nmusic/nmusic-hero.mp4',
          title: 'NMUSIC',
          description: 'Tu música, portable y sin fricción.',
        },
      },
      {
        type: 'featureGrid',
        props: {
          items: [
            {
              icon: 'record',
              title: 'BIBLIOTECA LOCAL',
              description: 'Tu música vive en tu dispositivo. Sin suscripciones obligatorias.',
            },
            {
              icon: 'download',
              title: 'PORTABLE',
              description: 'Sincroniza tus listas de reproducción entre dispositivos Nexora.',
            },
            {
              icon: 'share',
              title: 'ECOSISTEMA CONECTADO',
              description: 'Comparte canciones y listas con NChat, NSocial y más.',
            },
          ],
        },
      },
      {
        type: 'cta',
        props: {
          title: 'NMUSIC LLEGARÁ PRÓXIMAMENTE',
          description: 'Únete a la comunidad para ser de los primeros en probarlo.',
          buttonText: 'Unirse a la comunidad',
          buttonTo: 'https://discord.gg/XnMBBBa26k',
        },
      },
    ],
  },
}

export default nmusic