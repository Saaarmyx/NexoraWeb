const nrecorder = {
  slug: 'nrecorder',
  name: 'NRECODER',
  tagline: 'Grabadora de voz y pantalla, simple.',
  description:
    'Una grabadora diseñada para capturar audio y pantalla con un solo toque. Ligera, privada y lista para compartir.',
  status: 'soon',
  platforms: [],
  version: null,
  theme: 'dark',
  accent: 'color-recorder-accent',
  featured: true,
  order: 6,
  art: { product: 'nrecorder' },
  image: '/images/products/icons/icon-nrecorder.svg',
  downloads: [],
  page: {
    seo: {
      title: 'NRecorder · Nexora',
      description:
        'Grabadora de voz y pantalla simple. Captura, edita lo básico y comparte al instante.',
      ogImage: '/images/products/icons/icon-nrecorder.svg',
    },
    sections: [
      {
        type: 'hero',
        props: {
          video: '/videos/nrecorder/nrecorder-hero.mp4',
          title: 'NRECORDER',
          description: 'Grabadora de voz y pantalla, simple.',
        },
      },
      {
        type: 'featureGrid',
        props: {
          items: [
            {
              icon: 'record',
              title: 'UN TOQUE PARA GRABAR',
              description:
                'Inicia y detiene la grabación desde la notificación o el widget. Sin menús.',
            },
            {
              icon: 'edit',
              title: 'EDICIÓN BÁSICA',
              description: 'Recorta el inicio y el final. Exporta en formatos estándar.',
            },
            {
              icon: 'cloud',
              title: 'SINCRONIZACIÓN NEXORA',
              description:
                'Tus grabaciones aparecen en todos tus dispositivos. Privadas por defecto.',
            },
          ],
        },
      },
      {
        type: 'cta',
        props: {
          title: 'NRECORDER LLEGARÁ PRÓXIMAMENTE',
          description: 'Únete a la comunidad para ser de los primeros en probarla.',
          buttonText: 'Unirse a la comunidad',
          buttonTo: 'https://discord.gg/XnMBBBa26k',
        },
      },
    ],
  },
}

export default nrecorder
