import React from 'react';
import { Link } from 'react-router-dom';
import "./BookList.css";

const Book = (book) => {
  return (
    <div className='book-item'>
      {/* Title */}
      <div className='book-item-info-item title'>
        <span>{book.title}</span>
      </div>

      {/* Image */}
      <div className='book-item-img'>
        <img src={book.cover_img} alt="image" />
      </div>

      {/* Author */}
      <div className='book-item-info-item author'>
        <span className='text-capitalize'>Author: </span>
        <span>{book.author?.join(", ")}</span>
      </div>

      {/* More Information Button */}
      <div className='book-item-info-item'>
        <Link to={`/book/${book.id}`} className='more-info-btn'>
          → More Info
        </Link>
      </div>
    </div>
  );
}

export default Book;
