import RoomBackground from './RoomBackground.jsx'

const SERVICES = [
  {
    icon: '💻',
    title: 'Web Development',
    description:
      'Fast, responsive, SEO-friendly websites using modern technologies.',
    listLabel: 'What I offer',
    items: ['Business Websites', 'Landing Pages', 'E-commerce', 'Admin Dashboards'],
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    description:
      'Beautiful, intuitive, user-centered interfaces that improve experience.',
    listLabel: 'What I offer',
    items: ['Design Systems', 'Mobile App Design', 'Dashboard Design'],
  },
  {
    icon: '🏷️',
    title: 'Logo & Brand Identity',
    description:
      'Memorable logos and visual identities that make brands stand out.',
    listLabel: 'Services',
    items: ['Logo Design', 'Brand Guidelines', 'Social Media Branding'],
  },
]

function ServiceCard({ icon, title, description, listLabel, items }) {
  return (
    <div className="relative pt-7">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-16 h-16 rounded-full accent-blob"
        aria-hidden="true"
      />

      <div className="relative rounded-xl border border-line bg-panel/80 pt-8 pb-5 px-4 h-full flex flex-col items-center text-center">
        <div className="w-11 h-11 -mt-11 mb-3 rounded-full border-2 border-hot2 bg-bg0 flex items-center justify-center text-base shadow-glow">
          {icon}
        </div>

        <h3 className="font-display text-base font-bold text-hot2 mb-2">{title}</h3>
        <p className="text-xs text-muted leading-5 mb-3">{description}</p>

        <div className="w-full text-left mb-3">
          <p className="text-[10px] uppercase tracking-widest text-hot2 font-semibold mb-2">
            {listLabel}
          </p>
          <ul className="space-y-1">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-2 text-xs text-muted">
                <span className="mt-1 w-1 h-1 rounded-full bg-hot2 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="mt-auto inline-flex items-center px-4 py-1.5 rounded-full border border-hot2 text-hot2 text-xs font-medium hover:bg-hot2 hover:text-bg0 transition-colors"
        >
          Learn More
        </button>
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden px-6 md:px-[8vw] py-14 border-t border-line">
      <RoomBackground dim />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <p className="font-mono text-xs text-hot2 tracking-[0.3em] mb-2">✨ Services</p>
          <h2 className="font-display text-xl sm:text-2xl font-semibold">
            🛠️ What I Can Build For You
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-5 pt-6">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

