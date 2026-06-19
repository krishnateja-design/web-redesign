import type { Metadata } from 'next';
import { projects } from '@/data/projects';
import CTA from '@/components/CTA/CTA';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Browse PRove IT Catalysts\' portfolio of 1520+ projects — web apps, mobile apps, digital marketing campaigns, and more.',
};

const categories = ['All', 'Web Development', 'Mobile Development', 'Digital Marketing', 'Graphic Design', 'Cloud Services'];

const allProjects = [
  ...projects,
  {
    id: '7', title: 'Restaurant Booking App', category: 'Mobile Development',
    description: 'Full-featured dining reservation app with real-time availability and push notifications.',
    image: '', tags: ['Flutter', 'Firebase', 'Maps API'], color: '#F97316',
  },
  {
    id: '8', title: 'Medical Practice Website', category: 'Web Development',
    description: 'Modern healthcare website with appointment booking and patient portal.',
    image: '', tags: ['Next.js', 'Tailwind', 'HIPAA'], color: '#10B981',
  },
  {
    id: '9', title: 'E-Learning Platform', category: 'Web Development',
    description: 'Video-based learning platform with progress tracking and certificates.',
    image: '', tags: ['React', 'Node.js', 'Video.js'], color: '#8B5CF6',
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <span className="section-eyebrow">
            💼 Our Work
          </span>
          <h1 className="page-hero__title">
            <span className="page-hero__accent">1520+</span> Projects Delivered
          </h1>
          <p className="page-hero__copy">
            From startups to enterprises, we've helped businesses across every industry build remarkable digital products.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="page-section page-section--stats">
        <div className="container">
          <div className="section-grid-stats">
            {[
              { val: '1520+', label: 'Total Projects' },
              { val: '200+', label: 'Happy Clients' },
              { val: '10+', label: 'Industries' },
              { val: '8+', label: 'Years Experience' },
            ].map((s) => (
              <div key={s.label}>
                <strong className="stat-value">{s.val}</strong>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="page-section">
        <div className="container">
          {/* Category filter */}
          <div className="section-row-wrap">
            {categories.map((cat, i) => (
              <button key={cat} className={i === 0 ? 'page-pill page-pill--active' : 'page-pill page-pill--ghost'}>
                {cat}
              </button>
            ))}
          </div>

          <div className="portfolio-grid">
            {allProjects.map((project, i) => (
              <div key={project.id} className={`page-card project-card ${i === 0 ? 'project-card--featured' : ''}`}>
                <div
                  className="project-card__hero"
                  style={{
                    minHeight: i === 0 ? 280 : 200,
                    background: `${project.color}12`,
                  }}
                >
                  {project.category === 'Web Development' ? '🌐' :
                   project.category === 'Mobile Development' ? '📱' :
                   project.category === 'Digital Marketing' ? '📈' :
                   project.category === 'Graphic Design' ? '🎨' : '☁️'}
                </div>
                <div className="project-card__content">
                  <div className="page-card__header">
                    <span
                      className="label-pill"
                      style={{ background: `${project.color}18`, color: project.color }}
                    >
                      {project.category}
                    </span>
                  </div>
                  <h3 className="card-title">{project.title}</h3>
                  <p className="card-text">{project.description}</p>
                  <div className="project-card__tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-card__tag">{tag}</span>
                    ))}
                  </div>
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
