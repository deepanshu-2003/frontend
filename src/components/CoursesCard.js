import Link from 'next/link';
import styles from '/public/styles/Courses.module.css';

export default function CoursesCard({ course }) {
  return (
    <Link href={course?.path || '#'} className={styles.courseCard}>
      <div className={styles.courseIcon}>
        {course?.icon}
      </div>
      <h3 className={styles.courseTitle}>{course?.title}</h3>
      <p className={styles.courseDescription}>{course?.description}</p>
    </Link>
  );
}
