import React, { useEffect } from 'react';
import { X, CheckCircle, Cpu, Activity, FileText, ArrowRight } from 'lucide-react';
import { ProjectSpec } from '../types';

interface ProjectSpecModalProps {
  project: ProjectSpec | null;
  onClose: () => void;
}

export const ProjectSpecModal: React.FC<ProjectSpecModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#060e20]/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-lg bg-[#131b2e] border border-[#2d3449] shadow-2xl p-6 sm:p-8 text-[#dae2fd]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-md bg-[#171f33] border border-[#2d3449] text-[#94a3b8] hover:text-white hover:border-[#6366f1] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="pb-5 border-b border-[#222a3d] pr-10">
          <div className="flex items-center space-x-2 text-xs font-mono text-[#89ceff] mb-1">
            <span className="px-2 py-0.5 rounded-sm bg-[#171f33] border border-[#2d3449]">
              {project.projectNumber}
            </span>
            <span>•</span>
            <span className="text-[#4edea3]">{project.date}</span>
            <span>•</span>
            <span className="text-[#908fa0]">{project.status}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {project.title}
          </h2>
        </div>

        {/* Modal Body */}
        <div className="space-y-6 pt-6">
          {/* Executive Overview */}
          <div>
            <div className="text-[11px] font-mono uppercase text-[#908fa0] tracking-wider mb-2">
              PROJECT ABSTRACT & OBJECTIVE
            </div>
            <p className="text-xs sm:text-sm text-[#dae2fd] leading-relaxed bg-[#171f33] p-4 rounded-md border border-[#222a3d]">
              {project.overview}
            </p>
          </div>

          {/* Key Modules */}
          <div>
            <div className="text-[11px] font-mono uppercase text-[#908fa0] tracking-wider mb-2.5">
              IMPLEMENTED ENGINEERING MODULES
            </div>
            <div className="space-y-2">
              {project.modules.map((m, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-2.5 p-3 rounded-md bg-[#171f33]/60 border border-[#222a3d] text-xs text-[#dae2fd]"
                >
                  <CheckCircle className="w-4 h-4 text-[#4edea3] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{m}</span>
                </div>
              ))}
            </div>
          </div>

          {/* System Architecture Pipeline */}
          {project.architectureDetails && (
            <div>
              <div className="flex items-center space-x-2 text-[11px] font-mono uppercase text-[#908fa0] tracking-wider mb-2">
                <Cpu className="w-3.5 h-3.5 text-[#c0c1ff]" />
                <span>SYSTEM ARCHITECTURE & DATA FLOW</span>
              </div>
              <div className="p-4 rounded-md bg-[#0b1326] border border-[#222a3d] font-mono text-xs text-[#89ceff] leading-relaxed overflow-x-auto">
                <div className="text-[11px] text-[#908fa0] mb-2 font-mono">
                  $ pipeline --inspect --trace
                </div>
                {project.architectureDetails.systemFlow}
              </div>
            </div>
          )}

          {/* Core Technologies */}
          {project.architectureDetails && (
            <div>
              <div className="text-[11px] font-mono uppercase text-[#908fa0] tracking-wider mb-2.5">
                TECHNICAL SPECIFICATIONS & TOOLING
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.architectureDetails.coreTechnologies.map((tech, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-sm bg-[#171f33] border border-[#222a3d] text-xs font-mono text-[#dae2fd]"
                  >
                    • {tech}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Performance Benchmarks */}
          {project.architectureDetails && (
            <div>
              <div className="flex items-center space-x-2 text-[11px] font-mono uppercase text-[#908fa0] tracking-wider mb-2">
                <Activity className="w-3.5 h-3.5 text-[#4edea3]" />
                <span>EVALUATION BENCHMARKS</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.architectureDetails.performanceMetrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-md bg-[#171f33]/70 border border-[#222a3d] text-xs font-mono text-[#4edea3]"
                  >
                    {metric}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Viva Evaluation Notes */}
          {project.architectureDetails && (
            <div className="p-4 rounded-md bg-[#171f33]/40 border border-[#2d3449]">
              <div className="flex items-center space-x-2 text-[11px] font-mono uppercase text-[#c0c1ff] tracking-wider mb-1.5">
                <FileText className="w-3.5 h-3.5" />
                <span>ACADEMIC VIVA & DEFENSE NOTES</span>
              </div>
              <p className="text-xs text-[#94a3b8] leading-relaxed">
                {project.architectureDetails.vivaNotes}
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-4 border-t border-[#222a3d] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md bg-[#171f33] hover:bg-[#222a3d] border border-[#2d3449] text-xs font-mono text-white transition-colors cursor-pointer"
          >
            Close Specification
          </button>
        </div>
      </div>
    </div>
  );
};
