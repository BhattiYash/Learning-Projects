import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Section Components
import Hero from './sections/Hero';
import Philosophy from './sections/Philosophy';
import Specs from './sections/Specs';
import Gallery from './sections/Gallery';

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <div className="app">
      <Navbar />

      <main className="main-content">
        <Hero />
        <Philosophy />
        <Specs />
        <Gallery />
      </main>

      <Footer />
    </div>
  );
}

export default App;
