import React from 'react';
import { GraduationCap, BookOpen, School } from 'lucide-react';
import { EDUCATION_LIST } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="academics" className="py-16 border-b border-[#1a233a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 border-b border-[#1a233a] gap-3">
          <div>
            <div className="text-xs font-mono text-[#89ceff] tracking-wider uppercase">
              02 // FORMAL EDUCATION
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-1">
              Academic Qualifications
            </h2>
          </div>
          <div className="text-xs font-mono text-[#94a3b8] tracking-tight">
            Institution Verified • Department of CSE
          </div>
        </div>

        {/* Education Stack */}
        <div className="space-y-4 mt-10">
          {EDUCATION_LIST.map((edu, index) => {
            const icons = [
              <GraduationCap className="w-5 h-5 text-[#89ceff]" key="be" />,
              <BookOpen className="w-5 h-5 text-[#c0c1ff]" key="hsc" />,
              <School className="w-5 h-5 text-[#4edea3]" key="sslc" />
            ];

            return (
              <div
                key={edu.id}
                id={`education-card-${edu.id}`}
                className="rounded-lg bg-[#131b2e] border border-[#222a3d] p-5 sm:p-6 hover:border-[#334155] transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                {/* Left details */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-md bg-[#171f33] border border-[#2d3449] flex items-center justify-center shrink-0 mt-0.5">
                    {icons[index]}
                  </div>
                  <div>
                    {/* Badges */}
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="px-2 py-0.5 text-[11px] font-mono rounded-sm bg-[#171f33] border border-[#2d3449] text-[#4edea3]">
                        {edu.badge}
                      </span>
                      <span className="text-xs font-mono text-[#94a3b8]">
                        {edu.period}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-white">
                      {edu.degree}
                    </h3>
                    <div className="text-xs sm:text-sm font-mono text-[#c0c1ff] mt-0.5">
                      {edu.institution}
                    </div>
                    <p className="text-xs text-[#94a3b8] mt-2 max-w-2xl leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>

                {/* Right score block */}
                <div className="md:border-l md:border-[#222a3d] md:pl-8 flex flex-row md:flex-col items-baseline md:items-end justify-between md:justify-center shrink-0">
                  <div className="text-[10px] font-mono tracking-wider text-[#908fa0] uppercase">
                    {edu.metricLabel}
                  </div>
                  <div className="text-2xl sm:text-3xl font-mono font-bold text-[#4edea3] my-0.5">
                    {edu.metricValue}
                  </div>
                  <div className="text-[11px] font-mono text-[#94a3b8]">
                    {edu.metricSubtext}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
