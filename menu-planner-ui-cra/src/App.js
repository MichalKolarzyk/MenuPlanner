import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";

import Home from "./container/Home";
import MainSite from "./components/MainSite";
import ApiProvider from "./store/ApiProvider";
import ApiContext from "./store/ApiContext";
import Plan from "./components/Plan";

function App() {
  const apiContext = useContext(ApiContext);
  const isLoggedIn = apiContext.isLoggedIn;
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
