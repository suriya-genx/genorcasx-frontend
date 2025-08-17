import React from "react";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaBrain,
  FaBullseye,
  FaRocket,
  FaHandshake,
  FaLaptopCode,
  FaRobot,
} from "react-icons/fa";

const sections = [
  {
    id: "who-we-are",
    icon: <FaUsers />,
    title: "Who We Are",
    description:
      "Founded on July 7, 2025, GenOrcasX is an AI-as-a-Service innovator committed to redefining how businesses interact with technology. We blend Artificial Intelligence, Machine Learning, and automation engineering to create real-time, adaptive solutions that solve today’s problems and anticipate tomorrow’s challenges.",
  },
  {
    id: "what-we-do",
    icon: <FaBrain />,
    title: "What We Do",
    description:
      "We specialize in delivering intelligent solutions across diverse domains:",
    points: [
      "AI-Driven Automations – From workflow streamlining to process optimization, we build systems that think and act like your smartest employee-only faster.",
      "Custom ML Solutions – Tailored machine learning models that adapt to your data and business goals.",
      "Conversational AI – Next-gen chatbots, voice assistants, and interactive agents designed for natural, human-like communication.",
      "Web & Mobile Applications – Scalable, performance-focused platforms powered by AI for a seamless user experience.",
      "Real-Time AI Solutions– Instant insights, predictions, and decision-making powered by low-latency AI architectures.",
    ],
  },
  {
    id: "vision",
    icon: <FaRocket />,
    title: "Our Vision",
    description:
      "To empower businesses with intelligence that never sleeps, delivering adaptive AI solutions that evolve with the pace of innovation. We envision a future where every process, interaction, and decision is data-informed, automated, and intelligent.",
  },
  {
    id: "mission",
    icon: <FaBullseye />,
    title: "Our Mission",
    description:
      "To make AI accessible, reliable, and impactful for every business—from startups to enterprises—by combining innovation with precision engineering.",
  },
  {
    id: "why-choose-us",
    icon: <FaHandshake />,
    title: "Why Choose GenOrcasX",
    points: [
      "Real-Time Performance - Our solutions react in milliseconds, enabling instant decision-making.",
      "End-to-End Expertise – From concept to deployment, we handle it all.",
      "Tailored for You - Every solution is built with your unique business context in mind.",
      "Future-Ready - We design systems that grow with you, not against you.",
    ],
  },
  {
    id: "promise",
    icon: <FaHandshake />,
    title: "Our Promise",
    description:
      "At GenOrcasX, we don’t just deploy AI - we craft living, evolving digital ecosystems that amplify human potential. We build for you, with you, ensuring that our technology becomes a seamless extension of your business vision.",
  },
];

const teams = [
  {
    id: "fullstack",
    icon: <FaLaptopCode />,
    title: "Full Stack Development Team",
    description:
      "Our Full Stack Team is the backbone of every web and mobile solution we create. They bring together front-end finesse and back-end power, delivering seamless, scalable, and high-performance applications.\n\n With a strong command over modern frameworks, cloud infrastructure, and secure architecture design, this team transforms ideas into visually stunning and functionally flawless digital products. Their creativity ensures every user experience is engaging, while their technical precision guarantees every line of code is robust and future-ready.",
  },
  {
    id: "ai-ml",
    icon: <FaRobot />,
    title: "AI & ML Innovation Team",
    description:
      "Our AI & ML Team is the creative force that turns raw data into intelligent solutions. They specialize in building custom machine learning models, predictive analytics, AI-powered automations, and real-time intelligent systems tailored to your needs.With deep expertise in NLP, recommendation systems, and conversational AI, they craft knowledge-driven solutions that are not just smart but purpose-built for your unique challenges. Their work is grounded in solid research, enriched with innovation, and fine-tuned for real-world impact.",
  },
];

export default function AboutPage() {
  return (
    <div className="about-page">
      <style>
        {`
          .about-page {
  background: #0b0b0b;
  color: silver;
  min-height: 100vh;
  padding: 80px 10%;
  font-family: "Segoe UI", sans-serif;
  position: relative;
  overflow: hidden;
}

/* Background blobs for animation */
.about-page::before,
.about-page::after {
  content: "";
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.25;
  animation: pulse 6s infinite alternate;
}

.about-page::before {
  width: 350px;
  height: 350px;
  top: -80px;
  left: -80px;
  background: #702cf4;
}

.about-page::after {
  width: 450px;
  height: 450px;
  bottom: -100px;
  right: -100px;
  background: silver;
}

@keyframes pulse {
  from { transform: scale(1); }
  to { transform: scale(1.2); }
}

.about-title {
  font-size: 50px;
  text-align: center;
  font-weight: 800;
  margin-bottom: 15px;
}

.about-title span {
  color: #702cf4;
}

.about-subtitle {
  text-align: center;
  font-size: 20px;
  color: #c0c0c0;
  font-style: italic;
  margin-bottom: 60px;
}

.sections {
  display: flex;
  flex-direction: column;
  gap: 60px;
}

.section {
  display: flex;
  align-items: center;
  gap: 40px;
  margin-right: 180px; 
}

.section.reverse {
  flex-direction: row-reverse;
  margin-right: 0;
  margin-left: 180px;
}

.section .icon {
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  font-size: 32px;
  color: white;
  background: linear-gradient(135deg, #702cf4, silver);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.section .content h2 {
  font-size: 28px;
  color: #702cf4;
  margin-bottom: 10px;
}

.section .content p {
  font-size: 18px;
  line-height: 1.6;
  white-space: pre-line;
}

.teams-heading {
  text-align: center;
  font-size: 36px;
  margin: 80px 0 40px;
}

.teams-heading span {
  color: #702cf4;
}

.teams {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

.team-card {
  background: linear-gradient(135deg, rgba(112,44,244,0.15), rgba(192,192,192,0.1));
  padding: 25px;
  border-radius: 15px;
  border: 1px solid #333;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.team-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 30px rgba(112, 44, 244, 0.3);
}

.team-card h3 {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #702cf4;
  font-size: 22px;
  margin-bottom: 10px;
}

.team-card p {
  font-size: 16px;
  color: #c0c0c0;
  line-height: 1.6;
}

.connector {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
}

.content {
  color: #eee;
}

.content h2 {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  color: #fff;
}

.content .desc {
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #ccc;
}

.content .points {
  list-style: none;
  padding-left: 0;
}

.content .points li {
  margin: 0.4rem 0;
  padding-left: 1.6rem;
  position: relative;
  font-size: 1rem;
  color: #ddd;
}

.content .points li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #702cf4; /* violet bullet */
  font-size: 1.2rem;
}

/* MOBILE VIEW */
@media (max-width: 768px) {
  .about-page {
    padding: 50px 5%;
  }

  .sections {
    gap: 40px;
  }

  .section {
    flex-direction: column !important;
    margin: 0 !important;
    gap: 20px;
    text-align: center;
  }

  .section.reverse {
    flex-direction: column !important;
    margin: 0 !important;
  }

  .section .icon {
    margin: 0 auto;
    width: 70px;
    height: 70px;
    font-size: 28px;
  }

  .section .content h2 {
    font-size: 24px;
  }

  .section .content p {
    font-size: 16px;
    line-height: 1.5;
  }

  .connector {
    margin: 20px 0;
  }

  .teams {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .team-card h3 {
    justify-content: center;
  }
}

          `}
      </style>
      <motion.h1
        className="about-title"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About <span>GenOrcasX</span>
      </motion.h1>

      <motion.p
        className="about-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        "Where Intelligence Meets Imagination, Possibilities Become Infinite."
      </motion.p>

      <div className="sections">
        {sections.map((sec, i) => (
          <React.Fragment key={sec.id}>
            <motion.div
              className={`section ${i % 2 === 1 ? "reverse" : ""}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <div className="icon">{sec.icon}</div>
              <div className="content">
                <h2>{sec.title}</h2>

                {sec.description && <p className="desc">{sec.description}</p>}

                {sec.points && (
                  <ul className="points">
                    {sec.points.map((point, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.15, duration: 0.5 }}
                        viewport={{ once: false, amount: 0.4 }}
                      >
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>

            {/* Connector curve (only if not last section) */}
            {/* Connector curve (only if not last section) */}
            {i < sections.length - 1 && (
              <div
                className="connector"
                style={{ marginTop: "-25px", marginBottom: "-45px" }}
              >
                <motion.svg
                  width="100%"
                  height="120"
                  viewBox="0 0 600 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    d={
                      i % 2 === 0
                        ? "M 520 0 C 550 60, 50 60, 50 120" // right → left
                        : "M 50 0 C 50 60, 550 60, 550 120" // left → right
                    }
                    stroke="url(#silverViolet)"
                    strokeWidth="3"
                    strokeDasharray="8 6"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1.8, ease: "easeInOut" }}
                    viewport={{ once: false, amount: 0.3 }}
                  />
                  <defs>
                    <linearGradient
                      id="silverViolet"
                      x1="0"
                      y1="0"
                      x2="600"
                      y2="0"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="silver" />
                      <stop offset="1" stopColor="#702cf4" />
                    </linearGradient>
                  </defs>
                </motion.svg>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      <h2 className="teams-heading">
        Our <span>Teams</span>
      </h2>

      <div className="teams">
        {teams.map((team, i) => (
          <motion.div
            key={team.id}
            className="team-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h3>
              {team.icon} {team.title}
            </h3>
            <p>{team.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
