'use client'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div style={{ padding: '10rem 2rem', textAlign: 'center' }}>
      <h2 style={{ color: 'var(--zoilos-navy)', marginBottom: '1.5rem' }}>Something went wrong!</h2>
      <p style={{ color: '#6b7a8d', marginBottom: '2.5rem' }}>We apologize for the inconvenience. Our team has been notified.</p>
      <button
        className="btn btn-primary"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  )
}
