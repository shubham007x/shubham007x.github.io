'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiHtml5,
  SiCss3, SiTailwindcss, SiNodedotjs, SiExpress, SiRedux,
  SiFramer, SiGit, SiMongodb,
} from 'react-icons/si';
import { IconType } from 'react-icons';

type Skill = {
  name: string;
  icon: IconType;
  color: string;
};

type Category = {
  label: string;
  skills: Skill[];
};

const categories: Category[] = [
  {
    label: 'Frontend',
    skills: [
      { name: 'React',           icon: SiReact,       color: '#61DAFB' },
      { name: 'Next.js',         icon: SiNextdotjs,   color: '#AAA' },
      { name: 'TypeScript',      icon: SiTypescript,  color: '#3178C6' },
      { name: 'JavaScript',      icon: SiJavascript,  color: '#F7DF1E' },
      { name: 'HTML5',           icon: SiHtml5,       color: '#E34F26' },
      { name: 'CSS3',            icon: SiCss3,        color: '#1572B6' },
      { name: 'Tailwind CSS',    icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Redux Toolkit',   icon: SiRedux,       color: '#764ABC' },
      { name: 'Framer Motion',   icon: SiFramer,      color: '#0055FF' },
    ],
  },
  {
    label: 'Backend',
    skills: [
      { name: 'Node.js',    icon: SiNodedotjs, color: '#339933' },
      { name: 'Express.js', icon: SiExpress,   color: '#AAA'    },
      { name: 'MongoDB',    icon: SiMongodb,   color: '#47A248' },
    ],
  },
  {
    label: 'Tools',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
    ],
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};
const item = {
  hidden:  { opacity: 0, scale: 0.85, y: 12 },
  visible: { opacity: 1, scale: 1,    y: 0,  transition: { duration: 0.4, ease: 'easeOut' as const } },
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="skills"
      ref={ref}
      style={{ background: 'var(--background)' }}
      className="relative overflow-hidden"
    >
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-10 pointer-events-none"
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
            ◆ Skills
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black font-heading"
            style={{ color: 'var(--text-primary)' }}
          >
            Technical Expertise
          </h2>
          <p className="mt-4 text-base max-w-xl" style={{ color: 'var(--text-secondary)' }}>
            Technologies I work with to build modern, performant applications.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="space-y-12">
          {categories.map((cat, ci) => (
            <div key={ci}>
              {/* Category label */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: ci * 0.15 }}
                className="flex items-center gap-3 mb-6"
              >
                <span
                  className="text-sm font-bold tracking-widest uppercase"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {cat.label}
                </span>
                <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
              </motion.div>

              {/* Skill cards */}
              <motion.div
                className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-9 gap-3"
                variants={container}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
              >
                {cat.skills.map((skill, si) => (
                  <motion.div
                    key={si}
                    variants={item}
                    className="glass-card group flex flex-col items-center gap-2.5 p-4 cursor-default"
                    whileHover={{ y: -4, scale: 1.04 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    {/* Icon */}
                    <div
                      className="w-10 h-10 flex items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                      style={{ background: `${skill.color}15` }}
                    >
                      <skill.icon
                        className="w-5 h-5"
                        style={{ color: skill.color, filter: skill.name === 'Next.js' || skill.name === 'Express.js' ? 'brightness(0.85) contrast(1.2)' : 'none' }}
                      />
                    </div>
                    {/* Name */}
                    <span
                      className="text-xs font-semibold text-center leading-tight"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>

        {/* Summary strip */}
        <motion.div
          className="mt-20 grid grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {[
            { val: `${categories.reduce((a, c) => a + c.skills.length, 0)}`, label: 'Technologies' },
            { val: '4+',  label: 'Years experience' },
            { val: '10+', label: 'Projects built'   },
          ].map(({ val, label }, i) => (
            <div
              key={i}
              className="glass-card px-6 py-5 flex flex-col items-center text-center"
            >
              <span
                className="text-2xl md:text-3xl font-black font-heading mb-1 gradient-text"
              >
                {val}
              </span>
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
