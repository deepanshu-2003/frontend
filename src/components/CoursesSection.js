import Link from 'next/link';
import * as motion from "motion/react-client"
import { 
  FaLaptopCode, 
  FaChartLine, 
  FaBrain, 
  FaMobileAlt,
  FaDatabase,
  FaReact,
  FaCloud,
  FaShieldAlt,
  FaRobot,
  FaCode,
  FaPalette,
  FaTools,
  FaGamepad,
  FaVrCardboard,
  FaWordpress,
  FaDocker,
  FaEthereum,
  FaVideo,
  FaCamera,
  FaUserGraduate,
  FaChartPie,
  FaNetworkWired,
  FaApple,
  FaAndroid,
  FaPencilRuler,
  FaSearch
} from 'react-icons/fa';
import styles from '/public/styles/Courses.module.css';
import SectionHeading from './SectionHeading';
import CoursesCard from './CoursesCard';

export default function CoursesSection() {
  const courses = [
    {
      id: 1,
      title: 'Digital Marketing',
      description: 'Master digital marketing strategies',
      icon: <FaChartLine />,
      path: '/courses'
    },
    {
      id: 4,
      title: 'Web Development',
      description: 'Professional WordPress website development',
      icon: <FaWordpress />,
      path: '/courses'
    },
    {
      id: 5,
      title: 'Email & Whatsapp marketing',
      description: 'Email and Whatsapp marketing and automation',
      icon: <FaMobileAlt />,
      path: '/courses'
    },
    {
      id: 6,
      title: 'Graphics Designing',
      description: 'Creative design solutions learning',
      icon: <FaPalette />,
      path: '/courses'
    },
    {
      id: 7,
      title: 'SEO Optimization',
      description: 'Search Engine Optimization',
      icon: <FaSearch />,
      path: '/courses'
    },
    {
      id: 8,
      title: 'Video Editing',
      description: 'Professional video editing',
      icon: <FaVideo />,
      path: '/courses'
    },
    {
      id: 9,
      title: 'Full Stack Devlopment',
      description: 'Development using MERN Stack',
      icon: <FaReact />,
      path: '/courses'
    },
    {
      id: 10,
      title: 'Python Programming',
      description: 'Python learn from zero to hero',
      icon: <FaCode />,
      path: '/courses'
    },
    
   
  ];

  return (
    <section className={styles.coursesSection}>
      <SectionHeading
        title="Our Courses"
        subtitle="Transform Your Career with Expert-Led Training"
      />

      <div className={styles.coursesGrid}>
        {courses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <CoursesCard course={course} />
          </motion.div>
        ))}
      </div>

      <motion.div
        className={styles.coursesCtaContainer}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/courses" className={styles.coursesCta}>
          View All Courses
        </Link>
      </motion.div>
    </section>
  );
}
