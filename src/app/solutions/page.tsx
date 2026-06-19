import type { Metadata } from 'next';
import Link from 'next/link';
import CTA from '@/components/CTA/CTA';

export const metadata: Metadata = {
  title: 'Solutions',
  description: 'Tailored technology solutions for healthcare, e-commerce, startups, enterprises, and more — built by PRove IT Catalysts.',
};

const solutions = [
  {
    icon: '🏥',
    title: 'Healthcare Solutions',
    subtitle: 'For clinics, hospitals & billing companies',
    color: '#10B981',
    features: [
      'Patient management portals',
      'Appointment scheduling systems',
      'Medical billing & revenue cycle management',
      'HIPAA-compliant data infrastructure',
      'Telemedicine platforms',
    ],
    description: 'We\'ve helped dozens of healthcare providers digitize their operations — from small clinics to multi-specialty hospitals. Our HIPAA-compliant solutions streamline patient care, reduce billing errors, and recover lost revenue.',
  },
  {
    icon: '🛒',
    title: 'E-Commerce Solutions',
    subtitle: 'For retailers & D2C brands',
    color: '#F97316',
    features: [
      'Custom online storefronts',
      'Payment gateway integration',
      'Inventory management systems',
      'Mobile commerce apps',
      'Conversion rate optimization',
    ],
    description: 'Whether you\'re launching your first online store or scaling an existing one, we build e-commerce experiences that convert. From product discovery to checkout and post-purchase, every touchpoint is optimized.',
  },
  {
    icon: '🚀',
    title: 'Startup Solutions',
    subtitle: 'For founders & early-stage teams',
    color: '#4F46E5',
    features: [
      'MVP development (web & mobile)',
      'Rapid prototyping & validation',
      'Scalable cloud architecture',
      'Product design & UX',
      'Growth marketing setup',
    ],
    description: 'Speed and efficiency matter when you\'re building a startup. We help founders move from idea to launch fast — with lean MVPs, validated prototypes, and the technical foundation to scale when you\'re ready.',
  },
  {
    icon: '🏢',
    title: 'Enterprise Solutions',
    subtitle: 'For established businesses & corporates',
    color: '#8B5CF6',
    features: [
      'Legacy system modernization',
      'Enterprise mobile applications',
      'Cloud migration & DevOps',
      'Business intelligence dashboards',
      'API integrations & automation',
    ],
    description: 'Large organizations need technology partners who understand complexity, security, and scale. We modernize legacy systems, migrate to cloud, and build enterprise-grade platforms that power thousands of users.',
  },
  {
    icon: '📊',
    title: 'Marketing & Growth Solutions',
    subtitle: 'For brands looking to grow online',
    color: '#EC4899',
    features: [
      'SEO & content marketing',
      'Performance advertising (Google, Meta)',
      'Email marketing automation',
      'Social media management',
      'Analytics & reporting dashboards',
    ],
    description: 'Great products need great marketing. Our integrated digital marketing solutions combine SEO, paid media, content strategy, and email automation to drive qualified traffic and sustainable revenue growth.',
  },
  {
    icon: '🎓',
    title: 'EdTech Solutions',
    subtitle: 'For educators & learning platforms',
    color: '#06B6D4',
    features: [
      'LMS (Learning Management Systems)',
      'Video course platforms',
      'Student progress tracking',
      'Live class & webinar tools',
      'Certificate & assessment systems',
    ],
    description: 'The future of education is digital. We build learning management systems, video platforms, and student portals that make knowledge delivery seamless for both instructors and learners.',
  },
];

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero page-hero--dark">
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <span className="section-eyebrow section-eyebrow--light">
            🧩 Industry Solutions
          </span>
          <h1 className="page-hero__title">
            Solutions Built for <br />
            <span className="page-hero__accent">Your Industry</span>
          </h1>
          <p className="page-hero__copy">
            We don't do one-size-fits-all. Every solution we build is tailored to the specific needs,
            workflows, and goals of your industry.
          </p>
        </div>
      </section>

      {/* Solutions */}
      <section className="page-section">
        <div className="container">
          <div className="solution-grid">
            {solutions.map((sol, i) => (
              <div key={sol.title} className={`solution-card solution-card--split ${i % 2 !== 0 ? 'solution-card--reverse' : ''}`}>
                {/* Visual */}
                <div
                  className="solution-card__visual"
                  style={{ background: `${sol.color}10` }}
                >
                  <div className="solution-card__visual-icon">{sol.icon}</div>
                  <div className="solution-card__visual-text">
                    <div className="solution-card__visual-title" style={{ color: sol.color }}>{sol.title}</div>
                    <div className="solution-card__visual-subtitle">{sol.subtitle}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="solution-card__content">
                  <span
                    className="solution-card__badge"
                    style={{ background: `${sol.color}18`, color: sol.color }}
                  >
                    {sol.subtitle}
                  </span>
                  <h2 className="solution-card__title">{sol.title}</h2>
                  <p className="solution-card__copy">{sol.description}</p>
                  <ul className="solution-card__list">
                    {sol.features.map((f) => (
                      <li key={f} className="solution-card__item">
                        <span style={{ color: sol.color }}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="solution-card__link" style={{ background: sol.color }}>
                    Get a Free Consultation →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
