import React from 'react';
import Header from '../../components/Header/Header';
import BookList from '../../components/BookList/BookList';
import CarousalComponent from '../../components/carousal/CarousalComponent';

const Home = () => {
  return (
    <main>
      <Header />
      <CarousalComponent />
      <BookList />
    </main>
  );
}

export default Home;
