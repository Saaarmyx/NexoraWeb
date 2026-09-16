import { Link } from 'react-router-dom'
import { products } from '../../../features/products'
import getProductPath from '../../../utils/productRoutes'

import './Footer.css'

const featuredProductLinks = products
  .filter((product) => product.featured)
  .map((product) => ({
    label: product.name,
    to: getProductPath(product),
  }))

const footerColumns = [
  {
    title: 'Descubrir',
    links: [
      ...featuredProductLinks,
      { label: 'Productos', to: '/products' },
      { label: 'Ecosistema', to: '/ecosystem' },
      { label: 'Dónde descargar', to: '/downloads' },
    ],
  },
  {
    title: 'Ecosistema',
    links: [
      { label: 'Eventos', to: '/events' },
      { label: 'Soporte', to: '/support' },
    ],
  },
  {
    title: 'Comunidad',
    links: [
      { label: 'Discord', href: 'https://discord.gg/XnMBBBa26k' },
      { label: 'Telegram', href: 'https://t.me/+UvoqqOtxA-03YzE5' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacidad', to: '/privacy' },
      { label: 'Accesibilidad', to: '/accessibility' },
      { label: 'Seguridad', to: '/security' },
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
