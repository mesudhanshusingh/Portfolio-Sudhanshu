import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/ui/SectionHeader';
import GlassCard from '../components/ui/GlassCard';
import { certificationsList } from '../data/portfolioData';
import { Award, Calendar, ShieldCheck } from 'lucide-react';

const Certifications = () => {
  return (
    <section id="certifications" className="min-h-screen flex flex-col justify-center py-16 sm:py-20 relative bg-[#030305]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-950/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <SectionHeader
          badge="Credentials & Validation"
          title="Certifications"
          subtitle="Industry-recognized certifications and coursework verified by Oracle, Microsoft, Deloitte Australia, and NPTEL / IIT Kharagpur."
        />

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {certificationsList.map((cert, idx) => (
            <GlassCard key={idx} className="p-6 flex flex-col justify-between group hover:border-violet-500/80 hover:shadow-purple-glow transition-all duration-300 transform-gpu">
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  {/* Company Logo Badge */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-white/95 p-2 flex items-center justify-center shadow-purple-glow-sm border border-white/20 group-hover:scale-105 transition-transform shrink-0">
                      <img src={cert.logo} alt={cert.issuer} className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <span className="text-xs font-extrabold uppercase tracking-wider text-violet-300 block">
                        {cert.issuer}
                      </span>
                      <span className="text-[10px] font-mono text-gray-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-violet-400" />
                        {cert.year}
                      </span>
                    </div>
                  </div>

                  {/* Badge */}
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-violet-950/80 text-violet-300 border border-violet-700/60 shadow-purple-glow-sm text-right shrink-0">
                    {cert.badge}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-extrabold font-heading text-white group-hover:text-violet-300 transition-colors leading-snug mb-2">
                  {cert.title}
                </h3>
              </div>

              <div className="pt-4 mt-4 border-t border-violet-900/30 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-950/40 px-3 py-1 rounded-lg border border-emerald-800/40">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Verified Credential
                </span>
                <span className="text-xs font-mono text-gray-300 group-hover:text-violet-300 transition-colors flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-violet-400" />
                  {cert.issuer}
                </span>
              </div>
            </GlassCard>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
