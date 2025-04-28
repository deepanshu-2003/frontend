"use client"

import { useRef } from 'react';
import { motion } from 'framer-motion'; // Only need motion
import { useInView } from 'react-intersection-observer'; // Re-introduce for simplicity
import CountUp from 'react-countup';
import styles from '/public/styles/Home.module.css';
import Image from 'next/image';

export default function StatsSection() {
  // Use a separate useInView for the numbers container for direct control
  const { ref: numbersRef, inView: numbersInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  // Use a separate useInView for the skills container
  const { ref: skillsRef, inView: skillsInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });


  const statItems = [
    {
      value: 6895,
      suffix: '',
      label: 'Enrolled Students',
      color: '#FDB515'
    },
    {
      value: 524,
      suffix: '+',
      label: 'Active Larners',
      color: '#3498db'
    },
    {
      value: 57,
      suffix: '+',
      label: 'Live Webinars',
      color: '#2ecc71'
    },
    {
      value: 94,
      suffix: '+',
      label: 'Certified Students',
      color: '#e05e97'
    }
  ];

  const skills = [
    {
      name: 'Student Satisfaction Rate',
      percentage: 98,
      color: '#2ecc71'
    },
    {
      name: 'Course Completion Rate',
      percentage: 95,
      color: '#FDB515'
    },
    {
      name: 'Students Placed',
      percentage: 92,
      color: '#e74c3c'
    },
    {
      name: 'Live Session Participation Rate',
      percentage: 88,
      color: '#3498db'
    },
    
    
  ];

  // No complex useEffect needed, rely on useInView hooks

  return (
    // No ref needed on the main section anymore
    <section className={styles.statsSection}>
      <div className={styles.statsBgOverlay}>
        {/* No overall animation needed here, apply to children */}
        <div className={styles.statsContent}>
          <h2 className={styles.statsHeading}>
          Through strategic insights, creative execution, and a deep understanding of the latest digital trends, we empower our learners to succeed in the fast-paced world of digital marketing.
          </h2>

          <div className={styles.statsContainer}>
            
            {/* Assign ref to the numbers container */}
            <div className={styles.statsNumbers} ref={numbersRef}> 
              {statItems.map((stat, index) => (
                // Simple div, animation handled by CountUp trigger
                <div
                  key={index}
                  className={styles.statItem}
                  // Add simple fade-in using motion inline if desired, but focus on CountUp
                >
                  <div className={styles.statValue} style={{ color: stat.color }}>
                    {stat.prefix && <span>{stat.prefix}</span>}
                    {/* Conditionally render CountUp only when numbersInView is true */}
                    {numbersInView ? (
                      <CountUp
                        start={0}
                        end={stat.value}
                        duration={2.5}
                        useEasing={true}
                        delay={0.2} // Keep delay just in case
                      />
                    ) : (
                      <span>0</span> // Render 0 before it's in view
                    )}
                    {stat.suffix && <span>{stat.suffix}</span>}
                  </div>
                  {/* Trigger label animation directly with numbersInView */}
                  <div className={`${styles.statLabel} ${numbersInView ? styles.statLabelAnimated : ''}`}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className={styles.skillsWrapper}>
            <div className={styles.statsImage}>
              <Image
                src="/images/image0.jpg"
                alt="Beehive Logo"
                width={400}
                height={400}
                className={styles.statsLogo}
              />
            </div>
            
            {/* Assign ref to the skills container */}
            <div className={styles.skillsContainer} ref={skillsRef}> 
              {skills.map((skill, index) => (
                 // Use framer-motion's viewport props directly on skill item
                <motion.div
                  key={index}
                  className={styles.skillItem}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }} // Animate when in view
                  viewport={{ once: true, amount: 0.5 }} // Trigger once when 50% visible
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                >
                  <div className={styles.skillInfo}>
                    <span className={styles.skillName}>{skill.name}</span>
                    <span className={styles.skillPercentage}>{skill.percentage}%</span>
                  </div>
                  <div className={styles.skillBar}>
                    {/* Use framer-motion's viewport props directly on progress bar */}
                    <motion.div
                      className={`${styles.skillProgress} ${skillsInView ? styles.skillProgressAnimated : ''}`} // Class based on container visibility
                      initial={{ width: 0 }} // Start with 0 width
                      whileInView={{ width: `${skill.percentage}%` }} // Animate width when in view
                      viewport={{ once: true, amount: 0.5 }} // Trigger once when 50% visible
                      transition={{ duration: 1.5, delay: index * 0.2 + 0.8, ease: "easeOut" }}
                      style={{
                        backgroundColor: skill.color,
                        backgroundImage: `linear-gradient(90deg, ${skill.color}dd, ${skill.color})`
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div> {/* Correct closing tag for statsContent */}
      </div>
    </section>
  );
}
