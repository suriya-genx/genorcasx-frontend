import React from 'react'

const jobs = [
  { title: 'AI Engineer', location: 'Remote', type: 'Full-time' },
  { title: 'Cloud Architect', location: 'Chennai, India', type: 'Full-time' },
  { title: 'UI/UX Designer', location: 'Chennai, India', type: 'Contract' },
]

export default function Careers() {
  return (
    <section id="careers" style={{ background: '#111', color: '#fff', minHeight: '70vh', padding: '0 0 2.5rem 0' }}>
      <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between gap-5" style={{ marginTop: 0 }}>
        <div style={{ flex: 1 }}>
          <h2 className="fw-bold mb-4" style={{ color: '#F2F9FF', marginTop: 0 }}>Careers at GenOrcasX</h2>
          <p className="lead mb-3">Join a global team where innovation, growth, and impact are at the heart of everything we do.</p>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li className="mb-2"><b style={{ color: '#F2F9FF' }}>Benefits:</b> Remote-first, learning budget, health & wellness, global projects.</li>
            <li className="mb-2"><b style={{ color: '#F2F9FF' }}>Culture:</b> Diverse, inclusive, collaborative, and ambitious.</li>
          </ul>
          <h5 className="fw-bold mt-4" style={{ color: '#F2F9FF' }}>Open Positions</h5>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {jobs.map((j, i) => (
              <li key={i} className="mb-2" style={{ color: '#eee' }}>
                <b>{j.title}</b> &mdash; {j.location} ({j.type})
              </li>
            ))}
          </ul>
        </div>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <img src="/hire.png" alt="Quantum Bay Hiring" style={{ maxWidth: '100%', maxHeight: 700, objectFit: 'contain' }} />
        </div>
      </div>
    </section>
  )
} 