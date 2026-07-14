'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from './ui/MagneticButton';

/* ─── Custom SVG Icons (no icon library) ─── */
const MenuIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="16" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); }); },
      { root: null, rootMargin: '-20% 0px -70% 0px', threshold: 0 }
    );
    sections.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => { sections.forEach((id) => { const el = document.getElementById(id); if (el) observer.unobserve(el); }); };
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const resumeHref = '/Shubham_Agdari_Resume.pdf';

  const navLinks = [
    { name: 'Home',       id: 'home'       },
    { name: 'About',      id: 'about'      },
    { name: 'Skills',     id: 'skills'     },
    { name: 'Projects',   id: 'projects'   },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact',    id: 'contact'    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Floating glass pill once scrolled */}
      <div
        className={`mx-auto max-w-6xl transition-all duration-300 ${
          isScrolled ? 'mt-3 px-4 lg:px-6 rounded-2xl' : 'px-6 lg:px-8 rounded-none'
        }`}
        style={{
          background: isScrolled ? 'var(--nav-bg)' : 'transparent',
          border: isScrolled ? '1px solid var(--border)' : '1px solid transparent',
          boxShadow: isScrolled ? 'var(--glow-sm)' : 'none',
          backdropFilter: isScrolled ? 'blur(20px) saturate(1.4)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(20px) saturate(1.4)' : 'none',
          width: isScrolled ? 'calc(100% - 2rem)' : '100%',
        }}
      >
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="group relative font-heading font-black text-xl tracking-widest"
            style={{ color: 'var(--text-primary)' }}
          >
            S<span style={{ color: 'var(--accent)' }}>A</span>
            <span
              className="absolute -bottom-0.5 left-0 h-px transition-all duration-300 w-0 group-hover:w-full"
              style={{ background: 'var(--accent)' }}
            />
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`nav-link relative px-4 py-2 text-sm font-semibold rounded-lg ${isActive ? 'active' : ''}`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg"
                      style={{ background: 'var(--accent-bg)', boxShadow: 'var(--glow-sm)' }}
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                  <span className="relative">{link.name}</span>
                </button>
              );
            })}

            {/* Divider */}
            <span className="w-px h-4 mx-2" style={{ background: 'var(--border-strong)' }} />

            {/* Resume */}
            <MagneticButton
              variant="ghost"
              size="sm"
              href={resumeHref}
              download="Shubham_Agdari_Resume.pdf"
              className="ml-1"
            >
              Resume
            </MagneticButton>
          </div>

          {/* Mobile: hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="nav-link p-2 rounded-lg"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="md:hidden pb-4 pt-2"
              style={{ borderTop: '1px solid var(--border)' }}
            >
              <div className="flex flex-col gap-1 mt-2">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <button
                      key={link.id}
                      onClick={() => scrollToSection(link.id)}
                      className="px-4 py-2.5 text-left text-sm font-semibold rounded-lg transition-all"
                      style={{
                        color:      isActive ? 'var(--accent)' : 'var(--text-secondary)',
                        background: isActive ? 'var(--accent-bg)' : 'transparent',
                      }}
                    >
                      {link.name}
                    </button>
                  );
                })}
                <a
                  href={resumeHref}
                  download="Shubham_Agdari_Resume.pdf"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-2 mx-0 px-4 py-2.5 text-left text-sm font-semibold rounded-lg border block"
                  style={{ color: 'var(--accent)', borderColor: 'var(--accent)', background: 'transparent' }}
                >
                  Resume ↗
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
