'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import CountUp from '@/components/CountUp';

export default function About() {
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 200,
        damping: 15,
      },
    },
  };

  return (
    <section
      ref={ref}
      id="about"
      className="py-16 sm:py-24 md:py-32 bg-[#0a0a0a] border-t-2 border-[#FF6B00]/30 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#FF6B00] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FF4500] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-widest uppercase drop-shadow-[0_0_10px_rgba(255,107,0,0.5)]">
            ABOUT ME
          </h2>
          <motion.div
            className="w-32 h-1 bg-[#FF6B00] mx-auto shadow-[0_0_10px_rgba(255,107,0,0.5)]"
            initial={{ width: 0 }}
            animate={isInView ? { width: 128 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
        </motion.div>

        {/* Main Content - Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Profile Picture - Left Side */}
          <motion.div 
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="flex justify-center lg:justify-end order-2 lg:order-1 mb-8 lg:mb-0"
          >
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-2 md:-inset-4 bg-[#FF6B00] rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              
              {/* Image container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-4 border-[#FF6B00] shadow-[0_0_40px_rgba(255,107,0,0.4)] transform group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/projects/shubh.png?v=1"
                  alt="Profile Picture"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                  priority
                  unoptimized
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a]/60 via-transparent to-transparent"></div>
              </div>
              
              {/* Decorative corner elements - Hidden on mobile */}
              <div className="hidden md:block absolute -top-4 -left-4 w-8 h-8 border-t-4 border-l-4 border-[#FF6B00]"></div>
              <div className="hidden md:block absolute -bottom-4 -right-4 w-8 h-8 border-b-4 border-r-4 border-[#FF6B00]"></div>
            </div>
          </motion.div>

          {/* Content - Right Side */}
          <motion.div 
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="order-1 lg:order-2"
          >
            <motion.h3 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#FF6B00] mb-6 md:mb-8 tracking-widest uppercase"
              variants={itemVariants}
            >
              WHO I AM
            </motion.h3>
            
            <div className="space-y-4 md:space-y-6 mb-8 md:mb-10">
              <motion.p
                className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed font-medium"
                variants={itemVariants}
              >
                I'M AN <span className="text-[#FF6B00] font-bold">ELECTRONICS AND TELECOMMUNICATION ENGINEER</span> TURNED <span className="text-[#FF6B00] font-bold">SOFTWARE DEVELOPMENT ENGINEER</span> WITH A STRONG FOUNDATION IN ENGINEERING AND A LOVE FOR SOLVING COMPLEX PROBLEMS.
              </motion.p>
              <motion.p
                className="text-lg md:text-xl text-gray-300 leading-relaxed font-medium"
                variants={itemVariants}
              >
                WITH EXPERTISE IN MODERN WEB TECHNOLOGIES, I SPECIALIZE IN BUILDING SCALABLE APPLICATIONS THAT DELIVER EXCEPTIONAL USER EXPERIENCES.
              </motion.p>
              <motion.p
                className="text-lg md:text-xl text-gray-300 leading-relaxed font-medium"
                variants={itemVariants}
              >
                MY JOURNEY IN SOFTWARE DEVELOPMENT HAS BEEN DRIVEN BY CURIOSITY AND A COMMITMENT TO CONTINUOUS LEARNING. I ENJOY WORKING WITH CUTTING-EDGE TECHNOLOGIES AND CONTRIBUTING TO OPEN-SOURCE PROJECTS.
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* Stats Section - Full Width Below */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {[
            { number: 4, suffix: '+', label: 'Years Experience', icon: '🎯' },
            { number: 10, suffix: '+', label: 'Projects Completed', icon: '🚀' },
            { number: 15, suffix: '+', label: 'Technologies', icon: '⚡' },
            { number: 3, suffix: '', label: 'Companies', icon: '💼' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="group relative p-6 md:p-8 border-2 border-[#FF6B00]/50 bg-[#050505] shadow-[0_0_15px_rgba(255,107,0,0.2)] hover:border-[#FF6B00] hover:shadow-[0_0_25px_rgba(255,107,0,0.4)] transition-all duration-300"
              variants={statVariants}
              whileHover={{ scale: 1.05, y: -8 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {/* Background glow on hover */}
              <div className="absolute inset-0 bg-[#FF6B00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 text-center">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#FF6B00] mb-3 tracking-widest">
                  <CountUp
                    to={stat.number}
                    from={0}
                    duration={2}
                    delay={index * 0.15}
                    startWhen={isInView}
                    className="inline"
                  />
                  {stat.suffix}
                </div>
                <div className="text-sm text-gray-300 font-bold uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

