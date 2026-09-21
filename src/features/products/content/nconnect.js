const nconnect = {
  slug: 'nconnect',
  name: 'Connect',
  tagline: 'Tus dispositivos, sincronizados.',
  description:
    'Conecta tus dispositivos Nexora de forma instantánea. Comparte archivos, continúa tareas y mantén todos tus dispositivos sincronizados.',
  status: 'soon',
  platforms: [],
  version: null,
  theme: 'light',
  accent: 'color-share-accent',
  featured: false,
  order: 60,
  art: { product: 'nconnect' },
  image: '/images/products/banner_nconnect.png',
  downloads: [],
  page: {
    seo: {
      title: 'NConnect · Nexora',
      description:
        'Conecta tus dispositivos Nexora de forma instantánea. Comparte archivos, continúa tareas y mantén todo sincronizado.',
      ogImage: '/images/products/banner_nconnect.png',
    },
    sections: [
      {
        type: 'hero',
        props: {
          video: '/videos/nconnect/nconnect-hero.mp4',
          title: 'CONNECT',
          description: 'Tus dispositivos, sincronizados.',
        },
      },
      {
        type: 'featureGrid',
        props: {
          items: [
            {
              icon: 'share',
              title: 'TRANSFERENCIA INSTANTÁNEA',
              description:
                'Arrastra y suelta archivos entre dispositivos. Sin cables, sin nube intermedia.',
            },
            {
              icon: 'tasks',
              title: 'CONTINUIDAD DE TAREAS',
              description:
                'Empieza en el móvil, termina en el portátil. Portapapeles y apps compartidas.',
            },
            {
              icon: 'wifi',
              title: 'RED LOCAL PRIMERO',
              description:
                'Conexión directa entre tus dispositivos. Rápida, privada, sin internet.',
            },
          ],
        },
      },
      {
        type: 'cta',
        props: {
          title: 'CONNECT LLEGARÁ PRÓXIMAMENTE',
          description:
            'Únete a la comunidad para ser de los primeros en probarlo.',
          buttonText: 'Unirse a la comunidad',
          buttonTo: 'https://discord.gg/XnMBBBa26k',
        },
      },
    ],
  },
}

export default nconnect