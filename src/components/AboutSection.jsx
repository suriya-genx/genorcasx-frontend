import React from 'react'

export default function AboutSection() {
  return (
    <section id="about" style={{ background: '#181818', color: '#fff', padding: '5rem 0' }}>
      <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between gap-5" style={{ maxWidth: '1200px' }}>
        <div style={{ flex: 2, minWidth: 0 }}>
          <h2 className="fw-bold mb-4" style={{ color: '#F2F9FF' }}>About GenOrcasX</h2>
          <p className="lead mb-3">
          GenOrcasX is a global leader in software innovation, specializing in AI, cloud, and digital transformation. Founded in 2015, we have grown from a small team of visionaries into a multinational company serving clients across 30+ countries.
          </p>
          <p className="mb-3">
            Our mission is to drive intelligence and innovation for a better digital world. We believe in harnessing the power of technology to solve real-world problems, empower businesses, and create lasting impact.
          </p>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li className="mb-2"><b style={{ color: '#F2F9FF' }}>Vision:</b> Empower every business with next-generation technology.</li>
            <li className="mb-2"><b style={{ color: '#F2F9FF' }}>Values:</b> Excellence, Integrity, Collaboration, Impact.</li>
          </ul>
          <p className="mb-3">
            <b style={{ color: '#F2F9FF' }}>Leadership:</b> Our executive team brings decades of experience from top tech firms and is committed to fostering a culture of innovation, diversity, and growth.
          </p>
          <p className="mb-3">
            <b style={{ color: '#F2F9FF' }}>Global Presence:</b> With offices in London, New York, Berlin, and Singapore,  GenOrcasX delivers solutions and support to clients worldwide.
          </p>
        </div>
        <div style={{ flex: 1, textAlign: 'center', minWidth: 260 }}>
          <img src="/robo.png" alt="Quantum Bay Robot" style={{ maxWidth: '100%', maxHeight: 500, objectFit: 'contain' }} />
        </div>
      </div>
    </section>
  )
} 