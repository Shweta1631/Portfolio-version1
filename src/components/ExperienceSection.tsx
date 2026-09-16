import React from 'react';
import { motion } from 'motion/react';
import { Calendar, CheckCircle2, Briefcase } from 'lucide-react';
import { INTERNSHIP_DATA } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="internships" className="py-16 border-b border-[#1a233a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 border-b border-[#1a233a] gap-3"
        >
          <div>
            <div className="text-xs font-mono text-[#89ceff] tracking-wider uppercase">
              06 // INDUSTRIAL EXPERIENCE
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-1">
              Internship Experience
            </h2>
          </div>
          <div className="text-xs font-mono text-[#94a3b8]">
            Workplace Verification • {INTERNSHIP_DATA.company}
          </div>
        </motion.div>

        {/* Experience Card */}
        <div className="mt-10">
          <motion.div
            id="internship-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="rounded-lg bg-[#131b2e] border border-[#222a3d] p-6 sm:p-8 hover:border-[#6366f1]/40 hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(0,0,0,0.38)] transition-all duration-300 group"
          >
            {/* Top row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-[#1a233a]">
              <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded-sm bg-[#171f33] border border-[#2d3449] group-hover:border-[#4edea3]/40 text-xs font-mono text-[#4edea3] w-fit transition-colors">
                <Briefcase className="w-3.5 h-3.5" />
                <span>{INTERNSHIP_DATA.status}</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-mono text-[#94a3b8]">
                <Calendar className="w-3.5 h-3.5 text-[#89ceff]" />
                <span>{INTERNSHIP_DATA.period}</span>
              </div>
            </div>

            {/* Position details */}
            <div className="mt-5">
              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#dae2fd] transition-colors">
                {INTERNSHIP_DATA.role}
              </h3>
              <div className="text-sm font-mono text-[#c0c1ff] mt-1">
                {INTERNSHIP_DATA.company}
              </div>
            </div>

            {/* Responsibilities */}
            <div className="mt-7 pt-6 border-t border-[#1a233a]">
              <div className="text-[10px] font-mono tracking-wider text-[#908fa0] uppercase mb-4">
                RESPONSIBILITIES & PRACTICAL OUTCOMES (VERBATIM)
              </div>
              <ul className="space-y-3.5">
                {INTERNSHIP_DATA.outcomes.map((outcome, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-[#dae2fd]">
                    <CheckCircle2 className="w-4 h-4 text-[#4edea3] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
