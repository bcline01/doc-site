import React from 'react';
import Star from '../assets/stars.png';
import '../styles/Review.css';
import { reviews } from '../components/seedData';
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';

const getRandomReview = () => {
  return reviews[Math.floor(Math.random() * reviews.length)];
};



const Review: React.FC = () => {
  const randomReview = getRandomReview(); // Get a random review on each render

  return (
    <section className="page-review">
      {/* <OwlCarousel className="owl-theme" loop margin={10} nav dots> */}
        {/* <div className="item"> */}
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="img-section">
                <img 
                  src={Star} 
                  alt="placeholder" 
                  className="img-fluid" 
                  style={{ maxWidth: '70%', height: 'auto', maxHeight: '300px' }} 
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 text-column">
              <div style={{ fontSize: '25px', opacity: '0.7', marginTop: '5%', marginRight: '15%', fontFamily: 'Raleway' }}>
                "{randomReview.review}"
                <br />
                <strong>- {randomReview.name}</strong>
              </div>
            </div>
          </div>
        {/* </div> */}
      {/* </OwlCarousel> */}
    </section>
  );
};

export default Review;
