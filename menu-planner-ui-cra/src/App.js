import React from "react";
import Home from "./container/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"


function App() {
  return (
    <div>
      <div className='p-5 h-screen'>
        <Nav />
        <Home />
        <Footer />
      </div>
    </div>
  );
}

export default App;
