import React, { useEffect, useState } from 'react';
import FirstVisit from '../components/FirstVisit';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import OrthoticsPic from '../assets/orthotics2.png';
// import AccessibilityToolbar from '../components/AccessibilityToolbar';

const Orthotics: React.FC = () => {
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
        <img src={OrthoticsPic} alt="Laser Therapy" />
      </div>
      <div className={`laser-content ${loaded ? 'fade-in' : ''}`}>
        <h1>
          Custom Orthotics
        </h1>
        <p><>
        Foot Levelers Custom Orthotics are specially designed shoe inserts that provide personalized support for your feet, helping to{' '} 
        <span className='italic'>improve alignment, posture, and overall movement.</span> Unlike over-the-counter insoles, custom orthotics are tailored to your specific foot structure and gait. When combined with chiropractic care, they can enhance spinal health by supporting proper alignment and reducing strain on the body.</></p>
        <ul>
          <li>Custom orthotics help correct misalignments in the feet, which can lead to better posture and reduced strain on the spine, hips, and knees.</li>
          <li> Helps alleviate foot pain, heel spurs, plantar fasciitis, and other common conditions by redistributing pressure and cushioning high-impact areas.</li>
          <li> By correcting foot misalignments, custom orthotics can reduce the strain on the joints and muscles of the lower body, including the knees, hips, and lower back.</li>
          <li> Proper foot support encourages an upright posture, which helps maintain spinal health and reduces the risk of developing spinal issues or discomfort.
          </li>
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


export default Orthotics;