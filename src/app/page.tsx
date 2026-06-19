import type { Metadata } from 'next';
import Hero from '@/components/Hero/Hero';
import Process from '@/components/Process/Process';
import Services from '@/components/Services/Services';
import Portfolio from '@/components/Portfolio/Portfolio';
import Features from '@/components/Features/Features';
import Testimonials from '@/components/Testimonials/Testimonials';
import Blog from '@/components/Blog/Blog';
import CTA from '@/components/CTA/CTA';

export const metadata: Metadata = {
  title: 'Web & Mobile Development Agency in Hyderabad | PRove IT Catalysts',
  description:
    'PRove IT Catalysts — Hyderabad\'s leading web development, mobile app, digital marketing, and tech support agency. 1520+ projects delivered. Start yours today.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Process />
      <Services />
      <Portfolio />
      <Features />
      <Testimonials />
      <Blog />
      <CTA />
    </>
  );
}
