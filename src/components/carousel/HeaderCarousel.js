import React from 'react';
import { Carousel } from 'react-bootstrap';
import './HeaderCarousel.css'; // Import the custom CSS file

const HeaderCarousel = () => {
  return (
    <div className="carousel-container"> {/* Apply additional container styles if needed */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wowslider.com/sliders/demo-93/data1/images/sunset.jpg"
            alt="Slide 1"
          />
          <Carousel.Caption>
            <h2>Sunset</h2>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wowslider.com/sliders/demo-93/data1/images/landscape.jpg"
            alt="Slide 2"
          />
          <Carousel.Caption>
            <h2>Landscape</h2>
        
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wowslider.com/sliders/demo-93/data1/images/lake.jpg"
            alt="Slide 3"
          />
          <Carousel.Caption>
            <h2>Lake</h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HeaderCarousel;
