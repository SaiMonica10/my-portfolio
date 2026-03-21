import React from 'react';
import { motion } from 'framer-motion';
const Hero = () => {
  return (
    <section className="section container hero-container" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '4rem' }}>
      <div style={{ position: 'relative', zIndex: 10, maxWidth: '600px', flex: '1 1 300px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }} // Wait for loader
        >
          <div className="badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-color)', boxShadow: '0 0 8px var(--accent-color)' }} className="pulse-dot"></span>
            Available for Hire
          </div>
          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 1.1, margin: '1rem 0' }}>
            Hi, I'm <br />
            <span className="animated-gradient-text">Sai Monica R.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.5 }}
        >
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: 'var(--text-secondary)', fontWeight: 400, marginBottom: '2rem' }}>
            Data Scientist | AI/ML Engineer
          </h2>
          {/* <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '600px', marginBottom: '3rem' }}>
            Masters in Data Science graduate building scalable, AI-driven applications, secure REST APIs, and automated systems. Designing solutions that bridge Machine Learning with modern web interfaces.
          </p> */}
        </motion.div>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.8 }}
          style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}
        >
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn btn-secondary">
            Contact Me
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center', position: 'relative', zIndex: 10, minWidth: '300px' }}
      >
        <div className="elegant-frame floating">
          <img src="/hero-photo.jpeg" alt="Sai Monica" className="elegant-photo" />
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="floating"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3.5 }}
        style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
      >
        <div style={{ fontSize: '0.8rem', letterSpacing: '2px', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Scroll</div>
        <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, var(--accent-color), transparent)' }}></div>
      </motion.div>
    </section>
  );
};

export default Hero;
