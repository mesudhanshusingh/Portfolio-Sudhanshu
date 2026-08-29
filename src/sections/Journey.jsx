import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import GlassCard from '../components/GlassCard';
import { experienceList } from '../data/portfolioData';
import { Calendar, Building2, CheckCircle2 } from 'lucide-react';

const Journey = () => {
  return (
    <section id="journey" className="min-h-screen flex flex-col justify-center py-16 sm:py-20 relative bg-[#020204]">
      {/* Saturated Volumetric Neon Ambient Glow Backdrop */}
      <div className="absolute top-1/2 left-1/3 w-[650px] h-[650px] bg-purple-950/25 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <SectionHeader
          badge="Professional Growth"
          title="My Journey"
          subtitle="A timeline of practical internship experiences in Artificial Intelligence, Web Development, JavaScript, and Python programming."
        />

        {/* Timeline Container with Glowing Neon Laser Line */}
        <div className="relative mt-8 pl-6 sm:pl-8 border-l-2 border-purple-500/60 space-y-8 shadow-purple-glow-sm">
          {experienceList.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
            >
              
              {/* Timeline Glowing Neon Laser Node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-[#06060D] border-2 border-purple-400 shadow-purple-glow flex items-center justify-center group-hover:scale-125 group-hover:bg-purple-600 transition-all duration-300">
                <div className="w-2 h-2 rounded-full bg-fuchsia-300 animate-ping" />
              </div>

              {/* Experience Glass Card */}
              <GlassCard className="p-6 sm:p-7">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 pb-3 border-b border-purple-900/30">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold font-heading text-white group-hover:text-purple-300 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-purple-400 font-semibold mt-1">
                      <Building2 className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-purple-950/90 text-purple-300 border border-purple-500/60 w-fit shadow-purple-glow-sm">
                    <Calendar className="w-3.5 h-3.5 text-purple-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium bg-[#06060D] text-gray-200 border border-purple-900/50 hover:border-purple-500/60 transition-colors"
                    >
                      <CheckCircle2 className="w-3 h-3 text-purple-400" />
                      {skill}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Journey;
