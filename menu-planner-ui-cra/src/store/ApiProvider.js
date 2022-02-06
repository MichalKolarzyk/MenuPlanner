import React, { useState } from "react";
import ApiContext from "./ApiContext";

const ApiProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [authorizationMethod, setAuthorizationMethod] = useState(localStorage.getItem('authMethod'));
  const [baseUrl, setBaseUrl] = useState("http://localhost:5000");
  const [isBusy, setIsBusy] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const isLoggedIn = !!token;

  const setTokenHandler = (newToken) => {
    setToken(newToken);
    localStorage.setItem("token", newToken);
  };

  const setAuthorizationMethodHandler = (authMethod) => {
    setAuthorizationMethod(authMethod)
    localStorage.setItem("authMethod", authMethod);
  }

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
    setAuthorizationMethod: setAuthorizationMethodHandler,
    isLoggedIn : isLoggedIn,
    logout: logoutHandler,
    isBusy: isBusy,
    setIsBusy: setIsBusy,
    currentUser,
    setCurrentUser,
  };

  return (
    <ApiContext.Provider value={apiContext}>
      {props.children}
    </ApiContext.Provider>
  );
};

export default ApiProvider;
