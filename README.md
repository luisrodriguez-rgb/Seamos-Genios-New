# Seamos Genios - Versión Astro 5+ (Rama: `feat/astro-version`)

Plataforma educativa y e-commerce de alto rendimiento para la preparación del examen de estado **ICFES Saber 11** en Colombia, combinando neuroaprendizaje cognitivo, tutor con Inteligencia Artificial y arquitectura Server-Side Generation (SSG).

🌐 **Enlace en Producción (Vercel):** [https://seamos-genios-astro.vercel.app](https://seamos-genios-astro.vercel.app)

---

## 1. Visión General & Stack Técnico

Esta rama contiene la versión web construida sobre **Astro 5+**, diseñada para máxima velocidad de carga (<1s), SEO de nivel mundial (Lighthouse 100) y cero peso de JavaScript innecesario en el cliente.

- **Framework:** Astro 5.x (SSG estático)
- **Lenguaje:** TypeScript + JavaScript ES6+
- **Estilos:** Vanilla CSS modular con variables y tokens de diseño (Obsidian Dark `#0D1117`, Superficie Clara `#F8FAFC`, Rojo Corporativo `#FF1E27`)
- **Iconografía:** SVG vectoriales limpios (0 emojis)
- **E-Commerce:** Slide-over Cart Drawer reactivo con persistencia en `localStorage`, cálculo de cupones y checkout dual (WhatsApp + Pasarela PSE/Nequi/Tarjetas)

---

## 2. Estructura del Código

```text
SG-2026-2/ (feat/astro-version)
├── README.md                        # Este documento
├── astro.config.mjs                 # Configuración de Astro
├── tsconfig.json                    # Configuración TypeScript
├── package.json                     # Scripts y dependencias
├── vercel.json                      # Configuración de despliegue en Vercel
├── public/                          # Recursos estáticos (Logos SVG, imágenes WebP, colegios)
│   ├── assets/
│   │   ├── logo-red.svg             # Favicon y logo oficial rojo
│   │   ├── logo-white.svg           # Logo oficial blanco
│   │   ├── logo-black.svg           # Logo oficial negro
│   │   └── mente_sin_limites.svg
│   ├── sg-preifces-bogota.webp      # Banner OpenGraph para redes
│   └── schools_catalog.json         # Directorio de +60 colegios aliados
└── src/
    ├── layouts/
    │   └── Layout.astro             # Layout maestro con SEO, OpenGraph, JSON-LD y CSS
    ├── pages/
    │   ├── index.astro              # Landing Page y tienda principal
    │   └── 404.astro                # Página 404 personalizada
    ├── components/
    │   ├── Navbar.astro             # Barra de navegación con contador reactivo
    │   ├── Hero.astro               # Hero interactivo, reloj ICFES 2026 y comparador
    │   ├── RoleHub.astro            # Hub guiado por rol (Estudiante, Colegio, Familia, Docente)
    │   ├── EcommerceCatalog.astro   # Catálogo oficial de 5 productos
    │   ├── CartDrawer.astro         # Drawer de carrito con cupones
    │   ├── CheckoutModal.astro      # Modal de pasarelas de pago
    │   ├── AuthModal.astro          # Modal de registro Obsidian Dark (+57)
    │   ├── Alliances.astro          # Estadísticas y métricas
    │   ├── PurposeStory.astro       # Neuroaprendizaje y propósito
    │   ├── FlowSteps.astro          # Metodología en 4 fases
    │   ├── SchoolsCarousel.astro    # Directorio de +60 colegios
    │   ├── Testimonials.astro       # Casos de éxito y puntajes 400+
    │   ├── TeamMentors.astro        # Directores fundadores y mentores
    │   ├── FaqVideo.astro           # Preguntas frecuentes y video
    │   ├── Footer.astro             # Pie de página y DIAN Factus SAS
    │   └── FloatingWhatsApp.astro   # Botón flotante de WhatsApp
    ├── scripts/                     # Controladores cliente (cart, role-guide, etc.)
    └── styles/                      # Sistema de diseño CSS modular
```

---

## 3. Instrucciones de Ejecución Local

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev

# Abre en tu navegador: http://localhost:4321

# 3. Compilar para producción
npm run build

# 4. Previsualizar la compilación de producción
npm run preview
```

---

## 4. Despliegue en Vercel

```bash
npx vercel --prod
```

© 2026 Seamos Genios SAS. Todos los derechos reservados.
