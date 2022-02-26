import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import FormLayer from "./ui/layers/FormLayer";
import LayersProvider from "./store/LayersProvider";
import MessageLayer from "./ui/layers/MessageLayer";
import RequireAuth from "./components/Requires/RequireAuth";
import RoutesConfig from "./configurations/RoutesConfig";

function App() {
  return (
    <LayersProvider>
      <MessageLayer />
      <FormLayer />
      <Routes>
        <Route
          path={RoutesConfig.homePage}
          element={
            <RequireAuth>
              <HomePage />
            </RequireAuth>
          }
        />
        <Route path={RoutesConfig.loginPage} element={<LoginPage />} />
      </Routes>
    </LayersProvider>
  );
}

export default App;
