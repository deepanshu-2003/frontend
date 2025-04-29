"use client"

import * as motion from "motion/react-client"
import styles from '/public/styles/Home.module.css';
import SectionHeading from './SectionHeading';
import TeamMemberCard from './TeamMemberCard';

export default function TeamSection() {
  const teamMembers = [
    {
      id: 1,
      name: 'Pran Chaudhary',
      role: 'Founder & CEO',
      image: '/images/team/pran.png', // Replaced with a potentially better placeholder
      bio: 'With over 6 years of industry experience, Pran leads our team with vision and passion.'
    },
    {
      id: 2,
      name: 'Deepanshu Dixit',
      role: 'Co-Founder & Tech. Geek',
      image: '/images/team/deepanshu.png', // Replaced with a potentially better placeholder
      bio: 'Passionate coding geek who thrives on building smart, scalable tech solutions with creativity and vision.'
    },
    {
      id: 3,
      name: 'Krishna Singhaniya',
      role: 'Co-Foundner & Digital Marketing',
      image: '/images/team/krishna.png', // Replaced with a potentially better placeholder
      bio: 'As Digital Marketing Expert, Krishna drives innovative strategies that fuel brand growth.'
    },
    {
      id: 4,
      name: 'Tarun Verma', // Placeholder name
      role: 'Marketing Head', // Placeholder role
      image: '/images/team/tarun.png', // Placeholder image
      bio: 'As a marketing Head, Tarun manage business to grow with Meta suit management and ads' // Placeholder bio
    }
];

  return (
    <section className={styles.teamSection}>
      <SectionHeading
        title="Meet Our Team"
        subtitle="The People Behind Beehive Amore"
      />

      <div className={styles.teamGrid}>
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <TeamMemberCard member={member} />
          </motion.div>
        ))}
      </div>


    </section>
  );
}
