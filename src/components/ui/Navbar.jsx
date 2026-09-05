import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Section spy logic
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = currentScrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }

      // Auto-hide navbar logic: show at top, hide on scroll down, show on scroll up
      if (currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY + 10) {
        setIsVisible(false); // Hide on scrolling down
      } else if (currentScrollY < lastScrollY - 10) {
        setIsVisible(true);  // Show on scrolling up
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 py-4 sm:py-5 bg-transparent pointer-events-none transform-gpu will-change-transform"
    >
      {/* 2.5px Electric Purple Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-purple-500 via-fuchsia-400 to-indigo-600 origin-left z-50 shadow-purple-glow-sm pointer-events-none"
        style={{ scaleX }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Unique Floating Island: Monogram & Brand Name */}
          <motion.a
            href="#home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="pointer-events-auto inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#08080d]/95 backdrop-blur-xl border border-purple-500/40 shadow-purple-glow-sm hover:border-purple-500 hover:shadow-purple-glow transition-all duration-300 group focus:outline-none cursor-pointer transform-gpu"
          >
            <div className="flex items-center justify-center w-7 h-7 rounded-full bg-purple-950 border border-purple-500/60">
              <span className="font-heading font-black text-transparent bg-clip-text bg-gradient-to-tr from-purple-300 via-fuchsia-200 to-indigo-400 text-xs">
                SS
              </span>
            </div>

            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-white tracking-wider text-xs sm:text-sm group-hover:text-purple-300 transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[9px] sm:text-[10px] text-purple-400 font-bold uppercase tracking-widest -mt-0.5">
                {personalInfo.title}
              </span>
            </div>
          </motion.a>

          {/* Unique Floating Island: Center Navigation Buttons */}
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto hidden lg:flex items-center gap-1.5 bg-[#08080d]/95 backdrop-blur-xl px-4 py-1.5 rounded-full border border-purple-500/40 shadow-purple-glow-sm hover:border-purple-500/70 transition-all"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                  whileHover={{ scale: 1.05, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all duration-200 cursor-pointer flex items-center gap-1.5 transform-gpu ${
                    isActive
                      ? 'text-white font-extrabold'
                      : 'text-gray-300 hover:text-white hover:bg-purple-950/40'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded-full bg-purple-500/30 border border-purple-500/70 shadow-purple-glow-sm"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </motion.a>
              );
            })}
          </motion.nav>

          {/* Mobile Menu Button Floating Island */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="pointer-events-auto flex lg:hidden items-center"
          >
            <motion.button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              className="p-2.5 rounded-full bg-[#08080d]/95 backdrop-blur-xl border border-purple-500/40 text-purple-400 hover:text-white focus:outline-none cursor-pointer shadow-purple-glow-sm"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </motion.div>

        </div>
      </div>

      {/* Mobile Drawer Floating Island Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="pointer-events-auto lg:hidden fixed inset-x-4 top-[70px] bg-[#030305]/95 backdrop-blur-2xl border border-purple-500/60 p-5 rounded-3xl shadow-purple-glow-lg transition-all z-50 max-w-sm mx-auto"
        >
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-purple-500/30 text-white border border-purple-500/60'
                      : 'text-gray-300 hover:bg-[#0e0e16] hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-purple-500 shadow-purple-glow-sm" />}
                </a>
              );
            })}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
