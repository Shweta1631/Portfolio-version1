import React, { useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, Award, Calendar, Hash, Printer } from 'lucide-react';
import { CertificateItem } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';

interface CertificateModalProps {
  certificate: CertificateItem | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (certificate) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [certificate, onClose]);

  if (!certificate) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#060e20]/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-lg bg-[#131b2e] border border-[#2d3449] shadow-2xl p-6 sm:p-8 text-[#dae2fd]"
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

        {/* Certificate Frame */}
        <div className="border-2 border-[#222a3d] p-6 sm:p-8 rounded-lg bg-[#0b1326] relative overflow-hidden">
          {/* Subtle watermarked shield */}
          <div className="absolute right-4 bottom-4 opacity-5 pointer-events-none">
            <ShieldCheck className="w-48 h-48 text-white" />
          </div>

          {/* Issuer header */}
          <div className="flex items-center justify-between pb-6 border-b border-[#1a233a]">
            <div>
              <div className="text-xs font-mono tracking-widest text-[#89ceff] uppercase font-semibold">
                {certificate.issuer}
              </div>
              <div className="text-[11px] font-mono text-[#908fa0] mt-0.5">
                Official Credential Verification Record
              </div>
            </div>
            <div className="w-10 h-10 rounded-full bg-[#171f33] border border-[#4edea3]/40 flex items-center justify-center text-[#4edea3]">
              <Award className="w-5 h-5" />
            </div>
          </div>

          {/* Certificate Awarded To */}
          <div className="text-center py-8">
            <div className="text-xs font-mono text-[#94a3b8] uppercase tracking-wider">
              This credential is verified and awarded to
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 tracking-tight">
              {PERSONAL_INFO.name}
            </h2>
            <div className="text-xs font-mono text-[#c0c1ff] mt-1">
              {PERSONAL_INFO.degree} • {PERSONAL_INFO.college}
            </div>

            <div className="my-6 inline-block w-16 h-0.5 bg-[#6366f1]"></div>

            <div className="text-xs font-mono text-[#908fa0] uppercase tracking-wider">
              For successful mastery of
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
              {certificate.title}
            </h3>
            <p className="text-xs text-[#94a3b8] max-w-md mx-auto mt-2 leading-relaxed">
              {certificate.description}
            </p>
          </div>

          {/* Validated Skills */}
          {certificate.skillsCovered && (
            <div className="pt-4 pb-4 border-t border-[#1a233a]">
              <div className="text-[10px] font-mono tracking-wider text-[#908fa0] uppercase mb-2">
                VERIFIED DOMAIN SKILLS
              </div>
              <div className="flex flex-wrap gap-2">
                {certificate.skillsCovered.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 text-[11px] font-mono rounded-sm bg-[#171f33] border border-[#222a3d] text-[#dae2fd]"
                  >
                    ✓ {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Verification details footer */}
          <div className="pt-4 border-t border-[#1a233a] flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#908fa0] gap-3">
            <div className="flex items-center space-x-2">
              <Hash className="w-3.5 h-3.5 text-[#89ceff]" />
              <span>ID: {certificate.credentialId}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-3.5 h-3.5 text-[#c0c1ff]" />
              <span>Issued: {certificate.issueDate}</span>
            </div>
            <div className="flex items-center space-x-1.5 text-[#4edea3]">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Cryptographically Verified</span>
            </div>
          </div>
        </div>

        {/* Modal Controls */}
        <div className="mt-6 flex items-center justify-between pt-2">
          <button
            onClick={() => window.print()}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-md bg-[#171f33] hover:bg-[#222a3d] border border-[#2d3449] text-xs font-mono text-[#dae2fd] hover:text-white transition-colors cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Certificate</span>
          </button>

          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-md bg-[#6366f1] hover:bg-[#4f46e5] text-xs font-mono text-white transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
