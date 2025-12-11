import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ 
      padding: '40px', 
      fontFamily: 'system-ui, -apple-system, sans-serif',
      maxWidth: '600px',
      margin: '0 auto'
    }}>
      <h2 style={{ 
        fontSize: '1.5rem', 
        fontWeight: 600,
        marginBottom: '16px'
      }}>
        Page Not Found
      </h2>
      <p style={{ 
        color: '#a3a3a3', 
        marginBottom: '24px',
        lineHeight: 1.6
      }}>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <div style={{ display: 'flex', gap: '12px' }}>
        <Link 
          href="/"
          style={{
            padding: '12px 20px',
            backgroundColor: 'transparent',
            color: '#e5e5e5',
            border: '1px solid #404040',
            borderRadius: '6px',
            textDecoration: 'none',
            fontSize: '0.875rem',
            fontWeight: 500
          }}
        >
          Go Home
        </Link>
        <Link 
          href="/manifest"
          style={{
            padding: '12px 20px',
            backgroundColor: 'transparent',
            color: '#e5e5e5',
            border: '1px solid #404040',
            borderRadius: '6px',
            textDecoration: 'none',
            fontSize: '0.875rem',
            fontWeight: 500
          }}
        >
          View Manifest
        </Link>
      </div>
    </div>
  );
}
