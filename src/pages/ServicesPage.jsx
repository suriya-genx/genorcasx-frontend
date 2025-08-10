export default function ServicesPage() {
  const services = [
    {
      title: 'Artificial Intelligence & Machine Learning',
      description: 'Custom AI models, data preparation, model deployment, and end-to-end ML pipelines.',
    },
    {
      title: 'Software Engineering',
      description: 'Full-stack web & mobile app development, cloud-native architecture, DevOps automation.',
    },
    {
      title: 'Research & POCs',
      description: 'Rapid prototyping and proof-of-concepts to validate ideas before full-scale investment.',
    },
    {
      title: 'UI/UX & Product Design',
      description: 'Human-centric design process delivering delightful digital experiences.',
    },
  ]

  return (
    <div style={{ background: '#111', minHeight: '80vh', padding: '48px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 16px' }}>
        <h1 style={{ fontWeight: 900, fontSize: 48, color: '#fff', marginBottom: 40, letterSpacing: -1 }}>
          Our <span style={{ color: '#F2F9FF' }}>Services</span>
        </h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'center' }}>
          {services.map((s) => (
            <div key={s.title} style={{
              background: '#181818',
              borderRadius: 20,
              boxShadow: '0 4px 24px 0 rgba(0,0,0,0.25)',
              padding: '32px 28px',
              minWidth: 280,
              maxWidth: 350,
              flex: '1 1 320px',
              color: '#fff',
              border: '2px solid #F2F9FF',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              transition: 'transform 0.15s, box-shadow 0.15s',
            }}
            onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-6px) scale(1.03)'; e.currentTarget.style.boxShadow = '0 8px 32px 0 #F2F9FF44'; }}
            onMouseOut={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 24px 0 rgba(0,0,0,0.25)'; }}
            >
              <h3 style={{ color: '#F2F9FF', fontWeight: 800, fontSize: 22, marginBottom: 16 }}>{s.title}</h3>
              <p style={{ color: '#fff', fontSize: 16, opacity: 0.92 }}>{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 