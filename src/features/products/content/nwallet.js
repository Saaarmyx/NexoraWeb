const nwallet = {
  slug: 'nwallet',
  name: 'NWALLET',
  tagline: 'Tus tarjetas, siempre contigo.',
  description:
    'Una billetera digital local-first para guardar tarjetas, pagos y credenciales con cifrado y privacidad por diseño.',
  status: 'soon',
  platforms: [],
  version: null,
  theme: 'dark',
  accent: 'color-wallet-accent',
  featured: true,
  order: 14,
  art: { product: 'nwallet' },
  image: '/images/products/icons/icon-nwallet.svg',
  downloads: [],
  page: {
    seo: {
      title: 'NWALLET · Nexora',
      description:
        'Billetera digital local-first para tarjetas y credenciales, con cifrado y privacidad por diseño.',
      ogImage: '/images/products/icons/icon-nwallet.svg',
    },
    sections: [
      {
        type: 'hero',
        props: {
          video: '/videos/nwallet/nwallet-hero.mp4',
          title: 'NWALLET',
          description: 'Tus tarjetas, siempre contigo.',
        },
      },
      {
        type: 'featureGrid',
        props: {
          items: [
            {
              icon: 'lock',
              title: 'CIFRADO LOCAL',
              description: 'Tus datos se cifran en el dispositivo antes de guardarse. Solo tú tienes la llave.',
            },
            {
              icon: 'hdd',
              title: 'TODO EN UN LUGAR',
              description: 'Tarjetas, credenciales y datos de pago organizados y al alcance.',
            },
            {
              icon: 'shield',
              title: 'PRIVACIDAD POR DISEÑO',
              description: 'Sin rastreo, sin nube obligatoria. Tus finanzas son tuyas.',
            },
          ],
        },
      },
      {
        type: 'cta',
        props: {
          title: 'NWALLET LLEGARÁ PRÓXIMAMENTE',
          description: 'Únete a la comunidad para ser de los primeros en probarlo.',
          buttonText: 'Unirse a la comunidad',
          buttonTo: 'https://discord.gg/XnMBBBa26k',
        },
      },
    ],
  },
}

export default nwallet