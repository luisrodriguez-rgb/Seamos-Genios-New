import React from 'react';

export default function PurposeStory() {
  return (
    <section className="purpose-section" id="nosotros">
      <div className="container">
        <div className="purpose-wrapper">
          {/* Photo Container with Real Students Photograph */}
          <div className="purpose-photo-card">
            <img
              src="/3_2.webp"
              alt="Estudiantes en Simulacros Oficiales Seamos Genios"
              className="purpose-photo-img"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Overlapping White Floating Card (Coca-Cola Style) */}
          <div className="purpose-floating-card">
            <div className="badge" style={{ marginBottom: '1rem' }}>
              Nuestra Filosofía
            </div>
            <h2 className="purpose-card-title">
              El talento no tiene límites cuando la educación es personalizada
            </h2>
            <div className="purpose-card-body">
              <p>
                Creemos firmemente que cualquier estudiante en Colombia, sin importar su ciudad o colegio de origen, tiene el potencial de superar los 400 puntos en el ICFES Saber 11.
              </p>
              <p>
                Combinamos neurociencia del aprendizaje, simulacros con cronómetro real y la guía de mentores de las mejores universidades para democratizar las oportunidades y abrir las puertas a becas del 100%.
              </p>
            </div>
            <a href="#metodologia" className="purpose-pill-btn">
              Conoce Nuestra Metodología →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
