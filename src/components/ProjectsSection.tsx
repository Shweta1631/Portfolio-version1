import React from 'react';
import { motion } from 'motion/react';
import { Calendar, CheckCircle, ArrowRight } from 'lucide-react';
import { PROJECTS_LIST } from '../data/portfolioData';
import { ProjectSpec } from '../types';

interface ProjectsSectionProps {
  onInspectSpec: (project: ProjectSpec) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onInspectSpec }) => {
  return (
    <section id="projects" className="py-16 border-b border-[#1a233a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[#1a233a] gap-3"
        >
          <div>
            <div className="text-xs font-mono text-[#89ceff] tracking-wider uppercase">
              03 // ENGINEERING CAPSTONES
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-1">
              Key Technical Projects
            </h2>
          </div>
          <div className="text-xs font-mono text-[#94a3b8] max-w-md md:text-right">
            Strictly factual implementations solving critical regional agriculture and speech therapy requirements.
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
          {PROJECTS_LIST.map((proj, index) => {
            return (
              <motion.div
                key={proj.id}
                id={`project-card-${proj.id}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: index * 0.12, ease: 'easeOut' }}
                className="rounded-lg bg-[#131b2e] border border-[#222a3d] p-6 sm:p-7 flex flex-col justify-between hover:border-[#6366f1]/40 hover:-translate-y-1.5 hover:shadow-[0_14px_35px_rgba(0,0,0,0.38)] transition-all duration-300 group"
              >
                <div>
                  {/* Card Header badges */}
                  <div className="flex items-center justify-between pb-4 border-b border-[#1a233a]">
                    <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-sm bg-[#171f33] border border-[#2d3449] text-xs font-mono text-[#4edea3] group-hover:border-[#4edea3]/40 transition-colors">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{proj.date}</span>
                    </div>
                    <span className="text-xs font-mono text-[#94a3b8] px-2 py-0.5 rounded-sm bg-[#171f33] border border-transparent group-hover:border-[#2d3449] transition-colors">
                      {proj.projectNumber}
                    </span>
                  </div>

                  {/* Project Title & Overview */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mt-4 leading-snug group-hover:text-[#dae2fd] transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#94a3b8] mt-3 leading-relaxed">
                    {proj.overview}
                  </p>

                  {/* Key Engineering Modules */}
                  <div className="mt-6 pt-5 border-t border-[#1a233a]">
                    <div className="text-[10px] font-mono tracking-wider text-[#908fa0] uppercase mb-3">
                      KEY ENGINEERING MODULES
                    </div>
                    <ul className="space-y-2.5">
                      {proj.modules.map((module, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-xs text-[#dae2fd]">
                          <CheckCircle className="w-3.5 h-3.5 text-[#4edea3] shrink-0 mt-0.5" />
                          <span className="leading-normal">{module}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {proj.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-sm bg-[#171f33] border border-[#222a3d] hover:border-[#89ceff]/50 hover:text-white transition-all text-[11px] font-mono text-[#89ceff]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="mt-8 pt-4 border-t border-[#1a233a] flex items-center justify-between">
                  <span className="text-xs font-mono text-[#908fa0]">
                    {proj.status}
                  </span>
                  <button
                    id={`inspect-spec-${proj.id}`}
                    onClick={() => onInspectSpec(proj)}
                    className="group/btn inline-flex items-center space-x-1.5 text-xs font-mono text-[#c0c1ff] hover:text-white transition-colors cursor-pointer px-2 py-1 rounded hover:bg-[#171f33]"
                  >
                    <span>Inspect Spec</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
