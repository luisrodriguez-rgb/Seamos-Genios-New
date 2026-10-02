'use client';

import React, { useState } from 'react';
import WhatsappIcon from './icons/WhatsappIcon';

export default function ContactWhatsapp() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      alert('¡Gracias por escribirnos! Un mentor pedagógico de Seamos Genios se comunicará contigo en breve.');
      setFormSubmitted(false);
    }, 400);
  };

  return (
    <section className="section section-surface" id="contacto">
      <div className="container">
        {/* Vocational Advisory Bento Card */}
        <div className="vocational-bento-card">
          <div className="vocational-content-side">
            <div className="vocational-badge-pill">
              <span>✨ ORIENTACIÓN VOCACIONAL GRATUITA</span>
            </div>
            <h3 className="vocational-title">
              ¿No sabes qué carrera elegir o qué puntaje necesitas?
            </h3>
            <p className="vocational-desc">
              Conversa 1 a 1 por WhatsApp con estudiantes becados y mentores de Medicina, Ingeniería y Derecho de Uniandes y la UNAL. Te orientamos sin ningún costo.
            </p>
            <div className="vocational-perks-row">
              <span className="vocational-perk-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Diagnóstico de aptitudes
              </span>
              <span className="vocational-perk-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Puntajes de corte 2026
              </span>
              <span className="vocational-perk-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                100% Sin costo
              </span>
            </div>
          </div>

          <div className="vocational-action-side">
            <div className="vocational-live-status">
              <span className="live-dot-green"></span>
              <span>Mentores disponibles ahora</span>
            </div>
            <a
              href="https://wa.me/573001234567?text=Hola%20Seamos%20Genios,%20deseo%20una%20asesoria%20vocacional%20gratuita%20para%20elegir%20mi%20carrera"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp vocational-btn"
              aria-label="Hablar con un mentor vocacional por WhatsApp"
            >
              <WhatsappIcon width={22} height={22} color="#FFFFFF" />
              <span>Chatear con un Mentor →</span>
            </a>
            <span className="vocational-reply-time">Respuesta promedio: &lt; 5 minutos</span>
          </div>
        </div>

        <div style={{ maxWidth: '680px', margin: '3.5rem auto 0 auto' }}>
          <div className="section-header">
            <div className="badge">Contacto Directo</div>
            <h2 className="section-title">
              ¿Listo para Elevar tu <span className="text-gradient-red">Puntaje</span>?
            </h2>
            <p className="section-subtitle">
              Déjanos tus datos y un mentor pedagógico se comunicará contigo hoy mismo.
            </p>
          </div>

          <form id="contact-form" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: 700, display: 'block', marginBottom: '0.4rem' }}>
                Nombre Completo *
              </label>
              <input type="text" className="input-pill" placeholder="Ej: Carlos Rodríguez" required autoComplete="name" />
            </div>

            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: 700, display: 'block', marginBottom: '0.4rem' }}>
                Correo Electrónico *
              </label>
              <input type="email" className="input-pill" placeholder="tu-correo@ejemplo.com" required autoComplete="email" />
            </div>

            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: 700, display: 'block', marginBottom: '0.4rem' }}>
                Teléfono / WhatsApp *
              </label>
              <input type="tel" className="input-pill" placeholder="+57 300 123 4567" required autoComplete="tel" />
            </div>

            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: 700, display: 'block', marginBottom: '0.4rem' }}>
                Perfil de Usuario
              </label>
              <select className="input-pill" style={{ appearance: 'auto' }}>
                <option>Estudiante (PreICFES Saber 11)</option>
                <option>Padre de Familia</option>
                <option>Colegio / Institución Educativa</option>
                <option>Secretaría de Educación / Alcaldía</option>
              </select>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{ marginTop: '0.75rem', width: '100%' }}
              disabled={formSubmitted}
            >
              {formSubmitted ? 'Enviando...' : 'Enviar Mensaje →'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
