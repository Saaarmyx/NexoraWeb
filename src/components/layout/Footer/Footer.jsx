import { Link } from 'react-router-dom'
import { getProductsSync } from '../../../features/products'
import getProductPath from '../../../utils/productRoutes'

import './Footer.css'

// Los 5 productos principales en el orden oficial del catálogo.
const MAIN_PRODUCT_SLUGS = ['ncode', 'nphotos', 'ncalculator', 'nnotes', 'nfiles']

// Apps de entretenimiento; se muestran solo cuando estén disponibles o en beta.
const ENTERTAINMENT_SLUGS = ['nmusic', 'nbooks', 'nstore']

const isAvailable = (product) => product.status === 'released' || product.status === 'beta'

const products = getProductsSync()
const productBySlug = Object.fromEntries(products.map((product) => [product.slug, product]))

const buildProductLinks = (slugs) =>
  slugs
    .map((slug) => productBySlug[slug])
    .filter((product) => product && isAvailable(product))
    .map((product) => ({ label: product.name, to: getProductPath(product) }))

const footerColumns = [
  {
    title: 'Descubrir',
    links: buildProductLinks(MAIN_PRODUCT_SLUGS),
  },
  {
    title: 'Cuenta',
    links: [
      { label: 'Administra tu Cuenta de Nexora', to: '/account' },
      { label: 'NCloud.com', to: '/ncloud' },
    ],
  },
  {
    title: 'Entretenimiento',
    links: [
      { label: 'Nexora One', to: '/one' },
      ...buildProductLinks(ENTERTAINMENT_SLUGS),
    ],
  },
  {
    title: 'Valores de Nexora',
    links: [{ label: 'Privacidad', to: '/privacy' }],
  },
  {
    title: 'Acerca de Nexora',
    links: [
      { label: 'Oportunidades laborales', to: '/opportunities' },
      { label: 'Ética y cumplimiento de políticas', to: '/ethics' },
      { label: 'Eventos', to: '/events' },
    ],
  },
]

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-nav-grid">
          {footerColumns.map((column) => (
            <div className="footer-column" key={column.title}>
              <h4 className="footer-title">{column.title}</h4>

              {column.links.map((link) =>
                link.to ? (
                  <Link key={link.label} to={link.to} className="footer-link">
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="footer-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                ),
              )}
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <span>Nexora Labs · Copyright © {currentYear}. Todos los derechos reservados.</span>

          <span className="footer-legal-note">
            NEXORA LABS · TECNOLOGÍA QUE FUNCIONA EN CONJUNTO.
          </span>

          <span className="footer-country">Colombia</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer