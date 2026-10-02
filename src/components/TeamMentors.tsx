import React from 'react';

interface MentorItem {
  name: string;
  initials: string;
  specialty: string;
  university: string;
  score: string;
  scoreDelta?: string;
  bio: string;
  highlight: boolean;
  avatarColor: string;
}

const mentorsList: MentorItem[] = [
  {
    name: 'Daniel Cuaspoca',
    initials: 'DC',
    specialty: 'Ciencias Exactas & Física',
    university: 'UIS • Medicina',
    score: '477 Pts',
    scoreDelta: 'Salto 348 → 477',
    bio: 'Experto en resolución acelerada de problemas de cinemática, termodinámica y cálculo aplicado a preguntas Saber 11.',
    highlight: true,
    avatarColor: 'linear-gradient(135deg, #1E3A8A, #3B82F6)',
  },
  {
    name: 'Alexandra Nitiol',
    initials: 'AN',
    specialty: 'Lectura Crítica & Lenguas',
    university: 'UNAL • Medicina',
    score: '428 Pts',
    scoreDelta: 'Nivel C1 Oxford',
    bio: 'Especialista en deconstrucción de textos filosóficos, premisas complejas y tipología textual para lectura crítica.',
    highlight: true,
    avatarColor: 'linear-gradient(135deg, #701A75, #D946EF)',
  },
  {
    name: 'David Cardona',
    initials: 'DC',
    specialty: 'Sociales & Ciudadanas',
    university: 'Universidad Icesi',
    score: '477 Pts',
    scoreDelta: 'Puntaje en 1ra presentación',
    bio: 'Enfocado en análisis de constitución política, perspectivas socioeconómicas y resolución de conflictos éticos.',
    highlight: true,
    avatarColor: 'linear-gradient(135deg, #065F46, #10B981)',
  },
  {
    name: 'Jesús Tovar',
    initials: 'JT',
    specialty: 'Ciencias Naturales & Biología',
    university: 'Univ. Surcolombiana',
    score: '405 Pts',
    scoreDelta: 'Mención de Honor',
    bio: 'Docente apasionado por la genética, ecología y química orgánica orientada al diseño experimental ICFES.',
    highlight: false,
    avatarColor: 'linear-gradient(135deg, #166534, #22C55E)',
  },
  {
    name: 'Heilen Aranda',
    initials: 'HA',
    specialty: 'Lectura Crítica & Filosofía',
    university: 'Univ. del Tolima',
    score: '424 Pts',
    scoreDelta: 'Récord Regional',
    bio: 'Mentora de argumentación lógica, falacias retóricas y comprensión semántica profunda de ensayos clásicos.',
    highlight: true,
    avatarColor: 'linear-gradient(135deg, #991B1B, #EF4444)',
  },
  {
    name: 'Carlos Murillo',
    initials: 'CM',
    specialty: 'Filosofía & Razonamiento',
    university: 'Unipamplona • Derecho',
    score: '441 Pts',
    scoreDelta: 'Salto 353 → 441',
    bio: 'Metodología analítica para desarmar opciones distractoras en el componente de ciencias sociales y lectura crítica.',
    highlight: false,
    avatarColor: 'linear-gradient(135deg, #4C1D95, #8B5CF6)',
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

        {/* Mentors Cards Grid (Replaces old static table) */}
        <div className="mentors-grid">
          {mentorsList.map((mentor, idx) => (
            <div className={`mentor-profile-card ${mentor.highlight ? 'featured' : ''}`} key={idx}>
              <div className="mentor-card-head">
                <div
                  className="mentor-avatar-circle"
                  style={{ background: mentor.avatarColor }}
                >
                  {mentor.initials}
                </div>
                <div className="mentor-meta">
                  <h4 className="mentor-name">{mentor.name}</h4>
                  <span className="mentor-uni">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c3 3 9 3 12 0v-5" />
                    </svg>
                    {mentor.university}
                  </span>
                </div>
                <div className="mentor-score-badge">
                  <span className="score-pts">{mentor.score}</span>
                  {mentor.scoreDelta && (
                    <span className="score-delta-sub">{mentor.scoreDelta}</span>
                  )}
                </div>
              </div>

              <div className="mentor-specialty-pill">
                <span className="spec-dot"></span>
                <span>{mentor.specialty}</span>
              </div>

              <p className="mentor-bio">{mentor.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
