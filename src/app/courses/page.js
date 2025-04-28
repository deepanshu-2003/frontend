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
      title: 'Digital Marketing Mastery',
      description: 'Comprehensive training in digital marketing strategies, SEO, social media, and analytics',
      duration: '12 weeks',
      students: '350+',
      lectures: '48',
      level: 'All Levels',
      image: '/images/digital-marketing-icon.svg',
      highlights: [
        'SEO & SEM Strategies',
        'Social Media Marketing',
        'Content Marketing',
        'Email Marketing',
        'Analytics & Reporting'
      ]
    },
    {
      title: 'Social Media Marketing Pro',
      description: 'Advanced strategies for social media advertising and community building.',
      duration: '8 weeks',
      students: '200+',
      lectures: '32',
      level: 'Intermediate to Advanced',
      image: '/images/digital-marketing-icon.svg', // Assuming a generic digital marketing icon can be reused
      highlights: [
        'Platform-specific strategies',
        'Paid social advertising',
        'Influencer marketing',
        'Social media analytics',
        'Community engagement'
      ]
    },
    {
      title: 'Content Marketing Strategy',
      description: 'Develop and execute effective content marketing plans.',
      duration: '10 weeks',
      students: '180+',
      lectures: '40',
      level: 'All Levels',
      image: '/images/digital-marketing-icon.svg', // Assuming a generic digital marketing icon can be reused
      highlights: [
        'Content strategy development',
        'Content creation and curation',
        'Content distribution channels',
        'Measuring content performance',
        'Storytelling and copywriting'
      ]
    },
    {
      title: 'Web Development',
      description: 'Learn full-stack web development using modern technologies and frameworks',
      duration: '16 weeks',
      students: '250+',
      lectures: '64',
      level: 'Beginner to Advanced',
      image: '/images/coding-icon.svg',
      highlights: [
        'HTML, CSS, JavaScript',
        'React & Node.js',
        'Database Management',
        'API Development',
        'Deployment & DevOps'
      ]
    },
    {
      title: 'AI/ML Programming',
      description: 'Master artificial intelligence and machine learning concepts and applications',
      duration: '20 weeks',
      students: '150+',
      lectures: '72',
      level: 'Intermediate',
      image: '/images/brain-icon.svg',
      highlights: [
        'Python Programming',
        'Deep Learning',
        'Neural Networks',
        'Computer Vision',
        'NLP Applications'
      ]
    },
    {
      title: 'Email Marketing Automation',
      description: 'Learn to build and automate effective email marketing campaigns.',
      duration: '6 weeks',
      students: '150+',
      lectures: '24',
      level: 'Intermediate',
      image: '/images/digital-marketing-icon.svg',
      highlights: [
        'Email list building',
        'Email campaign design',
        'Marketing automation tools',
        'A/B testing and optimization',
        'Email analytics'
      ]
    },
    {
      title: 'Google Ads and PPC',
      description: 'Master paid advertising on Google and other platforms.',
      duration: '8 weeks',
      students: '220+',
      lectures: '30',
      level: 'Intermediate to Advanced',
      image: '/images/digital-marketing-icon.svg',
      highlights: [
        'Keyword research',
        'Ad campaign creation',
        'Bid management and optimization',
        'Landing page optimization',
        'PPC reporting and analysis'
      ]
    },
    {
      title: 'Affiliate Marketing Fundamentals',
      description: 'Understand the basics of affiliate marketing and how to get started.',
      duration: '5 weeks',
      students: '100+',
      lectures: '20',
      level: 'Beginner',
      image: '/images/digital-marketing-icon.svg',
      highlights: [
        'Affiliate networks and platforms',
        'Finding profitable niches',
        'Promotional methods',
        'Tracking and analysis',
        'Legal and ethical considerations'
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
