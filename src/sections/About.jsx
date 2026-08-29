import React from 'react';
import SectionHeader from '../components/SectionHeader';
import GlassCard from '../components/GlassCard';
import { educationList, personalInfo } from '../data/portfolioData';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center py-16 sm:py-20 relative bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <SectionHeader
          badge="Background & Education"
          title="About Me"
          subtitle={personalInfo.aboutDetailed}
        />

        {/* Education Timeline / Grid */}
        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <GraduationCap className="w-6 h-6 text-violet-400" />
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
              Academic Qualifications
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {educationList.map((edu, idx) => (
              <GlassCard key={idx} className="p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-violet-950/80 text-violet-300 border border-violet-700/50">
                      {edu.badge}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-gray-400 font-mono">
                      <Calendar className="w-3.5 h-3.5 text-violet-400" />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  <h4 className="text-lg sm:text-xl font-bold font-heading text-white mb-2 leading-snug">
                    {edu.degree}
                  </h4>

                  <p className="text-sm text-gray-300 mb-4 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-violet-400 shrink-0" />
                    <span>{edu.institution}</span>
                  </p>
                </div>

                <div className="pt-4 border-t border-violet-900/30 flex items-center justify-between text-xs font-mono">
                  <span className="text-gray-400">Academic Performance</span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-violet-900/30 text-violet-300 font-bold border border-violet-700/40">
                    <Award className="w-3.5 h-3.5 text-violet-400" />
                    {edu.score}
                  </span>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
