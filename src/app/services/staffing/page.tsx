import ServiceSidebar from '@/components/ServiceSidebar/ServiceSidebar';
import CTA from '@/components/CTA/CTA';

export default function StaffingServicesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <span className="section-eyebrow section-eyebrow--light">Services</span>
          <h1 className="page-hero__title">Staffing Services</h1>
          <p className="page-hero__copy">
            Qualified technology and business support talent for contract, project, and permanent hiring needs.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div
          className="container"
          style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem', alignItems: 'start' }}
        >
          <div className="page-card">
            <h2 className="section-heading">People who match the role and the work</h2>
            <p className="section-copy">
              We help companies find skilled professionals who can contribute quickly and work well with existing
              teams. Our staffing process covers requirement understanding, candidate screening, coordination, and
              onboarding support.
            </p>
            <p className="section-copy">
              Whether you need contract staff for a delivery deadline, project-based resources, or permanent hires
              for a growing department, we focus on practical skills, communication, and role fit.
            </p>
            <div className="section-grid-responsive">
              {['IT recruitment', 'Contract staffing', 'Permanent hiring', 'Screening and onboarding'].map((item) => (
                <div key={item} className="page-card page-card--surface">
                  <strong>{item}</strong>
                </div>
              ))}
            </div>
          </div>

          <ServiceSidebar activeHref="/services/staffing" />
        </div>
      </section>

      <CTA />
    </main>
  );
}
