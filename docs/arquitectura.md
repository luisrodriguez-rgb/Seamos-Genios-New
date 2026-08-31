# Arquitectura Tecnica y Sistema de Diseno - Seamos Genios (Astro 5+)

> **Empresa:** Seamos Genios SAS  
> **Proyecto:** Plataforma Educativa PreICFES, E-Commerce & Portal Multi-Rol  
> **Framework:** Astro 5+ con TypeScript y CSS Modular  
> **Version:** 3.0 (SG-2026-2)  

---

## 1. Objetivos de la Plataforma

1. **Posicionamiento y Conversion Institucional:** Consolidar a Seamos Genios como la entidad lider en preparacion para el examen de estado ICFES Saber 11 en Colombia, combinando neuroaprendizaje e inteligencia artificial.
2. **Arquitectura Multi-Rol Guiada (Anti "Pagina Infinita"):** Ofrecer una experiencia enfocada y segmentada donde estudiantes, rectores de colegios, padres de familia y docentes encuentran su propuesta de valor, herramientas y llamadas a la accion exactas sin saturacion de scroll.
3. **E-Commerce y Checkout de Alta Conversion:** Catalogo de simulacros individuales, planes integrales de 7 meses, cuadernillos fisicos y asesoria personalizada con carrito lateral reactivo (Slide-over Cart Drawer) y checkout directo por WhatsApp y pasarelas de pago (PSE, Nequi, Tarjetas).
4. **Rendimiento Extremo y SEO 100:** Carga inicial inferior a 1 segundo, Lighthouse 100 en SEO y Accesibilidad, empaquetado optimizado mediante Astro SSG.

---

## 2. Sistema de Diseno y Tokens Visuales

### 2.1 Paleta de Color (Variables CSS HSL & Hex)

- **Fondo Base Claro:** `#FFFFFF` y `#F8FAFC`
- **Fondo Obsidian Dark Slate (Modo Nocturno / Modales):** `#0D1117` a `#182234`
- **Rojo Primario Institucional:** `#FF1E27` (Hover: `#D90F17`, Glow: `rgba(255, 30, 39, 0.35)`)
- **Acento Esmeralda (Aprobacion / Metas):** `#10B981`
- **Bordes y Sombras:** `#E2E8F0` con elevaciones sutiles (`--shadow-md`, `--shadow-lg`)

### 2.2 Tipografia

- **Fuente Principal:** Inter (Google Fonts) en pesos 400, 500, 600, 700, 800 y 900.
- **Jerarquia Tipografica:**
  - H1 Hero: `clamp(2.4rem, 4.5vw, 4rem)`
  - H2 Titulo de Seccion: `clamp(1.9rem, 3.2vw, 2.75rem)`
  - H3 Titulos de Tarjeta: `1.25rem - 1.45rem`
  - Textos de Cuerpo: `0.95rem - 1.05rem`

---

## 3. Estructura de Secciones de la Plataforma

```text
┌────────────────────────────────────────────────────────┐
│  01. NAVBAR (Logo, Links, Carrito [0], Login, Registro)│
├────────────────────────────────────────────────────────┤
│  02. HERO (Titulo, Selector Rapido de Rol, Dashboard)  │
├────────────────────────────────────────────────────────┤
│  03. ROLE HUB (Paneles: Estudiante, Colegio, Familia)  │
├────────────────────────────────────────────────────────┤
│  04. CATALOGO E-COMMERCE (Simulacros, Planes, Kits)    │
├────────────────────────────────────────────────────────┤
│  05. ALIANZAS & METRICAS (+1.500 Alumnos, +60 Colegios)│
├────────────────────────────────────────────────────────┤
│  06. METODOLOGIA "DE CERO A GENIO" (4 Pasos)           │
├────────────────────────────────────────────────────────┤
│  07. DIRECTORIO DE COLEGIOS (+60 Instituciones)        │
├────────────────────────────────────────────────────────┤
│  08. TESTIMONIOS & CASOS DE EXITO (Puntajes 400+)      │
├────────────────────────────────────────────────────────┤
│  09. EQUIPO DIRECTIVO & TABLA DE MENTORES              │
├────────────────────────────────────────────────────────┤
│  10. PREGUNTAS FRECUENTES & VIDEO MODAL                │
├────────────────────────────────────────────────────────┤
│  11. FOOTER & CUMPLIMIENTO LEGAL DIAN (Factus SAS)     │
└────────────────────────────────────────────────────────┘
```

---

## 4. Estructura de Archivos del Proyecto Astro

```text
SG-2026-2/
├── astro.config.mjs                 # Configuracion principal de Astro
├── tsconfig.json                    # Configuracion TypeScript
├── package.json                     # Scripts (dev, build, preview)
├── vercel.json                      # Configuracion de despliegue en Vercel
├── docs/
│   └── arquitectura.md              # Documentacion de arquitectura tecnica
├── public/                          # Archivos estaticos (logos SVG, WebP, catalogos JSON)
│   ├── assets/
│   ├── favicon.ico
│   ├── favicon.png
│   └── schools_catalog.json
└── src/
    ├── layouts/
    │   └── Layout.astro             # Layout raiz con metadatos SEO y JSON-LD
    ├── pages/
    │   ├── index.astro              # Pagina principal
    │   └── 404.astro                # Pagina 404
    ├── components/
    │   ├── Navbar.astro             # Barra de navegacion con boton de carrito
    │   ├── Hero.astro               # Hero con selector de rol y widget analitico
    │   ├── RoleHub.astro            # Hub interactivo de roles
    │   ├── EcommerceCatalog.astro   # Catalogo de productos y tienda
    │   ├── CartDrawer.astro         # Drawer deslizable de carrito
    │   ├── CheckoutModal.astro      # Modal de pasarelas de pago
    │   ├── AuthModal.astro          # Modal redisenado Obsidian Dark
    │   ├── Alliances.astro          # Estadisticas de respaldo
    │   ├── PurposeStory.astro       # Neuroaprendizaje y proposito
    │   ├── FlowSteps.astro          # 4 Pasos del metodo
    │   ├── SchoolsCarousel.astro    # Directorio de +60 colegios
    │   ├── Testimonials.astro       # Casos de exito y puntajes record
    │   ├── TeamMentors.astro        # Equipo directivo y mentores
    │   ├── FaqVideo.astro           # Preguntas frecuentes y video modal
    │   ├── Footer.astro             # Footer institucional y DIAN
    │   └── FloatingWhatsApp.astro   # Boton flotante de WhatsApp
    ├── scripts/
    │   ├── app.js                   # Inicializador maestro cliente
    │   ├── cart.js                  # Motor del carrito y checkout
    │   ├── role-guide.js            # Controlador de navegacion por rol
    │   ├── catalog-filter.js        # Filtros de tienda
    │   ├── modal.js                 # Manejo del modal de registro/login
    │   ├── checkout-modal.js        # Pasarelas de pago
    │   ├── countdown.js             # Reloj regresivo ICFES 2026
    │   ├── accordion.js             # Acordeon de FAQ
    │   ├── video-player.js          # Reproductor modal de video
    │   └── schools-directory.js     # Buscador de colegios
    └── styles/                      # Sistema de diseno CSS modular
```

---

## 5. Indicadores Clave de Rendimiento (KPIs)

| Metrica | Meta / Target |
| :--- | :--- |
| **Lighthouse Performance Score** | >= 95 / 100 |
| **Lighthouse Accessibility Score** | 100 / 100 |
| **Lighthouse SEO Score** | 100 / 100 |
| **Tiempo de Carga Completa (FCP/LCP)** | < 1.2 segundos |
| **Tasa de Conversion Estimada** | 5.5% - 8.0% |
