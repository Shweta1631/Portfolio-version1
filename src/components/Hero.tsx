import React from 'react';
import {
  FolderGit2,
  Mail,
  Download,
  CheckCircle2,
  Code2,
  GraduationCap,
  Briefcase,
  Award,
  Grid,
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO, DOSSIER_METRICS } from '../data/portfolioData';

interface HeroProps {
  onExploreProjects: () => void;
  onContactClick: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreProjects,
  onContactClick,
  onOpenResume,
}) => {
  return (
    <section id="home" className="pt-10 pb-16 lg:pt-14 lg:pb-20 border-b border-[#1a233a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Kicker Badge */}
        <div className="mb-6">
          <span
            id="hero-badge"
            className="inline-flex items-center px-3 py-1 rounded-sm text-xs font-mono font-medium bg-[#131b2e] border border-[#2d3449] text-[#89ceff]"
          >
            Portfolio & Engineering Records
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Personal introduction & actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-sm font-mono text-[#94a3b8] mb-1">Hi, I'm</span>
            <h1
              id="hero-name"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight"
            >
              {PERSONAL_INFO.name}
            </h1>
            <h2
              id="hero-role"
              className="text-xl sm:text-2xl font-semibold text-[#c0c1ff] mt-2 tracking-tight"
            >
              {PERSONAL_INFO.role}
            </h2>

            <p className="mt-5 text-sm sm:text-base text-[#94a3b8] leading-relaxed max-w-2xl">
              {PERSONAL_INFO.bio}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                id="hero-explore-projects-btn"
                onClick={onExploreProjects}
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-md bg-[#6366f1] hover:bg-[#4f46e5] text-white text-xs sm:text-sm font-mono font-medium transition-all shadow-sm active:scale-98"
              >
                <FolderGit2 className="w-4 h-4" />
                <span>Explore My Projects</span>
              </button>

              <button
                id="hero-contact-btn"
                onClick={onContactClick}
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-md bg-[#171f33] hover:bg-[#222a3d] border border-[#2d3449] text-[#dae2fd] hover:text-white text-xs sm:text-sm font-mono font-medium transition-all active:scale-98"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </button>

              <button
                id="hero-resume-btn"
                onClick={onOpenResume}
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-md bg-[#171f33] hover:bg-[#222a3d] border border-[#2d3449] text-[#dae2fd] hover:text-white text-xs sm:text-sm font-mono font-medium transition-all active:scale-98"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Verification Status Pill */}
            <div className="mt-8 flex items-center space-x-2 text-xs font-mono text-[#4edea3]">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>
                {PERSONAL_INFO.degree} • {PERSONAL_INFO.college} ({PERSONAL_INFO.academicPeriod})
              </span>
            </div>
          </div>

          {/* Right Column: Academic Dossier KPI Card */}
          <div className="lg:col-span-5" id="academic-dossier-card">
            <div className="rounded-lg bg-[#131b2e] border border-[#222a3d] p-5 sm:p-6 shadow-md">
              {/* Dossier Card Header */}
              <div className="flex items-start space-x-3.5 pb-5 border-b border-[#222a3d]">
                <div className="w-10 h-10 rounded-md bg-[#171f33] border border-[#2d3449] flex items-center justify-center text-[#c0c1ff] shrink-0">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono tracking-wider text-[#908fa0] uppercase">
                    ACADEMIC DOSSIER
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {PERSONAL_INFO.name} • {PERSONAL_INFO.degree}
                  </div>
                  <div className="text-xs text-[#94a3b8]">{PERSONAL_INFO.college}</div>
                  <div className="text-xs text-[#908fa0]">{PERSONAL_INFO.collegeLocation}</div>
                </div>
              </div>

              {/* 2x2 KPI Grid */}
              <div className="grid grid-cols-2 gap-4 pt-5">
                {/* 1. Academic Standing */}
                <div
                  id="kpi-academic-standing"
                  className="p-3.5 rounded-md bg-[#171f33]/70 border border-[#222a3d]/80 flex flex-col justify-between hover:border-[#334155] transition-colors"
                >
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#908fa0]">
                    <span>ACADEMIC STANDING</span>
                    <GraduationCap className="w-4 h-4 text-[#4edea3]" />
                  </div>
                  <div className="mt-3">
                    <div className="text-2xl sm:text-3xl font-bold font-mono text-[#4edea3]">
                      8.36
                    </div>
                    <div className="text-[11px] font-mono text-[#94a3b8] mt-0.5">
                      CGPA (up to IV Sem)
                    </div>
                  </div>
                </div>

                {/* 2. Deliverables */}
                <div
                  id="kpi-deliverables"
                  className="p-3.5 rounded-md bg-[#171f33]/70 border border-[#222a3d]/80 flex flex-col justify-between hover:border-[#334155] transition-colors"
                >
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#908fa0]">
                    <span>DELIVERABLES</span>
                    <Grid className="w-4 h-4 text-[#89ceff]" />
                  </div>
                  <div className="mt-3">
                    <div className="text-2xl sm:text-3xl font-bold font-mono text-white">
                      2
                    </div>
                    <div className="text-[11px] font-mono text-[#94a3b8] mt-0.5">
                      Key Research Projects
                    </div>
                  </div>
                </div>

                {/* 3. Industry Exposure */}
                <div
                  id="kpi-industry-exposure"
                  className="p-3.5 rounded-md bg-[#171f33]/70 border border-[#222a3d]/80 flex flex-col justify-between hover:border-[#334155] transition-colors"
                >
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#908fa0]">
                    <span>INDUSTRY EXPOSURE</span>
                    <Briefcase className="w-4 h-4 text-[#c0c1ff]" />
                  </div>
                  <div className="mt-3">
                    <div className="text-sm sm:text-base font-semibold text-white leading-tight">
                      Web Dev Intern
                    </div>
                    <div className="text-[11px] font-mono text-[#89ceff] mt-0.5">
                      WHY Global Services
                    </div>
                  </div>
                </div>

                {/* 4. Credentials */}
                <div
                  id="kpi-credentials"
                  className="p-3.5 rounded-md bg-[#171f33]/70 border border-[#222a3d]/80 flex flex-col justify-between hover:border-[#334155] transition-colors"
                >
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#908fa0]">
                    <span>CREDENTIALS</span>
                    <Award className="w-4 h-4 text-[#4edea3]" />
                  </div>
                  <div className="mt-3">
                    <div className="text-2xl sm:text-3xl font-bold font-mono text-white">
                      2
                    </div>
                    <div className="text-[11px] font-mono text-[#94a3b8] mt-0.5">
                      Infosys & Cisco Certified
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
