import React, { useEffect } from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, ExternalLink, Award, BookOpen, Briefcase, Code } from 'lucide-react';
import {
  PERSONAL_INFO,
  EDUCATION_LIST,
  PROJECTS_LIST,
  INTERNSHIP_DATA,
  SKILL_CATEGORIES,
  CERTIFICATIONS_LIST,
  ACHIEVEMENTS_LIST
} from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#060e20]/85 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-lg bg-[#0f172a] border border-[#2d3449] shadow-2xl p-6 sm:p-10 text-[#dae2fd]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Controls */}
        <div className="flex items-center justify-between pb-6 border-b border-[#222a3d] mb-6">
          <div className="flex items-center space-x-2 text-xs font-mono text-[#89ceff]">
            <span>ENGINEERING DOSSIER & CURRICULUM VITAE</span>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-md bg-[#6366f1] hover:bg-[#4f46e5] text-white text-xs font-mono transition-all cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-md bg-[#171f33] border border-[#2d3449] text-[#94a3b8] hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Resume Content Container */}
        <div className="space-y-6 text-sm">
          {/* Header */}
          <div className="border-b border-[#222a3d] pb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <div className="text-sm font-semibold text-[#c0c1ff] mt-0.5">
              {PERSONAL_INFO.role} • {PERSONAL_INFO.degree}
            </div>
            <div className="flex flex-wrap gap-4 text-xs font-mono text-[#94a3b8] mt-3">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#89ceff]" />
                {PERSONAL_INFO.email}
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#4edea3]" />
                {PERSONAL_INFO.phone}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#c0c1ff]" />
                {PERSONAL_INFO.location}
              </span>
              <span>LinkedIn: {PERSONAL_INFO.linkedin}</span>
              <span>GitHub: {PERSONAL_INFO.github}</span>
            </div>
          </div>

          {/* Objective / Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#89ceff] font-bold mb-2">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#89ceff] font-bold mb-3">
              EDUCATION
            </h2>
            <div className="space-y-3">
              {EDUCATION_LIST.map((edu) => (
                <div
                  key={edu.id}
                  className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 p-3 rounded-md bg-[#131b2e] border border-[#222a3d]"
                >
                  <div>
                    <div className="font-semibold text-white text-xs sm:text-sm">
                      {edu.degree}
                    </div>
                    <div className="text-xs text-[#c0c1ff] font-mono">
                      {edu.institution}
                    </div>
                    <div className="text-xs text-[#94a3b8] mt-1">{edu.description}</div>
                  </div>
                  <div className="sm:text-right shrink-0 mt-1 sm:mt-0 font-mono">
                    <span className="text-[#4edea3] font-bold text-xs sm:text-sm">
                      {edu.metricLabel}: {edu.metricValue}
                    </span>
                    <div className="text-[11px] text-[#908fa0]">{edu.period}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#89ceff] font-bold mb-3">
              KEY TECHNICAL PROJECTS
            </h2>
            <div className="space-y-3">
              {PROJECTS_LIST.map((proj) => (
                <div
                  key={proj.id}
                  className="p-3.5 rounded-md bg-[#131b2e] border border-[#222a3d]"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div className="font-semibold text-white text-xs sm:text-sm">
                      {proj.title}
                    </div>
                    <span className="text-[11px] font-mono text-[#4edea3]">
                      {proj.date}
                    </span>
                  </div>
                  <p className="text-xs text-[#94a3b8] mt-1.5 leading-relaxed">
                    {proj.overview}
                  </p>
                  <ul className="mt-2 space-y-1">
                    {proj.modules.map((m, idx) => (
                      <li key={idx} className="text-xs text-[#dae2fd] font-mono">
                        • {m}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#89ceff] font-bold mb-3">
              INDUSTRIAL EXPERIENCE
            </h2>
            <div className="p-3.5 rounded-md bg-[#131b2e] border border-[#222a3d]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div className="font-semibold text-white text-xs sm:text-sm">
                  {INTERNSHIP_DATA.role} — {INTERNSHIP_DATA.company}
                </div>
                <span className="text-[11px] font-mono text-[#89ceff]">
                  {INTERNSHIP_DATA.period}
                </span>
              </div>
              <ul className="mt-2 space-y-1">
                {INTERNSHIP_DATA.outcomes.map((o, idx) => (
                  <li key={idx} className="text-xs text-[#94a3b8]">
                    • {o}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#89ceff] font-bold mb-3">
              SKILLS & TECHNICAL MATRIX
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
              {SKILL_CATEGORIES.map((cat, idx) => (
                <div key={idx} className="p-2 rounded-sm bg-[#131b2e] border border-[#222a3d]">
                  <span className="text-[#89ceff] font-semibold">{cat.title}: </span>
                  <span className="text-[#dae2fd]">{cat.skills.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Achievements */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-[#89ceff] font-bold mb-2">
                CERTIFICATIONS
              </h2>
              <div className="space-y-2">
                {CERTIFICATIONS_LIST.map((c) => (
                  <div key={c.id} className="p-2.5 rounded-sm bg-[#131b2e] border border-[#222a3d] text-xs">
                    <div className="text-white font-medium">{c.title}</div>
                    <div className="text-[11px] font-mono text-[#4edea3]">
                      {c.issuer} • {c.issueDate}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-[#89ceff] font-bold mb-2">
                HONORS & AWARDS
              </h2>
              <div className="space-y-2">
                {ACHIEVEMENTS_LIST.map((a) => (
                  <div key={a.id} className="p-2.5 rounded-sm bg-[#131b2e] border border-[#222a3d] text-xs">
                    <div className="text-white font-medium">{a.title}</div>
                    <div className="text-[11px] font-mono text-[#4edea3]">
                      {a.award} • {a.organization}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
