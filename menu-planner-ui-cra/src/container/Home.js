import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Plan from '../components/Plan';
import Header from '../components/Header';
import Recipes from '../components/Recipes';
import Products from '../components/Products';
import ShoppingList from '../components/ShoppingList';
import Settings from '../components/Settings';
import ApiProvider from '../store/ApiProvider';
import Tags from '../components/Tags'

const Home = () => {
  return (
    <div>
      <ApiProvider>
        <Header />
        <Routes>
          <Route path='/plan' element={<Plan />} />
          <Route path='/recipes' element={<Recipes />} />
          <Route path='/products' element={<Products />} />
          <Route path='/shopping-list' element={<ShoppingList />} />
          <Route path={`/tags`} element={<Tags />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </ApiProvider>
    </div>
  )
}

export default Home;
