import ServiceSidebar from '@/components/ServiceSidebar/ServiceSidebar';
import CTA from '@/components/CTA/CTA';

export default function TechnicalSupportPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <span className="section-eyebrow section-eyebrow--light">Services</span>
          <h1 className="page-hero__title">Technical Support</h1>
          <p className="page-hero__copy">
            Fast, structured IT support for applications, users, devices, and day-to-day business operations.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div
          className="container"
          style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem', alignItems: 'start' }}
        >
          <div className="page-card">
            <h2 className="section-heading">Responsive support for everyday business continuity</h2>
            <p className="section-copy">
              PRove IT Catalysts provides practical technical support for teams that rely on dependable systems,
              quick issue resolution, and clear communication. We help users solve problems, track recurring issues,
              and keep business tools running smoothly.
            </p>
            <p className="section-copy">
              Our support covers help desk requests, application assistance, remote troubleshooting, issue logging,
              escalation coordination, and user guidance for growing teams.
            </p>
            <div className="section-grid-responsive">
              {['Help desk support', 'Application support', 'Remote troubleshooting', 'Issue tracking'].map((item) => (
                <div key={item} className="page-card page-card--surface">
                  <strong>{item}</strong>
                </div>
              ))}
            </div>
          </div>

          <ServiceSidebar activeHref="/services/tech-support" />
        </div>
      </section>

      <CTA />
    </main>
  );
}
