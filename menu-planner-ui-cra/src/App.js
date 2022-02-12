import { Routes, Route } from "react-router-dom";
import { useContext } from "react";

import Home from "./container/Home";
import MainSite from "./components/MainSite";
import ApiProvider from "./store/ApiProvider";
import FormLayer from "./ui/layers/FormLayer";
import LayersProvider from "./store/LayersProvider";
import MessageLayer from "./ui/layers/MessageLayer";

function App() {
  return (
    <ApiProvider>
      <LayersProvider>
        <MessageLayer />
        <FormLayer />
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/" element={<MainSite />} />
        </Routes>
      </LayersProvider>
    </ApiProvider>
  );
}

export default App;
