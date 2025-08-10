import { Container } from 'react-bootstrap'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaEnvelope } from 'react-icons/fa6'

export default function Footer() {
  return (
    <footer style={{ background: '#181818', color: '#F2F9FF', borderTop: '1.5px solid #222', textAlign: 'center', width: '100%', marginTop: 'auto', padding: '1.5rem 0' }}>
      <Container>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <div style={{ fontSize: 15, marginBottom: 4 }}>
            &copy; {new Date().getFullYear()} GenOrcasX. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: 16 }}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#F2F9FF', fontSize: 18, opacity: 0.8 }} aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#F2F9FF', fontSize: 18, opacity: 0.8 }} aria-label="Instagram"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: '#F2F9FF', fontSize: 18, opacity: 0.8 }} aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" style={{ color: '#F2F9FF', fontSize: 18, opacity: 0.8 }} aria-label="X"><FaXTwitter /></a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" style={{ color: '#F2F9FF', fontSize: 18, opacity: 0.8 }} aria-label="X"><FaEnvelope /></a>
          </div>
        </div>
      </Container>
    </footer>
  )
} 