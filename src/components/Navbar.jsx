import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      className="nav-header"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 2.2 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        padding: '1.5rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 100,
        background: 'rgba(5, 5, 8, 0.8)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <h2 style={{ margin: 0, fontSize: '1.8rem', color: '#fff', letterSpacing: '1px' }}>Portfolio</h2>
        <img 
          src="/avatar.jpeg" 
          alt="Avatar Icon" 
          style={{ 
            width: '45px', 
            height: '45px', 
            borderRadius: '50%', 
            objectFit: 'cover',
            border: '2px solid var(--accent-color)'
          }} 
        />
      </div>
      
      <div className="nav-links" style={{ display: 'flex', gap: '1.5rem' }}>
        <a href="#about" style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>About</a>
        <a href="#projects" style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>Projects</a>
        <a href="#experience" style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>Experience</a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
