import { Link, NavLink } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaEnvelope, FaGlobe } from 'react-icons/fa6'

export default function Footer() {
  const companyLinks = [
    { label: 'About', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Careers', to: '/careers' },
    { label: 'Blog', to: '/blog' },
    { label: 'Contact Us', to: '/contact' }
  ];

  const servicesLinks = [
    { label: 'AI Solutions', to: '/services' },
    { label: 'LLM Integration', to: '/services' },
    { label: 'RAG Systems', to: '/services' },
    { label: 'Web Apps', to: '/services' },
    { label: 'Desktop Apps', to: '/services' },
    { label: 'Mobile Apps', to: '/services' },
    { label: 'Cloud Engineering ', to: '/services' },
    { label: 'Consulting', to: '/services' },
  ];

  return (
    <footer style={{ background: 'black', color: '#FFFFFF', padding: '3rem 0', fontFamily: 'Arial, sans-serif' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {/* Column 1: Company Info */}
          <div style={{ paddingRight: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <img src="/logo.png" alt="F22 Labs Logo" style={{ height: '50px', marginRight: '10px' }} />
              <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>GenOrcasX</span>
            </div>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: '#ccc' }}>
              A <strong style={{ color: '#fff' }}>Next-Gen software studio</strong> based out of
              Chennai. We partner with startups and businesses 
              worldwide, fueling their growth with world-class 
              solutions. Our expertise lies in crafting powerful,
              scalable, and elegant web and mobile applications
              that transform bold ideas into impactful digital products.
            </p>
          </div>

          {/* Column 2: Company Links */}
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1rem' }}>Company</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {companyLinks.map((link) => (
                <li key={link.label} style={{ marginBottom: '0.6rem' }}>
                  <Link to={link.to} style={{ color: '#ccc', textDecoration: 'none', fontSize: '0.9rem' }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services Links */}
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1rem' }}>Services</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {servicesLinks.map((link) => (
                <li key={link.label} style={{ marginBottom: '0.6rem' }}>
                  <Link to={link.to} style={{ color: '#ccc', textDecoration: 'none', fontSize: '0.9rem' }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Locations & Social */}
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1rem' }}>Locations</h4>
            <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem', color: '#ccc' }}>
              2/318, Singaravalan Street,<br />
              Chinna Neelangarai,<br />
              Chennai - 600115
            </p>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1rem' }}>Follow Us On</h4>
            <div style={{ display: 'flex', gap: '1rem', fontSize: '1.3rem' }}>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: '#ccc', opacity: 0.8 }} aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="https://www.genorcasx.com" target="_blank" rel="noopener noreferrer" style={{ color: '#ccc', opacity: 0.8 }} aria-label="Website"><FaGlobe /></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#ccc', opacity: 0.8 }} aria-label="Facebook"><FaFacebookF /></a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" style={{ color: '#ccc', opacity: 0.8 }} aria-label="X"><FaXTwitter /></a>
              <a href="mailto:genorcasx@genorcasx.com" style={{ color: '#ccc', opacity: 0.8 }} aria-label="Email"><FaEnvelope /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 