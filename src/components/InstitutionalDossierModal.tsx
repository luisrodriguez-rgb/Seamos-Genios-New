'use client';

import React, { useState } from 'react';
import WhatsappIcon from './icons/WhatsappIcon';
import { useCart } from '@/context/CartContext';

interface InstitutionalDossierModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type DossierTab = 'dashboard' | 'modalidad' | 'legal' | 'docentes';

export default function InstitutionalDossierModal({ isOpen, onClose }: InstitutionalDossierModalProps) {
  const [activeTab, setActiveTab] = useState<DossierTab>('dashboard');
  const { openAuth } = useCart();

  if (!isOpen) return null;

  const handleOpenAuth = () => {
    onClose();
    openAuth('register', 'colegio');
  };

  return (
    <div
      className="modal-overlay active"
      id="institutional-dossier-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="dossier-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="dossier-modal-card">
        {/* Header Bar */}
        <div className="dossier-modal-header">
          <div>
            <div className="dossier-badge-pill">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
                <line x1="9" y1="22" x2="9" y2="22.01" />
                <line x1="15" y1="22" x2="15.01" />
              </svg>
              <span>DOSSIER INSTITUCIONAL 2026 • RECTORES & COORDINADORES</span>
            </div>
            <h2 id="dossier-title" className="dossier-modal-title">
              Sistema Integral de Medición Saber 11 para Colegios
            </h2>
            <p className="dossier-modal-desc">
              Todo lo que rectores, directores de grupo y consejos directivos necesitan para elevar el promedio institucional.
            </p>
          </div>

          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Cerrar ventana"
          >
            ✕
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="dossier-tabs-nav" role="tablist">
          <button
            type="button"
            className={`dossier-tab-btn ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
            role="tab"
            aria-selected={activeTab === 'dashboard'}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <line x1="18" y1="20" x2="18" y2="10" />
              <line x1="12" y1="20" x2="12" y2="4" />
              <line x1="6" y1="20" x2="6" y2="14" />
            </svg>
            <span>Dashboard Directivo</span>
          </button>

          <button
            type="button"
            className={`dossier-tab-btn ${activeTab === 'modalidad' ? 'active' : ''}`}
            onClick={() => setActiveTab('modalidad')}
            role="tab"
            aria-selected={activeTab === 'modalidad'}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <rect x="3" y="4" width="18" height="16" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span>Modalidad Híbrida</span>
          </button>

          <button
            type="button"
            className={`dossier-tab-btn ${activeTab === 'legal' ? 'active' : ''}`}
            onClick={() => setActiveTab('legal')}
            role="tab"
            aria-selected={activeTab === 'legal'}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span>Legal & DIAN</span>
          </button>

          <button
            type="button"
            className={`dossier-tab-btn ${activeTab === 'docentes' ? 'active' : ''}`}
            onClick={() => setActiveTab('docentes')}
            role="tab"
            aria-selected={activeTab === 'docentes'}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
            <span>Acompañamiento Docente</span>
          </button>
        </div>

        {/* Tab Body Content */}
        <div className="dossier-tab-content">
          {/* TAB 1: Dashboard Directivo */}
          {activeTab === 'dashboard' && (
            <div className="dossier-panel-view">
              <div className="dossier-split-grid">
                <div>
                  <h3 className="dossier-heading-sm">Visibilidad Analítica al Nivel de Cada Salón</h3>
                  <p className="dossier-paragraph">
                    No espere hasta noviembre para conocer los resultados de su colegio. Nuestro panel rectoral procesa cada simulacro en menos de 24 horas y desglosa:
                  </p>
                  <ul className="dossier-bullets">
                    <li>
                      <strong>Media Institucional Estimada:</strong> Cálculo predictivo del puntaje global Saber 11 de la promoción.
                    </li>
                    <li>
                      <strong>Comparativa 11A vs 11B vs 11C:</strong> Detección precisa de cuál curso requiere refuerzo inmediato en matemáticas o ciencias naturales.
                    </li>
                    <li>
                      <strong>Mapa de Competencias ICFES:</strong> Clasificación por percentiles y niveles de desempeño (1 a 4).
                    </li>
                  </ul>
                </div>

                {/* Mockup Preview of School Dashboard */}
                <div className="dossier-mockup-card">
                  <div className="dossier-mockup-header">
                    <span className="live-dot-green"></span>
                    <strong>Colegio San Carlos • Grado 11 (84 Estudiantes)</strong>
                  </div>
                  <div className="dossier-mockup-stats">
                    <div className="dossier-stat-box">
                      <span className="stat-lbl">Promedio Estimado</span>
                      <span className="stat-num text-brand-red">352 Pts</span>
                      <span className="stat-sub">▲ +34 vs año anterior</span>
                    </div>
                    <div className="dossier-stat-box">
                      <span className="stat-lbl">Desvío Estándar</span>
                      <span className="stat-num">22.4</span>
                      <span className="stat-sub">Alta homogeneidad</span>
                    </div>
                    <div className="dossier-stat-box">
                      <span className="stat-lbl">Mejor Materia</span>
                      <span className="stat-num text-emerald">Lectura Crítica</span>
                      <span className="stat-sub">Media: 78/100</span>
                    </div>
                  </div>
                  <div className="dossier-course-bars">
                    <div className="course-bar-row">
                      <span>11A (32 est):</span>
                      <div className="course-progress-bg"><div className="course-progress-fill" style={{ width: '82%' }}></div></div>
                      <strong>364 pts</strong>
                    </div>
                    <div className="course-bar-row">
                      <span>11B (28 est):</span>
                      <div className="course-progress-bg"><div className="course-progress-fill" style={{ width: '74%' }}></div></div>
                      <strong>348 pts</strong>
                    </div>
                    <div className="course-bar-row">
                      <span>11C (24 est):</span>
                      <div className="course-progress-bg"><div className="course-progress-fill" style={{ width: '69%' }}></div></div>
                      <strong>338 pts</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Modalidad Híbrida */}
          {activeTab === 'modalidad' && (
            <div className="dossier-panel-view">
              <h3 className="dossier-heading-sm">Nos Adaptamos a la Infraestructura de su Institución</h3>
              <p className="dossier-paragraph">
                Puede elegir la modalidad que mejor se ajuste a su calendario escolar y disponibilidad técnica:
              </p>

              <div className="dossier-modalities-grid">
                <div className="modality-card">
                  <div className="modality-head">
                    <div className="modality-icon-badge">📄</div>
                    <h4>Opción Física (Papel Impreso)</h4>
                  </div>
                  <ul className="dossier-bullets">
                    <li>Cuadernillos físicos impresos en papel de alta calidad con 254 preguntas idénticas al ICFES.</li>
                    <li>Hojas de respuesta óptica codificadas para cada estudiante.</li>
                    <li>Escaneo de alta velocidad y entrega de resultados y reportes en menos de 24 horas hábiles.</li>
                    <li>Entrenamiento real para evitar errores de llenado de óvalos.</li>
                  </ul>
                </div>

                <div className="modality-card">
                  <div className="modality-head">
                    <div className="modality-icon-badge">💻</div>
                    <h4>Opción 100% Digital (Computadores / Tablets)</h4>
                  </div>
                  <ul className="dossier-bullets">
                    <li>Plataforma web con cronómetro sincronizado y control de sesión estricto.</li>
                    <li>Acceso desde las salas de sistemas del colegio o desde los hogares.</li>
                    <li>Reporte analítico generado en tiempo real al finalizar la prueba.</li>
                    <li>Ideal para aplicaciones periódicas de simulacros diagnósticos.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Legal & DIAN */}
          {activeTab === 'legal' && (
            <div className="dossier-panel-view">
              <div className="dossier-split-grid">
                <div>
                  <h3 className="dossier-heading-sm">Garantía Legal, Transparencia y Facturación Electrónica DIAN</h3>
                  <p className="dossier-paragraph">
                    Seamos Genios opera con estricto apego al marco legal educativo colombiano:
                  </p>
                  <ul className="dossier-bullets">
                    <li>
                      <strong>Facturación Electrónica Legal:</strong> Todas nuestras propuestas y contratos cuentan con validación previa de la DIAN a través del proveedor tecnológico Factus SAS.
                    </li>
                    <li>
                      <strong>Contratación para Colegios Públicos y Privados:</strong> Documentación completa: RUT actualizado, Cámara de Comercio, certificados parafiscales y pólizas de cumplimiento cuando sea requerido.
                    </li>
                    <li>
                      <strong>Protección de Datos (Habeas Data):</strong> Tratamiento riguroso de la información de menores de edad según la Ley 1581 de 2012.
                    </li>
                  </ul>
                </div>

                <div className="dossier-seal-box">
                  <div className="dossier-seal-badge">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FF1E27" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <h4>Proveedor Verificado</h4>
                  <p>Facturación Electrónica DIAN • Factus SAS</p>
                  <div className="dossier-nit-pill">
                    <span>NIT & Personería Jurídica Validada</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: Acompañamiento Docente */}
          {activeTab === 'docentes' && (
            <div className="dossier-panel-view">
              <h3 className="dossier-heading-sm">Capacitación Pedagógica y Talleres Docentes Incluidos</h3>
              <p className="dossier-paragraph">
                El convenio institucional no se limita a entregar un examen; trabajamos de la mano con los profesores de su institución:
              </p>
              <div className="dossier-features-grid">
                <div className="dossier-feat-box">
                  <strong>1. Taller de Lectura de Datos:</strong>
                  <p>Sesión virtual o presencial con los jefes de área para interpretar los desvíos y percentiles de cada curso.</p>
                </div>
                <div className="dossier-feat-box">
                  <strong>2. Banco de Preguntas Calibradas:</strong>
                  <p>Acceso a ítems clasificados por competencia para uso en evaluaciones bimestrales del colegio.</p>
                </div>
                <div className="dossier-feat-box">
                  <strong>3. Taller Anti-Ansiedad para Alumnos:</strong>
                  <p>Neuroaprendizaje y técnicas de gestión del tiempo y control de nervios previo al examen oficial.</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="dossier-modal-footer">
          <div className="dossier-footer-left">
            <span className="dossier-guarantee-note">
              ✓ Respuesta en menos de 2 horas para solicitudes directivas
            </span>
          </div>

          <div className="dossier-footer-right">
            <a
              href="https://wa.me/573001234567?text=Hola%20Presidente%20de%20Seamos%20Genios,%20soy%20rector/coordinador%20y%20deseo%20agendar%20una%20reunion%20de%2015%20minutos%20para%20mi%20colegio"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary dossier-wa-btn"
            >
              <WhatsappIcon width={18} height={18} color="#25D366" />
              <span>Agendar con Presidencia →</span>
            </a>

            <button
              type="button"
              className="btn btn-primary"
              onClick={handleOpenAuth}
            >
              Solicitar Cotización Formal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
