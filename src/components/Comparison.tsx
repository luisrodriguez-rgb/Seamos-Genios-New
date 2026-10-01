'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';

export default function Comparison() {
  const { openAuth } = useCart();

  return (
    <section className="section section-light" id="comparativa">
      <div className="container">
        <div className="section-header">
          <div className="badge">Comparativa de Mercado</div>
          <h2 className="section-title">
            Seamos Genios vs <span className="text-gradient-red">PreICFES Tradicional</span>
          </h2>
          <p className="section-subtitle">
            Compara por qué nuestro modelo con neurociencia e inteligencia artificial supera ampliamente a los métodos convencionales.
          </p>
        </div>

        {/* Modern 2-Column Showdown Matrix */}
        <div className="comparison-showdown-grid">
          {/* Card 1: PreICFES Tradicional */}
          <div className="comp-card-traditional">
            <div>
              <div className="comp-card-header">
                <div className="comp-header-badge-grey">El Método Antiguo</div>
                <h3 className="comp-card-title">PreICFES Tradicional</h3>
                <p className="comp-card-sub">Clases magistrales pasivas, cuadernillos obsoletos y resultados que tardan semanas.</p>
              </div>

              <div className="comp-feature-stack">
                <div className="comp-feature-row">
                  <div className="comp-icon-cross">✕</div>
                  <div className="comp-feature-text">
                    <h4>Resultados en 15 a 30 días</h4>
                    <p>El estudiante olvida qué pensó al responder y pierde la oportunidad de corregir a tiempo.</p>
                  </div>
                </div>

                <div className="comp-feature-row">
                  <div className="comp-icon-cross">✕</div>
                  <div className="comp-feature-text">
                    <h4>Sin Ranking Nacional en Vivo</h4>
                    <p>Solo te comparas contra tu propio salón sin conocer tu percentil real en Colombia.</p>
                  </div>
                </div>

                <div className="comp-feature-row">
                  <div className="comp-icon-cross">✕</div>
                  <div className="comp-feature-text">
                    <h4>Memorización y Clases Pasivas</h4>
                    <p>Horas sentado escuchando teoría sin simulaciones de alta presión cronometrada.</p>
                  </div>
                </div>

                <div className="comp-feature-row">
                  <div className="comp-icon-cross">✕</div>
                  <div className="comp-feature-text">
                    <h4>Preguntas Desactualizadas</h4>
                    <p>Cuadernillos fotocopiados que no reflejan el marco de evaluación ICFES actual.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="comp-card-price-row">
              <div>
                <div className="comp-price-label">Tarifas promedio de mercado</div>
                <div className="comp-price-value" style={{ color: 'var(--text-muted)' }}>
                  $800.000 - $1.800.000 <span style={{ fontSize: '0.85rem', fontWeight: 500 }}>COP</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Seamos Genios */}
          <div className="comp-card-seamos">
            <div>
              <div className="comp-card-header">
                <div className="comp-header-badge-red">El Estándar 2026</div>
                <h3 className="comp-card-title">Seamos Genios</h3>
                <p className="comp-card-sub">Simulacros calibrados de 254 preguntas, analítica en 24h y neurociencia aplicada.</p>
              </div>

              <div className="comp-feature-stack">
                <div className="comp-feature-row">
                  <div className="comp-icon-check">✓</div>
                  <div className="comp-feature-text">
                    <h4>Resultados en Menos de 24h</h4>
                    <p><span className="comp-highlight-tag">Garantizado</span>: Recibes tu informe al día siguiente para corregir de inmediato.</p>
                  </div>
                </div>

                <div className="comp-feature-row">
                  <div className="comp-icon-check">✓</div>
                  <div className="comp-feature-text">
                    <h4>Ranking Nacional en Vivo</h4>
                    <p>Compara tu percentil al instante contra más de 1.400 estudiantes en Colombia.</p>
                  </div>
                </div>

                <div className="comp-feature-row">
                  <div className="comp-icon-check">✓</div>
                  <div className="comp-feature-text">
                    <h4>Plan Adaptativo con Repetición Espaciada</h4>
                    <p>Neurociencia aplicada que entrena tu memoria de trabajo y velocidad de lectura.</p>
                  </div>
                </div>

                <div className="comp-feature-row">
                  <div className="comp-icon-check">✓</div>
                  <div className="comp-feature-text">
                    <h4>254 Preguntas Calibradas Tipo ICFES</h4>
                    <p>Estructura idéntica al examen oficial con cronómetro y cuadernillo real.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="comp-card-price-row">
              <div>
                <div className="comp-price-label">Inversión por prueba individual</div>
                <div className="comp-price-value">
                  $15.000 <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'rgba(255,255,255,0.7)' }}>COP</span>
                </div>
              </div>
              <button
                className="btn btn-primary"
                onClick={() => openAuth('register')}
                type="button"
              >
                Comenzar Ahora →
              </button>
            </div>
          </div>
        </div>

        {/* Colombian Payment Gateways & DIAN Invoicing Card */}
        <div className="payment-gateways-card">
          <div>
            <div className="payment-title-row">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF1E27" strokeWidth="2">
                <rect x="1" y="4" width="22" height="16" rx="2"></rect>
                <line x1="1" y1="10" x2="23" y2="10"></line>
              </svg>
              <h3>Métodos de Pago Seguros en Colombia</h3>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: 1.55 }}>
              Aceptamos los principales ecosistemas bancarios y billeteras digitales de Colombia con acreditación automática al instante y cifrado bancario de 256 bits.
            </p>

            <div className="payment-method-grid">
              {/* 1. Bancolombia / Wompi */}
              <div className="bank-badge">
                <div className="bank-icon-box" style={{ background: '#FDDA24', color: '#000000' }}>
                  <span style={{ fontWeight: 900, fontSize: '0.85rem' }}>B</span>
                </div>
                <div>
                  <div className="bank-name">Bancolombia</div>
                  <div className="bank-sub">Wompi Gateway</div>
                </div>
              </div>

              {/* 2. Nequi */}
              <div className="bank-badge">
                <div className="bank-icon-box" style={{ background: '#E00075', color: '#FFFFFF' }}>
                  <span style={{ fontSize: 0.95, fontWeight: 900 }}>N</span>
                </div>
                <div>
                  <div className="bank-name">Nequi</div>
                  <div className="bank-sub">QR & Transferencia</div>
                </div>
              </div>

              {/* 3. Daviplata */}
              <div className="bank-badge">
                <div className="bank-icon-box" style={{ background: '#ED1C24', color: '#FFFFFF' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"></path>
                  </svg>
                </div>
                <div>
                  <div className="bank-name">Daviplata</div>
                  <div className="bank-sub">Davivienda</div>
                </div>
              </div>

              {/* 4. PSE */}
              <div className="bank-badge">
                <div className="bank-icon-box" style={{ background: '#002B49', color: '#FFC72C' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 900 }}>PSE</span>
                </div>
                <div>
                  <div className="bank-name">PSE</div>
                  <div className="bank-sub">Débito en Línea</div>
                </div>
              </div>

              {/* 5. Bold */}
              <div className="bank-badge">
                <div className="bank-icon-box" style={{ background: '#0F172A', color: '#38BDF8' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 900 }}>B</span>
                </div>
                <div>
                  <div className="bank-name">Bold</div>
                  <div className="bank-sub">Link & Datáfono</div>
                </div>
              </div>

              {/* 6. Mercado Pago */}
              <div className="bank-badge">
                <div className="bank-icon-box" style={{ background: '#009EE3', color: '#FFFFFF' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M7 11v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6M4 11l8-8 8 8"></path>
                  </svg>
                </div>
                <div>
                  <div className="bank-name">Mercado Pago</div>
                  <div className="bank-sub">Tarjeta & Saldo</div>
                </div>
              </div>

              {/* 7. Tarjetas de Crédito */}
              <div className="bank-badge" style={{ gridColumn: 'span 3' }}>
                <div className="bank-icon-box" style={{ background: '#F1F5F9', color: '#0F172A' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="5" width="20" height="14" rx="2"></rect>
                    <line x1="2" y1="10" x2="22" y2="10"></line>
                  </svg>
                </div>
                <div>
                  <div className="bank-name">Visa • Mastercard • American Express • Diners</div>
                  <div className="bank-sub">Hasta 36 cuotas con acreditación inmediata y protección antifraude SSL 256-bit</div>
                </div>
              </div>
            </div>
          </div>

          {/* Certified Invoicing Card */}
          <div className="invoicing-seal-card">
            <div className="invoicing-head">
              <span className="invoicing-seal-badge">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Cumplimiento DIAN
              </span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <polyline points="9 12 11 14 15 10"></polyline>
              </svg>
            </div>
            <h4 className="invoicing-title">Facturación Electrónica Legal</h4>
            <p className="invoicing-desc">
              Emitimos factura electrónica legal validada previamente por la DIAN para deducción de costos tributarios a personas naturales, colegios, empresas y secretarías a través de API Factus SAS.
            </p>
            <div className="invoicing-compliance-tags">
              <span className="compliance-tag">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                XML & PDF DIAN
              </span>
              <span className="compliance-tag">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                CUFE Validado
              </span>
              <span className="compliance-tag">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Factus SAS API
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
