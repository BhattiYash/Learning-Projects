import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Cpu, Globe, Users, Calendar, ArrowRight, Star } from 'lucide-react';
import './App.css';

function App() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="app-container">
      {/* Background Gradient */}
      <div className="fixed-bg"></div>

      {/* Navigation Bar */}
      <nav className="navbar glass">
        <div className="logo">TECH<span>NOVA</span></div>
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#problem">Solutions</a></li>
          <li><a href="#stats">Impact</a></li>
          <li><a href="#events">Events</a></li>
        </ul>
        <button className="btn-primary">Get Started</button>
      </nav>

      {/* Hero Section with Parallax */}
      <section id="hero" ref={heroRef} className="hero">
        <motion.div style={{ y: yText, opacity: opacityHero }} className="hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Engineering the <span className="gradient-text">Future</span>
          </motion.h1>
          <p>Solving complex global challenges through neural computing and decentralized systems.</p>
          <div className="hero-btns">
            <button className="btn-primary">Explore Tech</button>
            <button className="btn-secondary">View Vision</button>
          </div>
        </motion.div>
      </section>

      {/* Problem Solved Section */}
      <section id="problem" className="section glass-section">
        <h2>Real-World Impact</h2>
        <div className="grid">
          <div className="card glass">
            <Globe size={40} className="icon" />
            <h3>Global Connectivity</h3>
            <p>Deploying low-latency mesh networks in remote areas to bridge the digital divide.</p>
          </div>
          <div className="card glass">
            <Cpu size={40} className="icon" />
            <h3>AI Ethics</h3>
            <p>Building transparent neural frameworks that prioritize data privacy and bias reduction.</p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="stats" className="stats-section">
        <div className="stat-item">
          <h3>99.9%</h3>
          <p>Uptime</p>
        </div>
        <div className="stat-item">
          <h3>140+</h3>
          <p>MNC Partners</p>
        </div>
        <div className="stat-item">
          <h3>2M+</h3>
          <p>Users Impacted</p>
        </div>
      </section>

      {/* MNCs & Collaborations */}
      <section className="section">
        <h2>Trusted by Industry Giants</h2>
        <div className="logo-wall">
          <div className="logo-placeholder">Microsoft</div>
          <div className="logo-placeholder">NVIDIA</div>
          <div className="logo-placeholder">Google</div>
          <div className="logo-placeholder">Tesla</div>
        </div>
      </section>

      {/* Future Goals (Vision) */}
      <section className="vision section glass">
        <motion.div 
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.9 }}
          className="vision-content"
        >
          <h2>Our 2030 Vision</h2>
          <p>To create a symbiotic relationship between human intuition and artificial intelligence, ensuring technology serves humanity, not the other way around.</p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">TECHNOVA</div>
          <div className="footer-links">
            <p>© 2026 TechNova Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;