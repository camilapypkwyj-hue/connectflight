// Onda escura decorativa no fim da página (não é lida por leitores de tela).
export default function Wave() {
  return (
    <svg
      className="wave"
      viewBox="0 0 1440 140"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M0 60 C 220 110, 520 130, 820 100 C 1080 74, 1260 20, 1440 0 L1440 140 L0 140 Z"
        fill="currentColor"
      />
    </svg>
  )
}
