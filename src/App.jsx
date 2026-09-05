import React from 'react';
import Navbar from './components/ui/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Journey from './sections/Journey';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import Footer from './components/ui/Footer';
import BackToTop from './components/ui/BackToTop';
import CustomCursor from './components/ui/CustomCursor';

function App() {
  return (
    <div className="w-full min-h-screen bg-[#020204] text-gray-100 font-sans selection:bg-purple-600 selection:text-white relative overflow-x-hidden">
      {/* Stateful Custom Cursor with Dynamic Links & View Badge */}
      <CustomCursor />

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
