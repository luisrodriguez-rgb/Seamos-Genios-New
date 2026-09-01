# Seamos Genios - Versión Universal Expo.dev (Rama: `feat/expo-version`)

Aplicación universal (Web, iOS y Android) para la preparación del examen de estado **ICFES Saber 11** en Colombia, construida con **Expo SDK 52**, **Expo Router v4** y **React Native**.

🌐 **Enlace en Producción (Vercel):** [https://seamos-genios-expo.vercel.app](https://seamos-genios-expo.vercel.app)

---

## 1. Visión General & Stack Tecnológico

Esta rama contiene la versión completa desarrollada sobre el ecosistema de **Expo.dev / React Native Universal**, permitiendo compartir una única base de código para Web y Aplicación Móvil nativa.

- **Framework:** Expo SDK 52.x + Expo Router v4 (Enrutamiento estático universal basado en archivos)
- **Lenguaje:** TypeScript 5.3+ estricto
- **Estado Global:** Zustand con persistencia en `@react-native-async-storage/async-storage`
- **Iconografía:** `lucide-react-native` (iconos vectoriales limpios)
- **Efectos Visuales:** `expo-linear-gradient`, `expo-blur`, paleta multi-tonal Obsidian Dark (`#0D1117`), Blanco Institucional (`#F8FAFC`) y Rojo Corporativo (`#FF1E27`)
- **SEO & Metadatos:** `app/+html.tsx` con Open Graph completo, Twitter Cards y favicon oficial SVG

---

## 2. Estructura del Código

```text
expo/version/
├── README.md                            # Este documento
├── app.json                             # Configuración Expo SDK 52
├── package.json                         # Dependencias y scripts
├── tsconfig.json                        # Configuración TypeScript
├── vercel.json                          # Configuración Vercel (outputDirectory: "dist")
├── app/
│   ├── +html.tsx                        # Plantilla raíz HTML con OpenGraph, SEO y favicon SVG
│   ├── +not-found.tsx                   # Pantalla 404
│   ├── _layout.tsx                      # Layout raíz y proveedores globales
│   ├── (tabs)/
│   │   ├── _layout.tsx                  # Navegación por pestañas universal
│   │   ├── index.tsx                    # Landing interactiva y Hub multirol
│   │   ├── catalog.tsx                  # Tienda E-Commerce y precios
│   │   ├── simulator.tsx                # Simulador ICFES en vivo
│   │   └── schools.tsx                  # Directorio de +60 colegios
│   └── role/
│       └── [id].tsx                     # Vista de detalle por rol
├── components/
│   ├── layout/                          # HeaderNav, FooterSection (DIAN Factus), FloatingWhatsApp
│   ├── home/                            # HeroBanner, RoleSelector, RoleHubCards, Methodology, Metrics, Testimonials, Mentors, Faq
│   ├── ecommerce/                       # ProductCard, CartDrawer, CheckoutModal
│   ├── simulator/                       # QuestionCard, TimerWidget, ScoreReport
│   ├── auth/                            # AuthModal Obsidian Dark (+57)
│   └── ui/                              # Button, Badge, Input, ModalContainer
├── constants/
│   ├── Colors.ts                        # Tokens de diseño
│   ├── ProductsData.ts                  # Catálogo de 5 productos y cupones
│   ├── SchoolsData.ts                   # Directorio de colegios
│   ├── QuestionsData.ts                 # Preguntas ICFES calibradas
│   └── TeamData.ts                      # Mentores y FAQs
├── store/
│   ├── useCartStore.ts                  # Carrito Zustand + AsyncStorage
│   ├── useAuthStore.ts                  # Estado de usuario y rol
│   └── useSimulatorStore.ts             # Estado de simulacro en vivo
└── assets/                              # Logos vectoriales SVG e imágenes WebP
```

---

## 3. Módulos y Funcionalidades

1. **Arquitectura Visual Multi-Tonal:** Alternancia de fondos de alto contraste (Hero en Obsidian Dark $\rightarrow$ Role Hub en Blanco Institucional $\rightarrow$ Metodología en Rojo Corporativo $\rightarrow$ Métricas en Cool Slate).
2. **Simulador ICFES en Vivo:** Motor diagnóstico de 5 preguntas oficiales calibradas, cronómetro de 5 minutos, cálculo de puntaje sobre 500 y reporte de retroalimentación inmediata.
3. **E-Commerce & Carrito Deslizable (`useCartStore`):** Gestión de ítems con persistencia en `AsyncStorage`, validación de cupones (`GENIO2026`, `ICFES400`) y checkout por WhatsApp y pasarela PSE/Nequi/Tarjetas.
4. **Directorio de +60 Colegios:** Buscador por texto y filtro por 7 regiones geográficas de Colombia.
5. **Autenticación Multi-Rol:** Modal Obsidian Dark con prefijo colombiano (+57) y selección de rol (*Estudiante, Colegio, Familia, Docente*).

---

## 4. Instrucciones de Ejecución Local

Dentro de `expo/version/`:

```bash
cd expo/version

# 1. Instalar dependencias
npm install

# 2. Modo Web (Navegador)
npm run web

# 3. Modo Móvil (Expo Go en iOS / Android)
npm run start
# Escanea el código QR desde la aplicación Expo Go en tu celular

# 4. Compilar estático para Producción Web
npm run build
```

---

## 5. Despliegue en Vercel

```bash
cd expo/version
npx vercel --prod
```

© 2026 Seamos Genios SAS. Todos los derechos reservados.
