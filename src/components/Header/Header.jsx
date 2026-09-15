import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiMenu, FiSearch, FiX, FiUser } from 'react-icons/fi'

import './Header.css'

const navLinks = [
  {
    label: 'Productos',
    to: '/products',
  },
  {
    label: 'Ecosistema',
    to: '/ecosystem',
  },
  {
    label: 'Empresa',
    to: '/about',
  },
  {
    label: 'Soporte',
    to: '/support',
  },
]

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setIsSearchOpen(false)
  }, [location.pathname])

  const handleSearchToggle = () => {
    setIsSearchOpen((current) => !current)
    setIsMobileMenuOpen(false)
  }

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen((current) => !current)
    setIsSearchOpen(false)
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
          <button
            type="button"
            className="header-action"
            aria-label={isSearchOpen ? 'Cerrar búsqueda' : 'Abrir búsqueda'}
            aria-expanded={isSearchOpen}
            onClick={handleSearchToggle}
          >
            {isSearchOpen ? <FiX className="header-icon" /> : <FiSearch className="header-icon" />}
          </button>

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

      {isSearchOpen && (
        <div className="header-mobile-card-wrapper">
          <div className="header-search-inner">
            <FiSearch className="header-icon" />

            <input
              type="search"
              placeholder="Buscar en Nexora..."
              aria-label="Buscar en Nexora"
              autoFocus
            />
          </div>
        </div>
      )}

      {isMobileMenuOpen && (
        <div className="header-mobile-card-wrapper">
          <nav className="header-mobile-nav" aria-label="Navegación móvil">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`header-mobile-link ${location.pathname === link.to ? 'is-active' : ''}`}
              >
                {link.label}
              </Link>
            ))}

            <button type="button" className="header-mobile-link header-mobile-account">
              Cuenta
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
