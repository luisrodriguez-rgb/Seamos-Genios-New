'use client';

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const { totalCount, openCart, openAuth } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="navbar" role="banner">
      <div className="container navbar-container">
        {/* Brand Logo */}
        <a href="#hero" className="logo" aria-label="Seamos Genios - Inicio">
          <img
            src="/assets/logo-black.svg"
            alt="Seamos Genios Logo"
            className="brand-logo-img"
            width="180"
            height="48"
          />
        </a>

        {/* Desktop Nav Menu */}
        <nav className="nav-center" aria-label="Navegación principal">
          <ul className="nav-links">
            <li><a href="#nosotros">Quiénes Somos</a></li>
            <li><a href="#experiencia-roles">Tu Perfil</a></li>
            <li><a href="#metodologia">Metodología</a></li>
            <li><a href="#red-nacional">Cobertura</a></li>
            <li><a href="#programas">Programas</a></li>
            <li><a href="#colegios">Colegios</a></li>
            <li><a href="#resultados">Resultados</a></li>
            <li><a href="#equipo">Mentores</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>

        {/* Nav Actions Right */}
        <div className="nav-actions">
          {/* E-Commerce Cart Button */}
          <button
            className="nav-cart-btn"
            onClick={openCart}
            type="button"
            aria-label="Abrir Carrito de Compras"
          >
            <svg
              className="nav-cart-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            <span className={`nav-cart-badge ${totalCount > 0 ? 'bump' : ''}`}>
              {totalCount}
            </span>
          </button>

          <button
            className="btn btn-secondary"
            onClick={() => openAuth('login')}
            id="btn-login-desktop"
            type="button"
          >
            Iniciar Sesión
          </button>

          <button
            className="btn btn-primary"
            onClick={() => openAuth('register')}
            type="button"
          >
            Inscribirme
          </button>

          <button
            className="nav-mobile-toggle"
            onClick={toggleMobileMenu}
            aria-label="Abrir Menú de Navegación"
            type="button"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`mobile-drawer ${mobileMenuOpen ? 'active' : ''}`}
        id="mobile-drawer"
        aria-label="Menú móvil"
      >
        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            padding: 0,
            margin: 0,
          }}
        >
          <li><a href="#nosotros" className="mobile-nav-link" onClick={closeMobileMenu}>Quiénes Somos</a></li>
          <li><a href="#experiencia-roles" className="mobile-nav-link" onClick={closeMobileMenu}>Tu Perfil</a></li>
          <li><a href="#metodologia" className="mobile-nav-link" onClick={closeMobileMenu}>Metodología</a></li>
          <li><a href="#red-nacional" className="mobile-nav-link" onClick={closeMobileMenu}>Cobertura Nacional</a></li>
          <li><a href="#programas" className="mobile-nav-link" onClick={closeMobileMenu}>Programas & Tarifas</a></li>
          <li><a href="#colegios" className="mobile-nav-link" onClick={closeMobileMenu}>Colegios Aliados</a></li>
          <li><a href="#resultados" className="mobile-nav-link" onClick={closeMobileMenu}>Resultados</a></li>
          <li><a href="#equipo" className="mobile-nav-link" onClick={closeMobileMenu}>Mentores de Élite</a></li>
          <li><a href="#faq" className="mobile-nav-link" onClick={closeMobileMenu}>Preguntas Frecuentes</a></li>
          <li><a href="#contacto" className="mobile-nav-link" onClick={closeMobileMenu}>Contacto</a></li>
          <li
            style={{
              paddingTop: '0.75rem',
              borderTop: '1px solid var(--border-color)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.6rem',
            }}
          >
            <button
              className="btn btn-secondary"
              onClick={() => {
                closeMobileMenu();
                openAuth('login');
              }}
              style={{ width: '100%' }}
              type="button"
            >
              Iniciar Sesión
            </button>
            <button
              className="btn btn-primary"
              onClick={() => {
                closeMobileMenu();
                openAuth('register');
              }}
              style={{ width: '100%' }}
              type="button"
            >
              Inscribirme
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
