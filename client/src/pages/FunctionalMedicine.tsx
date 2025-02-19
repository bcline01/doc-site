import React, { useEffect, useState } from 'react';
import FirstVisit from '../components/FirstVisit';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NutritionPic from '../assets/nutrition.png';

const FunctionalMedicine: React.FC = () => {
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
        <img src={NutritionPic} alt="Laser Therapy" />
      </div>
      <div className={`laser-content ${loaded ? 'fade-in' : ''}`}>
        <h1>
            Functional Medicine
        </h1>
        <p><>
        Blueprint Nutrition offers a personalized approach to health, focusing on{' '} 
        <span className='italic'>nutrition, supplementation, and lifestyle changes</span> to address the root causes of health issues. By integrating targeted nutrition plans with chiropractic care, Blueprint Nutrition helps restore balance, optimize metabolic function, and support overall well-being. This holistic approach enhances healing, promotes sustainable weight management, and boosts energy levels.</></p>
        <ul>
          <li>Blueprint Nutrition tailors nutrition protocols to individual needs, focusing on addressing deficiencies, balancing hormones, and optimizing overall health.</li>
          <li>Blueprint Nutrition helps regulate metabolism, improve energy levels, and support sustainable weight loss.</li>
          <li> Blueprint Nutrition boosts overall energy, reduces fatigue, and promotes better physical performance.</li>
          <li>Helps improve digestion, mental clarity, and emotional well-being, providing a holistic approach to health that complements chiropractic care.</li>
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

export default FunctionalMedicine;