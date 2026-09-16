import React from 'react';
import { Trophy, Award } from 'lucide-react';
import { ACHIEVEMENTS_LIST } from '../data/portfolioData';

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-16 border-b border-[#1a233a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 border-b border-[#1a233a] gap-3">
          <div>
            <div className="text-xs font-mono text-[#89ceff] tracking-wider uppercase">
              04 // COMPETITIVE MERIT
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-1">
              Honors & Achievements
            </h2>
          </div>
          <div className="text-xs font-mono text-[#94a3b8]">
            Collegiate & State-Level Recognitions
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {ACHIEVEMENTS_LIST.map((item, index) => {
            const isFirst = index === 0;
            return (
              <div
                key={item.id}
                id={`achievement-card-${item.id}`}
                className="rounded-lg bg-[#131b2e] border border-[#222a3d] p-6 sm:p-7 hover:border-[#334155] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-md bg-[#171f33] border border-[#2d3449] flex items-center justify-center shrink-0">
                      {isFirst ? (
                        <Trophy className="w-5 h-5 text-[#4edea3]" />
                      ) : (
                        <Award className="w-5 h-5 text-[#89ceff]" />
                      )}
                    </div>

                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded-sm bg-[#171f33] border border-[#2d3449] text-[11px] font-mono text-[#4edea3] mb-2">
                        {item.award}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-white">
                        {item.title}
                      </h3>
                      <div className="text-xs sm:text-sm font-mono text-[#c0c1ff] mt-1">
                        {item.organization}
                      </div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#94a3b8] mt-4 leading-relaxed pl-14">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
