import Link from 'next/link';

export default function MobileAppDevelopmentPage() {
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
          <h1>Mobile App Development</h1>
          <p>
            Services <span style={{ color: '#7b5ce1' }}>• Mobile App Development</span>
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
            <h2>Mobile App Development</h2>

            <p>
              At the point when an organization is looked with the issue of 
              portable app development, the app arrangements we offer our 
              clients is a native versatile development, as it permits conveying 
              the best client administration and gives more extensive alternatives 
              for post-MVP development making us the best Mobile Application Development 
              Services.
            </p>

            <div
              style={{
                background: '#31d99a',
                color: '#fff',
                padding: '35px',
                margin: '30px 0',
                fontSize: '24px',
                fontWeight: 700,
              }}
            >
              So what are the key points of interest of the native versatile
              application development?
            </div>

            <h4>Higher Execution</h4>
            <p>
              As native app development benefit gives the item particularly to 
              a specific task framework, it makes the execution of application 
              speedier and more intelligent. This factor is essential for applications 
              with a colossal measure of information.
            </p>

            <h4>Growing Audience</h4>
            <p>
              The native portable application gives the better access to work in 
              functionalities of cell phones, for example, camera, GPS, accelerometer, 
              amplifier, schedule, and so on. While having a cross- stage application 
              gives just limited access to every one of these administrations. Would 
              you be able to envision the application that can awe the client without 
              every one of those highlights?
            </p>

            <h4>Better Security</h4>
            <p>
              Security of versatile application permits recognizing qualitative 
              application from the hazardous one. To ensure the care of application`s 
              information cell phone requires better execution of the framework.
            </p>

            <h4>Better access to the crowd</h4>
            <p>
              App markets give better help to the applications that utilization 
              native app development. Such applications can be all the more immediately 
              found by clients and get additionally showcasing choices and limited time 
              bolster from the stage.
            </p>
          </div>

          <aside>
            <h3>Our Services</h3>

            <ul style={{ listStyle: 'none', padding: 0 }}>
              {services.map((service) => (
                <li key={service} style={{ marginBottom: '16px' }}>
                  ● {service}
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