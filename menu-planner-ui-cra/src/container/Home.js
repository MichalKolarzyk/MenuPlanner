import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

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

const Home = () => {
  const apiContext = useContext(ApiContext);
  const isLoggedIn = apiContext.isLoggedIn;

  return (
    <div className="p-5 h-screen">
      <Nav />
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
      {!isLoggedIn && <Navigate to="/"/>}
      <Footer />
    </div>
  );
};

export default Home;
