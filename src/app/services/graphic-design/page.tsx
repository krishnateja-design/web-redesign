import ServiceSidebar from '@/components/ServiceSidebar/ServiceSidebar';
import CTA from '@/components/CTA/CTA';

export default function GraphicDesignPage() {
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

          <ServiceSidebar activeHref="/services/graphic-design" />
        </div>
      </section>

      <CTA />
    </main>
  );
}
