export default function Footer() {
  return (
    <footer className="py-8 md:py-12 text-center">
      <p
        className="text-white/50 text-sm font-mono flex items-center justify-center gap-1.5"
        style={{
          fontFamily:
            'GeistMono, ui-monospace, SFMono-Regular, "Roboto Mono", Menlo, Monaco, "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace',
        }}
      >
        Tax work. Simplified.
      </p>
      <p
        className="text-white/40 text-xs font-mono flex items-center justify-center gap-1.5 mt-2"
        style={{
          fontFamily:
            'GeistMono, ui-monospace, SFMono-Regular, "Roboto Mono", Menlo, Monaco, "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace',
        }}
      >
        Made by Nurahex.ai | Built in India, Loved Globally 🌍
      </p>
    </footer>
  )
}
