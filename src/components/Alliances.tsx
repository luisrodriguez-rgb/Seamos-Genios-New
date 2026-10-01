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
            <span className="alliance-pill">
              <span className="alliance-icon-badge">UN</span> Universidad Nacional de Colombia
            </span>
            <span className="alliance-pill">
              <span className="alliance-icon-badge">UA</span> Universidad de los Andes
            </span>
            <span className="alliance-pill">
              <span className="alliance-icon-badge">UIS</span> Universidad Industrial de Santander
            </span>
            <span className="alliance-pill">
              <span className="alliance-icon-badge">PUJ</span> Pontificia Universidad Javeriana
            </span>
            <span className="alliance-pill">
              <span className="alliance-icon-badge">UR</span> Universidad del Rosario
            </span>
            <span className="alliance-pill">
              <span className="alliance-icon-badge">UI</span> Universidad Icesi
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
