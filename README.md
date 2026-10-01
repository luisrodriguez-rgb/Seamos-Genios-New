# Seamos Genios - Versión Next.js 15+ (Rama: `feat/nextjs-version`)

Plataforma educativa y e-commerce de alto rendimiento para la preparación del examen de estado **ICFES Saber 11** en Colombia, combinando neuroaprendizaje cognitivo, tutor con Inteligencia Artificial, arquitectura Next.js App Router y sistema de diseño modular.

🌐 **Enlace en Producción (Vercel):** [https://seamos-genios-astro.vercel.app](https://seamos-genios-astro.vercel.app)

---

## 1. Visión General & Stack Técnico

Esta rama contiene la versión web migrada a **Next.js 15+ (App Router)** y **React 19**, optimizada para rendimiento, SEO con OpenGraph + Schema JSON-LD, tipado estricto con TypeScript y gestión reactiva de estado para comercio electrónico.

- **Framework:** Next.js 15.x (App Router, Server Components + Client Components reactivos)
- **UI Library:** React 19
- **Lenguaje:** TypeScript 5.x
- **Estilos:** Vanilla CSS modular con tokens de diseño globales (Obsidian Dark `#0D1117`, Superficie Clara `#F8FAFC`, Rojo Corporativo `#FF1E27`)
- **Iconografía:** SVG vectoriales limpios
- **E-Commerce:** Slide-over Cart Drawer reactivo con `CartContext`, persistencia en `localStorage`, cupones (`GENIO10`, `ICFES2026`, `COLEGIO50`) y checkout dual (WhatsApp + Pasarela PSE / Nequi / Tarjetas)

---

## 2. Estructura del Código

```text
SG-2026-2/ (feat/nextjs-version)
├── README.md                        # Documentación principal
├── next.config.mjs                  # Configuración oficial de Next.js
├── tsconfig.json                    # Configuración TypeScript para Next.js
├── package.json                     # Scripts y dependencias (Next.js, React, TypeScript)
├── vercel.json                      # Configuración de despliegue en Vercel
├── docs/
│   ├── arquitectura.md              # Especificación técnica y arquitectura
│   └── diagrams/                    # Diagramas de arquitectura y ecosistema
├── public/                          # Recursos estáticos (Logos SVG, imágenes WebP, colegios)
│   ├── assets/
│   │   ├── logo-red.svg             # Favicon y logo oficial rojo
│   │   ├── logo-white.svg           # Logo oficial blanco
│   │   ├── logo-black.svg           # Logo oficial negro
│   │   └── mente_sin_limites.svg
│   ├── sg-preifces-bogota.webp      # Banner OpenGraph para redes
│   └── schools_catalog.json         # Directorio de +60 colegios aliados
└── src/
    ├── app/
    │   ├── layout.tsx               # RootLayout con SEO, OpenGraph, JSON-LD, fuentes y CartProvider
    │   ├── page.tsx                 # Landing Page y catálogo principal con Scroll Reveal
    │   └── not-found.tsx            # Página 404 personalizada con diseño institucional
    ├── context/
    │   └── CartContext.tsx          # Estado global de carrito, cupones, modales y WhatsApp
    ├── components/
    │   ├── Navbar.tsx               # Barra de navegación con contador reactivo
    │   ├── Hero.tsx                 # Hero interactivo, reloj ICFES 2026 y comparador
    │   ├── RoleHub.tsx              # Hub guiado por rol (Estudiante, Colegio, Familia, Docente)
    │   ├── EcommerceCatalog.tsx     # Catálogo oficial de 6 productos y filtros de categoría
    │   ├── CartDrawer.tsx           # Slide-over Cart Drawer reactivo con cupones
    │   ├── CheckoutModal.tsx        # Modal de pasarelas de pago (PSE, Nequi, Tarjetas)
    │   ├── AuthModal.tsx            # Modal de registro / inicio de sesión Obsidian Dark (+57)
    │   ├── CartToast.tsx            # Notificaciones toast flotantes de carrito
    │   ├── Alliances.tsx            # Estadísticas dinámicas con contadores y universidades
    │   ├── PurposeStory.tsx         # Neuroaprendizaje y propósito (tarjeta flotante)
    │   ├── FlowSteps.tsx            # Metodología en 4 fases y diagrama visual
    │   ├── NetworkMap.tsx           # Mapa topográfico SVG interactivo de Colombia y nodos
    │   ├── SchoolsCarousel.tsx      # Doble marquesina continua de +60 colegios aliados
    │   ├── Testimonials.tsx         # Wall of Love con casos de éxito y puntajes 400+
    │   ├── TeamMentors.tsx          # Directores fundadores y tabla de mentores
    │   ├── Comparison.tsx           # Tabla comparativa y pasarelas con sello DIAN Factus SAS
    │   ├── FaqVideo.tsx             # Preguntas frecuentes en acordeón y demo video tour
    │   ├── ContactWhatsapp.tsx      # Formulario de contacto directo y banner de WhatsApp
    │   ├── Footer.tsx               # Pie de página monumental y aviso legal DIAN
    │   ├── FloatingWhatsApp.tsx     # Botón flotante de WhatsApp
    │   └── icons/
    │       └── WhatsappIcon.tsx     # Ícono SVG oficial de WhatsApp
    └── styles/                      # Sistema de diseño CSS modular (tokens, componentes, secciones)
```

---

## 3. Instrucciones de Ejecución Local

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo (Next.js)
npm run dev

# Abre en tu navegador: http://localhost:3000

# 3. Compilar para producción
npm run build

# 4. Iniciar el servidor de producción
npm start
```

---

## 4. Despliegue en Vercel

```bash
npx vercel --prod
```

© 2026 Seamos Genios SAS. Todos los derechos reservados.
