import React from 'react'
import { motion } from "framer-motion";
import { FaRobot, FaCloud, FaMobileAlt, FaDesktop, FaGlobe, FaPalette, FaComments, FaCubes, FaPuzzlePiece } from 'react-icons/fa'

const services = [
  { title: 'AI Solutions', icon: <FaRobot />, desc: 'Machine learning, NLP, and automation.' },
  { title: 'LLM Integration', icon: <FaCubes />, desc: 'Custom large language model solutions.' },
  { title: 'RAG Systems', icon: <FaPuzzlePiece />, desc: 'Retrieval-augmented generation for enterprise.' },
  { title: 'Web Apps', icon: <FaGlobe />, desc: 'Modern, scalable web applications.' },
  { title: 'Desktop Apps', icon: <FaDesktop />, desc: 'Cross-platform desktop software.' },
  { title: 'Mobile Apps', icon: <FaMobileAlt />, desc: 'iOS and Android mobile development.' },
  { title: 'Cloud Engineering', icon: <FaCloud />, desc: 'Scalable, secure cloud platforms.' },
  { title: 'Consulting', icon: <FaComments />, desc: 'Strategy, transformation, and support.' },
]

export default function ServicesSection() {
  return (
    <div style={{
      minHeight: "auto",
      padding: "60px 20px",
      background: "#0b0b0b",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Floating shapes */}
      <div style={{
        position: "absolute",
        width: "200px",
        height: "200px",
        background: "radial-gradient(circle, #702cf4, transparent)",
        borderRadius: "50%",
        top: "-50px",
        left: "-50px",
        filter: "blur(100px)",
        animation: "float1 8s ease-in-out infinite alternate"
      }} />
      <div style={{
        position: "absolute",
        width: "300px",
        height: "300px",
        background: "radial-gradient(circle, silver, transparent)",
        borderRadius: "50%",
        bottom: "-100px",
        right: "-100px",
        filter: "blur(150px)",
        animation: "float2 10s ease-in-out infinite alternate"
      }} />

      <h1 style={{ textAlign: "center", color: "#fff", fontSize: "3rem", marginBottom: 60 }}>
        Our <span style={{ color: "#702cf4" }}>Services</span>
      </h1>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "32px", justifyContent: "center", position: "relative", zIndex: 1 }}>
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.15 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(112,44,244,0.4)" }}
            style={{
              position: "relative",
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(20px)",
              borderRadius: 24,
              border: "1px solid rgba(255,255,255,0.2)",
              padding: "36px 28px",
              minWidth: 300,
              maxWidth: 360,
              display: "flex",
              flexDirection: "column",
              gap: 16,
              cursor: "pointer",
            }}
          >
            <div style={{
              width: 60,
              height: 60,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #702cf4, silver)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              color: "#fff",
              marginBottom: 12,
              boxShadow: "0 0 20px rgba(112,44,244,0.4)"
            }}>
              {s.icon}
            </div>
            <h3 style={{ color: "#702cf4", fontSize: 22, fontWeight: 700 }}>{s.title}</h3>
            <p style={{ color: "#fff", fontSize: 16, opacity: 0.9 }}>{s.desc}</p>
          </motion.div>
        ))}
      </div>

      <style>
        {`
          @keyframes float1 {
            0% { transform: translateY(0px); }
            100% { transform: translateY(50px); }
          }
          @keyframes float2 {
            0% { transform: translateY(0px); }
            100% { transform: translateY(-50px); }
          }
        `}
      </style>
    </div>
  );
} 