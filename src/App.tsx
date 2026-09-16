import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { EducationSection } from './components/EducationSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AchievementsSection } from './components/AchievementsSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectSpecModal } from './components/ProjectSpecModal';
import { CertificateModal } from './components/CertificateModal';
import { ResumeModal } from './components/ResumeModal';
import { ProjectSpec, CertificateItem, ContactSubmission } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<ProjectSpec | null>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateItem | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);

  // Scroll spy observer to track active section
  useEffect(() => {
    const sectionIds = [
      'home',
      'about',
      'academics',
      'projects',
      'achievements',
      'skills',
      'internships',
      'certifications',
      'contact'
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMessageSent = (submission: ContactSubmission) => {
    setSubmissions((prev) => [submission, ...prev]);
  };

  return (
    <div className="min-h-screen bg-[#0b1326] text-[#dae2fd] font-sans antialiased flex flex-col selection:bg-[#6366f1] selection:text-white">
      {/* Top sticky navigation bar */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreProjects={() => handleNavigate('projects')}
          onContactClick={() => handleNavigate('contact')}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* 01 // IDENTITY & PHILOSOPHY */}
        <AboutSection />

        {/* 02 // FORMAL EDUCATION */}
        <EducationSection />

        {/* 03 // ENGINEERING CAPSTONES */}
        <ProjectsSection onInspectSpec={(proj) => setSelectedProject(proj)} />

        {/* 04 // COMPETITIVE MERIT */}
        <AchievementsSection />

        {/* 05 // TECHNICAL MATRIX */}
        <SkillsSection />

        {/* 06 // INDUSTRIAL EXPERIENCE */}
        <ExperienceSection />

        {/* 07 // INDUSTRY CREDENTIALS */}
        <CertificationsSection onViewCertificate={(cert) => setSelectedCertificate(cert)} />

        {/* 08 // CONNECT */}
        <ContactSection onMessageSent={handleMessageSent} />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Interactive Modals */}
      <ProjectSpecModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
