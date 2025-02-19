import React, { useEffect, useState } from 'react';
import FirstVisit from '../components/FirstVisit';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import SpinalPic from '../assets/spinal.png';
// import AccessibilityToolbar from '../components/AccessibilityToolbar';

const Spinal: React.FC = () => {
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
      {/* <div>
            <AccessibilityToolbar />
        </div> */}
      <div className='laser-page'>
    <div className="laser-container">
      <div className={`laser-image ${loaded ? 'fade-in' : ''}`} >
        <img src={SpinalPic} alt="Laser Therapy" />
      </div>
      <div className={`laser-content ${loaded ? 'fade-in' : ''}`}>
        <h1>
          Spinal Decompression
        </h1>
        <p><>
        Spinal decompression therapy is a non-invasive treatment that gently stretches the spine to relieve pressure on the spinal discs, nerves, and other structures in the back. This process aims to{' '} 
        <span className='italic'>promote healing, reduce pain, and improve mobility.</span> It is commonly used to treat conditions like herniated discs, sciatica, and degenerative disc disease.</></p>
        <ul>
          <li>Helps relieve pain associated with conditions like bulging or herniated discs.</li>
          <li>By creating negative pressure, it encourages the flow of nutrients and oxygen into the affected area, speeding up recovery.</li>
          <li> Helps restore proper alignment and enhances movement, reducing stiffness and discomfort.</li>
          <li>Can help reduce swelling around nerves and tissues, leading to less pain.</li>
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


export default Spinal;