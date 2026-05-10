import React from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
  const skills = [
    { category: "Languages", items: ["Java (Core & Adv)", "Python (Learning)"] },
    { category: "Core Concepts", items: ["OOP", "Exception Handling", "File Handling", "Data Structures & Algorithms"] },
    { category: "Databases & Tools", items: ["MySQL", "Git & GitHub", "VS Code", "Eclipse / IntelliJ IDEA"] }
  ];

  return (
    <section id="skills" style={{ minHeight: '100vh', padding: '5rem 10%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <motion.h2 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center' }}
      >
        Technical <span className="gradient-text">Skills</span>
      </motion.h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {skills.map((skillGrp, idx) => (
          <motion.div
            key={idx}
            className="glass-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, type: 'spring', bounce: 0.4 }}
            whileHover={{ scale: 1.05 }}
            style={{ padding: '2rem' }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--accent-cyan)' }}>{skillGrp.category}</h3>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {skillGrp.items.map((item, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: (idx * 0.2) + (i * 0.1) }}
                  style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', fontSize: '1.1rem' }}
                >
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-purple)', marginRight: '1rem' }}></span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
