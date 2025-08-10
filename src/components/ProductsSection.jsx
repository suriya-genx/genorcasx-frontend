import React from 'react'
import { FaBrain, FaCloud, FaPalette } from 'react-icons/fa'

const products = [
  { name: 'QuantumAI Suite', desc: 'End-to-end AI platform for enterprise.', icon: <FaBrain size={40} color="#F2F9FF" /> },
  { name: 'CloudX', desc: 'Cloud-native infrastructure toolkit.', icon: <FaCloud size={40} color="#F2F9FF" /> },
  { name: 'DesignPro', desc: 'UI/UX prototyping and design system.', icon: <FaPalette size={40} color="#F2F9FF" /> },
]

export default function ProductsSection() {
  return (
    <section id="products" style={{ background: '#181818', color: '#fff', padding: '5rem 0' }}>
      <div className="container">
        <h2 className="fw-bold mb-5" style={{ color: '#F2F9FF' }}>Our Products</h2>
        <div className="row g-4">
          {products.map((p, i) => (
            <div className="col-12 col-md-6 col-lg-4" key={i}>
              <div style={{ background: '#111', borderRadius: '1.5rem', boxShadow: '0 4px 24px #0002', padding: '2rem', textAlign: 'center', height: '100%' }}>
                <div className="mb-3">{p.icon}</div>
                <h5 className="fw-bold mb-2" style={{ color: '#F2F9FF' }}>{p.name}</h5>
                <p style={{ color: '#eee' }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 