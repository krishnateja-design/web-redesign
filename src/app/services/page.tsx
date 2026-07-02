import type { Metadata } from 'next';
import Link from 'next/link';
import { services } from '@/data/services';
import CTA from '@/components/CTA/CTA';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Explore PRove IT Catalysts\' full range of services: web development, mobile apps, digital marketing, medical billing, cloud services, graphic design, and more.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <span className="section-eyebrow">
            🛠️ What We Offer
          </span>
          <h1 className="page-hero__title">
            Services That <span className="page-hero__accent">Scale With You</span>
          </h1>
          <p className="page-hero__copy">
            Everything your business needs to win online — design, development, marketing, and support —
            from one trusted team.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="page-section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {services.map((service) => (
              <div key={service.id} className="page-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{
                  width: 56, height: 56, borderRadius: '0.875rem',
                  background: service.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem'
                }}>
                  {service.icon}
                </div>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>{service.title}</h2>
                <p className="text-muted" style={{ fontSize: '0.9rem', lineHeight: 1.7, flex: 1 }}>{service.description}</p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                  {service.features.map((f) => (
                    <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: '#64748B' }}>
                      <span style={{ width: 5, height: 5, borderRadius: '50%', background: service.color, flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href={service.href} style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.625rem 1.25rem', borderRadius: '9999px',
                  background: service.gradient, color: '#fff',
                  fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none',
                  marginTop: '0.5rem', width: 'fit-content'
                }}>
                  View Service -&gt;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
