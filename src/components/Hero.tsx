'use client';

import React, { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';

interface HeroProps {
  onSelectRole?: (role: 'estudiante' | 'colegio' | 'padre' | 'docente') => void;
}

export default function Hero({ onSelectRole }: HeroProps) {
  const { openAuth } = useCart();
  const [daysRemaining, setDaysRemaining] = useState<number>(155);
  const [displayScore, setDisplayScore] = useState<number>(0);
  const [displayAreas, setDisplayAreas] = useState({ lc: 0, mat: 0, cn: 0, soc: 0 });
  const [isChartReady, setIsChartReady] = useState(false);

  const rotatingWords = [
    'aquí.',
    'con nosotros.',
    'con Seamos Genios.',
    'con neurociencia.',
  ];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [rotatingWords.length]);

  useEffect(() => {
    // Animate score counter (0 -> 324) and subject area percentages
    const duration = 1600;
    const startTime = performance.now();
    const targetScore = 324;
    const targetAreas = { lc: 84, mat: 78, cn: 71, soc: 76 };

    const animateCounters = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutCubic curve for smooth decelerating stop
      const ease = 1 - Math.pow(1 - progress, 3);

      setDisplayScore(Math.round(ease * targetScore));
      setDisplayAreas({
        lc: Math.round(ease * targetAreas.lc),
        mat: Math.round(ease * targetAreas.mat),
        cn: Math.round(ease * targetAreas.cn),
        soc: Math.round(ease * targetAreas.soc),
      });

      if (progress < 1) {
        requestAnimationFrame(animateCounters);
      } else {
        setIsChartReady(true);
      }
    };

    const timer = setTimeout(() => {
      requestAnimationFrame(animateCounters);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const targetDate = new Date('July 26, 2026 07:00:00 GMT-0500').getTime();

    const calculateDays = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        setDaysRemaining(days);
      }
    };

    calculateDays();
    const interval = setInterval(calculateDays, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleRoleJump = (role: 'estudiante' | 'colegio' | 'padre' | 'docente') => {
    if (onSelectRole) {
      onSelectRole(role);
    }
    const el = document.getElementById('experiencia-roles');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="hero">
      <div className="container hero-grid">
        {/* Left Column */}
        <div>
          {/* Pill Badge */}
          <div className="hero-badge-pill">
            <span className="badge-icon-circle">+</span> PREPARACIÓN INTELIGENTE PARA EL ICFES 2026
          </div>

          <h1 className="hero-main-title">
            Tu mejor resultado<br />
            en el <span className="text-brand-red">ICFES</span><br />
            empieza{' '}
            <span className="hero-rotating-container">
              <span key={wordIndex} className="hero-rotating-word text-brand-red">
                {rotatingWords[wordIndex]}
              </span>
            </span>
          </h1>

          <p className="hero-main-desc">
            Entrena con simulacros reales de 254 preguntas, recibe análisis predictivo en menos de 24 horas y mejora tu puntaje con neurociencia e IA.
          </p>

          {/* Quick Role Navigation Selector in Hero */}
          <div style={{ margin: '1.25rem 0 1.5rem' }}>
            <span
              style={{
                fontSize: '0.8rem',
                fontWeight: 800,
                color: 'var(--text-light)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                display: 'block',
                marginBottom: '0.5rem',
              }}
            >
              Selecciona tu perfil para guiarte:
            </span>
            <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => handleRoleJump('estudiante')}
                style={{
                  padding: '0.35rem 0.85rem',
                  fontSize: '0.8rem',
                  borderRadius: 'var(--radius-pill)',
                  cursor: 'pointer',
                }}
              >
                Estudiante
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => handleRoleJump('colegio')}
                style={{
                  padding: '0.35rem 0.85rem',
                  fontSize: '0.8rem',
                  borderRadius: 'var(--radius-pill)',
                  cursor: 'pointer',
                }}
              >
                Colegio / Rector
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => handleRoleJump('padre')}
                style={{
                  padding: '0.35rem 0.85rem',
                  fontSize: '0.8rem',
                  borderRadius: 'var(--radius-pill)',
                  cursor: 'pointer',
                }}
              >
                Familia / Acudiente
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => handleRoleJump('docente')}
                style={{
                  padding: '0.35rem 0.85rem',
                  fontSize: '0.8rem',
                  borderRadius: 'var(--radius-pill)',
                  cursor: 'pointer',
                }}
              >
                Docente
              </button>
            </div>
          </div>

          {/* Hero Action Buttons */}
          <div className="hero-actions-row">
            <button
              className="btn-hero-primary"
              onClick={() => openAuth('register')}
              type="button"
            >
              Inscribirme al Programa →
            </button>
            <a href="#programas" className="btn-hero-secondary" id="btn-hero-how-it-works">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              Ver Programas & Tienda
            </a>
          </div>

          {/* 4 Value Proposition Items */}
          <div className="hero-features-strip">
            <div className="hero-feature-pill">
              <div className="feat-icon-box">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <span>Simulacros<br />reales</span>
            </div>

            <div className="hero-feature-pill">
              <div className="feat-icon-box">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M23 6l-9.5 9.5-5-5L1 18" />
                  <path d="M17 6h6v6" />
                </svg>
              </div>
              <span>Resultados<br />en 24h</span>
            </div>

            <div className="hero-feature-pill">
              <div className="feat-icon-box">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04z" />
                </svg>
              </div>
              <span>Método propio<br />con neurociencia</span>
            </div>

            <div className="hero-feature-pill">
              <div className="feat-icon-box">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <span>Acompañamiento<br />constante</span>
            </div>
          </div>

          {/* Bottom Info Card */}
          <div className="hero-bottom-info-card">
            <div className="info-card-col">
              <div className="info-card-head">
                <span className="live-dot-green"></span>
                <strong>+1.500 estudiantes</strong>
              </div>
              <span className="info-card-sub">ya están alcanzando sus metas</span>
            </div>
            <div className="info-card-divider"></div>
            <div className="info-card-col">
              <div className="info-card-head">
                <strong>Examen Saber 11 • 26 de julio de 2026</strong>
              </div>
              <span className="info-card-sub">
                Quedan <span style={{ fontWeight: 800, color: 'var(--brand-red)' }}>{daysRemaining}</span> días de preparación
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Dashboard Card */}
        <div className="hero-dashboard-card">
          {/* Top Bar: Tu progreso & Dropdown */}
          <div className="dash-top-bar">
            <div className="dash-prog-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF1E27" strokeWidth="2.5">
                <path d="M23 6l-9.5 9.5-5-5L1 18" />
                <path d="M17 6h6v6" />
              </svg>
              <span>Tu progreso</span>
            </div>
            <div className="dash-dropdown-pill">
              <span>Último simulacro</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>

          {/* Score Box with Sparkline */}
          <div className="dash-score-box">
            <div className="dash-score-meta">
              <span className="dash-score-lbl">Puntaje Global</span>
              <div className="dash-score-num">
                <span className="score-red">{displayScore}</span> <span className="score-total">/ 500</span>
              </div>
              <div className="dash-score-delta">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="3">
                  <line x1="12" y1="19" x2="12" y2="5" />
                  <polyline points="5 12 12 5 19 12" />
                </svg>
                <span><strong>42 puntos</strong> desde tu anterior simulacro</span>
              </div>
            </div>
            <div className="dash-chart-wrap">
              <svg className="dash-sparkline" viewBox="0 0 200 90" fill="none" aria-hidden="true">
                <defs>
                  <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FF1E27" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#FF1E27" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <path
                  className="dash-sparkline-area"
                  d="M 10 75 Q 40 68, 70 52 T 130 45 T 160 38 T 190 12 L 190 85 L 10 85 Z"
                  fill="url(#chartGrad)"
                />
                <path
                  className="dash-sparkline-stroke"
                  d="M 10 75 Q 40 68, 70 52 T 130 45 T 160 38 T 190 12"
                  stroke="#FF1E27"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                />
                <circle className="dash-sparkline-ping" cx="190" cy="12" r="8" fill="#FF1E27" />
                <circle cx="190" cy="12" r="4.5" fill="#FF1E27" />
              </svg>
            </div>
          </div>

          {/* Areas Performance Section */}
          <div className="dash-areas-head">
            <span className="dash-areas-title">Desempeño por áreas</span>
            <a href="#metodologia" className="dash-areas-link">Ver detalle →</a>
          </div>

          {/* 4 Subject Area Cards */}
          <div className="dash-areas-grid">
            {/* Area 1: Lectura Crítica */}
            <div className="area-card">
              <div className="area-icon-wrap icon-purple area-icon-pulse">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
              </div>
              <div className="area-name">Lectura Crítica</div>
              <div className="area-percent">{displayAreas.lc}%</div>
              <div className="area-bar-bg"><div className="area-bar-fill" style={{ width: `${displayAreas.lc}%` }}></div></div>
            </div>

            {/* Area 2: Matemáticas */}
            <div className="area-card">
              <div className="area-icon-wrap icon-blue area-icon-pulse" style={{ animationDelay: '0.4s' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <div className="area-name">Matemáticas</div>
              <div className="area-percent">{displayAreas.mat}%</div>
              <div className="area-bar-bg"><div className="area-bar-fill" style={{ width: `${displayAreas.mat}%` }}></div></div>
            </div>

            {/* Area 3: Ciencias Naturales */}
            <div className="area-card">
              <div className="area-icon-wrap icon-green area-icon-pulse" style={{ animationDelay: '0.8s' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10 2v7.31M14 2v7.31M8.5 2h7M14 9.3a6.5 6.5 0 1 1-4 0" />
                </svg>
              </div>
              <div className="area-name">Ciencias Naturales</div>
              <div className="area-percent">{displayAreas.cn}%</div>
              <div className="area-bar-bg"><div className="area-bar-fill" style={{ width: `${displayAreas.cn}%` }}></div></div>
            </div>

            {/* Area 4: Sociales y Ciudadanas */}
            <div className="area-card">
              <div className="area-icon-wrap icon-violet area-icon-pulse" style={{ animationDelay: '1.2s' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="7" r="4" />
                  <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
                </svg>
              </div>
              <div className="area-name">Sociales y Ciudadanas</div>
              <div className="area-percent">{displayAreas.soc}%</div>
              <div className="area-bar-bg"><div className="area-bar-fill" style={{ width: `${displayAreas.soc}%` }}></div></div>
            </div>
          </div>

          {/* Bottom Split Widgets */}
          <div className="dash-bottom-widgets">
            {/* Widget 1: Fortalece tus habilidades */}
            <div className="widget-card widget-skills">
              <div className="widget-skills-content">
                <div className="widget-skills-title">Fortalece tus habilidades</div>
                <div className="widget-skills-desc">Sigue practicando y supera tu mejor versión.</div>
              </div>
              <div className="widget-rocket-wrap">
                <svg className="widget-rocket-svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#FF1E27" strokeWidth="1.75">
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                  <path d="M12 9V4s3.03.55 4 2c1.08 1.62 0 5 0 5" />
                </svg>
              </div>
            </div>

            {/* Widget 2: Racha actual */}
            <div className="widget-card widget-streak">
              <div className="widget-streak-head">
                <span>Racha actual</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#FF1E27" stroke="none">
                  <path d="M12 2c1.5 3 4 5 4 8a6 6 0 1 1-12 0c0-3 2.5-5 4-8 1 2 2 3 4 0z" />
                </svg>
              </div>
              <div className="widget-streak-num">7 días</div>
              <div className="widget-streak-sub">¡Sigue así!</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
