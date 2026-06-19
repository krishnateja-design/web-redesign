import styles from './Features.module.scss';
import {
  FaHeadset,
  FaMicrophone,
  FaUsers,
  FaCloud
} from 'react-icons/fa';

const features = [
  {
    icon: <FaHeadset size={40} />,
    title: 'Technical Support',
    description:
      'Our technical Support Services amass gives Technical Help, Application Help, and Item Determination Help',
  },
  {
    icon: <FaMicrophone size={40} />,
    title: 'Voice Support',
    description:
      'We change mark ideas into unmistakable entities through our Voice Process Services.',
  },
  {
    icon: <FaUsers size={40} />,
    title: 'Staffing Services',
    description:
      'Our company specializes in providing skilled and qualified personnel to businesses and organizations of all sizes.',
  },
  {
    icon: <FaCloud size={40} />,
    title: 'Cloud Services',
    description:
      'On-demand availability of computer system resources, especially data storage and computing power.',
  },
];

export default function Features() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
        <span className="section-eyebrow">BEST EVER SERVICES</span>

        <h2 className={styles.title}>
          What We Offer
        </h2>
        </div>

      <div className={styles.grid}>
        {features.map((f) => (
          <div key={f.title} className={styles.card}>
            <div className={styles.cardBody}>
              <div className={styles.cardHeader}>
                <div className={styles.iconWrap}>
                  {f.icon}
                </div>

                <h3 className={styles.cardTitle}>
                  {f.title}
                </h3>
              </div>

              <p className={styles.cardDesc}>
                {f.description}
              </p>
            </div>

            <div className={styles.cardFooter}>
              <span>Read More</span>
              <span>...</span>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}