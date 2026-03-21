import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <span className="gradient-text">About Me</span>
      </motion.h2>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', marginTop: '4rem', alignItems: 'center' }}>
        
        {/* Photo Column */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true, amount: 0.2 }}
           transition={{ duration: 0.7 }}
           style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center' }}
        >
          <div style={{ width: '100%', maxWidth: '350px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.6)', border: '1px solid var(--glass-border)' }}>
            <img src="/about-photo.jpeg" alt="Sai Monica R." style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
        </motion.div>

        {/* Text Column */}
        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true, amount: 0.2 }}
           transition={{ duration: 0.7, delay: 0.2 }}
           style={{ flex: '1 1 400px' }}
           className="about-text-content"
        >
          <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
            Hi, I'm Sai Monica!
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            I am a passionate AI/ML Full-Stack Engineer with a Master's degree in Data Science from Vellore Institute of Technology. I specialize in building scalable, AI-driven applications and secure REST APIs that bridge the gap between complex machine learning models and intuitive user interfaces.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8' }}>
            With hands-on experience at cutting-edge tech companies like ESDS Software Solutions and Nokia, I continuously strive to deliver high-performance, automated systems. When I'm not coding, I love exploring new technologies and pushing the boundaries of what's possible with AI.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
