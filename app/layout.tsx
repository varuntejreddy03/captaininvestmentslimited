import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';
import { MobileStickyBar } from '@/components/ui/MobileStickyBar';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { Preloader } from '@/components/ui/Preloader';
import { SmoothScroll } from '@/components/ui/SmoothScroll';
import { BUSINESS_INFO } from '@/lib/constants';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://captaininvestmentslimited.com'),
  title: {
    default: 'Captain Investments Limited | Borehole Drilling & Earth Movers for Hire Lusaka, Zambia',
    template: '%s | Captain Investments Limited',
  },
  description:
    'Captain Investments Limited is Lusaka’s premier contractor for commercial & residential borehole drilling and heavy earth-moving equipment hire across Zambia. Excavators, bulldozers, loaders, rollers, and graders.',
  keywords: [
    'borehole drilling Lusaka',
    'earth movers for hire Zambia',
    'excavator hire Lusaka',
    'bulldozer hire Zambia',
    'plant hire Lusaka',
    'water drilling Zambia',
    'heavy equipment hire Lusaka',
    'solar borehole pumps Zambia',
    'Captain Investments Limited',
  ],
  authors: [{ name: 'Captain Investments Limited' }],
  creator: 'Captain Investments Limited',
  openGraph: {
    type: 'website',
    locale: 'en_ZM',
    url: 'https://captaininvestmentslimited.com',
    siteName: 'Captain Investments Limited',
    title: 'Captain Investments Limited | Borehole Drilling & Earth Movers Hire',
    description:
      'We Drill. We Dig. We Deliver. Premium borehole drilling and heavy machinery plant hire in Lusaka, Zambia.',
    images: [
      {
        url: '/images/logo.png',
        width: 800,
        height: 800,
        alt: 'Captain Investments Limited - Borehole Drilling & Earth Movers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Captain Investments Limited | Boreholes & Earth Movers Zambia',
    description: 'We Drill. We Dig. We Deliver. Premier borehole drilling and heavy plant hire in Lusaka.',
    images: ['/images/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
};

// JSON-LD LocalBusiness Schema
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: BUSINESS_INFO.name,
  image: 'https://captaininvestmentslimited.com/images/logo.png',
  telephone: BUSINESS_INFO.phone,
  email: BUSINESS_INFO.email,
  url: 'https://captaininvestmentslimited.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lusaka',
    addressCountry: 'ZM',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -15.4167,
    longitude: 28.2833,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '17:00',
    },
  ],
  sameAs: [BUSINESS_INFO.facebook],
  priceRange: '$$',
  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Borehole Drilling',
        description: 'Comprehensive geophysical survey, rotary DTH drilling, uPVC casing, gravel packing, and solar pump installation in Lusaka and Zambia.',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Earth Movers for Hire',
        description: 'Heavy construction and mining plant hire including excavators, bulldozers, wheel loaders, motor graders, and rollers with certified operators.',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased selection:bg-amber-500 selection:text-black">
        <SmoothScroll>
          <Preloader />
          <CustomCursor />
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <MobileStickyBar />
        </SmoothScroll>
      </body>
    </html>
  );
}
