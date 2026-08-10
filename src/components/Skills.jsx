import { useEffect, useRef, useState } from 'react'
import RoomBackground from './RoomBackground.jsx'

const categories = [
  {
    icon: '💻',
    title: 'Frontend',
    items: [
      { letter: 'H', label: 'HTML5' },
      { letter: 'C', label: 'CSS3' },
      { letter: 'J', label: 'JavaScript' },
      { letter: 'R', label: 'React' },
      { letter: 'T', label: 'Tailwind CSS' },
    ],
  },
  {
    icon: '🗄️',
    title: 'Database',
    items: [
      { letter: 'S', label: 'SQL Server' },
      { letter: 'M', label: 'MySQL' },
    ],
  },
  {
    icon: '🛠️',
    title: 'Tools',
    items: [
      { letter: 'G', label: 'Git' },
      { letter: 'G', label: 'GitHub' },
      { letter: 'V', label: 'VS Code' },
      { letter: 'F', label: 'Figma' },
    ],
  },
  {
    icon: '📋',
    title: 'ERP & IT',
    items: [
      { letter: 'E', label: 'ERP System Implementation' },
      { letter: 'E', label: 'ERP Support' },
      { letter: 'I', label: 'IT Support' },
    ],
  },
]

const expertise = [
  { label: 'Frontend', value: 95 },
  { label: 'Problem Solving', value: 90 },
  { label: 'ERP & IT Support', value: 85 },
]

function Ring({ value, label, start }) {
  const size = 70
  const stroke = 5
  const r = (size - stroke) / 2
  const circumference = 2 * Math.PI * r
  const offset = circumference - (start ? value : 0) / 100 * circumference

  return (
    <div className="flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="currentColor" className="text-line" strokeWidth={stroke} />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke="url(#ringGradient)"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{ transition: 'stroke-dashoffset 1.2s ease' }}
          />
          <defs>
            <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff2d95" />
              <stop offset="100%" stopColor="#ff6ec7" />
            </linearGradient>
          </defs>
        </svg>
        <span className="absolute inset-0 flex items-center justify-center font-display text-base font-bold text-white">
          {value}%
        </span>
      </div>
      <p className="text-xs text-muted mt-2 font-semibold text-center">{label}</p>
    </div>
  )
}

export default function Skills() {
  const [visible, setVisible] = useState(false)
  const ringsRef = useRef(null)

  useEffect(() => {
    const el = ringsRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="relative overflow-hidden px-6 md:px-[8vw] py-10">
      <RoomBackground dim />

      <div className="relative z-10 max-w-xl mb-3 mx-auto text-center">
        
        <h2 className="font-mono text-xs text-hot2 tracking-[0.3em] mb-2">
          ✨ Skill<span className="text-hot2">s</span> ♥
        </h2>
        <p className="text-white mt-1.5 text-xs leading-relaxed">
          Technologies and tools I use to build modern and creative web experiences.
        </p>
      </div>

      <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {categories.map((cat) => (
          <div key={cat.title} className="panel p-3">
            <div className="flex flex-col items-center text-center mb-2">
              <div className="w-9 h-9 rounded-full flex items-center justify-center text-base mb-2 bg-gradient-to-br from-hot/40 to-hot2/40">
                {cat.icon}
              </div>
              <h3 className="font-display text-sm font-bold text-hot2">{cat.title}</h3>
              <span className="block w-6 h-0.5 bg-gradient-to-r from-hot to-hot2 rounded-full mt-1.5" />
            </div>
            <div className="flex flex-col gap-1.5">
              {cat.items.map((it, i) => (
                <div
                  key={it.label + i}
                  className="flex items-center gap-2 bg-bg1/70 border border-line rounded-md px-2.5 py-1.5"
                >
                  <span className="w-5 h-5 shrink-0 rounded bg-white/10 text-white text-[10px] font-bold flex items-center justify-center">
                    {it.letter}
                  </span>
                  <span className="text-xs text-muted leading-tight">{it.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-10 panel mt-4 p-4 sm:p-5">
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="w-7 h-7 rounded-full bg-gradient-to-br from-hot/40 to-hot2/40 flex items-center justify-center text-hot2 text-sm">
            ⭐
          </span>
          <h3 className="font-display text-base font-bold text-hot2">My Expertise</h3>
        </div>

        <div ref={ringsRef} className="flex flex-wrap justify-center gap-6 sm:gap-10">
          {expertise.map((e) => (
            <Ring key={e.label} value={e.value} label={e.label} start={visible} />
          ))}
        </div>
      </div>
    </section>
  )
}