import React, { useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Star from '../assets/stars.png';
import '../styles/Review.css';
import { reviews } from '../components/seedData';


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

const getRandomReviews = () => {
  // Shuffle the reviews array and get the first 3
  const shuffledReviews = [...reviews].sort(() => 0.5 - Math.random());
  return shuffledReviews.slice(0, 3);
};


const Review: React.FC = () => {
  const [randomReviews] = useState(getRandomReviews()); // Get 3 random reviews
  // console.log(randomReviews);



  return (
    <section className="page-review">

<OwlCarousel className="owl-theme" {...options}>
{randomReviews.map((review, index) => (
      <div key={index} className="item">
        <div className="review-content">
          <div className="img-section">
            <img
              src={Star}
              alt="Star"
              className="img-fluid"
              style={{ maxWidth: '70%', height: 'auto', maxHeight: '100px', borderRadius: '6px' }}
            />
          </div>
          <div className="text-column">
            <div className='review-text'>
              "{review.review}"
              <br />
              <strong>- {review.name}</strong>
            </div>
          </div>
        </div>
      </div>
    ))}
  
</OwlCarousel>
    </section>
  );
};

export default Review;
