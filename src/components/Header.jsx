import { useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'

const navItems = [
  { label: 'Services', to: '/services' },
  { label: 'Tools', to: '/tools' },
  { label: 'Blog', to: '/blog' },
  { label: 'About', to: '/about' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact Us', to: '/#contact', isContactPage: true, isButton: true },
]

export default function Header({ onContactClick }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  // Update navItems to handle Contact click
  const handleNavClick = (e, item) => {
    if (item.isContactPage) {
      e.preventDefault()
      if (location.pathname === '/') {
        if (onContactClick) onContactClick()
        setMenuOpen(false)
      } else {
        navigate('/contact')
        setMenuOpen(false)
      }
    } else if (item.to.startsWith('/#')) {
      e.preventDefault()
      const id = item.to.replace('/#', '')
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
    <header style={{ background: '#111', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
      <nav className="container d-flex align-items-center justify-content-between py-2 position-relative" style={{ minHeight: 70 }}>
        <style>{`
          @media (max-width: 991.98px) {
            header nav.container {
              flex-direction: row !important;
              flex-wrap: nowrap !important;
              justify-content: space-between !important;
              align-items: center !important;
              padding-top: 10px !important;
              padding-bottom: 0px !important;
              min-height: 64px !important;
            }
            header nav.container .logo-link {
              margin-top: 0px; /* Reset any default margin-top */
              align-self: center;
            }
            header nav.container button.d-lg-none {
              margin-top: 0px; /* Reset any default margin-top */
              align-self: center;
            }
          }
        `}</style>
        <Link to="/" className="d-flex align-items-center text-decoration-none logo-link">
          <span className="logo-svg-wrapper" style={{ display: 'inline-block' }}>
            <img src="/logo.png" alt="GenOrcasX Logo" height={50} style={{ marginRight: 8 }} className="logo-img" />
          </span>
          <span className="logo-text" style={{ color: '#FFFFFF', fontSize: '1.7rem', fontWeight: 600 }}>GenOrcasX</span>
        </Link>
        {/* Discord icon and Get Started button */}
        <div className="d-none d-lg-flex align-items-center" style={{ gap: '1rem' }}>
          <a href="https://discord.gg/your-discord-invite" target="_blank" rel="noopener noreferrer" style={{ color: '#482ED9', fontSize: '1.5rem' }}>
            <i className="fab fa-discord"></i> {/* Placeholder for Discord icon */}
          </a>
        </div>
        {/* Hamburger for mobile */}
        <button className="d-lg-none border-0 bg-transparent" style={{ color: '#F2F9FF', fontSize: 32 }} onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">
          <span style={{ display: menuOpen ? 'none' : 'inline' }}>&#9776;</span>
          <span style={{ display: menuOpen ? 'inline' : 'none' }}>&#10005;</span>
        </button>
        <ul className={`nav d-none d-lg-flex align-items-center`} style={{ gap: '2rem', marginBottom: 0 }}>
          {navItems.map((item) => (
            <li className="nav-item" key={item.to}>
              {item.isButton ? (
                <Link to={item.to} onClick={(e) => handleNavClick(e, item)} className="btn" style={{ backgroundColor: '#5AD66E', color: '#111', fontWeight: 'bold', borderRadius: '0.5rem', padding: '0.25rem 1rem', transition: 'background-color 0.2s' }}>
                  {item.label}
                </Link>
              ) : (
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    'nav-link px-0 fw-bold' +
                    ((item.isContactPage ? location.pathname === '/contact' : isActive) ? ' active' : '')
                  }
                  style={() => ({
                    color: '#FFFFFF',
                    fontSize: '1.0rem',
                    opacity: (item.isContactPage ? location.pathname === '/contact' : location.pathname === item.to) ? 1 : 0.7,
                    transition: 'opacity 0.2s',
                    paddingBottom: 4,
                    position: 'relative',
                  })}
                  onClick={(e) => handleNavClick(e, item)}
                >
                  {item.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
        {/* Mobile menu */}
        {menuOpen && (
          <ul className="nav flex-column position-absolute w-100 bg-black p-4 rounded shadow-lg" style={{ top: 64, right: 0, zIndex: 200, background: '#111' }}>
            {navItems.map((item) => (
              <li className="nav-item mb-3" key={item.to}>
                {item.isButton ? (
                  <Link to={item.to} onClick={(e) => handleNavClick(e, item)} className="btn" style={{ backgroundColor: '#FFFFFF', color: '#111', fontWeight: 'bold', borderRadius: '0.5rem', padding: '0.25rem 1rem', transition: 'background-color 0.2s' }}>
                    {item.label}
                  </Link>
                ) : (
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      'nav-link px-0 fw-bold' +
                      (isActive ? ' active' : '')
                    }
                    style={({ isActive }) => ({
                      color: '#FFFFFF',
                      fontSize: '1.3rem',
                      opacity: isActive ? 1 : 0.7,
                      transition: 'opacity 0.2s',
                      paddingBottom: 4,
                      position: 'relative',
                    })}
                    onClick={(e) => handleNavClick(e, item)}
                  >
                    {item.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        )}
      </nav>
      {/* Logo hover animation styles */}
      <style>{`
        .logo-link:hover .logo-svg-wrapper {
          transform: scale(1.05);
          filter: drop-shadow(0 0 8px #FFFFFF);
        }
        .logo-link:hover .logo-text {
          color: #fff;
          text-shadow: 0 0 6px #FFFFFF;
        }
        .nav-item .nav-link:hover {
          opacity: 1 !important;
        }
        .nav-item .nav-link.active {
          opacity: 1 !important;
        }
      `}</style>
    </header>
  )
} 