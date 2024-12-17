import React from 'react';
import Video from '../assets/video.mp4';
import '../styles/Home.css';
import Review from '../components/Review';
import Logo from '../assets/logo.png';



const Home: React.FC = () => {
  return (
    <div>
     <nav className="nav-bar">
      <div className="logo">
        <a href="#section1">
          <img src={Logo} alt="Logo" />
        </a>
      </div>
      <ul className="nav-items">
        <li><a href="#section1">Home</a></li>
        <li><a href="#section2">Review</a></li>
        <li><a href="#section3">Services</a></li>
      </ul>
    </nav>

    <section id="section1" className="home-page">
    <video autoPlay loop muted className="background-video">
    <source src={Video} type="video/mp4" />
    Your browser does not support the video tag.
    </video>
    <div className="content">
    
      <p style={{color:'black', fontWeight:'600px', backgroundColor:'white', opacity:'0.4', borderRadius:'6px', padding:'10px'}}>We Welcome New Patients!<button className='home-btn'>Request a New Appointment</button></p>
    </div>
  </section>

  <section id="section2" className="review-page">
    <Review />
  </section>
  </div>
  );
};

export default Home;
