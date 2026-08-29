import React from 'react';
import SectionHeader from '../components/SectionHeader';
import GlassCard from '../components/GlassCard';
import { certificationsList } from '../data/portfolioData';
import { Award, Calendar, ShieldCheck } from 'lucide-react';

const Certifications = () => {
  return (
    <section id="certifications" className="min-h-screen flex flex-col justify-center py-16 sm:py-20 relative bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <SectionHeader
          badge="Credentials & Validation"
          title="Certifications"
          subtitle="Industry-recognized certifications and coursework verified by Microsoft, Deloitte Australia, IIT Kharagpur, and IIT Bombay."
        />

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {certificationsList.map((cert, idx) => (
            <GlassCard key={idx} className="p-6 flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-violet-950/80 border border-violet-700/50 text-violet-300 shrink-0 shadow-purple-glow-sm">
                <ShieldCheck className="w-6 h-6" />
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-violet-900/40 text-violet-300 border border-violet-700/40">
                    {cert.badge}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gray-400 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-violet-400" />
                    {cert.year}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold font-heading text-white mb-1">
                  {cert.title}
                </h3>

                <p className="text-xs sm:text-sm font-semibold text-violet-400 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-violet-400" />
                  {cert.issuer}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
