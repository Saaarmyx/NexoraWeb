const ncloud = {
  slug: 'ncloud',
  name: 'NEXA CLOUD',
  tagline: 'Tu información, en un solo lugar.',
  description:
    'Tu información, tus archivos y tus datos en un solo lugar. Sincroniza todo tu ecosistema Nexora y accede a lo que necesitas desde cualquier dispositivo.',
  status: 'soon',
  platforms: [],
  version: null,
  theme: 'light',
  accent: 'color-cloud-accent',
  featured: false,
  order: 10,
  art: { product: 'ncloud' },
  image: '/images/products/banner_ncloud.png',
  downloads: [],
  page: {
    seo: {
      title: 'NEXA Cloud · Nexora',
      description:
        'Tu información, tus archivos y tus datos en un solo lugar. Sincroniza todo tu ecosistema Nexora.',
      ogImage: '/images/products/banner_ncloud.png',
    },
    sections: [
      {
        type: 'hero',
        props: {
          video: '/videos/ncloud/ncloud-hero.mp4',
          title: 'NEXA CLOUD',
          description: 'Tu información, en un solo lugar.',
        },
      },
      {
        type: 'featureGrid',
        props: {
          items: [
            {
              icon: 'cloud',
              title: 'SINCRONIZACIÓN AUTOMÁTICA',
              description:
                'Tus archivos, fotos y documentos se mantienen al día en todos tus dispositivos.',
            },
            {
              icon: 'shield-alt',
              title: 'PRIVACIDAD POR DISEÑO',
              description:
                'Tus datos se cifran en tránsito y en reposo. Solo tú tienes acceso.',
            },
            {
              icon: 'hdd',
              title: 'ESPACIO FLEXIBLE',
              description:
                'Empieza gratis y amplía cuando lo necesites. Planes claros, sin sorpresas.',
            },
          ],
        },
      },
      {
        type: 'cta',
        props: {
          title: 'NEXA CLOUD LLEGARÁ PRÓXIMAMENTE',
          description:
            'Únete a la comunidad para ser de los primeros en probarlo.',
          buttonText: 'Unirse a la comunidad',
          buttonTo: 'https://discord.gg/XnMBBBa26k',
        },
      },
    ],
  },
}

export default ncloud