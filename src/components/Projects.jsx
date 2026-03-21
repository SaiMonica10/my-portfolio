import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Full-Stack Interactive Number Guessing Game',
    tech: ['FastAPI', 'React', 'Vite', 'Cohere API', 'NLP'],
    points: [
      'Developed a full-stack game using FastAPI backend and React + Vite frontend.',
      'Integrated Cohere API for NLP-based hints and dynamic responses.',
      'Demonstrated scalable API development and AI-enhanced user experience.'
    ]
  },
  {
    title: 'Interactive Tableau Dashboard on DS Salaries',
    tech: ['Tableau', 'Data Science', 'Data Analytics'],
    points: [
      'Built an interactive dashboard analyzing Data Science roles by experience, job type, and company size.',
      'Derived salary insights from global ds salaries dataset for hiring analytics.'
    ]
  },
  {
    title: 'Chatbot for Web-Scraped Articles',
    tech: ['Streamlit', 'BeautifulSoup', 'SQL', 'NLP', 'Gemini API'],
    points: [
      'Built a Streamlit interface for summarization and Q&A.',
      'Scraped articles using BeautifulSoup + SQL, processed via NLP and Gemini API.'
    ]
  },
  {
    title: 'Disease Prediction using Random Forest',
    tech: ['Python', 'Random Forest', 'Flask', 'HTML/CSS/JS'],
    points: [
      'Trained Random Forest model on 132 symptoms achieving 95% accuracy.',
      'Deployed Flask-based system with responsive HTML/CSS/JS UI.'
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <span className="gradient-text">Featured Projects</span>
      </motion.h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginTop: '4rem' }}>
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="glass-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{project.title}</h3>
            
            <div style={{ marginBottom: '1.5rem', flexGrow: 1 }}>
              <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)', fontSize: '1rem' }}>
                {project.points.map((point, pIdx) => (
                  <li key={pIdx} style={{ marginBottom: '0.5rem' }}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--glass-border)' }}>
              {project.tech.map((t, i) => (
                <span key={i} className="badge" style={{ padding: '0.3rem 0.8rem', fontSize: '0.75rem' }}>{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
