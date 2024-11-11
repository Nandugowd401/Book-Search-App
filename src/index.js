import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import { AppProvider } from './context.';
import './index.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import BookList from './components/BookList/BookList';
import BookDetails from './components/BookDetails/BookDetails';
import Footer from './components/Footer/Footer'; // Ensure you have a Footer component
import Navbar from './components/Navbar/Navbar';

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        {/* Home route */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        
        {/* About route */}
        <Route path="/about" element={<Layout><About /></Layout>} />
        
        {/* Other routes */}
        <Route path="/book" element={<Layout><BookList /></Layout>} />
        <Route path="/book/:id" element={<Layout><BookDetails /></Layout>} />
      </Routes>
    </BrowserRouter>
  </AppProvider>
);
