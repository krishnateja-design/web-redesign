import ServiceSidebar from '@/components/ServiceSidebar/ServiceSidebar';
import CTA from '@/components/CTA/CTA';

export default function EmailSupportPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <span className="section-eyebrow section-eyebrow--light">Services</span>
          <h1 className="page-hero__title">Email Support</h1>
          <p className="page-hero__copy">
            Structured email support teams for customer queries, ticket handling, follow-ups, and response tracking.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div
          className="container"
          style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem', alignItems: 'start' }}
        >
          <div className="page-card">
            <h2 className="section-heading">Reliable written support for every customer request</h2>
            <p className="section-copy">
              PRove IT Catalysts helps businesses manage customer communication through clear, timely, and organized
              email support. Our teams handle inquiries, follow-ups, ticket updates, and escalation coordination with
              a focus on consistency and professionalism.
            </p>
            <p className="section-copy">
              We support shared inboxes, help desk queues, response templates, tracking workflows, and reporting so
              customer messages are handled carefully from first contact to resolution.
            </p>
            <div className="section-grid-responsive">
              {['Inbox management', 'Ticket handling', 'Customer follow-ups', 'Response tracking'].map((item) => (
                <div key={item} className="page-card page-card--surface">
                  <strong>{item}</strong>
                </div>
              ))}
            </div>
          </div>

          <ServiceSidebar activeHref="/services/email-support" />
        </div>
      </section>

      <CTA />
    </main>
  );
}
