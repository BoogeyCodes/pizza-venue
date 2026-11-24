export default function Logo({ size = 30, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        d="M24 6c-7 0-12 5.3-12 12 0 8.6 12 23 12 23s12-14.4 12-23c0-6.7-5-12-12-12z"
        fill="#ff2a2a"
      />
      <circle cx="24" cy="18.5" r="7.6" fill="#ffc01e" />
      <circle cx="20.8" cy="16.6" r="1.2" fill="#c81414" />
      <circle cx="26.4" cy="19.8" r="1.2" fill="#c81414" />
      <circle cx="24.4" cy="14.8" r="1.2" fill="#c81414" />
      <circle cx="21.4" cy="21" r="1.2" fill="#8a0f0f" />
    </svg>
  )
}
