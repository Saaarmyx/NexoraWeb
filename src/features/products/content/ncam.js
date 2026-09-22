const ncam = {
  slug: 'ncam',
  name: 'NCAM',
  tagline: 'Cámara rápida y lista para compartir.',
  description:
    'Una cámara diseñada para capturar al instante, con controles simples y resultados listos para tu ecosistema.',
  status: 'soon',
  platforms: [],
  version: null,
  theme: 'dark',
  accent: 'color-cam-accent',
  featured: true,
  order: 10,
  art: { product: 'ncam' },
  image: '/images/products/icons/icon-ncam.svg',
  downloads: [],
  page: {
    seo: {
      title: 'NCAM · Nexora',
      description:
        'Cámara rápida con controles simples y capturas listas para compartir en todo tu ecosistema.',
      ogImage: '/images/products/icons/icon-ncam.svg',
    },
    sections: [
      {
        type: 'hero',
        props: {
          video: '/videos/ncam/ncam-hero.mp4',
          title: 'NCAM',
          description: 'Cámara rápida y lista para compartir.',
        },
      },
      {
        type: 'featureGrid',
        props: {
          items: [
            {
              icon: 'image',
              title: 'CAPTURA INSTANTÁNEA',
              description: 'Abre, enfoca y captura en segundos. Sin modos innecesarios.',
            },
            {
              icon: 'record',
              title: 'VIDEO SIMPLE',
              description: 'Graba video con un toque y estabilización automática.',
            },
            {
              icon: 'share',
              title: 'COMPARTIR AL INSTANTE',
              description: 'Envía tus capturas a NPhotos, NChat o cualquier app del ecosistema.',
            },
          ],
        },
      },
      {
        type: 'cta',
        props: {
          title: 'NCAM LLEGARÁ PRÓXIMAMENTE',
          description: 'Únete a la comunidad para ser de los primeros en probarlo.',
          buttonText: 'Unirse a la comunidad',
          buttonTo: 'https://discord.gg/XnMBBBa26k',
        },
      },
    ],
  },
}

export default ncam