import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const blogData = Object.values(import.meta.glob('../blogs/*.json', { eager: true }))

export default function BlogDetail() {
  const { id } = useParams()
  const [blog, setBlog] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const found = blogData.find((b) => b.id === id)
    setBlog(found || null)
  }, [id])

  if (!blog) return <div className="container py-5"><p>Blog not found.</p></div>

  return (
    <div className="container py-5" style={{ maxWidth: 800 }}>
      <button className="btn btn-sm mb-4" style={{ background: '#F2F9FF', color: '#111', borderRadius: 8 }} onClick={() => navigate(-1)}>
        &larr; Back to Blogs
      </button>
      <img src={blog.image} alt={blog.title} style={{ width: '100%', height: 220, objectFit: 'cover', borderRadius: 16, background: '#F2F9FF', marginBottom: 24 }} />
      <div className="mb-2" style={{ color: '#F2F9FF', fontWeight: 600, fontSize: 15 }}>{blog.category}</div>
      <h2 className="fw-bold mb-3">{blog.title}</h2>
      <div className="mb-3" style={{ fontSize: 14, color: '#bbb' }}>{new Date(blog.date).toLocaleDateString()}</div>
      <div style={{ color: '#eee', fontSize: 17 }} dangerouslySetInnerHTML={{ __html: blog.content }} />
    </div>
  )
} 