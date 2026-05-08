'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div style={{ padding: '10rem 2rem', textAlign: 'center', fontFamily: 'sans-serif' }}>
          <h2>A critical error occurred</h2>
          <button onClick={() => reset()}>Retry</button>
        </div>
      </body>
    </html>
  )
}
