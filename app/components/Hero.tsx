'use client';

import { motion } from 'framer-motion';

/* ─── Unique geometric SVG decorations ─── */
const HexagonMark = () => (
  <svg width="80" height="92" viewBox="0 0 80 92" fill="none">
    <polygon
      points="40,2 78,22 78,70 40,90 2,70 2,22"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      opacity="0.3"
    />
    <polygon
      points="40,14 66,28 66,64 40,78 14,64 14,28"
      stroke="currentColor"
      strokeWidth="1"
      fill="none"
      opacity="0.15"
    />
  </svg>
);

const OrbitRing = () => (
  <svg width="320" height="320" viewBox="0 0 320 320" fill="none" className="animate-spin-slow opacity-20">
    <ellipse cx="160" cy="160" rx="155" ry="60" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" />
    <ellipse cx="160" cy="160" rx="155" ry="60" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6"
      transform="rotate(60 160 160)" />
    <ellipse cx="160" cy="160" rx="155" ry="60" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6"
      transform="rotate(120 160 160)" />
    <circle cx="160" cy="5"   r="3" fill="currentColor" opacity="0.6" />
    <circle cx="160" cy="315" r="3" fill="currentColor" opacity="0.6" />
  </svg>
);

/* ─── Brand icon SVGs ─── */
const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      style={{ background: 'var(--background)' }}
    >
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid opacity-50 pointer-events-none" />

      {/* Radial gradient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 55% at 50% 30%, var(--accent-glow), transparent 70%)',
        }}
      />

      {/* Orbit rings decoration */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ color: 'var(--accent)' }}
      >
        <OrbitRing />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-20 text-center">

        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border text-sm font-semibold"
          style={{
            borderColor: 'var(--border-strong)',
            background: 'var(--surface)',
            color: 'var(--text-secondary)',
          }}
        >
          <span className="relative flex h-2 w-2">
            <span
              className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full opacity-75"
              style={{ background: '#22C55E' }}
            />
            <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: '#22C55E' }} />
          </span>
          Available for new opportunities
        </motion.div>

        {/* Hexagon mark + name */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative inline-block mb-4"
        >
          <div
            className="absolute -top-8 -right-10 opacity-30"
            style={{ color: 'var(--accent)' }}
          >
            <HexagonMark />
          </div>
          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-heading tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            Shubham{' '}
            <span className="gradient-text">Agdari</span>
          </h1>
        </motion.div>

        {/* Role */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <p
            className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 font-heading tracking-wide"
            style={{ color: 'var(--text-secondary)' }}
          >
            Software Development Engineer
          </p>
        </motion.div>

        {/* Bio */}
        <motion.p
          className="text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: 'var(--text-secondary)' }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          Building exceptional digital experiences through clean architecture,
          modern web technologies, and a relentless focus on performance.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          <button
            onClick={() => scrollToSection('projects')}
            className="group relative w-full sm:w-auto px-8 py-3.5 rounded-full font-semibold text-base overflow-hidden transition-all duration-200"
            style={{ background: 'var(--accent)', color: '#fff' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'var(--accent-hover)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'var(--accent)'; }}
          >
            <span className="relative z-10">View My Work</span>
            <span
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              style={{ background: 'linear-gradient(135deg, var(--accent-hover) 0%, var(--accent) 100%)' }}
            />
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full font-semibold text-base border transition-all duration-200"
            style={{
              borderColor: 'var(--border-strong)',
              color: 'var(--text-primary)',
              background: 'transparent',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)';
              (e.currentTarget as HTMLElement).style.color = 'var(--accent)';
              (e.currentTarget as HTMLElement).style.background = 'var(--accent-bg)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-strong)';
              (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)';
              (e.currentTarget as HTMLElement).style.background = 'transparent';
            }}
          >
            Get In Touch
          </button>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="flex items-center justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.65 }}
        >
          <a
            href="https://github.com/shubham007x"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold transition-all duration-200"
            style={{ color: 'var(--text-muted)' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--accent)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'; }}
            aria-label="GitHub"
          >
            <GitHubIcon />
            <span>GitHub</span>
          </a>
          <span className="w-px h-4" style={{ background: 'var(--border-strong)' }} />
          <a
            href="https://linkedin.com/in/shubham-agdari-30500617b"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold transition-all duration-200"
            style={{ color: 'var(--text-muted)' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--accent)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'; }}
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
            <span>LinkedIn</span>
          </a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <span className="text-xs font-medium tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>
            Scroll
          </span>
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.4, repeat: Infinity }}
            style={{ color: 'var(--accent)' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M7 10l5 5 5-5" />
            </svg>
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}
