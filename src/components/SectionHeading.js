import * as motion from "motion/react-client"
import styles from '/public/styles/Home.module.css';

export default function SectionHeading({ title, subtitle, alignment = 'center' }) {
  const alignmentClass = alignment === 'left' 
    ? styles.headingLeft 
    : alignment === 'right' 
      ? styles.headingRight 
      : styles.headingCenter;

  return (
    <motion.div 
      className={`${styles.sectionHeading} ${alignmentClass}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className={styles.headingTitle}>{title}</h2>
      {subtitle && <p className={styles.headingSubtitle}>{subtitle}</p>}
      <div className={styles.headingDivider}></div>
    </motion.div>
  );
}
