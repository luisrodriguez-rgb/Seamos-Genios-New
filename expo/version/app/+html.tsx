import { ScrollViewStyleReset } from 'expo-router/html';
import { type PropsWithChildren } from 'react';

/**
 * Root HTML template for Expo Router Web Static Rendering
 * Configures all Open Graph, Twitter Cards, SEO meta tags and official favicon/logos.
 */
export default function Root({ children }: PropsWithChildren) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        {/* Primary Meta Tags */}
        <title>Seamos Genios | PreICFES de Alto Rendimiento, Neuroaprendizaje & IA</title>
        <meta name="title" content="Seamos Genios | PreICFES de Alto Rendimiento, Neuroaprendizaje & IA" />
        <meta
          name="description"
          content="Supera los 400 puntos en el examen ICFES Saber 11 con Seamos Genios. Neuroaprendizaje cognitivo, tutor de IA adaptativa, 14 simulacros oficiales y mentoría personalizada."
        />
        <meta
          name="keywords"
          content="PreICFES, ICFES Saber 11, Seamos Genios, Neuroaprendizaje, Simulacros ICFES, Puntaje 400, Becas Universitarias, Colombia, ICFES 2026"
        />
        <meta name="author" content="Seamos Genios SAS" />
        <meta name="theme-color" content="#FF1E27" />

        {/* Open Graph / Facebook / WhatsApp */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://seamos-genios-expo.vercel.app/" />
        <meta property="og:site_name" content="Seamos Genios" />
        <meta property="og:title" content="Seamos Genios | De Cero a Genio en el ICFES Saber 11" />
        <meta
          property="og:description"
          content="La plataforma #1 en Colombia con neuroaprendizaje, IA adaptativa y mentoría de puntajes récord nacionales (477/500)."
        />
        <meta property="og:image" content="https://seamos-genios-expo.vercel.app/sg-preifces-bogota.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Seamos Genios PreICFES & Neuroaprendizaje" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://seamos-genios-expo.vercel.app/" />
        <meta name="twitter:title" content="Seamos Genios | PreICFES de Alto Rendimiento" />
        <meta
          name="twitter:description"
          content="Supera los 400 puntos en el examen ICFES Saber 11 con neuroaprendizaje cognitivo y tutor de IA adaptativa."
        />
        <meta name="twitter:image" content="https://seamos-genios-expo.vercel.app/sg-preifces-bogota.webp" />

        {/* Official Favicons & Logos */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon.png" />
        <link rel="apple-touch-icon" href="/assets/icon.png" />
        <link rel="shortcut icon" href="/favicon.svg" />

        {/* Fonts & Reset */}
        <ScrollViewStyleReset />
      </head>
      <body>{children}</body>
    </html>
  );
}
