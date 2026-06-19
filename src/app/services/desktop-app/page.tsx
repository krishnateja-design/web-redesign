import Link from 'next/link';

export default function DesktopAppDevelopmentPage() {
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
     <section
        style={{
          background: '#f5f5f5',
          padding: '100px 0',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <h1>Desktop App Development</h1>
          <p>
            Services <span style={{ color: '#7b5ce1' }}>• Desktop App Development</span>
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 0' }}>
        <div
          className="container"
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: '60px',
          }}
        >
          <div>
            <h2>Desktop App Development</h2>
                      <div
                style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                lineHeight: '1.8',
                }}
            >

            <p>
              PRove IT catalysts redo programming for Macintosh OS and windows. 
              Our desktop app development administrations furnish you with an 
              effective, easy to understand, and redid desktop application that 
              can run disconnected and autonomous of internet browser. Our desktop 
              applications enable organizations to meet their separate prerequisites 
              and give a competitive favorable position in the developing business sector.
            </p>

            <p>
              Organizations can encounter quicker and effective business forms, better 
              execution and aggregate control using most recent Rich Desktop Applications 
              (RDA) and Rich Web Desktop Applications (IRDAs). Our desktop applications 
              guarantee quicker information get to, simple substance synchronization, 
              and productive disconnected tasks. These desktop applications can consistently
              incorporate with web advancements, Microsoft advances, OS stages, and database 
              and so forth giving better operational working.
            </p>

            <p>
              The desktop applications from Enterprise Technology Solutions (ETS) furnish 
              you with an approach to mechanize particular business procedure to improve 
              execution, synchronize business process, and representative productivity. 
              Our desktop applications are open for graduation every once in a while and
              give proficient information security and insurance against unapproved get to.
            </p>

            <p>
              Desktop remains for outwardly rich, exceptionally quick and responsive 
              programming. PRove IT catalysts has the group, that support best practices 
              in desktop application development keeping in mind the end goal to dependably 
              pull off that additional mile which transforms a strong desktop app thought 
              into a market sensation. As distinctive organizations have particular and one 
              of a kind prerequisites, our specially developed desktop applications assist 
              organizations with fulfilling these necessities and make progress.
            </p>

          </div>
          </div>

          <aside>
            <h3>Our Services</h3>

            <ul style={{ listStyle: 'none', padding: 0 }}>
              {services.map((service) => (
                <li key={service} style={{ marginBottom: '16px' }}>
                  <span style={{ marginRight: '10px' }}>●</span>
                  {service}
                </li>
              ))}
            </ul>
          </aside>
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