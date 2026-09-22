const nclock = {
  slug: 'nclock',
  name: 'NCLOCK',
  tagline: 'Reloj, alarma y temporizador, simple.',
  description:
    'Un reloj diseñado para lo esencial: hora mundial, alarmas y temporizadores con una interfaz limpia y sin distracciones.',
  status: 'soon',
  platforms: [],
  version: null,
  theme: 'light',
  accent: 'color-clock-accent',
  featured: true,
  order: 7,
  art: { product: 'nclock' },
  image: '/images/products/icons/icon-nclock.svg',
  downloads: [],
  page: {
    seo: {
      title: 'NCLOCK · Nexora',
      description:
        'Reloj, alarma y temporizador con hora mundial. Simple, limpio y sincronizado con tu ecosistema.',
      ogImage: '/images/products/icons/icon-nclock.svg',
    },
    sections: [
      {
        type: 'hero',
        props: {
          video: '/videos/nclock/nclock-hero.mp4',
          title: 'NCLOCK',
          description: 'Reloj, alarma y temporizador, simple.',
        },
      },
      {
        type: 'featureGrid',
        props: {
          items: [
            {
              icon: 'bolt',
              title: 'ALARMAS INSTANTÁNEAS',
              description:
                'Configura alarmas recurrentes o de un solo uso en segundos. Repetición inteligente incluida.',
            },
            {
              icon: 'history',
              title: 'HORA MUNDIAL',
              description:
                'Sigue la hora de cualquier ciudad del mundo. Ideal para viajes y trabajo remoto.',
            },
            {
              icon: 'tasks',
              title: 'TEMPORIZADORES FOCALIZADOS',
              description:
                'Cronómetro y temporizador con modos de enfoque para concentrarte en lo importante.',
            },
          ],
        },
      },
      {
        type: 'cta',
        props: {
          title: 'NCLOCK LLEGARÁ PRÓXIMAMENTE',
          description: 'Únete a la comunidad para ser de los primeros en probarlo.',
          buttonText: 'Unirse a la comunidad',
          buttonTo: 'https://discord.gg/XnMBBBa26k',
        },
      },
    ],
  },
}

export default nclock