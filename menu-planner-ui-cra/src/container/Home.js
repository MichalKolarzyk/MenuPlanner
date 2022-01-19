import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Plan from '../components/Plan';
import Header from '../components/Header';
import Recipes from '../components/Recipes';
import Products from '../components/Products';

const Home = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/plan' element={<Plan />} />
        <Route path='/recipes' element={<Recipes />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </div>
  )
}

export default Home;
