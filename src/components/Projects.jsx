import { useRef } from 'react'
import RoomBackground from './RoomBackground.jsx'

// Replace with your real projects, links, and screenshots.
const PROJECTS = [
  {
    title: 'E-Commerce Platform',
    description:
      'A user-friendly e-commerce platform with admin-controlled product management, seamless browsing, cart, and secure checkout.',
    tags: ['#react', '#node', '#mongodb'],
    emoji: '🛒',
    github: '#',
    live: '#',
  },
  {
    title: 'Personal Website',
    description:
      'A responsive personal portfolio showcasing my projects, skills, and experience through a clean, modern interface.',
    tags: ['#react', '#tailwindcss', '#vite'],
    emoji: '🌐',
    github: '#',
    live: '#',
  },
  {
    title: 'Fashion Store',
    description:
      'An elegant fashion storefront with product catalog, filtering, wishlists, and a smooth checkout experience.',
    tags: ['#react', '#stripe', '#tailwindcss'],
    emoji: '👗',
    github: '#',
    live: '#',
  },
]

function ProjectCard({ project }) {
  const ref = useRef(null)

  const handleMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    el.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className="rounded-xl border border-line bg-panel/70 overflow-hidden hover:border-hot2 hover:shadow-glow transition-all"
      style={{
        backgroundImage:
          'radial-gradient(300px circle at var(--mx, 50%) var(--my, 50%), rgba(255,45,149,0.1), transparent 60%)',
      }}
    >
      {/* preview area — swap for <img src="..." className="w-full h-full object-cover" /> */}
      <div className="relative h-32 sm:h-36 bg-gradient-to-br from-panel to-bg1 flex items-center justify-center border-b border-line">
        <span className="text-4xl opacity-80">{project.emoji}</span>

        <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            aria-label="View source on GitHub"
            className="w-7 h-7 rounded-full bg-bg0/80 border border-hot2/40 flex items-center justify-center text-[10px] font-bold text-hot2 hover:bg-hot2 hover:text-bg0 transition-colors"
          >
            GH
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="px-2 h-7 rounded-full bg-hot2 text-bg0 flex items-center gap-1 text-[10px] font-bold"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-bg0 animate-pulse" />
            LIVE
          </a>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-display text-base font-bold text-white mb-1.5">{project.title}</h3>
        <p className="text-xs text-muted leading-5 mb-3">{project.description}</p>
        <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs font-mono">
          {project.tags.map((tag) => (
            <span key={tag} className="text-hot2">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden px-6 md:px-[8vw] py-14 border-t border-line">
      <RoomBackground dim />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <p className="font-mono text-xs text-hot2 tracking-[0.3em] mb-2">✨ Projects </p>
        <h2 className="text-white text-sm leading-6 max-w-2xl mx-auto mb-8">
          A few things I've built recently — from e-commerce platforms to personal
          sites and storefronts, each one deployed end-to-end with the code and a
          live demo linked below.
        </h2> 

        <div className="grid sm:grid-cols-3 gap-5">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
