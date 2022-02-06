import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

import bcg2 from "../assets/bcg2.jpg"

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Plan from "../components/Plan/Plan";
import Header from "../components/Header";
import Recipes from "../components/Recipes";
import Products from "../components/Products";
import ShoppingList from "../components/ShoppingList";
import Settings from "../components/Settings";
import Tags from "../components/Tags";
import { useContext } from "react";
import ApiContext from "../store/ApiContext";

// import "./Home.css"

const Home = () => {
  const apiContext = useContext(ApiContext);
  const isLoggedIn = apiContext.isLoggedIn;
  return (
    <div className="h-screen">
      <div className="relative w-full h-full">
        <img 
          src={bcg2} 
          alt="where is the background" 
          className="fixed w-full h-full object-cover"
        />
        <div className="absolute w-full h-max top-0 right-0 bottom-0 left-0 p-5 bg-blackOverlay">
          <Nav />
          <div className="">
            
            <Header />
            {isLoggedIn && (
              <Routes>
                <Route path="/plan" element={<Plan />} />
                <Route path="/recipes" element={<Recipes />} />
                <Route path="/products" element={<Products />} />
                <Route path="/shopping-list" element={<ShoppingList />} />
                <Route path="/tags" element={<Tags />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            )}
            
          </div>
          {!isLoggedIn && <Navigate to="/"/>}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
