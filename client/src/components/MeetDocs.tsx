import React, { useEffect, useRef, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../styles/MeetDocs.css';
import Man1 from '../assets/man1.png';
import Man2 from '../assets/man2.png';
import Man3 from '../assets/man3.png';
import Man4 from '../assets/doc-4.png';


// Options for the OwlCarousel
const options = {
    items: 1,
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: false,
    responsive: {
      0: { items: 1 },
      400: { items: 1 },
      600: { items: 1 },
      700: { items: 1 },
      800: { items: 1 },
      1000: { items: 1 }
    }
  };

const MeetDocs: React.FC = () => {

    const sectionRef = useRef<HTMLElement | null>(null);
    const [inView, setInView] = useState(false);
  
    // Use the Intersection Observer to detect when the section comes into view
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry.isIntersecting) {
            setInView(true); // Section is in view, trigger the animation
          } else {
            setInView(false); // Section is out of view, reset the animation
          }
        },
        {
          threshold: 0.25, // 25% of the section is visible
        }
      );
  
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
  
      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      };
    }, []);


    return (

        <section ref={sectionRef} className={`doc-page ${inView ? 'animate-line' : ''}`}>
            <div className='meet-doctors-text'> Meet Our Doctors</div>
            <div className="blue-line"></div>

            <OwlCarousel className="owl-theme" {...options}>
            <div className="carousel-item">
      <div className="row align-items-center">
        <div className="col-md-6 image-pair">
          <img 
            src={Man1} 
            alt="Man 1" 
            className="img-fluid rounded-circle" 
          />
        </div>
        <div className="col-md-6 doc-text">
          <p>Dr. Matthew Richeson</p>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="row align-items-center">
        <div className="col-md-6 image-pair">
          <img 
            src={Man2} 
            alt="Man 2" 
            className="img-fluid rounded-circle" 
          />
        </div>
        <div className="col-md-6 doc-text">
          <p>Dr. Matthew Cline</p>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="row align-items-center">
        <div className="col-md-6 image-pair">
          <img 
            src={Man3} 
            alt="Man 3" 
            className="img-fluid rounded-circle" 
          />
        </div>
        <div className="col-md-6 doc-text">
          <p>Dr. Cooper Cline</p>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="row align-items-center">
        <div className="col-md-6 image-pair">
          <img 
            src={Man4} 
            alt="Man 4" 
            className="img-fluid rounded-circle" 
          />
        </div>
        <div className="col-md-6 doc-text">
          <p>Dr. Kent Owens</p>
        </div>
      </div>
    </div>
                
            </OwlCarousel>

            {/* <div className="blue-line"></div> */}

        </section>
    );
};

export default MeetDocs;