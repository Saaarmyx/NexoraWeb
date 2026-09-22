const ncalculator = {
  slug: 'ncalculator',
  name: 'NCALC',
  tagline: 'Calculadora simple y potente.',
  description:
    'Una calculadora diseñada para lo esencial: operaciones básicas, científicas y conversiones, con una interfaz limpia y sin distracciones.',
  status: 'soon',
  platforms: [],
  version: null,
  theme: 'light',
  accent: 'color-calculator-accent',
  featured: true,
  order: 3,
  art: { product: 'ncalculator' },
  image: '/images/products/icons/icon-ncalculator.svg',
  downloads: [],
  page: {
    seo: {
      title: 'NCalculator · Nexora',
      description:
        'Calculadora simple y potente: operaciones básicas, científicas y conversiones en una interfaz limpia.',
      ogImage: '/images/products/icons/icon-ncalculator.svg',
    },
    sections: [
      {
        type: 'hero',
        props: {
          video: '/videos/ncalculator/ncalculator-hero.mp4',
          title: 'NCALCULATOR',
          description: 'Calculadora simple y potente.',
        },
      },
      {
        type: 'featureGrid',
        props: {
          items: [
            {
              icon: 'calculator',
              title: 'BÁSICA Y CIENTÍFICA',
              description:
                'Desde sumas hasta trigonometría y logaritmos. Cambia de modo con un toque.',
            },
            {
              icon: 'history',
              title: 'HISTORIAL DE CÁLCULOS',
              description: 'Revisa, copia y reutiliza resultados anteriores. Sin perder el hilo.',
            },
            {
              icon: 'exchange-alt',
              title: 'CONVERSIONES',
              description: 'Unidades, divisas y más. Valores de referencia integrados.',
            },
          ],
        },
      },
      {
        type: 'cta',
        props: {
          title: 'NCALCULATOR LLEGARÁ PRÓXIMAMENTE',
          description: 'Únete a la comunidad para ser de los primeros en probarla.',
          buttonText: 'Unirse a la comunidad',
          buttonTo: 'https://discord.gg/XnMBBBa26k',
        },
      },
    ],
  },
}

export default ncalculator
