import React, { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', organization: '', phone_no: '', email: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const response = await fetch('http://localhost:8000/contact-us', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })
      const data = await response.json()
      if (response.ok) {
        setStatus('success')
        setForm({ name: '', organization: '', phone_no: '', email: '' })
      } else {
        setStatus('error')
        console.error('Error submitting form:', data.detail)
      }
    } catch (error) {
      setStatus('error')
      console.error('Error submitting form:', error)
    }
  }

  return (
    <div className="contact-container" style={{
      width: '100%',
      maxWidth: 1200,
      margin: '40px auto',
      padding: '0 16px',
      background: 'black',
      borderRadius: 32,
      boxShadow: '0 8px 40px 0 rgba(0,0,0,0.8)',
      display: 'flex',
      overflow: 'hidden',
      minHeight: 440,
      position: 'relative',
    }}>
      <style>
        {`
          @media (max-width: 768px) {
            .contact-container {
              flex-direction: column;
              min-height: auto;
            }
            .contact-container > div {
              flex: none !important;
              width: 100%;
              padding: 1.5rem 1rem !important;
            }
            .contact-container > div:last-child {
                min-height: 200px;
            }
          }
        `}
      </style>
      {/* Dots background */}
      <div style={{
        position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0,
        background: 'radial-gradient(rgba(72,46,217,0.12) 1px, transparent 1px)', backgroundSize: '24px 24px',
      }} />
      {/* Left: Form */}
      <div style={{ flex: 1.2, padding: '2.5rem 2rem', zIndex: 1 }}>
        <h1 style={{ fontWeight: 900, fontSize: 44, marginBottom: 32, letterSpacing: -1, color: '#fff', lineHeight: 1.1 }}>
          Contact <span style={{ color: '#5AD66E', fontWeight: 900 }}>Us</span>
        </h1>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div style={{ display: 'flex', gap: 16, marginBottom: 18 }}>
            <div style={{ flex: 1 }}>
              <label style={{ color: '#fff', fontWeight: 600, marginBottom: 4, display: 'block' }}>Name</label>
              <input type="text" name="name" placeholder="Enter your name" value={form.name} onChange={handleChange} required style={inputStyle} />
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ color: '#fff', fontWeight: 600, marginBottom: 4, display: 'block' }}>Organization</label>
              <input type="text" name="organization" placeholder="Enter organization name (optional)" value={form.organization} onChange={handleChange} style={inputStyle} />
            </div>
          </div>
          <div style={{ marginBottom: 18 }}>
            <label style={{ color: '#fff', fontWeight: 600, marginBottom: 4, display: 'block' }}>Phone Number</label>
            <input type="text" name="phone_no" placeholder="Enter your phone number" value={form.phone_no} onChange={handleChange} required style={inputStyle} />
          </div>
          <div style={{ marginBottom: 24 }}>
            <label style={{ color: '#fff', fontWeight: 600, marginBottom: 4, display: 'block' }}>Email</label>
            <input type="email" name="email" placeholder="Enter your email address" value={form.email} onChange={handleChange} required style={inputStyle} />
          </div>
          <button type="submit" style={buttonStyle} disabled={status === 'loading'}>
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
          {status === 'success' && <p style={{ color: '#4fd1c5', marginTop: 16 }}>Message sent!</p>}
          {status === 'error' && <p style={{ color: 'red', marginTop: 16 }}>Failed to send message. Please try again.</p>}
        </form>
      </div>
      {/* Right: Blue panel */}
      <div style={{
        flex: 1,
        background: 'linear-gradient(135deg, #111 0%, #482ED9 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        minHeight: 440,
      }}>
        <div style={{ color: '#fff', textAlign: 'left', padding: 32, width: '100%' }}>
          <div style={{ fontSize: 32, fontWeight: 600, lineHeight: 1.2, marginBottom: 24, color: '#FFFFFF' }}>
            Craft intuitive<br />experiences with<br />Quantum Bay.
          </div>
          <svg width="220" height="120" viewBox="0 0 220 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', margin: '0 auto' }}>
            <ellipse cx="110" cy="110" rx="100" ry="60" fill="#FFFFFF" fillOpacity="0.08" />
            <ellipse cx="110" cy="110" rx="60" ry="40" fill="#482ED9" fillOpacity="0.18" />
            <path d="M110 110 Q130 80 170 100 Q150 120 110 110 Z" fill="#482ED9" fillOpacity="0.5" />
            <circle cx="160" cy="100" r="6" fill="#FFFFFF" fillOpacity="0.7" />
            <circle cx="110" cy="110" r="40" fill="none" stroke="#482ED9" strokeDasharray="2 6" strokeOpacity="0.3" />
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