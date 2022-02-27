import React from "react";
import { Routes, Route } from "react-router-dom";

import bcg2 from "../assets/bcg2.jpg"

import Nav from "./Nav";
import Footer from "./Footer";
import Plan from "./Plan/Plan";
import Header from "./Header";
import Recipes from "./Recipes";
import Products from "./Products";
import ShoppingList from "./ShoppingList";
import Settings from "./Settings";
import PlanProvider from "./Plan/context/PlanProvider";
import RoutesConfig from "../configurations/RoutesConfig";

const HomePage = () => {
  return (
      <div className="relative w-full h-full">
        <img 
          src={bcg2} 
          alt="where is the background" 
          className="fixed w-full h-full object-cover "
        />
        <div className="relative w-full h-full top-0 right-0 bottom-0 left-0 p-5 bg-blackOverlay">
          <div className="px-0 sm:px-10 md:px-20 lg:px-40">
            <Nav />
            <Header />
              <Routes>
                <Route path={RoutesConfig.planPage} element={<PlanProvider><Plan /></PlanProvider>} />
                <Route path={RoutesConfig.recipesPage} element={<Recipes />} />
                <Route path={RoutesConfig.productsPage} element={<Products />} />
                <Route path={RoutesConfig.shoppingListPage} element={<ShoppingList />} />
                <Route path={RoutesConfig.settingsPage} element={<Settings />} />
              </Routes>
            <Footer/>
          </div>
        </div>
      </div>
  );
};

export default HomePage;
