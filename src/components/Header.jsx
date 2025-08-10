import { useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'

const navItems = [
  { label: 'Services', to: '/services' },
  { label: 'Tools', to: '/tools' },
  { label: 'Blog', to: '/blog' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/#contact', isContactPage: true },
]

export default function Header({ onContactClick }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  // Update navItems to handle Contact click
  const handleNavClick = (e, to) => {
    if (to === '/#contact') {
      e.preventDefault()
      if (location.pathname === '/') {
        if (onContactClick) onContactClick()
        setMenuOpen(false)
      } else {
        navigate('/contact')
        setMenuOpen(false)
      }
    } else if (to === '/services') {
      e.preventDefault()
      navigate('/services')
      setMenuOpen(false)
    } else if (to === '/tools') {
      e.preventDefault()
      navigate('/tools')
      setMenuOpen(false)
    } else if (to.startsWith('/#')) {
      e.preventDefault()
      const id = to.replace('/#', '')
      const el = document.getElementById(id)
      if (el) {
        window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' })
        setMenuOpen(false)
      }
    } else {
      setMenuOpen(false)
    }
  }

  return (
    <header style={{ background: '#111', borderBottom: '2px solid #F2F9FF', position: 'sticky', top: 0, zIndex: 100 }}>
      <nav className="container d-flex align-items-center justify-content-between py-2 position-relative" style={{ minHeight: 64 }}>
        <Link to="/" className="d-flex align-items-center text-decoration-none logo-link" style={{ fontWeight: 900, fontSize: '1.7rem', color: '#F2F9FF', letterSpacing: '1px', transition: 'transform 0.2s' }}>
          <span className="logo-svg-wrapper" style={{ display: 'inline-block', transition: 'transform 0.2s, filter 0.2s' }}>
            <img src="/logo.png" alt="Quantum Bay Logo" height={40} style={{ marginRight: 8, filter: 'drop-shadow(0 0 0 #F2F9FF)', borderRadius: 8, padding: 0 }} className="logo-img" />
          </span>
          <span className="logo-text" style={{ color: '#F2F9FF', transition: 'color 0.2s, text-shadow 0.2s' }}>GenOrcasX</span>
        </Link>
        {/* Hamburger for mobile */}
        <button className="d-lg-none border-0 bg-transparent" style={{ color: '#F2F9FF', fontSize: 32 }} onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">
          <span style={{ display: menuOpen ? 'none' : 'inline' }}>&#9776;</span>
          <span style={{ display: menuOpen ? 'inline' : 'none' }}>&#10005;</span>
        </button>
        <ul className={`nav d-none d-lg-flex`} style={{ gap: '2rem', marginBottom: 0 }}>
          {navItems.map((item) => (
            <li className="nav-item" key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  'nav-link px-0 fw-bold' +
                  ((item.isContactPage ? location.pathname === '/contact' : isActive) ? ' active' : '')
                }
                style={() => ({
                  color: '#F2F9FF',
                  fontSize: '1.1rem',
                  borderBottom: (item.isContactPage ? location.pathname === '/contact' : location.pathname === item.to) ? '3px solid #F2F9FF' : '3px solid transparent',
                  transition: 'border-bottom 0.2s',
                  paddingBottom: 4,
                  position: 'relative',
                })}
                onClick={(e) => handleNavClick(e, item.to)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        {/* Mobile menu */}
        {menuOpen && (
          <ul className="nav flex-column position-absolute w-100 bg-black p-4 rounded shadow-lg" style={{ top: 64, right: 0, zIndex: 200, background: '#111' }}>
            {navItems.map((item) => (
              <li className="nav-item mb-3" key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    'nav-link px-0 fw-bold' +
                    (isActive ? ' active' : '')
                  }
                  style={({ isActive }) => ({
                    color: '#F2F9FF',
                    fontSize: '1.3rem',
                    borderBottom: isActive ? '3px solid #F2F9FF' : '3px solid transparent',
                    transition: 'border-bottom 0.2s',
                    paddingBottom: 4,
                    position: 'relative',
                  })}
                  onClick={(e) => handleNavClick(e, item.to)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </nav>
      {/* Logo hover animation styles */}
      <style>{`
        .logo-link:hover .logo-svg-wrapper {
          transform: scale(1.12) rotate(-6deg);
          filter: drop-shadow(0 0 12px #F2F9FF);
        }
        .logo-link:hover .logo-text {
          color: #fff;
          text-shadow: 0 0 8px #F2F9FF;
        }
      `}</style>
    </header>
  )
} 