import RoomBackground from './RoomBackground.jsx'

const tags = ['1+ yrs experience', 'Remote-friendly', 'Open to freelance']

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden px-6 md:px-[8vw] py-24 border-t border-line">
      <RoomBackground dim />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
  <p className="font-mono text-xs text-hot2 tracking-[0.3em] mb-2">✨ About</p>
  <div>
  <h2 className="font-display text-2xl sm:text-3xl font-bold mb-6">
    👩‍💻 Who I Am
  </h2>
          <div className="panel p-6 sm:p-8 font-mono text-sm sm:text-[15px] leading-8 text-muted">
            <p><span className="text-muted/70">✏️</span></p>
            <p>
              <span className="text-muted/70"> 💎 </span>
              I'm a software developer passionate about building clean, modern, and user-friendly web applications. I enjoy turning ideas into digital solutions that make a real impact.
            </p>
            <p>
              <span className="text-muted/70"> 💎 </span>
              I also work in ERP system implementation and IT support, helping businesses improve their daily operations through technology.
            </p>
            <p>
              <span className="text-muted/70"> 💎 </span>
              Outside of work, I'm a fashion designer who loves creating logo designs and fashion concepts. I enjoy combining creativity with technology to build solutions that are both functional and visually appealing.
            </p>
            <p><span className="text-muted/70"> ✏️</span></p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-full border-2 border-hot2 bg-white/10 text-xs font-mono font-bold text-hot2"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

