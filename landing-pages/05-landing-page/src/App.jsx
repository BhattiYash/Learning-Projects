import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import ProblemSolved from './sections/ProblemSolved';
import Statistics from './sections/Statistics';
import MNCs from './sections/MNCs';
import Reviews from './sections/Reviews';
import Events from './sections/Events';
import Vision from './sections/Vision';
import './App.css';

/**
 * Main App Component
 * Assembles all sections of the high-tech website
 */
function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="app__main">
        <Hero />
        <ProblemSolved />
        <Statistics />
        <MNCs />
        <Reviews />
        <Events />
        <Vision />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
