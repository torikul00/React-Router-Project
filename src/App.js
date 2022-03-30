import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/HomePage/HomePage'
import About from './Components/About/About'
import Category from './Components/Category/Category'
import FoodInfo from './Components/FoodInfo/FoodInfo';

const App = () => {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/category' element={<Category />} />
        <Route path='/:foodID' element={<FoodInfo />} />
      </Routes>
    </div>
  );
};

export default App; 
