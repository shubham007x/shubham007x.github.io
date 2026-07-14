'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import GlowCard from './ui/GlowCard';
import MagneticButton from './ui/MagneticButton';
import Aurora from './ui/Aurora';

/* ─── Custom geometric contact icons ─── */
const EnvelopeGlyph = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const PhoneGlyph = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 13.64a19.79 19.79 0 01-3.07-8.67A2 2 0 012 3h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L6.09 10.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 18z"/>
  </svg>
);

const PinGlyph = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
    <circle cx="12" cy="9" r="2.5"/>
  </svg>
);

const LinkedInGlyph = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GitHubGlyph = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const ArrowUpRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="M7 17L17 7M7 7h10v10" />
  </svg>
);

const contactItems = [
  {
    Icon: EnvelopeGlyph,
    label: 'Email',
    value: 'shubham.agdari@gmail.com',
    link: 'mailto:shubham.agdari@gmail.com',
    display: 'shubham.agdari@gmail.com',
  },
  {
    Icon: PhoneGlyph,
    label: 'Phone',
    value: '+91-7875820028',
    link: 'tel:+917875820028',
    display: '+91 78758 20028',
  },
  {
    Icon: PinGlyph,
    label: 'Location',
    value: 'Urjanagar, Chandrapur, India',
    link: null,
    display: 'Chandrapur, India',
  },
  {
    Icon: LinkedInGlyph,
    label: 'LinkedIn',
    value: 'shubham-agdari',
    link: 'https://linkedin.com/in/shubham-agdari-30500617b',
    display: 'shubham-agdari',
  },
];

const socials = [
  { Icon: GitHubGlyph,   href: 'https://github.com/shubham007x',                    label: 'GitHub'   },
  { Icon: LinkedInGlyph, href: 'https://linkedin.com/in/shubham-agdari-30500617b', label: 'LinkedIn' },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' as const } },
};

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="contact"
      ref={ref}
      style={{ background: 'var(--surface-alt)' }}
      className="relative overflow-hidden"
    >
      <Aurora intensity={0.4} />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 100%, var(--accent-glow), transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-24 md:py-32 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: 'var(--accent)' }}>
            ◆ Contact
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black font-heading"
            style={{ color: 'var(--text-primary)' }}
          >
            Let&apos;s Connect
          </h2>
          <p className="mt-4 text-base max-w-lg mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Open to new opportunities, collaborations, or just a good conversation about tech.
          </p>
        </motion.div>

        {/* Two-column: contact cards + CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* Contact items */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            variants={container}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {contactItems.map(({ Icon, label, display, link }, i) => (
              <motion.div key={i} variants={item} className="h-full">
                <GlowCard className="p-5 flex items-start gap-4 group h-full">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover:bg-[var(--accent)] group-hover:text-white"
                    style={{ background: 'var(--accent-bg)', color: 'var(--accent)' }}
                  >
                    <Icon />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold tracking-wider uppercase mb-1" style={{ color: 'var(--text-muted)' }}>
                      {label}
                    </p>
                    {link ? (
                      <a
                        href={link}
                        target={link.startsWith('http') ? '_blank' : undefined}
                        rel={link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="link-glow text-sm font-semibold truncate block"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {display}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{display}</p>
                    )}
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA panel */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
          <GlowCard className="p-8 flex flex-col gap-6">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: 'var(--accent)' }}>
                Currently available
              </p>
              <h3
                className="text-2xl font-black font-heading mb-3"
                style={{ color: 'var(--text-primary)' }}
              >
                Ready for new challenges
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Whether you have a project in mind or want to explore possibilities, I&apos;d love to hear from you.
                Drop me an email and I&apos;ll get back to you promptly.
              </p>
            </div>

            <MagneticButton
              variant="primary"
              href="mailto:shubham.agdari@gmail.com"
              className="w-full text-sm"
            >
              Send me an email
              <ArrowUpRight />
            </MagneticButton>

            {/* Social row */}
            <div className="flex items-center gap-4 pt-2" style={{ borderTop: '1px solid var(--border)' }}>
              <span className="text-xs font-semibold" style={{ color: 'var(--text-muted)' }}>Find me on</span>
              {socials.map(({ Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="icon-btn w-9 h-9"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </GlowCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
