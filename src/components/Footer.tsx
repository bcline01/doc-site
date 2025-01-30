import React from 'react';
import '../styles/Footer.css';
import { FaPhoneFlip } from "react-icons/fa6";
import { FaFax } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';





// AIzaSyAOWHZBwPq_u9263KQzV-W-MtfErUHZeeE

const Footer: React.FC = () => {
  const navigate = useNavigate();
  
  const handleButton = () => {
    navigate ('/appointment');
  }

    const handlePhoneClick = () => {
        window.location.href = 'tel:+13523724110';
      };

      const googleMapsUrl = 'https://www.google.com/maps?q=Chiropractic+Associates+of+Gainesville';
      
      const handleAddressClick = () => {
        window.open(googleMapsUrl, '_blank');
      };


    return (
      <footer className="footer  py-4">
        <nav className="nav-bar-footer navbar navbar-expand justify-content-center mb-4">
          <ul className="nav-items-footer navbar-nav">

            <li className="footer-nav-item mx-2">
              <Link className="footer-nav-link" to="/">Home</Link>
            </li>

            <li className="footer-nav-item mx-2">
              <Link className="footer-nav-link" to="/new-patient-form">New Patient Forms</Link>
            </li>
            {/* <li className="footer-nav-item mx-2">
              <a className="footer-nav-link" href="#section3">Services</a>
            </li>
            <li className="footer-nav-item mx-2">
              <a className="footer-nav-link" href="#section4">Appointment</a>
            </li>
            <li className="footer-nav-item mx-2">
              <a className="footer-nav-link" href="#section5">Vision</a>
            </li>
            <li className="footer-nav-item mx-2">
              <a className="footer-nav-link" href="#section6">MeetDocs</a>
            </li> */}
          </ul>
        </nav>
      
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-3">
              <h5>Office Hours</h5>
              <p style={{fontSize:'20px'}}>
                (SU) Closed <br />
                (M) 8:00am-5:00pm<br />
                (T) 7:15am-6:00pm<br />
                (W) 8:00am-5:00pm<br />
                (TH) 7:15am-6:00pm<br />
                (F) 8:00am-4:00pm<br />
                (SA) By Appointment Request<br />
              </p>
            </div>
      
            <div className="col-md-4 mb-3">
              <h5>Appointments</h5>
              <p style={{fontSize:'20px'}}>
                We will do our best to accommodate your busy schedule. Request an appointment today!
              </p>
              <button className="footer-btn" onClick={handleButton}>Request Appointment!</button>
            </div>

                    <div className="col-md-4 mb-3 ">
                        <h5 >Contact Us</h5>
                        <div ><span style={{ marginRight: '4px', cursor: 'pointer' }} onClick={handlePhoneClick}><FaPhoneFlip /> </span> <a href="tel:+13523724110" className="contact-link">
                            (352) 372-4110
                        </a></div>
                        <div><span style={{ marginRight: '4px', fontSize:'20px' }}> <FaFax /> </span>(352) 373-0111</div>
                        <div className='email-container'><span
                            className='email-icon'
                            onClick={() => window.location.href = 'mailto:info@chirosofgainesville.com?subject=Inquiry&body=Hello, I would like to schedule an appointment for'}
                        >
                            <MdOutlineMail />
                        </span>
                            <a
                                href="mailto:info@chirosofgainesville.com?subject=Inquiry&body=Hello, I would like to schedule an appointment for"
                                className="contact-link"
                            >
                                info@chirosofgainesville.com
                            </a></div>
                        <div><span
                            style={{ marginRight: '4px', cursor: 'pointer' }}
                            onClick={handleAddressClick}
                        >
                            <MdLocationOn />
                        </span>
                            <a
                                href={googleMapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-link"
                            >
                                3703 SW 13th Street Gainesville, FL 32608
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
};


export default Footer;