import { Routes, Route } from "react-router-dom";
import Home from "./container/Home";
import LoginPage from "./components/LoginPage";
import FormLayer from "./ui/layers/FormLayer";
import LayersProvider from "./store/LayersProvider";
import MessageLayer from "./ui/layers/MessageLayer";

function App() {
  return (
      <LayersProvider>
        <MessageLayer />
        <FormLayer />
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </LayersProvider>
  );
}

export default App;
