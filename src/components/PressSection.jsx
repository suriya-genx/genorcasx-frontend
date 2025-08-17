import React from 'react'
import { motion } from 'framer-motion'
import prImage from '../assets/pr.png'

export default function PressSection() {
  return (
    <section id="press" style={{ background: '#0b0b0b', padding: '5rem 0', color: '#fff' }}>
      <div className="container" style={{ maxWidth: '1200px', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '3rem' }}>
        <style>
          {`
            @media (max-width: 768px) {
              .container {
                flex-direction: column !important;
                text-align: center !important;
              }
              .container img {
                width: 80% !important;
                margin-bottom: 2rem;
              }
              .container h2,
              .container p {
                text-align: center !important;
              }
            }
          `}
        </style>
        {/* Combined Image on the left */}
        <motion.img
          src={prImage}
          alt="ZeAl Team Collaboration"
          style={{
            width: '50%',
            height: 'auto',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.5)', // Darker shadow for dark background
          }}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        />

        {/* Text content on the right */}
        <div style={{ textAlign: 'left', flex: 1 }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem', lineHeight: '1.2', color: '#F2F9FF' }}>
            Driving the Future of AI and Technology
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#eee' }}>
          GenOrcasX is a forward-thinking technology company focused on AI, Data Intelligence, 
          and Full-Stack Web Solutions. We thrive on transforming ideas into impactful digital products, 
          harnessing the power of artificial intelligence and modern development frameworks. 
          </p>
        </div>
      </div>
    </section>
  )
}
