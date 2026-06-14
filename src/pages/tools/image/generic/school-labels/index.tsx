import React, { useEffect } from 'react';

export default function SchoolLabelsRedirect() {
  useEffect(() => {
    window.location.replace('/school-labels/index.html');
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '400px',
        color: '#64748b'
      }}
    >
      <h2
        style={{
          fontSize: '1.25rem',
          fontWeight: 600,
          animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
        }}
      >
        Redirecting to School Label Studio...
      </h2>
      <p style={{ fontSize: '0.875rem', marginTop: '8px' }}>
        If you are not redirected automatically,{' '}
        <a
          href="/school-labels/index.html"
          style={{ color: '#ec4899', textDecoration: 'underline' }}
        >
          click here
        </a>
        .
      </p>
    </div>
  );
}
