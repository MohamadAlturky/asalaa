import { useId } from 'react'

/** Decorative icon: golden sunburst frame + lamp (shared for all category tiles). */
export function CategoryFeatureIcon() {
  const uid = useId().replace(/:/g, '')
  const frameId = `cfFrame-${uid}`
  const lampId = `cfLamp-${uid}`
  const glowId = `cfGlow-${uid}`

  return (
    <svg
      viewBox="0 0 88 88"
      width="88"
      height="88"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id={frameId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e8c56a" />
          <stop offset="55%" stopColor="#b8892a" />
          <stop offset="100%" stopColor="#8a6320" />
        </linearGradient>
        <linearGradient id={lampId} x1="30%" y1="0%" x2="70%" y2="100%">
          <stop offset="0%" stopColor="#f2e6a8" />
          <stop offset="100%" stopColor="#c9a74a" />
        </linearGradient>
        <radialGradient id={glowId} cx="50%" cy="35%" r="55%">
          <stop offset="0%" stopColor="#fff6cc" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#fff6cc" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="44" cy="44" r="40" fill={`url(#${glowId})`} />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <path
          key={deg}
          d="M44 6 L48 22 L44 18 L40 22 Z"
          fill={`url(#${frameId})`}
          transform={`rotate(${deg} 44 44)`}
        />
      ))}
      <circle cx="44" cy="44" r="30" fill="none" stroke={`url(#${frameId})`} strokeWidth="2.2" />
      <circle cx="44" cy="44" r="24" fill="#2a2418" opacity="0.35" />
      <path
        d="M44 28c-6 0-10 4.5-10 10v14h20V38c0-5.5-4-10-10-10z"
        fill={`url(#${lampId})`}
        stroke="#7a5c18"
        strokeWidth="0.6"
      />
      <ellipse cx="44" cy="54" rx="12" ry="4" fill={`url(#${lampId})`} opacity="0.9" />
      <path d="M38 58h12v6c0 2-2.5 4-6 4s-6-2-6-4v-6z" fill={`url(#${frameId})`} />
    </svg>
  )
}
