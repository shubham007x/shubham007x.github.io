"use client";

import Aurora from "@/components/Aurora";
import PixelBlast from "@/components/PixelBlast";
import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-[#0a0a0a] pt-16 sm:pt-20 overflow-hidden"
    >
      {/* Tactical Mesh Gradient Background - COD Theme */}
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={["#0a0a0a", "#1a1a1a", "#2d2d2d", "#0a0a0a"]}
          amplitude={0.8}
          blend={0.4}
          speed={1.0}
        />
      </div>

      {/* PixelBlast Effect - COD Theme - Reduced on mobile for performance */}
      <div className="absolute inset-0 z-0 opacity-30 md:opacity-80">
        <PixelBlast
          variant="square"
          pixelSize={6}
          color="#FF6B00"
          patternScale={2}
          patternDensity={0.4}
          enableRipples={false}
          rippleIntensityScale={0.6}
          rippleSpeed={0.2}
          speed={0.3}
          transparent={true}
          edgeFade={0.3}
          className="w-full h-full hidden sm:block"
        />
      </div>

      {/* Military grid overlay */}
      <div className="absolute inset-0 z-1 pointer-events-none opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255, 107, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 107, 0, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Tactical crosshair pattern */}
      <div className="absolute inset-0 z-1 pointer-events-none opacity-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-[#FF6B00]/30">
          <div className="absolute top-1/2 left-0 w-full h-px bg-[#FF6B00]/20"></div>
          <div className="absolute top-0 left-1/2 w-px h-full bg-[#FF6B00]/20"></div>
        </div>
      </div>

      {/* Additional gradient overlay for depth */}
      <div className="absolute inset-0 z-1 bg-linear-to-b from-transparent via-[#0a0a0a]/70 to-[#0a0a0a] pointer-events-none"></div>

      {/* Subtle tactical scan effect */}
      <div className="absolute inset-0 z-1 pointer-events-none opacity-15">
        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-[#FF6B00] to-transparent animate-tacticalScan"></div>
      </div>

      {/* Scanline effect */}
      <div className="absolute inset-0 z-20 pointer-events-none opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 107, 0, 0.1) 2px, rgba(255, 107, 0, 0.1) 4px)",
          }}
        ></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="mb-6 md:mb-8" variants={logoVariants}>
            <div className="inline-block mb-4 md:mb-6">
              <div className="w-24 h-24 md:w-32 md:h-32 mx-auto bg-linear-to-br from-[#FF6B00] to-[#FF4500] flex items-center justify-center text-black text-3xl md:text-4xl font-black border-4 border-[#FF6B00] shadow-[0_0_20px_rgba(255,107,0,0.5)]">
                SA
              </div>
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white mb-4 md:mb-6 tracking-wider uppercase drop-shadow-[0_0_10px_rgba(255,107,0,0.5)] px-4"
            variants={itemVariants}
          >
            SHUBHAM AGDARI
          </motion.h1>

          <motion.h2
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#FF6B00] mb-6 md:mb-8 tracking-widest uppercase px-4"
            variants={itemVariants}
          >
            SOFTWARE DEVELOPMENT ENGINEER
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed font-medium px-4"
            variants={itemVariants}
          >
            BUILDING EXCEPTIONAL DIGITAL EXPERIENCES THROUGH CLEAN CODE AND
            INNOVATIVE SOLUTIONS.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
            variants={itemVariants}
          >
            <a
              href="#projects"
              className="px-6 py-3 sm:px-8 sm:py-4 bg-[#FF6B00] text-black font-bold hover:bg-[#FF4500] transition-all duration-300 text-base sm:text-lg uppercase tracking-wider border-2 border-[#FF6B00] shadow-[0_0_15px_rgba(255,107,0,0.5)] hover:shadow-[0_0_25px_rgba(255,107,0,0.8)] text-center"
            >
              VIEW MY WORK
            </a>
            <a
              href="#contact"
              className="px-6 py-3 sm:px-8 sm:py-4 bg-transparent border-2 border-[#FF6B00] text-[#FF6B00] font-bold hover:bg-[#FF6B00] hover:text-black transition-all duration-300 text-base sm:text-lg uppercase tracking-wider shadow-[0_0_10px_rgba(255,107,0,0.3)] text-center"
            >
              GET IN TOUCH
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
