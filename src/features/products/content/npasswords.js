const npasswords = {
  slug: 'npasswords',
  name: 'NPasswords',
  tagline: 'Gestor de contraseñas local-first.',
  description:
    'Un gestor de contraseñas que mantiene tus claves en tu dispositivo. Cifrado local, sincronización opcional y sin dependencias de la nube obligatorias.',
  status: 'soon',
  platforms: [],
  version: null,
  theme: 'dark',
  accent: 'color-passwords-accent',
  featured: false,
  order: 100,
  art: { product: 'npasswords' },
  downloads: [],
  page: {
    seo: {
      title: 'NPasswords · Nexora',
      description:
        'Gestor de contraseñas local-first. Tus claves en tu dispositivo, cifrado local, sincronización opcional.',
      ogImage: '/images/products/banner_npasswords.png',
    },
    sections: [
      {
        type: 'hero',
        props: {
          video: '/videos/npasswords/npasswords-hero.mp4',
          title: 'NPASSWORDS',
          description: 'Gestor de contraseñas local-first.',
        },
      },
      {
        type: 'featureGrid',
        props: {
          items: [
            {
              icon: 'lock',
              title: 'CIFRADO LOCAL',
              description:
                'Tus contraseñas se cifran en el dispositivo antes de salir. Solo tú tienes la llave.',
            },
            {
              icon: 'key',
              title: 'GENERADOR INTEGRADO',
              description:
                'Crea contraseñas seguras, memorables o PINs. Personaliza longitud y conjunto de caracteres.',
            },
            {
              icon: 'share',
              title: 'SINCRONIZACIÓN OPCIONAL',
              description:
                'Usa Nexora Cloud o tu propio WebDAV. Tú decides dónde viven tus datos.',
            },
          ],
        },
      },
      {
        type: 'cta',
        props: {
          title: 'NPASSWORDS LLEGARÁ PRÓXIMAMENTE',
          description:
            'Únete a la comunidad para ser de los primeros en probarlo.',
          buttonText: 'Unirse a la comunidad',
          buttonTo: 'https://discord.gg/XnMBBBa26k',
        },
      },
    ],
  },
}

export default npasswords