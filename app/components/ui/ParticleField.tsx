'use client';

import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

interface Particle {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  depth: number;
  twinklePhase: number;
  twinkleSpeed: number;
}

interface ParticleFieldProps {
  density?: number; // px of width per particle (lower = denser)
  className?: string;
}

export default function ParticleField({ density = 12, className = '' }: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let raf = 0;
    let inViewport = true;
    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const regenerate = () => {
      const count = Math.min(Math.floor(width / density), 120);
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: 0.4 + Math.random(),
        vx: (Math.random() - 0.5) * 0.06,
        vy: (Math.random() - 0.5) * 0.06,
        depth: 0.02 + Math.random() * 0.08,
        twinklePhase: Math.random() * Math.PI * 2,
        twinkleSpeed: 0.5 + Math.random() * 1.5,
      }));
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      regenerate();
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height);
      const rgb = getComputedStyle(document.documentElement)
        .getPropertyValue('--particle-color')
        .trim() || '196, 181, 253';
      const scroll = window.scrollY;
      for (const p of particles) {
        const alpha = 0.25 + 0.4 * (0.5 + 0.5 * Math.sin(t * 0.001 * p.twinkleSpeed + p.twinklePhase));
        // wrap positions around the edges as particles drift
        p.x = (p.x + p.vx + width) % width;
        p.y = (p.y + p.vy + height) % height;
        const py = (((p.y - scroll * p.depth) % height) + height) % height;
        ctx.beginPath();
        ctx.arc(p.x, py, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb}, ${alpha})`;
        ctx.fill();
      }
    };

    const shouldRun = () => inViewport && !document.hidden && !reduced;

    const loop = (t: number) => {
      if (!shouldRun()) {
        raf = 0;
        return;
      }
      draw(t);
      raf = requestAnimationFrame(loop);
    };

    const start = () => {
      if (!raf && shouldRun()) raf = requestAnimationFrame(loop);
    };

    const stop = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
    };

    resize();
    if (reduced) {
      draw(0); // single static frame
    } else {
      start();
    }

    const ro = new ResizeObserver(() => {
      resize();
      if (reduced) draw(0);
    });
    ro.observe(canvas);

    const io = new IntersectionObserver(([entry]) => {
      inViewport = entry.isIntersecting;
      if (inViewport) start();
      else stop();
    });
    io.observe(canvas);

    const onVisibility = () => {
      if (document.hidden) stop();
      else start();
    };
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [density, reduced]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
}
