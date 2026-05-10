import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" style={{ minHeight: '100vh', padding: '5rem 10%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <motion.h2 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center' }}
      >
        Get In <span className="gradient-text">Touch</span>
      </motion.h2>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
        <motion.div 
          className="glass-card"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          style={{ padding: '3rem', flex: '1', minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '2rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ background: 'rgba(0, 240, 255, 0.1)', padding: '1rem', borderRadius: '50%' }}>
              <Phone color="var(--accent-cyan)" />
            </div>
            <div>
              <h4 style={{ color: 'var(--text-secondary)' }}>Phone</h4>
              <p style={{ fontSize: '1.2rem' }}>+91-9515256602</p>
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ background: 'rgba(138, 43, 226, 0.1)', padding: '1rem', borderRadius: '50%' }}>
              <Mail color="var(--accent-purple)" />
            </div>
            <div>
              <h4 style={{ color: 'var(--text-secondary)' }}>Email</h4>
              <p style={{ fontSize: '1.2rem' }}>reyyasunil86@gmail.com</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '1rem', borderRadius: '50%' }}>
              <MapPin color="var(--text-primary)" />
            </div>
            <div>
              <h4 style={{ color: 'var(--text-secondary)' }}>Location</h4>
              <p style={{ fontSize: '1.2rem' }}>Nashik, Maharashtra, India</p>
            </div>
          </div>
        </motion.div>

        <motion.form 
          className="glass-card"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          style={{ padding: '3rem', flex: '1', minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          onSubmit={(e) => e.preventDefault()}
        >
          <input type="text" placeholder="Your Name" style={{ padding: '1rem', borderRadius: '8px', border: 'none', background: 'rgba(255, 255, 255, 0.05)', color: '#fff', fontSize: '1rem', outline: 'none' }} />
          <input type="email" placeholder="Your Email" style={{ padding: '1rem', borderRadius: '8px', border: 'none', background: 'rgba(255, 255, 255, 0.05)', color: '#fff', fontSize: '1rem', outline: 'none' }} />
          <textarea placeholder="Your Message" rows="5" style={{ padding: '1rem', borderRadius: '8px', border: 'none', background: 'rgba(255, 255, 255, 0.05)', color: '#fff', fontSize: '1rem', outline: 'none', resize: 'none' }}></textarea>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ padding: '1rem', borderRadius: '8px', border: 'none', background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-purple))', color: '#fff', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer' }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
