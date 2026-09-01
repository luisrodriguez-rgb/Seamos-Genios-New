# Seamos Genios - Versión Universal Expo.dev (Rama: `feat/expo-version`)

Aplicación universal (Web, iOS y Android) para la preparación del examen de estado **ICFES Saber 11** en Colombia, construida con **Expo SDK 52**, **Expo Router v4** y **React Native**.

🌐 **Enlace en Producción (Vercel):** [https://seamos-genios-expo.vercel.app](https://seamos-genios-expo.vercel.app)

---

## 1. Ubicación del Proyecto

El código completo de la versión Expo se encuentra aislado en el directorio:
👉 [`expo/version/`](file:///Users/leonfeliperodriguez/Desktop/Trabajos/SG-2026-2/expo/version)

---

## 2. Stack Tecnológico

- **Framework:** Expo SDK 52.x + Expo Router v4
- **Lenguaje:** TypeScript 5.3+
- **Estado Global:** Zustand con persistencia en `@react-native-async-storage/async-storage`
- **Iconografía:** `lucide-react-native`
- **Estética:** Paleta multi-tonal Obsidian Dark (`#0D1117`), Blanco Institucional (`#F8FAFC`) y Rojo Corporativo (`#FF1E27`)
- **SEO & Metadatos:** `app/+html.tsx` con Open Graph completo, Twitter Cards y favicon oficial SVG

---

## 3. Instrucciones de Ejecución

```bash
cd expo/version

# 1. Instalar dependencias
npm install

# 2. Modo Web
npm run web

# 3. Modo Móvil (iOS / Android vía Expo Go)
npm run start

# 4. Compilar para Producción Web
npm run build
```

---

## 4. Despliegue en Vercel

```bash
cd expo/version
npx vercel --prod
```

© 2026 Seamos Genios SAS. Todos los derechos reservados.
