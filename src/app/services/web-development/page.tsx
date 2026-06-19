import Link from 'next/link';

export default function WebDevelopmentPage() {
  const services = [
    'Website Development',
    'Desktop App Development',
    'Mobile App Development',
    'Medical Billing Services',
    'Digital Marketing',
    'Graphic Design',
    'Staffing Services',
    'Technical Support',
    'Voice Support',
    'Email Support',
    'Cloud Services',
  ];

  return (
    <main>
      {/* Hero Section */}
      <section
        style={{
          background: '#f5f5f5',
          padding: '100px 0',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <h1
            style={{
              fontSize: '48px',
              fontWeight: '700',
              marginBottom: '20px',
            }}
          >
            Web Development
          </h1>

          <p>
            Services <span style={{ color: '#7b5ce1' }}>• Web Development</span>
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section style={{ padding: '80px 0' }}>
        <div
          className="container"
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: '60px',
          }}
        >
          {/* Left Content */}
          <div>
            <h2
              style={{
                fontSize: '36px',
                marginBottom: '30px',
              }}
            >
              Web Development
            </h2>

            <p style={{ lineHeight: '1.9', marginBottom: '25px' }}>
                PRove IT catalysts makes solid web promoting efforts and powerful
                web existences for little to medium size organizations. We represent
                considerable authority in outlining intense marking and developing
                W3C models consistent websites that are perfect with the most recent
                devices. A gathering of expert website specialists and developers,
                we are devoted to making ground-breaking, compelling and drawing
                a significant mark amongst the web design companies.

            </p>

            <p style={{ lineHeight: '1.9', marginBottom: '25px' }}>
                Our intense outline style and utilization of ultra-clean, models based
                markup code join to create websites that gloat remarkable internet 
                searcher result positions, expanded transformations and predominant
                visitor loyalty. Our development process happens on the best website
                stages and utilizes the best web development dialects. We include
                instruments and applications that deliver results.
            </p>

            <p style={{ lineHeight: '1.9', marginBottom: '25px' }}>
                Our objective is your fulfillment. We endeavor to construct awesome 
                websites and significantly harder to assemble extraordinary relationships. 
                Our group centers around giving the really astounding administration and 
                conveys the business' most creative arrangements through shocking corporate-level
                illustrations, W3C models based on source code and white-cap SEO procedures.
            </p>

            <p style={{ lineHeight: '1.9' }}>
               PRove IT catalysts honor winning website composition and website development
               group manufactures the best websites on the web. Our long periods of website 
               composition encounter have prompted an outcomes-driven process that guarantees 
               effective results making us the best web development services. We begin with the 
               examination, research and arranging taken after by architecture, wire encircling 
               and content creation.
            </p>
          </div>

          {/* Right Sidebar */}
          <div>
            <div
              style={{
                background: '#fff',
                border: '1px solid #eee',
                borderRadius: '12px',
                padding: '30px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
              }}
            >
              <h3
                style={{
                  marginBottom: '20px',
                  fontSize: '28px',
                }}
              >
                Our Services
              </h3>

              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                }}
              >
                {services.map((service) => (
                  <li
                    key={service}
                    style={{
                      padding: '12px 0',
                      borderBottom: '1px solid #eee',
                    }}
                  >
                    <Link
                      href="/services"
                      style={{
                        textDecoration: 'none',
                        color: '#222',
                      }}
                    >
                      ✓ {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section
        style={{
          background:
            'linear-gradient(135deg, #7c4dff 0%, #5b3df5 100%)',
          padding: '60px 0',
          color: '#fff',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '20px',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <h2>Let's Discuss</h2>
            <p>Enter your email id for recent updates</p>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <input
              type="email"
              placeholder="Enter Email"
              style={{
                padding: '14px 20px',
                borderRadius: '30px',
                border: 'none',
                minWidth: '280px',
              }}
            />

            <button
              style={{
                background: '#00d084',
                border: 'none',
                color: '#fff',
                padding: '14px 30px',
                borderRadius: '30px',
                cursor: 'pointer',
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}