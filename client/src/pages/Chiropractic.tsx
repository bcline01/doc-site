import React, { useEffect, useState } from 'react';
// import Baby from '../assets/baby.png';
// import Pregnant from '../assets/pregnant.png';
import Patient from '../assets/patient.png';
import '../styles/Chiropractic.css';
import Navbar from '../components/Navbar';
import '../styles/Accessibility.css';
// import AccessibilityToolbar from '../components/AccessibilityToolbar';
import Footer from '../components/Footer';
import FirstVisit from '../components/FirstVisit';
import '../styles/FirstVisit.css';
import Car from '../assets/car-accident.png';
import Family from '../assets/family-pic.png';




const Chiropractic: React.FC = () => {


  const [loaded, setLoaded] = useState(false);
  const rows = [
    {
      image: Patient,
      title: 'Chiropractic Care for Everyone',
      description: 'Whether you are an athlete, elderly, or an average adult, chiropractic care offers benefits for everyone.',
      points: [
        'Improves mobility and reduces pain.',
        'Enhances recovery for athletes and flexibility for seniors.',
        'Addresses posture-related pain and tension headaches.',
        <>
        Helps manage chronic conditions like{' '} 
        <span className='italic'>arthritis and fibromyalgia.</span>
        </>,
        <>
        Promotes healing after{' '}
        <span className='italic'>car accidents,</span> sports injuries, and other traumas.
        </>,
      ],
    },
    
      {
        image: Car,
        title: 'Car Accident Injuries',
        description: 'Chiropractic care after a car accident helps restore alignment, reduce pain, and support the body’s natural healing process.',
        points: [
          <>
            Helps relieve common issues such as{' '}
            <span className="italic">whiplash, neck pain, and headaches</span>.
          </>,
          'Reduces inflammation and promotes faster recovery.',
          'Restores mobility and helps prevent long-term complications.',
          <>
            Learn more about how chiropractic care can aid in your recovery{' '}
            <a href="/car-accident-recovery">here</a>.
          </>,
        ],
      },
      
    {
      image: Family,
      title: 'Chiropractic Care for Families',
      description: 'Chiropractic care supports the health and well-being of every family member, from newborns to adults, by promoting alignment and overall wellness.',
      points: [
        <>
          Helps babies with{' '}
          <span className="italic">colic, gas pain, and digestive discomfort</span> by improving nervous system function.
        </>,
        <>
          Supports pregnant women by{' '}
          <span className="italic">reducing back pain, improving pelvic alignment, and easing discomfort during breastfeeding</span>.
        </>,
        'Provides natural pain relief for adults, children, and babies by reducing tension, improving mobility, and enhancing overall spinal health.',
      ],
    
    }
  ];    
 
  
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100); 
    return () => clearTimeout(timer); 
  }, []);

  useEffect(() => {
    document.getElementById("top-of-page")?.scrollIntoView({ behavior: "smooth" });
  }, []);

 
    
      return (
        <div>
        <div>
        <div id="top-of-page"></div>
            <Navbar />
        </div>
       
        <div className='responsive-container'>
        <div className="chiropractic-main">
    {rows.map((row, index) => (
      <section key={index} className="chiropractic-row">
        <img src={row.image} alt={row.title} className={`responsive-image ${loaded ? 'fade-in' : ''}`} />
        <div className={`text-content ${loaded ? 'fade-in' : ''}`}>
          <h1>{row.title}</h1>
          <p>{row.description}</p>
          <ul>
            {row.points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      </section>
    ))}
  </div>
  
  <FirstVisit />
  

  </div>
  <Footer />
  </div>
  );
}

  
export default Chiropractic;
