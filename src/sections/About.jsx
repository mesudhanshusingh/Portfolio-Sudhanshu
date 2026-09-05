import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/ui/SectionHeader';
import GlassCard from '../components/ui/GlassCard';
import { educationList } from '../data/portfolioData';
import { GraduationCap, Calendar, Award, BookOpen, UserCheck, Sparkles, Terminal, Code2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center py-16 sm:py-20 relative bg-[#030305]">
      {/* Background ambient purple glow */}
      <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-purple-600/15 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-fuchsia-600/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <SectionHeader
          badge="Engineering Mindset & Background"
          title="About Me"
        />

        {/* Direct Un-Boxed Bio Presentation with Purple Glow Effects */}
        <div className="max-w-4xl mx-auto mb-16 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="p-2.5 rounded-2xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 text-white shadow-purple-glow cursor-pointer transform-gpu"
            >
              <UserCheck className="w-6 h-6" />
            </motion.div>
            <div>
              <span className="text-xs font-bold font-mono uppercase tracking-widest text-purple-400">
                Software Developer Bio
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-400 drop-shadow-[0_0_25px_rgba(168,85,247,0.5)]">Sudhanshu Singh</span>
              </h3>
            </div>
          </div>

          {/* Paragraphs with vibrant text highlighting */}
          <div className="space-y-4 text-base sm:text-lg leading-relaxed text-gray-200 font-sans">
            <p>
              I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-400 font-extrabold">Sudhanshu Singh</span>, a Computer Science & Engineering student and aspiring <span className="inline-block px-3 py-1 rounded-xl bg-purple-950/80 text-purple-300 font-bold border border-purple-500/50 shadow-purple-glow-sm hover:scale-105 transition-transform">Java & Spring Boot Developer</span>. I enjoy building practical applications and solving real-world problems through technology.
            </p>
            <p>
              My primary focus is <span className="text-purple-300 font-extrabold underline decoration-purple-500/70 decoration-2 underline-offset-4">Java, Spring Boot, REST APIs, SQL, and full-stack development</span>. I learn by building hands-on projects, exploring new technologies, and continuously improving my problem-solving and development skills.
            </p>
            <p>
              I’m looking forward to growing as a developer and contributing to software that is <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-fuchsia-300 to-indigo-400 font-extrabold drop-shadow-[0_0_15px_rgba(168,85,247,0.6)]">useful, reliable, and impactful</span>.
            </p>
          </div>

          {/* Quick Highlight Dynamic Floating Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-purple-900/40 text-center">
            <motion.div
              whileHover={{ y: -4, scale: 1.04 }}
              className="p-3.5 rounded-2xl bg-[#08080d]/90 border border-purple-500/30 hover:border-purple-500/80 hover:shadow-purple-glow-sm transition-all duration-300 cursor-pointer transform-gpu"
            >
              <span className="text-[11px] font-mono text-purple-300 uppercase tracking-wider block mb-1">Primary Language</span>
              <span className="text-sm font-extrabold text-white flex items-center justify-center gap-1.5">
                <Code2 className="w-4 h-4 text-purple-400" /> Java
              </span>
            </motion.div>

            <motion.div
              whileHover={{ y: -4, scale: 1.04 }}
              className="p-3.5 rounded-2xl bg-[#08080d]/90 border border-purple-500/30 hover:border-purple-500/80 hover:shadow-purple-glow-sm transition-all duration-300 cursor-pointer transform-gpu"
            >
              <span className="text-[11px] font-mono text-purple-300 uppercase tracking-wider block mb-1">Backend Framework</span>
              <span className="text-sm font-extrabold text-white flex items-center justify-center gap-1.5">
                <Terminal className="w-4 h-4 text-purple-400" /> Spring Boot
              </span>
            </motion.div>

            <motion.div
              whileHover={{ y: -4, scale: 1.04 }}
              className="p-3.5 rounded-2xl bg-[#08080d]/90 border border-purple-500/30 hover:border-purple-500/80 hover:shadow-purple-glow-sm transition-all duration-300 cursor-pointer transform-gpu"
            >
              <span className="text-[11px] font-mono text-purple-300 uppercase tracking-wider block mb-1">Database Engine</span>
              <span className="text-sm font-extrabold text-white flex items-center justify-center gap-1.5">
                <Sparkles className="w-4 h-4 text-purple-400" /> MySQL / SQL
              </span>
            </motion.div>

            <motion.div
              whileHover={{ y: -4, scale: 1.04 }}
              className="p-3.5 rounded-2xl bg-[#08080d]/90 border border-purple-500/30 hover:border-purple-500/80 hover:shadow-purple-glow-sm transition-all duration-300 cursor-pointer transform-gpu"
            >
              <span className="text-[11px] font-mono text-purple-300 uppercase tracking-wider block mb-1">Current Degree</span>
              <span className="text-sm font-extrabold text-white flex items-center justify-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-purple-400" /> B.Tech CSE
              </span>
            </motion.div>
          </div>
        </div>

        {/* Academic Qualifications Timeline / Grid */}
        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <GraduationCap className="w-6 h-6 text-purple-400" />
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
              Academic Qualifications
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {educationList.map((edu, idx) => {
              return (
                <GlassCard key={idx} className="p-6 flex flex-col justify-between hover:border-purple-500/70 transition-all duration-300 transform-gpu">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full text-xs font-bold border bg-purple-950/90 text-purple-300 border-purple-500/60 shadow-purple-glow-sm">
                        {edu.badge}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-gray-300 font-mono">
                        <Calendar className="w-3.5 h-3.5 text-purple-400" />
                        <span>{edu.period}</span>
                      </div>
                    </div>

                    <h4 className="text-lg sm:text-xl font-bold font-heading text-white mb-2 leading-snug">
                      {edu.degree}
                    </h4>

                    <p className="text-sm text-gray-300 mb-4 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-purple-400 shrink-0" />
                      <span>{edu.institution}</span>
                    </p>
                  </div>

                  <div className="pt-4 border-t border-purple-900/30 flex items-center justify-between text-xs font-mono">
                    <span className="text-gray-400">Academic Performance</span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-purple-950/60 text-purple-200 font-bold border border-purple-500/50 shadow-purple-glow-sm">
                      <Award className="w-3.5 h-3.5 text-purple-400" />
                      {edu.score}
                    </span>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
