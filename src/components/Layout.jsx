import Header from './Header'
import Footer from './Footer'
import { Container } from 'react-bootstrap'
import { Outlet, useLocation } from 'react-router-dom'
import { useState } from 'react'

export default function Layout() {
  const location = useLocation()
  // Only pass onContactClick on Home, otherwise undefined
  const isHome = location.pathname === '/'
  const isContact = location.pathname === '/contact'
  const isFullScreenTool = location.pathname === '/tools/chunking' || location.pathname === '/tools/groq-chatbot'
  const [showContactModal, setShowContactModal] = useState(false)
  return (
    <div style={{ minHeight: '100vh', background: 'black', color: '#fff', display: 'flex', flexDirection: 'column' }}>
      <Header onContactClick={isHome ? () => setShowContactModal(true) : undefined} />
      <main className="flex-grow-1 py-0" style={{ background: 'black', color: '#fff' }}>
        {(isContact || isFullScreenTool) ? (
          <Outlet />
        ) : (
          <Container style={{ background: 'none', color: '#fff', boxShadow: 'none', border: 'none', maxWidth: '100vw', paddingTop: 0, marginTop: 0 }}>
            <Outlet context={isHome ? { showContactModal, setShowContactModal } : {}} />
          </Container>
        )}
      </main>
      <Footer />
    </div>
  )
} 