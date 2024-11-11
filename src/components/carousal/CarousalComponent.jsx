// CarouselComponent.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CarouselComponent.css';

// Import images directly
import book1 from '../../images/book1.jpg';
import book2 from '../../images/book2.jpg';
import book3 from '../../images/book4.jpg';

const CarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Adjust based on the layout
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // Use the imported images here
  const books = [
    { title: 'Book 1', image: book1 },
    { title: 'Book 2', image: book2 },
    { title: 'Book 3', image: book3 },
    // Add more book objects as needed
  ];

  return (
    <section className="carousel-section">
      <h2 className="carousel-title">Featured Books</h2>
      <Slider {...settings}>
        {books.map((book, index) => (
          <div key={index} className="carousel-item">
            <img src={book.image} alt={book.title} className="carousel-image" />
            <h3 className="carousel-item-title">{book.title}</h3>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default CarouselComponent;
