import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Trust from './components/Trust'
import Services from './components/Services'
import Proof from './components/Proof'
import CTA from './components/CTA'
import Footer from './components/Footer'
import './App.css'

/**
 * App Component (Root)
 * 
 * Main application component that orchestrates all sections.
 * Clean, semantic structure for optimal SEO and accessibility.
 */
function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <Services />
        <Proof />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
