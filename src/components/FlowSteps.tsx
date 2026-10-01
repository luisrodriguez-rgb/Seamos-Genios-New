import React from 'react';

export default function FlowSteps() {
  return (
    <section className="section section-flow-red" id="metodologia">
      <div className="container">
        <div className="section-header">
          <div className="badge-flow-white">Ruta al Éxito 400+ ICFES</div>
          <h2 className="section-title">
            Nuestra Metodología en{' '}
            <span
              style={{
                color: '#FFFFFF',
                textDecoration: 'underline',
                textDecorationColor: 'rgba(255,255,255,0.6)',
              }}
            >
              4 Pasos
            </span>
          </h2>
          <p className="section-subtitle">
            Un ecosistema integral que fusiona neurociencia del aprendizaje, simulacros cronometrados y retroalimentación inteligente en 24 horas.
          </p>
        </div>

        {/* 4 Step Flow Cards */}
        <div className="flow-grid-4">
          {/* Step 1 */}
          <div className="flow-step-card">
            <div className="flow-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="m4.93 4.93 4.24 4.24" />
                <path d="m14.83 9.17 4.24-4.24" />
                <path d="m14.83 14.83 4.24 4.24" />
                <path d="m9.17 14.83-4.24 4.24" />
              </svg>
            </div>
            <span className="flow-step-badge">Paso 01</span>
            <h3 className="flow-step-title">Diagnóstico IA</h3>
            <p className="flow-step-desc">
              Identificamos tu línea base cognitiva y mapeamos con precisión quirúrgica tus brechas por materia y competencia.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flow-step-card">
            <div className="flow-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="16" rx="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
            <span className="flow-step-badge">Paso 02</span>
            <h3 className="flow-step-title">Simulacros Calibrados</h3>
            <p className="flow-step-desc">
              Presentas pruebas idénticas al examen oficial ICFES con 254 preguntas bajo condiciones reales de presión y tiempo.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flow-step-card">
            <div className="flow-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <span className="flow-step-badge">Paso 03</span>
            <h3 className="flow-step-title">Neuroaprendizaje</h3>
            <p className="flow-step-desc">
              Recibes tu reporte analítico en 24 horas con plan de estudio adaptativo y micro-cápsulas de repetición espaciada.
            </p>
          </div>

          {/* Step 4 */}
          <div className="flow-step-card">
            <div className="flow-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                <path d="M4 22h16" />
                <path d="M10 14.66V17c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-2.34" />
                <path d="M14 14.66V17c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2.34" />
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
              </svg>
            </div>
            <span className="flow-step-badge">Paso 04</span>
            <h3 className="flow-step-title">Admisión & Beca</h3>
            <p className="flow-step-desc">
              Consolidas tu puntaje superior a 400 puntos y aseguras tu ingreso a Medicina, Ingeniería o la carrera de tu vocación.
            </p>
          </div>
        </div>

        {/* Visual Diagram Pipeline */}
        <div className="flow-diagram-wrapper">
          <div className="diagram-line-connector"></div>
          <div className="diagram-steps-row">
            <div className="diagram-node">
              <div className="diagram-node-circle">1</div>
              <div className="diagram-node-title">Registro & Diagnóstico</div>
              <div className="diagram-node-sub">Plataforma Seamos Genios</div>
            </div>

            <div className="diagram-node">
              <div className="diagram-node-circle">2</div>
              <div className="diagram-node-title">Simulacro 254P</div>
              <div className="diagram-node-sub">Formato Oficial ICFES</div>
            </div>

            <div className="diagram-node">
              <div className="diagram-node-circle">3</div>
              <div className="diagram-node-title">Entrega en 24h</div>
              <div className="diagram-node-sub">Procesamiento Analítico</div>
            </div>

            <div className="diagram-node">
              <div className="diagram-node-circle">4</div>
              <div className="diagram-node-title">Puntaje 400+</div>
              <div className="diagram-node-sub">Admisión Universitaria</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
