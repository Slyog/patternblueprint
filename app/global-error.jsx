'use client';

export default function GlobalError({ error, reset }) {
  return (
    <html lang="en">
      <body style={{ 
        padding: '40px', 
        fontFamily: 'system-ui, -apple-system, sans-serif',
        backgroundColor: '#0a0a0a',
        color: '#e5e5e5',
        minHeight: '100vh',
        margin: 0
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '1.5rem', 
            fontWeight: 600,
            marginBottom: '16px',
            color: '#fff'
          }}>
            Application Error
          </h2>
          <p style={{ 
            color: '#a3a3a3', 
            marginBottom: '24px',
            lineHeight: 1.6
          }}>
            A critical error occurred. Please refresh the page or try again later.
          </p>
          <pre style={{ 
            padding: '16px', 
            backgroundColor: '#171717', 
            borderRadius: '8px',
            overflow: 'auto',
            fontSize: '0.875rem',
            color: '#ef4444',
            marginBottom: '24px',
            border: '1px solid #262626'
          }}>
            {error?.message}
          </pre>
          <button 
            onClick={() => reset()}
            style={{
              padding: '12px 20px',
              backgroundColor: 'transparent',
              color: '#e5e5e5',
              border: '1px solid #404040',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '0.875rem',
              fontWeight: 500
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
