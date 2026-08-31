# Seamos Genios - Plataforma Educativa PreICFES & E-Commerce (SG-2026-2)

Plataforma digital de alta conversion e impacto institucional para la preparacion del examen de estado ICFES Saber 11 en Colombia, combinando tecnologia de Inteligencia Artificial y neurociencia aplicada al aprendizaje.

Construida sobre **Astro 5+**, con arquitectura modular de componentes, sistema de diseno CSS optimizado con tokens y motor de E-Commerce integrado.

---

## 1. Vision General del Proyecto

Seamos Genios transforma la preparacion academica para estudiantes de bachillerato, colegios, universidades y entidades publicas mediante una experiencia digital de alto rendimiento.

- **Arquitectura Tecnologica:** Astro 5+ con Server-Side Generation (SSG), TypeScript y CSS Vanilla modular.
- **Enfoque de Diseno:** Neutros institucionales de alta gama (estilo Obsidian Dark `#0D1117` y superficie clara `#F8FAFC`) con rojo corporativo (`#FF1E27`). Cero emojis; iconografia SVG profesional uniforme.
- **Rendimiento y Accesibilidad:** Tiempo de carga inferior a 1 segundo, Lighthouse 100 en SEO y accesibilidad plena en dispositivos moviles y escritorio.
- **E-Commerce y Multi-Rol Integrado:** Carrito de compras reactivo (Slide-over Cart Drawer) con persistencia, calculo de cupones y checkout directo por pasarelas (PSE, Nequi, Tarjetas) y WhatsApp.

---

## 2. Arquitectura de Archivos y Directorios

```text
SG-2026-2/
├── README.md                        # Documentacion principal del proyecto
├── astro.config.mjs                 # Configuracion del framework Astro
├── tsconfig.json                    # Configuracion TypeScript
├── package.json                     # Scripts y dependencias
├── vercel.json                      # Configuracion de despliegue en Vercel
├── docs/                            # Especificaciones tecnicas de arquitectura
│   └── arquitectura.md
├── public/                          # Recursos estaticos publicos
│   ├── assets/                      # Logos vectoriales SVG e imagenes institucionales
│   ├── favicon.ico
│   ├── favicon.png
│   └── schools_catalog.json         # Base de datos de +60 colegios aliados
└── src/
    ├── layouts/
    │   └── Layout.astro             # Layout maestro con SEO, OpenGraph, JSON-LD y CSS
    ├── pages/
    │   ├── index.astro              # Landing Page y tienda principal
    │   └── 404.astro                # Pagina 404 personalizada
    ├── components/
    │   ├── Navbar.astro             # Barra de navegacion superior con boton de carrito
    │   ├── Hero.astro               # Hero principal, selector de rol y widget analitico
    │   ├── RoleHub.astro            # Hub interactivo de experiencia por rol
    │   ├── EcommerceCatalog.astro   # Catalogo de productos, simulacros y paquetes
    │   ├── CartDrawer.astro         # Drawer deslizable de carrito de compras
    │   ├── CheckoutModal.astro      # Modal de seleccion de pasarelas de pago
    │   ├── AuthModal.astro          # Modal redisenado de registro e inicio de sesion
    │   ├── Alliances.astro          # Estadisticas y respaldo institucional
    │   ├── PurposeStory.astro       # Neuroaprendizaje y proposito educativo
    │   ├── FlowSteps.astro          # Metodologia en 4 pasos (De Cero a Genio)
    │   ├── SchoolsCarousel.astro    # Directorio interactivo de +60 colegios
    │   ├── Testimonials.astro       # Casos de exito y testimonios reales
    │   ├── TeamMentors.astro        # Equipo directivo y tabla de mentores
    │   ├── FaqVideo.astro           # Preguntas frecuentes y video modal
    │   ├── Footer.astro             # Pie de pagina y cumplimiento legal DIAN
    │   └── FloatingWhatsApp.astro   # Boton flotante de atencion en vivo
    ├── scripts/
    │   ├── app.js                   # Inicializador maestro del cliente
    │   ├── cart.js                  # Motor de carrito en localStorage y WhatsApp checkout
    │   ├── role-guide.js            # Controlador de navegacion y seleccion de rol
    │   ├── catalog-filter.js        # Filtros de categorias de productos
    │   ├── modal.js                 # Manejo del modal de registro/login
    │   ├── checkout-modal.js        # Logica del modal de pasarelas de pago
    │   ├── countdown.js             # Reloj regresivo hacia el ICFES 2026
    │   ├── accordion.js             # Acordeon interactivo de preguntas frecuentes
    │   ├── video-player.js          # Reproductor modal de video institucional
    │   └── schools-directory.js     # Buscador y filtro regional de instituciones
    └── styles/                      # Sistema de estilos CSS modular
        ├── main.css                 # Punto de entrada maestro de estilos
        ├── global/                  # Variables, reset y tipografia
        ├── components/              # Estilos de botones, navbar, modales, carrito, tablas
        └── sections/                # Estilos de cada seccion de la plataforma
```

---

## 3. Funcionalidades Principales

1. **Carrito de Compras E-Commerce (Cart Drawer):** Drawer lateral deslizable con control de cantidades, soporte de cupones de descuento, persistencia en `localStorage`, pasarelas de pago y generacion automatica de pedidos por WhatsApp.
2. **Navegacion Multi-Rol Inteligente (Anti "Pagina Infinita"):** Asistente interactivo en el Hero y Hub segmentado para Estudiantes, Colegios, Familias y Docentes con informacion especifica y llamadas a la accion personalizadas.
3. **Catalogo de Productos y Precios:** Simulacros individuales ($15.000 COP), Plan Completo Calendario A ($300.000 COP), Kit de Cuadernillos Oficiales ($65.000 COP), Sesion 1 a 1 de Mentoria ($80.000 COP) y Cotizador Institucional para Colegios.
4. **Modal de Autenticacion / Registro Redisenado:** Estetica Obsidian Dark Slate con sutil resplandor rojo institucional, logo integrado, tarjetas flotantes de metricas (+1.500 Alumnos, 477 Puntaje Max, 24h Reportes), toggle Login/Inscripcion y prefijo telefonico +57.
5. **Directorio y Buscador de +60 Colegios:** Filtro interactivo por departamento (Bogota & Cundinamarca, Santanderes, Caribe, Antioquia & Eje, Llanos & Amazonia, Centro & Sur) y buscador en tiempo real.
6. **Cumplimiento Legal DIAN:** Informacion legal y validacion electronica con Factus SAS para colegios e instituciones publicas.

---

## 4. Instrucciones de Ejecucion Local

Dentro del directorio del proyecto, ejecuta:

### 1. Instalacion de dependencias

```bash
npm install
```

### 2. Modo Desarrollo

```bash
npm run dev
```

Abre en tu navegador `http://localhost:4321`.

### 3. Compilacion para Produccion

```bash
npm run build
```

Genera la distribucion estatica ultra-optimizada en la carpeta `dist/`.

### 4. Vista Previa de Produccion

```bash
npm run preview
```

---

## 5. Licencia y Derechos

(c) 2026 Seamos Genios SAS. Todos los derechos reservados. Colombia.
