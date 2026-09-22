const nflow = {
  slug: 'nflow',
  name: 'NFLOW',
  tagline: 'Automatiza tareas entre tus apps.',
  description:
    'Un motor de automatización que conecta tus apps Nexora y otras herramientas para crear flujos sin código.',
  status: 'soon',
  platforms: [],
  version: null,
  theme: 'light',
  accent: 'color-flow-accent',
  featured: true,
  order: 21,
  art: { product: 'nflow' },
  image: '/images/products/icons/icon-nflow.svg',
  downloads: [],
  page: {
    seo: {
      title: 'NFLOW · Nexora',
      description:
        'Automatiza tareas entre tus apps Nexora: crea flujos sin código, conecta herramientas y ahorra tiempo.',
      ogImage: '/images/products/icons/icon-nflow.svg',
    },
    sections: [
      {
        type: 'hero',
        props: {
          video: '/videos/nflow/nflow-hero.mp4',
          title: 'NFLOW',
          description: 'Automatiza tareas entre tus apps.',
        },
      },
      {
        type: 'featureGrid',
        props: {
          items: [
            {
              icon: 'exchange-alt',
              title: 'FLUJOS SIN CÓDIGO',
              description: 'Conecta disparadores y acciones con un editor visual simple.',
            },
            {
              icon: 'bolt',
              title: 'AUTOMATIZACIÓN',
              description: 'Ahorra tiempo con tareas repetitivas resueltas al instante.',
            },
            {
              icon: 'tasks',
              title: 'ECOSISTEMA INTEGRADO',
              description: 'NMAIL, NFILES, NCAL y más: todo conectado en un solo flujo.',
            },
          ],
        },
      },
      {
        type: 'cta',
        props: {
          title: 'NFLOW LLEGARÁ PRÓXIMAMENTE',
          description: 'Únete a la comunidad para ser de los primeros en probarlo.',
          buttonText: 'Unirse a la comunidad',
          buttonTo: 'https://discord.gg/XnMBBBa26k',
        },
      },
    ],
  },
}

export default nflow