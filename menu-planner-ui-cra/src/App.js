import { Routes, Route } from "react-router-dom";

import Home from "./container/Home";
import MainSite from "./components/MainSite";
import ApiProvider from "./store/ApiProvider";

function App() {
  return (
    <>
      <ApiProvider>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/" element={<MainSite />} />
        </Routes>
      </ApiProvider>
    </>
  );
}

export default App;
