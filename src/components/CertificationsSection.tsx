import React from 'react';
import { motion } from 'motion/react';
import { Award, CheckCircle2, Eye, Network } from 'lucide-react';
import { CERTIFICATIONS_LIST } from '../data/portfolioData';
import { CertificateItem } from '../types';

interface CertificationsSectionProps {
  onViewCertificate: (cert: CertificateItem) => void;
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({
  onViewCertificate
}) => {
  return (
    <section id="certifications" className="py-16 border-b border-[#1a233a] overflow-hidden">
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
              07 // INDUSTRY CREDENTIALS
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-1">
              Certifications
            </h2>
          </div>
          <div className="text-xs font-mono text-[#94a3b8]">
            2 Verified Professional Certificates
          </div>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {CERTIFICATIONS_LIST.map((cert, index) => {
            return (
              <motion.div
                key={cert.id}
                id={`certificate-card-${cert.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.12, ease: 'easeOut' }}
                className="rounded-lg bg-[#131b2e] border border-[#222a3d] p-6 sm:p-7 hover:border-[#6366f1]/40 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.35)] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-md bg-[#171f33] border border-[#2d3449] group-hover:border-[#6366f1]/50 group-hover:scale-105 flex items-center justify-center shrink-0 transition-all duration-300">
                      {index === 0 ? (
                        <Award className="w-5 h-5 text-[#89ceff]" />
                      ) : (
                        <Network className="w-5 h-5 text-[#4edea3]" />
                      )}
                    </div>
                    <div>
                      <div className="text-[10px] font-mono tracking-wider text-[#908fa0] uppercase">
                        {cert.issuer}
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-white mt-1 group-hover:text-[#dae2fd] transition-colors">
                        {cert.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#94a3b8] mt-4 leading-relaxed pl-14">
                    {cert.description}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="mt-8 pt-4 border-t border-[#1a233a] flex items-center justify-between">
                  <div className="flex items-center space-x-1.5 text-xs font-mono text-[#4edea3]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Credential Verified</span>
                  </div>
                  <button
                    id={`view-cert-btn-${cert.id}`}
                    onClick={() => onViewCertificate(cert)}
                    className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-sm bg-[#171f33] hover:bg-[#222a3d] border border-[#2d3449] hover:border-[#6366f1]/50 hover:-translate-y-0.5 active:translate-y-0 text-xs font-mono text-[#dae2fd] hover:text-white transition-all duration-200 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Certificate</span>
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
