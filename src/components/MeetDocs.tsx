import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../styles/MeetDocs.css';
import Man1 from '../assets/man1.png';
import Man2 from '../assets/man2.png';
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
    return (
       
        <section className="doc-page">
            <OwlCarousel className="owl-theme" {...options}>
            <div>
                    <img 
                        src={Man1}
                        alt='Man 1'
                        className='img-fluid'
                        style={{ maxWidth: '70%', height: 'auto', maxHeight: '100px' }} 

                    />
                </div>
                <div>
                    <img
                        src={Man2}
                        alt='Man 2'
                        className='img-fluid'
                        style={{ maxWidth: '70%', height: 'auto', maxHeight: '100px' }} 

                    />
                </div>
            </OwlCarousel>
        </section>
    );
};

export default MeetDocs;