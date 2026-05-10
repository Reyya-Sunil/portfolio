import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const links = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, type: 'spring' }}
      style={{ position: 'fixed', top: 0, width: '100%', padding: '1.5rem 10%', zIndex: 100, display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(5, 5, 5, 0.8)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
    >
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'Outfit' }}>
        <span className="gradient-text">R</span>S.
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.href} style={{ fontSize: '1rem', fontWeight: '500', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'var(--accent-cyan)'} onMouseOut={(e) => e.target.style.color = 'inherit'}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/resume.pdf"
          download="Reyya_Sunil_Resume.pdf"
          className="btn-resume-nav"
        >
          📄 Resume
        </a>
      </div>
    </motion.nav>
  );
}
