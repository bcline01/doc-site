import Orthotic from '../assets/orthotics.png';
import Exercise from '../assets/exercise-therapy.png';
import Stemwave from '../assets/stemwave.png';
import Functional from '../assets/functional-medicine.png';
import Massage from '../assets/masssage.png';
import Laser from '../assets/laser.png';
import Decompression from '../assets/spinal.png';
import Chiro from '../assets/chiroadjustment.png';
import { To, useNavigate } from 'react-router-dom';
import React from 'react';
import '../styles/FirstVisit.css';

const FirstVisit: React.FC = () => {
  const navigate = useNavigate();

  const therapies = [
    {
      name: 'Chiropractic',
      image: Chiro,
      route: "/chiropractic",
    },
    {
      name: 'Laser Therapy',
      image: Laser,
      route: "/laser",
    },
    {
      name: 'Spinal Decompression',
      image: Decompression,
      route: "/spinal",
    },
    {
      name: 'Massage',
      image: Massage,
      route: "/massage",
    },
    {
      name: 'Shockwave',
      image: Stemwave,
      route: "/shockwave",
    },
    {
      name: 'Custom Orthotics',
      image: Orthotic,
      route: "/orthotics",
    },
    {
      name: 'Exercise Therapy',
      image: Exercise,
      route: "/exercise",
    },
    {
      name: 'Functional Medicine',
      image: Functional,
      route: "/functional",
    },
  ];

  const handleServiceButton = (route: To) => {
    if (route) {
      navigate(route);
    } else {
      console.error('No route specified for this button.');}
  };

  return (
    <div>
      {/* Therapies Section */}
      <div className="therapies-container">
        <div
          style={{
            fontFamily: 'EB Garamond',
           textTransform: 'uppercase',
            fontSize: '3rem',
            letterSpacing: '2px',
            marginBottom: '15px',
          }}
        >
          Our Therapies
        </div>
        <p style={{ fontFamily: 'EB Garamond', fontSize: '1rem' }}>
          *A combination of therapies are used based on your personal need and plan of care*
        </p>
        <div className="therapies-grid">
          {therapies.map((therapy, idx) => (
            <div key={idx} className="therapy-item">
              <img
                src={therapy.image}
                alt={therapy.name}
                className="therapy-image"
                onClick={() => {
                  console.log(`Navigating to ${therapy.route}`);
                  handleServiceButton(therapy.route);
                }}
              />
              <h3
                onClick={() => {
                  console.log(`Navigating to ${therapy.route}`);
                  handleServiceButton(therapy.route);
                }}
                style={{ cursor: "pointer" }} // Optional: Makes it clear it's clickable
              >
                {therapy.name}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* First Visit Section */}
      <div className="first-visit-container">
        <div className="first-visit-content">
          <div
            style={{
              fontFamily: 'EB Garamond',
              textTransform: 'uppercase',
              fontSize: '3rem',
              letterSpacing: '2px',
              marginBottom: '15px',
            }}
          >
            What to Expect on Your First Visit
          </div>
          <ul>
            <li>Detailed Patient History</li>
            <li>Full Physical Exam</li>
            <li>X-Ray or review of Imaging</li>
            <li>Personalized Plan of Care</li>
            <li>First Adjustment</li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default FirstVisit;
