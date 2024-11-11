import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container footer-content'>
        <p className='footer-text'>
          &copy; {new Date().getFullYear()} Book Finder | All rights reserved.
        </p>
        <div className='social-icons'>
          <a href='#' target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-facebook-f'></i>
          </a>
          <a href='#' target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-twitter'></i>
          </a>
          <a href='#' target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-instagram'></i>
          </a>
          <a href='#' target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-linkedin-in'></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
