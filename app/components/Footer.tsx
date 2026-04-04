'use client';

/* ─── Brand icon glyphs ─── */
const GitHubGlyph = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedInGlyph = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const MailGlyph = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const navLinks = [
  { name: 'Home',       id: 'home'       },
  { name: 'About',      id: 'about'      },
  { name: 'Skills',     id: 'skills'     },
  { name: 'Projects',   id: 'projects'   },
  { name: 'Experience', id: 'experience' },
  { name: 'Contact',    id: 'contact'    },
];

const socials = [
  { Icon: GitHubGlyph,   href: 'https://github.com/shubham007x',                    label: 'GitHub'   },
  { Icon: LinkedInGlyph, href: 'https://linkedin.com/in/shubham-agdari-30500617b', label: 'LinkedIn' },
  { Icon: MailGlyph,     href: 'mailto:shubham.agdari@gmail.com',                   label: 'Email'    },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scroll = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer
      className="relative"
      style={{
        background: 'var(--background)',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <button
              onClick={() => scroll('home')}
              className="font-heading font-black text-2xl tracking-widest mb-3 block"
              style={{ color: 'var(--text-primary)' }}
            >
              S<span style={{ color: 'var(--accent)' }}>A</span>
            </button>
            <p className="text-sm leading-relaxed max-w-[220px]" style={{ color: 'var(--text-secondary)' }}>
              Software Development Engineer building scalable, delightful web experiences.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: 'var(--text-muted)' }}>
              Navigation
            </p>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => scroll(l.id)}
                    className="text-sm font-medium transition-colors duration-200"
                    style={{ color: 'var(--text-secondary)' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--accent)'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)'; }}
                  >
                    {l.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: 'var(--text-muted)' }}>
              Connect
            </p>
            <div className="flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center border transition-all duration-200"
                  style={{ color: 'var(--text-secondary)', borderColor: 'var(--border)', background: 'transparent' }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)';
                    (e.currentTarget as HTMLElement).style.color = 'var(--accent)';
                    (e.currentTarget as HTMLElement).style.background = 'var(--accent-bg)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                    (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)';
                    (e.currentTarget as HTMLElement).style.background = 'transparent';
                  }}
                >
                  <Icon />
                </a>
              ))}
            </div>

            <p className="mt-6 text-sm" style={{ color: 'var(--text-muted)' }}>
              📍 Chandrapur, India
            </p>
            <a
              href="mailto:shubham.agdari@gmail.com"
              className="text-sm mt-1 block transition-colors duration-200"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--accent)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)'; }}
            >
              shubham.agdari@gmail.com
            </a>
          </div>
        </div>

        {/* Divider + copyright */}
        <div
          className="mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            © {year} Shubham Agdari. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            Built with Next.js + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
