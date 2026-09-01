export interface Question {
  id: number;
  area: 'Lectura Crítica' | 'Matemáticas' | 'Sociales y Ciudadanas' | 'Ciencias Naturales' | 'Inglés';
  badgeColor: string;
  context?: string;
  statement: string;
  options: {
    key: 'A' | 'B' | 'C' | 'D';
    text: string;
  }[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  competence: string;
}

export const SAMPLE_QUESTIONS: Question[] = [
  {
    id: 1,
    area: 'Lectura Crítica',
    badgeColor: '#3B82F6',
    context: 'En el ensayo sobre la ceguera contemporánea, el autor afirma: "No somos ignorantes por falta de datos, sino por exceso de ruido que incapacita el juicio reflexivo".',
    statement: '¿Cuál de las siguientes afirmaciones sintetiza con mayor precisión la tesis del autor?',
    options: [
      { key: 'A', text: 'La abundancia de información superficial atrofia la capacidad de análisis crítico.' },
      { key: 'B', text: 'El acceso a internet garantiza el desarrollo del pensamiento abstracto.' },
      { key: 'C', text: 'La ignorancia actual se debe a la carencia de fuentes bibliográficas confiables.' },
      { key: 'D', text: 'El ruido auditivo en las ciudades modernas impide la concentración de los lectores.' }
    ],
    correctAnswer: 'A',
    explanation: 'El autor contrapone "datos" frente a "juicio reflexivo", argumentando que el exceso de estímulos y datos no procesados neutraliza el criterio analítico.',
    competence: 'Reflexión y evaluación de contenidos implícitos'
  },
  {
    id: 2,
    area: 'Matemáticas',
    badgeColor: '#10B981',
    context: 'Una institución educativa reporta que el 60% de sus estudiantes aprobó Matemáticas y el 70% aprobó Lectura Crítica. Si el 10% no aprobó ninguna de las dos asignaturas.',
    statement: '¿Qué porcentaje de estudiantes aprobó ambas materias simultáneamente?',
    options: [
      { key: 'A', text: '30%' },
      { key: 'B', text: '40%' },
      { key: 'C', text: '50%' },
      { key: 'D', text: '20%' }
    ],
    correctAnswer: 'B',
    explanation: 'Por teoría de conjuntos: Total que aprobó al menos una = 100% - 10% = 90%. P(M ∪ L) = P(M) + P(L) - P(M ∩ L) => 90 = 60 + 70 - P(Ambas) => P(Ambas) = 130 - 90 = 40%.',
    competence: 'Formulación y ejecución en situaciones cuantitativas'
  },
  {
    id: 3,
    area: 'Sociales y Ciudadanas',
    badgeColor: '#F59E0B',
    context: 'En un municipio se debate la construcción de una represa hidroeléctrica que generará empleo y regalías, pero inundará tierras ancestrales de una comunidad indígena protegida por la Constitución.',
    statement: 'Desde la perspectiva constitucional colombiana de 1991, ¿cuál es el mecanismo obligatorio y vinculante antes de iniciar la obra?',
    options: [
      { key: 'A', text: 'Consulta Previa libre e informada con las autoridades indígenas legítimas.' },
      { key: 'B', text: 'Aprobación unilateral por decreto del alcalde municipal.' },
      { key: 'C', text: 'Expropiación forzosa inmediata por interés de la empresa privada.' },
      { key: 'D', text: 'Votación abierta únicamente entre los accionistas del proyecto.' }
    ],
    correctAnswer: 'A',
    explanation: 'El artículo 330 de la Constitución y el Convenio 169 de la OIT consagran la Consulta Previa como derecho fundamental para proteger la integridad cultural y territorial.',
    competence: 'Multiperspectivismo y pensamiento social'
  },
  {
    id: 4,
    area: 'Ciencias Naturales',
    badgeColor: '#8B5CF6',
    context: 'Un grupo de investigadores analiza la fotosíntesis en una planta acuática sumergida variando la intensidad lumínica y midiendo el volumen de gas liberado por minuto en tubos de ensayo.',
    statement: '¿Cuál es el gas producido directamente por la fotólisis del agua durante la fase lumínica?',
    options: [
      { key: 'A', text: 'Dióxido de Carbono (CO₂)' },
      { key: 'B', text: 'Oxígeno Molecular (O₂)' },
      { key: 'C', text: 'Metano (CH₄)' },
      { key: 'D', text: 'Nitrógeno Gaseoso (N₂)' }
    ],
    correctAnswer: 'B',
    explanation: 'Durante la fase dependiente de la luz, el fotosistema II rompe moléculas de H₂O (fotólisis), liberando electrones, protones y Oxígeno (O₂) gaseoso.',
    competence: 'Uso comprensivo del conocimiento científico'
  },
  {
    id: 5,
    area: 'Inglés',
    badgeColor: '#EC4899',
    context: 'Conversation snippet: "If Maria had studied the official ICFES preparation guides earlier, she ________ got an exceptional scholarship."',
    statement: 'Complete the sentence with the correct grammatical conditional form:',
    options: [
      { key: 'A', text: 'would have' },
      { key: 'B', text: 'will have' },
      { key: 'C', text: 'can had' },
      { key: 'D', text: 'is having' }
    ],
    correctAnswer: 'A',
    explanation: 'This is a Third Conditional sentence (unreal past situation): If + Past Perfect (had studied) + Would Have + Past Participle (got/gotten).',
    competence: 'Grammar structures and context comprehension'
  }
];
