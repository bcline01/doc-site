import React from 'react';
// import Video from '../assets/video.mp4';
// import '../styles/Home.css';
import Review from '../components/Review';
// import Logo from '../assets/logo.png';
import Services from '../components/Services';
import Appointment from '../components/Appointment';
import Vision from '../components/Vision';
import MeetDocs from '../components/MeetDocs';
import Footer from '../components/Footer';
// import SpinePic from '../assets/spineImg.png';
import AccessibilityToolbar from '../components/AccessibilityToolbar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/Hero';
// import { useNavigate } from 'react-router-dom';
// import NewPic from '../assets/techspine.png';




const Home: React.FC = () => {


  return (
    <div>
      <Navbar />

      <div>
        <AccessibilityToolbar />
      </div>
      <section id='section1'>
        <HeroSection />
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
