# 🚀 Plan de Desarrollo e Implementación - Landing Pública "Seamos Genios"

> **Empresa:** Seamos Genios (SG)  
> **Proyecto:** Plan de Ejecución y Hoja de Ruta para Landing Page de Alta Conversión  
> **Documento:** Plan de Trabajo 1 (`plan_1.md`)  
> **Versión:** 2.0 (SG-2026-2)  

---

## 1. 📋 Resumen del Plan

Este plan detalla las etapas de ejecución para construir, optimizar y lanzar la nueva landing page pública de **Seamos Genios**. El objetivo es estructurar un proceso ágil en 4 fases principales que garantiza una estética premium, alta velocidad de carga, optimización SEO y un funnel de captación B2B altamente efectivo.

---

## 2. 📅 Fases del Proyecto y Cronograma de Ejecución

```
┌────────────────────────────────────────────────────────────────────────┐
│ FASE 1: Fundamentos y Diseño de UI/UX (Días 1-2)                       │
│ ├─ Definición de Copys y Propuesta de Valor                           │
│ └─ Sistema de Estilos CSS (Design Tokens, Glassmorphism, Colores)     │
├────────────────────────────────────────────────────────────────────────┤
│ FASE 2: Desarrollo Frontend & Componentes Core (Días 3-4)              │
│ ├─ Maquetación Semántica HTML5                                        │
│ ├─ Hero Section + Social Proof + Grid de Soluciones                   │
│ └─ Estructura SEO (Meta Tags, OpenGraph, JSON-LD)                      │
├────────────────────────────────────────────────────────────────────────┤
│ FASE 3: Lógica Interactiva & Funnel de Conversión (Días 5-6)          │
│ ├─ Formulario Multi-Paso Inteligente                                  │
│ ├─ Calculadora de Retorno B2B Interactiva                             │
│ └─ Micro-interacciones (Scroll Reveal, Hover Effects, Modales)         │
├────────────────────────────────────────────────────────────────────────┤
│ FASE 4: Optimización, Accesibilidad y QA (Día 7)                       │
│ ├─ Auditoría Lighthouse (Performance ≥ 95, SEO 100, Accesibilidad 100) │
│ └─ Pruebas Responsive (Mobile, Tablet, Desktop)                       │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 3. 🎯 Detalle Táctico por Fase

### FASE 1: Fundamentos, Sistema de Diseño y Copywriting (Días 1-2)
- **Entregables:**
  - Archivo `index.css` con variables CSS completas (`:root`), paleta HSL neón/oscura, estilos para tipografías (*Plus Jakarta Sans* & *Inter*), componentes de glassmorphism y reset CSS moderno.
  - Guía de copys persuasivos enfocados en Inteligencia Competitiva, Software e IA para el target B2B.

---

### FASE 2: Maquetación Semántica HTML y Estructura SEO (Días 3-4)
- **Entregables:**
  - Documento `index.html` estricto en HTML5 semántico (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
  - Implementación de marcado SEO avanzado:
    - Encabezado `<h1>` único con palabras clave de alta intención.
    - Meta etiquetas para redes sociales (OpenGraph y Twitter Cards).
    - Datos estructurados `JSON-LD` (`Organization` / `ProfessionalService`).

---

### FASE 3: Lógica JS, Calculadora & Captura de Leads (Días 5-6)
- **Entregables:**
  - Módulo `app.js` con lógica para:
    - Formulario multi-paso interactivo de calificación de clientes B2B.
    - Calculadora interactiva de proyección de ROI/Eficiencia.
    - Animaciones de revelado al scroll mediante `IntersectionObserver`.
    - Envío de formulario vía `fetch()` a webhook/CRM con manejo de estados (loading, éxito, error).

---

### FASE 4: Auditoría de Rendimiento, QA & Lanzamiento (Día 7)
- **Entregables:**
  - Optimización de imágenes a formato WebP/SVG.
  - Validación de performance con Lighthouse.
  - Pruebas de usabilidad en dispositivos móviles, tablets y monitores ultrawide.

---

## 4. ✅ Plan de Verificación y Criterios de Aceptación

### 4.1 Pruebas Automatizadas y Auditoría
- **Lighthouse CI / DevTools:**
  - Performance ≥ 95/100
  - Accessibility 100/100
  - Best Practices 100/100
  - SEO 100/100
- **Validación W3C:** HTML y CSS limpios sin errores de sintaxis.

### 4.2 Verificación Manual y UX
- **Formulario de Leads:** Probar el envío de datos en móvil y desktop asegurando validación de campos obligatorios y formato de correo corporativo.
- **Rendimiento:** Verificar que el tiempo First Contentful Paint (FCP) sea inferior a 1.0s en conexiones 4G.
