import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'AI/ML Full-Stack Developer',
    company: 'ESDS Software Solutions',
    period: 'Jun 2025 – Present',
    location: 'Chennai, India',


    points: [
      'Assisted in AI/ML research and experimentation, focusing on prompt engineering and evaluating LLM performance for specific use cases.',
      'Designed and refined prompts to improve the quality and consistency of generated content and outputs.',
      'Built and deployed full-stack applications using React, FastAPI / Node, and PostgreSQL, enabling scalable and efficient workflows.',
      'Worked with Docker and Kubernetes to containerize applications and support deployment workflows in scalable environments.'
    ]
  },
  {
    role: 'SDE Intern',
    company: 'Nokia',
    period: 'Aug 2024 – May 2025',
    location: 'Bengaluru, India',
    points: [
      'Created scalable UI test automation using POM in Python with Robot Framework & Selenium.',
      'Improved automation coverage, reducing manual testing efforts by 30%.',
      'Enhanced CI/CD integration with Jenkins for automated test execution.',
      'Collaborated in Agile sprints, contributing to planning and delivery.'
    ]
  },
  {
    role: 'AI Intern',
    company: 'Ashok Leyland',
    period: 'May 2023 – Jun 2023',
    location: 'Chennai, India',
    points: [
      'Developed a hybrid document-based chatbot using OpenAI API, LangChain, and PDF parsing.',
      'Implemented NLP-based Q&A for extracting insights from manuals.',
      'Deployed solution with Streamlit to improve accessibility for engineering teams.'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section container">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <span className="gradient-text">Work Experience</span>
      </motion.h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', marginTop: '4rem', position: 'relative' }}>

        {/* Vertical line timeline */}
        <div className="timeline-line" style={{
          position: 'absolute',
          left: '20px',
          top: '0',
          bottom: '0',
          width: '2px',
          background: 'linear-gradient(to bottom, var(--accent-color), var(--accent-secondary), transparent)',
          zIndex: -1
        }}></div>

        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            className="glass-card timeline-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            style={{ marginLeft: '50px', position: 'relative' }}
          >
            {/* Dot on the timeline */}
            <div className="timeline-dot" style={{
              position: 'absolute',
              left: '-59px',
              top: '40px',
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              background: 'var(--bg-primary)',
              border: '4px solid var(--accent-color)',
              boxShadow: '0 0 10px var(--accent-glow)'
            }}></div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '1rem', gap: '1rem' }}>
              <div>
                <h3 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{exp.role}</h3>
                <h4 style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
                  <span style={{ color: 'var(--accent-secondary)' }}>@</span> {exp.company}
                </h4>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ color: 'var(--accent-color)', fontWeight: '600', marginBottom: '0.2rem' }}>{exp.period}</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{exp.location}</div>
              </div>
            </div>

            <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
              {exp.points.map((point, pIdx) => (
                <li key={pIdx} style={{ marginBottom: '0.8rem', position: 'relative' }}>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
