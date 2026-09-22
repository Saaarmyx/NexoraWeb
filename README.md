# NexoraWeb

Sitio web del ecosistema **Nexora Labs**: presenta los productos de Nexora (NCode,
NPhotos, NQR, NEXA Cloud, NConnect, NFiles, NCalculator, NRecorder, NPasswords, NEXA OS),
el modelo de ecosistema conectado y sus lanzamientos. Construido como una single-page app
con rutas dinámicas por producto, sin TypeScript y sin frameworks de CSS.

## Stack

- React 19
- Vite 8
- JavaScript (sin TypeScript)
- React Router 7
- Font Awesome (iconografía, solo vía `Icon`)
- CSS plano (sin Tailwind, sin Bootstrap, sin CSS-in-JS)
- Vitest + Playwright (tests)

## Estructura del proyecto

```text
NexoraWeb/
├── public/
│   ├── fonts/            # Gliker (headings) + Inter/Fredoka/JetBrains Mono
│   ├── images/            # banners de producto y assets de referencia
│   └── videos/            # videos de fondo usados en hero/coming-soon
│
├── src/
│   ├── components/
│   │   ├── ui/            # API pública de componentes básicos (Badge, Button, Card, Icon, Reveal)
│   │   ├── layout/        # estructura global (Header, Footer)
│   │   ├── product/       # piezas de UI específicas del sistema de productos
│   │   │   ├── ProductCard/
│   │   │   ├── ProductFeatured/
│   │   │   └── ProductHero/
│   │   ├── illustrations/ # ProductArt + productMotifs (iconos por producto)
│   │   └── sections/      # API pública de secciones compartidas
│   │       ├── ErrorBoundary/
│   │       ├── CollageCard/
│   │       ├── ComingSoonHero/
│   │       ├── CtaSection/
│   │       ├── DetailCard/
│   │       ├── FeatureGrid/
│   │       ├── Hero/
│   │       ├── LaunchHero/
│   │       ├── ProductLinksCard/
│   │       ├── TextImageCard/
│   │       └── VideoHero/
│   ├── features/
│   │   └── products/      # catálogo, datos, validación, rutas dinámicas
│   │       ├── content/   # archivos por slug (ncloud.js, ncode.js, etc.)
│   │       ├── data/      # products-generated.js (auto-generado)
│   │       ├── ProductPage.jsx  # template único para todos los productos
│   │       ├── sectionRegistry.jsx # resolve secciones con lazy imports
│   │       ├── validateProduct.js  # validación de productos
│   │       ├── statusMeta.js       # estados (released/beta/soon)
│   │       └── index.js
│   ├── pages/
│   │   ├── Home/
│   │   ├── Products/
│   │   ├── Downloads/
│   │   ├── Events/
│   │   └── Legal/
│   ├── styles/
│   │   ├── tokens.css        # fuente de verdad del sistema de diseño
│   │   ├── fonts.css         # @font-face de todos los kits tipográficos
│   │   ├── base.css
│   │   └── reset.css
│   ├── App.jsx
│   ├── main.jsx
│   └── entry-server.jsx
│
├── scripts/
│   ├── generate-products.mjs  # genera products-generated.js en build
│   ├── postbuild-fonts.mjs    # limpia dist/fonts/ según VITE_FONT_SET
│   └── wcag-contrast.mjs      # checker de contraste WCAG 2.1
│
├── test/                    # tests unitarios con Vitest
│   ├── validateProduct.test.js
│   ├── statusMeta.test.js
│   ├── sectionRegistry.test.js
│   └── smoke.test.js
├── e2e/                     # tests de e2e con Playwright
│   ├── all-products.spec.js
│   └── product-pages.spec.js
├── docs/
│   └── FONTS.md
├── index.html
├── package.json
├── vitest.config.js
└── vite.config.js
```

## Componentes

- **ui/**: punto de entrada público para bloques mínimos (`Button`, `Card`, `Badge`, `Icon`, `Reveal`).
  `Icon` es el único punto de acceso a iconografía (Font Awesome Free, solid + brands).
- **layout/**: `Header`, `Footer` — presentes en toda la aplicación.
- **features/products/**: fuente de datos y template único para todos los productos.
  Cada producto se define en `content/<slug>.js` y se renderiza con `ProductPage`.
- **sections/**: secciones reutilizables entre rutas (`Hero`, `LaunchHero`, `VideoHero`,
  `CollageCard`, `DetailCard`, `TextImageCard`, `FeatureGrid`, `CtaSection`,
  `ProductLinksCard`, `ComingSoonHero`, `ErrorBoundary`).
- **illustrations/**: `ProductArt` y `productMotifs` para iconos tematizados por producto.

## Páginas

| Ruta                      | Página       | Descripción                                   |
| ------------------------- | ------------ | --------------------------------------------- |
| `/`                       | `Home`       | Lanzamiento destacado + spotlight             |
| `/products`               | `Products`   | Grilla del catálogo completo                  |
| `/products/:slug`         | `ProductPage`| Template único para todos los productos        |
| `/ecosystem`              | `Ecosystem`  | Modelo de ecosistema conectado                |
| `/downloads`              | `Downloads`  | Productos Nexora y descargas                  |
| `/events`                 | `Events`     | Lanzamientos y novedades                     |
| `/privacy`, `/accessibility`, `/security` | `LegalPage` | Privacidad, accesibilidad, seguridad |
| `*` (cualquier otra ruta) | `ComingSoon` | Placeholder de video                          |

## Sistema de productos

Cada producto se define en `src/features/products/content/<slug>.js`. El catálogo se
genera automáticamente en build mediante `scripts/generate-products.mjs`, produciendo
`src/features/products/data/products-generated.js`.

Cada producto tiene:

- `slug` — identificador para la URL (`/products/:slug`).
- `name` — nombre mostrado del producto.
- `description` — texto descriptivo.
- `status` — `'released'`, `'beta'` o `'soon'` (ver `statusMeta`).
- `image` — ruta del banner SVG en `public/images/products/banners/`.
- `theme` — `'light'` o `'dark'`.
- `accent` — nombre de token de acento (p. ej. `'color-code-accent'`).
- `art` — ilustración del catálogo (`{ product, variant }`).
- `featured` — si es `true`, aparece en spotlight y catálogo.
- `sections` — array de secciones para el template `ProductPage`.
- `downloads` — array de enlaces de descarga.

Para añadir un producto nuevo solo hace falta agregar un archivo en `content/`; ningún
componente necesita cambiar.

## Sistema de temas

El campo `theme` de cada producto (`'light'` o `'dark'`) determina el tema visual de su
sección o página. `ProductPage` aplica el tema al montarse y lo restaura al desmontarse.

## Ilustraciones

`src/components/illustrations/` contiene `ProductArt` y `productMotifs`. Cada producto
tiene un mapeo a un icono Font Awesome (`productMotifs.js`). Los componentes usan
`ProductArt` para renderizar ilustraciones tematizadas con el `accent` de su propia app.

## Motion

- `Reveal` (desde `components/ui`) anima la entrada on-scroll con `IntersectionObserver`.
- Toda animación respeta `prefers-reduced-motion`.

## Assets

Todos los assets públicos (fuentes, imágenes, videos) viven en `public/` y Vite los sirve
desde la raíz del sitio. Los banners de producto son SVG en `public/images/products/banners/`.

## Desarrollo

```bash
npm install                          # instalar dependencias
npm run dev                          # entorno de desarrollo con HMR
npm run build                        # build de producción en dist/
npm run preview                      # sirve el build de producción localmente
npm run lint                         # oxlint sobre el proyecto
npm run test                         # vitest run (unitarios)
npm run generate:products            # regenera products-generated.js
npm run check                        # lint + test + build
```

## Tests

- **Unitarios** (Vitest): `npm run test` — validación de productos, estado, secciones y smoke test.
- **E2E** (Playwright): `npx playwright test` — render de todos los productos y parity visual.
- **WCAG**: `node scripts/wcag-contrast.mjs` — verifica ratios de contraste WCAG 2.1.

## Convenciones

- JavaScript puro, sin TypeScript.
- Componentes en PascalCase, cada uno en su propia carpeta junto a su `.css`.
- Los componentes básicos se consumen desde `components/ui` y las secciones desde `components/sections`.
- Los datos específicos de un producto viven en `content/<slug>.js`; el catálogo se genera en build.
- Los assets viven en `public/`, nunca en `src/assets/`.
- Los colores hex solo se definen en `src/styles/tokens.css`.

## Principios

- **Reutilización**: preferir extender un componente existente antes que crear uno nuevo.
- **Separación de responsabilidades**: `ui/` no sabe de productos, `product/` no sabe de layout.
- **Tokens de diseño**: todo color, radio, tipografía o espaciado nuevo debe apoyarse en `tokens.css`.
- **Lazy loading**: las secciones se cargan con `import()` dinámico vía `sectionRegistry`.
- **ErrorBoundary**: cada sección en `ProductPage` está envuelta en un `ErrorBoundary`.
