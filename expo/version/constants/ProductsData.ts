export interface Product {
  id: string;
  name: string;
  category: 'simulacros' | 'planes' | 'materiales' | 'asesoria' | 'colegios';
  price: number;
  originalPrice?: number;
  discountBadge?: string;
  period?: string;
  tagline: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  isInstitutional?: boolean;
  ctaText: string;
}

export const PRODUCTS_DATA: Product[] = [
  {
    id: 'simulacro-individual',
    name: 'Simulacro Individual ICFES Saber 11',
    category: 'simulacros',
    price: 15000,
    originalPrice: 25000,
    discountBadge: '40% OFF',
    period: 'por prueba',
    tagline: 'Diagnóstico rápido con 120 preguntas oficiales',
    description: 'Prueba completa bajo la estructura oficial del ICFES con evaluación inmediata en las 5 áreas fundamentales.',
    features: [
      '120 preguntas calibradas con el estándar ICFES 2026',
      'Reporte de puntaje global y por componentes en 24h',
      'Explicación paso a paso de cada respuesta errada',
      'Acceso digital inmediato desde móvil o computador',
      'Comparativa percentil con estudiantes de todo el país'
    ],
    ctaText: 'Comprar Simulacro'
  },
  {
    id: 'plan-completo-calendario-a',
    name: 'Plan Integral Calendario A (7 Meses)',
    category: 'planes',
    price: 300000,
    originalPrice: 600000,
    discountBadge: '50% BECA',
    period: 'pago único / 7 meses',
    tagline: 'El programa definitivo para superar los 400 puntos',
    description: 'Acompañamiento integral con clases en vivo, simulacros ilimitados, tutoría personalizada y plataforma IA 24/7.',
    isPopular: true,
    features: [
      'Más de 180 horas de clases en vivo con docentes récord 450+',
      '14 Simulacros completos con retroalimentación neurocognitiva',
      'Plataforma IA de práctica personalizada por debilidades',
      'Tutor de dudas por WhatsApp 7 días a la semana',
      'Garantía de aumento de +80 puntos o asesoría extendida',
      'Incluye Kit Digital de Cuadernillos Oficiales'
    ],
    ctaText: 'Inscribirme al Plan Completo'
  },
  {
    id: 'kit-cuadernillos-fisicos',
    name: 'Kit de Cuadernillos Físicos Oficiales',
    category: 'materiales',
    price: 65000,
    originalPrice: 90000,
    period: 'envío a toda Colombia',
    tagline: 'Material impreso de alta fidelidad con hojas de respuesta',
    description: 'Set de 3 cuadernillos físicos con preguntas tipo ICFES, hojas de respuesta ópticas y solucionario detallado.',
    features: [
      '3 tomos impresos en papel de alta calidad (350+ páginas)',
      'Hojas de respuesta tipo ICFES para simular el examen real',
      'Solucionario explicativo con técnicas de descarte rápido',
      'Envío a domicilio en cualquier municipio de Colombia',
      'Acceso al aula virtual para ingreso de respuestas'
    ],
    ctaText: 'Adquirir Kit Físico'
  },
  {
    id: 'mentoria-neuroaprendizaje-1a1',
    name: 'Sesión 1 a 1 de Mentoría & Neuroaprendizaje',
    category: 'asesoria',
    price: 80000,
    originalPrice: 120000,
    period: 'sesión de 90 min',
    tagline: 'Estrategia personalizada con un mentor puntaje 470+',
    description: 'Diagnóstico cognitivo individual, diseño de cronograma de estudio y técnicas de control de ansiedad ante el examen.',
    features: [
      'Sesión individual privada por videollamada de 90 minutos',
      'Diagnóstico de curvas de aprendizaje y hábitos de estudio',
      'Plan de acción milimétrico para las 5 áreas del examen',
      'Técnicas de neurociencia para retención acelerada y concentración',
      'Grabación de la sesión y plantilla de seguimiento'
    ],
    ctaText: 'Agendar Mentoría'
  },
  {
    id: 'convenio-institucional-colegios',
    name: 'Plan Institucional para Colegios & Rectores',
    category: 'colegios',
    price: 0,
    period: 'a la medida',
    tagline: 'Eleve el promedio de su institución educativa',
    description: 'Implementación completa para grupos de grados 10° y 11° con dashboard directivo, capacitación docente y facturación electrónica DIAN.',
    isInstitutional: true,
    features: [
      'Diagnósticos institucionales y simulacros periódicos para la cohorte',
      'Dashboard en tiempo real para Rectores, Coordinadores y Docentes',
      'Talleres de pedagogía y evaluación por competencias para profesores',
      'Facturación electrónica oficial y cumplimiento tributario DIAN (Factus SAS)',
      'Acompañamiento presencial o virtual según la región'
    ],
    ctaText: 'Solicitar Cotización Institucional'
  }
];

export const COUPONS: Record<string, { discountPercent: number; name: string }> = {
  'GENIO2026': { discountPercent: 15, name: 'Beca de Lanzamiento (15% OFF)' },
  'ICFES400': { discountPercent: 20, name: 'Cupón de Excelencia (20% OFF)' },
  'PROMO10': { discountPercent: 10, name: 'Descuento Estudiante (10% OFF)' },
};
