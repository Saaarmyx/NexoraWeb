const nqr = {
  slug: 'nqr',
  name: 'NQR',
  tagline: 'Crea y comparte códigos QR en segundos.',
  description:
    'Genera códigos QR al instante: enlaces, textos, redes Wi-Fi y más, listos para compartir desde cualquier dispositivo.',
  status: 'beta',
  platforms: [],
  version: null,
  theme: 'light',
  accent: 'color-qr-accent',
  featured: true,
  order: 40,
  art: { product: 'nqr', variant: 'hero' },
  image: '/images/nqr/banner_nqr.png',
  downloads: [
    {
      platform: 'github',
      label: 'Descargar',
      href: 'https://github.com/Saaarmyx/QrGenerator/releases',
    },
  ],
  page: {
    seo: {
      title: 'NQR · Nexora',
      description:
        'Genera códigos QR al instante: enlaces, textos, redes Wi-Fi y más, listos para compartir desde cualquier dispositivo.',
      ogImage: '/images/nqr/banner_nqr.png',
    },
    sections: [
      {
        type: 'hero',
        reveal: true,
        revealDelay: 0,
        props: {
          video: '/videos/nqr/nqr-hero.mp4',
          title: 'NQR',
          description: 'Crea y comparte códigos QR en segundos.',
        },
      },
      {
        type: 'collage',
        reveal: true,
        revealDelay: 90,
        props: {
          title: 'TODO LO QUE NECESITAS PARA COMPARTIR',
          description:
            'Una herramienta pensada para convertir enlaces, textos y conexiones en códigos listos para escanear.',
          images: [
            {
              src: '/images/nqr/nqr-crea.png',
              alt: 'Creación de un código QR en NQR',
              title: 'CREA',
              description: 'Genera códigos QR al instante desde cualquier dispositivo.',
            },
            {
              src: '/images/nqr/nqr-personaliza.png',
              alt: 'Personalización de un código QR en NQR',
              title: 'PERSONALIZA',
              description: 'Adapta tus códigos a lo que quieres compartir.',
            },
            {
              src: '/images/nqr/nqr-comparte.png',
              alt: 'Código QR compartido en el ecosistema Nexora',
              title: 'COMPARTE',
              description: 'Tus códigos viajan contigo por todo el ecosistema Nexora.',
            },
          ],
        },
      },
      {
        type: 'detailCards',
        reveal: true,
        revealDelay: 180,
        props: {
          title: 'TUS CÓDIGOS, A TU MANERA',
          description: 'NQR se adapta a lo que necesitas compartir y a cómo quieres mostrarlo.',
          variants: [
            {
              name: 'Clásico',
              token: 'color-os-accent',
              media: { type: 'art', product: 'nqr', variant: 'spot', tone: 'ink' },
              alt: 'Código QR clásico de NQR',
            },
            {
              name: 'Nexora',
              token: 'color-primary',
              media: { type: 'art', product: 'nqr', variant: 'spot', tone: 'brand' },
              alt: 'Código QR con estilo Nexora',
            },
          ],
        },
      },
      {
        type: 'textImage',
        reveal: true,
        revealDelay: 270,
        props: {
          title: 'INSTANTÁNEO',
          description:
            'NQR está pensado para que compartir no te haga esperar. Genera tu código y úsalo donde lo necesites, sin fricción.',
          subtitle: 'MENOS PASOS. MÁS ALCANCE.',
          secondaryDescription:
            'Desde un enlace hasta una red Wi-Fi, cada código funciona al momento y se integra con el resto del ecosistema Nexora.',
          video: '/videos/nqr/nqr-hero.mp4',
          videoAlt: 'NQR dentro del ecosistema Nexora',
        },
      },
      {
        type: 'links',
        reveal: true,
        revealDelay: 360,
        props: {
          title: 'NQR',
          description: 'NQR ya está en beta. Únete a la comunidad para conocer las novedades.',
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
              href: 'https://github.com/Saaarmyx/QrGenerator/releases',
              icon: 'download',
            },
          ],
        },
      },
    ],
  },
}

export default nqr
