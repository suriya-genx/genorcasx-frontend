import React from 'react'
import NewHeroSection from '../components/NewHeroSection'
import ServicesSection from '../components/ServicesSection'
import DomainsSection from '../components/DomainsSection'
import PressSection from '../components/PressSection'
import BlogSection from '../components/BlogSection'
import { useOutletContext } from 'react-router-dom'

export default function Home() {
  const { showContactModal, setShowContactModal } = useOutletContext()
  return (
    <>
      <NewHeroSection />
      <ServicesSection />
      <DomainsSection />
      <PressSection />
      <BlogSection />
      {showContactModal && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.7)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{ background: '#222', borderRadius: 16, padding: 32, position: 'relative', width: '100%', maxWidth: 1200 }}>
            <button onClick={() => setShowContactModal(false)} style={{ position: 'absolute', top: 16, right: 16, background: 'none', border: 'none', color: '#F2F9FF', fontSize: 28, cursor: 'pointer' }}>&times;</button>
          </div>
        </div>
      )}
    </>
  )
} 