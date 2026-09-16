import React from 'react';
import { motion } from 'motion/react';
import {
  Code,
  Layout,
  Database,
  Wrench,
  Cloud,
  HeartHandshake
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-4 h-4 text-[#89ceff]" />;
      case 'Globe':
        return <Layout className="w-4 h-4 text-[#4edea3]" />;
      case 'Database':
        return <Database className="w-4 h-4 text-[#c0c1ff]" />;
      case 'Wrench':
        return <Wrench className="w-4 h-4 text-[#89ceff]" />;
      case 'Cloud':
        return <Cloud className="w-4 h-4 text-[#4edea3]" />;
      case 'HeartHandshake':
      default:
        return <HeartHandshake className="w-4 h-4 text-[#c0c1ff]" />;
    }
  };

  return (
    <section id="skills" className="py-16 border-b border-[#1a233a] overflow-hidden">
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
              05 // TECHNICAL MATRIX
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-1">
              Verified Skills & Competencies
            </h2>
          </div>
          <div className="text-xs font-mono text-[#94a3b8]">
            Categorized technical skills • No arbitrary percentage bars
          </div>
        </motion.div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={idx}
              id={`skills-category-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: 'easeOut' }}
              className="rounded-lg bg-[#131b2e] border border-[#222a3d] p-5 sm:p-6 hover:border-[#6366f1]/40 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.35)] transition-all duration-300 flex flex-col group"
            >
              {/* Card Header */}
              <div className="flex items-center space-x-2.5 pb-4 border-b border-[#1a233a]">
                <div className="w-7 h-7 rounded-md bg-[#171f33] border border-[#2d3449] group-hover:border-[#6366f1]/50 group-hover:scale-105 flex items-center justify-center shrink-0 transition-all duration-300">
                  {getIcon(cat.icon)}
                </div>
                <h3 className="text-sm font-semibold text-white font-mono tracking-tight group-hover:text-[#dae2fd] transition-colors">
                  {cat.title}
                </h3>
              </div>

              {/* Skill pills with smooth hover effect */}
              <div className="flex flex-wrap gap-2 pt-4">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 text-xs font-mono rounded-sm bg-[#171f33] border border-[#222a3d] text-[#dae2fd] hover:text-white hover:border-[#6366f1]/50 hover:bg-[#1a233a] hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
