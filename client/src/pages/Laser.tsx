import React, { useEffect, useState } from 'react';
import LaserPic from '../assets/LaserPic.png';
import '../styles/Laser.css';
import FirstVisit from '../components/FirstVisit';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
// import AccessibilityToolbar from '../components/AccessibilityToolbar';
// import { useLocation } from 'react-router-dom';

const Laser: React.FC = () => {
 
  // const location = useLocation();

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
        <img src={LaserPic} alt="Laser Therapy" />
      </div>
      <div className={`laser-content ${loaded ? 'fade-in' : ''}`}>
        <h1>Laser Therapy</h1>
        <p>
          Laser therapy is an innovative and non-invasive treatment option in chiropractic care. It can enhance healing, reduce pain, and improve your overall quality of life. Here are some key benefits:
        </p>
        <ul>
          <li>Accelerates tissue repair and regeneration.</li>
          <li>Reduces inflammation and promotes pain relief.</li>
          <li>Improves mobility and flexibility.</li>
          <li>Non-invasive and suitable for a variety of conditions.</li>
        </ul>
      </div>
    </div>
    
    <div>
      <FirstVisit />
      </div>
      <div>
        <Footer />
      </div>
      </div>
     
    </div>
  );
};

export default Laser;
