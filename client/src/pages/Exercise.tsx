import React, { useEffect, useState } from 'react';
import FirstVisit from '../components/FirstVisit';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ExercisePic from '../assets/foamroller.png';

const Exercise: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100); // Add a slight delay to trigger animations
    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  useEffect(() => {
    document.getElementById("top-of-page")?.scrollIntoView({ behavior: "smooth" });
  }, []);


  return (
    <div>
    
        <div id="top-of-page"></div>
      <div>
        <Navbar />
      </div>
      <div className='laser-page'>
    <div className="laser-container">
      <div className={`laser-image ${loaded ? 'fade-in' : ''}`} >
        <img src={ExercisePic} alt="Laser Therapy" />
      </div>
      <div className={`laser-content ${loaded ? 'fade-in' : ''}`}>
        <h1>
          Exercise Therapy
        </h1>
        <p><>
        Exercise therapy is a therapeutic approach that uses targeted stretches and exercises to help maintain{' '} 
        <span className='italic'>proper alignment, improve mobility, and strengthen muscles.</span> As part of chiropractic care, exercise therapy is designed to support spinal health, enhance flexibility, and reduce the risk of injury. These personalized exercises are intended to complement chiropractic adjustments by improving muscle function, posture, and overall body mechanics.</></p>
        <ul>
          <li>Specific stretches and strengthening exercises help maintain the alignment achieved through chiropractic adjustments.</li>
          <li>Regular exercise therapy helps increase joint range of motion and muscle flexibility, reducing stiffness and improving overall movement.</li>
          <li>Stretching and strengthening exercises can alleviate tension, relieve chronic pain, and prevent future pain episodes by addressing underlying musculoskeletal imbalances.</li>
          <li>Exercises are designed to improve posture by strengthening postural muscles, which reduces the risk of spinal misalignments and enhances overall body alignment.</li>
        </ul>
      </div>
    </div>
    
    <div>
      <FirstVisit />
      </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};


export default Exercise;