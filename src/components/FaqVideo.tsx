'use client';

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';

const faqItems = [
  {
    q: '¿Los simulacros son virtuales o presenciales?',
    a: 'Ofrecemos ambas modalidades: 100% virtual a través de nuestra plataforma web interactiva con cronómetro oficial, o en formato físico impreso con cuadernillos de 254 preguntas y hojas de respuesta óptica para colegios e instituciones aliadas.',
  },
  {
    q: '¿Cuándo y cómo recibo los resultados de mi prueba?',
    a: 'Garantizamos la entrega de tu dashboard analítico completo al día siguiente de presentar el simulacro (menos de 24 horas hábiles), con desglose por componente, percentil nacional, semáforo de fortalezas y retroalimentación interactiva.',
  },
  {
    q: '¿Pueden aplicar simulacros impresos en papel en mi colegio?',
    a: 'Sí. Para colegios y secretarías enviamos cuadernillos impresos con diagramación idéntica al examen oficial y hojas de respuesta codificadas, encargándonos del escaneo y entrega de reportes comparativos por salón.',
  },
  {
    q: '¿Emiten Factura Electrónica legal validada por la DIAN?',
    a: 'Sí. Todas las adquisiciones familiares e institucionales cuentan con Factura Electrónica legal validada ante la DIAN mediante nuestro operador tecnológico Factus SAS, cumpliendo con los requisitos fiscales vigentes.',
  },
  {
    q: '¿Cuántas preguntas incluye cada simulacro calibrado?',
    a: 'Cada simulacro consta de 254 preguntas calibradas que replican con precisión la estructura, distribución por áreas (Lectura Crítica, Matemáticas, Ciencias Naturales, Sociales y Ciudadanas, Inglés) y tiempos oficiales del examen Saber 11.',
  },
  {
    q: '¿Qué facilidades de pago ofrecen para familias y estudiantes?',
    a: 'Contamos con pasarelas de pago 100% seguras que soportan PSE, Nequi, Daviplata, tarjetas de crédito/débito y financiamiento en cuotas mensuales sin intereses a través de Addi.',
  },
];

export default function FaqVideo() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const { openAuth } = useCart();

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="section section-faq-red" id="faq">
      <div className="container">
        <div className="section-header">
          <div className="badge badge-faq-white">Inquietudes Resueltas</div>
          <h2 className="section-title">
            Preguntas Frecuentes & <span className="text-gradient-red">Demo Tour</span>
          </h2>
          <p className="section-subtitle">
            Conoce cómo funciona nuestra plataforma, fechas de presentación y todo lo necesario para comenzar hoy.
          </p>
        </div>

        <div className="faq-video-layout">
          {/* Left: Accordion */}
          <div className="faq-stack">
            {faqItems.map((item, idx) => {
              const isOpen = activeIndex === idx;
              return (
                <div className={`faq-item ${isOpen ? 'active' : ''}`} key={idx}>
                  <button
                    className="faq-btn"
                    onClick={() => toggleAccordion(idx)}
                    type="button"
                    aria-expanded={isOpen}
                  >
                    {item.q}
                    <span className="faq-icon-circle">{isOpen ? '−' : '+'}</span>
                  </button>
                  <div className="faq-content">{item.a}</div>
                </div>
              );
            })}
          </div>

          {/* Right: Interactive Video Preview */}
          <div
            className="video-preview-card"
            id="faq-video-card"
            style={{ background: 'linear-gradient(135deg, #182234 0%, #131A26 100%)', cursor: 'pointer' }}
            onClick={() => openAuth('register')}
            role="button"
            tabIndex={0}
            aria-label="Abrir tour o registro"
          >
            <div className="video-overlay-gradient"></div>

            <div className="video-center-action">
              <button className="btn-play-circle" aria-label="Reproducir video explicativo" type="button">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </button>
              <span className="video-badge-pill">Video Explicativo • Próximamente</span>
            </div>

            <div className="video-info-footer">
              <div className="video-info-title">Tour por la Plataforma Seamos Genios</div>
              <div className="video-info-sub">
                Descubre cómo interpretar tu dashboard analítico y alcanzar los 400+ puntos.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
