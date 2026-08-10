// Small inline icon set used by Hero.jsx — plain SVGs, no external deps.

export function StarIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.2 22 12 18.27 5.8 22 7 14.14l-5-4.87 7.1-1.01L12 2z" />
    </svg>
  )
}

export function ReactIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" {...props}>
      <ellipse cx="12" cy="12" rx="10" ry="4.2" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="1.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function NodeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" {...props}>
      <path d="M12 2l8 4.6v10.8L12 22l-8-4.6V6.6L12 2z" />
      <path d="M9 12h6M9 9h3M9 15h4" strokeLinecap="round" />
    </svg>
  )
}

export function JsIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M9 9v7.2c0 1.5-1.8 1.7-2.6.6M17 9v5.3c0 1.6-2.4 1.9-3.2.5" strokeLinecap="round" />
    </svg>
  )
}

export function GitIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" {...props}>
      <circle cx="6" cy="6" r="2.2" />
      <circle cx="6" cy="18" r="2.2" />
      <circle cx="18" cy="10" r="2.2" />
      <path d="M6 8.2V15.8M6 8.2C6 11 8 12.5 10.5 12.5H15.8" strokeLinecap="round" />
    </svg>
  )
}

export function ArrowUpRightIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M7 17L17 7M17 7H8M17 7V16" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}