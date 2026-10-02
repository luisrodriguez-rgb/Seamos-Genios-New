import React from 'react';

interface TestimonialItem {
  initials: string;
  name: string;
  handle: string;
  quote: string;
  scoreJump?: {
    before: number;
    after: number;
    delta: number;
  };
  highlightBadge?: string;
}

const testimonialsData: TestimonialItem[] = [
  {
    initials: 'LM',
    name: 'Lucía Mendoza',
    handle: '@LuciMendoza_Med • Bucaramanga',
    quote: '"Pasé de 284 puntos en mi primer simulacro a 412 en el examen oficial. Los reportes en 24 horas y el análisis de errores me hicieron entender exactamente en qué estaba fallando."',
    scoreJump: {
      before: 284,
      after: 412,
      delta: 128,
    },
  },
  {
    initials: 'MR',
    name: 'Mateo Rincón',
    handle: '@Mateo_Rincon9 • Bogotá D.C.',
    quote: '"La mejor inversión. El nivel de las preguntas de matemáticas y física es idéntico al de la prueba real. Logré cupo en Ingeniería de Sistemas en la Universidad Nacional."',
    scoreJump: {
      before: 310,
      after: 425,
      delta: 115,
    },
  },
  {
    initials: 'VP',
    name: 'Lic. Víctor Peña',
    handle: 'Rector Col. San Miguel • Cali',
    quote: '"Implementamos Seamos Genios en grado 11 y nuestro promedio institucional subió 38 puntos en un solo año. El panel para rectores nos dio visibilidad total de cada salón."',
    highlightBadge: '🏛️ Convenio Institucional (+38 pts promedio)',
  },
  {
    initials: 'SM',
    name: 'Sofía Morales',
    handle: '@SofiMorales_ • Medellín',
    quote: '"Los talleres de neuroaprendizaje con Ángel Pacheco me enseñaron a controlar los nervios y gestionar el tiempo. Saqué 438 puntos y me gané la beca Quiero Estudiar en Los Andes."',
    scoreJump: {
      before: 335,
      after: 438,
      delta: 103,
    },
    highlightBadge: '🎓 Beca Quiero Estudiar (Uniandes)',
  },
  {
    initials: 'CM',
    name: 'Carlos M.',
    handle: '@CarlosM_Cgena • Cartagena',
    quote: '"Pasé de 353 a 441 puntos. La metodología del equipo me enseñó a razonar las preguntas complejas de lectura crítica y ciencias sociales."',
    scoreJump: {
      before: 353,
      after: 441,
      delta: 88,
    },
  },
  {
    initials: 'SG',
    name: 'Valeria Gómez',
    handle: '@valeriag_cali • Cali',
    quote: '"100% recomendados. Plataforma intuitiva, simulacros con cronómetro real y explicaciones detalladas pregunta por pregunta. Superé mi meta."',
    scoreJump: {
      before: 318,
      after: 422,
      delta: 104,
    },
    highlightBadge: '⭐ Puntaje Superior 400+',
  },
];

export default function Testimonials() {
  return (
    <section className="section section-light" id="resultados">
      <div className="container">
        <div className="section-header">
          <div className="badge">Wall of Love</div>
          <h2 className="section-title">
            Historias Reales de <span className="text-gradient-red">Superación</span>
          </h2>
          <p className="section-subtitle">
            Estudiantes de todo el país que transformaron su futuro y lograron ingresar a la universidad de sus sueños.
          </p>
        </div>

        <div className="testimonials-wall">
          {testimonialsData.map((item, idx) => (
            <div className="testimonial-card" key={idx}>
              <div>
                <div className="testimonial-head">
                  <div className="testimonial-avatar-box">{item.initials}</div>
                  <div className="testimonial-user-info">
                    <span className="testimonial-username">{item.name}</span>
                    <span className="testimonial-handle">{item.handle}</span>
                  </div>
                </div>
                <p className="testimonial-body">{item.quote}</p>

                {/* Score Jump Interactive Visual Widget */}
                {item.scoreJump && (
                  <div className="score-jump-widget">
                    <div className="score-jump-values">
                      <div className="score-node score-node-before">
                        <span className="score-node-lbl">1er Simulacro</span>
                        <span className="score-node-val">{item.scoreJump.before} pts</span>
                      </div>

                      <div className="score-jump-track">
                        <div className="score-jump-arrow">
                          <svg width="28" height="12" viewBox="0 0 28 12" fill="none">
                            <path d="M0 6h24M19 1l5 5-5 5" stroke="#FF1E27" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="score-jump-delta">▲ +{item.scoreJump.delta} pts</span>
                      </div>

                      <div className="score-node score-node-after">
                        <span className="score-node-lbl">Oficial ICFES</span>
                        <span className="score-node-val text-brand-red">{item.scoreJump.after} pts</span>
                      </div>
                    </div>

                    <div className="score-progress-bar-wrap">
                      <div
                        className="score-progress-bar-fill"
                        style={{ width: `${(item.scoreJump.after / 500) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>

              <div className="testimonial-footer">
                {item.highlightBadge ? (
                  <span className="testimonial-tag testimonial-badge-pill">{item.highlightBadge}</span>
                ) : (
                  <span className="testimonial-tag">
                    Salto +{item.scoreJump?.delta} Puntos
                  </span>
                )}
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, sIdx) => (
                    <svg key={sIdx} width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
