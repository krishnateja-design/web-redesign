import ServiceSidebar from '@/components/ServiceSidebar/ServiceSidebar';
import CTA from '@/components/CTA/CTA';

export default function VoiceSupportPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <span className="section-eyebrow section-eyebrow--light">Services</span>
          <h1 className="page-hero__title">Voice Support</h1>
          <p className="page-hero__copy">
            Inbound and outbound voice process teams for customer care, follow-ups, verification, and support.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div
          className="container"
          style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem', alignItems: 'start' }}
        >
          <div className="page-card">
            <h2 className="section-heading">Clear conversations for dependable customer support</h2>
            <p className="section-copy">
              Our voice support services help organizations manage customer conversations with consistency,
              professionalism, and care. We support inbound service calls, outbound follow-ups, verification work,
              and call-based business processes.
            </p>
            <p className="section-copy">
              With trained teams, process scripts, and structured reporting, we help your business respond faster,
              improve follow-through, and maintain a dependable communication flow.
            </p>
            <div className="section-grid-responsive">
              {['Inbound support', 'Outbound calls', 'Customer follow-ups', 'Call reporting'].map((item) => (
                <div key={item} className="page-card page-card--surface">
                  <strong>{item}</strong>
                </div>
              ))}
            </div>
          </div>

          <ServiceSidebar activeHref="/services/voice-support" />
        </div>
      </section>

      <CTA />
    </main>
  );
}
