import { useNavigate } from 'react-router-dom';
import SpinePic from '../assets/spineImg.png';
import Video from '../assets/video.mp4';
import '../styles/Home.css';
import React from 'react';


const HeroSection: React.FC = () => {

    const navigate = useNavigate();

    const handleButton = () => {
      navigate('/appointment');
    };
      
  
    return (
      <section id="section1" className="home-page">
        <video autoPlay loop muted className="background-video">
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className='small-picture'>
          <img src={SpinePic} alt="Spine" />
        </div>
        {/* <button onClick={() => console.log("Test button clicked")}>Test Button</button> */}

          <div className='content'>
            <div>We Welcome New Patients</div>
            
            <button className="home-btn" onClick={handleButton}>Request a New Appointment</button>
            </div>
            <div className='extra-buttons'>
          <button className='extra-button'>Call Us</button>
          <button className='extra-button'>Get Directions</button> 
          </div>
          <div />
        
      </section>
    );
  };
  
  export default HeroSection;
  