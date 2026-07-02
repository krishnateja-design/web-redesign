import ServiceSidebar from '@/components/ServiceSidebar/ServiceSidebar';
import CTA from '@/components/CTA/CTA';

export default function DigitalMarketingPage() {
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
          <h1>Digital Marketing</h1>
          <p>
            Services{' '}
            <span style={{ color: '#7b5ce1' }}>
              • Digital Marketing
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
                Digital Marketing
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
                 PRove IT catalysts web marketing organization concentrated on 
                 driving leads and activity to your website. Our online marketing
                 organization has given Web marketing services to a portion of the 
                 biggest online organizations on the planet. We have additionally 
                 been compelling for medium business and on the neighborhood level. 
                 When you work with our Web marketing organization you'll know you 
                 are working with a legit, proven firm centered on your prosperity.
                </p>

                <p>
                We have won honors in SEO, web-based social networking, change rate 
                streamlining and that's only the tip of the iceberg. In addition, we 
                are general supporters of significant productions, for example, Inc. 
                Forbes, Business visionary, Web index Land and Marketing Area.. Get 
                in touch with us now or take in more about our services beneath. We 
                are a pioneer in making websites starting from the earliest stage that 
                is both desktop and portable amicable.
                </p>

                <p>
                An ever-increasing number of individuals get PDAs consistently and online 
                business is soaring. Each business needs a Web nearness. Our San Diego Web 
                marketing organization is led by a portion of the most brilliant personalities 
                in the business. PRove IT catalysts achievement is your prosperity and we are 
                not kidding about helping you accomplish your online vision. Regardless of whether 
                you have a long-standing Web nearness.
                </p>

                <p>
                PRove IT catalysts’ internet marketing services generally keep our customer to 
                extend chief proportion low. With our devotion to administration and return for 
                capital invested, we are a Web marketing organization you can trust. Take in 
                more about our qualities and read our surveys. in the event that you are simply 
                beginning, Ignite Visibility Web marketing can hop in and enable you to improve.
                </p>

            </div>
            </div>

          <ServiceSidebar activeHref="/services/digital-marketing" />
        </div>
      </section>

      <CTA />
    </main>
  );
}
