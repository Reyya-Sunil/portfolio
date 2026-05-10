import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

function TiltCard({ children }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      style={{
        perspective: 1000,
        width: '100%',
        maxWidth: '600px',
        margin: '0 auto'
      }}
    >
      <motion.div
        className="glass-card"
        style={{
          rotateX,
          rotateY,
          padding: '3rem',
          transformStyle: "preserve-3d"
        }}
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.02 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" style={{ minHeight: '100vh', padding: '5rem 10%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <motion.h2 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center' }}
      >
        Featured <span className="gradient-text">Projects</span>
      </motion.h2>

      <TiltCard>
        <div style={{ transform: 'translateZ(50px)' }}>
          <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Restaurant Billing System</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.6' }}>
            A console-based application developed using Java that implements core OOP concepts like abstraction, inheritance, and encapsulation. 
            Modeled real-world billing operations with a comprehensive UML class diagram. Features include item selection, automated bill generation, 
            tax and discount calculation, and multiple payment handling capabilities.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <span style={{ padding: '0.5rem 1rem', background: 'rgba(0, 240, 255, 0.1)', color: 'var(--accent-cyan)', borderRadius: '20px', fontSize: '0.9rem' }}>Java</span>
            <span style={{ padding: '0.5rem 1rem', background: 'rgba(138, 43, 226, 0.1)', color: 'var(--accent-purple)', borderRadius: '20px', fontSize: '0.9rem' }}>OOP</span>
            <span style={{ padding: '0.5rem 1rem', background: 'rgba(255, 255, 255, 0.1)', color: 'var(--text-primary)', borderRadius: '20px', fontSize: '0.9rem' }}>UML Design</span>
          </div>
        </div>
      </TiltCard>
    </section>
  );
}
