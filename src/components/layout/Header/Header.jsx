import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiMenu, FiX, FiUser } from 'react-icons/fi'
import { FaTelegramPlane } from 'react-icons/fa'

import './Header.css'

const navLinks = [
  {
    label: 'NCode',
    to: '/products/ncode',
  },
  {
    label: 'Productos',
    to: '/products',
  },
  {
    label: 'Ecosistema',
    to: '/ecosystem',
  },
  {
    label: 'Soporte',
    to: '/support',
  },
  {
    label: 'Dónde descargar',
    to: '/downloads',
  },
]

const telegramChannelUrl = 'https://t.me/+UvoqqOtxA-03YzE5'

function Header() {
  const [isScrolled, setIsScrolled] = useState(() => window.scrollY > 10)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen((current) => !current)
  }

  const handleNavigation = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={`header-wrapper ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="header-navbar">
        <div className="header-left">
          <Link to="/" className="header-logo-container" aria-label="Nexora">
            <span className="header-logo-text">N</span>
          </Link>
        </div>

        <nav className="header-nav-desktop" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`header-nav-link ${location.pathname === link.to ? 'is-active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="header-right">
          <a
            href={telegramChannelUrl}
            className="header-action"
            aria-label="Canal de Telegram de Nexora"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegramPlane className="header-icon" />
          </a>

          <button
            type="button"
            className="header-action header-action--account"
            aria-label="Abrir cuenta"
          >
            <FiUser className="header-icon" />
          </button>

          <button
            type="button"
            className="header-action header-action--mobile-toggle"
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMobileMenuOpen}
            onClick={handleMobileMenuToggle}
          >
            {isMobileMenuOpen ? (
              <FiX className="header-icon" />
            ) : (
              <FiMenu className="header-icon" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="header-mobile-card-wrapper">
          <nav className="header-mobile-nav" aria-label="Navegación móvil">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`header-mobile-link ${location.pathname === link.to ? 'is-active' : ''}`}
                onClick={handleNavigation}
              >
                {link.label}
              </Link>
            ))}

            <button
              type="button"
              className="header-mobile-link header-mobile-account"
              onClick={handleNavigation}
            >
              Cuenta
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
