import React from 'react'
import { motion } from "framer-motion";
import { FaGraduationCap, FaStethoscope, FaMapPin, FaMobileAlt, FaPlane, FaBuilding, FaShoppingCart, FaCar, FaBullhorn, FaCloud, FaFilm, FaPiggyBank, FaRunning, FaMicrophone, FaSitemap, FaBriefcase } from 'react-icons/fa'

const domains = [
  { title: 'Ed-Tech', icon: <FaGraduationCap /> },
  { title: 'Telemedicine', icon: <FaStethoscope /> },
  { title: 'On Demand', icon: <FaMapPin /> },
  { title: 'Bookings', icon: <FaMobileAlt /> },
  { title: 'Travel', icon: <FaPlane /> },
  { title: 'B2B', icon: <FaBuilding /> },
  { title: 'E-Commerce', icon: <FaShoppingCart /> },
  { title: 'Fleet Tracking', icon: <FaCar /> },
  { title: 'Non Profits', icon: <FaBullhorn /> },
  { title: 'SaaS', icon: <FaCloud /> },
  { title: 'Entertainment', icon: <FaFilm /> },
  { title: 'Fintech', icon: <FaPiggyBank /> },
  { title: 'Fitness', icon: <FaRunning /> },
  { title: 'Events', icon: <FaMicrophone /> },
  { title: 'Aggregators', icon: <FaSitemap /> },
]

export default function DomainsSection() {
  return (
    <section id="domains" style={{
      background: '#0b0b0b',
      color: '#fff',
      padding: '5rem 0',
    }}>
      <div className="container" style={{ maxWidth: '1200px' }}>
        <h2 className="fw-bold mb-5" style={{ color: '#F2F9FF', textAlign: 'center', fontSize: '3rem' }}>Our <span style={{ color: "#702cf4" }}>Domains</span></h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '24px', justifyContent: 'center' }}>
          {domains.map((domain, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(112,44,244,0.4)', background: 'rgba(255,255,255,0.08)' }}
              style={{
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)',
                borderRadius: '1rem',
                border: '1px solid rgba(255,255,255,0.1)',
                padding: '2rem 1.5rem',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                cursor: 'pointer',
                height: '100%',
              }}
            >
              <div style={{
                fontSize: '3rem',
                color: '#F2F9FF',
                marginBottom: '0.5rem',
              }}>
                {domain.icon}
              </div>
              <h5 className="fw-bold" style={{ color: '#F2F9FF', fontSize: '1.1rem' }}>{domain.title}</h5>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
