import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import GlassCard from '../components/GlassCard';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Twitter, Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 5000);
    }
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center py-16 sm:py-20 relative bg-[#020204]">
      {/* Glow background accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-purple-950/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <SectionHeader
          badge="Get In Touch"
          title="Let's Build Something Together"
          subtitle="Have an opportunity, idea, or project in mind? I'd love to connect and build something meaningful."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
          
          {/* Left Column: Direct Contact & Social Links */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <GlassCard className="p-6 sm:p-7 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-white mb-5">
                  Contact Information
                </h3>

                <div className="space-y-4">
                  {/* Email */}
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-start gap-4 p-3.5 rounded-xl bg-dark-950/70 border border-violet-900/30 hover:border-violet-500/60 transition-all group"
                  >
                    <div className="p-2.5 rounded-xl bg-violet-950 text-violet-300 border border-violet-700/50 group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-gray-400 font-mono block">Direct Email</span>
                      <span className="text-xs sm:text-sm font-semibold text-gray-100 group-hover:text-violet-300 transition-colors">
                        {personalInfo.email}
                      </span>
                    </div>
                  </a>

                  {/* Phone */}
                  <div className="flex items-start gap-4 p-3.5 rounded-xl bg-dark-950/70 border border-violet-900/30">
                    <div className="p-2.5 rounded-xl bg-violet-950 text-violet-300 border border-violet-700/50">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-gray-400 font-mono block">Phone (Public)</span>
                      <span className="text-xs sm:text-sm font-semibold text-gray-100">
                        {personalInfo.phone}
                      </span>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4 p-3.5 rounded-xl bg-dark-950/70 border border-violet-900/30">
                    <div className="p-2.5 rounded-xl bg-violet-950 text-violet-300 border border-violet-700/50">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-gray-400 font-mono block">Location</span>
                      <span className="text-xs sm:text-sm font-semibold text-gray-100">
                        {personalInfo.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Profiles Grid */}
              <div className="mt-6 pt-5 border-t border-violet-900/30">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-3">
                  Social & Developer Profiles
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={personalInfo.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-2.5 rounded-xl bg-dark-950 border border-violet-900/40 text-xs font-semibold text-gray-300 hover:text-white hover:border-violet-500 hover:shadow-purple-glow-sm transition-all"
                  >
                    <Github className="w-4 h-4 text-violet-400" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-2.5 rounded-xl bg-dark-950 border border-violet-900/40 text-xs font-semibold text-gray-300 hover:text-white hover:border-violet-500 hover:shadow-purple-glow-sm transition-all"
                  >
                    <Linkedin className="w-4 h-4 text-violet-400" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={personalInfo.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-2.5 rounded-xl bg-dark-950 border border-violet-900/40 text-xs font-semibold text-gray-300 hover:text-white hover:border-violet-500 hover:shadow-purple-glow-sm transition-all"
                  >
                    <Instagram className="w-4 h-4 text-violet-400" />
                    <span>Instagram</span>
                  </a>

                  <a
                    href={personalInfo.socials.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-2.5 rounded-xl bg-dark-950 border border-violet-900/40 text-xs font-semibold text-gray-300 hover:text-white hover:border-violet-500 hover:shadow-purple-glow-sm transition-all"
                  >
                    <Twitter className="w-4 h-4 text-violet-400" />
                    <span>X (Twitter)</span>
                  </a>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <GlassCard className="p-6 sm:p-7">
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mb-5">
                Fill out the form below or launch your email client directly.
              </p>

              {isSubmitted ? (
                <div className="p-6 rounded-2xl bg-violet-950/60 border border-violet-600/60 text-center animate-fadeIn">
                  <CheckCircle2 className="w-12 h-12 text-violet-400 mx-auto mb-3" />
                  <h4 className="text-lg font-bold text-white mb-1">Message Received!</h4>
                  <p className="text-xs sm:text-sm text-gray-300">
                    Thank you for reaching out. Sudhanshu will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-violet-900/40 text-white text-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all placeholder:text-gray-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-violet-900/40 text-white text-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all placeholder:text-gray-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Hi Sudhanshu, I'd like to discuss a software project..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-violet-900/40 text-white text-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all placeholder:text-gray-600 resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-violet-700 to-purple-600 hover:from-violet-600 hover:to-purple-500 shadow-purple-glow transition-all duration-300 active:scale-95 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </button>

                    <a
                      href={`mailto:${personalInfo.email}?subject=Contacting%20from%20Portfolio&body=Hi%20Sudhanshu,%0A%0A`}
                      className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-sm font-bold text-gray-200 bg-dark-950 border border-violet-800/60 hover:bg-violet-950 hover:border-violet-400 transition-all cursor-pointer"
                    >
                      <Mail className="w-4 h-4 text-violet-400" />
                      <span>Email Me</span>
                    </a>
                  </div>
                </form>
              )}
            </GlassCard>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
