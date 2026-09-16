import { Link } from 'react-router-dom'

import './Footer.css'

// Cada enlace con `to` navega a una ruta real. Los que no tienen `to`
// representan secciones todavía no construidas: se muestran como texto,
// no como enlaces, para no simular navegación que no existe.
const footerColumns = [
  {
    title: 'Descubrir',
    links: [
      { label: 'Nexora Cloud', to: '/products' },
      { label: 'Nexora Photos', to: '/products' },
      { label: 'Nexora Connect', to: '/products' },
      { label: 'Nexora Code', to: '/products' },
      { label: 'Nexora OS', to: '/products' },
      { label: 'Dónde descargar', to: '/downloads' },
      { label: 'Todos los productos', to: '/products' },
    ],
  },
  {
    title: 'Ecosistema',
    links: [
      { label: 'Cómo funciona', to: '/ecosystem' },
      { label: 'Dispositivos' },
      { label: 'Servicios' },
      { label: 'Compatibilidad' },
    ],
  },
  {
    title: 'Cuenta',
    links: [
      { label: 'Mi cuenta Nexora' },
      { label: 'Configuración de cuenta' },
      { label: 'Iniciar sesión' },
    ],
  },
  {
    title: 'Para empresas',
    links: [
      { label: 'Nexora para empresas' },
      { label: 'Soluciones empresariales' },
      { label: 'Contacto comercial' },
    ],
  },
  {
    title: 'Para desarrolladores',
    links: [{ label: 'Documentación' }, { label: 'API' }, { label: 'Recursos' }],
  },
  {
    title: 'Nexora',
    links: [
      { label: 'Sobre Nexora', to: '/about' },
      { label: 'Noticias' },
      { label: 'Empleo' },
      { label: 'Contacto' },
    ],
  },
  {
    title: 'Valores',
    links: [{ label: 'Privacidad' }, { label: 'Accesibilidad' }, { label: 'Seguridad' }],
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
                  <span key={link.label} className="footer-link footer-link--soon">
                    {link.label}
                  </span>
                ),
              )}
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <span>Nexora Labs · Copyright © {currentYear}. Todos los derechos reservados.</span>

          <div className="footer-legal-links">
            <span className="footer-legal-item footer-legal-item--soon">
              Política de privacidad
            </span>

            <span className="footer-legal-divider">|</span>

            <span className="footer-legal-item footer-legal-item--soon">Aviso legal</span>
          </div>

          <span className="footer-country">Colombia</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
