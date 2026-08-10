import { useEffect, useState } from 'react'

const links = ['Home', 'About', 'Services', 'Projects', 'Skills', 'Contact']

export default function Navbar() {
  const [active, setActive] = useState('Home')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => {
      let current = 'Home'
      for (const l of links) {
        const el = document.getElementById(l.toLowerCase())
        if (el && window.scrollY + 140 >= el.offsetTop) current = l
      }
      setActive(current)
    }
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-[8vw] py-5 bg-bg0/80 backdrop-blur-md border-b border-line">
      <a href="#home" className="font-display font-extrabold text-xl flex items-center gap-2">
        <span className="text-hot2">♥</span> Bezawit.
      </a>

      <nav className="hidden md:block">
        <ul className="flex gap-8">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className={`text-sm font-medium pb-1 relative transition-colors ${
                  active === l ? 'text-white' : 'text-muted hover:text-white'
                }`}
              >
                {l}
                {active === l && (
                  <span className="absolute left-0 right-0 -bottom-1 h-0.5 rounded bg-gradient-to-r from-hot to-violet" />
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <button
        className="md:hidden text-2xl"
        aria-label="Toggle menu"
        onClick={() => setOpen((o) => !o)}
      >
        ☰
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 bg-bg0 border-b border-line md:hidden">
          <ul className="flex flex-col p-4 gap-3">
            {links.map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className={`block text-sm font-medium ${
                    active === l ? 'text-hot2' : 'text-muted'
                  }`}
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
