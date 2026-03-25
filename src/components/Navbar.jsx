import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'education-skills', 'experience', 'projects'];
      let current = '';
      
      for (const id of sections) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Active when the section crosses the middle of the screen
          if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.4) {
            current = id;
          }
        }
      }
      
      if (window.scrollY < 150) {
        current = '';
      }
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    setTimeout(handleScroll, 100);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'education-skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' }
  ];

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
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              style={{ 
                color: isActive ? 'var(--accent-color)' : 'var(--text-secondary)', 
                fontSize: '1rem',
                position: 'relative',
                padding: '0.2rem 0',
                textDecoration: 'none',
                transition: 'color 0.3s'
              }}
            >
              {item.label}
              <span
                style={{
                  position: 'absolute',
                  bottom: -4,
                  left: 0,
                  height: '2px',
                  background: 'var(--accent-color)',
                  width: isActive ? '100%' : '0%',
                  transition: 'width 0.3s ease-out',
                  borderRadius: '2px'
                }}
              />
            </a>
          );
        })}
      </div>
    </motion.nav>
  );
};

export default Navbar;
