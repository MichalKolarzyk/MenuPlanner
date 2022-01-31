import React from "react"

const ApiContext = React.createContext({
    baseUrl: "",
    setBaseUrl: (newUrl) => {},
    token: "",
    setToken: (newToken) => {},
    authorizationMethod: "",
    setAuthorizationMethod: (newAuthorizationMethod) => {},
    isLoggedIn: false,
    logout: () => {},
})

export default ApiContext;