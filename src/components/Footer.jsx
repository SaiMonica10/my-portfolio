import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const certifications = [
  { name: 'SQL for Data Analysis: Advanced SQL Querying Techniques', issuer: 'Udemy', date: 'Jan 2026', link: 'https://drive.google.com/file/d/12X5cq_r1o6dV3_ccn9EtHQB4pZXoX0Ni/view?usp=sharing' },
  { name: 'AI Engineer Agentic Track: The Complete Agent & MCP Course', issuer: 'Udemy', date: 'Nov 2025', link: 'https://drive.google.com/file/d/1dsANvPaCBJaodykSxzR8ExjWzeON5EDa/view?usp=sharing' },
  { name: 'AI-900: Microsoft Azure AI Fundamentals', issuer: 'Microsoft', date: 'Jun 2023', link: 'https://drive.google.com/file/d/1qR6ECpELvh7sfeS_DcDpOUEmpk9ymM16/view?usp=sharing' }
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
            <h3 style={{ fontSize: '2rem', marginBottom: '2rem' }}><span className="gradient-text">Certifications</span></h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {certifications.map((cert, idx) => (
                <div key={idx} style={{ padding: '1.5rem', background: 'var(--glass-bg)', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.3rem', color: 'var(--text-primary)' }}>
                    {cert.link ? (
                      <a href={cert.link} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>
                        {cert.name} <span style={{ fontSize: '0.8rem', opacity: 0.7, marginLeft: '4px' }}>↗</span>
                      </a>
                    ) : (
                      cert.name
                    )}
                  </h4>
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
