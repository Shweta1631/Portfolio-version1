import React from 'react';
import { ArrowUp, Mail, Github, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#060e20] border-t border-[#1a233a] text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left identity */}
        <div>
          <div className="text-sm font-bold text-white tracking-tight">
            {PERSONAL_INFO.name}
          </div>
          <div className="text-[#94a3b8] mt-1 text-[11px]">
            © 2024 {PERSONAL_INFO.name} • Department of Computer Science and Engineering
          </div>
          <div className="text-[#908fa0] text-[11px]">
            {PERSONAL_INFO.college}
          </div>
        </div>

        {/* Right actions & links */}
        <div className="flex flex-wrap items-center gap-5 text-[#94a3b8]">
          <button
            onClick={() => onNavigate('contact')}
            className="hover:text-white flex items-center space-x-1.5 transition-colors cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5 text-[#89ceff]" />
            <span>Contact</span>
          </button>

          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white flex items-center space-x-1.5 transition-colors"
          >
            <Github className="w-3.5 h-3.5 text-[#dae2fd]" />
            <span>GitHub</span>
          </a>

          <button
            onClick={() => onNavigate('academics')}
            className="hover:text-white flex items-center space-x-1.5 transition-colors cursor-pointer"
          >
            <GraduationCap className="w-3.5 h-3.5 text-[#4edea3]" />
            <span>Academics</span>
          </button>

          <button
            onClick={scrollToTop}
            id="scroll-to-top-btn"
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-sm bg-[#131b2e] border border-[#222a3d] text-white hover:border-[#6366f1] transition-all cursor-pointer"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#c0c1ff]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
