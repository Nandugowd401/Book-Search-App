import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            {/* <Navbar /> */}
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
                <p className='header-text fs-18 fw-3'> Discover a world of knowledge at your fingertips. Whether you're looking for fiction, non-fiction, or educational resources, we have it all. Find your next great read and embark on a journey of imagination, learning, and adventure. Start your search now and unlock the stories that will change your life!</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header