import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/logo.png';
import '../styles/Home.css';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const isHomePage = location.pathname === '/';

  return (
    <nav className="nav-bar">
      <div className="logo">
        {isHomePage ? (
          <a href="#section1">
            <img src={Logo} alt="Logo" />
          </a>
        ) : (
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        )}
      </div>
      <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
        <ul className="nav-items">
          {/* Home */}
          <li>
            {isHomePage ? (
              <a href="#section1">Home</a>
            ) : (
              <Link to="/">Home</Link>
            )}
          </li>

          {/* Conditional Navigation for Other Pages */}
          {isHomePage ? (
            <>
              <li><a href="#section2">Testimonials</a></li>
              <li><a href="#section3">Services</a></li>
              <li><a href="#section4">Patient Portal</a></li>
              <li><a href="#section6">Our Docs</a></li>
              <li><a href="#section7">Contact us</a></li>
            </>
          ) : (
            <>
              {/* Dropdown for Services */}
              <li className="dropdown">
                <button
                  className="dropdown-toggle"
                  onClick={toggleDropdown}
                  aria-expanded={dropdownOpen}
                >
                  Services
                </button>
                {dropdownOpen && (
                  <ul className="dropdown-menu">
                    <li><Link to="/chiropractic">Chiropractic Care</Link></li>
                    <li><Link to="/laser">Laser Therapy</Link></li>
                    <li><Link to="/spinal">Spinal Decompression</Link></li>
                    <li><Link to="/massage">Massage Therapy</Link></li>
                    <li><Link to="/shockwave">Shockwave Therapy</Link></li>
                    <li><Link to="/orthotics">Custom Orthotics</Link></li>
                    <li><Link to="/exercise">Exercise Therapy</Link></li>
                    <li><Link to="/functional">Functional Medicine</Link></li>
                  </ul>
                )}
              </li>



              {/* Patient Portal */}
              <li><Link to="/patient-portal">Patient Portal</Link></li>

              {/* Book Appointment */}
              <li><Link to="/book-appointment">Request Appointment</Link></li>
            </>
          )}
        </ul>
      </nav>
      {/* Hamburger Menu for Mobile */}
      <button className="hamburger" onClick={toggleMenu} aria-label="Menu">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </nav>
  );
};

export default Navbar;
