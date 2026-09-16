import React from 'react';
import { motion } from 'motion/react';
import {
  Languages,
  MapPin,
  Terminal,
  Sparkles,
  CheckCircle2,
  Code2,
  Layout,
  Lightbulb,
  Users
} from 'lucide-react';
import { ABOUT_DETAILS } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 border-b border-[#1a233a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with slide-up fade */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[#1a233a] gap-4"
        >
          <div>
            <div className="text-xs font-mono text-[#89ceff] tracking-wider uppercase">
              01 // IDENTITY & PHILOSOPHY
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-1">
              About Shweta M
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#94a3b8]">
            <div className="flex items-center space-x-1.5 bg-[#131b2e] px-3 py-1 rounded-sm border border-[#222a3d] hover:border-[#4edea3]/40 transition-colors">
              <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-ping" style={{ animationDuration: '3s' }}></span>
              <span>Tamil & English</span>
            </div>
            <div className="flex items-center space-x-1.5 bg-[#131b2e] px-3 py-1 rounded-sm border border-[#222a3d] hover:border-[#89ceff]/40 transition-colors">
              <MapPin className="w-3.5 h-3.5 text-[#89ceff]" />
              <span>Madurai, Tamil Nadu</span>
            </div>
          </div>
        </motion.div>

        {/* Narrative & Methodological Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10">
          {/* Left: Bio narrative */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <div className="space-y-5 text-sm sm:text-base text-[#94a3b8] leading-relaxed">
              <p>
                I am a dedicated Computer Science & Engineering undergraduate at{' '}
                <strong className="text-white font-semibold">
                  Kamaraj College of Engineering & Technology
                </strong>
                , consistently combining disciplined analytical study with practical
                implementation. My coursework and self-directed initiatives are anchored in
                producing clean, functional code and architecting intuitive, user-oriented
                applications.
              </p>
              <p>
                Whether engineering voice-driven assistive tools for autism therapy or
                optimizing e-commerce interfaces during my professional internship, my focus
                remains steady: understanding real-world constraints, engineering reliable
                solutions, and maintaining code clarity. Based out of Madurai, Tamil Nadu, I
                communicate fluently in both Tamil and English, bringing collaborative rigor and an
                eager learning mindset to every technical challenge.
              </p>
            </div>

            {/* Badges row */}
            <div className="flex flex-wrap gap-3 mt-6 pt-4 border-t border-[#1a233a]">
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-sm bg-[#131b2e] border border-[#222a3d] hover:border-[#89ceff]/40 hover:-translate-y-0.5 transition-all duration-200 text-xs font-mono text-[#dae2fd]">
                <Languages className="w-3.5 h-3.5 text-[#89ceff]" />
                <span>Bilingual: Fluent in <strong className="text-white">Tamil & English</strong></span>
              </div>
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-sm bg-[#131b2e] border border-[#222a3d] hover:border-[#4edea3]/40 hover:-translate-y-0.5 transition-all duration-200 text-xs font-mono text-[#dae2fd]">
                <MapPin className="w-3.5 h-3.5 text-[#4edea3]" />
                <span>Hometown: <strong className="text-white">Madurai, Tamil Nadu</strong></span>
              </div>
            </div>
          </motion.div>

          {/* Right: Methodological Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <div className="rounded-lg bg-[#131b2e] border border-[#222a3d] p-6 shadow-sm hover:border-[#334155] hover:shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-all duration-300">
              <div className="text-[11px] font-mono tracking-wider text-[#908fa0] uppercase pb-4 border-b border-[#222a3d]">
                METHODOLOGICAL PROFILE
              </div>

              <div className="space-y-6 pt-5">
                {/* Item 1 */}
                <div className="flex items-start space-x-3.5 group">
                  <div className="w-8 h-8 rounded-md bg-[#171f33] border border-[#2d3449] group-hover:border-[#c0c1ff]/50 flex items-center justify-center text-[#c0c1ff] shrink-0 mt-0.5 transition-colors">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white group-hover:text-[#dae2fd] transition-colors">Foundational Engineering</h3>
                    <p className="text-xs text-[#94a3b8] mt-1 leading-relaxed">
                      Structured implementation across C, Java, Python, and Object-Oriented Principles.
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-start space-x-3.5 group">
                  <div className="w-8 h-8 rounded-md bg-[#171f33] border border-[#2d3449] group-hover:border-[#4edea3]/50 flex items-center justify-center text-[#4edea3] shrink-0 mt-0.5 transition-colors">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white group-hover:text-[#dae2fd] transition-colors">Applied Assistive AI</h3>
                    <p className="text-xs text-[#94a3b8] mt-1 leading-relaxed">
                      Real-world AI interaction models tailored for regional accessibility and autism therapy.
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex items-start space-x-3.5 group">
                  <div className="w-8 h-8 rounded-md bg-[#171f33] border border-[#2d3449] group-hover:border-[#89ceff]/50 flex items-center justify-center text-[#89ceff] shrink-0 mt-0.5 transition-colors">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white group-hover:text-[#dae2fd] transition-colors">Academic Consistency</h3>
                    <p className="text-xs text-[#94a3b8] mt-1 leading-relaxed">
                      Maintained an 8.36 CGPA across 4 semesters of rigorous university evaluations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* What I Focus On Section */}
        <div className="mt-14">
          <motion.h3
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-lg font-bold text-white tracking-tight mb-5"
          >
            What I Focus On
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ABOUT_DETAILS.focusCards.map((card, idx) => {
              const icons = [
                <Code2 className="w-4 h-4 text-[#89ceff]" key="code" />,
                <Layout className="w-4 h-4 text-[#4edea3]" key="layout" />,
                <Lightbulb className="w-4 h-4 text-[#c0c1ff]" key="bulb" />,
                <Users className="w-4 h-4 text-[#89ceff]" key="users" />
              ];

              return (
                <motion.div
                  key={idx}
                  id={`focus-card-${idx + 1}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: 'easeOut' }}
                  className="rounded-lg bg-[#131b2e] border border-[#222a3d] p-5 hover:border-[#6366f1]/40 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.3)] transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-8 h-8 rounded-md bg-[#171f33] border border-[#2d3449] group-hover:border-[#6366f1]/50 group-hover:scale-105 flex items-center justify-center mb-4 transition-all duration-300">
                      {icons[idx]}
                    </div>
                    <h4 className="text-sm font-semibold text-white group-hover:text-[#dae2fd] transition-colors">
                      {card.title}
                    </h4>
                    <p className="text-xs text-[#94a3b8] mt-2 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
