import React, { useState, useEffect } from 'react';
import Background3D from './components/Background3D';
import Hero from './components/Hero';
import About from './components/About';
import EducationSkills from './components/EducationSkills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './index.css';

import Navbar from './components/Navbar';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for 3D assets and animations
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: '#050508' }}>
        <div className="loader" style={{ width: '50px', height: '50px', border: '3px solid rgba(0,229,255,0.3)', borderTop: '3px solid #00e5ff', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
        <h2 style={{ marginTop: '20px', fontFamily: 'Outfit, sans-serif', color: '#fff', letterSpacing: '2px' }}>INITIALIZING AI PROTOCOLS...</h2>
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        `}} />
      </div>
    );
  }

  return (
    <>
      <Background3D />
      <Navbar />
      <main className="interactive-area">
        <Hero />
        <About />
        <EducationSkills />
        <Experience />
        <Projects />
        <Footer />
      </main>
    </>
  );
}

export default App;
