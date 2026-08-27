import React from 'react'

const LOGO_URL = '/apple-touch-icon.png'

function LogoInner({ size = 18, compact = false }: { size?: number; compact?: boolean }) {
  return (
    <span
      className="inline-flex items-center gap-[9px] font-display font-semibold tracking-[-0.3px] text-foreground"
      style={{ fontSize: size }}
    >
      <img
        src={LOGO_URL}
        alt="Agrospear"
        width={32}
        height={32}
        className="shrink-0 rounded"
        loading="eager"
      />
      {!compact && (
        <span>
          Agro<span className="font-medium opacity-[0.62]">spear</span>
        </span>
      )}
    </span>
  )
}
export const Logo = React.memo(LogoInner)
