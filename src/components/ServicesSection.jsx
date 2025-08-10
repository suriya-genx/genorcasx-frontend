import React from 'react'
import { FaRobot, FaCloud, FaMobileAlt, FaDesktop, FaGlobe, FaPalette, FaComments, FaCubes, FaPuzzlePiece } from 'react-icons/fa'

const services = [
  { title: 'AI Solutions', icon: <FaRobot size={40} color="#F2F9FF" />, desc: 'Machine learning, NLP, and automation.' },
  { title: 'LLM Integration', icon: <FaCubes size={40} color="#F2F9FF" />, desc: 'Custom large language model solutions.' },
  { title: 'RAG Systems', icon: <FaPuzzlePiece size={40} color="#F2F9FF" />, desc: 'Retrieval-augmented generation for enterprise.' },
  { title: 'Web Apps', icon: <FaGlobe size={40} color="#F2F9FF" />, desc: 'Modern, scalable web applications.' },
  { title: 'Desktop Apps', icon: <FaDesktop size={40} color="#F2F9FF" />, desc: 'Cross-platform desktop software.' },
  { title: 'Mobile Apps', icon: <FaMobileAlt size={40} color="#F2F9FF" />, desc: 'iOS and Android mobile development.' },
  { title: 'Cloud Engineering', icon: <FaCloud size={40} color="#F2F9FF" />, desc: 'Scalable, secure cloud platforms.' },
  { title: 'UI/UX Design', icon: <FaPalette size={40} color="#F2F9FF" />, desc: 'Beautiful, user-centric interfaces.' },
  { title: 'Consulting', icon: <FaComments size={40} color="#F2F9FF" />, desc: 'Strategy, transformation, and support.' },
]

export default function ServicesSection() {
  return (
    <section id="services" style={{ background: '#111', color: '#fff', padding: '5rem 0' }}>
      <div className="container">
        <h2 className="fw-bold mb-5" style={{ color: '#F2F9FF' }}>Our Services</h2>
        <div className="row g-4">
          {services.map((s, i) => (
            <div className="col-12 col-md-6 col-lg-4" key={i}>
              <div style={{ background: '#181818', borderRadius: '1.5rem', boxShadow: '0 4px 24px #0002', padding: '2rem', textAlign: 'center', height: '100%' }}>
                <div className="mb-3">{s.icon}</div>
                <h5 className="fw-bold mb-2" style={{ color: '#F2F9FF' }}>{s.title}</h5>
                <p style={{ color: '#eee' }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 