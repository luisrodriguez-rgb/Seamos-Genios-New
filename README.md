# Seamos Genios - Plataforma Educativa PreICFES (SG-2026-2)

Plataforma web pública de alta conversión e impacto institucional diseñada para la preparación del examen ICFES en Colombia, combinando tecnología de Inteligencia Artificial y neurociencia aplicada al aprendizaje.

---

## 1. Visión General del Proyecto

Seamos Genios transforma la preparación académica para estudiantes de bachillerato, colegios, universidades y entidades públicas mediante una experiencia digital de alto rendimiento. 

- **Enfoque de Diseño:** 90% neutros institucionales (estilo Stripe / Notion / Supabase) y 10% color corporativo (#CC0000).
- **Rendimiento y Accesibilidad:** Estructura HTML5 semántica, tiempo de carga inferior a 1.5 segundos y compatibilidad fluida en dispositivos móviles, tablets y escritorio.
- **Sin Dependencias Pesadas:** Construido con HTML5, CSS3 modular (Patrón 7-1) y JavaScript ES6 nativo.

---

## 2. Arquitectura de Archivos y Directorios

```
SG-2026-2/
├── README.md                     # Documentación principal del proyecto
├── index.html                    # Estructura HTML5 principal del sitio
├── css/                          # Sistema de diseño CSS modular (Patrón 7-1)
│   ├── main.css                  # Punto de entrada CSS maestro (@import)
│   ├── global/
│   │   ├── variables.css         # Tokens de diseño, paleta HSL y modo oscuro
│   │   └── reset.css             # Reset de estilos y tipografía base
│   ├── components/
│   │   ├── buttons.css           # Botones e insignias
│   │   ├── navbar.css            # Navegación fija y menú móvil
│   │   ├── modal.css             # Ventanas modales de inscripción
│   │   └── tables.css            # Tablas comparativas y de mentores
│   └── sections/
│       ├── hero.css              # Sección Hero y reloj regresivo ICFES
│       ├── features.css          # Filas divididas de características
│       ├── pricing.css           # Tarifas horizontales e inversión
│       ├── team.css              # Mentores y cuadro directivo
│       └── footer.css            # Pie de página y responsive queries
├── js/                           # Motor JavaScript Modular (ES6)
│   ├── app.js                    # Inicializador maestro (Punto de entrada)
│   └── modules/
│       ├── theme.js              # Control de modo Claro / Oscuro
│       ├── countdown.js          # Reloj regresivo hacia ICFES Calendario A
│       ├── accordion.js          # Acordeón interactivo de preguntas frecuentes
│       ├── modal.js              # Manejo de modales y navegación móvil
│       └── forms.js              # Procesamiento de formularios y notificaciones
└── docs/                         # Especificaciones técnicas y plan de trabajo
    ├── aquitectura.md
    └── plan_1.md
```

---

## 3. Funcionalidades Principales

1. **Reloj Regresivo en Tiempo Real:** Cuenta regresiva automatizada hacia el Examen ICFES Calendario A (26 de Julio de 2026).
2. **Navegación Móvil Adaptativa:** Menú tipo Drawer para pantallas móviles (< 1024px) y navegación fija con desenfoque de fondo en escritorio.
3. **Interruptor de Tema (Claro / Oscuro):** Selector de modo de color sin emojis con persistencia en `localStorage`.
4. **Filas Divididas de Características (Split Rows):** Layout limpio numerado (01, 02, 03, 04) para presentar los pilares metodológicos sin saturar la interfaz de tarjetas.
5. **Directorio y Tabla de Mentores:** Presentación del equipo directivo (Daniel De La Cruz y Ángel Pacheco) seguida de un cuadro estructurado con puntajes e instituciones del equipo docente.
6. **Estructura de Precios Horizontal:** Presentación destacada del Plan Calendario A (50% Descuento) junto a opciones individuales e institucionales.
7. **Formulario y Ventana Modal:** Sistema de captación de prospectos para estudiantes, colegios y entidades públicas.

---

## 4. Instrucciones de Ejecución Local

Para visualizar la plataforma en un entorno local, ejecuta cualquiera de los siguientes comandos dentro del directorio del proyecto:

### Opción 1: Con Node.js (Recomendado)
```bash
npx serve .
```

### Opción 2: Con Python 3
```bash
python3 -m http.server 8080
```

Luego abre tu navegador e ingresa a `http://localhost:3000` o `http://localhost:8080`.

---

## 5. Licencia y Derechos

© 2026 Seamos Genios. Todos los derechos reservados. Colombia.
