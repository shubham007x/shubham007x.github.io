'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  SiReact,
  SiNextdotjs,
  SiFramer,
  SiRedux,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiJson,
  SiGit,
} from 'react-icons/si';
import { IconType } from 'react-icons';
import CountUp from '@/components/CountUp';

type Skill = {
  name: string;
  level: number;
  icon: IconType;
  color: string;
  category: string;
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut' as const,
      },
    },
  };

  const allSkills = [
    // Frontend
    { 
      name: "React.js", 
      level: 90, 
      icon: SiReact,
      color: "#61DAFB", 
      category: "Frontend" 
    },
    { 
      name: "Next.js", 
      level: 88, 
      icon: SiNextdotjs,
      color: "#000000", 
      category: "Frontend" 
    },
    { 
      name: "Framer Motion", 
      level: 85, 
      icon: SiFramer,
      color: "#0055FF", 
      category: "Frontend"
    },
    { 
      name: "Redux Toolkit", 
      level: 85, 
      icon: SiRedux,
      color: "#764ABC", 
      category: "Frontend" 
    },
    { 
      name: "TypeScript", 
      level: 88, 
      icon: SiTypescript,
      color: "#3178C6", 
      category: "Frontend" 
    },
    { 
      name: "JavaScript", 
      level: 92, 
      icon: SiJavascript,
      color: "#F7DF1E", 
      category: "Frontend" 
    },
    { 
      name: "HTML", 
      level: 95, 
      icon: SiHtml5,
      color: "#E34F26", 
      category: "Frontend" 
    },
    { 
      name: "CSS", 
      level: 95, 
      icon: SiCss3,
      color: "#1572B6", 
      category: "Frontend" 
    },
    { 
      name: "Tailwind CSS", 
      level: 90, 
      icon: SiTailwindcss,
      color: "#06B6D4", 
      category: "Frontend" 
    },
    
    // Backend
    { 
      name: "Node.js", 
      level: 85, 
      icon: SiNodedotjs,
      color: "#339933", 
      category: "Backend" 
    },
    { 
      name: "Express.js", 
      level: 85, 
      icon: SiExpress,
      color: "#000000", 
      category: "Backend" 
    },
    { 
      name: "REST APIs", 
      level: 88, 
      icon: SiJson,
      color: "#FF6B00", 
      category: "Backend" 
    },
    
    // Tools & Technologies
    { 
      name: "Git", 
      level: 90, 
      icon: SiGit,
      color: "#F05032", 
      category: "Tools" 
    },
  ];

  const getSkillLevelColor = (level: number) => {
    if (level >= 85) return '#FF6B00';
    if (level >= 75) return '#FF8C00';
    return '#FFA500';
  };

  return (
    <section
      ref={ref}
      id="skills"
      className="py-16 sm:py-24 md:py-32 bg-[#050505] border-t-2 border-[#FF6B00]/30 relative overflow-hidden"
    >
      {/* Background diagonal pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255, 107, 0, 0.1) 10px, rgba(255, 107, 0, 0.1) 20px)'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-4 md:mb-6 tracking-widest uppercase drop-shadow-[0_0_10px_rgba(255,107,0,0.5)] px-4">
            SKILLS & TECHNOLOGIES
          </h2>
          <motion.div
            className="w-32 h-1 bg-[#FF6B00] mx-auto shadow-[0_0_10px_rgba(255,107,0,0.5)]"
            initial={{ width: 0 }}
            animate={isInView ? { width: 128 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mt-4 md:mt-6 max-w-2xl mx-auto font-medium uppercase tracking-wider px-4">
            MASTERING THE TOOLS THAT POWER MODERN DEVELOPMENT
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {allSkills.map((skill, index) => {
            const levelColor = getSkillLevelColor(skill.level);
            
            return (
              <motion.div
                key={index}
                className="group relative bg-[#0a0a0a] border-2 border-[#FF6B00]/30 hover:border-[#FF6B00] transition-all duration-300 p-4 sm:p-6"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {/* Skill Icon */}
                <div className="flex flex-col items-center justify-center mb-4">
                  <div 
                    className="mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 w-12 h-12 flex items-center justify-center"
                  >
                    {skill.icon && (
                      <skill.icon 
                        className="w-12 h-12"
                        style={{ 
                          color: skill.color,
                          filter: skill.name === 'Next.js' || skill.name === 'Express.js' 
                            ? 'invert(1) brightness(0.9)' 
                            : 'none'
                        }}
                      />
                    )}
                  </div>
                  
                  {/* Skill Name */}
                  <h3 className="text-sm font-black text-white uppercase tracking-wider text-center mb-3 group-hover:text-[#FF6B00] transition-colors">
                    {skill.name}
                  </h3>
                </div>

                {/* Skill Level Bar */}
                <div className="relative">
                  <div className="w-full bg-[#050505] h-3 border border-[#FF6B00]/30 overflow-hidden">
                    <div
                      className="h-full transition-all duration-1000 ease-out relative overflow-hidden"
                      style={{ 
                        width: `${skill.level}%`,
                        backgroundColor: levelColor,
                        boxShadow: `0 0 10px ${levelColor}40`
                      }}
                    >
                      {/* Animated shine effect */}
                      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                    </div>
                  </div>
                  
                  {/* Level Percentage */}
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                      LEVEL
                    </span>
                    <span 
                      className="text-xs font-black uppercase tracking-wider"
                      style={{ color: levelColor }}
                    >
                      <CountUp
                        to={skill.level}
                        from={0}
                        duration={1.5}
                        delay={index * 0.05}
                        startWhen={isInView}
                        className="inline"
                      />%
                    </span>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 border-2 border-[#FF6B00] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Summary */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {[
            { 
              value: allSkills.length, 
              suffix: '', 
              label: 'TECHNOLOGIES' 
            },
            {
              value: Math.round(allSkills.reduce((acc, skill) => acc + skill.level, 0) / allSkills.length),
              suffix: '%',
              label: 'AVERAGE MASTERY',
            },
            {
              value: allSkills.filter(skill => skill.level >= 85).length,
              suffix: '',
              label: 'EXPERT LEVEL',
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-[#0a0a0a] border-2 border-[#FF6B00] p-8 text-center shadow-[0_0_15px_rgba(255,107,0,0.3)]"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-[#FF6B00] mb-3 tracking-widest">
                <CountUp
                  to={stat.value}
                  from={0}
                  duration={2}
                  delay={index * 0.2}
                  startWhen={isInView}
                  className="inline"
                />
                {stat.suffix}
              </div>
              <div className="text-sm text-gray-300 font-bold uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
