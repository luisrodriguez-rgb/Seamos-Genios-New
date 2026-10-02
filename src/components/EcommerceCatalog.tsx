'use client';

import React, { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';

type FilterCategory = 'all' | 'estudiante' | 'familia' | 'colegio' | 'docente';
type RoleType = 'estudiante' | 'colegio' | 'padre' | 'docente';

interface EcommerceCatalogProps {
  selectedRole?: RoleType;
  onRoleChange?: (role: RoleType) => void;
}

const roleToCategory = (role?: RoleType): FilterCategory => {
  if (role === 'padre') return 'familia';
  if (role === 'colegio') return 'colegio';
  if (role === 'docente') return 'docente';
  if (role === 'estudiante') return 'estudiante';
  return 'all';
};

const categoryToRole = (cat: FilterCategory): RoleType | undefined => {
  if (cat === 'familia') return 'padre';
  if (cat === 'colegio') return 'colegio';
  if (cat === 'docente') return 'docente';
  if (cat === 'estudiante') return 'estudiante';
  return undefined;
};

const roleLabelMap: Record<FilterCategory, string> = {
  all: 'Todos los Planes',
  estudiante: 'Estudiantes & Bachilleres',
  familia: 'Padres y Familias',
  colegio: 'Colegios & Convenios Institucionales',
  docente: 'Docentes & Mentores',
};

export default function EcommerceCatalog({ selectedRole, onRoleChange }: EcommerceCatalogProps) {
  const [filter, setFilter] = useState<FilterCategory>(
    selectedRole ? roleToCategory(selectedRole) : 'all'
  );
  const { addToCart, openAuth } = useCart();

  useEffect(() => {
    if (selectedRole) {
      setFilter(roleToCategory(selectedRole));
    }
  }, [selectedRole]);

  const handleFilterClick = (cat: FilterCategory) => {
    setFilter(cat);
    const mapped = categoryToRole(cat);
    if (mapped && onRoleChange) {
      onRoleChange(mapped);
    }
  };

  const isVisible = (cat: string) => filter === 'all' || filter === cat;

  return (
    <section className="section section-surface" id="programas">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="badge">Inversión Académica & Tienda Oficial</div>
          <h2 className="section-title">
            Planes & Programas Diseñados para tus <span className="text-gradient-red">Metas</span>
          </h2>
          <p className="section-subtitle">
            Catálogo flexible con opciones para estudiantes individuales, familias, docentes y convenios institucionales en toda Colombia.
          </p>
        </div>

        {/* Sync Profile Context Banner */}
        {filter !== 'all' && (
          <div className="catalog-sync-banner">
            <span className="sync-dot-live"></span>
            <span>
              Mostrando planes optimizados para:{' '}
              <strong>{roleLabelMap[filter]}</strong>
            </span>
            <button
              type="button"
              className="sync-clear-btn"
              onClick={() => setFilter('all')}
            >
              Ver catálogo completo (6 planes)
            </button>
          </div>
        )}

        {/* Category / Role Filter Pills */}
        <div className="catalog-filter-bar" role="tablist" aria-label="Filtrar catálogo de productos">
          <button
            type="button"
            className={`catalog-filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => handleFilterClick('all')}
            role="tab"
            aria-selected={filter === 'all'}
          >
            Todos los Planes (6)
          </button>
          <button
            type="button"
            className={`catalog-filter-btn ${filter === 'estudiante' ? 'active' : ''}`}
            onClick={() => handleFilterClick('estudiante')}
            role="tab"
            aria-selected={filter === 'estudiante'}
          >
            Estudiantes (3)
          </button>
          <button
            type="button"
            className={`catalog-filter-btn ${filter === 'familia' ? 'active' : ''}`}
            onClick={() => handleFilterClick('familia')}
            role="tab"
            aria-selected={filter === 'familia'}
          >
            Familias (1)
          </button>
          <button
            type="button"
            className={`catalog-filter-btn ${filter === 'colegio' ? 'active' : ''}`}
            onClick={() => handleFilterClick('colegio')}
            role="tab"
            aria-selected={filter === 'colegio'}
          >
            Colegios (1)
          </button>
          <button
            type="button"
            className={`catalog-filter-btn ${filter === 'docente' ? 'active' : ''}`}
            onClick={() => handleFilterClick('docente')}
            role="tab"
            aria-selected={filter === 'docente'}
          >
            Docentes (1)
          </button>
        </div>

        {/* Products & Plans Grid */}
        <div className="products-grid">
          {/* 1. Estudiante - Simulacro Individual */}
          {isVisible('estudiante') && (
            <article className="product-card" data-product-category="estudiante">
              <div>
                <div className="program-icon-box">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                  </svg>
                </div>
                <div className="program-card-head">
                  <span className="badge badge-emerald">Práctica Individual</span>
                  <h3 className="program-title">Simulacro Tipo ICFES</h3>
                  <p className="program-desc">
                    Mide tus conocimientos con una prueba idéntica a la real de 254 preguntas y recibe tu reporte analítico al día siguiente.
                  </p>
                </div>

                <ul className="program-feature-list">
                  <li className="program-feature-item">
                    <span className="check-circle-icon">✓</span> 254 Preguntas calibradas por componentes
                  </li>
                  <li className="program-feature-item">
                    <span className="check-circle-icon">✓</span> Entrega garantizada en menos de 24 horas
                  </li>
                  <li className="program-feature-item">
                    <span className="check-circle-icon">✓</span> Posición en el Ranking Nacional en Vivo
                  </li>
                  <li className="program-feature-item">
                    <span className="check-circle-icon">✓</span> Explicación paso a paso de cada pregunta
                  </li>
                </ul>
              </div>

              <div className="program-card-foot">
                <div>
                  <div className="program-price-tag">
                    $15.000 <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)' }}>COP</span>
                  </div>
                  <div className="program-price-sub">Por prueba completa</div>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button
                    className="btn btn-secondary"
                    onClick={() =>
                      addToCart({
                        id: 'simulacro-ind',
                        name: 'Simulacro Tipo ICFES (254 Preguntas)',
                        price: 15000,
                        origPrice: 30000,
                        category: 'Simulacro',
                        qty: 1,
                      })
                    }
                    type="button"
                    style={{ padding: '0.5rem 0.85rem' }}
                    aria-label="Añadir simulacro al carrito"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="9" cy="21" r="1"></circle>
                      <circle cx="20" cy="21" r="1"></circle>
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                  </button>
                  <button
                    className="btn btn-pill-action"
                    onClick={() =>
                      addToCart({
                        id: 'simulacro-ind',
                        name: 'Simulacro Tipo ICFES (254 Preguntas)',
                        price: 15000,
                        origPrice: 30000,
                        category: 'Simulacro',
                        qty: 1,
                      })
                    }
                    type="button"
                  >
                    Comprar Ahora →
                  </button>
                </div>
              </div>
            </article>
          )}

          {/* 2. Estudiante - Pack 5 Simulacros */}
          {isVisible('estudiante') && (
            <article className="product-card" data-product-category="estudiante">
              <div>
                <div className="program-icon-box">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
                <div className="program-card-head">
                  <span className="badge badge-blue">Pack Ahorro 20% OFF</span>
                  <h3 className="program-title">Pack 5 Simulacros</h3>
                  <p className="program-desc">
                    Ciclo continuo de entrenamiento con 5 pruebas oficiales espaciadas para monitorear tu curva de mejora hacia los 400+ puntos.
                  </p>
                </div>

                <ul className="program-feature-list">
                  <li className="program-feature-item">
                    <span className="check-circle-icon">✓</span> 5 Pruebas completas de 254 preguntas
                  </li>
                  <li className="program-feature-item">
                    <span className="check-circle-icon">✓</span> Gráfica de evolución y curva de aprendizaje
                  </li>
                  <li className="program-feature-item">
                    <span className="check-circle-icon">✓</span> Tutor de IA prioritario para resolución
                  </li>
                  <li className="program-feature-item">
                    <span className="check-circle-icon">✓</span> Acceso ilimitado al historial de retroalimentación
                  </li>
                </ul>
              </div>

              <div className="program-card-foot">
                <div>
                  <span style={{ textDecoration: 'line-through', opacity: 0.6, fontSize: '0.8rem', color: 'var(--text-light)' }}>
                    $75.000 COP
                  </span>
                  <div className="program-price-tag">
                    $60.000 <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)' }}>COP</span>
                  </div>
                  <div className="program-price-sub">Ahorras $15.000 COP</div>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button
                    className="btn btn-secondary"
                    onClick={() =>
                      addToCart({
                        id: 'pack-5-simulacros',
                        name: 'Pack 5 Simulacros Calibrados',
                        price: 60000,
                        origPrice: 75000,
                        category: 'Pack',
                        qty: 1,
                      })
                    }
                    type="button"
                    style={{ padding: '0.5rem 0.85rem' }}
                    aria-label="Añadir pack de simulacros al carrito"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="9" cy="21" r="1"></circle>
                      <circle cx="20" cy="21" r="1"></circle>
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                  </button>
                  <button
                    className="btn btn-pill-action"
                    onClick={() =>
                      addToCart({
                        id: 'pack-5-simulacros',
                        name: 'Pack 5 Simulacros Calibrados',
                        price: 60000,
                        origPrice: 75000,
                        category: 'Pack',
                        qty: 1,
                      })
                    }
                    type="button"
                  >
                    Comprar Pack →
                  </button>
                </div>
              </div>
            </article>
          )}

          {/* 3. Estudiante - Plan Calendario A (DESTACADO ROJO - PRINCIPAL) */}
          {isVisible('estudiante') && (
            <article className="product-card program-card-featured-red" data-product-category="estudiante">
              <div>
                <div className="program-icon-box">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                  </svg>
                </div>
                <div className="program-card-head">
                  <span className="badge badge-featured-white">Programa Completo 7 Meses</span>
                  <h3 className="program-title">Plan Calendario A</h3>
                  <p className="program-desc">
                    El programa definitivo con clases en vivo, plataforma IA de neuroaprendizaje y tutoría continua hacia los 400+ puntos.
                  </p>
                </div>

                <ul className="program-feature-list">
                  <li className="program-feature-item">
                    <span className="check-circle-icon" style={{ background: 'rgba(255,255,255,0.2)', color: '#FFFFFF' }}>✓</span>{' '}
                    Simulacros quincenales calibrados (24h entrega)
                  </li>
                  <li className="program-feature-item">
                    <span className="check-circle-icon" style={{ background: 'rgba(255,255,255,0.2)', color: '#FFFFFF' }}>✓</span>{' '}
                    Plataforma IA con dashboard de ranking nacional
                  </li>
                  <li className="program-feature-item">
                    <span className="check-circle-icon" style={{ background: 'rgba(255,255,255,0.2)', color: '#FFFFFF' }}>✓</span>{' '}
                    Clases en vivo con Ángel Pacheco (475 ICFES)
                  </li>
                  <li className="program-feature-item">
                    <span className="check-circle-icon" style={{ background: 'rgba(255,255,255,0.2)', color: '#FFFFFF' }}>✓</span>{' '}
                    1 TB Cloud Vault con cuadernillos oficiales
                  </li>
                </ul>
              </div>

              <div className="program-card-foot">
                <div>
                  <span style={{ textDecoration: 'line-through', opacity: 0.8, fontSize: '0.85rem', color: '#FFFFFF' }}>
                    $600.000 COP
                  </span>
                  <div className="program-price-tag">
                    $300.000 <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>COP</span>
                  </div>
                  <div className="program-price-sub">50% Descuento Temporada</div>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button
                    className="btn"
                    onClick={() =>
                      addToCart({
                        id: 'plan-cal-a',
                        name: 'Plan PreICFES Calendario A (7 Meses)',
                        price: 300000,
                        origPrice: 600000,
                        category: 'Plan Integral',
                        qty: 1,
                      })
                    }
                    type="button"
                    style={{
                      background: 'rgba(255,255,255,0.2)',
                      color: '#FFFFFF',
                      border: '1px solid rgba(255,255,255,0.4)',
                      padding: '0.5rem 0.85rem',
                    }}
                    aria-label="Añadir plan completo al carrito"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="9" cy="21" r="1"></circle>
                      <circle cx="20" cy="21" r="1"></circle>
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                  </button>
                  <button
                    className="btn btn-featured-white"
                    onClick={() =>
                      addToCart({
                        id: 'plan-cal-a',
                        name: 'Plan PreICFES Calendario A (7 Meses)',
                        price: 300000,
                        origPrice: 600000,
                        category: 'Plan Integral',
                        qty: 1,
                      })
                    }
                    type="button"
                  >
                    Inscribirme Ahora →
                  </button>
                </div>
              </div>
            </article>
          )}

          {/* 4. Familias - Plan Familiar VIP */}
          {isVisible('familia') && (
            <article className="product-card" data-product-category="familia">
              <div>
                <div className="program-icon-box">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div className="program-card-head">
                  <span className="badge badge-emerald">Acompañamiento Acudientes</span>
                  <h3 className="program-title">Plan Familiar VIP</h3>
                  <p className="program-desc">
                    Tranquilidad total para los padres con informes quincenales directos a WhatsApp, asesoría vocacional personalizada y tutor de cabecera.
                  </p>
                </div>

                <ul className="program-feature-list">
                  <li className="program-feature-item">
                    <span className="check-circle-icon">✓</span> Reportes ejecutivos a WhatsApp cada 15 días
                  </li>
                  <li className="program-feature-item">
                    <span className="check-circle-icon">✓</span> Asesoría vocacional y análisis de becas 100%
                  </li>
                  <li className="program-feature-item">
                    <span className="check-circle-icon">✓</span> Tutor de neuroaprendizaje asignado
                  </li>
                  <li className="program-feature-item">
                    <span className="check-circle-icon">✓</span> Acceso ilimitado a todos los simulacros
                  </li>
                </ul>
              </div>

              <div className="program-card-foot">
                <div>
                  <span style={{ textDecoration: 'line-through', opacity: 0.6, fontSize: '0.8rem', color: 'var(--text-light)' }}>
                    $750.000 COP
                  </span>
                  <div className="program-price-tag">
                    $450.000 <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)' }}>COP</span>
                  </div>
                  <div className="program-price-sub">Pago único o cuotas</div>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button
                    className="btn btn-secondary"
                    onClick={() =>
                      addToCart({
                        id: 'plan-familiar',
                        name: 'Plan Familiar & Acompañamiento VIP',
                        price: 450000,
                        origPrice: 750000,
                        category: 'Familiar',
                        qty: 1,
                      })
                    }
                    type="button"
                    style={{ padding: '0.5rem 0.85rem' }}
                    aria-label="Añadir plan familiar al carrito"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="9" cy="21" r="1"></circle>
                      <circle cx="20" cy="21" r="1"></circle>
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                  </button>
                  <button
                    className="btn btn-pill-action"
                    onClick={() =>
                      addToCart({
                        id: 'plan-familiar',
                        name: 'Plan Familiar & Acompañamiento VIP',
                        price: 450000,
                        origPrice: 750000,
                        category: 'Familiar',
                        qty: 1,
                      })
                    }
                    type="button"
                  >
                    Inscribir Hijo →
                  </button>
                </div>
              </div>
            </article>
          )}

          {/* 5. Colegios - Acompañamiento Escolar Institucional */}
          {isVisible('colegio') && (
            <article className="product-card" data-product-category="colegio">
              <div>
                <div className="program-icon-box">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 21h18"></path>
                    <path d="M5 21V7l8-4v18"></path>
                    <path d="M19 21V11l-6-3"></path>
                  </svg>
                </div>
                <div className="program-card-head">
                  <span className="badge badge-blue">Colegios & Entidades</span>
                  <h3 className="program-title">Convenio Institucional</h3>
                  <p className="program-desc">
                    Solución corporativa para instituciones educativas que buscan elevar su categoría oficial Saber 11 ante el ICFES.
                  </p>
                </div>

                <ul className="program-feature-list">
                  <li className="program-feature-item">
                    <span className="check-circle-icon">✓</span> Licencias masivas y panel especial para rectores
                  </li>
                  <li className="program-feature-item">
                    <span className="check-circle-icon">✓</span> Comparativa por salones (11A, 11B) y áreas
                  </li>
                  <li className="program-feature-item">
                    <span className="check-circle-icon">✓</span> Capacitación y talleres para el cuerpo docente
                  </li>
                  <li className="program-feature-item">
                    <span className="check-circle-icon">✓</span> Facturación electrónica DIAN / Factus
                  </li>
                </ul>
              </div>

              <div className="program-card-foot">
                <div>
                  <div className="program-price-tag">A Medida</div>
                  <div className="program-price-sub">Según número de estudiantes</div>
                </div>
                <button
                  className="btn btn-pill-action"
                  onClick={() => openAuth('register', 'colegio')}
                  type="button"
                >
                  Cotizar Propuesta →
                </button>
              </div>
            </article>
          )}

          {/* 6. Docentes - Paquete de Reactivos & Neurodidáctica */}
          {isVisible('docente') && (
            <article className="product-card" data-product-category="docente">
              <div>
                <div className="program-icon-box">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                </div>
                <div className="program-card-head">
                  <span className="badge badge-purple">Docentes & Área</span>
                  <h3 className="program-title">Paquete Docente + Banco IA</h3>
                  <p className="program-desc">
                    Herramientas pedagógicas, banco de 5.000 preguntas clasificadas por competencias y talleres prácticos de diseño de pruebas.
                  </p>
                </div>

                <ul className="program-feature-list">
                  <li className="program-feature-item">
                    <span className="check-circle-icon">✓</span> Acceso a +5.000 preguntas estandarizadas
                  </li>
                  <li className="program-feature-item">
                    <span className="check-circle-icon">✓</span> Rúbricas de evaluación Saber 11 oficiales
                  </li>
                  <li className="program-feature-item">
                    <span className="check-circle-icon">✓</span> Taller de neurodidáctica aplicada al aula
                  </li>
                  <li className="program-feature-item">
                    <span className="check-circle-icon">✓</span> Certificado de participación docente
                  </li>
                </ul>
              </div>

              <div className="program-card-foot">
                <div>
                  <span style={{ textDecoration: 'line-through', opacity: 0.6, fontSize: '0.8rem', color: 'var(--text-light)' }}>
                    $300.000 COP
                  </span>
                  <div className="program-price-tag">
                    $180.000 <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)' }}>COP</span>
                  </div>
                  <div className="program-price-sub">Licencia Anual Docente</div>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button
                    className="btn btn-secondary"
                    onClick={() =>
                      addToCart({
                        id: 'paquete-docente',
                        name: 'Paquete Docente + Banco 5.000 Preguntas',
                        price: 180000,
                        origPrice: 300000,
                        category: 'Docente',
                        qty: 1,
                      })
                    }
                    type="button"
                    style={{ padding: '0.5rem 0.85rem' }}
                    aria-label="Añadir paquete docente al carrito"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="9" cy="21" r="1"></circle>
                      <circle cx="20" cy="21" r="1"></circle>
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                  </button>
                  <button
                    className="btn btn-pill-action"
                    onClick={() =>
                      addToCart({
                        id: 'paquete-docente',
                        name: 'Paquete Docente + Banco 5.000 Preguntas',
                        price: 180000,
                        origPrice: 300000,
                        category: 'Docente',
                        qty: 1,
                      })
                    }
                    type="button"
                  >
                    Comprar Licencia →
                  </button>
                </div>
              </div>
            </article>
          )}
        </div>
      </div>
    </section>
  );
}
