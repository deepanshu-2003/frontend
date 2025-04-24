import Head from "next/head";
import Image from "next/image";
import * as motion from "motion/react-client"
import styles from "/public/styles/About.module.css";
import SectionHeading from "../../components/SectionHeading";
import TeamMemberCard from "../../components/TeamMemberCard";
import AboutSection from "../../components/AboutSection";

export default function About() {
  const teamMembers = [
    {
      id: 1,
      name: 'Krishna Singhaniya',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
      bio: 'With over 8 years of industry experience, Krishna leads our team with vision and passion.'
    },
    {
      id: 2,
      name: 'Deepanshu Dixit',
      role: 'Co-Founder & Tech. Geek',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
      bio: 'Passionate coding geek who thrives on building smart, scalable tech solutions with creativity and vision.'
    },
    {
      id: 3,
      name: 'Pran Chaudhary',
      role: 'Marketing Head',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
      bio: 'As Marketing Head, Pran drives innovative strategies that fuel brand growth and deliver impactful, measurable results..'
    },
    {
      id: 4,
      name: 'Tanishq Sharma',
      role: 'Marketing Strategist',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
      bio: "Tanishq develops innovative marketing strategies that deliver measurable results for our clients"
    }
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Beehive Amore | About Us</title>
        <meta
          name="description"
          content="Learn about Beehive Amore - Our story, mission, and team"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.heroSection}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.heroContent}
          >
            <h1>About Us</h1>
            <p>Get to know Beehive Amore and our passionate team</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <AboutSection />
        </motion.div>

        <section className={styles.storySection}>
          <div className={styles.storyContent}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading
                title="Our Story"
                subtitle="How Beehive Amore began and evolved"
              />
              <p>
                Founded in 2015, Beehive Amore emerged from a simple yet
                powerful vision: to create a digital agency that truly
                understands the needs of businesses in today's rapidly evolving
                landscape. Like a beehive, we believe in the power of
                collaboration, precision, and creating sweet results for our
                clients.
              </p>
              <p>
                Over the years, we've grown from a small team of passionate
                professionals to a full-service agency serving clients across
                multiple industries. Through dedication to excellence and a
                client-first approach, we've established ourselves as trusted
                partners in digital transformation.
              </p>
            </motion.div>
          </div>
          <motion.div
            className={styles.storyImageContainer}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1516681859000-292df1ed3e83"
              alt="Our office space"
              width={600}
              height={400}
              style={{ objectFit: "cover" }}
              className={styles.storyImage}
            />
          </motion.div>
        </section>

        <section className={styles.missionSection}>
          <motion.div
            className={styles.missionImageContainer}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1676275773812-637590f8e7c7?q=80&w=1576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Our mission"
              width={600}
              height={400}
              style={{ objectFit: "cover" }}
              className={styles.missionImage}
            />
          </motion.div>
          <div className={styles.missionContent}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <SectionHeading
                title="Our Mission"
                subtitle="What drives us every day"
              />
              <p>
                At Beehive Amore, our mission is to empower businesses to thrive
                in the digital age through innovative strategies, creative
                solutions, and measurable results. We believe in building
                lasting partnerships with our clients, understanding their
                unique challenges, and delivering solutions that exceed
                expectations.
              </p>
              <p>
                Like bees working together in perfect harmony, our team combines
                diverse talents and perspectives to create something greater
                than the sum of its parts. We're committed to continuous
                learning, staying ahead of industry trends, and bringing fresh
                ideas to every project we undertake.
              </p>
            </motion.div>
          </div>
        </section>

        <section className={styles.valuesSection}>
          <SectionHeading
            title="Our Values"
            subtitle="The principles that guide our work"
          />

          <div className={styles.valuesGrid}>
            <motion.div
              className={styles.valueCard}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3>Collaboration</h3>
              <p>
                We work together seamlessly, combining our diverse skills to
                achieve common goals.
              </p>
            </motion.div>

            <motion.div
              className={styles.valueCard}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3>Innovation</h3>
              <p>
                We constantly seek new ideas and approaches to solve complex
                problems.
              </p>
            </motion.div>

            <motion.div
              className={styles.valueCard}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3>Integrity</h3>
              <p>
                We maintain the highest ethical standards in all our business
                practices.
              </p>
            </motion.div>

            <motion.div
              className={styles.valueCard}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3>Excellence</h3>
              <p>
                We strive for the highest quality in everything we do, paying
                attention to every detail.
              </p>
            </motion.div>
          </div>
        </section>

        <section className={styles.teamSection}>
          <SectionHeading
            title="Our Team"
            subtitle="Meet the people behind Beehive Amore"
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

        <section className={styles.officeSection}>
          <SectionHeading
            title="Our Workspace"
            subtitle="Where innovation happens"
          />

          <div className={styles.officeImageGrid}>
            <motion.div
              className={styles.officeImageContainer}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1534134368327-3d2bd764f1ac"
                alt="Office space"
                width={400}
                height={300}
                style={{ objectFit: "cover" }}
                className={styles.officeImage}
              />
            </motion.div>

            <motion.div
              className={styles.officeImageContainer}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
                alt="Meeting room"
                width={400}
                height={300}
                style={{ objectFit: "cover" }}
                className={styles.officeImage}
              />
            </motion.div>

            <motion.div
              className={styles.officeImageContainer}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89"
                alt="Workspace"
                width={400}
                height={300}
                style={{ objectFit: "cover" }}
                className={styles.officeImage}
              />
            </motion.div>

            <motion.div
              className={styles.officeImageContainer}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1722082839913-cf8ac8399728"
                alt="Collaboration space"
                width={400}
                height={300}
                style={{ objectFit: "cover" }}
                className={styles.officeImage}
              />
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
