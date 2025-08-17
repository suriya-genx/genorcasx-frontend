import React from 'react'
import { Link } from 'react-router-dom'

// Load blogs from JSON files and pick the latest two by date
const blogData = Object.values(import.meta.glob('../blogs/*.json', { eager: true }))
  .sort((a, b) => new Date(b.date) - new Date(a.date))
  .slice(0, 2)

export default function BlogSection() {
  return (
    <section id="blog" style={{ background: 'black', color: '#fff', padding: '5rem 0' }}>
      <div className="container">
        <h2 className="fw-bold mb-5" style={{ color: '#FFFFFF' }}>Latest Insights</h2>
        <div className="row g-4">
          {blogData.map((b) => (
            <div className="col-12 col-md-6" key={b.id}>
              <div style={{ background: '#181818', borderRadius: '1.5rem', boxShadow: '0 4px 24px rgba(0,0,0,0.5)', padding: '2rem', height: '100%' }}>
                <h5 className="fw-bold mb-2" style={{ color: '#FFFFFF' }}>{b.title}</h5>
                <small className="text-muted" style={{ color: '#AAA' }}>{new Date(b.date).toLocaleDateString()}</small>
                <p style={{ color: '#CCC' }}>{b.summary}</p>
                <Link to={`/blog/${b.id}`} className="btn btn-sm fw-bold" style={{ background: '#482ED9', color: '#FFFFFF', borderRadius: '1rem' }}>
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 