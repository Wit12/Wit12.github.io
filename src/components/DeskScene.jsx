import { useMemo } from 'react'

export default function DeskScene({ compact = false }) {
  const lights = useMemo(
    () =>
      Array.from({ length: 14 }).map(() => ({
        left: 5 + Math.random() * 90,
        top: 2 + Math.random() * 14,
        delay: Math.random() * 2,
      })),
    [],
  )

  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-line shadow-glowLg ${
        compact ? 'aspect-square' : 'aspect-[4/5]'
      }`}
      style={{
        background:
          'radial-gradient(circle at 30% 20%, rgba(255,45,149,0.25), transparent 55%), radial-gradient(circle at 75% 75%, rgba(139,92,246,0.35), transparent 55%), linear-gradient(160deg, #21123a, #0e0818)',
      }}
    >
      {/* neon sign */}
      {!compact && (
        <div
          className="absolute right-[6%] top-[8%] font-display font-extrabold text-lg leading-tight text-hot2 -rotate-3"
          style={{ textShadow: '0 0 8px #ff6ec7, 0 0 22px rgba(255,45,149,0.7)' }}
        >
          Code<br />Create<br />Inspire ♥
        </div>
      )}

      {/* fairy lights */}
      <div className="absolute inset-0 pointer-events-none">
        {lights.map((s, i) => (
          <span
            key={i}
            className="absolute w-[5px] h-[5px] rounded-full bg-hot2 animate-twinkle"
            style={{
              left: `${s.left}%`,
              top: `${s.top}%`,
              animationDelay: `${s.delay}s`,
              boxShadow: '0 0 8px 2px #ff6ec7',
            }}
          />
        ))}
      </div>

      {/* monitor */}
      <div
        className="absolute left-1/2 top-[34%] -translate-x-1/2 -translate-y-1/2 w-[62%] aspect-[16/10] rounded-lg border-[3px] border-[#2a1c46] overflow-hidden"
        style={{
          background: 'linear-gradient(160deg,#120a22,#050308)',
          boxShadow: '0 0 60px -10px rgba(255,45,149,0.7), 0 0 120px -20px rgba(139,92,246,0.6)',
        }}
      >
        <div
          className="absolute inset-2 rounded-md"
          style={{
            background:
              'repeating-linear-gradient(0deg, rgba(255,45,149,0.13) 0 2px, transparent 2px 18px), linear-gradient(120deg,#1b1030,#0c0716)',
          }}
        />
        <pre className="absolute inset-3 font-mono text-[9px] leading-relaxed text-[#ff8fce]/85 whitespace-pre">
{`const build = () => {
  return "clean & creative";
};

export default Portfolio;

.hero { color: #ff2d95; }`}
        </pre>
      </div>

      {/* seated figure silhouette */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-[38%] blur-[10px]"
        style={{ background: 'radial-gradient(ellipse at center, rgba(255,45,149,0.13), transparent 70%)' }}
      />
      <div
        className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[46%] h-[52%] rounded-t-[120px] rounded-b-[30px]"
        style={{
          background: 'linear-gradient(180deg,#ff6bb5,#c23f8c 60%, #7a2a5f)',
          boxShadow: '0 -10px 40px -10px rgba(255,45,149,0.7)',
        }}
      >
        <div
          className="absolute left-1/2 -top-[14%] -translate-x-1/2 w-[34%] aspect-square rounded-full"
          style={{ background: 'linear-gradient(180deg,#3a2416,#20140c)' }}
        />
      </div>

      {!compact && (
        <div className="absolute bottom-4 left-4 right-4 bg-bg0/85 border border-line rounded-2xl backdrop-blur px-4 py-3.5 flex justify-between text-xs text-muted">
          <div>
            <b className="block font-display text-white text-base">2+ yrs</b>experience
          </div>
          <div>
            <b className="block font-display text-white text-base">15+</b>projects shipped
          </div>
          <div>
            <b className="block font-display text-white text-base">Addis Ababa</b>Ethiopia
          </div>
        </div>
      )}
    </div>
  )
}
