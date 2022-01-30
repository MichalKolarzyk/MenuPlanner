import React, { useState } from "react";
import ApiContext from "./ApiContext";

const ApiProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [authorizationMethod, setAuthorizationMethod] = useState("");
  const [baseUrl, setBaseUrl] = useState("http://localhost:5000");

  const isLogginHandler = () => {
    if (token === "") {
      return false;
    }
    if (token === null) {
      return false;
    }
    if(token === undefined){
        return false;
    }
    return true;
  };

  const setTokenHandler = (newToken) => {
    setToken(newToken);
    localStorage.setItem("token", newToken);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const setBaseUrlHandler = (newUrl) => setBaseUrl(newUrl);

  const apiContext = {
    baseUrl: baseUrl,
    setBaseUrl: setBaseUrlHandler,
    token: token,
    setToken: setTokenHandler,
    authorizationMethod: authorizationMethod,
    setAuthorizationMethod: setAuthorizationMethod,
    isLoggin: isLogginHandler,
    logout: logoutHandler,
  };

  return (
    <ApiContext.Provider value={apiContext}>
      {props.children}
    </ApiContext.Provider>
  );
};

export default ApiProvider;
