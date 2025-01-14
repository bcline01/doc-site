import React, { useState } from 'react';
import Video from '../assets/video.mp4';
import '../styles/Home.css';
import Review from '../components/Review';
import Logo from '../assets/logo.png';
import Services from '../components/Services';
import Appointment from '../components/Appointment';
import Vision from '../components/Vision';
import MeetDocs from '../components/MeetDocs';
import Footer from '../components/Footer';
import SpinePic from '../assets/spineImg.png';
import AccessibilityToolbar from '../components/AccessibilityToolbar';




const Home: React.FC = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
     <nav className="nav-bar">
      <div className="logo">
        <a href="#section1">
          <img src={Logo} alt="Logo" />
        </a>
      </div>
      <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
      <ul className="nav-items">
        <li><a href="#section1">Home</a></li>
        <li><a href="#section2">Testimonials</a></li>
        <li><a href="#section3">Services</a></li>
         <li><a href="#section4">Patient Portal</a></li>
        {/* <li><a href="#section5">Vision</a></li>  */}
        <li><a href="#section6">Our Docs</a></li>
        <li><a href="#section7">Contact us</a></li>
      </ul>
    </nav>

    <button className="hamburger" onClick={toggleMenu} aria-label="Menu">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </nav>

     {/* Accessibility Toolbar */}
     <div>
     <AccessibilityToolbar />
     </div>

      <section id="section1" className="home-page">
        <video autoPlay loop muted className="background-video">
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className='small-picture'>
        <img src={SpinePic} alt="Spine" />
        </div>
        <div className="content">
          <div className='welcome'>
            <div> We Welcome New Patients</div>
          <div className='home-btn-container'>
          <button className='home-btn'>Request a New Appointment</button>
          </div>
          <div className='extra-buttons'>
          <button className='extra-button'>Call Us</button>
          <button className='extra-button'>Get Directions</button> 
          </div>
          </div>
        </div>
       
      </section>

  <section id="section2" className="review-page">
    <Review />
  </section>
  <section id="section3">
    <Services />
  </section>
  <section id="section4">
    <Appointment />
  </section>
  <section id="section5">
    <Vision />
  </section>
  <section id="section6">
    <MeetDocs />
  </section>
  <section id="section7">
    <Footer />
  </section>
  </div>
  );
};

export default Home;
