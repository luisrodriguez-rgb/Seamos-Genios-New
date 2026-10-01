import React from 'react';

const mentorsList = [
  {
    name: 'Daniel Cuaspoca',
    specialty: 'Ciencias Exactas & Física',
    university: 'UIS (Medicina)',
    score: '477 Puntos (348 → 477)',
    highlight: true,
  },
  {
    name: 'Alexandra Nitiol',
    specialty: 'Lectura Crítica & Lenguas',
    university: 'UNAL (Medicina)',
    score: '428 Puntos (C1 Oxford)',
    highlight: true,
  },
  {
    name: 'David Cardona',
    specialty: 'Sociales & Ciudadanas',
    university: 'Universidad Icesi',
    score: '477 Puntos (Primera presentación)',
    highlight: true,
  },
  {
    name: 'Jesús Tovar',
    specialty: 'Ciencias Naturales & Biología',
    university: 'Univ. Surcolombiana',
    score: '405 Puntos',
    highlight: false,
  },
  {
    name: 'Heilen Aranda',
    specialty: 'Lectura Crítica & Filosofía',
    university: 'Univ. del Tolima',
    score: '424 Puntos (Récord Institucional)',
    highlight: true,
  },
  {
    name: 'Carlos Murillo',
    specialty: 'Filosofía & Derecho',
    university: 'Unipamplona (Derecho)',
    score: '441 Puntos (353 → 441)',
    highlight: false,
  },
];

export default function TeamMentors() {
  return (
    <section className="section section-surface" id="equipo">
      <div className="container">
        <div className="section-header">
          <div className="badge">Mentores de Excelencia</div>
          <h2 className="section-title">
            El Equipo Detrás de los <span className="text-gradient-red">Resultados</span>
          </h2>
          <p className="section-subtitle">
            Docentes e investigadores con puntajes récord provenientes de las universidades más prestigiosas del país.
          </p>
        </div>

        {/* Leadership Highlight Split */}
        <div className="leadership-highlight">
          {/* Leader 1 */}
          <div className="leader-card">
            <div className="leader-card-head">
              <div className="leader-avatar-circle">DD</div>
              <div className="leader-info">
                <span className="badge">Fundador & Presidente</span>
                <h3>Daniel De La Cruz</h3>
                <div className="leader-role">Universidad del Rosario • Ciencia de Datos</div>
              </div>
            </div>
            <p className="leader-bio">
              Condecorado dos veces por excelencia académica en Samsung Innovation Campus. Ganador de Hackathons de programación e inteligencia de datos, apasionado por revolucionar la educación en Colombia.
            </p>
          </div>

          {/* Leader 2 */}
          <div className="leader-card">
            <div className="leader-card-head">
              <div className="leader-avatar-circle">AP</div>
              <div className="leader-info">
                <span className="badge">Vicepresidente (475 Puntos)</span>
                <h3>Ángel Pacheco</h3>
                <div className="leader-role">UNAL & Uniandes • Doble Titulación</div>
              </div>
            </div>
            <p className="leader-bio">
              Subió de 408 a 475 puntos en el examen ICFES. Cursa Ingeniería Agrícola en la Universidad Nacional y Matemáticas Puras en la Universidad de los Andes de manera simultánea.
            </p>
          </div>
        </div>

        {/* Mentors Structured Table */}
        <div className="table-wrapper">
          <table className="mentors-table">
            <thead>
              <tr>
                <th>Mentor / Docente</th>
                <th>Especialidad Académica</th>
                <th>Universidad de Origen</th>
                <th>Puntaje Destacado ICFES</th>
              </tr>
            </thead>
            <tbody>
              {mentorsList.map((mentor, idx) => (
                <tr key={idx}>
                  <td><strong>{mentor.name}</strong></td>
                  <td>{mentor.specialty}</td>
                  <td>{mentor.university}</td>
                  <td>
                    {mentor.highlight ? (
                      <span style={{ color: 'var(--brand-red)', fontWeight: 800 }}>{mentor.score}</span>
                    ) : (
                      <span>{mentor.score}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
