# Arquitectura Técnica y Sistema de Diseño - Seamos Genios (Next.js 15+ & React 19)

> **Empresa:** Seamos Genios SAS  
> **Proyecto:** Plataforma Educativa PreICFES, E-Commerce & Portal Multi-Rol  
> **Framework:** Next.js 15+ (App Router) con React 19, TypeScript y CSS Modular  
> **Versión:** 3.0 (SG-2026-2)  

---

## 1. Objetivos de la Plataforma

1. **Posicionamiento y Conversión Institucional:** Consolidar a Seamos Genios como la entidad líder en preparación para el examen de estado ICFES Saber 11 en Colombia, combinando neuroaprendizaje e inteligencia artificial.
2. **Arquitectura Multi-Rol Guiada (Anti "Página Infinita"):** Ofrecer una experiencia enfocada y segmentada donde estudiantes, rectores de colegios, padres de familia y docentes encuentran su propuesta de valor, herramientas y llamadas a la acción exactas sin saturación de scroll.
3. **E-Commerce y Checkout de Alta Conversión:** Catálogo de simulacros individuales, planes integrales de 7 meses, cuadernillos físicos y asesoría personalizada con carrito lateral reactivo (`CartDrawer`), `CartContext` con persistencia en `localStorage`, cálculo de cupones y checkout directo por WhatsApp y pasarelas de pago (PSE, Nequi, Tarjetas).
4. **Rendimiento Extremo y SEO 100:** Carga inicial ultrarrápida, Lighthouse 100 en SEO y Accesibilidad, empaquetado optimizado mediante Next.js App Router estático prerenderizado.

---

## 2. Sistema de Diseño y Tokens Visuales

### 2.1 Paleta de Color (Variables CSS Globales)

- **Fondo Base Claro:** `#FFFFFF` y `#F8FAFC`
- **Fondo Obsidian Dark Slate (Modo Nocturno / Modales):** `#0D1117` a `#182234`
- **Rojo Primario Institucional:** `#FF1E27` (Hover: `#D90F17`, Glow: `rgba(255, 30, 39, 0.35)`)
- **Acento Esmeralda (Aprobación / Metas):** `#10B981`
- **Bordes y Sombras:** `#E2E8F0` con elevaciones sutiles (`--shadow-md`, `--shadow-lg`)

### 2.2 Tipografía

- **Fuente Principal:** Inter (Google Fonts) en pesos 400, 500, 600, 700, 800 y 900.
- **Jerarquía Tipográfica:**
  - H1 Hero: `clamp(2.4rem, 4.5vw, 4rem)`
  - H2 Título de Sección: `clamp(1.9rem, 3.2vw, 2.75rem)`
  - H3 Títulos de Tarjeta: `1.25rem - 1.45rem`
  - Textos de Cuerpo: `0.95rem - 1.05rem`

---

## 3. Estructura de Secciones de la Plataforma

```text
┌────────────────────────────────────────────────────────┐
│  01. NAVBAR (Logo, Links, Carrito [0], Login, Registro)│
├────────────────────────────────────────────────────────┤
│  02. HERO (Título, Selector Rápido de Rol, Dashboard)  │
├────────────────────────────────────────────────────────┤
│  03. ROLE HUB (Paneles: Estudiante, Colegio, Familia)  │
├────────────────────────────────────────────────────────┤
│  04. CATÁLOGO E-COMMERCE (Simulacros, Planes, Kits)    │
├────────────────────────────────────────────────────────┤
│  05. ALIANZAS & MÉTRICAS (+1.500 Alumnos, +60 Colegios)│
├────────────────────────────────────────────────────────┤
│  06. METODOLOGÍA "DE CERO A GENIO" (4 Pasos)           │
├────────────────────────────────────────────────────────┤
│  07. MAPA DE COBERTURA NACIONAL (SVG Colombia)         │
├────────────────────────────────────────────────────────┤
│  08. DOBLE MARQUESINA DE COLEGIOS (+60 Instituciones)  │
├────────────────────────────────────────────────────────┤
│  09. TESTIMONIOS & CASOS DE ÉXITO (Puntajes 400+)      │
├────────────────────────────────────────────────────────┤
│  10. EQUIPO DIRECTIVO & TABLA DE MENTORES              │
├────────────────────────────────────────────────────────┤
│  11. COMPARATIVA DE MERCADO & PASARELAS DE PAGO        │
├────────────────────────────────────────────────────────┤
│  12. PREGUNTAS FRECUENTES & VIDEO TOUR                 │
├────────────────────────────────────────────────────────┤
│  13. CONTACTO DIRECTO & ASESORÍA WHATSAPP              │
├────────────────────────────────────────────────────────┤
│  14. FOOTER & CUMPLIMIENTO LEGAL DIAN (Factus SAS)     │
└────────────────────────────────────────────────────────┘
```

---

## 4. Estructura de Archivos del Proyecto Next.js

```text
SG-2026-2/
├── next.config.mjs                  # Configuración oficial de Next.js
├── tsconfig.json                    # Configuración TypeScript
├── package.json                     # Scripts y dependencias
├── vercel.json                      # Configuración de despliegue en Vercel
├── docs/
│   ├── arquitectura.md              # Documentación técnica
│   └── diagrams/                    # Diagramas de arquitectura
├── public/                          # Recursos estáticos (Logos SVG, WebP, catalogos JSON)
│   ├── assets/
│   ├── favicon.ico
│   ├── favicon.png
│   └── schools_catalog.json
└── src/
    ├── app/
    │   ├── layout.tsx               # RootLayout con SEO, metadatos y CartProvider
    │   ├── page.tsx                 # Página principal interactiva
    │   └── not-found.tsx            # Página 404 personalizada
    ├── context/
    │   └── CartContext.tsx          # Gestión de estado de carrito y modales
    ├── components/
    │   ├── Navbar.tsx               # Barra de navegación con contador reactivo
    │   ├── Hero.tsx                 # Hero con selector de rol y widget analítico
    │   ├── RoleHub.tsx              # Hub guiado por roles con navegación por pestañas
    │   ├── EcommerceCatalog.tsx     # Catálogo de productos y filtros
    │   ├── CartDrawer.tsx           # Drawer deslizable de carrito
    │   ├── CheckoutModal.tsx        # Modal de pasarelas de pago
    │   ├── AuthModal.tsx            # Modal de autenticación y registro
    │   ├── CartToast.tsx            # Notificaciones toast
    │   ├── Alliances.tsx            # Métricas animadas y respaldo universitario
    │   ├── PurposeStory.tsx         # Filosofía y neuroaprendizaje
    │   ├── FlowSteps.tsx            # 4 Pasos del método
    │   ├── NetworkMap.tsx           # Mapa interactivo de Colombia
    │   ├── SchoolsCarousel.tsx      # Doble marquesina de colegios aliados
    │   ├── Testimonials.tsx         # Casos de éxito y puntajes récord
    │   ├── TeamMentors.tsx          # Equipo directivo y tabla de mentores
    │   ├── Comparison.tsx           # Comparativa vs tradicional y pasarelas
    │   ├── FaqVideo.tsx             # Preguntas frecuentes en acordeón
    │   ├── ContactWhatsapp.tsx      # Formulario de contacto directo
    │   ├── Footer.tsx               # Footer institucional y DIAN
    │   ├── FloatingWhatsApp.tsx     # Botón flotante de WhatsApp
    │   └── icons/
    │       └── WhatsappIcon.tsx     # Ícono oficial SVG
    └── styles/                      # Sistema de diseño CSS modular
```

---

## 5. Indicadores Clave de Rendimiento (KPIs)

| Métrica | Meta / Target |
| :--- | :--- |
| **Lighthouse Performance Score** | >= 95 / 100 |
| **Lighthouse Accessibility Score** | 100 / 100 |
| **Lighthouse SEO Score** | 100 / 100 |
| **Tiempo de Carga Completa (FCP/LCP)** | < 1.2 segundos |
| **Tasa de Conversión Estimada** | 5.5% - 8.0% |

© 2026 Seamos Genios SAS. Todos los derechos reservados.
