interface BrandLogoProps {
  className?: string;
  title?: string;
}

/**
 * VV Solar Solutions brand mark.
 * Uses CSS variables so colors adapt to theme + hover.
 * Override per-instance via inline style or parent class:
 *   --logo-sun, --logo-panel, --logo-panel-line,
 *   --logo-v1, --logo-v2, --logo-leaf
 */
export const BrandLogo = ({ className, title = "VV Solar Solutions" }: BrandLogoProps) => (
  <svg
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label={title}
    className={`brand-logo ${className ?? ""}`}
  >
    <title>{title}</title>
    {/* sun */}
    <circle cx="16" cy="16" r="8" fill="var(--logo-sun)" />
    {/* solar panel */}
    <rect x="22" y="18" width="26" height="14" rx="2" fill="var(--logo-panel)" />
    <path
      d="M22 22h26M22 26h26M30 18v32M38 18v32"
      stroke="var(--logo-panel-line)"
      strokeWidth="1.5"
      opacity="0.6"
    />
    {/* VV letters */}
    <path
      d="M10 38l5 16 5-16"
      fill="none"
      stroke="var(--logo-v1)"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24 38l5 16 5-16"
      fill="none"
      stroke="var(--logo-v2)"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* leaves */}
    <path
      d="M14 46c4 0 7 2 9 5"
      fill="none"
      stroke="var(--logo-leaf)"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M20 44c1.5 0 3 .5 4.5 1.5"
      fill="none"
      stroke="var(--logo-leaf)"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default BrandLogo;
