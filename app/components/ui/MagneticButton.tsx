'use client';

import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

interface MagneticButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'ghost';
  href?: string;
  onClick?: () => void;
  className?: string;
  download?: string;
  target?: string;
  rel?: string;
  size?: 'sm' | 'md';
}

const isCoarsePointer = () =>
  typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;

export default function MagneticButton({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  download,
  target,
  rel,
  size = 'md',
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 150, damping: 15 });
  const sy = useSpring(y, { stiffness: 150, damping: 15 });
  const labelX = useTransform(sx, (v) => v * 0.5);
  const labelY = useTransform(sy, (v) => v * 0.5);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (reduced || isCoarsePointer()) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.3);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const sizeClasses =
    size === 'sm' ? 'px-4 py-1.5 text-sm' : 'px-7 py-3 text-base';
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide cursor-pointer select-none ${
    variant === 'primary' ? 'btn-primary' : 'btn-ghost'
  } ${sizeClasses} ${className}`;

  const inner = (
    <motion.span
      className="inline-flex items-center gap-2"
      style={{ x: labelX, y: labelY }}
    >
      {children}
    </motion.span>
  );

  const motionProps = {
    className: classes,
    style: { x: sx, y: sy },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    whileTap: { scale: 0.96 },
  };

  if (href) {
    return (
      <motion.a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        download={download}
        target={target}
        rel={rel}
        onClick={onClick}
        {...motionProps}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.Ref<HTMLButtonElement>}
      type="button"
      onClick={onClick}
      {...motionProps}
    >
      {inner}
    </motion.button>
  );
}
