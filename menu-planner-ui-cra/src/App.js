import { Routes, Route } from "react-router-dom";
import Home from "./container/Home";
import LoginPage from "./components/LoginPage";
import FormLayer from "./ui/layers/FormLayer";
import LayersProvider from "./store/LayersProvider";
import MessageLayer from "./ui/layers/MessageLayer";
import { useSelector } from "react-redux";
import RequireAuth from "./components/Requires/RequireAuth";

function App() {
  const isLoggedIn = useSelector((store) => store.connection.isLoggedIn);

  return (
    <LayersProvider>
      <MessageLayer />
      <FormLayer />
      <Routes>
        <Route
          path="/*"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </LayersProvider>
  );
}

export default App;
