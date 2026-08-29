import type { SVGProps } from 'react'

type ProductArtProps = SVGProps<SVGSVGElement> & {
  hue?: number
  label?: string
}

export function ProductArt({ hue = 195, label = 'Agrochemical formulation', ...props }: ProductArtProps) {
  return (
    <svg viewBox="0 0 640 360" role="img" aria-label={label} {...props}>
      <defs>
        <linearGradient id="product-art-body" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor={`hsl(${hue} 72% 58%)`} />
          <stop offset="1" stopColor={`hsl(${(hue + 35) % 360} 72% 38%)`} />
        </linearGradient>
        <linearGradient id="product-art-label" x1="0" x2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.96" />
          <stop offset="1" stopColor="#e8f4f7" stopOpacity="0.9" />
        </linearGradient>
        <filter id="product-art-shadow" x="-20%" y="-20%" width="140%" height="160%">
          <feDropShadow dx="0" dy="12" stdDeviation="12" floodOpacity="0.2" />
        </filter>
      </defs>
      <ellipse cx="320" cy="318" rx="190" ry="18" fill="#164e63" opacity="0.14" />
      <g filter="url(#product-art-shadow)" transform="translate(170 28)">
        <path d="M92 48h196l18 22v202c0 22-18 40-40 40H114c-22 0-40-18-40-40V70z" fill="url(#product-art-body)" />
        <path d="M92 48h196v42H92z" fill="#0f3b4d" opacity="0.42" />
        <path d="M126 28h128l16 20H110z" fill="#eaf8fa" opacity="0.9" />
        <path d="M144 12h92l18 16H126z" fill="#0f3b4d" opacity="0.9" />
        <rect x="96" y="116" width="188" height="122" rx="8" fill="url(#product-art-label)" />
        <rect x="112" y="134" width="90" height="8" rx="4" fill={`hsl(${hue} 62% 42%)`} />
        <text x="112" y="166" fill="#173b4b" fontSize="22" fontWeight="700" fontFamily="Arial, sans-serif">AGROSPEAR</text>
        <text x="112" y="190" fill="#45616d" fontSize="14" fontFamily="Arial, sans-serif">{label}</text>
        <path d="M112 210h72" stroke="#9ab4bc" strokeWidth="5" strokeLinecap="round" />
        <path d="M192 210h54" stroke={`hsl(${hue} 62% 42%)`} strokeWidth="5" strokeLinecap="round" />
        <circle cx="262" cy="164" r="10" fill={`hsl(${hue} 62% 42%)`} opacity="0.85" />
      </g>
    </svg>
  )
}
