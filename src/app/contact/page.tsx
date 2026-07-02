import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with PRove IT Catalysts — start your project, ask a question, or request a free consultation.',
};

const contactDetails = [
  { icon: '📞', label: 'Phone', value: '088866 61674', href: 'tel:08886661674' },
  { icon: '✉️', label: 'Email', value: 'contact@proveitcatalysts.com', href: 'mailto:contact@proveitcatalysts.com' },
  { icon: '📍', label: 'Address', value: '754 2nd Floor, DBK Heights, 100 Feet Rd, Madhapur, Hyderabad 500081', href: null },
  { icon: '🕐', label: 'Hours', value: 'Mon–Sat: 9:00 AM – 7:00 PM IST', href: null },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <span className="section-eyebrow">
            💬 Get In Touch
          </span>
          <h1 className="page-hero__title">
            Let's Build Something <br />
            <span className="page-hero__accent">Great Together</span>
          </h1>
          <p className="page-hero__copy">
            Tell us about your project. We'll get back to you within 24 hours with a free consultation.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="page-section">
        <div className="container">
          <div className="section-grid-2">
            {/* Form */}
            <div className="page-card page-card--form">
              <h2 className="section-heading">Send Us a Message</h2>
              <form className="form-card">
                <div className="form-row-2">
                  <div className="form-field">
                    <label>First Name</label>
                    <input type="text" placeholder="Ravi" />
                  </div>
                  <div className="form-field">
                    <label>Last Name</label>
                    <input type="text" placeholder="Kumar" />
                  </div>
                </div>
                <div className="form-field">
                  <label>Email Address</label>
                  <input type="email" placeholder="ravi@company.com" />
                </div>
                <div className="form-field">
                  <label>Phone Number</label>
                  <input type="tel" placeholder="+91 9876543210" />
                </div>
                <div className="form-field">
                  <label>Service Interested In</label>
                  <select>
                    <option value="">Select a service...</option>
                    <option>Web Development</option>
                    <option>Mobile App Development</option>
                    <option>Digital Marketing</option>
                    <option>Medical Billing</option>
                    <option>Cloud Services</option>
                    <option>Graphic Design</option>
                    <option>Technical Support</option>
                    <option>Email Support</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-field">
                  <label>Tell Us About Your Project</label>
                  <textarea rows={5} placeholder="Describe your project, goals, and timeline..." />
                </div>
                <button type="submit" className="btn-primary">
                  Send Message →
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info">
              {contactDetails.map((d) => (
                <div key={d.label} className="contact-card">
                  <div className="contact-card__icon">{d.icon}</div>
                  <div>
                    <strong>{d.label}</strong>
                    {d.href ? (
                      <a href={d.href}>{d.value}</a>
                    ) : (
                      <span>{d.value}</span>
                    )}
                  </div>
                </div>
              ))}

              <div className="contact-card-accent">
                <h3>Free Consultation</h3>
                <p>
                  Not sure where to start? Schedule a free 30-minute consultation call with our team and we'll map out a clear plan for your project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
