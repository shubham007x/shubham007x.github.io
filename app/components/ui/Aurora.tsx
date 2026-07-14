interface AuroraProps {
  /** 0–1 multiplier on top of the theme's --aurora-opacity token. */
  intensity?: number;
  className?: string;
}

export default function Aurora({ intensity = 1, className = '' }: AuroraProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{ opacity: intensity }}
    >
      <div
        className="aurora-blob"
        style={{
          top: '-12%',
          left: '-8%',
          width: 'min(45vw, 560px)',
          height: 'min(45vw, 560px)',
          background: 'var(--accent)',
          animationDuration: '26s',
        }}
      />
      <div
        className="aurora-blob"
        style={{
          bottom: '-18%',
          right: '-6%',
          width: 'min(40vw, 480px)',
          height: 'min(40vw, 480px)',
          background: 'var(--accent-3)',
          animationDuration: '32s',
          animationDelay: '-9s',
        }}
      />
      <div
        className="aurora-blob"
        style={{
          top: '28%',
          right: '24%',
          width: 'min(28vw, 340px)',
          height: 'min(28vw, 340px)',
          background: 'var(--accent-2)',
          animationDuration: '22s',
          animationDelay: '-15s',
        }}
      />
    </div>
  );
}
