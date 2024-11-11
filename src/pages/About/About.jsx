import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";
import Footer from '../../components/Footer/Footer';

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src={aboutImg} alt="About BookHub" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>Discover Book Finder</h2>
            <p className='fs-17'>
              At **Book Finder**, we are dedicated to cultivating a love for reading and creating a vibrant community of book enthusiasts. Our extensive collection spans various genres, ensuring there is something for every type of reader.
            </p>
            <p className='fs-17'>
              Whether you are into thrilling mysteries, enlightening non-fiction, or timeless classics, BookFinder is your trusted companion. Join us to explore curated book selections, share insightful reviews, and connect with a passionate community that celebrates the joy of reading.
            </p>
            <div className='about-address'>
              <strong>Visit Us:</strong><br />
              123 BookFinder Lane, <br />
              Storytown, Reading City, <br />
              Literature State, 56789, <br />
              World of Books. <br />
              <strong>Contact:</strong> (123) 456-7890 <br />
              <strong>Email:</strong> contact@bookfinder.com
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </section>
    
  );
}

export default About;
