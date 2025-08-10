import React from 'react'
import heroBg from '../assets/hero-bg.svg'

export default function HeroSection() {
  return (
    <section className="hero-section d-flex align-items-center justify-content-center text-center position-relative" style={{ minHeight: '80vh', background: '#111', color: '#fff', overflow: 'hidden' }}>
      <div className="container position-relative z-2">
        <h1 className="display-3 fw-bold mb-3" style={{ color: '#F2F9FF', textShadow: '2px 2px 8px #111' }}>
        GenOrcasX
        </h1>
        <h2 className="mb-4 fw-light" style={{ color: '#fff', textShadow: '1px 1px 6px #333' }}>
          Where intelligence meets innovation
        </h2>
        <a href="#about" className="btn btn-lg px-5 py-3 fw-bold" style={{ background: '#F2F9FF', color: '#111', borderRadius: '2rem', boxShadow: '0 4px 24px rgba(0,0,0,0.2)', fontSize: '1.25rem' }}>
          Dream Deliver
        </a>
      </div>
      <img src={heroBg} alt="" className="hero-bg position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: 1, objectFit: 'cover', opacity: 0.7, pointerEvents: 'none' }} />
    </section>
  )
} 