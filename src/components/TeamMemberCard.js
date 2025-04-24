import Image from 'next/image';
import { FaLinkedinIn, FaTwitter, FaEnvelope } from 'react-icons/fa';
import styles from '/public/styles/Home.module.css';

export default function TeamMemberCard({ member }) {
  return (
    <div className={styles.teamCard}>
      <div className={styles.memberImageContainer}>
        <Image
          src={member.image}
          alt={member.name}
          width={300}
          height={300}
          style={{ objectFit: 'cover' }}
          className={styles.memberImage}
        />
      </div>
      <div className={styles.memberInfo}>
        <h3 className={styles.memberName}>{member.name}</h3>
        <p className={styles.memberRole}>{member.role}</p>
        <p className={styles.memberBio}>{member.bio}</p>
        <div className={styles.memberSocial}>
          <a href="#" aria-label="LinkedIn" className={styles.socialIcon}>
            <FaLinkedinIn />
          </a>
          <a href="#" aria-label="Twitter" className={styles.socialIcon}>
            <FaTwitter />
          </a>
          <a href="#" aria-label="Email" className={styles.socialIcon}>
            <FaEnvelope />
          </a>
        </div>
      </div>
    </div>
  );
}
