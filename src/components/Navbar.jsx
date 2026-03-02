import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import logoImg from '../assets/logo.png'

const Navbar = () => {
  const { cartCount } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navClass = scrolled || !isHomePage ? 'scrolled' : ''
  const brandTextClass = scrolled || !isHomePage ? 'text-dark' : 'text-white'

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${navClass}`}>
      <div className="container">
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <img src={logoImg} alt="FTF Logo" className="me-2" style={{ height: '45px', width: 'auto' }} />
          <span className={`fw-bold d-none d-sm-inline ${brandTextClass}`}>FTF OFFICIAL</span>
        </NavLink>
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon" style={{ filter: (scrolled || !isHomePage) ? 'none' : 'invert(1)' }}></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto text-center py-3 py-lg-0">
            {[
              { path: '/', label: 'Accueil' },
              { path: '/equipes', label: 'Équipes' },
              { path: '/matchs', label: 'Calendrier' },
              { path: '/actualites', label: 'Actualités' },
              { path: '/boutique', label: 'Boutique' },
              { path: '/selections', label: 'Sélections' }
            ].map((link) => (
              <li key={link.path} className="nav-item">
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `nav-link px-lg-3 ${isActive ? 'active' : ''}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="d-flex align-items-center justify-content-center gap-3">
            <button
              className={`btn position-relative ${(scrolled || !isHomePage) ? 'btn-light' : 'btn-outline-light'} rounded-circle p-2`}
              style={{ width: '45px', height: '45px' }}
              data-bs-toggle="offcanvas"
              data-bs-target="#cartDrawer"
            >
              <i className="fas fa-shopping-basket"></i>
              {cartCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger cart-badge">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              className={`btn ${(scrolled || !isHomePage) ? 'btn-primary' : 'btn-outline-light'} px-4 rounded-pill fw-bold`}
              onClick={() => navigate('/login')}
            >
              <i className="fas fa-user me-2"></i> Connexion
            </button>
          </div>
        </div>
      </div>
    </nav>

  )
}

export default Navbar

