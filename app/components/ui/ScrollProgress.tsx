'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 40, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[2px] z-[70] origin-left pointer-events-none"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, var(--accent), var(--accent-2), var(--accent-3))',
        boxShadow: 'var(--glow-sm)',
      }}
    />
  );
}
