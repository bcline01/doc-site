import React, { useEffect, useState } from 'react';
import FirstVisit from '../components/FirstVisit';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import MassagePic from '../assets/masssage.png';
// import AccessibilityToolbar from '../components/AccessibilityToolbar';

const Massage: React.FC = () => {
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
        <img src={MassagePic} alt="Laser Therapy" />
      </div>
      <div className={`laser-content ${loaded ? 'fade-in' : ''}`}>
        <h1>
          Massage Therapy
        </h1>
        <p><>
        Massage therapy is a hands-on treatment that focuses on relaxing muscles, improving circulation, and relieving tension. When integrated with chiropractic care, it{' '} 
        <span className='italic'>complements spinal adjustments by helping to relax the soft tissues, reduce muscle spasms, and promote overall healing.</span> This therapy can be especially beneficial for those dealing with chronic pain, stiffness, or post-adjustment soreness.</></p>
        <ul>
          <li>Targets tight or overworked muscles, helping to ease pain and discomfort.</li>
          <li>Loosens up muscles around the spine, allowing for better movement and supporting the effectiveness of chiropractic adjustments.</li>
          <li>  Increases blood flow to tissues, promoting healing and reducing inflammation.</li>
          <li>Improves muscle and joint flexibility, aiding in recovery and preventing future injuries.</li>
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

export default Massage;