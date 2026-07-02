import styles from './Portfolio.module.scss';

type Client = {
  name: string;
  logo?: string;
};

const clients: Client[] = [
  { name: 'Little Org', logo: '/images/littleorg-logo (1).png' },
  { name: 'Cukzz', logo: '/images/cukzz.png' },
  { name: 'Radiology Center Harding', logo: '/images/radiology.png' },
  { name: 'panacea', logo: '/images/panacea.png' },
  { name: 'SmartX', logo: '/images/smartx.png' },
  { name: 'Surprises Made', logo: '/images/surprisemate.png' },
  { name: 'Poppins', logo: '/images/poppins.png' },
  { name: 'RM Infrasolutions', logo: '/images/rm.png' },
  { name: 'Tracstars Informatics', logo: '/images/tracstars.png' },
  { name: 'Invest Plant', logo: '/images/invest.png' },
];

export default function Portfolio() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.statText}>
          <h2>
            1520<sup>+</sup>
          </h2>
          <p>Project Done.</p>
        </div>

        <button className={styles.exploreBtn}>Explore All</button>
      </div>

      <div className={styles.marquee}>
        <div className={styles.track}>
          {[...clients, ...clients].map((client, index) => (
            <div className={styles.logoCard} key={`${client.name}-${index}`}>
              {client.logo ? (
                <img src={client.logo} alt={client.name} />
              ) : (
                <span className={styles.logoName}>{client.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
