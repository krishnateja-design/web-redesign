export default function GraphicDesignPage() {
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
          <h1>Graphic Design</h1>
          <p>
            Services{' '}
            <span style={{ color: '#7b5ce1' }}>
              • Graphic Design
            </span>
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 0' }}>
        <div
          className="container"
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: '80px',
          }}
        >
          <div>
            <h2
              style={{
                fontSize: '36px',
                marginBottom: '30px',
              }}
            >
              Graphic Design
            </h2>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                lineHeight: '1.8',
              }}
            >
              <p>
                Graphic design is the process of visual communication and 
                problem-solving through the use of typography, photography, and 
                illustration. The field is considered a subset of visual communication 
                and communication design, but sometimes the term "graphic design" is 
                used synonymously.
              </p>

              <p>
                PRove IT Catalysts, provides high quality graphic design services that 
                cover your entire business needs. With high expertise in the field of 
                offshore graphic design, we can provide your company with stunning graphic 
                designs that help strengthen your corporate image across different 
                communication channels.
              </p>

              <p>
                We have industry defining principles of design feature a core value 
                model of sustainable and economical resourcing, powerful artistic 
                narratives, and intuitive technologies.We transforms your message 
                or your client’s ideas into a clear vision for driving brand objectives 
                through graphic design, using sophisticated, industry leading graphic 
                design software and technologies.
              </p>

              <p>
                Graphics add life to a business website and we understand this fact 
                very well. When you approach us, we listen to your requirements and 
                the types of designs you are looking for. After doing complete analysis, 
                we come up with other options, and then, finalize the designs accordingly. 
                If you are having a vision, we have the talent and tools to make it a reality. 
                We can help even in the case you are not clear about what you want.
              </p>

            </div>
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