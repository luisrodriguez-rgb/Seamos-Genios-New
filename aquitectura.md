# 🏛️ Arquitectura Técnica y Sistema de Diseño - Landing Pública "Seamos Genios"

> **Empresa:** Seamos Genios (SG)  
> **Proyecto:** Landing Page Pública de Alta Conversión (B2B / Agentes & Inteligencia de Negocios)  
> **Versión:** 2.0 (SG-2026-2)  
> **Estado:** Documento de Arquitectura y Especificación Técnica  

---

## 1. 🎯 Objetivos de la Landing Page

1. **Posicionamiento de Marca:** Consolidar a **Seamos Genios** como la empresa líder en Inteligencia Competitiva, Desarrollo de Software a Medida, Inteligencia Artificial y Growth Marketing.
2. **Generación de Leads Calificados (B2B):** Captar empresas y clientes corporativos de alto valor a través de un funnel de conversión interactivo y un formulario inteligente multi-paso.
3. **Experiencia Visual "WOW":** Interfaz ultramoderna, premium, con glassmorphism, modo oscuro sofisticado, micro-animaciones fluidas y rendimiento de carga ultra rápido (<1.5s).

---

## 2. 🎨 Sistema de Diseño y Estética Visual

### 2.1 Paleta de Color (Variables CSS HSL)
- **Fondo Primario (Obsidian Dark):** `hsl(222, 47%, 7%)`
- **Fondo Secundario (Surface Elevation):** `hsl(217, 33%, 12%)`
- **Acento Primario (Electric Neon Violet):** `hsl(265, 89%, 66%)`
- **Acento Secundario (Cyan Teal Tech):** `hsl(180, 100%, 45%)`
- **Texto Principal:** `hsl(210, 40%, 98%)`
- **Texto Muted:** `hsl(215, 20%, 65%)`
- **Bordes Glassmorphism:** `rgba(255, 255, 255, 0.08)` con `backdrop-filter: blur(16px)`

### 2.2 Tipografía
- **Fuente Principal (Headings & Display):** *Plus Jakarta Sans* / *Outfit* (Google Fonts)
- **Fuente Secundaria (Body & UI):** *Inter* (Google Fonts)
- **Escala Tipográfica Responsive:**
  - H1 Hero: `clamp(2.5rem, 5vw, 4.5rem)`
  - H2 Sección: `clamp(2.0rem, 3.5vw, 3.0rem)`
  - H3 Subtítulo: `1.5rem`
  - Body Text: `1.125rem`

### 2.3 Componentes de UI Frecuentes
- **Gradients Dinámicos:** Texto con `background: linear-gradient(135deg, #a855f7, #06b6d4)` y `background-clip: text`.
- **Tarjetas Flotantes (Glass Cards):** Bordes sutiles iluminados con `box-shadow` reactivo en hover.
- **Botones CTA de Alto Impacto:** Botón primario con gradiente animado, resplandor neón (`glow effect`) y animación de micro-bounce al cursor.

---

## 3. 🧩 Estructura de Secciones de la Landing Page

```
┌────────────────────────────────────────────────────────┐
│  01. HEADER / NAVBAR (Logo, Links Navegación, CTA)     │
├────────────────────────────────────────────────────────┤
│  02. HERO SECTION (H1 Impactante + Subtítulo + CTA +   │
│      Demostración Visual / Gráfica Interactiva)        │
├────────────────────────────────────────────────────────┤
│  03. PRUEBA SOCIAL / TRUST TICKER (Logos de Clientes & │
│      Métricas Clave: +150% ROI, etc.)                  │
├────────────────────────────────────────────────────────┤
│  04. PILARES DE SERVICIO / SOLUCIONES (Grid Interactivo│
│      - IA, Software, Mktg Inteligente, Competitiva)    │
├────────────────────────────────────────────────────────┤
│  05. DEMO INTERACTIVA / CALCULADORA DE POTENCIAL       │
├────────────────────────────────────────────────────────┤
│  06. METODOLOGÍA "DE CERO A GENIO" (4 Pasos)           │
├────────────────────────────────────────────────────────┤
│  07. CASOS DE ÉXITO / TESTIMONIOS (Carrusel / Grid)    │
├────────────────────────────────────────────────────────┤
│  08. LEAD CAPTURE FORM / CALCULADORA B2B MULTI-PASO   │
├────────────────────────────────────────────────────────┤
│  09. FOOTER & COMPLIANCE (Legal, Redes, Sitemap)       │
└────────────────────────────────────────────────────────┘
```

### Detalle de Secciones Clave:

#### 1. Header Dinámico
- Transparente en el top, se transforma en glassmorphism al hacer scroll (`sticky` con `backdrop-filter`).
- Menú de navegación rápida: `Soluciones`, `Inteligencia`, `Casos`, `Proceso`.
- Botón "Agendar Diagnóstico" visible permanentemente.

#### 2. Hero Section
- **Título de alto impacto:** *"Transformamos Datos e Inteligencia en Ventajas Competitivas Imbatibles"*
- **Subtítulo:** *"En Seamos Genios combinamos IA avanzada, desarrollo de software a medida y estrategia de marketing basada en inteligencia competitiva."*
- **Acción (CTA Principal):** "Iniciar Diagnóstico Gratuito" (Abre modal inteligente) + "Ver Casos de Éxito" (Scroll a casos).

#### 3. Pilares de Solución (Services Matrix)
1. 🧠 **Inteligencia Competitiva & IA:** Monitoreo automatizado de mercado, precios, competencia y tendencias.
2. 🚀 **Software & Producto Digital:** Desarrollo web/móvil escalable, arquitecturas cloud y automatizaciones.
3. 📈 **Growth & Marketing Basado en Datos:** Estrategias orientadas a conversiones de alto valor.
4. ⚙️ **Agentes Autónomos de IA:** Automatización de flujos de trabajo corporativos complejos.

#### 4. Calculadora Interactiva de Retorno (Lead Magnet)
- Permite al visitante seleccionar el tamaño de su empresa e industria para simular el impacto en ventas/eficiencia con el sistema de Seamos Genios.

#### 5. Formulario Multi-Paso de Calificación B2B
- **Paso 1:** ¿Cuál es tu objetivo principal? (Escalar Ventas / Implementar IA / Software a Medida / Inteligencia de Mercado).
- **Paso 2:** Tamaño del equipo / Empresa.
- **Paso 3:** Datos de contacto (Nombre, Email Corporativo, WhatsApp, Empresa).

---

## 4. 🛠️ Arquitectura Técnica y Stack Tecnológico

### 4.1 Frontend Core
- **Lenguaje:** HTML5 Semántico + JavaScript ES6+ (Vanilla / Vite para desarrollo modular).
- **Estilos:** CSS3 Vanilla utilizando CSS Custom Properties (`:root`), Flexbox, CSS Grid y Animaciones CSS `@keyframes`.
- **Efectos y Micro-interacciones:** `IntersectionObserver` para scroll reveal, `Web Animations API` / CSS transitions para rendimiento de 60fps.

### 4.2 Optimización SEO y Performance
- **Etiquetas Meta Dinámicas:** `title`, `description`, `keywords`, `canonical`, OpenGraph (`og:title`, `og:image`, `og:url`), Twitter Cards (`summary_large_image`).
- **Estructura Semántica:** `<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>` con jerarquía estricta de encabezados (`h1` único por página).
- **Datos Estructurados (JSON-LD):** Esquemas de `Organization` y `ProfessionalService` indexables por buscadores.
- **Carga de Recursos:** Imágenes en formato WebP con `loading="lazy"`, fuentes web con `font-display: swap` y preconnect a Google Fonts.

### 4.3 Integración de Captura de Leads
- **Validación de Formularios:** Validación cliente en tiempo real con expresiones regulares (Email corporativo, WhatsApp).
- **Envío de Datos:** Envio asíncrono vía `fetch()` a endpoint webhook (CRM / HubSpot / WhatsApp API / Make / Zapier).

---

## 5. 🛡️ Seguridad y Buenas Prácticas

- **Content Security Policy (CSP):** Restricción de scripts externos no autorizados.
- **Sanitización de Inputs:** Prevención de ataques XSS y la inyección de caracteres maliciosos en formularios.
- **CORS & Rate Limiting:** Protección en los endpoints de captura para evitar spam o desbordamientos.

---

## 6. 📊 Indicadores Clave de Rendimiento (KPIs de la Landing)

| Métrica | Meta / Target |
| :--- | :--- |
| **Lighthouse Performance Score** | ≥ 95 / 100 |
| **Lighthouse Accessibility Score** | 100 / 100 |
| **Lighthouse SEO Score** | 100 / 100 |
| **Tiempo de Carga Completa (FCP/LCP)** | < 1.5 segundos |
| **Tasa de Conversión Esperada (CVR)** | 4.5% - 7.0% de visitantes a leads calificados |
