const nsettings = {
  slug: 'nsettings',
  name: 'NSETTINGS',
  tagline: 'Todo tu ecosistema, en un solo panel.',
  description:
    'Un centro de control para ajustar tu privacidad, cuentas, apariencia y preferencias de todas tus apps Nexora.',
  status: 'soon',
  platforms: [],
  version: null,
  theme: 'light',
  accent: 'color-settings-accent',
  featured: true,
  order: 18,
  art: { product: 'nsettings' },
  image: '/images/products/icons/icon-nsettings.svg',
  downloads: [],
  page: {
    seo: {
      title: 'NSETTINGS · Nexora',
      description:
        'Centro de control para privacidad, cuentas, apariencia y preferencias de todo tu ecosistema Nexora.',
      ogImage: '/images/products/icons/icon-nsettings.svg',
    },
    sections: [
      {
        type: 'hero',
        props: {
          video: '/videos/nsettings/nsettings-hero.mp4',
          title: 'NSETTINGS',
          description: 'Todo tu ecosistema, en un solo panel.',
        },
      },
      {
        type: 'featureGrid',
        props: {
          items: [
            {
              icon: 'tasks',
              title: 'CONTROL TOTAL',
              description: 'Ajusta cada app del ecosistema desde un solo lugar.',
            },
            {
              icon: 'shield',
              title: 'PRIVACIDAD',
              description: 'Permisos, cifrado y tus datos bajo tu control.',
            },
            {
              icon: 'bolt',
              title: 'SINCRONIZADO',
              description: 'Tus preferencias se aplican en todos tus dispositivos al instante.',
            },
          ],
        },
      },
      {
        type: 'cta',
        props: {
          title: 'NSETTINGS LLEGARÁ PRÓXIMAMENTE',
          description: 'Únete a la comunidad para ser de los primeros en probarlo.',
          buttonText: 'Unirse a la comunidad',
          buttonTo: 'https://discord.gg/XnMBBBa26k',
        },
      },
    ],
  },
}

export default nsettings