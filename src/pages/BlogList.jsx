import { useEffect, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

const blogData = Object.values(import.meta.glob('../blogs/*.json', { eager: true }))

const allCategories = [
  'All',
  ...Array.from(new Set(blogData.map((b) => b.category)))
]

export default function BlogList() {
  const [category, setCategory] = useState('All')
  const [blogs, setBlogs] = useState(blogData)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (category === 'All') {
      setBlogs(blogData)
    } else {
      setBlogs(blogData.filter((b) => b.category === category))
    }
  }, [category])

  return (
    <div className="container py-5" style={{ minHeight: '80vh' }}>
      <div className="row">
        {/* Sidebar */}
        <aside className="col-12 col-md-3 mb-4 mb-md-0">
          <h4 className="fw-bold mb-4">Blog Categories</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {allCategories.map((cat) => (
              <li key={cat} className="mb-2">
                <button
                  className="w-100 text-start fw-semibold"
                  style={{
                    background: cat === category ? '#F2F9FF' : 'transparent',
                    color: cat === category ? '#111' : '#fff',
                    border: 'none',
                    borderRadius: 8,
                    padding: '0.75rem 1rem',
                    fontSize: '1.1rem',
                    cursor: 'pointer',
                    transition: 'background 0.2s, color 0.2s',
                  }}
                  onClick={() => setCategory(cat)}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </aside>
        {/* Blog cards */}
        <section className="col-12 col-md-9">
          <div className="row g-4">
            {blogs.map((b) => (
              <div className="col-12 col-md-6 col-lg-4" key={b.id}>
                <div
                  className="card h-100 shadow-sm border-0"
                  style={{ cursor: 'pointer', borderRadius: 16, overflow: 'hidden', background: '#181818', color: '#fff' }}
                  onClick={() => navigate(`/blog/${b.id}`)}
                >
                  <img src={b.image} alt={b.title} style={{ width: '100%', height: 160, objectFit: 'cover', background: '#F2F9FF' }} />
                  <div className="card-body">
                    <div className="mb-2" style={{ color: '#F2F9FF', fontWeight: 600, fontSize: 14 }}>{b.category}</div>
                    <h5 className="card-title fw-bold" style={{ fontSize: '1.1rem', minHeight: 48 }}>{b.title}</h5>
                    <div className="mb-2" style={{ fontSize: 13, color: '#bbb' }}>{new Date(b.date).toLocaleDateString()}</div>
                    <p className="card-text" style={{ color: '#eee', fontSize: 15 }}>{b.summary}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
} 