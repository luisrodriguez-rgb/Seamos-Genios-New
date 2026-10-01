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
        {/* WhatsApp CTA Card */}
        <div className="whatsapp-cta-card">
          <div>
            <h3 className="whatsapp-cta-title">¿Quieres una asesoría vocacional personalizada?</h3>
            <p className="whatsapp-cta-desc">
              Escríbenos directamente a nuestro WhatsApp oficial y uno de nuestros mentores te orientará en minutos sin costo.
            </p>
          </div>
          <a
            href="https://wa.me/573001234567?text=Hola%20Seamos%20Genios,%20deseo%20asesoria%20personalizada"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            style={{ whiteSpace: 'nowrap' }}
            aria-label="Escríbenos por WhatsApp"
          >
            <WhatsappIcon width={22} height={22} color="#FFFFFF" />
            <span>Escríbenos por WhatsApp</span>
          </a>
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
