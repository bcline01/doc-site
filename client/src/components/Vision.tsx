import React, { useRef } from 'react';
import Golf from '../assets/golfing.png'; // Replace with actual image paths
import Hike from '../assets/hiking.png';
import Group from '../assets/group-doc.png';
import '../styles/Vision.css'; // For styling
import { motion, useInView } from 'framer-motion';


const Vision: React.FC = () => {
    const visionRef = useRef(null);
  
    // Use the useInView hook with the threshold option
    const inView = useInView(visionRef, {
      amount: 0.1, // 10% of the section is in view
    });

  return (
   
   <div id='vision-contrast' >
  <section className="vision" ref={visionRef}>
      <div className="vision-container">
        <div className="vision-images">
          <motion.img
            src={Group}
            alt="group"
            className="vision-image"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}

          />
          <motion.img
            src={Hike}
            alt="hike"
            className="vision-image"
            id='hike'
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          />
          <motion.img
            src={Golf}
            alt="golf"
            className="vision-image"
            id='golf'
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>
        <div className="vision-text">
          <div className="vision-section">
            <h3>Commitment</h3>
            <p>
            "We are committed to providing compassionate, patient-centered chiropractic care that prioritizes your well-being. Our team dedicates itself to understanding your unique needs and delivering effective treatments that support a healthier, pain-free lifestyle. Every visit is an opportunity for us to help you achieve lasting wellness."
            </p>
          </div>
          <div className="vision-section">
            <h3>Vision</h3>
            <p>
            "Our vision is to be a leading force in holistic chiropractic care, empowering our community to live healthier, more active lives. We strive to create a supportive environment where patients receive the highest quality care, tailored to improve mobility, alleviate pain, and promote overall health and wellness."
            </p>
          </div>
          <div className="vision-section">
            <h3>Purpose</h3>
            <p>
            "Our purpose is to restore and enhance the quality of life for our patients. Through natural, non-invasive treatments, we aim to relieve discomfort, prevent future injuries, and guide patients on their journey to optimal health. We are here to help you move better, feel better, and live better."
            </p>
          </div>
        </div>
      </div>
   
    </section>
   </div>
  );
};

export default Vision;
