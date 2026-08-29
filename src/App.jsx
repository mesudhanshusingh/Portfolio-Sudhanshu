import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Journey from './sections/Journey';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import ElectricCursor from './components/ElectricCursor';

function App() {
  return (
    <div className="w-full min-h-screen bg-[#020204] text-gray-100 font-sans selection:bg-purple-600 selection:text-white relative overflow-x-hidden">
      {/* Lightweight Orange Electric Spark Cursor Layer */}
      <ElectricCursor />

      {/* Unique Floating Glass Island Navigation Header */}
      <Navbar />

      {/* Full-Screen Continuous Canvas */}
      <div className="w-full min-h-screen bg-[#020204] flex flex-col pt-16 sm:pt-20">
        
        {/* Main Continuous Sections */}
        <main className="flex-grow w-full">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Journey />
          <Certifications />
          <Contact />
        </main>

        {/* Footer & Floating Actions */}
        <Footer />
        <BackToTop />

      </div>
    </div>
  );
}

export default App;
