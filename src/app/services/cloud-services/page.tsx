import ServiceSidebar from '@/components/ServiceSidebar/ServiceSidebar';
import CTA from '@/components/CTA/CTA';

export default function CloudServicesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <span className="section-eyebrow section-eyebrow--light">Services</span>
          <h1 className="page-hero__title">Cloud Services</h1>
          <p className="page-hero__copy">
            Cloud migration, infrastructure setup, security, backups, and DevOps support for scalable systems.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div
          className="container"
          style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem', alignItems: 'start' }}
        >
          <div className="page-card">
            <h2 className="section-heading">Cloud foundations that are secure and scalable</h2>
            <p className="section-copy">
              PRove IT Catalysts helps businesses plan, move, and manage cloud workloads with a focus on reliability,
              security, and long-term maintainability. We support application hosting, storage, backups, deployments,
              and infrastructure operations.
            </p>
            <p className="section-copy">
              From migration planning to DevOps workflows, monitoring, access control, and backup strategy, our cloud
              services give your team a stronger platform for growth.
            </p>
            <div className="section-grid-responsive">
              {['Cloud migration', 'Infrastructure setup', 'DevOps support', 'Backup and security'].map((item) => (
                <div key={item} className="page-card page-card--surface">
                  <strong>{item}</strong>
                </div>
              ))}
            </div>
          </div>

          <ServiceSidebar activeHref="/services/cloud-services" />
        </div>
      </section>

      <CTA />
    </main>
  );
}
