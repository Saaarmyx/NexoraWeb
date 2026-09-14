# Nexora Web

Sitio web del ecosistema **Nexora Labs**. React + Vite, sin TypeScript, sin frameworks de CSS.

## Stack

- React 19
- Vite
- React Router DOM
- react-icons
- CSS plano (sin Tailwind, sin Bootstrap, sin CSS-in-JS)

## Requisitos

- Node.js 18 o superior

## Puesta en marcha

```bash
npm install
npm run dev       # entorno de desarrollo con HMR
npm run build     # build de producción en dist/
npm run preview   # sirve el build de producción localmente
npm run lint       # oxlint sobre src/
```

## Estructura del proyecto

```text
public/
├── fonts/            # Gliker (headings) en .woff2
├── images/           # imágenes de producto
├── icons/            # íconos sueltos de producto
└── videos/

src/
├── components/
│   ├── atoms/         # componentes genéricos reutilizables
│   │   ├── Badge/      # etiqueta de estado/disponibilidad
│   │   ├── Button/     # botón (link, <a> o <button> según props)
│   │   └── Card/       # superficie base (variant, radius, isInteractive)
│   ├── CtaSection/     # banner de llamada a la acción, reutilizable entre páginas
│   ├── FeatureGrid/    # grilla de tarjetas icono + título + descripción
│   ├── Footer/         # footer global
│   ├── Header/         # header global (sticky, menú móvil, búsqueda)
│   ├── Hero/           # hero principal de Home
│   ├── LaunchHero/     # banner de lanzamiento destacado, controlado por props
│   └── ProductHero/    # sección de spotlight de un producto individual
│
├── data/               # datos compartidos entre páginas (fuente única de verdad)
│   ├── pillars.js       # pilares del ecosistema (Home, Ecosystem)
│   ├── products.js      # catálogo de productos (Home, Products)
│   └── values.js        # valores de la compañía (About)
│
├── pages/
│   ├── About/
│   ├── Ecosystem/
│   ├── Home/
│   └── Products/
│
├── styles/
│   ├── base.css        # estructura global, contenedores, utilidades (.section-heading, .eyebrow)
│   ├── fonts.css        # @font-face de Gliker
│   ├── reset.css         # reset base
│   └── tokens.css        # fuente de verdad del sistema de diseño
│
├── App.jsx              # BrowserRouter, Header, Routes, Footer
└── main.jsx
```

## Sistema de diseño

Todo el diseño visual se apoya en `src/styles/tokens.css`: colores, tipografía, espaciado,
radios, sombras y transiciones. Antes de escribir un valor nuevo en un componente, revisa si ya
existe un token equivalente.

Ancho máximo global del contenido: `--container-max-width: 1440px`.

Tipografías: **Gliker** para headings (`--font-family-heading`), **Inter** para el resto
(`--font-family-base`).

### Animaciones

Solo transiciones en estados `hover`, `focus` y `active`, y únicamente sobre `color`,
`background-color`, `border-color`, `box-shadow` u `opacity`. No se usan `transform`
(`translateY`, `scale`, `rotate`), animaciones de entrada ni efectos de scroll.

## Componentes atoms

`Button` y `Card` son los átomos base; `Badge` se sumó para etiquetas de estado. Antes de crear
un componente nuevo dentro de `atoms/`, confirma que no se pueda resolver reutilizando uno de
estos. Los átomos no deben contener lógica específica de una página o producto.

## Datos de producto

`src/data/products.js` es la fuente única para el catálogo. Cada producto tiene `slug`, `name`,
`description`, `availability`, `image`, `theme` y `featured`. Home muestra los que tienen
`featured: true` mediante `ProductHero`; Products muestra el catálogo completo en una grilla.
Para agregar un producto nuevo, solo hace falta un objeto más en ese archivo.

## Rutas actuales

```text
/            Home
/products    Catálogo completo de productos
/ecosystem   Pilares del ecosistema
/about       Compañía
```

No existen rutas por producto individual (`/products/:slug`) todavía; el catálogo vive en una
sola página. El Footer refleja esto: los enlaces con ruta real usan `<Link>`, y las secciones sin
página construida (cuenta, documentación, API, legal) se muestran como texto no interactivo en
vez de simular navegación que no existe.

## Convenciones

- No crear `App.css`.
- Los assets van en `public/`, nunca en `src/assets`.
- Cada componente tiene su propio `.css` junto al `.jsx`.
- Usar tokens existentes antes de hardcodear valores.
