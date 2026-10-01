'use client';

import React, { useState, useEffect } from 'react';
import WhatsappIcon from './icons/WhatsappIcon';
import { useCart } from '@/context/CartContext';

type ModalMode = 'register' | 'login';
type ModalRole = 'estudiante' | 'colegio' | 'padre' | 'docente';

const roleDescriptions: Record<ModalRole, string> = {
  estudiante: 'Acceso a simulacros calibrados de 254 preguntas y tutor con IA.',
  colegio: 'Acceso y cotización institucional para rectores y coordinadores.',
  padre: 'Portal de seguimiento y asesoría vocacional para familias.',
  docente: 'Herramientas pedagógicas y banco de preguntas para docentes.',
};

export default function AuthModal() {
  const { isAuthOpen, closeAuth, authMode: initialMode, authRole: initialRole } = useCart();
  const [mode, setMode] = useState<ModalMode>('register');
  const [role, setRole] = useState<ModalRole>('estudiante');
  const [name, setName] = useState('');
  const [school, setSchool] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialMode) setMode(initialMode);
    if (initialRole) setRole(initialRole);
  }, [initialMode, initialRole]);

  if (!isAuthOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      if (mode === 'login') {
        alert(`¡Bienvenido de vuelta! Accediendo con ${email}...`);
      } else {
        alert(
          `¡Registro exitoso! Gracias por unirte a Seamos Genios como ${role.toUpperCase()}. Un asesor pedagógico te contactará en menos de 24 horas.`
        );
      }
      setIsSubmitting(false);
      closeAuth();
    }, 900);
  };

  return (
    <div
      className="modal-overlay active"
      id="auth-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeAuth();
      }}
    >
      <div className="auth-modal-card">
        <button className="modal-close-btn" onClick={closeAuth} aria-label="Cerrar ventana modal" type="button">
          &times;
        </button>

        {/* Left Side: Brand Panel */}
        <div className="auth-brand-side">
          <div className="auth-brand-head">
            <img
              src="/assets/logo-white.svg"
              alt="Seamos Genios Logo"
              className="auth-brand-logo"
              width="140"
              height="38"
              loading="lazy"
            />
            <h2 className="auth-brand-title">Ecosistema Seamos Genios</h2>
            <p className="auth-brand-desc">
              Plataforma líder en neuroaprendizaje y preparación analítica para el examen de estado ICFES Saber 11 en Colombia.
            </p>
          </div>

          {/* Metrics Cards Stack */}
          <div className="auth-metrics-stack">
            <div className="auth-metric-pill">
              <span className="auth-stat-num">+1.500</span>
              <span className="auth-stat-lbl">Alumnos</span>
            </div>
            <div className="auth-metric-pill">
              <span className="auth-stat-num">477</span>
              <span className="auth-stat-lbl">Puntaje Máx</span>
            </div>
            <div className="auth-metric-pill">
              <span className="auth-stat-num">24h</span>
              <span className="auth-stat-lbl">Reportes</span>
            </div>
          </div>

          {/* Trust Chip */}
          <div className="auth-trust-chip">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
            </svg>
            <span>Avalado por rectores en +60 instituciones</span>
          </div>
        </div>

        {/* Right Side: Form & Controls */}
        <div className="auth-form-side">
          {/* Mode Tabs */}
          <div className="auth-mode-tabs">
            <button
              type="button"
              className={`auth-mode-tab ${mode === 'register' ? 'active' : ''}`}
              onClick={() => setMode('register')}
            >
              Crear Cuenta / Inscribirme
            </button>
            <button
              type="button"
              className={`auth-mode-tab ${mode === 'login' ? 'active' : ''}`}
              onClick={() => setMode('login')}
            >
              Iniciar Sesión
            </button>
          </div>

          {/* Role Selector Pills */}
          {mode === 'register' && (
            <div className="role-pill-group" id="modal-role-pill-group">
              <button
                type="button"
                className={`role-tab-btn ${role === 'estudiante' ? 'active' : ''}`}
                onClick={() => setRole('estudiante')}
              >
                Estudiante
              </button>
              <button
                type="button"
                className={`role-tab-btn ${role === 'colegio' ? 'active' : ''}`}
                onClick={() => setRole('colegio')}
              >
                Colegio
              </button>
              <button
                type="button"
                className={`role-tab-btn ${role === 'padre' ? 'active' : ''}`}
                onClick={() => setRole('padre')}
              >
                Familia
              </button>
              <button
                type="button"
                className={`role-tab-btn ${role === 'docente' ? 'active' : ''}`}
                onClick={() => setRole('docente')}
              >
                Docente
              </button>
            </div>
          )}

          <div className="auth-form-head">
            <h3 className="auth-form-title" id="modal-title">
              {mode === 'login' ? 'Iniciar Sesión en Seamos Genios' : 'Bienvenido a Seamos Genios'}
            </h3>
            <p className="auth-form-desc" id="modal-role-desc">
              {mode === 'login'
                ? 'Ingresa tus credenciales para acceder a tus simulacros y dashboard.'
                : roleDescriptions[role]}
            </p>
          </div>

          {/* Form */}
          <form id="modal-lead-form" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {mode === 'register' && (
              <>
                {/* Name Field */}
                <div className="input-with-icon-wrapper" id="field-name-wrapper">
                  <span className="input-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </span>
                  <input
                    type="text"
                    className="input-pill-with-icon"
                    placeholder="Nombre Completo *"
                    required
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                {/* School Name Field */}
                {role === 'colegio' && (
                  <div className="input-with-icon-wrapper" id="field-school-wrapper">
                    <span className="input-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="4" y="2" width="16" height="20" rx="2"></rect>
                        <line x1="9" y1="22" x2="9" y2="22.01"></line>
                        <line x1="15" y1="22" x2="15.01"></line>
                      </svg>
                    </span>
                    <input
                      type="text"
                      className="input-pill-with-icon"
                      placeholder="Nombre de la Institución y Ciudad *"
                      autoComplete="organization"
                      value={school}
                      onChange={(e) => setSchool(e.target.value)}
                    />
                  </div>
                )}
              </>
            )}

            {/* Email Field */}
            <div className="input-with-icon-wrapper">
              <span className="input-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </span>
              <input
                type="email"
                className="input-pill-with-icon"
                placeholder={mode === 'login' ? 'Correo Electrónico Registrado *' : 'Correo Electrónico *'}
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {mode === 'login' && (
              <div className="input-with-icon-wrapper">
                <span className="input-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </span>
                <input
                  type="password"
                  className="input-pill-with-icon"
                  placeholder="Contraseña *"
                  required
                  autoComplete="current-password"
                />
              </div>
            )}

            {mode === 'register' && (
              <div className="input-with-icon-wrapper" id="field-phone-wrapper">
                <span className="input-icon">
                  <WhatsappIcon width={18} height={18} color="#25D366" />
                </span>
                <span className="input-country-prefix">+57</span>
                <input
                  type="tel"
                  className="input-pill-with-icon input-phone-colombia"
                  placeholder="WhatsApp / Teléfono *"
                  required
                  autoComplete="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            )}

            <button type="submit" className="btn-auth-submit" id="modal-submit-btn" disabled={isSubmitting}>
              {isSubmitting
                ? 'Procesando...'
                : mode === 'login'
                ? 'Ingresar a mi Cuenta →'
                : 'Inscribirme / Agendar Diagnóstico →'}
            </button>

            <p style={{ fontSize: '0.725rem', color: 'var(--text-light)', textAlign: 'center', marginTop: '0.25rem' }}>
              Al continuar aceptas nuestros Términos de Servicio y Política de Privacidad de Datos.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
