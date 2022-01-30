import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Plan from "../components/Plan";
import Header from "../components/Header";
import Recipes from "../components/Recipes";
import Products from "../components/Products";
import ShoppingList from "../components/ShoppingList";
import Settings from "../components/Settings";
import Tags from "../components/Tags";
import { useContext } from "react/cjs/react.development";
import ApiContext from "../store/ApiContext";

const Home = () => {
  const apiContext = useContext(ApiContext);
  const isLoggin = apiContext.isLoggin();
  return (
    <div className="p-5 h-screen">
      <Nav />
      <Header />
      <Routes>
        {isLoggin && <Route path="/plan" element={<Plan />} />}
        {isLoggin && <Route path="/recipes" element={<Recipes />} />}
        {isLoggin && <Route path="/products" element={<Products />} />}
        {isLoggin && <Route path="/shopping-list" element={<ShoppingList />} />}
        {isLoggin && <Route path="/tags" element={<Tags />} />}
        {isLoggin && <Route path="/settings" element={<Settings />} />}
        
      </Routes>
      <Footer />
    </div>
  );
};

export default Home;
