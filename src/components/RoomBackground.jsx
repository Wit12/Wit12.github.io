// A stylised "cozy pink-lit coding room" scene, built entirely in SVG/CSS
// (no external photos), reused as a full-bleed background behind every section.
export default function RoomBackground({ dim = false, className = '' }) {
  return (
    <div className={`absolute inset-0 overflow-hidden -z-10 ${className}`}>
      <svg
        viewBox="0 0 1600 1000"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="wall" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2a1547" />
            <stop offset="45%" stopColor="#1a0f2e" />
            <stop offset="100%" stopColor="#0b0714" />
          </linearGradient>
          <radialGradient id="glowPink" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff2d95" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#ff2d95" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="glowViolet" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="desk" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3a2350" />
            <stop offset="100%" stopColor="#160c26" />
          </linearGradient>
          <linearGradient id="monitor" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1c1030" />
            <stop offset="100%" stopColor="#070310" />
          </linearGradient>
          <linearGradient id="hoodie" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ff8fce" />
            <stop offset="55%" stopColor="#e04a97" />
            <stop offset="100%" stopColor="#7a2a5f" />
          </linearGradient>
          <filter id="soft" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="14" />
          </filter>
          <filter id="glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="6" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* wall */}
        <rect width="1600" height="1000" fill="url(#wall)" />

        {/* ambient glows */}
        <circle cx="1250" cy="220" r="340" fill="url(#glowPink)" />
        <circle cx="260" cy="620" r="360" fill="url(#glowViolet)" />
        <circle cx="820" cy="120" r="260" fill="url(#glowPink)" opacity="0.5" />

        {/* bokeh */}
        {[
          [120, 160, 26, '#ff8fce', 0.25],
          [1460, 90, 20, '#b98eff', 0.3],
          [1380, 420, 34, '#ff6ec7', 0.18],
          [80, 780, 30, '#8b5cf6', 0.2],
          [1520, 700, 22, '#ff2d95', 0.22],
          [700, 60, 18, '#ff8fce', 0.25],
        ].map(([cx, cy, r, c, o], i) => (
          <circle key={i} cx={cx} cy={cy} r={r} fill={c} opacity={o} filter="url(#soft)" />
        ))}

        {/* hanging string lights along the top */}
        <path
          d="M -20 60 Q 200 140 420 70 T 860 90 T 1300 50 T 1650 100"
          fill="none"
          stroke="#5a3f7a"
          strokeWidth="2"
          opacity="0.6"
        />
        {[60, 180, 300, 420, 540, 660, 780, 900, 1020, 1140, 1260, 1380, 1500, 1600].map((x, i) => (
          <circle
            key={i}
            cx={x}
            cy={70 + Math.sin(i) * 35}
            r={i % 3 === 0 ? 7 : 5}
            fill={i % 2 === 0 ? '#ff9ad6' : '#ffd58a'}
            filter="url(#glow)"
            opacity="0.9"
          />
        ))}

        {/* hanging plant, top-left */}
        <g opacity="0.85">
          <line x1="150" y1="0" x2="150" y2="90" stroke="#4a3a66" strokeWidth="2" />
          {[
            [110, 100, 55, 30, -25],
            [170, 95, 60, 32, 15],
            [130, 130, 50, 26, -5],
          ].map(([cx, cy, rx, ry, rot], i) => (
            <ellipse
              key={i}
              cx={cx}
              cy={cy}
              rx={rx}
              ry={ry}
              fill="#3f6b52"
              opacity="0.8"
              transform={`rotate(${rot} ${cx} ${cy})`}
            />
          ))}
        </g>

        {/* neon "inspire" heart, top-right */}
        <g filter="url(#glow)" opacity="0.95">
          <path
            d="M1430 130 c-14-18-42-18-52 2 c-10 20 4 34 26 52 c22-18 36-32 26-52 c-10-20-38-20-52-2z"
            fill="none"
            stroke="#ff6ec7"
            strokeWidth="4"
          />
        </g>
        <text
          x="1290"
          y="205"
          fontFamily="Sora, sans-serif"
          fontWeight="800"
          fontSize="30"
          fill="#ff6ec7"
          filter="url(#glow)"
          opacity="0.9"
        >
          Code Create Inspire
        </text>

        {/* sticky notes */}
        <g opacity="0.85">
          <rect x="1180" y="60" width="46" height="46" rx="4" fill="#ffd58a" transform="rotate(-8 1203 83)" />
          <rect x="1235" y="40" width="46" height="46" rx="4" fill="#ff9ad6" transform="rotate(6 1258 63)" />
        </g>

        {/* desk */}
        <rect x="0" y="760" width="1600" height="240" fill="url(#desk)" />
        <rect x="0" y="755" width="1600" height="10" fill="#5a3f7a" opacity="0.5" />

        {/* potted plant on desk, right side */}
        <g>
          <path d="M1430 760 l-16 -70 q16 -22 32 0 l-16 70 z" fill="#4a7a5c" />
          <path d="M1430 760 l-30 -55 q10 -26 30 -10 z" fill="#3f6b52" />
          <path d="M1430 760 l30 -55 q-10 -26 -30 -10 z" fill="#3f6b52" />
          <rect x="1408" y="758" width="44" height="34" rx="6" fill="#7a4a8a" />
        </g>

        {/* books + mug, left of monitor */}
        <rect x="230" y="732" width="90" height="14" rx="2" fill="#ff6ec7" opacity="0.8" />
        <rect x="238" y="718" width="74" height="14" rx="2" fill="#8b5cf6" opacity="0.8" />
        <rect x="340" y="710" width="34" height="46" rx="6" fill="#e8d9ff" opacity="0.9" />
        <rect x="340" y="710" width="34" height="10" rx="4" fill="#c9a9ff" />

        {/* monitor + glow */}
        <rect x="620" y="470" width="360" height="240" rx="14" fill="url(#monitor)" stroke="#3a2a5c" strokeWidth="4" />
        <rect x="636" y="486" width="328" height="208" rx="8" fill="#0c0716" />
        {Array.from({ length: 8 }).map((_, i) => (
          <rect
            key={i}
            x={652}
            y={500 + i * 22}
            width={60 + ((i * 47) % 200)}
            height="8"
            rx="3"
            fill="#ff6ec7"
            opacity={0.18 + (i % 3) * 0.12}
          />
        ))}
        <rect x="770" y="710" width="60" height="14" fill="#241638" />
        <rect x="720" y="724" width="160" height="10" rx="4" fill="#2c1c46" />

        {/* keyboard */}
        <rect x="700" y="745" width="200" height="22" rx="6" fill="#20122f" stroke="#3a2a5c" strokeWidth="2" />

        {/* chair + person silhouette */}
        <ellipse cx="800" cy="960" rx="260" ry="60" fill="#ff2d95" opacity="0.08" filter="url(#soft)" />
        <path
          d="M700 1000 C690 900 700 840 760 810 L840 810 C900 840 910 900 900 1000 Z"
          fill="#241030"
          opacity="0.9"
        />
        <path
          d="M735 1000 C725 900 735 820 800 800 C865 820 875 900 865 1000 Z"
          fill="url(#hoodie)"
        />
        <circle cx="800" cy="760" r="46" fill="#2c1a10" />
        <circle cx="800" cy="722" r="20" fill="#3a2416" />
        <path d="M770 745 q30 -20 60 0 l-6 30 q-24 -14 -48 0 z" fill="#241030" opacity="0.9" />

        {/* vignette */}
        <rect width="1600" height="1000" fill="url(#wall)" opacity="0.001" />
      </svg>

      {/* readability overlay */}
      <div
        className={
          dim
            ? 'absolute inset-0 bg-bg0/85'
            : 'absolute inset-0 bg-gradient-to-r from-bg0 via-bg0/60 to-bg0/20'
        }
      />
    </div>
  )
}
