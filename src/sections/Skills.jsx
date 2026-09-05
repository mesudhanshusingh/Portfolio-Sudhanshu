import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/ui/SectionHeader';
import GlassCard from '../components/ui/GlassCard';
import { skillCategories } from '../data/portfolioData';
import { Code2, Server, Layout, Database, Cpu, Wrench, BarChart3, CheckCircle, Cloud } from 'lucide-react';

const categoryIconMap = {
  Code2,
  Server,
  Layout,
  Database,
  Cpu,
  Wrench,
  BarChart3,
  Cloud,
};

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center py-16 sm:py-20 relative bg-[#030305]">
      {/* Background ambient purple lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-950/25 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <SectionHeader
          badge="Technical Proficiency"
          title="Skills & Technologies"
          subtitle="Comprehensive overview of core programming languages, frameworks, development tools, and foundational computer science disciplines."
        />

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {skillCategories.map((cat, idx) => {
            const IconComp = categoryIconMap[cat.icon] || Code2;
            return (
              <GlassCard key={idx} className="p-6 flex flex-col justify-between hover:border-purple-500/70 transition-all duration-300">
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-5 pb-3 border-b border-purple-900/30">
                    <div className="p-2 rounded-xl bg-purple-950/80 border border-purple-500/50 text-purple-400 shadow-purple-glow-sm">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold font-heading uppercase tracking-wider text-gray-200">
                      {cat.category}
                    </h3>
                  </div>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <motion.div
                        key={skill}
                        whileHover={{ y: -3, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs font-medium text-gray-200 bg-[#08080d]/90 border border-purple-900/40 hover:border-purple-500/80 hover:text-white hover:bg-purple-950/40 hover:shadow-purple-glow-sm transition-all duration-200 cursor-pointer transform-gpu"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                        <span>{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;
