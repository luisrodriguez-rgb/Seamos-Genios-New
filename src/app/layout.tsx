import type { Metadata, Viewport } from 'next';
import '@/styles/main.css';
import { CartProvider } from '@/context/CartContext';
import CartDrawer from '@/components/CartDrawer';
import CheckoutModal from '@/components/CheckoutModal';
import AuthModal from '@/components/AuthModal';
import CartToast from '@/components/CartToast';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export const viewport: Viewport = {
  themeColor: '#FF1E27',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://seamos-genios-astro.vercel.app'),
  title: 'Seamos Genios | Preparación Inteligente ICFES Saber 11, IA & Neurociencia en Colombia',
  description:
    'Plataforma educativa líder en Colombia que combina inteligencia artificial y neurociencia para revolucionar el rendimiento en el examen ICFES Saber 11. Simulacros calibrados de 254 preguntas y entrega en 24 horas.',
  keywords: [
    'PreICFES',
    'ICFES Saber 11',
    'ICFES 2026',
    'Simulacros ICFES',
    'Neurociencia Educativa',
    'Seamos Genios',
    'Preparación ICFES Colombia',
    'Puntaje 400 ICFES',
    'Becas Universitarias',
  ],
  authors: [{ name: 'Seamos Genios SAS' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      { url: '/assets/logo-red.svg', type: 'image/svg+xml' },
      { url: '/assets/favicon.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/assets/logo-red.svg',
    apple: [{ url: '/assets/favicon.png', sizes: '180x180' }],
  },
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    siteName: 'Seamos Genios',
    url: 'https://seamos-genios-astro.vercel.app/',
    title: 'Seamos Genios | Preparación Inteligente ICFES Saber 11, IA & Neurociencia en Colombia',
    description:
      'Plataforma educativa líder en Colombia que combina inteligencia artificial y neurociencia para revolucionar el rendimiento en el examen ICFES Saber 11. Simulacros calibrados de 254 preguntas y entrega en 24 horas.',
    images: [
      {
        url: '/sg-preifces-bogota.webp',
        width: 1200,
        height: 630,
        alt: 'Seamos Genios - PreICFES Saber 11',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seamos Genios | Preparación Inteligente ICFES Saber 11, IA & Neurociencia en Colombia',
    description:
      'Plataforma educativa líder en Colombia que combina inteligencia artificial y neurociencia para revolucionar el rendimiento en el examen ICFES Saber 11.',
    images: ['/sg-preifces-bogota.webp'],
  },
};

const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'EducationalOrganization',
      '@id': 'https://seamos-genios-astro.vercel.app/#organization',
      name: 'Seamos Genios',
      url: 'https://seamos-genios-astro.vercel.app',
      logo: {
        '@type': 'ImageObject',
        url: 'https://seamos-genios-astro.vercel.app/assets/logo-red.svg',
      },
      description:
        'Plataforma educativa líder en Colombia que combina inteligencia artificial y neurociencia para maximizar el rendimiento en el examen ICFES Saber 11.',
      founder: [
        {
          '@type': 'Person',
          name: 'Daniel De La Cruz',
          jobTitle: 'Presidente & Fundador',
        },
        {
          '@type': 'Person',
          name: 'Ángel Pacheco',
          jobTitle: 'Vicepresidente (475 Puntos ICFES)',
        },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://seamos-genios-astro.vercel.app/#website',
      url: 'https://seamos-genios-astro.vercel.app',
      name: 'Seamos Genios',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body>
        <CartProvider>
          {children}

          {/* Floating UI Elements */}
          <FloatingWhatsApp />
          <CartDrawer />
          <CheckoutModal />
          <AuthModal />
          <CartToast />
        </CartProvider>
      </body>
    </html>
  );
}
