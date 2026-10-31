// Ilustração original (SVG) inspirada no protótipo: globo, pinos de localização e órbita.
function Pin({ x, y, scale = 1 }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path
        d="M0 0 C -14 -18, -22 -30, -22 -42 A 22 22 0 1 1 22 -42 C 22 -30, 14 -18, 0 0 Z"
        fill="var(--color-accent)"
      />
      <circle cx="0" cy="-42" r="8" fill="#fff" />
    </g>
  )
}

export default function HeroIllustration() {
  return (
    <svg
      className="hero-illustration"
      viewBox="0 0 400 260"
      role="img"
      aria-label="Ilustração de um globo terrestre com pinos de localização"
    >
      <title>Globo terrestre com pinos de localização</title>
      <g fill="#ececf1">
        <ellipse cx="82" cy="60" rx="9" ry="20" transform="rotate(-25 82 60)" />
        <ellipse cx="318" cy="150" rx="9" ry="20" transform="rotate(25 318 150)" />
      </g>
      <circle cx="170" cy="140" r="86" fill="var(--color-primary)" />
      <g fill="#52526a">
        <path d="M120 110 q14 -22 38 -10 q10 16 -4 28 q-22 8 -34 -18 Z" />
        <path d="M178 150 q22 -10 40 6 q4 22 -14 34 q-22 0 -26 -40 Z" />
        <path d="M130 170 q10 -6 18 4 q-2 14 -14 12 q-8 -8 -4 -16 Z" />
      </g>
      <ellipse
        cx="190"
        cy="140"
        rx="170"
        ry="42"
        transform="rotate(-12 190 140)"
        fill="none"
        stroke="var(--color-accent)"
        strokeWidth="1.5"
      />
      <Pin x={130} y={118} scale={0.9} />
      <Pin x={188} y={96} scale={1.15} />
      <Pin x={258} y={110} scale={0.6} />
      <rect x="40" y="236" width="320" height="2" rx="1" fill="#ececf1" />
    </svg>
  )
}
