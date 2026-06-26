'use client'

export function LogoWordmark({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-baseline gap-[0.4em] select-none ${className}`}>
      <span
        style={{
          fontFamily: 'var(--font-cinzel), "Palatino Linotype", Georgia, serif',
          fontWeight: 700,
          fontSize: '1.1rem',
          letterSpacing: '0.28em',
          background: 'linear-gradient(135deg, #dce2ea 0%, #c0c8d6 45%, #a0acba 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        TROVE
      </span>
      <span
        style={{
          fontFamily: 'var(--font-cinzel), "Palatino Linotype", Georgia, serif',
          fontWeight: 400,
          fontSize: '1.1rem',
          letterSpacing: '0.28em',
          color: '#6a7888',
        }}
      >
        COMPANY
      </span>
    </div>
  )
}

export function LogoFull({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center gap-1 select-none ${className}`}>
      <span
        style={{
          fontFamily: 'var(--font-cinzel), "Palatino Linotype", Georgia, serif',
          fontWeight: 700,
          fontSize: '1.6rem',
          letterSpacing: '0.45em',
          background: 'linear-gradient(135deg, #dce2ea 0%, #c0c8d6 45%, #a0acba 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        TROVE
      </span>

      <div className="flex items-center gap-2">
        <div style={{ width: 28, height: 0.8, background: 'linear-gradient(90deg, transparent, #4e5e6e)' }} />
        <span
          style={{
            fontFamily: 'var(--font-cinzel), Georgia, serif',
            fontWeight: 400,
            fontSize: '0.72rem',
            letterSpacing: '0.35em',
            color: '#6a7888',
          }}
        >
          COMPANY
        </span>
        <div style={{ width: 28, height: 0.8, background: 'linear-gradient(90deg, #4e5e6e, transparent)' }} />
      </div>

      <p
        style={{
          fontFamily: 'var(--font-inter), Arial, sans-serif',
          fontWeight: 300,
          fontSize: '0.52rem',
          letterSpacing: '0.22em',
          color: '#38485a',
          marginTop: 4,
        }}
      >
        ESTRATÉGIA. TECNOLOGIA. RESULTADOS.
      </p>
    </div>
  )
}
