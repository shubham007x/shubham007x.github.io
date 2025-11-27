'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleResumeDownload = () => {
    // Open resume in new tab
    window.open('/resume.pdf', '_blank', 'noopener,noreferrer');
    
    // Also trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Shubham_Agdari_Resume';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0a0a]/95 backdrop-blur-xl border-b-2 border-[#FF6B00]/50 shadow-[0_0_20px_rgba(255,107,0,0.3)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="shrink-0">
            <button
              onClick={() => scrollToSection('home')}
              className="text-base sm:text-lg md:text-xl font-black text-[#FF6B00] hover:text-[#FF4500] transition-colors tracking-widest uppercase drop-shadow-[0_0_10px_rgba(255,107,0,0.5)]"
            >
              SA
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`text-sm transition-colors font-bold tracking-widest uppercase relative group ${
                      isActive
                        ? 'text-[#FF6B00]'
                        : 'text-gray-300 hover:text-[#FF6B00]'
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-[#FF6B00] transition-all duration-300 ${
                        isActive
                          ? 'w-full'
                          : 'w-0 group-hover:w-full'
                      }`}
                    ></span>
                  </button>
                );
              })}
              {/* Resume Button */}
              <button
                onClick={handleResumeDownload}
                className="text-sm text-gray-300 hover:text-[#FF6B00] font-bold tracking-widest uppercase relative group px-4 py-2 border-2 border-[#FF6B00]/50 hover:border-[#FF6B00] bg-[#0a0a0a]/50 hover:bg-[#0a0a0a] transition-all duration-300"
              >
                RESUME
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF6B00] group-hover:w-full transition-all duration-300"></span>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 border-2 border-[#FF6B00] bg-[#0a0a0a] text-[#FF6B00]"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 border-t-2 border-[#FF6B00]/50 mt-2 pt-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`px-3 py-2 text-base font-bold transition-colors text-left uppercase tracking-widest border-l-2 ${
                      isActive
                        ? 'text-[#FF6B00] border-[#FF6B00]'
                        : 'text-gray-300 hover:text-[#FF6B00] border-transparent hover:border-[#FF6B00]'
                    }`}
                  >
                    {link.name}
                  </button>
                );
              })}
              {/* Resume Button - Mobile */}
              <button
                onClick={handleResumeDownload}
                className="px-3 py-2 text-base font-bold transition-colors text-left uppercase tracking-widest border-l-2 border-[#FF6B00] text-[#FF6B00] hover:bg-[#FF6B00]/10"
              >
                RESUME
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

