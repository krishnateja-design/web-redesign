import type { Metadata } from 'next';
import Hero from '@/components/Hero/Hero';
import Process from '@/components/Process/Process';
import Services from '@/components/Services/Services';
import Portfolio from '@/components/Portfolio/Portfolio';
import Features from '@/components/Features/Features';
import Testimonials from '@/components/Testimonials/Testimonials';
import Blog from '@/components/Blog/Blog';
import CTA from '@/components/CTA/CTA';
import HomePageMotionWrapper from '@/components/HomePageMotionWrapper';

export const metadata: Metadata = {
  title: 'Web & Mobile Development Agency in Hyderabad | PRove IT Catalysts',
  description:
    'PRove IT Catalysts — Hyderabad\'s leading web development, mobile app, digital marketing, and tech support agency. 1520+ projects delivered. Start yours today.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomePageMotionWrapper>
        <Process />
      </HomePageMotionWrapper>
      <HomePageMotionWrapper delay={0.08}>
        <Services />
      </HomePageMotionWrapper>
      <HomePageMotionWrapper delay={0.1}>
        <Portfolio />
      </HomePageMotionWrapper>
      <HomePageMotionWrapper delay={0.12}>
        <Features />
      </HomePageMotionWrapper>
      <HomePageMotionWrapper delay={0.14}>
        <Testimonials />
      </HomePageMotionWrapper>
      <HomePageMotionWrapper delay={0.16}>
        <Blog />
      </HomePageMotionWrapper>
      <HomePageMotionWrapper delay={0.18}>
        <CTA />
      </HomePageMotionWrapper>
    </>
  );
}
