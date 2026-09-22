const nphotos = {
  slug: 'nphotos',
  name: 'NPHOTOS',
  tagline: 'Tus momentos, organizados y disponibles en todo tu ecosistema.',
  description:
    'Tus fotos y videos organizados automáticamente, respaldados en Nexora Cloud y disponibles en todos tus dispositivos.',
  status: 'beta',
  platforms: [],
  version: null,
  theme: 'light',
  accent: 'color-photos-accent',
  featured: true,
  order: 2,
  art: { product: 'nphotos' },
  image: '/images/products/banners/banner-nphotos.svg',
  downloads: [],
  page: {
    seo: {
      title: 'Photos · Nexora',
      description:
        'Tus fotos y videos organizados automáticamente, respaldados en Nexora Cloud y disponibles en todos tus dispositivos.',
      ogImage: '/images/products/banners/banner-nphotos.svg',
    },
    sections: [
      {
        type: 'hero',
        props: {
          video: '/videos/nphotos/nphotos-hero.mp4',
          title: 'NPHOTOS',
          description: 'Tus momentos, organizados y disponibles en todo tu ecosistema.',
        },
      },
      {
        type: 'collage',
        props: {
          title: 'TODO LO QUE NECESITAS PARA RECORDAR',
          description:
            'Una biblioteca pensada para organizar tus fotos y videos y mantenerlos cerca en cada dispositivo.',
          images: [
            {
              src: '/images/nphotos/nphotos-organiza.svg',
              alt: 'Organización de la biblioteca en NPhotos',
              title: 'ORGANIZA',
              description: 'Encuentra tus fotos y videos sin perder tiempo buscando.',
            },
            {
              src: '/images/nphotos/nphotos-respalda.svg',
              alt: 'Respaldo de NPhotos en Nexora Cloud',
              title: 'RESPALDA',
              description: 'Tu biblioteca se mantiene conectada con Nexora Cloud.',
            },
            {
              src: '/images/nphotos/nphotos-comparte.svg',
              alt: 'Recuerdos compartidos entre dispositivos Nexora',
              title: 'COMPARTE',
              description: 'Tus recuerdos viajan contigo entre tus dispositivos.',
            },
          ],
        },
      },
      {
        type: 'detailCards',
        props: {
          title: 'TUS RECUERDOS, A TU MANERA',
          description:
            'NPhotos se adapta a la forma en que guardas, encuentras y vuelves a tus momentos.',
          variants: [
            {
              name: 'Biblioteca',
              token: 'color-white',
              media: { type: 'art', product: 'nphotos', variant: 'spot', tone: 'brand' },
              alt: 'Biblioteca de NPhotos',
            },
            {
              name: 'Nexora Cloud',
              token: 'color-cloud-accent',
              media: { type: 'art', product: 'nphotos', variant: 'spot', tone: 'ink' },
              alt: 'NPhotos conectado con Nexora Cloud',
            },
          ],
        },
      },
      {
        type: 'textImage',
        props: {
          title: 'FLUYE CONTIGO',
          description:
            'NPhotos está pensado para que organizar tus recuerdos no se convierta en otra tarea. Todo permanece disponible y conectado mientras tú sigues con tu día.',
          subtitle: 'MENOS BUSCAR. MÁS RECORDAR.',
          secondaryDescription:
            'Desde tu biblioteca hasta el resto del ecosistema Nexora, cada parte trabaja para que vuelvas a tus momentos sin interrupciones.',
          video: '/videos/nphotos/nphotos-hero.mp4',
          videoAlt: 'NPhotos dentro del ecosistema Nexora',
        },
      },
      {
        type: 'links',
        props: {
          title: 'NPHOTOS',
          description:
            'NPhotos llegará próximamente. Únete a la comunidad para conocer las novedades.',
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
          ],
        },
      },
    ],
  },
}

export default nphotos
