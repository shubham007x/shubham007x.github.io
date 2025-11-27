'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  };

  const experiences = [
    {
      title: 'Software Development Engineer',
      company: 'Wantace',
      location: 'Gurugram',
      period: 'November 2025 - Present',
      description: [
        'Developing scalable software solutions using modern technologies',
        'Collaborating with cross-functional teams to deliver high-quality products',
        'Implementing best practices in software development and code quality',
      ],
    },
    {
      title: 'Frontend Developer',
      company: 'Futy',
      location: 'Remote',
      period: 'May 2024 - August 2024',
      description: [
        'Built reusable and responsive UI components using React, TypeScript, and Tailwind CSS',
        'Integrated REST APIs for real-time updates with low latency',
        'Implemented interactive UI features like reward chests and quiz timers',
      ],
    },
    {
      title: 'Senior Analyst',
      company: 'Capgemini',
      location: 'Pune / Hybrid',
      period: 'Mar 2023 - May 2025',
      description: [
        'Developed enterprise tools using React and Redux Toolkit',
        'Integrated RESTful APIs and enabled efficient data flow',
        'Worked cross-functionally in agile teams',
      ],
    },
    {
      title: 'Analyst',
      company: 'Capgemini',
      location: 'Mumbai / Hybrid',
      period: 'Aug 2021 - Mar 2023',
      description: [
        'Supported Windows-based enterprise apps in RDS environments',
        'Resolved incidents and performance issues',
        'Collaborated with infrastructure teams for optimization',
      ],
    },
  ];

  return (
    <section
      ref={ref}
      id="experience"
      className="py-16 sm:py-24 md:py-32 bg-[#050505] border-t-2 border-[#FF6B00]/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-4 md:mb-6 tracking-widest uppercase drop-shadow-[0_0_10px_rgba(255,107,0,0.5)] px-4">
            WORK EXPERIENCE
          </h2>
          <motion.div
            className="w-32 h-1 bg-[#FF6B00] mx-auto shadow-[0_0_10px_rgba(255,107,0,0.5)]"
            initial={{ width: 0 }}
            animate={isInView ? { width: 128 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mt-4 md:mt-6 max-w-2xl mx-auto font-medium uppercase tracking-wider px-4">
            MY PROFESSIONAL JOURNEY AND KEY ACHIEVEMENTS
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <motion.div
            className="absolute left-4 sm:left-8 md:left-1/2 top-0 bottom-0 w-0.5 sm:w-1 bg-[#FF6B00] transform md:-translate-x-1/2 shadow-[0_0_10px_rgba(255,107,0,0.5)]"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ transformOrigin: 'top' }}
          ></motion.div>

          <motion.div
            className="space-y-12 sm:space-y-16"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative flex items-center"
                variants={itemVariants}
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-2 sm:left-4 md:left-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-[#FF6B00] transform md:-translate-x-1/2 z-10 border-2 border-[#0a0a0a] shadow-[0_0_15px_rgba(255,107,0,0.8)]"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.7 + index * 0.2 }}
                ></motion.div>

                {/* Content */}
                <div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  } pl-12 sm:pl-16 md:pl-0`}
                >
                  <div className="bg-[#0a0a0a] p-6 sm:p-8 border-2 border-[#FF6B00] shadow-[0_0_15px_rgba(255,107,0,0.3)]">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 md:mb-4">
                      <h3 className="text-xl sm:text-2xl font-black text-[#FF6B00] tracking-widest uppercase">
                        {exp.title}
                      </h3>
                      <span className="text-xs sm:text-sm text-gray-400 mt-1 md:mt-0 font-bold uppercase tracking-wider">
                        {exp.period}
                      </span>
                    </div>
                    <div className="text-[#FF6B00] font-bold mb-4 md:mb-6 text-base sm:text-lg uppercase tracking-wider">
                      {exp.company} • {exp.location}
                    </div>
                    <ul className="list-none space-y-2 sm:space-y-3 text-gray-300 font-medium text-sm sm:text-base">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="text-[#FF6B00] mr-2 sm:mr-3 mt-1 sm:mt-1.5 font-black flex-shrink-0">▶</span>
                          <span className="uppercase tracking-wide">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

