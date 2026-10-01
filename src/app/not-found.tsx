import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main
        style={{
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '6rem 1.5rem',
        }}
      >
        <div style={{ maxWidth: '540px' }}>
          <div
            style={{
              fontSize: '5rem',
              fontWeight: 900,
              color: 'var(--brand-red)',
              lineHeight: 1,
              marginBottom: '1rem',
            }}
          >
            404
          </div>
          <h1
            style={{
              fontSize: '2rem',
              fontWeight: 800,
              color: 'var(--text-main)',
              marginBottom: '0.75rem',
            }}
          >
            Página no encontrada
          </h1>
          <p
            style={{
              fontSize: '1rem',
              color: 'var(--text-muted)',
              lineHeight: 1.6,
              marginBottom: '2rem',
            }}
          >
            La página que estás buscando no existe o fue trasladada. Regresa al inicio para consultar nuestros programas o simulacros.
          </p>
          <Link
            href="/"
            className="btn btn-primary"
            style={{ display: 'inline-flex', padding: '0.85rem 2rem', fontSize: '1rem' }}
          >
            Volver a la Página Principal →
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
