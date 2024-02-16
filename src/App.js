import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import pages
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
// import components
import SideBar from './components/Sidebar';
import CartItem from './components/CartItem';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Product from './components/Product';

const App = () => {
  return (
  <div className='overflow-hidden'>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path ='/product/:id' element={<ProductDetails />} />
      </Routes>
      <SideBar />
      <Footer />
    </Router>
  </div>
  )
};

export default App;
