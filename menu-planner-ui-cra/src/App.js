import React from "react";
import Home from "./container/Home";

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
        <Home />
      </div>
    </div>
  );
}

export default App;
