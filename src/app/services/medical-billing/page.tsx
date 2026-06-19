export default function MedicalBillingServicesPage() {
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
          <h1>Medical Billing Services</h1>
          <p>
            Services <span style={{ color: '#7b5ce1' }}>• Medical Billing Services</span>
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
            <h2>Medical Billing Services</h2>
            <div
                style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                lineHeight: '1.8',
                }}
            >

            <p>
              PRove IT catalysts is a marginally more costly outsource medical 
              billing than others, yet it incorporates a thorough administration 
              that joins expenses into one basic level of net accumulations. 
              Valuing shifts relying upon month to month experiences, number of 
              suppliers, and a pre-indicated least relying upon a training's level 
              of need. As an expert full-benefit medical billing/repayment income 
              cycle administration give.
            </p>


            <p>
              We are the best pick for medical billing services for little practices 
              because it consolidates a reasonable cost and finishes programming suite 
              to convey full social insurance IT capabilities for the cost of a medical 
              billing administration. PRove IT catalysts utilizes a committed record 
              director bolster model and offers execution groups to help get your 
              training off the ground when initially outsourcing your Revenue cycle 
              management (RCM).
            </p>

            <p>
              PRove IT catalysts' estimating ranges from 4 to 9 percent relying upon the 
              specifics of your training and your needs, ordinarily falling around 6 percent 
              for generally hones. Incorporated into that cost is access to our electronic 
              wellbeing record programming. There are no additional setup or clearinghouse 
              expenses related to the administration, which depends on yearly contracts.

            </p>

            <p>
              For rehearses that need to hold some billing capacities in-house, PRove IT catalysts 
              is a hybrid medical billing services in India that enables practices to scale their RCM.
              For more data about PRove IT catalysts' medical billing administration, see Business News 
              Every day's full survey here. We remotely work within our customers' frameworks so our 
              customers have finish straightforwardness to all their billing and income.
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