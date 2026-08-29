import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, MapPin, Github, Linkedin, Instagram, Twitter } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import Developer3DScene from '../components/Developer3DScene';
import HolographicGrid from '../components/HolographicGrid';
import EnergyBeams from '../components/EnergyBeams';

const socialMediaRow = [
  {
    name: 'GitHub',
    icon: Github,
    url: personalInfo.socials.github,
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: personalInfo.socials.linkedin,
  },
  {
    name: 'Instagram',
    icon: Instagram,
    url: personalInfo.socials.instagram,
  },
  {
    name: 'X',
    icon: Twitter,
    url: personalInfo.socials.x,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const Hero = () => {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[calc(100vh-80px)] flex flex-col justify-between pt-6 pb-12 lg:pt-10 lg:pb-16 bg-[#020204] overflow-hidden">
      {/* Sci-Fi Holographic Grid Overlay */}
      <HolographicGrid />

      {/* Futuristic Plasma Energy Beams Layer */}
      <EnergyBeams />

      {/* Saturated Volumetric Neon Ambient Glow Backdrops (GPU Accelerated) */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-600/30 rounded-full blur-[160px] pointer-events-none transform-gpu" />
      <div className="absolute top-1/2 right-12 w-[600px] h-[600px] bg-fuchsia-600/25 rounded-full blur-[170px] pointer-events-none transform-gpu" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-grow flex flex-col justify-center">
        
        {/* Two-Column Grid: LEFT (45%: col-span-5) vs RIGHT (55%: col-span-7) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[580px]">
          
          {/* LEFT COLUMN (~45% width: lg:col-span-5) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 flex flex-col items-start text-left z-20"
          >
            
            {/* Small Greeting Pill with HUD Pulsing Reticle */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-purple-950/90 text-purple-300 border border-purple-500/70 shadow-purple-glow-sm mb-4">
              <span className="w-2 h-2 rounded-full bg-fuchsia-400 animate-ping" />
              <span>👋 Hi, I'm</span>
            </motion.div>

            {/* Massive Name Typography */}
            <motion.h1 variants={itemVariants} className="text-5xl sm:text-7xl lg:text-8xl font-black font-heading tracking-tight leading-[0.95] text-white">
              SUDHANSHU
            </motion.h1>
            <motion.h1 variants={itemVariants} className="text-5xl sm:text-7xl lg:text-8xl font-black font-heading tracking-tight leading-[0.95] mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-violet-400 to-fuchsia-400 drop-shadow-[0_0_40px_rgba(168,85,247,0.75)]">
              SINGH
            </motion.h1>

            {/* Sub-heading */}
            <motion.h2 variants={itemVariants} className="text-xs sm:text-sm font-extrabold font-heading text-purple-400 tracking-[0.25em] uppercase mb-4 drop-shadow-[0_0_15px_rgba(168,85,247,0.6)] flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
              <span>FULL STACK DEVELOPER</span>
            </motion.h2>

            {/* Concise Description */}
            <motion.p variants={itemVariants} className="text-sm sm:text-base text-gray-200 max-w-md leading-relaxed mb-6">
              Computer Science Engineering student passionate about building practical software solutions and solving technical problems through clean, scalable technology.
            </motion.p>

            {/* SOCIAL ICON ROW */}
            <motion.div variants={itemVariants} className="mb-8 w-full">
              <div className="flex items-center gap-4 sm:gap-6">
                {socialMediaRow.map((item) => {
                  const IconComp = item.icon;
                  return (
                    <motion.a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.12, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="group flex flex-col items-center gap-1.5 focus:outline-none cursor-pointer"
                    >
                      <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#06060D]/95 border border-purple-500/60 flex items-center justify-center shadow-purple-glow-sm group-hover:border-fuchsia-400 group-hover:bg-purple-950/90 group-hover:shadow-purple-glow-lg transition-all duration-300">
                        <IconComp className="w-5 h-5 text-purple-400 group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-[11px] font-bold text-gray-300 group-hover:text-purple-300 transition-colors">
                        {item.name}
                      </span>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Side-by-Side CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => handleScrollTo('projects')}
                className="relative overflow-hidden inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-2xl text-sm sm:text-base font-bold text-white bg-gradient-to-r from-purple-700 via-violet-600 to-fuchsia-700 hover:from-purple-600 hover:to-fuchsia-600 shadow-purple-glow hover:shadow-purple-glow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 cursor-pointer min-w-[170px] group"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="relative z-10">View My Work</span>
                <ArrowRight className="w-4.5 h-4.5 relative z-10" />
              </button>

              <button
                type="button"
                onClick={() => handleScrollTo('contact')}
                className="relative overflow-hidden inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-2xl text-sm sm:text-base font-bold text-gray-100 bg-[#06060D]/95 border border-purple-500/70 hover:bg-purple-950/90 hover:border-fuchsia-400 hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 cursor-pointer min-w-[170px] group"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-purple-400/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <Mail className="w-4.5 h-4.5 text-purple-400 relative z-10" />
                <span className="relative z-10">Contact Me</span>
              </button>
            </motion.div>

          </motion.div>

          {/* RIGHT COLUMN (~55% width: lg:col-span-7) Multi-layer 3D Developer Hero */}
          <div className="lg:col-span-7 relative flex items-center justify-center mt-6 lg:mt-0">
            <Developer3DScene />
          </div>

        </div>

        {/* BOTTOM GLASS INFORMATION BAR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 sm:mt-16"
        >
          <div className="w-full rounded-2xl bg-[#06060D]/95 backdrop-blur-2xl border border-purple-500/60 p-4 sm:px-8 sm:py-3.5 shadow-purple-glow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-gray-200 font-mono">
              
              {/* Quote Ticker */}
              <div className="flex items-center gap-2">
                <span className="text-purple-400 font-bold text-base">“</span>
                <span className="text-gray-100 font-medium">Code. Build. Learn. Repeat.</span>
                <span className="text-purple-400 font-bold text-base">”</span>
              </div>

              <div className="hidden sm:block w-px h-4 bg-purple-800/60" />

              {/* Location */}
              <div className="flex items-center gap-2 text-gray-200">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span>India / Bihar</span>
              </div>

              <div className="hidden sm:block w-px h-4 bg-purple-800/60" />

              {/* Email Link */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-gray-200 hover:text-purple-300 transition-colors"
              >
                <Mail className="w-4 h-4 text-purple-400" />
                <span>{personalInfo.email}</span>
              </a>

              <div className="hidden sm:block w-px h-4 bg-purple-800/60" />

              {/* GitHub Link */}
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-200 hover:text-purple-300 transition-colors"
              >
                <Github className="w-4 h-4 text-purple-400" />
                <span>github.com/mesudhanshusingh</span>
              </a>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
