import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import FirstVisit from '../components/FirstVisit';
import Footer from '../components/Footer';
import Accident from '../assets/accident.png';

const CarAccidentRecovery: React.FC = () => {

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
        <img src={Accident} alt="Laser Therapy" />
      </div>
      <div className={`laser-content ${loaded ? 'fade-in' : ''}`}>
        <h1>
        From Impact to Recovery – Your Healing Starts Here!
        </h1>
        
        <ul>
          <li><span style={{fontWeight:'bold'}}>Comprehensive Evaluation & Diagnosis: </span>A thorough physical exam and digital X-rays (if needed) to assess injuries and create a personalized treatment plan.</li>
          <li><span style={{fontWeight:'bold'}}>Whiplash & Neck Pain Relief: </span>Gentle spinal adjustments help reduce stiffness, restore mobility, and alleviate pain caused by sudden impact.</li>
          <li><span style={{fontWeight:'bold'}}>Inflammation Reduction: </span>Chiropractic care helps decrease swelling and promotes faster healing by improving circulation and nerve function.</li>
          <li><span style={{fontWeight:'bold'}}>Soft Tissue Healing: </span>Techniques such as muscle therapy and rehabilitation exercises help repair damaged muscles, ligaments, and tendons.</li>
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

export default CarAccidentRecovery;