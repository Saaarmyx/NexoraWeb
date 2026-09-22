const ncalendar = {
  slug: 'ncalendar',
  name: 'NCAL',
  tagline: 'Calendario y agenda sincronizada.',
  description:
    'Un calendario que organiza tus eventos, recordatorios y reuniones en un solo lugar, sincronizado con todo tu ecosistema.',
  status: 'soon',
  platforms: [],
  version: null,
  theme: 'light',
  accent: 'color-calendar-accent',
  featured: true,
  order: 8,
  art: { product: 'ncalendar' },
  image: '/images/products/icons/icon-ncalendar.svg',
  downloads: [],
  page: {
    seo: {
      title: 'NCAL · Nexora',
      description:
        'Calendario y agenda con eventos, recordatorios y reuniones sincronizadas en todo tu ecosistema.',
      ogImage: '/images/products/icons/icon-ncalendar.svg',
    },
    sections: [
      {
        type: 'hero',
        props: {
          video: '/videos/ncalendar/ncalendar-hero.mp4',
          title: 'NCAL',
          description: 'Calendario y agenda sincronizada.',
        },
      },
      {
        type: 'featureGrid',
        props: {
          items: [
            {
              icon: 'tasks',
              title: 'AGENDA UNIFICADA',
              description:
                'Eventos, recordatorios y tareas en una sola vista. Nada se te escapa.',
            },
            {
              icon: 'share',
              title: 'SINCRONIZADO',
              description:
                'Tu agenda viaja contigo entre dispositivos Nexora. Cambios al instante.',
            },
            {
              icon: 'history',
              title: 'VISTA INTELIGENTE',
              description:
                'Día, semana, mes o agenda. Elige cómo prefieres planificar tu tiempo.',
            },
          ],
        },
      },
      {
        type: 'cta',
        props: {
          title: 'NCAL LLEGARÁ PRÓXIMAMENTE',
          description: 'Únete a la comunidad para ser de los primeros en probarlo.',
          buttonText: 'Unirse a la comunidad',
          buttonTo: 'https://discord.gg/XnMBBBa26k',
        },
      },
    ],
  },
}

export default ncalendar