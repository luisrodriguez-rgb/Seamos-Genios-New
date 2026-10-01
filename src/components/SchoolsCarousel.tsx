import React from 'react';
import schoolsData from '../../public/schools_catalog.json';

interface SchoolItem {
  name: string;
  location: string;
  dept: string;
  region: string;
  file: string;
}

const schools: SchoolItem[] = schoolsData as SchoolItem[];
const halfLength = Math.ceil(schools.length / 2);
const track1 = schools.slice(0, halfLength);
const track2 = schools.slice(halfLength);

export default function SchoolsCarousel() {
  return (
    <section className="section section-dark schools-carousel-section" id="colegios">
      <div className="container">
        <div className="section-header">
          <div className="badge badge-dark">Alianzas & Cobertura Institucional</div>
          <h2 className="section-title">
            Más de <span className="text-gradient-red">+60 Colegios e Instituciones</span> Confían en Seamos Genios
          </h2>
          <p className="section-subtitle">
            Instituciones educativas oficiales y privadas en más de 12 departamentos potencian el rendimiento Saber 11 de sus estudiantes con nuestra plataforma.
          </p>
        </div>
      </div>

      {/* Dual Continuous Infinite Marquee Tracks (JSConf Filmstrip Style) */}
      <div className="dual-marquee-container">
        {/* Track 1 (Scrolls Left) */}
        <div className="marquee-row-wrapper">
          <div className="marquee-track-left">
            {track1.concat(track1).map((school, index) => (
              <div className="school-film-card" data-region={school.region} key={`t1-${school.name}-${index}`}>
                <div className="school-film-crest-wrap">
                  <img src={`/${school.file}`} alt={school.name} className="school-film-img" loading="lazy" decoding="async" />
                </div>
                <div className="school-film-hover-overlay">
                  <div className="school-film-sg-badge">
                    <img src="/assets/logo-red.svg" alt="Seamos Genios" className="school-film-sg-logo" />
                  </div>
                  <span className="school-film-tag">{school.dept}</span>
                  <h4 className="school-film-name">{school.name}</h4>
                  <span className="school-film-loc">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      style={{ display: 'inline-block', verticalAlign: '-1px', marginRight: '3px' }}
                    >
                      <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    {school.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Track 2 (Scrolls Right) */}
        <div className="marquee-row-wrapper" style={{ marginTop: '1.25rem' }}>
          <div className="marquee-track-right">
            {track2.concat(track2).map((school, index) => (
              <div className="school-film-card" data-region={school.region} key={`t2-${school.name}-${index}`}>
                <div className="school-film-crest-wrap">
                  <img src={`/${school.file}`} alt={school.name} className="school-film-img" loading="lazy" decoding="async" />
                </div>
                <div className="school-film-hover-overlay">
                  <div className="school-film-sg-badge">
                    <img src="/assets/logo-red.svg" alt="Seamos Genios" className="school-film-sg-logo" />
                  </div>
                  <span className="school-film-tag">{school.dept}</span>
                  <h4 className="school-film-name">{school.name}</h4>
                  <span className="school-film-loc">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      style={{ display: 'inline-block', verticalAlign: '-1px', marginRight: '3px' }}
                    >
                      <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    {school.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
