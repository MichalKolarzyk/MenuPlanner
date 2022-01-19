import React from "react";
import { Routes, Route } from 'react-router-dom';

import Home from "./container/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div className='p-5 h-screen'>
        <Nav />
        <Routes>
          <Route path='/*' element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
