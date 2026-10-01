import React from 'react';

const testimonialsData = [
  {
    initials: 'LM',
    name: 'Lucía Mendoza',
    handle: '@LuciMendoza_Med • Bucaramanga',
    quote: '"Pasé de 284 puntos en mi primer simulacro a 412 en el examen oficial. Los reportes en 24 horas y el análisis de errores me hicieron entender exactamente en qué estaba fallando."',
    tag: '284 → 412 pts (+128)',
  },
  {
    initials: 'MR',
    name: 'Mateo Rincón',
    handle: '@Mateo_Rincon9 • Bogotá D.C.',
    quote: '"La mejor inversión. El nivel de las preguntas de matemáticas y física es idéntico al de la prueba real. Logré cupo en Ingeniería de Sistemas en la Universidad Nacional."',
    tag: '310 → 425 pts (+115)',
  },
  {
    initials: 'VP',
    name: 'Lic. Víctor Peña',
    handle: 'Rector Col. San Miguel • Cali',
    quote: '"Implementamos Seamos Genios en grado 11 y nuestro promedio institucional subió 38 puntos en un solo año. El panel para rectores nos dio visibilidad total de cada salón."',
    tag: 'Convenio Institucional',
  },
  {
    initials: 'SM',
    name: 'Sofía Morales',
    handle: '@SofiMorales_ • Medellín',
    quote: '"Los talleres de neuroaprendizaje con Ángel Pacheco me enseñaron a controlar los nervios y gestionar el tiempo. Saqué 438 puntos y me gané la beca Quiero Estudiar en Los Andes."',
    tag: 'Beca Quiero Estudiar (438 pts)',
  },
  {
    initials: 'CM',
    name: 'Carlos M.',
    handle: '@CarlosM_Cgena • Cartagena',
    quote: '"Pasé de 353 a 441 puntos. La metodología del equipo me enseñó a razonar las preguntas complejas de lectura crítica y ciencias sociales."',
    tag: '353 → 441 pts (+88)',
  },
  {
    initials: 'SG',
    name: 'Estudiante Destacada',
    handle: '@geniesita • Medellín',
    quote: '"100% recomendados. Plataforma intuitiva, simulacros con cronómetro real y explicaciones detalladas pregunta por pregunta."',
    tag: 'Puntaje Superior 400+',
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
              </div>
              <div className="testimonial-footer">
                <span className="testimonial-tag">{item.tag}</span>
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
