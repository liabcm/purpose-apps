type P = { size?: number }

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
})

export const ArrowUpRight = ({ size = 15 }: P) => (
  <svg {...base(size)} className="arrow">
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
)

export const Sun = ({ size = 17 }: P) => (
  <svg {...base(size)}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
)

export const Moon = ({ size = 17 }: P) => (
  <svg {...base(size)}>
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
  </svg>
)

export const Mail = ({ size = 15 }: P) => (
  <svg {...base(size)}>
    <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
    <path d="m3.5 7 8.5 6 8.5-6" />
  </svg>
)

export const Github = ({ size = 15 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 1.8a10.2 10.2 0 0 0-3.23 19.88c.51.1.7-.22.7-.49l-.01-1.9c-2.6.5-3.28-.63-3.5-1.21-.12-.3-.63-1.22-1.08-1.47-.36-.2-.88-.68-.01-.7.82-.01 1.4.75 1.6 1.06.93 1.57 2.42 1.13 3.02.86.09-.68.36-1.13.66-1.39-2.3-.26-4.71-1.15-4.71-5.11 0-1.13.4-2.06 1.06-2.78-.1-.26-.46-1.32.1-2.74 0 0 .87-.27 2.85 1.06a9.6 9.6 0 0 1 5.19 0c1.98-1.34 2.85-1.06 2.85-1.06.57 1.42.21 2.48.1 2.74.66.72 1.06 1.64 1.06 2.78 0 3.97-2.42 4.85-4.72 5.11.37.32.7.94.7 1.91l-.01 2.83c0 .27.19.6.7.49A10.2 10.2 0 0 0 12 1.8Z" />
  </svg>
)

export const Linkedin = ({ size = 15 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM2.9 21.5h4.16V10.1H2.9V21.5Zm7.02 0h4.16v-6.32c0-1.67.32-3.29 2.38-3.29 2.04 0 2.06 1.9 2.06 3.4v6.21h4.16v-7.05c0-3.6-.78-6.38-5-6.38-2.03 0-3.39 1.12-3.95 2.18h-.06V10.1H9.92V21.5Z" />
  </svg>
)

export const Pin = ({ size = 15 }: P) => (
  <svg {...base(size)}>
    <path d="M12 21s7-5.4 7-10.5a7 7 0 1 0-14 0C5 15.6 12 21 12 21Z" />
    <circle cx="12" cy="10.5" r="2.6" />
  </svg>
)
