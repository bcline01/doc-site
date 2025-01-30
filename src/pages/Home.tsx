import React from 'react';
import Video from '../assets/video.mp4';
import '../styles/Home.css';
import Review from '../components/Review';
// import Logo from '../assets/logo.png';
import Services from '../components/Services';
import Appointment from '../components/Appointment';
import Vision from '../components/Vision';
import MeetDocs from '../components/MeetDocs';
import Footer from '../components/Footer';
import SpinePic from '../assets/spineImg.png';
import AccessibilityToolbar from '../components/AccessibilityToolbar';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';




const Home: React.FC = () => {
  const navigate = useNavigate();
  
  const handleButton = () => {
    navigate ('/appointment');
  }

  // const [menuOpen, setMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   setMenuOpen(!menuOpen);
  // };

  return (
    <div>
  <Navbar />

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
          <div >
          <button className='home-btn' onClick={handleButton}>Request a New Appointment</button>
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
