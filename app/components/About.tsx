'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import CountUp from './ui/CountUp';
import GlowCard from './ui/GlowCard';

/* ─── Unique stat icons (custom geometric paths) ─── */
const CalendarGlyph = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <rect x="2" y="5" width="24" height="21" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M2 11h24" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 2v6M20 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <rect x="7" y="15" width="4" height="4" rx="1" fill="currentColor" opacity="0.5" />
    <rect x="12" y="15" width="4" height="4" rx="1" fill="currentColor" opacity="0.5" />
    <rect x="17" y="15" width="4" height="4" rx="1" fill="currentColor" opacity="0.5" />
  </svg>
);

const RocketGlyph = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path d="M14 3C14 3 20 6 20 14C20 18 18 22 14 25C10 22 8 18 8 14C8 6 14 3 14 3Z"
      stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="14" cy="14" r="2.5" fill="currentColor" opacity="0.6" />
    <path d="M8 17L5 22L10 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20 17L23 22L18 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CircuitGlyph = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <rect x="3" y="3" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <rect x="17" y="3" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <rect x="3" y="17" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <rect x="17" y="17" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M11 7h6M7 11v6M21 11v6M11 21h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const BuildingGlyph = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <rect x="4" y="8" width="20" height="17" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <path d="M9 25V19h4v6M15 25V19h4v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M4 12h20" stroke="currentColor" strokeWidth="1.5" />
    <path d="M10 3l4 5 4-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="9" cy="16" r="1" fill="currentColor" opacity="0.5" />
    <circle cx="19" cy="16" r="1" fill="currentColor" opacity="0.5" />
  </svg>
);

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

const stats = [
  { value: 4,  suffix: '+', label: 'Years of experience', Icon: CalendarGlyph },
  { value: 10, suffix: '+', label: 'Projects delivered',  Icon: RocketGlyph   },
  { value: 15, suffix: '+', label: 'Technologies',        Icon: CircuitGlyph  },
  { value: 3,  suffix: '',  label: 'Companies worked at', Icon: BuildingGlyph },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const blobY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: 'var(--surface-alt)' }}
    >
      {/* Subtle corner accent with scroll parallax */}
      <motion.div
        className="absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: 'var(--accent)', y: blobY }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-24 md:py-32">

        {/* Section label + heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: 'var(--accent)' }}>
            ◆ About
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black font-heading"
            style={{ color: 'var(--text-primary)' }}
          >
            Who I Am
          </h2>
        </motion.div>

        {/* Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">

          {/* Photo */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Decorative border offset */}
              <div
                className="absolute -inset-3 rounded-3xl opacity-30"
                style={{ border: '1px solid var(--accent)' }}
              />
              <div
                className="absolute -inset-6 rounded-3xl opacity-10"
                style={{ border: '1px solid var(--accent)' }}
              />

              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden"
                style={{ border: '2px solid var(--border-strong)' }}>
                <Image
                  src="/images/projects/shubh.png?v=1"
                  alt="Shubham Agdari"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, 320px"
                  priority
                  unoptimized
                />
                {/* Subtle gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.35) 100%)' }}
                />
              </div>

              {/* Floating badge */}
              <div
                className="absolute -bottom-4 -right-4 px-3 py-1.5 rounded-xl text-xs font-bold"
                style={{ background: 'var(--accent)', color: '#fff' }}
              >
                4+ years
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-5"
          >
            <motion.h3
              variants={fadeUp}
              className="text-2xl sm:text-3xl font-bold font-heading"
              style={{ color: 'var(--text-primary)' }}
            >
              Electronics Engineer<br />turned <span className="gradient-text">Software Developer</span>
            </motion.h3>

            <motion.p variants={fadeUp} className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              I&apos;m a Software Development Engineer with a foundation in Electronics &amp; Telecommunication
              engineering and a passion for crafting scalable, high-performance web applications.
            </motion.p>
            <motion.p variants={fadeUp} className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Specializing in React, Next.js, and TypeScript, I bring both technical depth and design
              sensibility to every project — from rapid prototypes to enterprise-grade platforms.
            </motion.p>
            <motion.p variants={fadeUp} className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              My journey spans across companies like Wantace, Futy, and Capgemini, where I&apos;ve built
              real-time UIs, integrated complex APIs, and worked in cross-functional agile teams.
            </motion.p>

            {/* Tech chips */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2 pt-2">
              {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-sm font-semibold border"
                  style={{
                    color: 'var(--accent)',
                    borderColor: 'var(--accent-bg)',
                    background: 'var(--accent-bg)',
                  }}
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Stats grid */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          variants={container}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {stats.map(({ value, suffix, label, Icon }, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="h-full"
            >
              <GlowCard className="group p-6 flex flex-col gap-4 h-full">
                <div style={{ color: 'var(--accent)' }}>
                  <Icon />
                </div>
                <div>
                  <p
                    className="text-3xl md:text-4xl font-black font-heading"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    <CountUp to={value} from={0} duration={1.8} delay={i * 0.12} startWhen={isInView} className="inline" />
                    <span style={{ color: 'var(--accent)' }}>{suffix}</span>
                  </p>
                  <p className="text-sm mt-1 font-medium" style={{ color: 'var(--text-muted)' }}>{label}</p>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
