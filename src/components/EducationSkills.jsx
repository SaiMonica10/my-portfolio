import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  'Python', 'SQL', 'R', 'Java', 'C++', 'JavaScript',
  'PyTorch', 'scikit-learn', 'LangChain', 'OpenAI API',
  'Robot Framework', 'Selenium', 'Flask', 'FastAPI', 'React',
  'PostgreSQL', 'MySQL', 'SQLite',
  'PowerBI', 'Tableau', 'Azure', 'Git', 'Docker'
];

const education = [
  {
    period: 'Sep 2020 – Aug 2025',
    degree: 'M.Tech in CSE - Data Science (CGPA: 8.63)',
    institution: 'Vellore Institute of Technology',
    location: 'India'
  },
  {
    period: 'Jun 2019 – May 2020',
    degree: '12th CBSE - PCM-CS (75%)',
    institution: 'Shrishti Vidyashram',
    location: 'India'
  },
  {
    period: 'Jun 2017 – May 2018',
    degree: '10th CBSE (82.2%)',
    institution: 'B.V.Reddy School',
    location: 'India'
  }
];

const EducationSkills = () => {
  return (
    <section id="education-skills" className="section container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <span className="gradient-text">Skills & Education</span>
      </motion.h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', marginTop: '4rem' }}>
        
        {/* Skills Column */}
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true, amount: 0.2 }}
           transition={{ duration: 0.7 }}
        >
          <h3 style={{ fontSize: '2rem', marginBottom: '2rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '1rem' }}>
            <span className="gradient-text">Technical Skills</span>
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                className="glass-card"
                whileHover={{ scale: 1.1, y: -5, borderColor: 'var(--accent-color)', boxShadow: '0 0 15px var(--accent-glow)' }}
                style={{
                  padding: '0.8rem 1.2rem',
                  borderRadius: '12px',
                  cursor: 'default',
                  userSelect: 'none',
                  border: '1px solid var(--glass-border)',
                  background: 'var(--glass-bg)',
                  color: 'var(--text-primary)'
                }}
              >
                <h5 style={{ margin: 0, fontWeight: '600', letterSpacing: '0.5px' }}>{skill}</h5>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Column */}
        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true, amount: 0.2 }}
           transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h3 style={{ fontSize: '2rem', marginBottom: '2rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '1rem' }}>
            <span className="gradient-text">Education</span>
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {education.map((edu, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
                <span style={{ color: 'var(--accent-color)', fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.5rem' }}>{edu.period}</span>
                <h4 style={{ fontSize: '1.3rem', marginBottom: '0.3rem' }}>{edu.degree}</h4>
                <p style={{ color: 'var(--text-secondary)' }}>{edu.institution}, {edu.location}</p>
              </div>
            ))}
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default EducationSkills;
