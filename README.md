# Seamos Genios (SG-2026-2) - Ecosistema Digital PreICFES

Plataforma educativa y e-commerce de alto impacto para la preparación del examen de estado **ICFES Saber 11** en Colombia, integrando neuroaprendizaje cognitivo, algoritmos de Inteligencia Artificial adaptativa y mentoría con puntajes récord nacionales (477/500).

---

## 1. Demostraciones en Vivo (Despliegues en Vercel)

| Rama / Versión | Enlace en Vivo (Vercel) | Stack Tecnológico | Propósito |
| :--- | :--- | :--- | :--- |
| **`feat/astro-version`** | 🚀 **[seamos-genios-astro.vercel.app](https://seamos-genios-astro.vercel.app)** | Astro 5+, TypeScript, Modular CSS | Máximo rendimiento web, SEO ultra rápido (<1s) y SSR/SSG. |
| **`feat/expo-version`** | 📱 **[seamos-genios-expo.vercel.app](https://seamos-genios-expo.vercel.app)** | Expo SDK 52, Expo Router v4, React Native Universal | Aplicación universal para Web, Android y iOS desde un solo código. |
| **`main`** | 🏛️ **Rama Base** | Vanilla HTML5, CSS3 Modular, JS ES6+ | Arquitectura nativa sin dependencias de compiladores pesados. |

---

## 2. Estructura y Estrategia de Ramas

El repositorio está organizado en tres ramas aisladas según el caso de uso técnico:

```text
Seamos-Genios-New/
├── main                  # Versión nativa en HTML5/CSS3/JS modular
├── feat/astro-version    # Versión basada en Astro 5+ para máxima velocidad web y SEO
└── feat/expo-version     # Versión universal móvil y web basada en Expo.dev (SDK 52)
```

---

## 3. Comparativa de Arquitectura Técnica

| Característica | `main` (Vanilla) | `feat/astro-version` (Astro 5) | `feat/expo-version` (Expo Universal) |
| :--- | :--- | :--- | :--- |
| **Ecosistema** | Navegador Web nativo | Astro / Vite / Node.js | Expo / React Native / Metro |
| **Plataformas** | Web (Desktop/Mobile) | Web (Desktop/Mobile) | **Web + Android (APK/AAB) + iOS (App Store)** |
| **Estado Global** | `localStorage` + Vanilla JS | `localStorage` + Vanilla JS | **Zustand + AsyncStorage** |
| **Simulador ICFES** | Interactivo en DOM | Interactivo en DOM | **Motor Reactivo en Tiempo Real** |
| **Carrito E-Commerce** | Slide-over Drawer | Slide-over Drawer | **Slide-over Drawer + WhatsApp Checkout** |
| **Estilos** | CSS Modular | CSS Modular / Tokens | **StyleSheet + Expo Linear Gradient** |
| **Despliegue Web** | Vercel / Netlify / CDN | Vercel (`npm run build`) | Vercel (`dist/` vía `vercel.json`) |

---

## 4. Guía de Ejecución Local por Rama

### Opción A: Probar la versión Expo Universal (`feat/expo-version`)
```bash
git checkout feat/expo-version
cd expo/version

# Instalar dependencias
npm install

# Iniciar en Web:
npm run web

# Iniciar en Celular (Expo Go):
npm run start
```

### Opción B: Probar la versión Astro 5+ (`feat/astro-version`)
```bash
git checkout feat/astro-version

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo:
npm run dev
# Abre en el navegador: http://localhost:4321
```

### Opción C: Probar la versión Vanilla (`main`)
```bash
git checkout main

# Servir con cualquier servidor estático (ej: Live Server o npx serve):
npx serve .
```

---

## 5. Módulos y Funcionalidades Principales

1. **Navegación Multi-Rol Anti "Página Infinita":** Selector interactivo y Hub con rutas personalizadas para *Estudiantes*, *Colegios/Rectores*, *Padres de Familia* y *Docentes*.
2. **E-Commerce & Carrito Persistente:** Catálogo de 5 planes formativos con validación de cupones (`GENIO2026`, `ICFES400`), cálculo de descuentos y checkout dual por pasarela y WhatsApp oficial.
3. **Simulador Diagnóstico ICFES en Vivo:** 5 preguntas calibradas en las 5 áreas oficiales (Lectura Crítica, Matemáticas, Sociales, Ciencias Naturales, Inglés) con temporizador y reporte de puntaje.
4. **Directorio Interactivo de +60 Colegios:** Buscador predictivo en tiempo real y filtrado por 7 regiones geográficas de Colombia.
5. **Cumplimiento Legal DIAN:** Facturación electrónica formal respaldada por Factus SAS para convenios con colegios e instituciones públicas.

---

## 6. Licencia y Derechos

© 2026 Seamos Genios SAS. Todos los derechos reservados. Colombia.
