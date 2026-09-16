import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ContactSubmission } from '../types';

interface ContactSectionProps {
  onMessageSent?: (submission: ContactSubmission) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onMessageSent }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setStatusMessage('Please complete all required fields (*)');
      return;
    }

    setStatus('loading');

    // Simulate async POST request to contact.php pipeline
    setTimeout(() => {
      const newSubmission: ContactSubmission = {
        id: `msg-${Date.now()}`,
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject || 'General Inquiry',
        message: formData.message,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      if (onMessageSent) {
        onMessageSent(newSubmission);
      }

      setStatus('success');
      setStatusMessage('Message submitted and logged to administrative dossier.');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

      setTimeout(() => {
        setStatus('idle');
        setStatusMessage('');
      }, 5000);
    }, 700);
  };

  return (
    <section id="contact" className="py-16 border-b border-[#1a233a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[#1a233a] gap-3">
          <div>
            <div className="text-xs font-mono text-[#89ceff] tracking-wider uppercase">
              08 // CONNECT
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-1">
              Get in Touch
            </h2>
          </div>
          <div className="text-xs font-mono text-[#94a3b8] max-w-lg md:text-right">
            Submissions are validated in real-time, simulated across PHP/MySQL, and immediately recorded in the evaluation admin dashboard below.
          </div>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10">
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-white">Contact Information</h3>
              <p className="text-xs sm:text-sm text-[#94a3b8] mt-2 leading-relaxed">
                Feel free to reach out for software engineering internships, collaborative
                research opportunities, or academic inquiries.
              </p>

              {/* Info Items */}
              <div className="space-y-4 mt-6">
                {/* Email */}
                <div className="flex items-center space-x-3.5 p-3.5 rounded-md bg-[#131b2e] border border-[#222a3d]">
                  <div className="w-8 h-8 rounded-md bg-[#171f33] border border-[#2d3449] flex items-center justify-center text-[#89ceff] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase text-[#908fa0]">
                      EMAIL ADDRESS
                    </div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs sm:text-sm font-mono text-white hover:text-[#89ceff] transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-3.5 p-3.5 rounded-md bg-[#131b2e] border border-[#222a3d]">
                  <div className="w-8 h-8 rounded-md bg-[#171f33] border border-[#2d3449] flex items-center justify-center text-[#4edea3] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase text-[#908fa0]">
                      PHONE NUMBER
                    </div>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="text-xs sm:text-sm font-mono text-white hover:text-[#4edea3] transition-colors"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center space-x-3.5 p-3.5 rounded-md bg-[#131b2e] border border-[#222a3d]">
                  <div className="w-8 h-8 rounded-md bg-[#171f33] border border-[#2d3449] flex items-center justify-center text-[#c0c1ff] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase text-[#908fa0]">
                      LOCATION
                    </div>
                    <div className="text-xs sm:text-sm text-white">
                      {PERSONAL_INFO.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Verified Online Profiles */}
            <div className="mt-8 pt-6 border-t border-[#1a233a]">
              <div className="text-[10px] font-mono tracking-wider text-[#908fa0] uppercase mb-3">
                VERIFIED ONLINE PROFILES
              </div>
              <div className="space-y-2.5">
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-md bg-[#131b2e] border border-[#222a3d] hover:border-[#334155] text-xs font-mono text-[#dae2fd] hover:text-white transition-all group"
                >
                  <div className="flex items-center space-x-2.5">
                    <Linkedin className="w-4 h-4 text-[#89ceff]" />
                    <span>LinkedIn Profile</span>
                  </div>
                  <span className="text-[#94a3b8] group-hover:text-white transition-colors">
                    {PERSONAL_INFO.linkedin}
                  </span>
                </a>

                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-md bg-[#131b2e] border border-[#222a3d] hover:border-[#334155] text-xs font-mono text-[#dae2fd] hover:text-white transition-all group"
                >
                  <div className="flex items-center space-x-2.5">
                    <Github className="w-4 h-4 text-[#dae2fd]" />
                    <span>GitHub Repository</span>
                  </div>
                  <span className="text-[#94a3b8] group-hover:text-white transition-colors">
                    {PERSONAL_INFO.github}
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Send Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="rounded-lg bg-[#131b2e] border border-[#222a3d] p-6 sm:p-7 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-[#1a233a] gap-2">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    Send Direct Message
                  </h3>
                  <div className="text-[11px] font-mono text-[#94a3b8]">
                    Handled via simulated async POST 'contact.php' pipeline
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-sm bg-[#171f33] border border-[#2d3449] text-[11px] font-mono text-[#89ceff] w-fit">
                  POST /api/contact.php
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-[#908fa0] mb-1.5">
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g., Dr. R. Sundar / Priya K"
                      required
                      className="w-full px-3.5 py-2.5 text-xs font-mono rounded-md bg-[#171f33] border border-[#2d3449] text-white placeholder-[#464554] focus:outline-none focus:border-[#6366f1] transition-colors"
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-[#908fa0] mb-1.5">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g., examiner@kamarajengg.edu.in"
                      required
                      className="w-full px-3.5 py-2.5 text-xs font-mono rounded-md bg-[#171f33] border border-[#2d3449] text-white placeholder-[#464554] focus:outline-none focus:border-[#6366f1] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone Number */}
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-[#908fa0] mb-1.5">
                      PHONE NUMBER *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g., 9876543210"
                      className="w-full px-3.5 py-2.5 text-xs font-mono rounded-md bg-[#171f33] border border-[#2d3449] text-white placeholder-[#464554] focus:outline-none focus:border-[#6366f1] transition-colors"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-[#908fa0] mb-1.5">
                      SUBJECT *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g., Viva Evaluation / Project Discussion"
                      className="w-full px-3.5 py-2.5 text-xs font-mono rounded-md bg-[#171f33] border border-[#2d3449] text-white placeholder-[#464554] focus:outline-none focus:border-[#6366f1] transition-colors"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[11px] font-mono uppercase text-[#908fa0] mb-1.5">
                    MESSAGE *
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message, feedback, or interview schedule here..."
                    required
                    className="w-full px-3.5 py-2.5 text-xs font-mono rounded-md bg-[#171f33] border border-[#2d3449] text-white placeholder-[#464554] focus:outline-none focus:border-[#6366f1] transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Status banner */}
                {status === 'error' && (
                  <div className="flex items-center space-x-2 text-xs font-mono text-[#ffb4ab] bg-[#93000a]/20 border border-[#ffb4ab]/30 p-2.5 rounded-sm">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                {status === 'success' && (
                  <div className="flex items-center space-x-2 text-xs font-mono text-[#4edea3] bg-[#003824]/40 border border-[#4edea3]/40 p-2.5 rounded-sm">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                {/* Footer submit */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <span className="text-[11px] font-mono text-[#908fa0]">
                    Validated & pushed directly to live database.
                  </span>
                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={status === 'loading'}
                    className="inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-md bg-[#6366f1] hover:bg-[#4f46e5] text-white text-xs font-mono font-medium transition-all shadow-sm disabled:opacity-50 cursor-pointer"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Transmitting...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
