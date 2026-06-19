import type { Metadata } from 'next';
import CTA from '@/components/CTA/CTA';

export const metadata: Metadata = {
  title: 'Our Clients',
  description:
    'See the businesses and brands that PRove IT Catalysts has helped grow with digital products and marketing solutions.',
};

const clients = [
  { name: 'Little Org', logo: '/images/littleorg-logo (1).png' },
  { name: 'Cukzz', logo: '/images/cukzz.png' },
  { name: 'Radiology Center Harding', logo: '/images/radiology.png' },
  { name: 'Panacea', logo: '/images/panacea.png' },
  { name: 'SmartX', logo: '/images/smartx.png' },
  { name: 'Surprises Made', logo: '/images/surprisemate.png' },
  { name: 'Poppins', logo: '/images/poppins.png' },
  { name: 'RM Infrasolutions', logo: '/images/rm.png' },
  { name: 'Tracstars Informatics', logo: '/images/tracstars.png' },
  { name: 'Odia', logo: '/images/mic.png' },
  { name: 'Invest Plant', logo: '/images/invest.png' },
];

export default function ClientsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <span className="section-eyebrow">
            🤝 Trusted Clients
          </span>
          <h1 className="page-hero__title">
            We Partner with Leaders <br /> Across Industries
          </h1>
          <p className="page-hero__copy">
            PRove IT Catalysts delivers effective digital products and marketing systems for startups, enterprises, and growing brands across India.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">CLIENTS</span>
            <h2>Our Clients</h2>
          </div>

          <div className="clients-grid">
            {clients.map((client) => (
              <div key={client.name} className="client-card">
                {client.logo ? (
                  <img src={client.logo} alt={client.name} />
                ) : (
                  <span>{client.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
