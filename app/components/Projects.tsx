'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

/* ─── Unique link arrow glyph ─── */
const ArrowUpRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="M7 17L17 7M7 7h10v10" />
  </svg>
);

const projects = [
  {
    title: 'QuickShow',
    description: 'Full-stack movie & event ticket booking platform with real-time seat selection, Clerk auth, and an admin dashboard.',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Clerk', 'Inngest', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=500&fit=crop',
    link: 'https://quickshow-client-gray.vercel.app/',
    github: 'https://github.com/shubham007x/Quickshow',
    accent: '#7C3AED',
  },
  {
    title: 'Car AI Dashboard',
    description: 'AI-powered web app to change car colors, swap backgrounds, and blur number plates for automotive visualization.',
    technologies: ['React', 'TypeScript', 'AI APIs', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=500&fit=crop',
    link: 'https://car-ai-dashboard.vercel.app',
    github: 'https://github.com/shubham007x/car-ai-dashboard',
    accent: '#0EA5E9',
  },
  {
    title: 'Teleworld',
    description: 'Comprehensive telecom management platform with service management, customer analytics, and operational dashboards.',
    technologies: ['React', 'Node.js', 'TypeScript', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=500&fit=crop',
    link: 'https://tele-world.vercel.app/',
    github: 'https://github.com/shubham007x/Teleworld',
    accent: '#10B981',
  },
  {
    title: 'Finance Analytics',
    description: 'Financial analytics dashboard with comprehensive data visualization, reporting, and decision-support tooling.',
    technologies: ['React', 'TypeScript', 'Chart.js', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    link: 'https://finance-analytics-shfg.vercel.app/',
    github: 'https://github.com/shubham007x/finance-analytics',
    accent: '#F59E0B',
  },
  {
    title: 'Alcazar',
    description: 'Travel & hotel booking website with location exploration, stay booking, and a clean responsive UI.',
    technologies: ['React', 'Tailwind CSS', 'Shadcn UI', 'Bootstrap', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=500&fit=crop',
    link: 'https://alcazar-masai.netlify.app/',
    github: 'https://github.com/shubham007x/Alcazar',
    accent: '#EC4899',
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const card = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="projects"
      ref={ref}
      style={{ background: 'var(--surface-alt)' }}
      className="relative overflow-hidden"
    >
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-[0.06] pointer-events-none"
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
            ◆ Work
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black font-heading"
            style={{ color: 'var(--text-primary)' }}
          >
            Featured Projects
          </h2>
          <p className="mt-4 text-base max-w-xl" style={{ color: 'var(--text-secondary)' }}>
            A selection of work that reflects my approach to building products.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={container}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {projects.map((project, i) => (
            <motion.article
              key={i}
              variants={card}
              className="glass-card overflow-hidden group flex flex-col"
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 280, damping: 22 }}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Colour tint overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{ background: project.accent }}
                />
                {/* Bottom fade */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-16"
                  style={{
                    background: `linear-gradient(to top, var(--surface) 0%, transparent 100%)`,
                  }}
                />
                {/* Accent dot */}
                <div
                  className="absolute top-3 left-3 w-2 h-2 rounded-full"
                  style={{ background: project.accent }}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5">
                <h3
                  className="text-lg font-bold font-heading mb-2"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-4 flex-1"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.map((tech, ti) => (
                    <span
                      key={ti}
                      className="px-2 py-0.5 rounded-md text-xs font-semibold border"
                      style={{
                        color: 'var(--text-muted)',
                        borderColor: 'var(--border)',
                        background: 'var(--surface-alt)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-3" style={{ borderTop: '1px solid var(--border)' }}>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-semibold transition-all duration-200"
                      style={{ color: 'var(--accent)' }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--accent-hover)'; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--accent)'; }}
                    >
                      Live Demo <ArrowUpRight />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-semibold transition-all duration-200"
                      style={{ color: 'var(--text-muted)' }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)'; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'; }}
                    >
                      GitHub <ArrowUpRight />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
