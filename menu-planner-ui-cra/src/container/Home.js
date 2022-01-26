import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Plan from '../components/Plan';
import Header from '../components/Header';
import Recipes from '../components/Recipes';
import Products from '../components/Products';
import ShoppingList from '../components/ShoppingList';
import Settings from '../components/Settings';
import ApiProvider from '../store/ApiProvider';
import Tags from '../components/Tags';
import MainSite from '../components/MainSite';

const Home = () => {
  return (
    <div className='p-5 h-screen'>
      <ApiProvider>
        <Nav />
        <Header />
        <Routes>
          {/* <Route path='/' element={<MainSite />} /> */}
          <Route path='/plan' element={<Plan />} />
          <Route path='/recipes' element={<Recipes />} />
          <Route path='/products' element={<Products />} />
          <Route path='/shopping-list' element={<ShoppingList />} />
          <Route path={`/tags`} element={<Tags />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
        <Footer />
      </ApiProvider>
    </div>
  )
}

export default Home;
