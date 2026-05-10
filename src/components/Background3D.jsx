import React from 'react';
import { motion } from 'framer-motion';

// Floating particle component
function Particle({ delay, duration, x, y, size, color }) {
  return (
    <motion.div
      style={{
        position: 'absolute',
        width: size,
        height: size,
        borderRadius: '50%',
        background: color,
        left: x,
        top: y,
        filter: 'blur(1px)',
      }}
      animate={{
        y: [0, -30, 0],
        opacity: [0.3, 0.8, 0.3],
        scale: [1, 1.3, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}

// Animated gradient line
function GlowLine({ top, delay }) {
  return (
    <motion.div
      style={{
        position: 'absolute',
        top,
        left: 0,
        width: '100%',
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(0, 240, 255, 0.15), rgba(138, 43, 226, 0.15), transparent)',
        pointerEvents: 'none',
      }}
      animate={{
        opacity: [0, 0.6, 0],
        scaleX: [0.3, 1, 0.3],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}

export default function AnimatedBackground() {
  const particles = [
    { delay: 0, duration: 6, x: '10%', y: '20%', size: 4, color: 'rgba(0, 240, 255, 0.5)' },
    { delay: 1.5, duration: 7, x: '25%', y: '60%', size: 3, color: 'rgba(138, 43, 226, 0.5)' },
    { delay: 0.8, duration: 5, x: '75%', y: '15%', size: 5, color: 'rgba(0, 240, 255, 0.4)' },
    { delay: 2.2, duration: 8, x: '85%', y: '70%', size: 3, color: 'rgba(138, 43, 226, 0.4)' },
    { delay: 3.0, duration: 6, x: '50%', y: '40%', size: 4, color: 'rgba(0, 240, 255, 0.3)' },
    { delay: 1.0, duration: 9, x: '15%', y: '80%', size: 3, color: 'rgba(138, 43, 226, 0.35)' },
    { delay: 4.0, duration: 7, x: '90%', y: '35%', size: 4, color: 'rgba(0, 240, 255, 0.35)' },
    { delay: 0.5, duration: 6, x: '60%', y: '85%', size: 3, color: 'rgba(138, 43, 226, 0.4)' },
    { delay: 2.8, duration: 5, x: '40%', y: '10%', size: 5, color: 'rgba(0, 240, 255, 0.45)' },
    { delay: 3.5, duration: 8, x: '70%', y: '55%', size: 3, color: 'rgba(138, 43, 226, 0.3)' },
    { delay: 1.2, duration: 7, x: '5%', y: '45%', size: 4, color: 'rgba(0, 240, 255, 0.4)' },
    { delay: 4.5, duration: 6, x: '95%', y: '90%', size: 3, color: 'rgba(0, 240, 255, 0.35)' },
  ];

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 0,
      pointerEvents: 'none',
      overflow: 'hidden',
    }}>
      {/* Subtle floating gradient orbs */}
      <motion.div
        style={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 240, 255, 0.06) 0%, transparent 70%)',
          top: '10%',
          right: '-5%',
          filter: 'blur(40px)',
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        style={{
          position: 'absolute',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(138, 43, 226, 0.06) 0%, transparent 70%)',
          bottom: '10%',
          left: '-5%',
          filter: 'blur(40px)',
        }}
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Floating particles */}
      {particles.map((p, i) => (
        <Particle key={i} {...p} />
      ))}

      {/* Animated horizontal glow lines */}
      <GlowLine top="25%" delay={0} />
      <GlowLine top="50%" delay={3} />
      <GlowLine top="75%" delay={6} />

      {/* Vignette overlay for depth */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at center, transparent 50%, rgba(5, 5, 5, 0.4) 100%)',
        pointerEvents: 'none',
      }} />
    </div>
  );
}
