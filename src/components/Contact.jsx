import { useState } from 'react'
import RoomBackground from './RoomBackground.jsx'

// Update these with your real links.
const CONTACTS = [
  {
    icon: '🐙',
    label: 'GitHub',
    value: 'Wit12',
    href: 'https://github.com/Wit12',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'Bezawit Desta',
    href: '#', // add your real LinkedIn profile URL here
  },
  {
    icon: '📞',
    label: 'Phone',
    value: '+251 975 888 687',
    href: 'tel:+251975888687',
  },
  {
    icon: '✉️',
    label: 'Email',
    value: 'destabeza56@gmail.com',
    href: 'mailto:destabeza56@gmail.com',
  },
]

const INTERESTS = ['Web Dev', 'UI/UX', 'Freelance', 'Full-time', 'Other']

export default function Contact() {
  const [selected, setSelected] = useState('')
  const [message, setMessage] = useState('')

  const toggleInterest = (item) => {
    setSelected((prev) => (prev === item ? '' : item))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent('New message from your portfolio')
    const body = encodeURIComponent(
      `Interested in: ${selected || 'Not specified'}\n\n${message}`
    )
    window.location.href = `mailto:destabeza56@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="relative overflow-hidden px-6 md:px-[8vw] py-14 border-t border-line">
      <RoomBackground dim />

      <div className="relative z-10 max-w-5xl mx-auto rounded-2xl border border-line bg-panel/60 p-5 sm:p-7">
        {/* header — full width, sits above both columns */}
        <div className="mb-6 text-center">
          <p className="font-mono text-xs text-hot2 tracking-[0.3em] mb-2">✨ Contact</p>
          <h2 className="font-display text-2xl sm:text-3xl font-black text-white mb-1.5">
            Let&rsquo;s <span className="text-gradient">Talk</span>
          </h2>
          <p className="text-muted text-xs">
            Have a project in mind? I&rsquo;d love to hear about it.
          </p>
        </div>

        {/* both columns start at the same top edge */}
        <div className="grid lg:grid-cols-[0.8fr,1.2fr] gap-8 items-start">
          {/* left: contact card */}
          <div className="rounded-xl border-2 border-hot2 bg-gradient-to-b from-panel to-bg0 p-4">
            <div className="w-11 h-11 rounded-full border-2 border-hot2 bg-panel flex items-center justify-center text-base mb-3">
              👩‍💻
            </div>

            <div className="space-y-2">
              {CONTACTS.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="group flex items-center gap-2.5 px-2.5 py-2 rounded-lg bg-panel/70 border border-line hover:border-hot2 transition-colors"
                >
                  <span className="w-7 h-7 shrink-0 rounded-full bg-bg0 border border-hot2/40 flex items-center justify-center text-xs">
                    {c.icon}
                  </span>
                  <span className="text-left">
                    <span className="block text-[10px] text-muted leading-tight">{c.label}</span>
                    <span className="block text-xs text-white group-hover:text-hot2 transition-colors leading-tight">
                      {c.value}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* right: form, top-aligned with the contact card */}
          <form onSubmit={handleSubmit} className="flex flex-col">
            <p className="text-xs text-muted mb-2">I&rsquo;m interested in</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {INTERESTS.map((item) => (
                <button
                  type="button"
                  key={item}
                  onClick={() => toggleInterest(item)}
                  className={`px-3 py-1.5 rounded-full border text-[11px] transition-colors ${
                    selected === item
                      ? 'bg-hot2 text-bg0 border-hot2 font-semibold'
                      : 'border-line text-muted hover:border-hot2/60'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <label className="block mb-4">
              <span className="text-xs text-muted mb-1 block">Tell me about your project</span>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Something about your great idea"
                rows={2}
                className="w-full bg-transparent border-b border-line focus:border-hot2 outline-none py-1.5 text-sm text-white placeholder:text-muted resize-none transition-colors"
              />
            </label>

            <button
              type="submit"
              className="self-start px-6 py-2.5 rounded-full bg-gradient-to-r from-hot to-hot2 text-white font-display font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      
    </section>
  )
}
