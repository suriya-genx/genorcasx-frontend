import React from 'react'
import { FaMoneyBillWave, FaHeartbeat, FaShoppingCart, FaIndustry, FaNetworkWired } from 'react-icons/fa'

const industries = [
  { name: 'Finance', icon: <FaMoneyBillWave size={32} color="#F2F9FF" /> },
  { name: 'Healthcare', icon: <FaHeartbeat size={32} color="#F2F9FF" /> },
  { name: 'Retail', icon: <FaShoppingCart size={32} color="#F2F9FF" /> },
  { name: 'Manufacturing', icon: <FaIndustry size={32} color="#F2F9FF" /> },
  { name: 'Telecom', icon: <FaNetworkWired size={32} color="#F2F9FF" /> },
]

export default function IndustriesSection() {
  return (
    <section id="industries" style={{ background: '#181818', color: '#fff', padding: '5rem 0' }}>
      <div className="container">
        <h2 className="fw-bold mb-5" style={{ color: '#F2F9FF' }}>Industries We Serve</h2>
        <div className="row g-4 justify-content-center">
          {industries.map((ind, i) => (
            <div className="col-6 col-md-4 col-lg-2 text-center" key={i}>
              <div style={{ background: '#111', borderRadius: '1rem', padding: '2rem 1rem', boxShadow: '0 2px 12px #0002', height: '100%' }}>
                <div className="mb-2">{ind.icon}</div>
                <div className="fw-bold" style={{ color: '#F2F9FF' }}>{ind.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 