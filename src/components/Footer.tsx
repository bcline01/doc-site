import React from 'react';
import '../styles/Footer.css';
import { FaPhoneFlip } from "react-icons/fa6";
import { FaFax } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";





const Footer: React.FC = () => {
    return (
        <footer className="footer  py-4">
        <nav className="nav-bar-footer navbar navbar-expand justify-content-center mb-4">
          <ul className="nav-items-footer navbar-nav">
            <li className="footer-nav-item mx-2">
              <a className="footer-nav-link" href="#section1">Home</a>
            </li>
            <li className="footer-nav-item mx-2">
              <a className="footer-nav-link" href="#section2">Reviews</a>
            </li>
            <li className="footer-nav-item mx-2">
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
            </li>
          </ul>
        </nav>
      
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-3">
              <h5>Office Hours</h5>
              <p>
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
              <p>
                We will do our best to accommodate your busy schedule. Request an appointment today!
              </p>
              <button className="btn " style={{backgroundColor:'#55739b', color:'white'}}>Request Appointment!</button>
            </div>
      
            <div className="col-md-4 mb-3 ">
              <h5 >Contact Us</h5>
              <div ><span style={{marginRight:'4px'}}><FaPhoneFlip /> </span> (352) 372-4110</div> 
              <div ><span style={{marginRight:'4px'}}> <FaFax /> </span>(352) 373-0111</div>
                <div > <span style={{marginRight:'4px'}}></span><MdOutlineMail /> info@chirosofgainesville.com </div>
                <div > <span style={{marginRight:'4px'}}></span><MdLocationOn />  3703 SW 13th Street Gainesville, FL 32608</div>
            </div>
          </div>
        </div>
      </footer>
      
    );
};


export default Footer;