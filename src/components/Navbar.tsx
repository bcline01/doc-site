import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import '../styles/Home.css'


const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
    return (
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
    );
};

export default Navbar;