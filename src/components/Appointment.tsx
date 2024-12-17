import React from 'react';
import UFPic from '../assets/UF.png';
import '../styles/Appointment.css'; 

const Appointment: React.FC = () => {
  return (
    <div className="appointment">
      <div className="image-container">
        <img src={UFPic} alt="Chiropractic Care" className="image" />
        <div className="overlay">
          <h2>Your Health, Our Priority</h2>
          <p>Book your appointment today for personalized care</p>
          <button className='button'>Request Appointment Now</button>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
