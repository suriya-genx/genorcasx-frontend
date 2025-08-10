import React from 'react'
import NewHeroSection from '../components/NewHeroSection'
import AboutSection from '../components/AboutSection'
import ServicesSection from '../components/ServicesSection'
import IndustriesSection from '../components/IndustriesSection'
import CaseStudiesSection from '../components/CaseStudiesSection'
import ProductsSection from '../components/ProductsSection'
import BlogSection from '../components/BlogSection'
import ContactSection from '../components/ContactSection'
import { useOutletContext } from 'react-router-dom'

export default function Home() {
  const { showContactModal, setShowContactModal } = useOutletContext()
  return (
    <>
      <NewHeroSection />
      <AboutSection />
      <ServicesSection />
      <IndustriesSection />
      <CaseStudiesSection />
      <ProductsSection />
      <BlogSection />
      {showContactModal && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.7)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{ background: '#222', borderRadius: 16, padding: 32, position: 'relative', width: '100%', maxWidth: 1200 }}>
            <button onClick={() => setShowContactModal(false)} style={{ position: 'absolute', top: 16, right: 16, background: 'none', border: 'none', color: '#F2F9FF', fontSize: 28, cursor: 'pointer' }}>&times;</button>
            <ContactSection />
          </div>
        </div>
      )}
    </>
  )
} 