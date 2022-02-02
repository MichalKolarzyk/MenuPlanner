import { Routes, Route } from "react-router-dom";
import { useContext } from "react";

import Home from "./container/Home";
import MainSite from "./components/MainSite";
import ApiProvider from "./store/ApiProvider";
import ApiContext from "./store/ApiContext";

function App() {
  const apiContext = useContext(ApiContext);
  return (
    <ApiProvider>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/" element={<MainSite />} />
      </Routes>
    </ApiProvider>
  );
}

export default App;
