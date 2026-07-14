'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/* ─── Unique bullet glyph ─── */
const PentagonDot = ({ color }: { color: string }) => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill={color}>
    <polygon points="6,0.5 11.5,4.3 9.3,11 2.7,11 0.5,4.3" />
  </svg>
);

const experiences = [
  {
    title: 'Software Development Engineer',
    company: 'Wantace',
    location: 'Gurugram',
    period: 'Nov 2025 – Present',
    current: true,
    description: [
      'Developing scalable software solutions using modern web technologies',
      'Collaborating with cross-functional teams to deliver high-quality products',
      'Implementing best practices in software development and code quality',
    ],
  },
  {
    title: 'Senior Analyst',
    company: 'Capgemini',
    location: 'Pune / Hybrid',
    period: 'Mar 2023 – May 2025',
    current: false,
    description: [
      'Developed enterprise tools using React and Redux Toolkit',
      'Integrated RESTful APIs and enabled efficient data flow across systems',
      'Worked cross-functionally in agile teams on large-scale projects',
    ],
  },
  {
    title: 'Analyst',
    company: 'Capgemini',
    location: 'Mumbai / Hybrid',
    period: 'Aug 2021 – Mar 2023',
    current: false,
    description: [
      'Supported Windows-based enterprise apps in RDS environments',
      'Resolved incidents and performance issues under tight SLAs',
      'Collaborated with infrastructure teams for system optimisation',
    ],
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};
const item = {
  hidden: { opacity: 0, x: -28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="experience"
      ref={ref}
      style={{ background: 'var(--background)' }}
      className="relative overflow-hidden"
    >
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-3xl opacity-[0.06] pointer-events-none"
        style={{ background: 'var(--accent)' }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-24 md:py-32">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: 'var(--accent)' }}>
            ◆ Experience
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black font-heading"
            style={{ color: 'var(--text-primary)' }}
          >
            Work History
          </h2>
          <p className="mt-4 text-base max-w-xl" style={{ color: 'var(--text-secondary)' }}>
            My professional journey across companies and roles.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical track */}
          <motion.div
            className="absolute left-[11px] top-0 bottom-0 w-px"
            style={{ background: 'var(--border-strong)', transformOrigin: 'top' }}
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
          />

          <motion.div
            className="space-y-10 pl-10"
            variants={container}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {experiences.map((exp, i) => (
              <motion.div key={i} variants={item} className="relative">
                {/* Timeline dot */}
                <div
                  className="absolute -left-[38px] top-5 w-[23px] h-[23px] rounded-full flex items-center justify-center border-2 transition-all"
                  style={{
                    background: exp.current ? 'var(--accent)' : 'var(--surface)',
                    borderColor: exp.current ? 'var(--accent)' : 'var(--border-strong)',
                  }}
                >
                  {exp.current && (
                    <>
                      <span
                        className="absolute w-full h-full rounded-full animate-pulse-ring"
                        style={{ background: 'var(--accent)' }}
                      />
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ background: '#fff' }}
                      />
                    </>
                  )}
                  {!exp.current && (
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ background: 'var(--text-muted)' }}
                    />
                  )}
                </div>

                {/* Card */}
                <div
                  className="glass-card p-5 sm:p-6 hover:border-(--accent) transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                    <div>
                      <h3
                        className="text-lg font-bold font-heading"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {exp.title}
                      </h3>
                      <p className="text-sm font-semibold mt-0.5" style={{ color: 'var(--accent)' }}>
                        {exp.company}
                        <span className="font-normal ml-1" style={{ color: 'var(--text-muted)' }}>
                          · {exp.location}
                        </span>
                      </p>
                    </div>
                    <span
                      className="shrink-0 px-3 py-1 rounded-full text-xs font-semibold border self-start"
                      style={
                        exp.current
                          ? { color: 'var(--accent)', borderColor: 'var(--accent-bg)', background: 'var(--accent-bg)' }
                          : { color: 'var(--text-muted)', borderColor: 'var(--border)', background: 'transparent' }
                      }
                    >
                      {exp.period}
                    </span>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {exp.description.map((point, pi) => (
                      <li key={pi} className="flex items-start gap-3 text-sm leading-relaxed"
                        style={{ color: 'var(--text-secondary)' }}>
                        <span className="shrink-0 mt-1">
                          <PentagonDot color="var(--accent)" />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
