import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Award } from 'lucide-react';
import { ACHIEVEMENTS_LIST } from '../data/portfolioData';

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-16 border-b border-[#1a233a] overflow-hidden">
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
              04 // COMPETITIVE MERIT
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-1">
              Honors & Achievements
            </h2>
          </div>
          <div className="text-xs font-mono text-[#94a3b8]">
            Collegiate & State-Level Recognitions
          </div>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {ACHIEVEMENTS_LIST.map((item, index) => {
            const isFirst = index === 0;
            return (
              <motion.div
                key={item.id}
                id={`achievement-card-${item.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.12, ease: 'easeOut' }}
                className="rounded-lg bg-[#131b2e] border border-[#222a3d] p-6 sm:p-7 hover:border-[#6366f1]/40 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.35)] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-md bg-[#171f33] border border-[#2d3449] group-hover:border-[#6366f1]/50 group-hover:scale-105 flex items-center justify-center shrink-0 transition-all duration-300">
                      {isFirst ? (
                        <Trophy className="w-5 h-5 text-[#4edea3]" />
                      ) : (
                        <Award className="w-5 h-5 text-[#89ceff]" />
                      )}
                    </div>

                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded-sm bg-[#171f33] border border-[#2d3449] group-hover:border-[#4edea3]/40 text-[11px] font-mono text-[#4edea3] mb-2 transition-colors">
                        {item.award}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#dae2fd] transition-colors">
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
