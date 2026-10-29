/* Official logo artwork (Krona One wordmark + T monogram), exported from the brand kit as outlined SVG. */

export function LogoWordmark({ className = '' }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/brand/trove-horizontal-prata.svg" alt="Trove Company" width={741} height={180} className={`h-9 w-auto select-none ${className}`} />
  )
}

export function LogoFull({ className = '' }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/brand/trove-vertical-slogan-prata.svg" alt="Trove Company — Estratégia. Tecnologia. Resultados." width={764} height={490} className={`h-auto select-none ${className}`} />
  )
}
