import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaRobot } from "react-icons/fa";

const Careers = () => {
  return (
    <div className="careers">
      <style>
        {`
          .careers {
  background: #000;
  color: #fff;
  font-family: "Poppins", sans-serif;
  position: relative;
  overflow: hidden;
  padding-bottom: 100px;
}

/* Background Animation */
.bg-animated {
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 20% 30%, rgba(112,44,244,0.4), transparent 60%),
              radial-gradient(circle at 80% 70%, rgba(192,192,192,0.3), transparent 60%);
  animation: moveBG 8s infinite alternate ease-in-out;
  z-index: 0;
}
@keyframes moveBG {
  0% { transform: translateY(0px); }
  100% { transform: translateY(40px); }
}

/* HERO */
.hero {
  position: relative;
  z-index: 1;
  max-width: 900px;
  margin: auto;
  text-align: center;
  padding: 20px 20px;
}
.hero h1 {
  font-size: 3.5rem;
  background: linear-gradient(90deg, silver, #702cf4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.hero .tagline {
  font-size: 1.3rem;
  margin-top: 10px;
  color: #aaa;
}
.hero .intro {
  margin: 20px auto;
  color: #ccc;
  font-size: 1.1rem;
}
.hero .highlight {
  color: #702cf4;
  font-weight: bold;
}
.hero blockquote {
  margin-top: 30px;
  font-style: italic;
  color: silver;
}

/* JOBS TIMELINE */
.jobs {
  position: relative;
  margin-top: 80px;
  z-index: 1;
}
.jobs h2 {
  text-align: center;
  font-size: 2.2rem;
  color: silver;
  margin-bottom: 60px;
}

/* TIMELINE */
.timeline {
  position: relative;
  margin: auto;
  max-width: 1000px;
}
.timeline::after {
  content: "";
  position: absolute;
  width: 4px;
  background: linear-gradient(180deg, silver, #702cf4);
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -2px;
  animation: glowLine 3s infinite alternate;
}
@keyframes glowLine {
  0% { box-shadow: 0 0 5px #702cf4; }
  100% { box-shadow: 0 0 20px #702cf4; }
}

/* JOB CARDS */
.job-card {
  position: relative;
  background: #111;
  border: 1px solid rgba(112, 44, 244, 0.4);
  border-radius: 16px;
  padding: 30px;
  margin: 30px 0;
  width: 45%;
  z-index: 1;
  box-shadow: 0 0 20px rgba(112, 44, 244, 0.15);
  transition: transform 0.4s, box-shadow 0.4s;
}
.job-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 0 30px rgba(112, 44, 244, 0.6);
}

/* DOTS */
.job-card .dot {
  position: absolute;
  top: 20px;
  width: 20px;
  height: 20px;
  background: #702cf4;
  border-radius: 50%;
  box-shadow: 0 0 15px #702cf4;
}
.left .dot { right: -55px; }
.right .dot { left: -55px; }

/* POSITIONING */
.left { left: 0; }
.right { left: 55%; }

/* ICON */
.job-card .icon {
  font-size: 2.5rem;
  color: #702cf4;
  margin-bottom: 15px;
}

/* HEADINGS */
.job-card h3 {
  color: silver;
  font-size: 1.6rem;
  margin-bottom: 20px;
}
.job-card h4 {
  color: #702cf4;
  font-size: 1.2rem;
  margin-top: 20px;
  margin-bottom: 10px;
  border-bottom: 1px dashed rgba(192, 192, 192, 0.4);
  padding-bottom: 4px;
}

/* LIST */
.job-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.job-card ul li {
  margin: 8px 0;
  padding-left: 20px;
  position: relative;
}
.job-card ul li::before {
  content: "◆";
  position: absolute;
  left: 0;
  color: #702cf4;
  font-size: 0.7rem;
}


/* Job header (icon + title inline) */
.job-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
}

/* MOBILE VIEW */
@media (max-width: 768px) {
  .timeline {
    max-width: 90%;
    margin: auto;
  }

  .job-card {
    width: 100% !important;
    left: 0 !important;
    margin: 40px 0;
    padding: 25px;
  }

  .job-card.left,
  .job-card.right {
    transform: none !important;
  }

  .job-card .dot {
    top: -10px;
    left: 50%;
    right: auto;
    transform: translateX(-50%);
  }

  .job-header {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .job-header .icon {
    margin-bottom: 10px;
  }

  .timeline::after {
    left: 50%;
    margin-left: -2px;
  }
}

          `}
      </style>
      {/* Floating Gradient Background */}
      <div className="bg-animated"></div>

      {/* HERO */}
      <motion.section
        className="hero"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="tagline" style={{ fontSize: '3.5rem', background: 'linear-gradient(90deg, silver, #702cf4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Shape Tomorrow with GenOrcasX</p>
        <p className="intro">
          At GenOrcasX, we’re not just creating technology—we’re forging
          intelligent ecosystems that transform how businesses thrive. Since{" "}
          <span className="highlight">July 7, 2025</span>, we’ve been pioneering
          real-time AI solutions, automations, and advanced ML systems.
        </p>
        <blockquote>
          "We don’t just fill roles—we empower innovators to shape tomorrow’s
          technology."
        </blockquote>
      </motion.section>

      {/* JOBS TIMELINE */}
      <section className="jobs">
        <h2>Current Openings</h2>
        <div className="timeline">
          {/* Full Stack */}
          <motion.div
            className="job-card left fullstack"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="dot"></div>
            <div className="job-header">
              <FaLaptopCode className="icon" />
              <h3>Full Stack Developer (Full-Time)</h3>
            </div>
            <h4>Responsibilities</h4>
            <ul>
              <li>Develop & maintain responsive web & mobile applications</li>
              <li>Design scalable APIs and secure databases</li>
              <li>Collaborate with AI/ML engineers to integrate features</li>
              <li>Ensure performance, reliability, and smooth UX</li>
            </ul>
            <h4>What We’re Looking For</h4>
            <ul>
              <li>Proficiency in frontend & backend frameworks</li>
              <li>Problem-solving and creative thinking</li>
              <li>Passion for impactful products</li>
            </ul>
          </motion.div>

          {/* AI/ML */}
          <motion.div
            className="job-card right aiml"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="dot"></div>
            <div className="job-header">
              <FaRobot className="icon" />
              <h3>AI/ML Engineer (Full-Time)</h3>
            </div>
            <h4>Responsibilities</h4>
            <ul>
              <li>Develop ML models for NLP, CV, and automation</li>
              <li>Build AI assistants, chatbots, decision systems</li>
              <li>Integrate AI into applications with developers</li>
              <li>Experiment & optimize models</li>
            </ul>
            <h4>What We’re Looking For</h4>
            <ul>
              <li>Strong in ML/DL frameworks (PyTorch/TensorFlow)</li>
              <li>Experience in NLP, CV, or automation</li>
              <li>A curious, innovative mindset</li>
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
