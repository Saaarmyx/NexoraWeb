const nfiles = {
  slug: 'nfiles',
  name: 'NFiles',
  tagline: 'Administrador de archivos ligero y minimalista.',
  description:
    'Un administrador de archivos pensado para ser rápido, simple y funcionar bien en todo tu ecosistema. Organiza, busca y mueve tus archivos sin fricción.',
  status: 'soon',
  platforms: [],
  version: null,
  theme: 'light',
  accent: 'color-files-accent',
  featured: false,
  order: 70,
  art: { product: 'nfiles' },
  downloads: [],
  page: {
    seo: {
      title: 'NFiles · Nexora',
      description:
        'Un administrador de archivos ligero y minimalista para organizar, buscar y mover tus archivos sin fricción.',
      ogImage: '/images/products/banner_nfiles.png',
    },
    sections: [
      {
        type: 'hero',
        props: {
          video: '/videos/nfiles/nfiles-hero.mp4',
          title: 'NFILES',
          description: 'Administrador de archivos ligero y minimalista.',
        },
      },
      {
        type: 'featureGrid',
        props: {
          items: [
            {
              icon: 'file',
              title: 'RÁPIDO Y LIGERO',
              description:
                'Arranca al instante y consume pocos recursos. Diseñado para fluidez en cualquier dispositivo.',
            },
            {
              icon: 'folder',
              title: 'ORGANIZACIÓN SIMPLE',
              description:
                'Carpetas, etiquetas y búsqueda integrada. Encuentra lo que buscas en segundos.',
            },
            {
              icon: 'share',
              title: 'ECOSISTEMA CONECTADO',
              description:
                'Tus archivos viajan contigo entre dispositivos Nexora. Sincronía sin configuración.',
            },
          ],
        },
      },
      {
        type: 'cta',
        props: {
          title: 'NFILES LLEGARÁ PRÓXIMAMENTE',
          description:
            'Únete a la comunidad para ser de los primeros en probarlo.',
          buttonText: 'Unirse a la comunidad',
          buttonTo: 'https://discord.gg/XnMBBBa26k',
        },
      },
    ],
  },
}

export default nfiles