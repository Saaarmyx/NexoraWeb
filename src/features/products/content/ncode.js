const ncode = {
  slug: 'ncode',
  name: 'NCode',
  tagline: 'Programar nunca fue tan fácil.',
  description:
    'Un entorno de desarrollo pensado para crear, probar y administrar tus proyectos desde un solo lugar.',
  status: 'beta',
  platforms: [],
  version: null,
  theme: 'dark',
  accent: 'color-code-accent',
  featured: true,
  order: 20,
  art: { product: 'ncode' },
  image: '/images/ncode/banner_ncode.png',
  downloads: [
    {
      platform: 'github',
      label: 'Descargar',
      href: 'https://github.com/Saaarmyx/NCode/releases',
    },
  ],
  page: {
    seo: {
      title: 'NCode · Nexora',
      description:
        'Un entorno de desarrollo pensado para crear, probar y administrar tus proyectos desde un solo lugar.',
      ogImage: '/images/ncode/banner_ncode.png',
    },
    sections: [
      {
        type: 'hero',
        props: {
          video: '/videos/ncode/ncode-hero.mp4',
          title: 'NCODE',
          description: 'Programar nunca fue tan fácil.',
        },
      },
      {
        type: 'collage',
        props: {
          title: 'TODO LO QUE NECESITAS PARA CREAR',
          description:
            'Un entorno pensado para acompañarte desde la primera línea de código hasta el resultado final.',
          images: [
            {
              src: '/images/ncode/ncode-crea.png',
              alt: 'NCode',
              title: 'CREA',
              description: 'Convierte tus ideas en código.',
            },
            {
              src: '/images/ncode/ncode-simula.png',
              alt: 'Simulación de un proyecto en NCode',
              title: 'SIMULA',
              description: 'Comprueba cómo funciona antes de terminar.',
            },
            {
              src: '/images/ncode/ncode-depura.png',
              alt: 'Depuración de un proyecto en NCode',
              title: 'DEPURA',
              description: 'Encuentra el problema y resuélvelo.',
            },
          ],
        },
      },
      {
        type: 'detailCards',
        props: {
          title: 'MIRALO A TU MANERA',
          description:
            'Personaliza tu espacio de trabajo y adapta el editor a tu forma de crear.',
          variants: [
            {
              name: 'Claro',
              token: 'color-white',
              media: { type: 'art', product: 'ncode', variant: 'spot', tone: 'paper' },
              alt: 'NCode en tema claro',
            },
            {
              name: 'Oscuro',
              token: 'color-os-accent',
              media: { type: 'art', product: 'ncode', variant: 'spot', tone: 'midnight' },
              alt: 'NCode en tema oscuro',
            },
            {
              name: 'Azul',
              token: 'color-code-accent',
              media: { type: 'art', product: 'ncode', variant: 'spot', tone: 'brand' },
              alt: 'NCode en tema azul',
            },
          ],
        },
      },
      {
        type: 'textImage',
        props: {
          title: 'RENDIMIENTO',
          description:
            'NCode está diseñado para que tus proyectos se sientan rápidos desde el primer momento. Trabaja con proyectos grandes, ejecuta múltiples tareas y mantén todo tu entorno de desarrollo funcionando con fluidez.',
          subtitle: 'PARA RENDIRSE A SUS PIES',
          secondaryDescription:
            'Todo está pensado para que el editor se adapte a tu forma de trabajar y no al revés. Menos esperas, menos interrupciones y más tiempo concentrado en crear.',
          video: '/videos/ncode/ncode-performance.mp4',
          videoAlt: 'NCode en funcionamiento',
        },
      },
      {
        type: 'links',
        props: {
          title: 'NCODE',
          description: 'Todo lo que necesitas para empezar a crear.',
          links: [
            {
              label: 'Discord',
              href: 'https://discord.gg/XnMBBBa26k',
              icon: 'discord',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/+UvoqqOtxA-03YzE5',
              icon: 'telegram',
            },
            {
              label: 'Descargar',
              href: 'https://github.com/Saaarmyx/NCode/releases',
              icon: 'download',
            },
          ],
        },
      },
    ],
  },
}

export default ncode
