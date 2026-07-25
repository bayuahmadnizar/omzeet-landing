export default function PlayStoreIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" className={className} aria-hidden="true">
      <path
        d="M31 18C22 23 16 32 16 43v426c0 11 6 20 15 25l245-247L31 18z"
        fill="#4285F4"
      />
      <path
        d="M31 18l245 229 87-87c11-11 11-28 0-38L60 5C50 0 40 1 31 18z"
        fill="#34A853"
      />
      <path
        d="M363 160l-87 87 87 87 96-54c17-10 22-32 12-49-4-6-9-11-15-14l-93-57z"
        fill="#FBBC04"
      />
      <path
        d="M276 247L31 494c9 17 19 18 29 13l303-171-87-89z"
        fill="#EA4335"
      />
    </svg>
  )
}
