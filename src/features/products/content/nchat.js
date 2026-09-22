const nchat = {
  slug: 'nchat',
  name: 'NCHAT',
  tagline: 'Conversaciones simples y privadas.',
  description:
    'Mensajería instantánea con cifrado local, grupos y llamadas, diseñada para conversar sin perder el foco.',
  status: 'soon',
  platforms: [],
  version: null,
  theme: 'light',
  accent: 'color-chat-accent',
  featured: true,
  order: 16,
  art: { product: 'nchat' },
  image: '/images/products/icons/icon-nchat.svg',
  downloads: [],
  page: {
    seo: {
      title: 'NCHAT · Nexora',
      description:
        'Mensajería instantánea con cifrado, grupos y llamadas. Conversaciones simples y privadas.',
      ogImage: '/images/products/icons/icon-nchat.svg',
    },
    sections: [
      {
        type: 'hero',
        props: {
          video: '/videos/nchat/nchat-hero.mp4',
          title: 'NCHAT',
          description: 'Conversaciones simples y privadas.',
        },
      },
      {
        type: 'featureGrid',
        props: {
          items: [
            {
              icon: 'share',
              title: 'MENSAJES AL INSTANTE',
              description: 'Chats individuales y grupales con confirmación de lectura.',
            },
            {
              icon: 'user-shield',
              title: 'PRIVACIDAD',
              description: 'Cifrado de extremo a extremo. Tus conversaciones son tuyas.',
            },
            {
              icon: 'bolt',
              title: 'ECOSISTEMA INTEGRADO',
              description: 'Pasa de una conversación a una llamada o videollamada sin cambiar de app.',
            },
          ],
        },
      },
      {
        type: 'cta',
        props: {
          title: 'NCHAT LLEGARÁ PRÓXIMAMENTE',
          description: 'Únete a la comunidad para ser de los primeros en probarlo.',
          buttonText: 'Unirse a la comunidad',
          buttonTo: 'https://discord.gg/XnMBBBa26k',
        },
      },
    ],
  },
}

export default nchat