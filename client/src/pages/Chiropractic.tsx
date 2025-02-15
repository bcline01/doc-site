import React, { useEffect, useState } from 'react';
import Baby from '../assets/baby.png';
import Pregnant from '../assets/pregnant.png';
import Patient from '../assets/patient.png';
import '../styles/Chiropractic.css';
import Navbar from '../components/Navbar';
import '../styles/Accessibility.css';
// import AccessibilityToolbar from '../components/AccessibilityToolbar';
import Footer from '../components/Footer';
import FirstVisit from '../components/FirstVisit';
import '../styles/FirstVisit.css';




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
      image: Baby,
      title: 'Chiropractic Care for Babies',
      description: 'Chiropractic care for babies focuses on gently addressing misalignments in their delicate spines that can occur during birth or early development.',
      points: [
        <>
          Helps alleviate common issues such as{' '}
          <span className="italic">gas, colic, and frequent spitting up</span>.
        </>,
        'Promotes restful sleep, essential for growth and development.',
        'Supports your baby’s nervous system for physical and emotional health.',
      ],
    },
    {
      image: Pregnant,
      title: 'Chiropractic Care During Pregnancy',
      description: 'Pregnancy brings incredible changes to the body, and chiropractic care can provide much-needed relief during this transformative time.',
      points: [
        'Alleviates back pain and reduces pressure on the hips.',
        <>
        Addresses issues like{' '}
        <span className='italic'>indigestion, headaches, and difficulty sleeping.</span>
        </>,
        'Supports smoother labor and delivery through optimized pelvic alignment.',
      ],
    },

  ];
 
  
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100); 
    return () => clearTimeout(timer); 
  }, []);

 
    
      return (
        <div>
        <div>
        <div id="top-of-page"></div>
            <Navbar />
        </div>
        {/* <div>
            <AccessibilityToolbar />
        </div> */}
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
