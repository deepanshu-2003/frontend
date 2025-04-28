import styles from '../../public/styles/Home.module.css';
import Image from 'next/image';

const WhyChooseUs = () => {
  const features = [
    {
      icon: '/images/brain-icon.svg',
      title: '100% Payment Refund',
      description: 'Get trained in the latest technologies and tools used in the industry.'
    },
    {
      icon: '/images/training-icon.svg',
      title: 'Hands On Training',
      description: 'Learn through practical experience with real-world projects and exercises.'
    },
    {
      icon: '/images/continuous-icon.svg',
      title: 'Continuous Training',
      description: 'Regular updates and continuous learning to keep your skills current.'
    },
    {
      icon: '/images/certification-icon.svg',
      title: 'Certification',
      description: 'Earn industry-recognized certifications upon course completion.'
    },
    {
      icon: '/images/software-icon.svg',
      title: 'Latest Software',
      description: 'Access to cutting-edge software and development tools.'
    },
    {
      icon: '/images/fees-icon.svg',
      title: 'Affordable Fees',
      description: 'Quality education at competitive and affordable pricing.'
    },
    {
      icon: '/images/attention-icon.svg',
      title: 'Personalized Attention',
      description: 'Individual attention and guidance from experienced mentors.'
    },
    {
      icon: '/images/timing-icon.svg',
      title: 'Flexible Timing',
      description: 'Choose from multiple batches that fit your schedule.'
    }
  ];

  return (
    <section className={styles.whyChooseSection}>
      <div className={styles.whyChooseContent}>
        <div className={styles.sectionHeading}>
          <h2 className={styles.headingTitle}>Why Choose Us?</h2>
          <div className={styles.headingDivider}></div>
          <p className={styles.headingSubtitle}>Discover the advantages that set us apart</p>
        </div>
        <div className={styles.whyChooseGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.whyChooseCard}>
              <div className={styles.whyChooseIcon}>
                <Image 
                  src={feature.icon} 
                  alt={feature.title} 
                  width={30} 
                  height={30}
                  priority={index < 4}
                />
              </div>
              <h3 className={styles.whyChooseTitle}>{feature.title}</h3>
              <p className={styles.whyChooseDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;