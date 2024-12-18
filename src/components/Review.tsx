import React, { useEffect, useState } from 'react';
import Star from '../assets/stars.png';
import '../styles/Review.css';
// import { reviews } from '../components/seedData';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from 'axios';

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


const Review: React.FC = () => {
  const [reviews, setReviews] = useState<any[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        // Step 1: Get place_id using findplacefromtext API
        const findPlaceResponse = await axios.get('https://maps.googleapis.com/maps/api/place/findplacefromtext/json', {
          params: {
            input: 'Chiropractic Associates of Gainesville', // Name of the place you're looking for
            inputtype: 'textquery',
            key: process.env.API_KEY, // Use environment variable for security
          },
        });

        // Check if we got a valid response
        const placeId = findPlaceResponse.data.candidates[0]?.place_id;
        if (!placeId) {
          setError('Place not found');
          return;
        }

        // Step 2: Use place_id to fetch reviews using place/details API
        const reviewsResponse = await axios.get('https://maps.googleapis.com/maps/api/place/details/json', {
          params: {
            place_id: placeId,
            key: process.env.API_KEY, // Use the same API key
          },
        });

        // Set reviews to the state
        setReviews(reviewsResponse.data.result.reviews || []);
      } catch (error) {
        console.error('Error fetching reviews:', error);
        setError('Failed to fetch reviews');
      }
    };

    fetchReviews();
  }, []);


  return (
    <section className="page-review">

<OwlCarousel className="owl-theme" {...options}>
  {error && <p>{error}</p>}
  
  {reviews.length > 0 ? (
    reviews.map((review, index) => (
      <div key={index} className="item">
        <div className="review-content">
          <div className="img-section">
            <img
              src={Star}
              alt="Star"
              className="img-fluid"
              style={{ maxWidth: '70%', height: 'auto', maxHeight: '100px' }}
            />
          </div>
          <div className="text-column">
            <div
              style={{
                fontSize: '25px',
                opacity: '0.7',
                marginTop: '2%',
                fontFamily: 'Raleway',
                marginBottom: '5%',
                maxWidth: '80%',
              }}
            >
              "{review.text}"
              <br />
              <strong>- {review.author_name}</strong>
            </div>
          </div>
        </div>
      </div>
    ))
  ) : (
    <p>No reviews available</p>
  )}
</OwlCarousel>
    </section>
  );
};

export default Review;
