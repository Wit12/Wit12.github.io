import { useEffect, useRef, useState } from 'react'
import { ArrowUpRightIcon } from './Icons.jsx'

const STATS = [
  { value: 1, suffix: '+', label: 'Years Experience' },
  { value: 3, suffix: '+', label: 'Projects Completed' },
  { value: 10, suffix: '+', label: 'Technologies' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
]

function useCountUp(target, start) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) return
    let raf
    const duration = 1400
    const startTime = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(target * eased))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [start, target])

  return value
}

function Stat({ value, suffix, label, start }) {
  const count = useCountUp(value, start)
  return (
    <div>
      <p className="font-display text-2xl sm:text-3xl font-bold text-hot2">
        {count}
        {suffix}
      </p>
      <p className="text-xs sm:text-sm text-muted mt-1">{label}</p>
    </div>
  )
}

export default function Hero() {
  const [statsVisible, setStatsVisible] = useState(false)
  const statsRef = useRef(null)

  useEffect(() => {
    const el = statsRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-[92vh] flex items-center px-6 md:px-[8vw] pt-16 pb-20"
    >
      {/* self-contained fallback animation so this file works even without index.css edits */}
      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-fade { animation: heroFadeUp 0.7s ease forwards; opacity: 0; }
      `}</style>

      {/* background photo */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />
      {/* readability overlay, using the site's existing dark/pink palette */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-bg0 via-bg0/70 to-bg0/15" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-bg0/90 via-transparent to-bg0/40" />

      <div className="relative z-10 max-w-2xl">
        <div
          className="hero-fade inline-flex items-center gap-2 px-4 py-2 rounded-full bg-hot2/90 text-bg0 text-xs sm:text-sm font-semibold mb-7"
        >
          <span>👩‍💻</span>
          <span>Women in Tech | 🌸She Codes</span>
        </div>

        <h1
          className="hero-fade font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-4"
          style={{ animationDelay: '0.1s' }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-hot via-hot2 to-white">
            👋 Hi, I'm Beza
          </span>
        </h1>

        <p
          className="hero-fade font-display text-xl sm:text-2xl font-bold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-hot via-hot2 to-violet"
          style={{ animationDelay: '0.15s' }}
        >
          Software Developer | Problem Solver | Lifelong Learner
        </p>

        <p
          className="hero-fade text-muted text-base sm:text-lg leading-7 max-w-xl mb-8"
          style={{ animationDelay: '0.25s' }}
        >
          Crafting beautiful, scalable, and impactful web applications.
        </p>

        <div className="hero-fade flex flex-wrap items-center gap-4 mb-12" style={{ animationDelay: '0.3s' }}>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn btn-primary"
          >
            Get in Touch
          </button>
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn btn-ghost"
          >
            View Work
            <ArrowUpRightIcon className="w-4 h-4" />
          </button>
        </div>

        <div ref={statsRef} className="hero-fade grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-xl" style={{ animationDelay: '0.35s' }}>
          {STATS.map((stat) => (
            <Stat key={stat.label} {...stat} start={statsVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}