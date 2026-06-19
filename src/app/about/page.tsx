import type { Metadata } from 'next';
import Link from 'next/link';
import CTA from '@/components/CTA/CTA';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about PRove IT Catalysts — a full-service tech agency based in Hyderabad, India, helping businesses grow through world-class digital solutions.',
};

const team = [
  { name: 'M. Sai Gajula', role: 'Founder & CEO', icon: '👨‍💼' },
  { name: 'Tech Lead', role: 'Head of Engineering', icon: '👨‍💻' },
  { name: 'Design Head', role: 'Creative Director', icon: '🎨' },
  { name: 'Marketing Lead', role: 'Growth & Marketing', icon: '📈' },
];

const values = [
  { icon: '🎯', title: 'Client-First', description: 'Every decision we make is guided by your business goals and customer needs.' },
  { icon: '🏆', title: 'Excellence', description: 'We hold our work to the highest standard — from code quality to pixel-perfect design.' },
  { icon: '🤝', title: 'Partnership', description: 'We become an extension of your team, invested in your long-term success.' },
  { icon: '🔍', title: 'Transparency', description: 'No jargon, no hidden fees. Clear communication and honest pricing, always.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <span className="section-eyebrow">
            🏢 Who We Are
          </span>
          <h1 className="page-hero__title">
            Built to Help Businesses <br />
            <span className="page-hero__accent">
              PRove IT
            </span>
          </h1>
          <p className="page-hero__copy">
            Since 2018, PRove IT Catalysts has been the trusted technology partner for businesses across India —
            helping them build, grow, and dominate online.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="page-section page-section--white">
        <div className="container">
          <div className="section-grid-2">
            <div>
              <span className="section-eyebrow">📖 Our Story</span>
              <h2 className="section-heading">
                From Hyderabad to <span className="gradient-text">the World</span>
              </h2>
              <p className="section-copy">
                PRove IT Catalysts was founded with a single, clear mission: to give businesses of all sizes
                access to the same quality of digital technology that enterprise companies enjoy.
              </p>
              <p className="section-copy">
                Based in Madhapur, Hyderabad's tech hub, we've grown from a small web agency into a
                full-service development, marketing, and support company with 1,520+ successful projects
                delivered across healthcare, finance, retail, and more.
              </p>
              <p className="section-copy">
                We specialize in building responsive, dynamic websites; native mobile applications; cloud
                infrastructure; and complete digital marketing systems — all with a relentless focus on
                quality, transparency, and your business outcomes.
              </p>
            </div>
            <div className="page-card page-card--surface" style={{ padding: '3rem', textAlign: 'center' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                {[
                  { val: '1520+', label: 'Projects' },
                  { val: '200+', label: 'Clients' },
                  { val: '8+', label: 'Years' },
                  { val: '99%', label: 'Satisfaction' },
                ].map((s) => (
                  <div key={s.label} className="page-card" style={{ padding: '1.5rem' }}>
                    <strong
                      className="stat-value"
                      style={{ background: 'linear-gradient(135deg, #4F46E5, #06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
                    >
                      {s.val}
                    </strong>
                    <span className="stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="page-section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-eyebrow">💡 Our Values</span>
            <h2 className="section-heading" style={{ marginTop: '1rem' }}>
              The Principles That <span className="gradient-text">Drive Us</span>
            </h2>
          </div>
          <div className="section-grid-responsive">
            {values.map((v) => (
              <div key={v.title} className="page-card">
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{v.icon}</div>
                <h3 className="card-title">{v.title}</h3>
                <p className="card-text">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
