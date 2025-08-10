import React, { useState } from 'react'

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', organization: '', designation: '', contact: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('loading')
    setTimeout(() => setStatus('success'), 600)
  }

  return (
    <div style={{
      width: '100%',
      maxWidth: 1200,
      margin: '40px auto',
      padding: '0 16px',
      background: 'rgba(20,22,28,0.98)',
      borderRadius: 32,
      boxShadow: '0 8px 40px 0 rgba(0,0,0,0.45)',
      display: 'flex',
      overflow: 'hidden',
      minHeight: 440,
      position: 'relative',
    }}>
      {/* Dots background */}
      <div style={{
        position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0,
        background: 'radial-gradient(rgba(80,120,255,0.12) 1px, transparent 1px)', backgroundSize: '24px 24px',
      }} />
      {/* Left: Form */}
      <div style={{ flex: 1.2, padding: '2.5rem 2rem', zIndex: 1 }}>
        <h1 style={{ fontWeight: 900, fontSize: 44, marginBottom: 32, letterSpacing: -1, color: '#fff', lineHeight: 1.1 }}>
          Contact <span style={{ color: '#F2F9FF', fontWeight: 900 }}>Us</span>
        </h1>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div style={{ display: 'flex', gap: 16, marginBottom: 18 }}>
            <div style={{ flex: 1 }}>
              <label style={{ color: '#fff', fontWeight: 600, marginBottom: 4, display: 'block' }}>Name</label>
              <input type="text" name="name" placeholder="En
              ter your name" value={form.name} onChange={handleChange} required style={inputStyle} />
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ color: '#fff', fontWeight: 600, marginBottom: 4, display: 'block' }}>Organization</label>
              <input type="text" name="organization" placeholder="Enter organization name" value={form.organization} onChange={handleChange} style={inputStyle} />
            </div>
          </div>
          <div style={{ marginBottom: 18 }}>
            <label style={{ color: '#fff', fontWeight: 600, marginBottom: 4, display: 'block' }}>Designation</label>
            <input type="text" name="designation" placeholder="Enter your designation" value={form.designation} onChange={handleChange} style={inputStyle} />
          </div>
          <div style={{ marginBottom: 24 }}>
            <label style={{ color: '#fff', fontWeight: 600, marginBottom: 4, display: 'block' }}>Contact Details</label>
            <input type="text" name="contact" placeholder="Phone, Email or other details" value={form.contact} onChange={handleChange} required style={inputStyle} />
          </div>
          <button type="submit" style={buttonStyle} disabled={status === 'loading'}>
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
          {status === 'success' && <p style={{ color: '#4fd1c5', marginTop: 16 }}>Message sent!</p>}
        </form>
      </div>
      {/* Right: Blue panel */}
      <div style={{
        flex: 1,
        background: 'linear-gradient(135deg, #181818 0%, #F2F9FF 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        minHeight: 440,
      }}>
        <div style={{ color: '#fff', textAlign: 'left', padding: 32, width: '100%' }}>
          <div style={{ fontSize: 32, fontWeight: 600, lineHeight: 1.2, marginBottom: 24, color: '#F2F9FF' }}>
            Craft intuitive<br />experiences with<br />Quantum Bay.
          </div>
          <svg width="220" height="120" viewBox="0 0 220 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', margin: '0 auto' }}>
            <ellipse cx="110" cy="110" rx="100" ry="60" fill="#fff" fillOpacity="0.08" />
            <ellipse cx="110" cy="110" rx="60" ry="40" fill="#F2F9FF" fillOpacity="0.18" />
            <path d="M110 110 Q130 80 170 100 Q150 120 110 110 Z" fill="#F2F9FF" fillOpacity="0.5" />
            <circle cx="160" cy="100" r="6" fill="#fff" fillOpacity="0.7" />
            <circle cx="110" cy="110" r="40" fill="none" stroke="#F2F9FF" strokeDasharray="2 6" strokeOpacity="0.3" />
          </svg>
        </div>
      </div>
    </div>
  )
}

const inputStyle = {
  width: '100%',
  padding: '12px 16px',
  borderRadius: 8,
  border: 'none',
  background: '#111',
  color: '#fff',
  fontSize: 16,
  marginBottom: 0,
  outline: 'none',
  boxShadow: '0 1px 4px 0 rgba(0,0,0,0.12)',
}

const buttonStyle = {
  width: '100%',
  padding: '12px 0',
  borderRadius: 8,
  border: 'none',
  background: 'linear-gradient(90deg, #F2F9FF 0%, #181818 100%)',
  color: '#111',
  fontWeight: 700,
  fontSize: 18,
  marginTop: 8,
  cursor: 'pointer',
  boxShadow: '0 2px 8px 0 rgba(255,215,0,0.18)',
  transition: 'background 0.2s',
} 