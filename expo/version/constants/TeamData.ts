export interface Director {
  name: string;
  role: string;
  badge: string;
  credentials: string[];
  score: string;
}

export interface Mentor {
  name: string;
  role: string;
  specialty: string;
  institution: string;
  score: string;
}

export const DIRECTORS: Director[] = [
  {
    name: 'Daniel De La Cruz',
    role: 'Director Académico & Neuroaprendizaje',
    badge: 'Co-Fundador',
    score: '477 / 500',
    credentials: [
      'Puntaje récord ICFES Nacional (477/500)',
      'Especialista en Neurobiología del Aprendizaje y Rendimiento Cognitivo',
      'Más de 8 años entrenando a los mejores puntajes del país'
    ]
  },
  {
    name: 'Ángel Pacheco',
    role: 'Director de Metodología & Inteligencia Artificial',
    badge: 'Co-Fundador',
    score: '465 / 500',
    credentials: [
      'Ingeniero de Sistemas e Investigador en Modelos de IA Adaptativa',
      'Diseñador del algoritmo de diagnóstico predictivo de Seamos Genios',
      'Asesor de calidad académica para más de 60 colegios en Colombia'
    ]
  }
];

export const MENTORS: Mentor[] = [
  {
    name: 'Valentina Restrepo',
    role: 'Mentora Principal de Lectura Crítica',
    specialty: 'Filosofía y Análisis Textual',
    institution: 'Universidad Nacional de Colombia',
    score: '100 / 100 en Lectura'
  },
  {
    name: 'Carlos Mario Gómez',
    role: 'Mentor de Matemáticas & Razonamiento Cuantitativo',
    specialty: 'Matemáticas Puras y Álgebra Lineal',
    institution: 'Universidad de los Andes',
    score: '100 / 100 en Matemáticas'
  },
  {
    name: 'Laura Sofía Méndez',
    role: 'Mentora de Ciencias Naturales (Química & Biología)',
    specialty: 'Bioquímica y Genética',
    institution: 'Universidad de Antioquia',
    score: '98 / 100 en Ciencias'
  },
  {
    name: 'Julián David Castro',
    role: 'Mentor de Sociales y Competencias Ciudadanas',
    specialty: 'Derecho Constitucional e Historia',
    institution: 'Universidad del Rosario',
    score: '96 / 100 en Sociales'
  },
  {
    name: 'Sara Michelle Cooper',
    role: 'Mentora de Inglés & Certificaciones',
    specialty: 'Lingüística Aplicada C2',
    institution: 'University of Cambridge (Alumni)',
    score: '100 / 100 en Inglés'
  }
];

export const FAQS = [
  {
    question: '¿Qué diferencia a Seamos Genios de un PreICFES tradicional?',
    answer: 'Combinamos técnicas avanzadas de neuroaprendizaje con inteligencia artificial personalizada. En lugar de memorizar sin sentido, enseñamos a decodificar la estructura lógica del examen ICFES, eliminando trampas cognitivas y acelerando la velocidad de resolución a menos de 1.8 minutos por pregunta.'
  },
  {
    question: '¿Cómo funciona la garantía de aumento de +80 puntos?',
    answer: 'Si un estudiante asiste al 90% de las clases, realiza los simulacros programados y no incrementa al menos 80 puntos respecto a su diagnóstico inicial, tiene derecho a repetir el ciclo completo de preparación sin costo adicional o recibir mentorías 1 a 1 de refuerzo.'
  },
  {
    question: '¿Los simulacros son idénticos a los del examen real ICFES?',
    answer: 'Sí. Nuestros bancos de preguntas están calibrados milimétricamente bajo el marco de evaluación por competencias del ICFES (Resolución y Estándares del MEN), con los mismos tiempos de 4 horas y media por sesión y hojas de respuesta estándar.'
  },
  {
    question: '¿Cómo pueden los colegios y rectores vincularse?',
    answer: 'Ofrecemos convenios institucionales con diagnósticos a toda la cohorte de 10° y 11°, reportes analíticos para directivos, capacitaciones docentes y facturación electrónica autorizada por la DIAN (Factus SAS).'
  },
  {
    question: '¿Cuáles son los métodos de pago disponibles?',
    answer: 'Aceptamos transferencias inmediatas por Nequi, Daviplata, PSE (cualquier banco colombiano), tarjetas de crédito/débito y pagos asistidos directamente vía WhatsApp con un asesor oficial.'
  }
];
