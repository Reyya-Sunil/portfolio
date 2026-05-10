import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Brain, BookOpen } from 'lucide-react';

export default function About() {
  const cards = [
    {
      title: "Exploration (1st Year)",
      desc: "Explored different coding languages, discovered my passion for programming, and embraced campus life at Sandip University.",
      icon: <Code2 size={32} color="var(--accent-cyan)" />
    },
    {
      title: "Current Focus (2nd Year)",
      desc: "Mastering Core & Advanced Java along with MySQL. Pursuing B.Tech in AI/ML at Sandip University (2024-2028).",
      icon: <Database size={32} color="var(--accent-purple)" />
    },
    {
      title: "Future Ready",
      desc: "Currently learning Python to dive deep into Artificial Intelligence and Machine Learning.",
      icon: <Brain size={32} color="var(--accent-cyan)" />
    },
    {
      title: "Consistency",
      desc: "Dedicated to continuous improvement by solving 1 DSA problem every single day.",
      icon: <BookOpen size={32} color="var(--accent-purple)" />
    }
  ];

  return (
    <section id="about" style={{ minHeight: '100vh', padding: '5rem 10%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <motion.h2 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center' }}
      >
        My <span className="gradient-text">Journey</span>
      </motion.h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '900px', margin: '0 auto', width: '100%' }}>
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="glass-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -10, scale: 1.05, boxShadow: '0 10px 30px rgba(0, 240, 255, 0.2)' }}
            style={{ padding: '2rem', textAlign: 'center' }}
          >
            <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>{card.icon}</div>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>{card.title}</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
