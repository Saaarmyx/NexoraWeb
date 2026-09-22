const nbooks = {
  slug: 'nbooks',
  name: 'NBOOKS',
  tagline: 'Leer, guardar y recordar mejor.',
  description:
    'Un lector y gestor de libros que organiza tu biblioteca y te permite leer con calma, donde sea.',
  status: 'soon',
  platforms: [],
  version: null,
  theme: 'light',
  accent: 'color-books-accent',
  featured: true,
  order: 13,
  art: { product: 'nbooks' },
  image: '/images/products/icons/icon-nbooks.svg',
  downloads: [],
  page: {
    seo: {
      title: 'NBOOKS · Nexora',
      description:
        'Lector y gestor de libros con biblioteca organizada, marcadores y sincronización entre dispositivos.',
      ogImage: '/images/products/icons/icon-nbooks.svg',
    },
    sections: [
      {
        type: 'hero',
        props: {
          video: '/videos/nbooks/nbooks-hero.mp4',
          title: 'NBOOKS',
          description: 'Leer, guardar y recordar mejor.',
        },
      },
      {
        type: 'featureGrid',
        props: {
          items: [
            {
              icon: 'file',
              title: 'BIBLIOTECA ORDENADA',
              description: 'Organiza tu colección por estanterías, autores y géneros.',
            },
            {
              icon: 'edit',
              title: 'MARCADORES Y NOTAS',
              description: 'Subraya, anota y vuelve a tus pasajes favoritos al instante.',
            },
            {
              icon: 'tasks',
              title: 'PROGRESO SINCRONIZADO',
              description: 'Retoma tu lectura exactamente donde la dejaste, en cualquier dispositivo.',
            },
          ],
        },
      },
      {
        type: 'cta',
        props: {
          title: 'NBOOKS LLEGARÁ PRÓXIMAMENTE',
          description: 'Únete a la comunidad para ser de los primeros en probarlo.',
          buttonText: 'Unirse a la comunidad',
          buttonTo: 'https://discord.gg/XnMBBBa26k',
        },
      },
    ],
  },
}

export default nbooks