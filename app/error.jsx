'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

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
        Something went wrong
      </h2>
      <p style={{ 
        color: '#a3a3a3', 
        marginBottom: '24px',
        lineHeight: 1.6
      }}>
        An error occurred while loading this page. Please try again.
      </p>
      {error?.message && (
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
          {error.message}
        </pre>
      )}
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
  );
}
