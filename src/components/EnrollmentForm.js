import React, { useState, useEffect } from 'react'; // Import useEffect
import styles from '/public/styles/EnrollmentForm.module.css';

const EnrollmentForm = ({ courses, onClose, selectedCourse }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    selectedCourse: selectedCourse ? selectedCourse.title : ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track submission success
  const [submissionError, setSubmissionError] = useState(null); // State to track submission error
  const [isProcessing, setIsProcessing] = useState(false); // State to track processing

  useEffect(() => {
    setFormData(prevFormData => ({
      ...prevFormData,
      selectedCourse: selectedCourse ? selectedCourse.title : ''
    }));
  }, [selectedCourse]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true); // Set processing to true
    setSubmissionError(null); // Clear previous errors
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/general/enroll`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.fullName,
          mobile: formData.mobileNumber,
          email: formData.email,
          course: formData.selectedCourse,
        }),
      });

      if (response.ok) {
        console.log('Enrollment successful!');
        setIsSubmitted(true);
        // Optionally, you could add a delay before closing the form
        // setTimeout(onClose, 3000);
      } else {
        console.error('Enrollment failed:', response.statusText);
        setSubmissionError('Enrollment failed. Please try again.'); // Set error message
      }
    } catch (error) {
      console.error('Error submitting enrollment form:', error);
      setSubmissionError('An error occurred during submission. Please try again.'); // Set error message
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        {isSubmitted ? (
          <div className={styles.successMessage}>
            <h2>Thank You!</h2>
            <p>Your enrollment request has been submitted successfully.</p>
            <button type="button" className={styles.closeButton} onClick={onClose}>Close</button>
          </div>
        ) : submissionError ? ( // Show error message if submissionError is not null
          <div className={styles.errorMessage}>
            <h2>Error</h2>
            <p>{submissionError}</p>
            <button type="button" className={styles.closeButton} onClick={onClose}>Close</button>
          </div>
        ) : ( // Otherwise, show the form
          <>
            <h2>Enroll Now</h2>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="fullName">Full Name:</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  disabled={isProcessing} // Disable input while processing
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="mobileNumber">Mobile Number:</label>
                <input
                  type="tel"
                  id="mobileNumber"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                  required
                  disabled={isProcessing} // Disable input while processing
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={isProcessing} // Disable input while processing
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="selectedCourse">Select Course:</label>
                <select
                  id="selectedCourse"
                  name="selectedCourse"
                  value={formData.selectedCourse}
                  onChange={handleInputChange}
                  required
                  disabled={isProcessing} // Disable input while processing
                >
                  <option value="">-- Select a Course --</option>
                  {courses.map((course, index) => (
                    <option key={index} value={course.title}>{course.title}</option>
                  ))}
                </select>
              </div>
              <button type="submit" className={styles.submitButton} disabled={isProcessing}>
                {isProcessing ? 'Processing...' : 'Submit'} {/* Change button text based on processing state */}
              </button>
              <button type="button" className={styles.closeButton} onClick={onClose} disabled={isProcessing}>Close</button> {/* Disable button while processing */}
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default EnrollmentForm;
