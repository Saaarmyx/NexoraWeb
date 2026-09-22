const nnotes = {
  slug: 'nnotes',
  name: 'NNOTES',
  tagline: 'Gestor de notas local-first.',
  description:
    'Un gestor de notas que mantiene tus notas en tu dispositivo. Cifrado local, sincronización opcional y sin dependencias de la nube obligatorias.',
  status: 'soon',
  platforms: [],
  version: null,
  theme: 'light',
  accent: 'color-notes-accent',
  featured: true,
  order: 4,
  art: { product: 'nnotes' },
  image: '/images/products/icons/icon-nnotes.svg',
  downloads: [],
  page: {
    seo: {
      title: 'NNOTES · Nexora',
      description:
        'Gestor de contraseñas local-first. Tus claves en tu dispositivo, cifrado local, sincronización opcional.',
      ogImage: '/images/products/icons/icon-nnotes.svg',
    },
    sections: [
      {
        type: 'hero',
        props: {
          video: '/videos/nnotes/nnotes-hero.mp4',
          title: 'nnotes',
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
              description: 'Usa Nexora Cloud o tu propio WebDAV. Tú decides dónde viven tus datos.',
            },
          ],
        },
      },
      {
        type: 'cta',
        props: {
          title: 'nnotes LLEGARÁ PRÓXIMAMENTE',
          description: 'Únete a la comunidad para ser de los primeros en probarlo.',
          buttonText: 'Unirse a la comunidad',
          buttonTo: 'https://discord.gg/XnMBBBa26k',
        },
      },
    ],
  },
}

export default nnotes
