import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/components/cart/CartProvider';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#242020',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://hmeuro.co.uk'),
  title: {
    default: 'HM EURO LTD | Premium Fragrances',
    template: '%s | HM EURO LTD',
  },
  icons: {
    icon: '/icon.png',
  },
  description:
    'HM EURO LTD is a premier UK perfume retailer offering authentic luxury fragrances from Atralia, Khadlaj, and Afnan, including our signature Pink Cloud collection.',
  keywords: [
    'perfumes UK',
    'luxury fragrances',
    'Pink Cloud perfume',
    'Atralia perfumes',
    'Khadlaj fragrances',
    'Afnan perfumes',
    'Sugar Mallow Pink Cloud',
    'niche perfumes UK',
  ],
  authors: [{ name: 'HM EURO LTD' }],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://hmeuro.co.uk',
    siteName: 'HM EURO LTD',
    title: 'HM EURO LTD | Premium Fragrances',
    description:
      'Discover authentic luxury fragrances curated by HM EURO LTD, including the signature Pink Cloud collection. Fast UK delivery.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${manrope.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-white text-charcoal font-body antialiased selection:bg-rose selection:text-white">
        <CartProvider>
          {/* Accessible skip link for keyboard & screen reader navigation */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-charcoal focus:text-white focus:outline-none focus:ring-2 focus:ring-gold rounded-xs text-sm"
          >
            Skip to main content
          </a>

          <AnnouncementBar />
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
