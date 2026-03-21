import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const certifications = [
  { name: 'AI Engineer Agentic Track: The Complete Agent & MCP Course', issuer: 'Udemy', date: 'Jan 2025' },
  { name: 'Python (Basics)', issuer: 'HackerRank', date: 'May 2025' }, // Future date or typo in resume, kept as is
  { name: 'AI-900: Microsoft Azure AI Fundamentals', issuer: 'Microsoft', date: 'Dec 2023 – Jul 2024' }
];

const Footer = () => {
  return (
    <footer id="contact" style={{ paddingTop: '8rem', paddingBottom: '2rem', position: 'relative', zIndex: 10 }}>
      <div className="container">

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', marginBottom: '6rem' }}>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <h3 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--text-primary)' }}>Certifications</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {certifications.map((cert, idx) => (
                <div key={idx} style={{ padding: '1.5rem', background: 'var(--glass-bg)', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.3rem', color: 'var(--text-primary)' }}>{cert.name}</h4>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    <span>{cert.issuer}</span>
                    <span style={{ color: 'var(--accent-color)' }}>{cert.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
          >
            <h3 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
              Let's <span className="gradient-text">Connect!</span>
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>
              Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: 'fit-content' }}>
              <a href="mailto:sai.monica444@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.2rem', color: 'var(--text-primary)' }}>
                <span style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#000000', border: '1px solid rgba(255, 255, 255, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Mail size={18} color="#000000" fill="#ffffff" strokeWidth={2} />
                </span>
                sai.monica444@gmail.com
              </a>
              <a href="tel:+919789690522" style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.2rem', color: 'var(--text-primary)' }}>
                <span style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#000000', border: '1px solid rgba(255, 255, 255, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff' }}>
                  <Phone size={18} fill="currentColor" strokeWidth={0} />
                </span>
                +91 9789690522
              </a>

              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                <a href="https://www.linkedin.com/in/saimonica" target="_blank" rel="noopener noreferrer" className="btn" aria-label="LinkedIn" style={{ padding: '0.8rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#000000', borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                  <Linkedin size={22} color="#ffffff" fill="currentColor" strokeWidth={0} />
                </a>
                <a href="https://github.com/SaiMonica10" target="_blank" rel="noopener noreferrer" className="btn" aria-label="GitHub" style={{ padding: '0.8rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#000000', borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                  <Github size={22} color="#ffffff" fill="currentColor" strokeWidth={0} />
                </a>
                <a href="https://leetcode.com/u/saimonica10/" target="_blank" rel="noopener noreferrer" className="btn" aria-label="LeetCode" style={{ padding: '0.8rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#000000', borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="#ffffff" xmlns="http://www.w3.org/2000/svg"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114l5.7-5.545c.545-.533.553-1.41.019-1.951A1.375 1.375 0 0 0 13.483 0zm0 0" /></svg>
                </a>
              </div>
            </div>
          </motion.div>

        </div>

        <div style={{ textAlign: 'center', borderTop: '1px solid var(--glass-border)', paddingTop: '2rem', color: 'var(--text-secondary)' }}>
          <p>© {new Date().getFullYear()} Sai Monica R. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
