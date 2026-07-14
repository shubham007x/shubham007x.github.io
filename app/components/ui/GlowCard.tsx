'use client';

import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import { useRef, type CSSProperties, type ReactNode } from 'react';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  /** Enable subtle 3D tilt toward the cursor (skip for large panels). */
  tilt?: boolean;
  /** Override the neon border color for this card (e.g. per-project accent). */
  spotColor?: string;
  style?: CSSProperties;
}

const isCoarsePointer = () =>
  typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;

export default function GlowCard({
  children,
  className = '',
  tilt = false,
  spotColor,
  style,
}: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rotateX = useSpring(rx, { stiffness: 150, damping: 20 });
  const rotateY = useSpring(ry, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty('--mouse-x', `${x}px`);
    el.style.setProperty('--mouse-y', `${y}px`);

    if (tilt && !reduced && !isCoarsePointer()) {
      rx.set(((y - rect.height / 2) / (rect.height / 2)) * -6);
      ry.set(((x - rect.width / 2) / (rect.width / 2)) * 6);
    }
  };

  const handleMouseLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`spotlight-card glass-card ${className}`}
      style={{
        ...(spotColor ? ({ '--spot-color': spotColor } as CSSProperties) : {}),
        rotateX,
        rotateY,
        transformPerspective: 900,
        ...style,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="spotlight-border" aria-hidden="true" />
      <div className="spotlight-surface" aria-hidden="true" />
      {children}
    </motion.div>
  );
}
