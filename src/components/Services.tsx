import React from 'react';
import '../styles/Services.css';  
import chiroImage from '../assets/chiro.png';
import laserImage from '../assets/laser.png';
import massageImage from '../assets/masssage.png';
import spinalImage from '../assets/spinal.png';



const services = [
  { id: 1, title: 'Chiropractic Care', image: chiroImage, description: 'Description for Service 1' },
  { id: 2, title: 'Laser Therapy', image: laserImage, description: 'Description for Service 2' },
  { id: 3, title: 'Massage Therapy', image: massageImage, description: 'Description for Service 3' },
  { id: 4, title: 'Spinal Decompression', image: spinalImage, description: 'Description for Service 4' }
];


const Services: React.FC = () => {
  return (
    <section className="services-section">
      <h1 className='slogan-1'>We Are In The Healing Business</h1>
      <h2 className='slogan-2'>Restoring Function, Relieving Pain, and Enhancing Mobility</h2>
      <div className="services-container">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <img src={service.image} alt={service.title} className="service-image" />
            <h3 style={{fontFamily:'Raleway'}}>{service.title}</h3>
             
            <button className="learn-more-btn">Learn More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

