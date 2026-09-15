# NexoraWeb

Sitio web del ecosistema **Nexora Labs**: presenta los productos de Nexora (Nexora Cloud,
NCode, NPhotos, NEXA OS, NConnect), el modelo de ecosistema conectado y la compañía. Construido
como una single-page app con rutas propias por sección, sin TypeScript y sin frameworks de CSS.

## Stack

- React 19
- Vite 8
- JavaScript (sin TypeScript)
- React Router DOM 7
- react-icons
- CSS plano (sin Tailwind, sin Bootstrap, sin CSS-in-JS)

## Estructura del proyecto

La aplicación expone módulos por responsabilidad. Los archivos `index.js` funcionan como puntos
de entrada estables para evitar imports profundos y permitir mover componentes internamente.

```text
NexoraWeb/
├── public/
│   ├── fonts/            # Gliker (headings) en .woff2
│   ├── images/            # banners de producto y assets de referencia
│   ├── icons/              # iconografía de producto (variantes black/white)
│   └── videos/              # videos de fondo usados en hero/coming-soon
│
├── src/
│   ├── components/
│   │   ├── ui/              # API pública de componentes básicos reutilizables
│   │   ├── atoms/           # componentes genéricos reutilizables en todo el proyecto
│   │   │   ├── Badge/         # etiqueta de estado/disponibilidad
│   │   │   ├── Button/        # botón (renderiza <Link>, <a> o <button> según props)
│   │   │   └── Card/           # superficie base genérica (variant, radius, isInteractive)
│   │   │
│   │   ├── layout/           # estructura global de la aplicación, presente en toda página
│   │   │   ├── Header/         # header sticky, navegación, menú móvil
│   │   │   └── Footer/          # footer con columnas de enlaces
│   │   │
│   │   ├── product/          # piezas de UI específicas del sistema de productos
│   │   │   ├── ProductCard/     # tarjeta de producto para grillas de catálogo
│   │   │   ├── ProductFeatured/  # producto destacado en formato ancho
│   │   │   └── ProductHero/       # spotlight de un producto individual (Home)
│   │   │
│   │   └── shared/           # secciones reutilizables entre páginas, no ligadas a un producto
│   │       ├── ComingSoonHero/  # hero de video para rutas todavía no construidas
│   │       ├── CtaSection/       # banner de llamada a la acción genérico
│   │       ├── FeatureGrid/       # grilla de tarjetas icono + título + descripción
│   │       ├── Hero/               # hero genérico con eyebrow/título/CTA
│   │       └── LaunchHero/          # banner de lanzamiento controlado por props (video o imagen)
│   │   ├── sections/         # API pública de las secciones compartidas
│   │
│   ├── app/
│   │   └── routes.jsx        # configuración central de rutas
│   │
│   ├── features/
│   │   ├── products/         # catálogo y API de componentes de productos
│   │   └── ncode/            # página y contenido específico de NCode
│   ├── pages/
│   │   ├── Home/            # "/"
│   │   ├── Products/         # "/products"
│   │   ├── Ecosystem/         # "/ecosystem"
│   │   ├── About/              # "/about"
│   │   ├── ComingSoon/          # ruta comodín "*"
│   │   └── NCode/                # "/products/ncode"
│   │
│   ├── data/                # fuente única de datos, separada de la UI
│   │   ├── products.js       # catálogo de productos del ecosistema
│   │   ├── pillars.js          # pilares del ecosistema (Home, Ecosystem)
│   │   └── values.js            # valores de la compañía (About)
│   │
│   ├── styles/
│   │   ├── tokens.css        # fuente de verdad del sistema de diseño (colores, tipografía, radios...)
│   │   ├── base.css            # estructura global, contenedores, utilidades
│   │   ├── fonts.css             # @font-face de Gliker
│   │   └── reset.css               # reset base
│   │
│   ├── App.jsx               # composición global: BrowserRouter, Header, rutas y Footer
│   └── main.jsx                # punto de entrada, monta <App /> y estilos base
│
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## Componentes

- **ui/**: punto de entrada público para bloques mínimos, genéricos y sin conocimiento de negocio
  (`Button`, `Card`, `Badge`). Los archivos internos todavía viven en `atoms/` como detalle de
  implementación.
- **layout/**: piezas que envuelven toda la aplicación y se renderizan una sola vez desde
  `App.jsx` (`Header`, `Footer`).
- **features/products/**: fuente de datos y API de componentes que reciben un objeto `product`
  (`ProductCard`, `ProductFeatured`, `ProductHero`).
- **features/ncode/**: composición y contenido de la página dedicada de NCode.
- **sections/**: punto de entrada para secciones reutilizables entre rutas, sin acoplarse a un
  producto concreto (`Hero`, `LaunchHero`, `FeatureGrid`, `CtaSection`, `ComingSoonHero`).
- **app/**: configuración de navegación separada de la composición global de `App.jsx`.

## Páginas

| Ruta                      | Página       | Descripción                                                   |
| ------------------------- | ------------ | ------------------------------------------------------------- |
| `/`                       | `Home`       | Lanzamiento destacado + spotlight de cada producto `featured` |
| `/products`               | `Products`   | Producto destacado + grilla con el resto del catálogo         |
| `/products/ncode`         | `NCode`      | Página dedicada del producto NCode, con su propio tema        |
| `/ecosystem`              | `Ecosystem`  | Pilares que explican cómo funciona el ecosistema Nexora       |
| `/about`                  | `About`      | Compañía: misión y valores                                    |
| `/support`                | `ComingSoon` | Placeholder de soporte                                        |
| `*` (cualquier otra ruta) | `ComingSoon` | Placeholder de video para secciones aún no construidas        |

## Sistema de productos

`src/features/products/data/products.js` es la fuente única de verdad del catálogo. `Home`,
`Products` y NCode acceden a los productos a través de `features/products`. El archivo
`src/data/products.js` solo conserva una reexportación de compatibilidad. Cada producto tiene:

- `slug` — identificador usado en la URL (`/products/:slug`) y como `key` en listas.
- `name` — nombre mostrado del producto.
- `description` — texto descriptivo usado en las distintas tarjetas/heroes.
- `availability` — estado de disponibilidad mostrado en un `Badge`/texto (p. ej. "En beta").
- `image` — ruta del banner en `public/images/`.
- `theme` — `'light'` o `'dark'`; determina el tema visual de la sección/página del producto.
- `featured` — si es `true`, el producto aparece en el spotlight de `Home` y en el catálogo de
  `Products`.

`NCode` obtiene su propio producto buscándolo por `slug` en ese mismo catálogo:

```js
const product = products.find((item) => item.slug === 'ncode')
```

Para añadir un producto nuevo solo hace falta agregar un objeto más a `products.js`; ningún
componente necesita cambiar.

## Sistema de temas

El campo `theme` de cada producto (`'light'` o `'dark'`) determina el tema visual de su sección o
página:

- En `Home`, `ProductHero` recibe `theme={product.theme}` y aplica la clase
  `product-hero-card--{theme}` correspondiente.
- En `features/ncode/NCodePage.jsx`, un `useEffect` lee `product.theme` y lo escribe en `document.body.dataset.theme`
  mientras la página está montada, restaurándolo a `'light'` al desmontarse.
- El tema general del sitio (claro/oscuro, controlado desde el `Header`) se guarda aparte, en
  `localStorage` bajo la clave `nexora-theme`, y también se aplica sobre `document.body.dataset.theme`
  desde `App.jsx`.

## Assets

Todos los assets públicos (fuentes, imágenes, iconos y videos) viven en `public/` y Vite los sirve
tal cual desde la raíz del sitio. Se referencian con rutas absolutas directamente en el JSX o en
`data/products.js`, por ejemplo:

```jsx
<img src="/images/banner_ncode.png" alt="NCode" />
```

No se importan como módulos de JS ni se mueven a `src/assets/`.

## Desarrollo

Comandos disponibles en `package.json`:

```bash
npm install        # instalar dependencias
npm run dev         # entorno de desarrollo con HMR
npm run build         # build de producción en dist/
npm run preview         # sirve el build de producción localmente
npm run lint              # oxlint sobre el proyecto
```

## Convenciones

- JavaScript puro, sin TypeScript.
- Componentes en PascalCase, cada uno en su propia carpeta junto a su `.css`.
- No existe `App.css`: los estilos de `App.jsx` viven en `src/styles/base.css`.
- Los componentes básicos se consumen desde `components/ui` y las secciones desde
  `components/sections`; se evitan imports profundos desde las páginas.
- Los datos específicos de una funcionalidad viven junto a ella en `features/`; los datos
  transversales (`pillars`, `values`) permanecen en `data/`.
- Los assets viven en `public/`, nunca en `src/assets/`.

## Principios

- **Reutilización**: preferir extender un componente existente (`Card`, `Button`, `FeatureGrid`)
  antes que crear uno nuevo para el mismo propósito.
- **Separación de responsabilidades**: `atoms/` no sabe de productos, `product/` no sabe de
  layout, `data/` no sabe de React.
- **Componentes pequeños**: cada componente resuelve una sola responsabilidad visual.
- **Tokens de diseño**: todo color, radio, tipografía o espaciado nuevo debe apoyarse primero en
  `src/styles/tokens.css` antes de hardcodear un valor.
- **No duplicar estilos**: si dos componentes necesitan el mismo patrón visual, ese patrón debe
  vivir en un token o en un componente compartido, no copiarse.
- **`Card` genérico**: `Card` sigue siendo una superficie base (`variant`, `radius`,
  `isInteractive`); la lógica específica de producto vive en los componentes de `product/` que lo
  envuelven, no en `Card` mismo.
- **`Button` genérico**: `Button` sigue siendo el único átomo de acción del proyecto, reutilizado
  por `product/` y `shared/` sin variantes paralelas.
