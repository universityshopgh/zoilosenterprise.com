import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{ padding: '10rem 2rem', textAlign: 'center' }}>
      <h2 style={{ color: 'var(--zoilos-navy)', marginBottom: '1.5rem', fontSize: '3rem' }}>404</h2>
      <h3 style={{ marginBottom: '1rem' }}>Page Not Found</h3>
      <p style={{ color: '#6b7a8d', marginBottom: '2.5rem' }}>The page you are looking for does not exist or has been moved.</p>
      <Link href="/" className="btn btn-primary">
        Return Home
      </Link>
    </div>
  )
}
