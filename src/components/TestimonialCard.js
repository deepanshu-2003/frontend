import Image from 'next/image';
import { FaQuoteLeft } from 'react-icons/fa';
import styles from '/public/styles/Home.module.css';

export default function TestimonialCard({ testimonial, isActive }) {
  return (
    <div className={`${styles.testimonialCardSmall} ${isActive ? styles.activeTestimonial : ''}`}>
      <div className={styles.testimonialQuote}>
        <FaQuoteLeft className={styles.quoteIconSmall} />
      </div>
      <p className={styles.testimonialContentSmall}>{testimonial.content.substring(0, 80)}...</p>
      <div className={styles.testimonialAuthorSmall}>
        <div className={styles.authorImageSmall}>
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={40}
            height={40}
            style={{ objectFit: 'cover' }}
            className={styles.authorAvatarSmall}
          />
        </div>
        <div className={styles.authorInfoSmall}>
          <h4>{testimonial.name}</h4>
          <p>{testimonial.position}</p>
        </div>
      </div>
    </div>
  );
}
