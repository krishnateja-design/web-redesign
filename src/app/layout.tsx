import type { Metadata } from 'next';
import './globals.scss';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export const metadata: Metadata = {
  title: {
    default: 'PRove IT Catalysts — Web & Mobile Development in Hyderabad',
    template: '%s | PRove IT Catalysts',
  },
  description:
    'PRove IT Catalysts is a full-service development and tech support agency in Hyderabad, India. We build websites, mobile apps, provide digital marketing, medical billing, and cloud services.',
  keywords: [
    'web development hyderabad',
    'mobile app development',
    'digital marketing',
    'medical billing services',
    'cloud services india',
    'graphic design',
    'tech support',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.proveitcatalysts.com',
    siteName: 'PRove IT Catalysts',
    title: 'PRove IT Catalysts — Web & Mobile Development in Hyderabad',
    description:
      'Full-service development and tech support agency accelerating your brand growth.',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@PRoveITCatalyst',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
