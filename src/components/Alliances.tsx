'use client';

import React, { useEffect, useRef } from 'react';

export default function Alliances() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const counters = containerRef.current.querySelectorAll<HTMLElement>('[data-counter]');

    const animateCounter = (el: HTMLElement) => {
      const targetStr = el.getAttribute('data-counter') || el.textContent || '';
      const targetNum = parseInt(targetStr.replace(/\D/g, ''), 10);
      const prefix = targetStr.startsWith('+') ? '+' : '';
      const suffix = targetStr.includes('%') ? '%' : targetStr.includes('+') && !prefix ? '+' : '';
      const duration = 1400;
      const startTime = performance.now();

      const update = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 4);
        const currentVal = Math.floor(easeOut * targetNum);

        if (targetNum >= 1000) {
          el.textContent = `${prefix}${currentVal >= 1000 ? '1.400' : currentVal}${suffix}`;
        } else {
          el.textContent = `${prefix}${currentVal}${suffix}`;
        }

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          el.textContent = targetStr;
        }
      };

      requestAnimationFrame(update);
    };

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateCounter(entry.target as HTMLElement);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );

      counters.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    }
  }, []);

  return (
    <section className="trust-bar" id="respaldo" ref={containerRef}>
      <div className="container">
        <div className="trust-stats-grid">
          <div>
            <div className="trust-stat-val" data-counter="1.400+">
              1.400+
            </div>
            <div className="trust-stat-lbl">Estudiantes Activos</div>
          </div>
          <div>
            <div className="trust-stat-val" data-counter="450+">
              450+
            </div>
            <div className="trust-stat-lbl">Puntajes Superiores a 450</div>
          </div>
          <div>
            <div className="trust-stat-val" data-counter="15+">
              15+
            </div>
            <div className="trust-stat-lbl">Ediciones de Simulacros</div>
          </div>
          <div>
            <div className="trust-stat-val" data-counter="98%">
              98%
            </div>
            <div className="trust-stat-lbl">Satisfacción Garantizada</div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <div
            style={{
              fontSize: '0.8rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              color: 'var(--text-light)',
              letterSpacing: '0.05em',
              marginBottom: '1.25rem',
            }}
          >
            Respaldado por mentores e investigadores de las mejores universidades del país
          </div>
          <div className="alliances-pills-row">
            <span className="alliance-pill" title="Universidad Nacional de Colombia">
              <span className="alliance-emblem-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="11" fill="#005C29" fillOpacity="0.12" stroke="#005C29" strokeWidth="1.2"/>
                  <path d="M7 17V7l10 10V7" stroke="#005C29" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <strong className="alliance-tag-strong">UNAL</strong>
              <span className="alliance-pill-name">Universidad Nacional de Colombia</span>
            </span>

            <span className="alliance-pill" title="Universidad de los Andes">
              <span className="alliance-emblem-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="11" fill="#FFC72C" fillOpacity="0.15" stroke="#D97706" strokeWidth="1.2"/>
                  <path d="M12 4L4 18h16L12 4z" stroke="#D97706" strokeWidth="1.8" strokeLinejoin="round"/>
                  <path d="M12 9l4 7H8l4-7z" fill="#D97706"/>
                </svg>
              </span>
              <strong className="alliance-tag-strong">Uniandes</strong>
              <span className="alliance-pill-name">Universidad de los Andes</span>
            </span>

            <span className="alliance-pill" title="Universidad Industrial de Santander">
              <span className="alliance-emblem-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="11" fill="#00853F" fillOpacity="0.12" stroke="#00853F" strokeWidth="1.2"/>
                  <circle cx="12" cy="12" r="5" stroke="#00853F" strokeWidth="1.6"/>
                  <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="#00853F" strokeWidth="1.8"/>
                </svg>
              </span>
              <strong className="alliance-tag-strong">UIS</strong>
              <span className="alliance-pill-name">Universidad Industrial de Santander</span>
            </span>

            <span className="alliance-pill" title="Pontificia Universidad Javeriana">
              <span className="alliance-emblem-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="11" fill="#003366" fillOpacity="0.12" stroke="#003366" strokeWidth="1.2"/>
                  <path d="M12 5v14M7 9h10" stroke="#003366" strokeWidth="2.2" strokeLinecap="round"/>
                  <circle cx="12" cy="7" r="1.5" fill="#003366"/>
                </svg>
              </span>
              <strong className="alliance-tag-strong">PUJ</strong>
              <span className="alliance-pill-name">Pontificia Universidad Javeriana</span>
            </span>

            <span className="alliance-pill" title="Universidad del Rosario">
              <span className="alliance-emblem-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="11" fill="#9E1B32" fillOpacity="0.12" stroke="#9E1B32" strokeWidth="1.2"/>
                  <path d="M12 4v16M4 12h16M7 7l10 10M17 7L7 17" stroke="#9E1B32" strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
              </span>
              <strong className="alliance-tag-strong">Rosario</strong>
              <span className="alliance-pill-name">Universidad del Rosario</span>
            </span>

            <span className="alliance-pill" title="Universidad Icesi">
              <span className="alliance-emblem-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="11" fill="#005596" fillOpacity="0.12" stroke="#005596" strokeWidth="1.2"/>
                  <rect x="7" y="7" width="10" height="10" rx="2" stroke="#005596" strokeWidth="1.8"/>
                  <circle cx="12" cy="12" r="2" fill="#005596"/>
                </svg>
              </span>
              <strong className="alliance-tag-strong">Icesi</strong>
              <span className="alliance-pill-name">Universidad Icesi</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
