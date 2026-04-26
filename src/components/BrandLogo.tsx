interface BrandLogoProps {
  className?: string;
  title?: string;
}

/**
 * VV Solar Solutions brand mark.
 * Inline SVG — crisp at any size, themable, no asset request.
 */
export const BrandLogo = ({ className, title = "VV Solar Solutions" }: BrandLogoProps) => (
  <svg
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label={title}
    className={className}
  >
    <title>{title}</title>
    {/* sun */}
    <circle cx="16" cy="16" r="8" fill="#FBBF24" />
    {/* solar panel */}
    <rect x="22" y="18" width="26" height="14" rx="2" fill="#0EA5E9" />
    <path
      d="M22 22h26M22 26h26M30 18v32M38 18v32"
      stroke="#1D4ED8"
      strokeWidth="1.5"
      opacity="0.6"
    />
    {/* VV letters */}
    <path
      d="M10 38l5 16 5-16"
      fill="none"
      stroke="#22C55E"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24 38l5 16 5-16"
      fill="none"
      stroke="#3B82F6"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* leaves */}
    <path
      d="M14 46c4 0 7 2 9 5"
      fill="none"
      stroke="#16A34A"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M20 44c1.5 0 3 .5 4.5 1.5"
      fill="none"
      stroke="#16A34A"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default BrandLogo;
