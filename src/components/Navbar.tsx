import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'academics', label: 'Academics' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'skills', label: 'Skills' },
    { id: 'internships', label: 'Internships' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleItemClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors duration-200 border-b ${
        scrolled
          ? 'bg-[#0b1326]/90 backdrop-blur-md border-[#222a3d]'
          : 'bg-[#0b1326] border-[#1a233a]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand identity block */}
        <div
          onClick={() => handleItemClick('home')}
          className="flex items-center space-x-3 cursor-pointer group"
          id="brand-header"
        >
          <div className="w-10 h-10 rounded-md bg-[#171f33] border border-[#2d3449] flex items-center justify-center text-xs font-mono font-bold text-[#c0c1ff] group-hover:border-[#8083ff] transition-colors">
            SM
          </div>
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-white tracking-tight text-sm sm:text-base">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[11px] font-mono text-[#908fa0] hidden sm:inline">
                Portfolio & Records
              </span>
            </div>
            <div className="flex items-center space-x-1.5 text-[11px] font-mono text-[#908fa0]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3]"></span>
              <span className="truncate max-w-[200px] sm:max-w-none">
                {PERSONAL_INFO.degree} • {PERSONAL_INFO.college}
              </span>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1" id="desktop-nav">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleItemClick(item.id)}
                className={`px-3 py-1.5 text-xs font-mono transition-all rounded-md relative ${
                  isActive
                    ? 'text-white bg-[#171f33] border border-[#2d3449] font-medium shadow-xs'
                    : 'text-[#94a3b8] hover:text-white hover:bg-[#131b2e]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#6366f1] rounded-full"></span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Mobile menu button */}
        <div className="flex lg:hidden items-center space-x-2">
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md bg-[#171f33] border border-[#2d3449] text-[#dae2fd] hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-dropdown"
          className="lg:hidden bg-[#0e162a] border-b border-[#222a3d] px-4 py-3 space-y-1 animate-in fade-in slide-in-from-top-2 duration-150"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`w-full text-left px-3 py-2 text-xs font-mono rounded-md flex items-center justify-between ${
                  isActive
                    ? 'bg-[#171f33] text-white border border-[#2d3449] font-semibold'
                    : 'text-[#94a3b8] hover:text-white hover:bg-[#131b2e]'
                }`}
              >
                <span>{item.label}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#6366f1]" />}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
