import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";

import Home from "./container/Home";
import MainSite from "./components/MainSite";
import ApiProvider from "./store/ApiProvider";
import ApiContext from "./store/ApiContext";

function App() {
  const apiContext = useContext(ApiContext);
  const isLoggin = apiContext.isLoggin();
  return (
    <>
      <ApiProvider>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/" element={<MainSite />} />
          {isLoggin && <Route path="*" element={<Navigate to="/plan" />}/>}
          {!isLoggin && <Route path="*" element={<Navigate to="/" />}/>}
        </Routes>
      </ApiProvider>
    </>
  );
}

export default App;
