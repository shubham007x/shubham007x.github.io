'use client';

import { motion, useReducedMotion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  /** Extra class applied to each letter (e.g. gradient-text). */
  letterClassName?: string;
  /** Delay in seconds before the first letter animates. */
  delay?: number;
  stagger?: number;
}

export default function AnimatedText({
  text,
  className = '',
  letterClassName = '',
  delay = 0,
  stagger = 0.035,
}: AnimatedTextProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <span className={`${className} ${letterClassName}`}>{text}</span>;
  }

  const words = text.split(' ');
  let letterIndex = 0;

  return (
    <span className={className} aria-label={text} role="text">
      {words.map((word, wi) => (
        <span
          key={wi}
          aria-hidden="true"
          className="inline-block overflow-hidden align-bottom pb-[0.1em] -mb-[0.1em]"
        >
          {word.split('').map((ch, ci) => {
            const d = delay + letterIndex++ * stagger;
            return (
              <motion.span
                key={ci}
                className={`inline-block ${letterClassName}`}
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: d }}
              >
                {ch}
              </motion.span>
            );
          })}
          {wi < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </span>
  );
}
