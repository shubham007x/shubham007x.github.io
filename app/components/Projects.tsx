"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  // To use your own images:
  // 1. Place your project screenshots in: public/images/projects/
  // 2. Name them like: quickshow.jpg, car-ai-dashboard.jpg, etc.
  // 3. Update the image paths below to use: "/images/projects/your-image-name.jpg"
  // 4. Supported formats: .jpg, .jpeg, .png, .webp
  
  const projects = [
    {
      title: "QuickShow",
      description:
        "Movie Ticket Booking Platform - A full-stack movie and event ticket booking application. Includes user authentication, real-time seat selection, admin dashboard, and dynamic ticket availability.",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Clerk",
        "Inngest",
        "Tailwind",
      ],
      // Use local image: "/images/projects/quickshow.jpg" or keep Unsplash URL
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=600&fit=crop",
      link: "https://quickshow-client-gray.vercel.app/",
      github: "https://github.com/shubham007x/Quickshow",
    },
    {
      title: "Car AI Dashboard",
      description:
        "AI-Powered Car Image Editor - An AI-powered web app that lets users upload car photos and intelligently change the car color, modify the background, and blur number plates for privacy. Delivers a smooth and interactive image editing experience for automotive visualization.",
      technologies: ["React", "AI APIs", "TypeScript", "Tailwind CSS"],
      // Use local image: "/images/projects/car-ai-dashboard.jpg"
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop",
      link: "https://car-ai-dashboard.vercel.app",
      github: "https://github.com/shubham007x/car-ai-dashboard",
    },
    {
      title: "Teleworld",
      description:
        "Telecom Management Platform - A comprehensive telecommunications management system with advanced features for service management, customer analytics, and operational dashboards.",
      technologies: ["React", "Node.js", "TypeScript", "Tailwind CSS"],
      // Use local image: "/images/projects/teleworld.jpg"
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
      link: "https://tele-world.vercel.app/",
      github: "https://github.com/shubham007x/Teleworld",
    },
    {
      title: "Finance Analysis",
      description:
        "Financial Analytics Dashboard - A powerful financial analysis tool that provides comprehensive insights, data visualization, and reporting capabilities for financial data analysis and decision-making.",
      technologies: ["React", "TypeScript", "Chart.js", "Tailwind CSS"],
      // Use local image: "/images/projects/finance-analysis.jpg"
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      link: "https://finance-analytics-shfg.vercel.app/",
      github: "https://github.com/shubham007x/finance-analytics",
    },

    {
      title: "Alcazar",
      description:
        "Travel Booking Website - A travel and hotel booking website that lets users explore locations and book stays. Built with a focus on clean UI and responsiveness.",
      technologies: [
        "React",
        "Tailwind CSS",
        "Shadcn UI",
        "HTML",
        "JavaScript",
        "Bootstrap",
      ],
      // Use local image: "/images/projects/alcazar.jpg"
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
      link: "https://alcazar-masai.netlify.app/",
      github: "https://github.com/shubham007x/Alcazar",
    },
  ];

  return (
    <section
      ref={ref}
      id="projects"
      className="py-16 sm:py-24 md:py-32 bg-[#0a0a0a] border-t-2 border-[#FF6B00]/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-4 md:mb-6 tracking-widest uppercase drop-shadow-[0_0_10px_rgba(255,107,0,0.5)] px-4">
            FEATURED PROJECTS
          </h2>
          <motion.div
            className="w-32 h-1 bg-[#FF6B00] mx-auto shadow-[0_0_10px_rgba(255,107,0,0.5)]"
            initial={{ width: 0 }}
            animate={isInView ? { width: 128 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mt-4 md:mt-6 max-w-2xl mx-auto font-medium uppercase tracking-wider px-4">
            A COLLECTION OF PROJECTS SHOWCASING MY SKILLS AND EXPERIENCE
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group bg-[#050505] overflow-hidden border-2 border-[#FF6B00] hover:border-[#FF4500] transition-all duration-300 shadow-[0_0_15px_rgba(255,107,0,0.3)] hover:shadow-[0_0_25px_rgba(255,107,0,0.5)]"
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative w-full h-48 overflow-hidden bg-[#0a0a0a]">
                <Image
                  src={project.image}
                  alt={`${project.title} landing page screenshot`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-black text-[#FF6B00] mb-3 md:mb-4 tracking-widest uppercase">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-300 mb-4 md:mb-6 leading-relaxed font-medium">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1.5 bg-[#0a0a0a] text-[#FF6B00] text-xs font-bold uppercase tracking-wider border border-[#FF6B00]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-6">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#FF6B00] hover:text-[#FF4500] font-bold text-sm transition-colors uppercase tracking-wider flex items-center gap-1"
                    >
                      LIVE DEMO
                      <span>→</span>
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#FF6B00] font-bold text-sm transition-colors uppercase tracking-wider flex items-center gap-1"
                    >
                      GITHUB
                      <span>→</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
