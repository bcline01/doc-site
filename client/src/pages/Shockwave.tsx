import React, { useEffect, useState } from 'react';
import FirstVisit from '../components/FirstVisit';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ShockwavePic from '../assets/stemwave1.png';
// import AccessibilityToolbar from '../components/AccessibilityToolbar';

const Shockwave: React.FC = () => {
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
        <img src={ShockwavePic} alt="Laser Therapy" />
      </div>
      <div className={`laser-content ${loaded ? 'fade-in' : ''}`}>
        <h1>
          Shockwave Therapy
        </h1>
        <p><>
        Shockwave therapy is a cutting-edge treatment that combines the principles of shockwave therapy with regenerative healing techniques, targeting the body’s natural healing processes. Using acoustic waves, Stemwave stimulates{' '} 
        <span className='italic'>tissue regeneration, reduces pain, and accelerates recovery</span> by promoting blood circulation and activating the body’s own stem cells. It’s particularly effective for chronic musculoskeletal conditions and soft tissue injuries.</></p>
        <ul>
          <li>Stimulates stem cells and encourages the body’s natural healing process, helping damaged tissues repair faster and more effectively.</li>
          <li>The acoustic waves help improve blood circulation, reducing swelling and alleviating chronic pain.</li>
          <li> Enhances tissue repair, allowing for faster recovery from injuries and surgeries.</li>
          <li>A safe, non-surgical alternative to pain management, reducing the need for medications or invasive treatments.</li>
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


export default Shockwave;