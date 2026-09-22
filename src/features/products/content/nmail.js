const nmail = {
  slug: 'nmail',
  name: 'NMAIL',
  tagline: 'Correo limpio, rápido y privado.',
  description:
    'Un cliente de correo minimalista que une todas tus cuentas en una bandeja simple, rápida y enfocada.',
  status: 'soon',
  platforms: [],
  version: null,
  theme: 'light',
  accent: 'color-mail-accent',
  featured: true,
  order: 15,
  art: { product: 'nmail' },
  image: '/images/products/icons/icon-nmail.svg',
  downloads: [],
  page: {
    seo: {
      title: 'NMAIL · Nexora',
      description:
        'Cliente de correo minimalista que une todas tus cuentas en una bandeja simple, rápida y privada.',
      ogImage: '/images/products/icons/icon-nmail.svg',
    },
    sections: [
      {
        type: 'hero',
        props: {
          video: '/videos/nmail/nmail-hero.mp4',
          title: 'NMAIL',
          description: 'Correo limpio, rápido y privado.',
        },
      },
      {
        type: 'featureGrid',
        props: {
          items: [
            {
              icon: 'exchange-alt',
              title: 'MULTICUENTA',
              description: 'Conecta varias cuentas y gestiona todo desde una sola bandeja.',
            },
            {
              icon: 'download',
              title: 'RÁPIDO Y LIGERO',
              description: 'Carga instantánea, sin scripts pesados ni rastreo.',
            },
            {
              icon: 'share',
              title: 'ECOSISTEMA CONECTADO',
              description: 'Comparte archivos con NFiles y agenda eventos con NCAL.',
            },
          ],
        },
      },
      {
        type: 'cta',
        props: {
          title: 'NMAIL LLEGARÁ PRÓXIMAMENTE',
          description: 'Únete a la comunidad para ser de los primeros en probarlo.',
          buttonText: 'Unirse a la comunidad',
          buttonTo: 'https://discord.gg/XnMBBBa26k',
        },
      },
    ],
  },
}

export default nmail