import React from 'react'
import { FaBuilding, FaServer, FaUmbrella, FaRocket } from 'react-icons/fa'

const caseStudies = [
  { client: 'Globex', logo: <FaBuilding size={40} color="#F2F9FF" />, quote: 'GenOrcasX delivered transformative AI solutions.' },
  { client: 'Initech', logo: <FaServer size={40} color="#F2F9FF" />, quote: 'Their cloud engineering is world-class.' },
  { client: 'Umbrella', logo: <FaUmbrella size={40} color="#F2F9FF" />, quote: 'UI/UX design exceeded our expectations.' },
  { client: 'Hooli', logo: <FaRocket size={40} color="#F2F9FF" />, quote: 'Consulting team drove real business value.' },
]

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" style={{ background: '#111', color: '#fff', padding: '5rem 0' }}>
      <div className="container">
        <h2 className="fw-bold mb-5" style={{ color: '#F2F9FF' }}>Case Studies</h2>
        <div className="row g-4">
          {caseStudies.map((c, i) => (
            <div className="col-12 col-md-6 col-lg-3" key={i}>
              <div style={{ background: '#181818', borderRadius: '1.5rem', boxShadow: '0 4px 24px #0002', padding: '2rem', textAlign: 'center', height: '100%' }}>
                <div className="mb-3">{c.logo}</div>
                <h6 className="fw-bold mb-2" style={{ color: '#F2F9FF' }}>{c.client}</h6>
                <p style={{ color: '#eee', fontStyle: 'italic' }}>&ldquo;{c.quote}&rdquo;</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 