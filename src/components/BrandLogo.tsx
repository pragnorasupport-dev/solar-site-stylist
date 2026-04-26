interface BrandLogoProps {
  className?: string;
  title?: string;
}

/**
 * VV Solar Solutions — premium brand mark.
 * Layered SVG: gold sun with rays, tilted solar panel with cell grid,
 * stylised "VV" monogram in brand blue + green, sweeping leaf accent.
 * Themable via CSS variables (see .brand-logo in index.css).
 */
export const BrandLogo = ({ className, title = "VV Solar Solutions" }: BrandLogoProps) => (
  <svg
    viewBox="0 0 80 80"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label={title}
    className={`brand-logo ${className ?? ""}`}
  >
    <title>{title}</title>
    <defs>
      <radialGradient id="vv-sun" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="var(--logo-sun-glow, #FFE08A)" />
        <stop offset="60%" stopColor="var(--logo-sun, #FBBF24)" />
        <stop offset="100%" stopColor="var(--logo-sun-edge, #F59E0B)" />
      </radialGradient>
      <linearGradient id="vv-panel" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="var(--logo-panel-1, #38BDF8)" />
        <stop offset="100%" stopColor="var(--logo-panel-2, #1D4ED8)" />
      </linearGradient>
      <linearGradient id="vv-v1" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="var(--logo-v1-1, #34D399)" />
        <stop offset="100%" stopColor="var(--logo-v1-2, #059669)" />
      </linearGradient>
      <linearGradient id="vv-v2" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="var(--logo-v2-1, #60A5FA)" />
        <stop offset="100%" stopColor="var(--logo-v2-2, #1D4ED8)" />
      </linearGradient>
      <filter id="vv-soft" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="0.5" />
      </filter>
    </defs>

    {/* sun rays */}
    <g
      stroke="var(--logo-sun, #FBBF24)"
      strokeWidth="1.6"
      strokeLinecap="round"
      opacity="0.85"
    >
      <line x1="20" y1="4" x2="20" y2="9" />
      <line x1="20" y1="31" x2="20" y2="36" />
      <line x1="4" y1="20" x2="9" y2="20" />
      <line x1="31" y1="20" x2="36" y2="20" />
      <line x1="8.5" y1="8.5" x2="12" y2="12" />
      <line x1="28" y1="28" x2="31.5" y2="31.5" />
      <line x1="31.5" y1="8.5" x2="28" y2="12" />
      <line x1="12" y1="28" x2="8.5" y2="31.5" />
    </g>

    {/* sun core */}
    <circle cx="20" cy="20" r="9" fill="url(#vv-sun)" />
    <circle cx="20" cy="20" r="9" fill="none" stroke="var(--logo-sun-edge, #F59E0B)" strokeWidth="0.6" opacity="0.6" />

    {/* solar panel — tilted for depth */}
    <g transform="rotate(-8 44 28)">
      <rect x="28" y="20" width="32" height="18" rx="2.5" fill="url(#vv-panel)" />
      <rect x="28" y="20" width="32" height="18" rx="2.5" fill="none" stroke="var(--logo-panel-line, #1E3A8A)" strokeWidth="0.8" />
      {/* cell grid */}
      <g stroke="var(--logo-panel-line, #1E3A8A)" strokeWidth="0.7" opacity="0.55">
        <line x1="28" y1="26" x2="60" y2="26" />
        <line x1="28" y1="32" x2="60" y2="32" />
        <line x1="36" y1="20" x2="36" y2="38" />
        <line x1="44" y1="20" x2="44" y2="38" />
        <line x1="52" y1="20" x2="52" y2="38" />
      </g>
      {/* highlight */}
      <path d="M30 22 L58 22" stroke="white" strokeWidth="0.6" opacity="0.4" strokeLinecap="round" />
    </g>

    {/* VV monogram */}
    <g filter="url(#vv-soft)">
      <path
        d="M12 46 L20 68 L28 46"
        fill="none"
        stroke="url(#vv-v1)"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30 46 L38 68 L46 46"
        fill="none"
        stroke="url(#vv-v2)"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    {/* leaf accent */}
    <path
      d="M48 60 C 54 58, 60 54, 64 46 C 60 56, 56 62, 50 64 Z"
      fill="var(--logo-leaf, #16A34A)"
      opacity="0.92"
    />
    <path
      d="M50 62 C 56 58, 60 52, 63 48"
      fill="none"
      stroke="var(--logo-leaf-vein, #064E3B)"
      strokeWidth="0.8"
      strokeLinecap="round"
      opacity="0.55"
    />
  </svg>
);

export default BrandLogo;
