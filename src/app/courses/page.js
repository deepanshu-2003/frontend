"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import * as motion from "motion/react-client"
import { FaRegClock, FaUserGraduate, FaLaptopCode, FaCertificate, FaChalkboardTeacher, FaBookReader } from 'react-icons/fa';
import styles from '/public/styles/CoursesPage.module.css';
import SectionHeading from '../../components/SectionHeading';

import EnrollmentForm from '../../components/EnrollmentForm'; // Import the new component

export default function Courses() {
  const [showEnrollmentForm, setShowEnrollmentForm] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null); // State to store selected course

  const handleEnrollClick = (course) => { // Accept course data
    setSelectedCourse(course); // Store selected course
    setShowEnrollmentForm(true);
  };

  const handleCloseForm = () => {
    setShowEnrollmentForm(false);
    setSelectedCourse(null); // Clear selected course on close
  };

  const courses = [
    {
      title: 'Digital Marketing',
      description: 'Comprehensive training in digital marketing strategies, SEO, social media, and analytics',
      duration: '12 weeks',
      students: '350+',
      lectures: '48',
      level: 'All Levels',
      image: '/images/icons/digital_marketing.svg',
      highlights: [
        'SEO & SEM Strategies',
        'Social Media Marketing',
        'Content Marketing',
        'Email Marketing',
        'Analytics & Reporting'
      ]
    },
    {
      title: 'Web Development',
      description: 'Learn web development using WordPress',
      duration: '16 weeks',
      students: '250+',
      lectures: '64',
      level: 'Beginner to Advanced',
      image: '/images/icons/web_development.svg',
      highlights: [
        'WordPress Installation',
        'Theme Customization',
        'Plugin Development',
        'Website Security',
        'E-commerce with WooCommerce'
      ]
    },
    {
      title: 'Email and Whatsapp Marketing',
      description: 'Master strategies for email and WhatsApp marketing campaigns.',
      duration: '8 weeks',
      students: '200+',
      lectures: '32',
      level: 'Intermediate to Advanced',
      image: '/images/icons/email_whatsapp_marketing.svg',
      highlights: [
        'Email list building',
        'Email campaign design',
        'WhatsApp marketing strategies',
        'Marketing automation tools',
        'Analytics and reporting'
      ]
    },
    {
      title: 'Graphics Designing',
      description: 'Learn the fundamentals of graphic design and popular design tools.',
      duration: '10 weeks',
      students: '180+',
      lectures: '40',
      level: 'All Levels',
      image: '/images/icons/graphics_designing.svg',
      highlights: [
        'Design Principles',
        'Adobe Photoshop',
        'Adobe Illustrator',
        'Typography',
        'Color Theory'
      ]
    },
    {
      title: 'SEO optimisation',
      description: 'Master search engine optimization techniques to improve website ranking.',
      duration: '12 weeks',
      students: '300+',
      lectures: '45',
      level: 'Intermediate to Advanced',
      image: '/images/icons/seo_optimization.svg',
      highlights: [
        'Keyword Research',
        'On-Page SEO',
        'Off-Page SEO',
        'Technical SEO',
        'SEO Analytics'
      ]
    },
    {
      title: 'Video Editing',
      description: 'Learn video editing techniques and software for creating engaging videos.',
      duration: '8 weeks',
      students: '150+',
      lectures: '30',
      level: 'Beginner to Intermediate',
      image: '/images/icons/video_editing.svg',
      highlights: [
        'Video Editing Software',
        'Cutting and Trimming',
        'Adding Transitions and Effects',
        'Color Correction',
        'Audio Editing'
      ]
    },
    {
      title: 'Full stack development',
      description: 'Become a full-stack developer using the MERN stack (MongoDB, Express, React, Node.js).',
      duration: '20 weeks',
      students: '280+',
      lectures: '70',
      level: 'Intermediate to Advanced',
      image: '/images/icons/fullstack_development.svg',
      highlights: [
        'MongoDB Database',
        'Express.js Framework',
        'React.js Library',
        'Node.js Runtime',
        'Building RESTful APIs'
      ]
    },
    {
      title: 'App Development',
      description: 'Learn to build mobile applications for iOS and Android using Flutter.',
      duration: '18 weeks',
      students: '220+',
      lectures: '60',
      level: 'Intermediate',
      image: '/images/icons/app_development.svg',
      highlights: [
        'Mobile UI/UX Design',
        'Flutter Framework',
        'API Integration',
        'State Management',
        'App Deployment'
      ]
    },
    {
      title: 'Python Development',
      description: 'Master Python programming for various applications, including web development and data science.',
      duration: '14 weeks',
      students: '300+',
      lectures: '50',
      level: 'Beginner to Advanced',
      image: '/images/icons/python_development.svg',
      highlights: [
        'Python Fundamentals',
        'Web Development frameworks',
        'Data Analysis with Pandas',
        'Machine Learning Libraries',
        'Automation and Scripting'
      ]
    },
    {
      title: 'Data Science',
      description: 'Learn data analysis, visualization, and machine learning techniques.',
      duration: '16 weeks',
      students: '200+',
      lectures: '55',
      level: 'Intermediate to Advanced',
      image: '/images/icons/data_science.svg',
      highlights: [
        'Data Analysis with Pandas',
        'Data Visualization with Matplotlib/Seaborn',
        'Statistical Modeling',
        'Machine Learning Algorithms',
        'Big Data Concepts'
      ]
    },
    {
      title: 'Machine Learning and AI',
      description: 'Master advanced machine learning concepts and artificial intelligence applications.',
      duration: '20 weeks',
      students: '180+',
      lectures: '70',
      level: 'Advanced',
      image: '/images/icons/machine_learning_ai.svg',
      highlights: [
        'Deep Learning Frameworks (TensorFlow, PyTorch)',
        'Neural Network Architectures',
        'Natural Language Processing (NLP)',
        'Computer Vision',
        'AI Ethics and Bias'
      ]
    },
    {
      title: '2D and 3D Animations',
      description: 'Learn 2D and 3D animation using Blender and AI tools.',
      duration: '14 weeks',
      students: '120+',
      lectures: '48',
      level: 'Beginner to Advanced',
      image: '/images/icons/animation_2d_3d.svg',
      highlights: [
        'Blender Fundamentals',
        '3D Modeling and Sculpting',
        '2D Animation Techniques',
        'AI-Assisted Animation',
        'Rendering and Post-Production'
      ]
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.heroSection}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.heroContent}
        >
          <h1>Our Courses</h1>
          <p>Explore our comprehensive range of courses designed to help you succeed in the digital world.</p>
        </motion.div>
      </div>

      <section className={styles.coursesSection}>
        <SectionHeading 
          title="Featured Courses" 
          subtitle="Discover in-depth courses taught by industry experts"
        />

        <div className={styles.coursesGrid}>
          {courses.map((course, index) => (
            <motion.div 
              key={index}
              className={styles.courseCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.courseHeader}>
                <div className={styles.courseIcon}>
                  <Image 
                    src={course.image}
                    alt={course.title}
                    width={40}
                    height={40}
                    priority
                  />
                </div>
                <div className={styles.courseLevel}>{course.level}</div>
              </div>

              <h2 className={styles.courseTitle}>{course.title}</h2>
              <p className={styles.courseDescription}>{course.description}</p>

              <div className={styles.courseHighlights}>
                <h3>What You'll Learn</h3>
                <ul>
                  {course.highlights.map((highlight, i) => (
                    <li key={i}>
                      <FaBookReader className={styles.highlightIcon} />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.courseDetails}>
                <div className={styles.detailItem}>
                  <FaRegClock />
                  <span>{course.duration}</span>
                </div>
                <div className={styles.detailItem}>
                  <FaUserGraduate />
                  <span>{course.students} Students</span>
                </div>
                <div className={styles.detailItem}>
                  <FaChalkboardTeacher />
                  <span>{course.lectures} Lectures</span>
                </div>
              </div>

              <button className={styles.enrollButton} onClick={() => handleEnrollClick(course)}>
                Enroll Now
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {showEnrollmentForm && (
        <EnrollmentForm courses={courses} onClose={handleCloseForm} selectedCourse={selectedCourse} />
      )}
    </div>
  );
}
