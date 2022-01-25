import { Routes, Route } from 'react-router-dom';

import Home from "./container/Home";
import MainSite from "./components/MainSite";

function App() {

  return (
    <div>
      <div>
        <Routes>
          <Route path='/*' element={<Home />} />
          <Route path='/' element={<MainSite />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
