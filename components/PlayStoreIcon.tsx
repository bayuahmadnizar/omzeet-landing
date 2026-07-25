export default function PlayStoreIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="playIconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00d2ff" />
          <stop offset="45%" stopColor="#00f076" />
          <stop offset="75%" stopColor="#ffcf00" />
          <stop offset="100%" stopColor="#ff3a44" />
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="5" fill="url(#playIconGrad)" />
      <polygon points="9,6.5 18,12 9,17.5" fill="white" />
    </svg>
  )
}
